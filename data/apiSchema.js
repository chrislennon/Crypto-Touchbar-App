const APIPrice = function() {
    return {
        "live" : {
            "response" : "#!\/usr\/bin\/python\n# -*- coding: utf-8 -*-\nimport urllib2,json,sys\ntry:\n\n\tdata = urllib2.urlopen(\"https:\/\/min-api.cryptocompare.com\/data\/pricemultifull?fsyms=**CRYPTO**&tsyms=**FIAT**\")\n\tobj=json.load(data)\n\traw_current = float(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"PRICE\"])\n\traw_opening = float(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"OPEN24HOUR\"])\n\traw_high = float(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"HIGHDAY\"])\n\traw_low = float(obj[\"RAW\"][\"**CRYPTO**\"][\"**FIAT**\"][\"LOWDAY\"])\n\n\tcurrent = \"{**FORMAT**}\".format(raw_current)\n\topening = \"{**FORMAT**}\".format(raw_opening)\n\thigh = \"{**FORMAT**}\".format(raw_high)\n\tlow = \"{**FORMAT**}\".format(raw_low)\n",
            "no-output" : "\tprint(\"**FIATSYMB**\" + current)",
            "simple-output" : "\tif (raw_current > raw_opening):\n\t\ttrend = \"▲\"\n\telse:\n\t\ttrend = \"▼\"\n\n\tprint(\"**FIATSYMB**\" + current + \" \" + trend)",
            "absolute-output" : "\tprint (\"**FIATSYMB**\" + current + \" (L: **FIATSYMB**\" + low + \" H: **FIATSYMB**\" + high + \")\")",
            "relative-output" : "\tprint(\"**FIATSYMB**\" + current + \" (L: -**FIATSYMB**\" + str(raw_current - raw_low) + \" H: +**FIATSYMB**\" + str(raw_high - raw_current) + \")\")",
            "current-percentage-output" : "\tprint (\"**FIATSYMB**\" + current + \" (\" + str(round (((raw_current - raw_opening) \/ raw_current) * 100)) + \"%)\")",
            "range-percentage-output" : "\tprint(\"**FIATSYMB**\" + current + \" (L: -\" + str(round (((raw_current - raw_low) \/ raw_current) * 100)) + \"% H: +\" + str(round (((raw_high - raw_current) \/ raw_current) * 100)) + \"%)\")",
            "user-percentage-output" : "\tprint(\"**FIATSYMB**\" + current + \" (L: **FIATSYMB**\" + str(raw_current - (raw_current * **PERCENT**)) + \" H: **FIATSYMB**\" + str(raw_current + (raw_current * **PERCENT**)) + \")\")",
            "error" : "\n\nexcept urllib2.URLError, e:\n\tprint('Unable to get data from API: %s' % e)\nexcept ValueError, e:\n\tprint('There was an error formatting the output: %s' % e)\n# Please submit any issues https:\/\/github.com\/chrislennon\/Crypto-Touchbar-App\/issues with the above script\n"
        },
        "historical" : {
            "response" : "#!\/usr\/bin\/python\n# -*- coding: utf-8 -*-\n#!\/usr\/bin\/env python\n# -*- coding: utf-8 -*-\nimport urllib2,json,sys\ntry:\n\n\tdata = urllib2.urlopen(\"https:\/\/min-api.cryptocompare.com\/data\/histohour?fsym=**CRYPTO**&tsym=**FIAT**&**EXTRAOPTIONS**\")\n\tobj=json.load(data)\n\traw_high = obj[\"Data\"][1][\"high\"]\n\traw_low =obj[\"Data\"][1][\"low\"]\n\n\thigh = \"{}\".format(raw_high)\n\tlow = \"{}\".format(raw_low)\n",
            "no-output" : "\tprint(\"**FIATSYMB**\" + high)",
            "error" : "\n\nexcept urllib2.URLError, e:\n\tprint('Unable to get data from API: %s' % e)\nexcept ValueError, e:\n\tprint('There was an error formatting the output: %s' % e)\n# Please submit any issues https:\/\/github.com\/chrislennon\/Crypto-Touchbar-App\/issues with the above script\n"
        }
    }
};
