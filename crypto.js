
function getSelectedChbox(frm) {
  var selchbox = [];
  var inpfields = frm.getElementsByTagName('input');
  var nr_inpfields = inpfields.length;

  for(var i=0; i<nr_inpfields; i++) {
    if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) selchbox.push(inpfields[i].value);
  }
  return selchbox;
}

function generateJSON(el) {

  // Get selected FIAT

  var e = document.getElementById("fiat");
  var selectedOp = e.options[e.selectedIndex].value;
  var selectedFiat = fiat.filter(function( obj ) {
    return obj.ticker == selectedOp;
  });
  var selectedFiatObj = selectedFiat[0];
  console.log(selectedFiat);

  // Get selected cryptos
	var selection = getSelectedChbox(document.getElementById('form'));
	console.log(selection);

	//console.log(mainStruct.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions);
  var output = mainStruct;
  var coinArray = [];

	for (var i = 0; i < selection.length; i++) {

	  // Duplicate the cryptoElement and assign it to the coin
      let coin = Object.assign({}, cryptoElement);
      
      coin.BTTTriggerConfig = Object.assign({}, cryptoElement.BTTTriggerConfig);

      coin.BTTWidgetName = selection[i];

      //coin.BTTTriggerConfig.BTTTouchBarAppleScriptString = coin.BTTTriggerConfig.BTTTouchBarAppleScriptString.replace("**CRYPTO**", selection[i]);
      //coin.BTTTriggerConfig.BTTTouchBarAppleScriptString = coin.BTTTriggerConfig.BTTTouchBarAppleScriptString.replace("**FIAT**", selectedFiatObj.ticker);
      //coin.BTTTriggerConfig.BTTTouchBarAppleScriptString = coin.BTTTriggerConfig.BTTTouchBarAppleScriptString.replace("**FIATSYMB**", selectedFiatObj.symbol);
      
      coin.BTTOrder = i;
      
      // Enabling the below line induces overwriting reference so only the last iteration of the loop's string is produced
      coin.BTTTriggerConfig.BTTTouchBarAppleScriptString = coin.BTTTriggerConfig.BTTTouchBarAppleScriptString.replace("**CRYPTO**", coin.BTTWidgetName).replace("**FIAT**", selectedFiatObj.ticker).replace("**FIATSYMB**", selectedFiatObj.symbol);

      console.log(coin.BTTTriggerConfig.BTTTouchBarAppleScriptString);
      

      coinArray.push(coin);
	}

  // add the closing group element
  closeGroupElement.BTTOrder = selection.length;
  coinArray.push(closeGroupElement);

  output.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions = coinArray;

  // output the end result object to console
	console.log(output);
  // trigger download of end result object
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(output));
  el.setAttribute("href", "data:"+data);
  el.setAttribute("download", "data.json");
}

function loadData(){

  for(var i=0; i<coinJSON.length; i++) {
    var element = document.createElement("input");
    element.id = coinJSON[i].Name;
    element.type = "checkbox";
    element.value = coinJSON[i].Ticker;

    var text = document.createElement("label");
    text.setAttribute("for", coinJSON[i].Name);
    text.innerHTML = coinJSON[i].Name;

    var icon = document.createElement("img");
    icon.setAttribute("src", "data:image/png;base64, " + coinJSON[i].Icon);

    var br = document.createElement("br");

    document.getElementById('coins').appendChild(element);
    document.getElementById('coins').appendChild(icon);
    document.getElementById('coins').appendChild(text);
    document.getElementById('coins').appendChild(br);

  }

  for(var i=0; i<fiat.length; i++) {

    var option = document.createElement("option");
    option.value = fiat[i].ticker;
    option.innerHTML = fiat[i].name;

    document.getElementById('fiat').appendChild(option);

  }

}

