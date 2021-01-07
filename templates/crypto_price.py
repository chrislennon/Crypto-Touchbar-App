#!/usr/bin/python
# -*- coding: utf-8 -*-

# Please submit any issues to 
# https://github.com/chrislennon/Crypto-Touchbar-App/issues 

from json import load
try:
    # Python3
    from urllib.request import urlopen
    from urllib.error import URLError
except ImportError:
    # Python2
    from urllib2 import urlopen
    from urllib2 import URLError

num_format      = "{{format}}"         if "{{format}}"         else "{}"
api_type        = "{{apiSelector}}"    if "{{apiSelector}}"    else "live"
coin_ticker     = "{{coin_ticker}}"    if "{{coin_ticker}}"    else "BTC"
fiat_symbol     = "{{fiat_symbol}}"    if "{{fiat_symbol}}"    else "$"
fiat_ticker     = "{{fiat_ticker}}"    if "{{fiat_ticker}}"    else "USD"
output_type     = "{{output_type}}"    if "{{output_type}}"    else "mktcap"
offline_cache   = "{{offline_cache}}"  if "{{offline_cache}}"  else "false"
extra_options   = "{{{extraOptions}}}" if "{{{extraOptions}}}" else "&limit=1&aggregate=1&toTs=1514376000"

mod_percent      = float("{{percent}}")        if "{{percent}}"          else 0.0
literal_round    = int("{{literal_round}}")    if "{{literal_round}}"    else 0
percentage_round = int("{{percentage_round}}") if "{{percentage_round}}" else 0

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
            mktcap = "{0} M".format(round(raw_mktcap / 1000000, literal_round))
        else:
            mktcap = str(round(raw_mktcap, literal_round))

        trend = "▲" if raw_current > raw_opening else "▼"
        
        output = fiat_symbol + current

        if (output_type == "simple"):
            output += trend
        elif (output_type == "mktcap"):
            output += " ({0}{1})".format(fiat_symbol, mktcap)
        elif (output_type == "absolute"):
            output += " (L: {0}{1} H: {0}{2})".format(fiat_symbol, low, high)
        elif (output_type == "relative"):
            output += " (L: -{0}{1} H: +{0}{2})".format(fiat_symbol, str(round(raw_current - raw_low, literal_round)), str(round(raw_high - raw_current,literal_round)))
        elif (output_type == "current-percentage"):
            current_percentage = round(((raw_current - raw_opening) / raw_current) * 100, percentage_round)
            output += " ({0}{1}%)".format("+" if current_percentage > 0 else "", str(current_percentage))
        elif (output_type == "range-percentage"):
            output += " (L: -{0}% H: +{1}%)".format(str(round (((raw_current - raw_low) / raw_current) * 100, percentage_round)), str(round (((raw_high - raw_current) / raw_current) * 100, percentage_round)))
        elif (output_type == "user-percentage"):
            output += " (L: {0}{1} G: {0}{2}".format(fiat_symbol,str(round(raw_current - (raw_current * mod_percent), literal_round)), str(round(raw_current + (raw_current * mod_percent), literal_round)))

        if offline_cache == "true":
            with open("/tmp/{0}-{1}-{2}.txt".format(coin_ticker, fiat_ticker, output_type), 'w') as cf:
                cf.write(output)
        
        print(output)

    elif api_type == "historical":
        
        url = "https://min-api.cryptocompare.com/data/histohour?fsym={}&tsym={}" + extra_options
        url = url.format(coin_ticker, fiat_ticker)

        results = load(urlopen(url))

        raw_high = float(results["Data"][1]["high"])
        high     = num_format.format(raw_high)

        output = fiat_symbol + high

        if offline_cache == "true":
            with open("/tmp/{0}-{1}-{2}.txt".format(coin_ticker, fiat_ticker, output_type), 'w') as cf:
                cf.write(output)

        print(output)

except URLError as url_e:

    try:
        with open("/tmp/{0}-{1}-{2}.txt".format(coin_ticker, fiat_ticker, output_type), 'r') as cf:
            print("CACHED " + cf.read())
    except IOError:
        print("Unable to get data from API & no cache available\n{0}".format(url_e))

except ValueError as val_e:
    print("There was an error formatting the output: {0}".format(val_e))
