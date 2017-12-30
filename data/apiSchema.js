const APIPrice = function() {
    return {
        "live" : {
            "request" : "https:\/\/min-api.cryptocompare.com\/data\/pricemultifull?fsyms=**CRYPTO**&tsyms=**FIAT**",
            "response" : "import json,sys;obj=json.load(sys.stdin);print obj[\\\"RAW\\\"][\\\"**CRYPTO**\\\"][\\\"**FIAT**\\\"][\\\"PRICE\\\"];print obj[\\\"RAW\\\"][\\\"**CRYPTO**\\\"][\\\"**FIAT**\\\"][\\\"OPEN24HOUR\\\"];'\"\rset valueArray to words of value\rset trend to \"null\"\rset current to item 1 of valueArray\rset opening to item 2 of valueArray\rif current > opening then\r\tset trend to \"▲\"\relse\r\tset trend to \"▼\"\rend if\r\rreturn \"**FIATSYMB**\" & current & \" \" & trend"
        },
        "historical" : {
            "request" : "https:\/\/min-api.cryptocompare.com\/data\/histohour?fsym=**CRYPTO**&tsym=**FIAT**&**EXTRAOPTIONS**",
            "response" : "import json,sys;obj=json.load(sys.stdin);print obj[\\\"Data\\\"][0][\\\"high\\\"];'\"\rset valueArray to words of value\rset current to item 1 of valueArray\rreturn \"**FIATSYMB**\" & current"
        }
    }
};
