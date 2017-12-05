
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

	console.log(mainStruct.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions);

	for (i = 0; i < selection.length; i++) { 

		var crypto = cryptoElement;
    console.log(selection[i]);
		crypto.BTTWidgetName = selection[i];
    console.log(crypto.BTTWidgetName);

		mainStruct.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions.push(crypto);

	}
	mainStruct.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions.push(closeGroupElement);
	console.log(mainStruct);
	var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(mainStruct));
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

