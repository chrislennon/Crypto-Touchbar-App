function getSelectedCheckbox(form) {
    const inputFields = form.getElementsByTagName('input');

    let selectedCheckboxes = [];

    // Since cryptoElements returns a HTMLCollection, do this hack to get the Array elements.
    [].forEach.call(inputFields, (inputField) => {
        if (inputField.type === 'checkbox' && inputField.checked === true) {
            selectedCheckboxes.push(inputField.value);
        }
    });
    return selectedCheckboxes;
}

function updatePreviewColour(elm) {
    const id = elm.styleElement.id,
        cryptoColour = document.getElementById(id),
        cryptoTouch = document.getElementById(id.replace('-colour', '-touch'));

    if (cryptoTouch) {
        cryptoTouch.style.backgroundColor = cryptoColour.style.backgroundColor;
    }
}

function updatePreviewFiat() {
    const selectedFiatObj = getSelectedFiatValueObject(),
        cryptoElements = document.getElementsByClassName('crypto');

    // Since cryptoElements returns a HTMLCollection, do this hack to get the Array elements.
    [].forEach.call(cryptoElements, (crypto) => {
        let touchText = crypto.getElementsByTagName('span')[0].innerHTML;
        touchText = selectedFiatObj.symbol + ' ' + touchText.substring(touchText.indexOf(' ') + 1);

        crypto.getElementsByTagName('span')[0].innerHTML = touchText;
    });
}

function getSelectedFiatOption() {
    const fiat = document.getElementById('fiat');

    return fiat.options[fiat.selectedIndex].value;
}

function getSelectedFiatValueObject() {
    const selectedOp = getSelectedFiatOption();

    return getSelectedValue(new fiatJSON(), 'ticker', selectedOp)[0];
}

function getSelectedValue(array, key, value) {
    return array.filter((obj) => {
        return obj[key] === value;
    });
}

function addCrypto(event) {
    const target = event.target,
        targetValue = target.value;

    if (target.checked) {
        const selectedCrypto = getSelectedValue(coinJSON, 'Ticker', targetValue),
            selectedCryptoObj = selectedCrypto[0],
            selectedFiatObj = getSelectedFiatValueObject(),
            touchArea = document.getElementById('crypto-touchbar-area');

        let cryptoTouch = document.createElement('div'),
            targetColour = document.getElementById(targetValue + '-colour'),
            imgTouch = document.createElement('img'),
            text = document.createElement('span');

        cryptoTouch.setAttribute('id', targetValue + '-touch');
        cryptoTouch.className = 'touchbar-element crypto';

        cryptoTouch.style.backgroundColor = targetColour.style.backgroundColor;
        touchArea.appendChild(cryptoTouch);

        imgTouch.className = 'touchbar-crypto-icon';
        imgTouch.setAttribute('id', targetValue + '-touch-icon');
        imgTouch.setAttribute('src', 'node_modules/cryptocoins-icons/SVG/' + selectedCryptoObj.Icon + '.svg');
        imgTouch.style.width = '22';
        imgTouch.style.height = '22';
        cryptoTouch.appendChild(imgTouch);

        text.innerHTML = selectedFiatObj.symbol + ' 000.00';
        cryptoTouch.appendChild(text);
    } else {
        const cryptoTouch = document.getElementById(targetValue + '-touch');

        cryptoTouch.parentNode.removeChild(cryptoTouch);
    }
}

function generateJSON(el) {
    const selectedFiatObj = getSelectedFiatValueObject(),

        // Get selected cryptos
        selection = getSelectedCheckbox(document.getElementById('form')),

        // Get script refresh interval
        refreshTimer = document.getElementById('refreshInterval').innerHTML,

        // Get value of group toggle box
        groupBool = document.getElementById('groupcheckbox').checked,

        closeGroup = new closeGroupElement();

    let output = new mainStruct(),
        coinArray = [];

    selection.forEach((item, i) => {
        let coin = new cryptoElement();

        coin.BTTWidgetName = item;
        coin.BTTOrder = i;

        // Get and set element colour
        let coinColour = document.getElementById(item + '-colour').style.backgroundColor;
        let rgbVals = coinColour.match(/\d+/g);

        coin.BTTTriggerConfig.BTTTouchBarButtonColor = rgbVals.join(', ') + ', 255';

        // get canvas svg and convert it to png base64 for output to BTT
        let base64PNG = document.getElementById(item).toDataURL('image/png');
        base64PNG = base64PNG.replace('data:image/png;base64,', '');

        coin.BTTIconData = base64PNG;

        coin.BTTTriggerConfig.BTTTouchBarAppleScriptString = coin.BTTTriggerConfig.BTTTouchBarAppleScriptString
            .replace(/\*\*CRYPTO\*\*/g, coin.BTTWidgetName)
            .replace(/\*\*FIAT\*\*/g, selectedFiatObj.ticker)
            .replace(/\*\*FIATSYMB\*\*/g, selectedFiatObj.symbol);

        coin.BTTTriggerConfig.BTTTouchBarScriptUpdateInterval = parseInt(refreshTimer);

        coinArray.push(coin);
    });

    // add the closing group element
    closeGroup.BTTOrder = selection.length;

    if (groupBool) {
        coinArray.push(closeGroup);
        output.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions = coinArray;
        output.BTTPresetContent[0].BTTTriggers[0].BTTIconData = selectedFiatObj.icon;
    }
    else {
        output.BTTPresetContent[0].BTTTriggers = coinArray;
    }

    output.BTTPresetName = output.BTTPresetName + "-" +selectedFiatObj.ticker;

    // trigger download of end result object
    const data = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(output));

    el.setAttribute('href', 'data:' + data);
    el.setAttribute('download', 'Crypto-Touchbar-App-' + selectedFiatObj.ticker + '.json');
}

function loadData() {
    const dropdown = document.getElementById('fiat'),
        slider = document.getElementById('refreshSlider'),
        output = document.getElementById('refreshInterval');

    coinJSON.forEach((coin) => {
        const cryptoSelector = document.createElement('div'),
            element = document.createElement('input'),
            text = document.createElement('label'),
            colour = document.createElement('button'),
            icon = document.createElement('img'),
            iconCanv = document.createElement('canvas');

        element.type = 'checkbox';
        element.value = coin.Ticker;
        element.addEventListener('change', addCrypto);

        text.setAttribute('for', coin.Name);
        text.innerHTML = coin.Name;

        colour.className = "jscolor {onFineChange:'updatePreviewColour(this)',valueElement:null,value:'f38208'}";
        colour.style.width = '20';
        colour.style.height = '20';
        colour.id = coin.Ticker + '-colour';

        icon.className = 'touchbar-crypto-icon';
        icon.setAttribute('src', 'node_modules/cryptocoins-icons/SVG/' + coin.Icon + '.svg');
        icon.style.width = '22';
        icon.style.height = '22';

        cryptoSelector.appendChild(element);
        cryptoSelector.appendChild(icon);
        cryptoSelector.appendChild(text);
        cryptoSelector.appendChild(colour);
        document.getElementById('coins').appendChild(cryptoSelector);

        // add svgs to hidden canvas so they can be exported to base64 png for BTT
        canvg(iconCanv, 'node_modules/cryptocoins-icons/SVG/' + coin.Icon + '.svg', {
            ignoreMouse: true,
            ignoreAnimation: true
        });
        iconCanv.id = coin.Ticker;
        document.getElementById('canvas-area').appendChild(iconCanv);

    });
    dropdown.addEventListener('change', updatePreviewFiat);

    new fiatJSON().forEach((currency) => {
        let option = document.createElement('option');

        option.value = currency.ticker;
        option.innerHTML = currency.name;
        dropdown.appendChild(option);
    });

    // enable colour picker on dynamically generated inputs
    jscolor.installByClassName('jscolor');

    // set up slider for refresh value
    output.innerHTML = slider.value;

    slider.addEventListener('input', (inputEvent) => {
        output.innerHTML = event.target.value;
    });

    // Hide loading text
    document.getElementById('loading').style.display = 'none';

}
