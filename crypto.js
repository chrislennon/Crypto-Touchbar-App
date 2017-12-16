function getSelectedChbox(frm) {
  var selchbox = [];
  var inpfields = frm.getElementsByTagName('input');
  var nr_inpfields = inpfields.length;

  for(var i=0; i<nr_inpfields; i++) {
    if(inpfields[i].type == 'checkbox' && inpfields[i].checked == true) selchbox.push(inpfields[i].value);
  }
  return selchbox;
}

function addCrypto(elm)
{
  if (elm.checked) 
  {
    var selectedCrypto = coinJSON.filter(function( obj ) {
      return obj.Ticker == elm.value;
    });
    var selectedCryptoObj = selectedCrypto[0];

    var e = document.getElementById("fiat");
    var selectedOp = e.options[e.selectedIndex].value;
    var selectedFiat = fiat.filter(function( obj ) {
      return obj.ticker == selectedOp;
    });
    var selectedFiatObj = selectedFiat[0];

    var touchArea = document.getElementById('crypto-touchbar-area');
    var cryptoTouch = document.createElement("div");
    cryptoTouch.setAttribute("id", elm.value + "-touch");
    cryptoTouch.className = "touchbar-element crypto";
    touchArea.appendChild(cryptoTouch);

    var imgTouch = document.createElement("img");
    imgTouch.className = "touchbar-crypto-icon";
    imgTouch.setAttribute("id", elm.value + "-touch-icon");
    imgTouch.setAttribute("src", "img/cryptocoins/SVG/" + selectedCryptoObj.Icon + ".svg");
    imgTouch.width = '22';
    imgTouch.height = '22';
    cryptoTouch.appendChild(imgTouch);

    var text = document.createElement("span");
    text.innerHTML = selectedFiatObj.symbol + " 000.00";
    cryptoTouch.appendChild(text);

  } else {
      var cryptoTouch = document.getElementById(elm.value + "-touch");
      cryptoTouch.parentNode.removeChild(cryptoTouch);
  }
}

function generateJSON(el) {

  // Get selected FIAT

  var e = document.getElementById("fiat");
  var selectedOp = e.options[e.selectedIndex].value;
  var selectedFiat = fiat.filter(function( obj ) {
    return obj.ticker == selectedOp;
  });
  var selectedFiatObj = selectedFiat[0];

  // Get selected cryptos
  var selection = getSelectedChbox(document.getElementById('form'));

  var output = mainStruct;
  var coinArray = [];

  for (var i = 0; i < selection.length; i++) {

    // Duplicate the cryptoElement and assign it to the coin
      let coin = Object.assign({}, cryptoElement);
      
      coin.BTTTriggerConfig = Object.assign({}, cryptoElement.BTTTriggerConfig);

      coin.BTTWidgetName = selection[i];

      coin.BTTOrder = i;

      // get canvas svg and convert it to png base64 for output to BTT

      var base64PNG = document.getElementById(selection[i]).toDataURL('image/png');      
      base64PNG = base64PNG.replace("data:image/png;base64,","");

      coin.BTTIconData = base64PNG;

      coin.BTTTriggerConfig.BTTTouchBarAppleScriptString = coin.BTTTriggerConfig.BTTTouchBarAppleScriptString
      .replace("**CRYPTO**", coin.BTTWidgetName).replace("**FIAT**", selectedFiatObj.ticker).replace("**FIATSYMB**", selectedFiatObj.symbol);

      coinArray.push(coin);
  }

  // add the closing group element
  closeGroupElement.BTTOrder = selection.length;
  coinArray.push(closeGroupElement);

  output.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions = coinArray;
  output.BTTPresetContent[0].BTTTriggers[0].BTTIconData = selectedFiatObj.icon;

  // trigger download of end result object
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(output));
  el.setAttribute("href", "data:"+data);
  el.setAttribute("download", "data.json");
}

function loadData(){

  for(var i=0; i<coinJSON.length; i++) {

    var cryptoSelector = document.createElement("div");
    var element = document.createElement("input");
    element.id = coinJSON[i].Name;
    element.type = "checkbox";
    element.value = coinJSON[i].Ticker;
    element.setAttribute("onChange", "addCrypto(this);");

    var text = document.createElement("label");
    text.setAttribute("for", coinJSON[i].Name);
    text.innerHTML = coinJSON[i].Name;

    var icon = document.createElement("img");
    icon.setAttribute("src", "img/cryptocoins/SVG/" + coinJSON[i].Icon + ".svg");
    icon.width = '22';
    icon.height = '22';
    
    cryptoSelector.appendChild(element)
    cryptoSelector.appendChild(icon)
    cryptoSelector.appendChild(text);
    document.getElementById('coins').appendChild(cryptoSelector);

    // add svgs to hidden canvas so they can be exported to base64 png for BTT
    var iconCanv = document.createElement("canvas");
    canvg(iconCanv, "img/cryptocoins/SVG/" + coinJSON[i].Icon + ".svg", { ignoreMouse: true, ignoreAnimation: true});
    iconCanv.id = coinJSON[i].Ticker;
    document.getElementById('canvas-area').appendChild(iconCanv);

  }

  for(var i=0; i<fiat.length; i++) {

    var option = document.createElement("option");
    option.value = fiat[i].ticker;
    option.innerHTML = fiat[i].name;

    document.getElementById('fiat').appendChild(option);

  }

}
