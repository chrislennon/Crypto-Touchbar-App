#!/usr/bin/python
# -*- coding: utf-8 -*-
import urllib2,json

fiats = {
	'USD' : '$ ',
	'EUR' : '€ ',
	'GBP' : '£ '
}

formats = {
	"none" : "{}",
	"thousands" : "{:0,}",
	"two-decimals": "{:0.2f}",
	"four-decimals-thousansds": "{:0,.4f}"
}

coins = ['BTC', 'RDD', 'ETH', 'XMR', 'XRP']

for coin in coins:

	for fiat, symbol in fiats.iteritems():
		data = urllib2.urlopen("https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+coin+"&tsyms="+fiat)
		obj=json.load(data)

		for formatname, outputformat in formats.iteritems():
			try:

				raw_current = float(obj["RAW"][coin][fiat]["PRICE"])
				raw_opening = float(obj["RAW"][coin][fiat]["OPEN24HOUR"])
				raw_high = float(obj["RAW"][coin][fiat]["HIGHDAY"])
				raw_low = float(obj["RAW"][coin][fiat]["LOWDAY"])

				current = outputformat.format(raw_current)
				opening = outputformat.format(raw_opening)
				high = outputformat.format(raw_high)
				low = outputformat.format(raw_low)

				if (raw_current > raw_opening):
					trend = "▲"
				else:
					trend = "▼"

				print('\n*** %s-%s %s TEST ***' % (coin,fiat,formatname))

				print(symbol + current + " " + trend)

				print (symbol + current + " (L: " + symbol + low + " H: " + symbol + high + ")")

				print(symbol + current + " (L: -" + symbol + str(raw_current - raw_low) + " H: +" + symbol + str(raw_high - raw_current) + ")")

				print(symbol + current + " (" + str(round (((raw_current - raw_opening) / raw_current) * 100)) + "%)")

				print(symbol + current + " (L: -" + str(round (((raw_current - raw_low) / raw_current) * 100)) + "% H: +" + str(round (((raw_high - raw_current) / raw_current) * 100)) + "%)")

				print(symbol + current + " (L: " + symbol + str(raw_current - (raw_current * 0.05)) + " H: " + symbol + str(raw_current + (raw_current * 0.05)) + ")")

			except urllib2.URLError, e:
				print('Unable to get data from API: %s' % e)
			except ValueError, e:
				print('There was an error formatting the output: %s' % e)
