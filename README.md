# Info
This application is published to GitHub pages at the following location: https://chrislennon.github.io/Crypto-Touchbar-App/

This repository provides a web application to allow users to build crypto currency touchbar elements compatible for import to [BetterTouchTool](https://www.boastr.net/). 

Currently scripts within BTT require [jq](https://stedolan.github.io/jq/) to parse the response from the API. The location of the jq binary is hardcoded to `/usr/local/bin/jq`. Future work will be done to parse this with OS native tools.


## Acknowledgements
The prices are received from [CryptoCompare's](https://www.cryptocompare.com/) API - documentation available [here](https://www.cryptocompare.com/api/#)

Icons used within this tool are the work of [AllienWorks](https://github.com/allienworks/cryptocoins).

This application was originally inspired by another project by [Ryan-Gordon](https://github.com/Ryan-Gordon/Crypto-Touchbar) - I used it for a while but got tired of manually configuring each element, I seen benefit in providing an application to offload this work.

Currently handles the top 40 currencies taken from [coinmarketcap](https://www.cryptocompare.com/coins/#/usd) on 18/12/2017.

## Local Development

This is a standalone web application which is published already via [GitHub Pages](https://chrislennon.github.io/Crypto-Touchbar-App/).

To run this application locally:

- run `npm install`
- run `npm start`
- browse to `http://127.0.0.1:8080`

Other notes:

- SVG (crypto icons) are pulled in via an [npm package](https://www.npmjs.com/package/cryptocoins-icons) and consumed from `node_modules/cryptocoins-icons/` directory.
- Currency fonts are currently hardcoded png (base64) for output to BTT.
- You can publish to your own fork's `gh-pages` branch by running `npm run deploy`

## Suggestions & Donations

Please raise an issue in the [GitHub Issues](https://github.com/chrislennon/Crypto-Touchbar-App/issues) page.

If you found this useful and wish to donate below are some address (if you wish to donate in another coin just raise an issue):

- Bitcoin
`1wSxFJYM9CiCvSjdvpBnL13MUGyYE5bL9`
- Bitcoin Cash
`1Q1SzrPWhtRrQqnS4nb9CzZnXsDPz9fNU7`
- Dash
`XtSDfocv9iUWhsoKF4BD96JRwBq54EVMja`
- Dogecoin
`D6aHYUfVhieAw284pGTJ1QroVcYp7YKwsL`
- Etherum
`0x43bC875ABF4330f032206C54A055CD24A1Ec13de`
- Litecoin
`LZQs2itSYtMSUfh8GZayABEtGbYZEB1Dsx`
- Monero
`48zkMS1RkNe9Z4bkGCH2eZND2s5MMmiotThMLkYfhskbashPXtYLb1J9JsqEVffEA6K1AtnVhaxJTHb1pPgms66nB9NzxyT`