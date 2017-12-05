
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
	selection = getSelectedChbox(document.getElementById('form'))
	console.log(selection);

	//console.log(mainStruct.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions);
  var output = mainStruct;
  var coinArray = [];

	for (var i = 0; i < selection.length; i++) { 

    function addCoin(ticker) {
      var coin = cryptoElement;
      coin.BTTWidgetName = ticker;
      console.log(coin);
      coinArray.push(coin);
    }

    addCoin(selection[i]);
		
	}

  console.log(coinArray);

  //coinArray.push(closeGroupElement);

  output.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions = coinArray;
	
	console.log(output);
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

    var br = document.createElement("br");

    document.getElementById('coins').appendChild(element);
    document.getElementById('coins').appendChild(text);
    document.getElementById('coins').appendChild(br);

  }  

}

