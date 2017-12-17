# Info
This application is published to GitHub pages at the following location: https://chrislennon.github.io/Crypto-Touchbar-App/

This repository provides a web application to allow users to build crypto currency touchbar elements compatible for import to [BetterTouchTool](https://www.boastr.net/). 

Currently scripts within BTT require [jq](https://stedolan.github.io/jq/) to parse the response from the API. The location of the jq binary is hardcoded to `/usr/local/bin/jq`. Future work will be done to parse this with OS native tools.


## Acknowledgements
The prices are received from [CryptoCompare's](https://www.cryptocompare.com/) API - documentation available [here](https://www.cryptocompare.com/api/#)

Icons used within this tool are the work of [AllienWorks](https://github.com/allienworks/cryptocoins).

This application was originally inspired by another project by [Ryan-Gordon](https://github.com/Ryan-Gordon/Crypto-Touchbar) - I used it for a while but got tired of manually configuring each element, I seen benefit in providing an application to offload this work.

Currently handles the top 20 currencies taken from [coinmarketcap](https://coinmarketcap.com/all/views/all/) on 03/12/2017.

# Contribution & Development

This is a standalone web application which is published already via [GitHub Pages](https://chrislennon.github.io/Crypto-Touchbar-App/).

To run this application locally:

- run `npm install`
- run `npm start`
- browse to `http://127.0.0.1:8080`

Other notes:

- SVG (crypto icons) are pulled in via an [npm package](https://www.npmjs.com/package/cryptocoins-icons) and consumed from `node_modules/cryptocoins-icons/` directory.
- Currency fonts are currently hardcoded png (base64) for output to BTT.
- You can publish to your own fork's `gh-pages` branch by running `npm run deploy`