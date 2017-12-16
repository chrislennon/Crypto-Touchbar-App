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

There are some small caveats running this locally for development:

- SVG (crypto icons) are pulled in via a submodule to the `img/cryptocoins/` directory, depending on your client you may need to force this download to happen using `git submodule update --init --recursive`
- After cloning (including submodules) run `npm install` to install a http-web-server you can then run `npm start` the application should then be available at http://127.0.0.1:8080
