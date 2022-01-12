export default {
    preset: preset,
    widget: widget,
    closeWidget: closeWidget
}

function preset() {
    return {
        "BTTPresetName": "Crypto-Touchbar-App",
        "BTTPresetUUID": "7214C346-BD91-41F6-9E46-C300E0959DC3",
        "BTTPresetContent": [
            {
                "BTTAppBundleIdentifier": "BT.G",
                "BTTAppName": "Global",
                "BTTAppSpecificSettings": {},
                "BTTTriggers": [
                    {
                        "BTTTouchBarButtonName": "Crypto 🤑",
                        "BTTTriggerType": 630,
                        "BTTTriggerClass": "BTTTriggerTypeTouchBar",
                        "BTTPredefinedActionType": -1,
                        "BTTPredefinedActionName": "No Action",
                        "BTTEnabled": 1,
                        "BTTOrder": 2,
                        "BTTAdditionalActions": [],
                        "BTTIconData": "**WILL-BE-REPLACED**",
                        "BTTTriggerConfig": {
                            "BTTTouchBarItemIconHeight": 0,
                            "BTTTouchBarItemIconWidth": 0,
                            "BTTTouchBarItemPadding": 0,
                            "BTTTouchBarFreeSpaceAfterButton": "5.000000",
                            "BTTTouchBarButtonColor": "255.000000, 254.993464, 254.997781, 255.000000",
                            "BTTTouchBarAlwaysShowButton": "0",
                            "BTTTouchBarAlternateBackgroundColor": "0.000000, 0.000000, 0.000000, 0.000000"
                        }
                    }
                ]
            }
        ],
        "BTTPresetSnapAreas": []
    }
};

function widget() {
    return {
        "BTTWidgetName": "",
        "BTTTriggerType": 642,
        "BTTTriggerTypeDescription": "Shell Script \/ Task Widget",
        "BTTTriggerClass": "BTTTriggerTypeTouchBar",
        "BTTPredefinedActionType": -1,
        "BTTPredefinedActionName": "No Action",
        "BTTOpenURL": "",
        "BTTEnabled": 1,
        "BTTOrder": 0,
        "BTTIconData": "**WILL-BE-REPLACED**",
        "BTTShellScriptWidgetGestureConfig" : "\/usr\/bin\/python:::-c",
        "BTTTriggerConfig": {
            "BTTTouchBarItemIconHeight": 22,
            "BTTTouchBarItemIconWidth": 22,
            "BTTTouchBarItemPadding": 0,
            "BTTTouchBarFreeSpaceAfterButton": "5.000000",
            "BTTTouchBarButtonColor": "243.776725, 130.266312, 8.181293, 255.000000",
            "BTTTouchBarAlwaysShowButton": "0",
            "BTTTouchBarAppleScriptString": "**RESPONSE****OUTPUT****ERROR**",
            "BTTTouchBarColorRegex" : "CACHED",
            "BTTTouchBarAlternateBackgroundColor": "109.650002, 109.650002, 109.650002, 255.000000",
            "BTTTouchBarScriptUpdateInterval": 60
        }
    }
};

function closeWidget() {
    return {
        "BTTTouchBarButtonName": "Close Group",
        "BTTTriggerType": 629,
        "BTTTriggerClass": "BTTTriggerTypeTouchBar",
        "BTTPredefinedActionType": 191,
        "BTTPredefinedActionName": "Close currently open Touch Bar group",
        "BTTEnabled": 1,
        "BTTOrder": 1,
        "BTTIconData": "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhElEQVQ4T6WTX2rCQBDGZ1YivhirgaAPoYvxTZB6kvYGiTfwCN5Ab6C5gR5EFMTH0AVfRFCsgi8LmbIrWWJSWqT7tv9+8803Mwj/XJj/3+/3X4loiIgfAMAz94KI5qVSabRcLr/S8wdAr9cLAGACAC+/CDsTUbjZbBbqjQF0u131efZERuF2u400oN1u1yzLErnIawB4ywDz+7OUkmtAp9MZA8AwfawkxnEc+b4/RcSQiGZxHA983w8QMatyogGc88+MYWshRD+Fcc4DIUSU2a8yyoQGeJ5Hudxnu91ukPfD87wpAITZcw1otVp5AKg09vu9idxsNvPyNUcDXNctKDgcDgUFruv+rMBxHOMBEa1Pp5PxwHGc4Hg8GiWNRmOFiGl17h7Ytj1GRFOFJEnC6/Ua2bZtqnC5XAbVajVgjJkqENG9CvV6vSalfLoPLMu694FalUrlqU5kjH3cbrfFwyyUy+V31TR/zYJqOiml9qUwjQBQY4yNAKAwjQAwT5JE3Zlp/AZoGZS0sA4Q/wAAAABJRU5ErkJggg==",
        "BTTTriggerConfig": {
            "BTTTouchBarItemIconHeight": 16,
            "BTTTouchBarItemIconWidth": 16,
            "BTTTouchBarItemPadding": 0,
            "BTTTouchBarFreeSpaceAfterButton": "5.000000",
            "BTTTouchBarButtonColor": "255.000000, 0.000000, 0.000000, 255.000000",
            "BTTTouchBarAlwaysShowButton": "0",
            "BTTTouchBarAlternateBackgroundColor": "0.000000, 0.000000, 0.000000, 0.000000",
            "BTTTouchBarOnlyShowIcon": 1
        }
    }
}