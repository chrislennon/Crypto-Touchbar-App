const mainStruct = {
  "BTTPresetName" : "Crypto-Touchbar-App",
  "BTTPresetUUID" : "7214C346-BD91-41F6-9E46-C300E0959DC3",
  "BTTPresetContent" : [
    {
      "BTTAppBundleIdentifier" : "BT.G",
      "BTTAppName" : "Global",
      "BTTAppSpecificSettings" : {

      },
      "BTTTriggers" : [
        {
          "BTTTouchBarButtonName" : "Crypto 🤑",
          "BTTTriggerType" : 630,
          "BTTTriggerClass" : "BTTTriggerTypeTouchBar",
          "BTTPredefinedActionType" : -1,
          "BTTPredefinedActionName" : "No Action",
          "BTTEnabled" : 1,
          "BTTOrder" : 2,
          "BTTAdditionalActions" : [

          ],
          "BTTIconData" : "**WILL-BE-REPLACED**",
          "BTTTriggerConfig" : {
            "BTTTouchBarItemIconHeight" : 0,
            "BTTTouchBarItemIconWidth" : 0,
            "BTTTouchBarItemPadding" : 0,
            "BTTTouchBarFreeSpaceAfterButton" : "5.000000",
            "BTTTouchBarButtonColor" : "255.000000, 254.993464, 254.997781, 255.000000",
            "BTTTouchBarAlwaysShowButton" : "0",
            "BTTTouchBarAlternateBackgroundColor" : "0.000000, 0.000000, 0.000000, 0.000000"
          }
        }
      ]
    }
  ],
  "BTTPresetSnapAreas" : [

  ]
}

const cryptoElement = {
  "BTTWidgetName" : "",
  "BTTTriggerType" : 639,
  "BTTTriggerTypeDescription" : "Apple Script Widget",
  "BTTTriggerClass" : "BTTTriggerTypeTouchBar",
  "BTTPredefinedActionType" : 59,
  "BTTPredefinedActionName" : "",
  "BTTOpenURL" : "",
  "BTTEnabled" : 1,
  "BTTOrder" : 0,
  "BTTIconData" : "**WILL-BE-REPLACED**",
  "BTTTriggerConfig" : {
    "BTTTouchBarItemIconHeight" : 22,
    "BTTTouchBarItemIconWidth" : 22,
    "BTTTouchBarItemPadding" : 0,
    "BTTTouchBarFreeSpaceAfterButton" : "5.000000",
    "BTTTouchBarButtonColor" : "243.776725, 130.266312, 8.181293, 255.000000",
    "BTTTouchBarAlwaysShowButton" : "0",
    "BTTTouchBarAppleScriptString" : "set value to do shell script \"curl 'https:\/\/min-api.cryptocompare.com\/data\/pricemultifull?fsyms=**CRYPTO**&tsyms=**FIAT**' | \/usr\/local\/bin\/jq -r '.RAW[][].PRICE, .RAW[][].OPEN24HOUR'\"\rset valueArray to words of value\rset trend to \"null\"\rset current to item 1 of valueArray\rset opening to item 2 of valueArray\rif current > opening then\r\tset trend to \"▲\"\relse\r\tset trend to \"▼\"\rend if\r\rreturn \"**FIATSYMB**\" & current & \" \" & trend",
    "BTTTouchBarAlternateBackgroundColor" : "109.650002, 109.650002, 109.650002, 255.000000",
    "BTTTouchBarScriptUpdateInterval" : 60
  }
}

const closeGroupElement = {
  "BTTTouchBarButtonName" : "Close Group",
  "BTTTriggerType" : 629,
  "BTTTriggerClass" : "BTTTriggerTypeTouchBar",
  "BTTPredefinedActionType" : 191,
  "BTTPredefinedActionName" : "Close currently open Touch Bar group",
  "BTTEnabled" : 1,
  "BTTOrder" : 1,
  "BTTIconData" : "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAC2UlEQVQ4T5XUW08TQRQA4LMmFGtbSuzS7nZpFUQChd5NCggGxcSYGIz+A2PUB+K/kQdCfPVNHvTBhBBvCKWtW4OsApWrpRdoi7TbspRLa2Zhatm6Nc7TZubsN2fOmV0CysYzgAvWPvtEaHJ28BHAfPma9HlEpbC2udrHuMnZG0MAYbxO4AeE9d0f4JpsLepwaDU//WLcKYeOqhS23ns3/UyLqXbla4ifGnvXgVERFLE7/dxFS5Mab7CxvJ6ffvm2Ah1VKGy9g9f8xmZTLY5dnVvmp958FFECYb23rnJNrX8wHBheC+e9rz+UUIT13O7xN5obS1gJnV/ipyZmOoj31tYfDo+zRa5e4bVIfmbik/NMTY2i63q3jzHTFRh+N+hlQ8QoQHt3vyfYyBjPyqEbG7E8QRDAMJQsFv4Z3fNO+uxiDUXUcyXIMJQsKm5WKEDx8BDg6AigUAQoFsTpSCIleL/MOR4DhEpdRmiXyx5kDIZTaPHgAGB/H4r5vAhKx8avHcG/tCJiaK0E4ky7Om1BRqc7W9zbg6IgHGcjMyKZjPA5vO58CLBYcQ/xBMrUYzCxtFKprHaxozleCCZirgcAC+VxpzJEC88B7G4d5aOVatkGoLjYblYIbMfd0ssvPbLNraP81D8wnFF8NyuwErQEjgBY3To6YDhXPTNpGTZ3ecGXiruHTr59EUSYk6QD+v/EML6V44XACUogzEEaA2QVLJHjBfRyg0oj2ygUw6ZibuKVuj7UptNfluso2v1bMuY6BCAcJM1WQxe3NxeIYQBTB0lxBrW2ToomchlhPhFzPTm5GsMA7bYGI0v+JdM4n05zqbgF19B8iaQ4Sq3VYDSZywiLZRieR2hng5HVlaGbfDr9PRW3PAWIlnfZ3EzSnF6j1SSzGWEpES1lJs0coRa9kT2vqlNu8TvpheQxVvHpoX8jra4fT2Z37uJjytUWobRGOxbh0wMYQ7G/AXT4MI00gAppAAAAAElFTkSuQmCC",
  "BTTTriggerConfig" : {
    "BTTTouchBarItemIconHeight" : 0,
    "BTTTouchBarItemIconWidth" : 0,
    "BTTTouchBarItemPadding" : 0,
    "BTTTouchBarFreeSpaceAfterButton" : "5.000000",
    "BTTTouchBarButtonColor" : "255.000000, 0.000000, 0.000000, 255.000000",
    "BTTTouchBarAlwaysShowButton" : "0",
    "BTTTouchBarAlternateBackgroundColor" : "0.000000, 0.000000, 0.000000, 0.000000",
    "BTTTouchBarOnlyShowIcon" : 1
  }
}