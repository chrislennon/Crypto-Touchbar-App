const fiat = [
	{
		"name": "US Dollar",
		"ticker": "USD",
		"symbol": "$",
		"icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
	},
	{
		"name": "Euro",
		"ticker": "EUR",
		"symbol": "€",
		"icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABkElEQVRIS7XVvUtXcRTH8ZdDIVFED4IgEREaQVj4F9iei4MQQQ9DKIg02BLtYlNLQ4ODokOYo4OCg1NjUBQURVFEZEEJ4SAUyoGvcP1xr/dBPOP9nfN5n/M9D782B2xtDfU7cQHHsIGP+IatVr06gEO4jVFczknsOp41BXRjHlf2qLgHH5oALmEVpzLB//EGf3A6fe9t8kTxxq9wLonEGz/GJH5V6V9ZDybwICN0E7NVhHd8igDtOIJPOJ6cF3AnRzyqiknKtSLAuzSGVZM9gfU85yJAzPX5iuox/2fqVtCPcVxLgV9wv0DkO17UBfThIQZTYPRiuEDkJX7XBdR5oiE8rwt4j9jMKnYWX+sCTqIDr3E4BS/hbovQP/zYK4uyRZvDjYzAABarlFW2aDu/x6jGzYnFC9vEPUwh7lGplVUQArcw3aL0GctYS0cwruwI3rYSqwAiJk7E00w/8jIfw5OmgIi7iEdp+fISm0l/SLsYVSvIBnXhahrjo/iLGOsV/NxPBaUNzXNoUkEt0IEDtgEsPD4Zad9aAQAAAABJRU5ErkJggg=="
	},
	{
		"name": "Renminbi - Chinese Yuan",
		"ticker": "CNY",
		"symbol": "元",
		"icon": ""
	},
	{
		"name": "Pound Sterling",
		"ticker": "GBP",
		"symbol": "£",
		"icon": ""
	},
	{
		"name": "Singapore Dollar",
		"ticker": "SGD",
		"symbol": "$",
		"icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
	},
	{
		"name": "Russian Ruble",
		"ticker": "RUB",
		"symbol": "₽",
		"icon": ""
	},
	{
		"name": "Japanese Yen",
		"ticker": "JPY",
		"symbol": "¥",
		"icon": ""
	},
	{
		"name": "Gold",
		"ticker": "GOLD",
		"symbol": "Au",
		"icon": ""
	},
	{
		"name": "South Korean Won",
		"ticker": "KRW",
		"symbol": "₩",
		"icon": ""
	},
	{
		"name": "Australian Dollar",
		"ticker": "AUD",
		"symbol": "$",
		"icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
	},
	{
		"name": "Canadian Dollar",
		"ticker": "CAD",
		"symbol": "$",
		"icon": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACOklEQVRIS7WVP2gVQRDGv5nZgJIIYhW0FMVnY6ONYKEg9oKg+BT8A7EQRGKEoEUkjfgHImphoURsHmqhVmKRxnTaqKAIgghpU1hF393MyJ5PiPfu3m3EbHXczny/25n5bgmJi5nHiOgkOb1m44dddD+kpFJKUIxh5rMEuh2fHT5pZldTclMBIXCYcvilKGpuL5i5w8qfM2TvAGgdrAmwLnCYdPgYgA01IosOnzazW1X7gwCjgcOcw1tNpSDQldzyqRUBiOglEx8oJS0RaMHhawBsiq2J+2S0J0c+vxJAS1g+lhLuqOkEgB+998Misg+OY2raBtBNBohIG45HyxPUdAuAL03lKu9X9qAKAGBWTc8A+LkSSF2TtwnLpwqhbw6fMbN4usUUUO0UCctjAIdqRDIAz9j4Wobs7SDQoDEdIaKnFZNU1rurpucBRGjfajIai8hxOC4D2DzgS++r6el/AfzJ4RDCXjc/CuAwgLVlMTHZ0UX3fdIUNTRvlIhmy6Vz+ISZ3fgfgKixXljiFBVOLtwMup5bfjEZEELYn+eF/ZcqTrRRWBYK3d5y+AUzu5kKkN4XGoDnIMwT0VfkyFy8RU7jDt9acvp2AH3eqZyiIQztNLY3KUbqxTxQ01PJU8TM4wTqa1gNsKOmJ5b9BP8Kq/PBMDO33f0gE+8GMFIS/25ucyJyL8/zV8UtWrOajBbT4qTEpsY7OPogtvaIqnZSSpgCKHQChxmHn1s9wG8ntx2+i4imVfVJygl+AW9vyxkjYKUJAAAAAElFTkSuQmCC"
	},
	{
		"name": "Indian Rupee",
		"ticker": "INR",
		"symbol": "₹",
		"icon": ""
	},
	{
		"name": "United Arab Emirates Dirham",
		"ticker": "AED",
		"symbol": "د.إ",
		"icon": ""
	},
	{
		"name": "Swedish Krona",
		"ticker": "SEK",
		"symbol": "kr",
		"icon": ""
	},
	{
		"name": "Polish Złoty",
		"ticker": "PLN",
		"symbol": "zł",
		"icon": ""
	},
	{
		"name": "South African Rand",
		"ticker": "ZAR",
		"symbol": "R",
		"icon": ""
	},
	{
		"name": "Norwegian Krone",
		"ticker": "NOK",
		"symbol": "kr",
		"icon": ""
	},
	{
		"name": "Danish Krone",
		"ticker": "DKK",
		"symbol": "kr",
		"icon": ""
	},
	{
		"name": "Mexican Peso",
		"ticker": "MEX",
		"symbol": "$",
		"icon": ""
	},
	{
		"name": "Romanian Leu",
		"ticker": "RON",
		"symbol": "lei",
		"icon": ""
	},
	{
		"name": "Hong Kong Dollar",
		"ticker": "HKD",
		"symbol": "$",
		"icon": ""
	},
	{
		"name": "Brazilian Real",
		"ticker": "BRL",
		"symbol": "R$",
		"icon": ""
	},
	{
		"name": "Philippine Piso",
		"ticker": "PHP",
		"symbol": "₱",
		"icon": ""
	},
	{
		"name": "Venezuelan Bolívar",
		"ticker": "VEF",
		"symbol": "Bs.",
		"icon": ""
	},
	{
		"name": "Czech Koruna",
		"ticker": "CZK",
		"symbol": "Kč",
		"icon": ""
	},
	{
		"name": "Swiss Franc",
		"ticker": "CHF",
		"symbol": "CHF",
		"icon": ""
	}
]