const APIPrice = function() {
    return {
        "live" : {
            "response" : "import urllib2,json,sys\n\ndata = urllib2.urlopen(\"https:\/\/min-api.cryptocompare.com\/data\/pricemultifull?fsyms=**CRYPTO**&tsyms=**FIAT**\")\nobj=json.load(data)\ncurrent = \"{**FORMAT**}\".format(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"PRICE\"])\nopening = obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"OPEN24HOUR\"]\nhigh = \"{**FORMAT**}\".format(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"HIGHDAY\"])\nlow = \"{**FORMAT**}\".format(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"LOWDAY\"])\nraw_current = float(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"PRICE\"])\nraw_opening = float(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"OPEN24HOUR\"])\nraw_high = float(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"HIGHDAY\"])\nraw_low = float(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"LOWDAY\"])\n\n",
            "no-output" : "print(\"**FIATSYMB**\" + current)",
            "simple-output" : "if (raw_current > raw_opening):\n\ttrend = \"▲\"\nelse:\n\ttrend = \"▼\"\n\nprint(\"**FIATSYMB**\" + current + \" \" + trend)",
            "absolute-output" : "print (\"**FIATSYMB**\" + current + \" (L: **FIATSYMB**\" + low + \" H: **FIATSYMB**\" + high + \")\")",
            "relative-output" : "print(\"**FIATSYMB**\" + current + \" (L: -**FIATSYMB**\" + str(raw_current - raw_low) + \" H: +**FIATSYMB**\" + str(raw_high - raw_current) + \")\")",
            "current-percentage-output" : "print (\"**FIATSYMB**\" + current + \" (\" + str(round (((raw_current - raw_opening) \/ raw_current) * 100)) + \"%)\")",
            "range-percentage-output" : "print(\"**FIATSYMB**\" + current + \" (L: -\" + str(round (((raw_current - raw_low) \/ raw_current) * 100)) + \"% H: +\" + str(round (((raw_high - raw_current) \/ raw_current) * 100)) + \"%)\")",
            "user-percentage-output" : "print(\"**FIATSYMB**\" + current + \" (L: **FIATSYMB**\" + str(raw_current - (raw_current * **PERCENT**)) + \" H: **FIATSYMB**\" + str(raw_current + (raw_current * **PERCENT**)) + \")\")"
        },
        "historical" : {
            "response" : "#!\/usr\/bin\/env python\n# -*- coding: utf-8 -*-\nimport urllib2,json,sys\n\ndata = urllib2.urlopen(\"https:\/\/min-api.cryptocompare.com\/data\/histohour?fsym=**CRYPTO**&tsym=**FIAT**&**EXTRAOPTIONS**\")\nobj=json.load(data)\nhigh = \"{}\".format(obj[\"Data\"][1][\"high\"])\nlow = \"{}\".format(obj[\"Data\"][1][\"low\"])\nraw_high = obj[\"Data\"][1][\"high\"]\nraw_low =obj[\"Data\"][1][\"low\"]\n\n",
            "no-output" : "print(\"**FIATSYMB**\" + high)"
        }
    }
};
