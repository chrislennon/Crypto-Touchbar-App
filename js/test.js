const coinJSON = require('../data/coins.js')
const fetch = require('node-fetch')

function getSelectedValue(array, key, value) {
    return array.filter((obj) => {
        return obj[key] === value;
    });
}

let dynCoinArr = [];

fetch('https://min-api.cryptocompare.com/data/all/coinlist')
    .then(res => res.json())
    .then(json => {
        let count = 0;
        let input = json.Data;
    
        for (let property in input) {
            if(input.hasOwnProperty(property)) {
            let customProperties = {
                "icon": 'img/TODO.svg',
                "color": '6CAAE5'
            };
            let showTopX = false;
            // TODO - this loading of coinJSON is nasty
            let customData = getSelectedValue(coinJSON.data(), 'Ticker', )[0];

            if (customData) {
                if (customData.ShowDefault) showTopX = true;
                customProperties = {
                    "icon": 'node_modules/cryptocoins-icons/SVG/' + customData.Icon + '.svg',
                    "color": customData.Colour
                }
            }
            dynCoinArr.push({
                "value" : input[property].Symbol,
                "label" : input[property].CoinName,
                "customProperties" : customProperties,
                "selected" : showTopX
            });
            count++;
           }
        }
        console.log(dynCoinArr);
    });

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://min-api.cryptocompare.com/data/all/coinlist');
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     let jsonData = JSON.parse(xhr.responseText);

//     let count = 0;
//     let input = jsonData.Data;

//     // Generate a values index using the date time value
//     // saves searching through values for each member of data
//     var indexes = values.map(coinJSON => +coinJSON.Ticker);
//     // Generate merged array
//     var merged = input.map(coinJSON => {
//     var index = indexes.indexOf(+coinJSON.Ticker); 
//     return {Ticker: coinJSON.Ticker, value: index > -1? values[index].value : obj.value};
//     });

//     console.log(merged);

//     // for (let property in input) {
//     //     if(input.hasOwnProperty(property)) {
//     //     let customProperties = {
//     //         "icon": 'img/TODO.svg',
//     //         "color": '6CAAE5'
//     //     };
//     //     let showTopX = false;
//     //     // TODO - this loading of coinJSON is nasty
//     //     let customData = getSelectedValue(new coinJSON.data(), 'Ticker', input[property].Symbol)[0];
//     //     if (customData) {
//     //         if (customData.ShowDefault) showTopX = true;
//     //         customProperties = {
//     //             "icon": 'node_modules/cryptocoins-icons/SVG/' + customData.Icon + '.svg',
//     //             "color": customData.Colour
//     //         }
//     //     }
//     //     dynCoinArr.push({
//     //         "value" : input[property].Symbol,
//     //         "label" : input[property].CoinName,
//     //         "customProperties" : customProperties,
//     //         "selected" : showTopX
//     //     });
//     //     count++;
//     //    }
//     // }
//     return dynCoinArr
//   }
//   else {
//     console.log('Request failed.  Returned status of ' + xhr.status);
//   }
// };
// xhr.send();


