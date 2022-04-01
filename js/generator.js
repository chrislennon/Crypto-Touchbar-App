// Control and logic for the code to generate appropriate output

import Page from './page.js';
import BTTTouchBarSchema from '../templates/BTTTouchBarSchema.js'
import BTTNotchBarSchema from '../templates/BTTNotchBarSchema.js'

export default {
    loadTemplate: loadTemplate
}

const TriggerTypeNotchBar = 'BTTTriggerTypeHTMLBar';
const TriggerTypeTouchBar = 'BTTTriggerTypeTouchBar';


function clearTempSVGs(){
    // Purge all Canvas SVGs after Export
    let myNode = document.getElementById("canvas-area");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function loadTemplate(triggerType, templateType, callback) {
    let template = 'templates/crypto_price.py'
    if (templateType == 'python3') {
        template = 'templates/crypto_price3.py'
    }
    // Get external template with fetch
    fetch(template)
    .then(
        response => response.text()
    )
    .then(function(response) {
        Mustache.parse(response);
        generateJSON(response, triggerType, templateType, function(d){
            return callback(d);
        });
        
    });  
}

function generateJSON(template, triggerType, templateType, cb) {
    let schemaToUse = triggerType === TriggerTypeNotchBar ? BTTNotchBarSchema : BTTTouchBarSchema;

    const userData = Page.getSelectedValues();
    
    let output = new schemaToUse.preset(),
        coinArray = [];

    userData.selectedCoins.forEach((item, i) => {
        let coin = new schemaToUse.widget(),
        iconCanv = document.createElement('canvas'),
        iconSVG = document.getElementById(item+'-touch-icon').outerHTML;

        // Add svgs to hidden canvas so they can be exported to base64 png for BTT
        canvg(iconCanv, iconSVG, {
            ignoreMouse: true,
            ignoreAnimation: true
        });
        iconCanv.id = item;
        document.getElementById('canvas-area').appendChild(iconCanv);

        coin.BTTWidgetName = item;
        coin.BTTOrder = i;

        // Get and set element colour
        let coinColour = document.getElementById(item + '-colour').style.backgroundColor;
        let rgbVals = coinColour.match(/\d+/g);

        coin.BTTTriggerConfig.BTTTouchBarButtonColor = rgbVals.join(', ') + ', 255';

        // Get canvas svg and convert it to png base64 for output to BTT
        let base64PNG = document.getElementById(item).toDataURL('image/png');
        base64PNG = base64PNG.replace('data:image/png;base64,', '');

        coin.BTTIconData = base64PNG;

        if (templateType == 'python3') {
            coin.BTTShellScriptWidgetGestureConfig = "\/usr\/bin\/python3:::-c"
        }

        let extraOptions = 'False';
        if (userData.apiSelector.dataset.apitype == 'historical') {
            extraOptions = '&limit=1&aggregate=1&toTs=' + userData.dateTimeSelector.value;
        }
        
        let data = {
            coin_ticker: coin.BTTWidgetName,
            fiat_ticker: userData.selectedFiatObj.ticker,
            fiat_symbol: userData.selectedFiatObj.symbol,
            format: userData.outputFormat,
            literalRound: userData.literalRound,
            percentageRound: userData.percentageRound,
            percent: userData.userPercentageModifer,
            output_type: userData.formatSelector,
            apiSelector: userData.apiSelector.dataset.apitype,
            extraOptions: extraOptions,
            offline_cache: userData.cacheBool
        };

        coin.BTTTriggerConfig.BTTTouchBarAppleScriptString = Mustache.render(template, data);

        coin.BTTTriggerConfig.BTTTouchBarScriptUpdateInterval = parseInt(userData.refreshTimer);

        coinArray.push(coin);
    });

    if (userData.groupBool) {
        const closeGroup = new schemaToUse.closeWidget();
        closeGroup.BTTOrder = userData.selectedCoins.length;
        coinArray.push(closeGroup);
        output.BTTPresetContent[0].BTTTriggers[0].BTTAdditionalActions = coinArray;
        output.BTTPresetContent[0].BTTTriggers[0].BTTIconData = userData.selectedFiatObj.icon;

        if (userData.apiSelector.dataset.apitype == 'historical') {

            output.BTTPresetContent[0].BTTTriggers[0].BTTTouchBarButtonName = userData.dateTimeSelectorString.value;
        }
    }
    else {
        output.BTTPresetContent[0].BTTTriggers = coinArray;
    }

    output.BTTPresetName = output.BTTPresetName + "-" + userData.selectedFiatObj.ticker;

    clearTempSVGs();

    return cb(output);
}
