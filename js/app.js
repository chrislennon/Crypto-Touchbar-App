// Control for ommunication between page and generator
import Utils from './utils.js';
import Page from './page.js';
import Generator from './generator.js';
require('flatpickr/dist/flatpickr.css');
function exportTemplate(el, method){

    let cryptoPreview = document.getElementsByClassName('touchbar-element crypto');

    let selectedCryptos = [];

    // Since cryptoElements returns a HTMLCollection, do this hack to get the Array elements.
    [].forEach.call(cryptoPreview, (cryptoItem) => {
        selectedCryptos.push(cryptoItem.dataset.ticker);
    });

    let selectedValues = Utils.getSelectedValues(),
        selectedFiatObj = selectedValues.selectedFiatObj[selectedValues.selectedFiatObj.selectedIndex],
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

    Generator.loadTemplate(function(output){
        let dataDownload = document.createElement('a');

        if (method == 'json') {
            const data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(output));
            dataDownload.setAttribute('href', 'data:' + data);
            dataDownload.setAttribute('download', 'Crypto-Touchbar-App-' + selectedFiatObj.value + '.json');
        }
        else if (method == 'direct'){
            const data = btoa(unescape(encodeURIComponent(JSON.stringify(output))));
            dataDownload.setAttribute('href', 'btt://jsonimport/' + data);
        }
        dataDownload.click();
    });
}


// On Ready
document.addEventListener('DOMContentLoaded', (e) => {
    let exportJsonButton = document.getElementById("exportJSON");
    let directExportJsonButton = document.getElementById("directExportJSON");
    
    exportJsonButton.addEventListener("click", function(e){
        e.preventDefault();
        exportTemplate(exportJsonButton, 'json');
    }, false);

    directExportJsonButton.addEventListener("click", function(e){
        e.preventDefault();
        exportTemplate(directExportJsonButton, 'direct');
    }, false);
    Page.loadData();
});

