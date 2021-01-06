#!/usr/bin/python
# -*- coding: utf-8 -*-

# Please submit any issues to 
# https://github.com/chrislennon/Crypto-Touchbar-App/issues 

from json import load
from urllib2 import urlopen
from urllib2 import URLError

coin_ticker     = "{{coin_ticker}}"    if "{{coin_ticker}}"    else "BTC"
fiat_ticker     = "{{fiat_ticker}}"    if "{{fiat_ticker}}"    else "USD"
fiat_symbol     = "{{fiat_symbol}}"    if "{{fiat_symbol}}"    else "$"
num_format      = "{{format}}"         if "{{format}}"         else "{}"
output_type     = "{{output_type}}"    if "{{output_type}}"    else "mktcap"
api_type        = "{{apiSelector}}"    if "{{apiSelector}}"    else "live"
extraOptions    = "{{{extraOptions}}}" if "{{{extraOptions}}}" else "&limit=1&aggregate=1&toTs=1514376000"
offline_cache   = "{{offline_cache}}"  if "{{offline_cache}}"  else "false"

# Are these cast really needed?
mod_percent     = float("{{percent}}") if "{{percent}}"[0] != "{" else 0.0
literalRound    = int("{{literalRound}}") if "{{literalRound}}"[0] != "{" else 0
percentageRound = int("{{percentageRound}}") if "{{percentageRound}}"[0] != "{" else 0

try:
    if api_type == "live":

        URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms={0}&tsyms={1}".format(coin_ticker, fiat_ticker)
        results = load(urlopen(URL))["RAW"][coin_ticker][fiat_ticker]

        raw_mktcap  = float(results["MKTCAP"])
        raw_current = float(results["PRICE"])
        raw_opening = float(results["OPEN24HOUR"])
        raw_high    = float(results["HIGHDAY"])
        raw_low     = float(results["LOWDAY"])
        
        current = num_format.format(raw_current)
        opening = num_format.format(raw_opening)
        high    = num_format.format(raw_high)
        low     = num_format.format(raw_low)

        if raw_mktcap > 1000000:
            mktcap = "{0} M".format(round(raw_mktcap / 1000000, literalRound))
        else:
            mktcap = str(round(raw_mktcap, literalRound))

        trend = "▲" if raw_current > raw_opening else  "▼"
        
        output = fiat_symbol + current

        if (output_type == "simple"):
            output += trend
        elif (output_type == "mktcap"):
            output += " ({0}{1})".format(fiat_symbol, mktcap)
        elif (output_type == "absolute"):
            output += " (L: {0}{1} H: {0}{2})".format(fiat_symbol, low, high)
        elif (output_type == "relative"):
            output += " (L: -{0}{1} H: +{0}{2})".format(fiat_symbol, str(round(raw_current - raw_low, literalRound)), str(round(raw_high - raw_current,literalRound)))
        elif (output_type == "current-percentage"):
            # Display both '-' and '+'? Like +5.7%, 0.0%, -3.3%
            output += " ({0}%)".format(str(round(((raw_current - raw_opening) / raw_current) * 100, percentageRound)))
        elif (output_type == "range-percentage"):
            output += " (L: -{0}% H: +{1}%)".format(str(round (((raw_current - raw_low) / raw_current) * 100, percentageRound)), str(round (((raw_high - raw_current) / raw_current) * 100, percentageRound)))
        elif (output_type == "user-percentage"):
            output += " (L: {0}{1} G: {0}{2}".format(fiat_symbol,str(round(raw_current - (raw_current * mod_percent), literalRound)), str(round(raw_current + (raw_current * mod_percent), literalRound)))

        if offline_cache == "true":
            with open("/tmp/{0}-{1}-{2}.txt".format(coin_ticker, fiat_ticker, output_type), 'w') as cf:
                cf.write(output)
        
        print(output)

    elif api_type == "historical":
        
        url = "https://min-api.cryptocompare.com/data/histohour?fsym={}&tsym={}" + extraOptions
        url = url.format(coin_ticker, fiat_ticker)

        results = load(urlopen(url))

        raw_high = float(results["Data"][1]["high"])
        high = num_format.format(raw_high)

        output = fiat_symbol + high

        if offline_cache == "true":
            with open("/tmp/{0}-{1}-{2}.txt".format(coin_ticker, fiat_ticker, output_type), 'w') as cf:
                cf.write(output)

        print(output)

except URLError, e:

    try:
        with open("/tmp/{0}-{1}-{2}.txt".format(coin_ticker, fiat_ticker, output_type), 'r') as cf:
            print("CACHED " + cf.read())
    except IOError:
        print("Unable to get data from API & no cache available")

except ValueError, e:
    print("There was an error formatting the output: {0}".format(e))
