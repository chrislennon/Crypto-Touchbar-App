export default {
    getSelectedValues: getSelectedValues,
    filterForValue: filterForValue
}

function filterForValue(array, key, value) {
    return array.filter((obj) => {
        return obj[key] === value;
    });
}


function buildStringFormat() {
    let outputFormat = '';
    let commaFormat = document.getElementById('comma-separate'),
        decimalFormat = document.querySelector('input[name="decimal-count"]:checked');

    if (commaFormat.checked){
        outputFormat += ",";
    }
    if (decimalFormat.dataset.count != '∞') {
       outputFormat += "." + decimalFormat.dataset.count + "f";
    }

    if (outputFormat != '') {
       outputFormat = ":0" + outputFormat;
    }

    outputFormat = "{" + outputFormat + "}";
    return outputFormat;
}

function getSelectedValues() {
    let cryptoPreview = document.getElementsByClassName('touchbar-element crypto');

    let selectedCryptos = [];

    // Since cryptoElements returns a HTMLCollection, do this hack to get the Array elements.
    [].forEach.call(cryptoPreview, (cryptoItem) => {
        selectedCryptos.push(cryptoItem.dataset.ticker);
    });

    return {
        selectedFiatObj: document.getElementById('fiat'),
        selectedCoins: selectedCryptos,
        outputFormat: buildStringFormat(),
        literalRound: document.querySelector('input[name="literal-round"]:checked').dataset.count,
        percentageRound: document.querySelector('input[name="percentage-round"]:checked').dataset.count,
        refreshTimer: document.getElementById('refreshInterval').value,
        groupBool: document.getElementById('groupcheckbox').checked,
        apiSelector: document.querySelector('input[name="api-type"]:checked'),
        formatSelector: document.querySelector('input[name="variance-type"]:checked').dataset.variance,
        dateTimeSelector: document.getElementById('flatpicker-output'),
        dateTimeSelectorString: document.getElementById('flatpicker-output-string'),
        userPercentageModifer: parseFloat(document.getElementById('user-percentage').value / 100),
        cacheBool: document.getElementById('cachecheckbox').checked
    }
}
