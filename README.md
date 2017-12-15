### NEW APPROACH

The code within the generator branch is work in progress. The approach is now to provide a webpage to allow user configuration of a custom importable json.

Currently the usage of the output code (within BetterTouchTool) requires [jq](https://stedolan.github.io/jq/) to parse the response from the API. The location of the jq binary is hardcoded to `/usr/local/bin/jq`. Futher work will be done to parse this with OS native tools.

This will allow a single structure, per crypto to be held
```
{
 "name": "Bitcoin",
 "Ticker": "BTC",
 "Icon": "..."
}
```
The webpage can then be generated from this config.

The user will then be able to select which coins they wish and which FIAT currency to compare to.

They can then export a JSON file compatible for import to BetterTouchTool

Icons used within this tool are the work of [AllienWorks](https://www.iconfinder.com/martin.allien) on iconfinder in the [Cryptocoins](https://www.iconfinder.com/iconsets/cryptocoins) collection under the [Creative Commons 3.0 License](https://creativecommons.org/licenses/by/3.0/)

The work in this repo was originally inspired by another project by [Ryan-Gordon](https://github.com/Ryan-Gordon/Crypto-Touchbar), but I got sick of changing the configuration within BTT and thought a dynamic webtool would bring further value.

### OLD README BELOW


The files hosted within this repo are the raw scripts used behind the scenes within [BetterTouchTool](https://www.boastr.net/). 

If you are looking for only the importable version please check the [releases tab](https://github.com/chrislennon/Crypto-Toolbar/releases).

Below are a list of the currencies that are currently available within this tool.

Top 20 currencies taken from [coinmarketcap](https://coinmarketcap.com/all/views/all/) on 03/12/2017:

| Currency | Ticker | Scripts | Icon |
| ------------- |:-------------:| :-----:| :-----:|
| Bitcoin | BTC | [here](./BTC/) | [here](https://www.iconfinder.com/icons/1175252/bitcoin_btc_cryptocurrency_icon#size=24) |
| Ethereum | ETH | [here](./ETH/) | [here](https://www.iconfinder.com/icons/1175230/eth_ether_ethereum_icon#size=24) |
| Bitcoin Cash | BCH | TODO | TODO |
| Ripple | XRP | TODO | TODO |
| Dash | DASH | TODO | TODO |
| Litecoin | LTC | [here](./LTC/) | [here](https://www.iconfinder.com/icons/1175271/litecoin_ltc_icon#size=24) |
| Bitcoin Gold | BTG | TODO | TODO |
| IOTA | MIOTA | TODO | TODO |
| Cardano | ADA | TODO | TODO |
| Monero | XMR | [here](./XMR/) | [here](https://www.iconfinder.com/icons/1175356/monero_xmr_icon#size=24) |
| Ethereum Classic | ETC | TODO | TODO |
| NEM | XEM | TODO | TODO |
| NEO | NEO | TODO | TODO |
| EOS | EOS | TODO | TODO |
| Stellar Lumens | XLM | TODO | TODO |
| BitConnect | BCC | TODO | TODO |
| OmiseGO | OMG | TODO | TODO |
| Qtum | QTUM | TODO | TODO |
| Zcash | ZEC | TODO | TODO |
| Lisk | LSK | TODO | TODO |