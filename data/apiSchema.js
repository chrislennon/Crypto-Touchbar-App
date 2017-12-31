const APIPrice = function() {
    return {
        "live" : {
            "request" : "https:\/\/min-api.cryptocompare.com\/data\/pricemultifull?fsyms=**CRYPTO**&tsyms=**FIAT**",
            "response" : "'import json,sys;obj=json.load(sys.stdin);print \\\"{**FORMAT**}\\\".format(obj[\\\"RAW\\\"][\\\"**CRYPTO**\\\"][\\\"**FIAT**\\\"][\\\"PRICE\\\"]);print obj[\\\"RAW\\\"][\\\"**CRYPTO**\\\"][\\\"**FIAT**\\\"][\\\"OPEN24HOUR\\\"];print \\\"{**FORMAT**}\\\".format(obj[\\\"RAW\\\"][\\\"**CRYPTO**\\\"][\\\"**FIAT**\\\"][\\\"HIGHDAY\\\"]);print \\\"{**FORMAT**}\\\".format(obj[\\\"RAW\\\"][\\\"**CRYPTO**\\\"][\\\"**FIAT**\\\"][\\\"LOWDAY\\\"]);print obj[\\\"RAW\\\"][\\\"**CRYPTO**\\\"][\\\"**FIAT**\\\"][\\\"PRICE\\\"];print obj[\\\"RAW\\\"][\\\"**CRYPTO**\\\"][\\\"**FIAT**\\\"][\\\"HIGHDAY\\\"];print obj[\\\"RAW\\\"][\\\"**CRYPTO**\\\"][\\\"**FIAT**\\\"][\\\"LOWDAY\\\"];'\"\rset valueArray to words of value\rset trend to \"null\"\rset current to item 1 of valueArray\rset opening to (item 2 of valueArray as integer)\rset high to item 3 of valueArray\rset low to item 4 of valueArray\rset raw_current to (item 5 of valueArray as integer)\rset raw_high to (item 6 of valueArray as integer)\rset raw_low to (item 7 of valueArray as integer)",
            "no-output" : "\rreturn \"**FIATSYMB**\" & current",
            "simple-output" : "\rif raw_current > opening then\r\tset trend to \"▲\"\relse\r\tset trend to \"▼\"\rend if\r\rreturn \"**FIATSYMB**\" & current & \" \" & trend",
            "absolute-output" : "\rreturn \"**FIATSYMB**\" & current & \" (L: **FIATSYMB**\" & low & \" H: **FIATSYMB**\" & high & \")\"",
            "relative-output" : "\rreturn \"**FIATSYMB**\" & current & \" (L: -**FIATSYMB**\" & (raw_current - raw_low) & \" H: +**FIATSYMB**\" & (raw_high - raw_current) & \")\"",
            "current-percentage-output" : "\rreturn \"**FIATSYMB**\" & current & \" (\" & (round(((raw_current - opening) / raw_current)*100)) & \"%)\"",
            "range-percentage-output" : "\rreturn \"**FIATSYMB**\" & current & \" (L: -\" & (round(((raw_current - raw_low) / raw_current)*100)) & \"% H: +\" & (round(((raw_high - raw_current) / raw_current)*100)) & \"%)\"",
            "user-percentage-output" : "\rreturn \"**FIATSYMB**\" & current & \" (L: **FIATSYMB**\" & ((raw_current - (raw_current* **PERCENT**)) as integer) & \" H: **FIATSYMB**\" & ((raw_current + (raw_current* **PERCENT**)) as integer) & \")\""
        },
        "historical" : {
            "request" : "https:\/\/min-api.cryptocompare.com\/data\/histohour?fsym=**CRYPTO**&tsym=**FIAT**&**EXTRAOPTIONS**",
            "response" : "'import json,sys;obj=json.load(sys.stdin);print \\\"{**FORMAT**}\\\".format(obj[\\\"Data\\\"][1][\\\"high\\\"]);print \\\"{**FORMAT**}\\\".format(obj[\\\"Data\\\"][1][\\\"low\\\"]);print obj[\\\"Data\\\"][1][\\\"high\\\"];print obj[\\\"Data\\\"][1][\\\"low\\\"];'\"\rset valueArray to words of value\rset high to item 1 of valueArray\rset low to item 2 of valueArray\rset raw_high to item 3 of valueArray\rset raw_low to item 4 of valueArray",
            "no-output" : "\rreturn \"**FIATSYMB**\" & high"
        }
    }
};
