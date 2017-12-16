This application is published to GitHub pages at the following location: https://chrislennon.github.io/Crypto-Touchbar-App/

This repository provides a web application to allow users to build crypto currency touchbar elements compatible for import to [BetterTouchTool](https://www.boastr.net/). 

Currently scripts within BTT require [jq](https://stedolan.github.io/jq/) to parse the response from the API. The location of the jq binary is hardcoded to `/usr/local/bin/jq`. Futher work will be done to parse this with OS native tools.

Icons used within this tool are the work of [AllienWorks](https://github.com/allienworks/cryptocoins).

This application was originally inspired by another project by [Ryan-Gordon](https://github.com/Ryan-Gordon/Crypto-Touchbar) - I used it for a while but for tired of manually configuring each element, I seen benifit in providing an application to offload this work.

Currently handles the top 20 currencies taken from [coinmarketcap](https://coinmarketcap.com/all/views/all/) on 03/12/2017.