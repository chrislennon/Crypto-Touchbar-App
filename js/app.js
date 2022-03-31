// Control for ommunication between page and generator

import Page from './page.js';
import Generator from './generator.js';


function exportTemplate(el, triggerType, method, templateType){
    let selectedValues = Page.getSelectedValues(),
        selectedFiatObj = selectedValues.selectedFiatObj,
        selection = selectedValues.selectedCoins,
        api_type = selectedValues.apiSelector.dataset.apitype,
        dateTimeSelector = selectedValues.dateTimeSelector;

    if (selection.length == 0){
        alert('No coins selected');
        return;
    }

    if (api_type == 'historical'){
        if (!dateTimeSelector.value) {
            alert('No date/time selected!');
            return;
        }
    }

    Generator.loadTemplate(triggerType, templateType, function(output){
        let dataDownload = document.createElement('a');

        if (method == 'json') {
            const data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(output));
            dataDownload.setAttribute('href', 'data:' + data);
            dataDownload.setAttribute('download', 'Crypto-Touchbar-App-' + selectedFiatObj.ticker + '.bttpreset');
        }
        else if (method == 'direct'){
            const data = btoa(unescape(encodeURIComponent(JSON.stringify(output))));
            dataDownload.setAttribute('href', 'btt://jsonimport/' + data);
        }
        dataDownload.click();
    });
}


// On Ready
document.addEventListener('DOMContentLoaded', () => {

    let exportJsonButton = document.getElementById("exportJSON");
    let directExportJsonButton = document.getElementById("directExportJSON");
    exportJsonButton.addEventListener("click", function(e){
        e.preventDefault();
        const selectedTriggerType = document.getElementById("triggerType").value;
        const selectedTemplateType = document.getElementById("templateType").value;
        exportTemplate(exportJsonButton, selectedTriggerType, 'json', selectedTemplateType);
    }, false);

    directExportJsonButton.addEventListener("click", function(e){
        e.preventDefault();
        const selectedTriggerType = document.getElementById("triggerType").value;
        const selectedTemplateType = document.getElementById("templateType").value;
        exportTemplate(directExportJsonButton, selectedTriggerType, 'direct', selectedTemplateType);
    }, false);

    Page.loadData();
});

