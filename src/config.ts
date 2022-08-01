const FPS = 30
const VIDEO_DURATION_IN_SECONDS = 10
const VIDEO_DURATION_IN_FRAMES = FPS * VIDEO_DURATION_IN_SECONDS
const VIDEO_WIDTH = 1080
const VIDEO_HEIGHT = 1920
const VIDEO_ID = 'Cryptocurrency'

export const VIDEO_CONFIG = {
	FPS,
	VIDEO_DURATION_IN_SECONDS,
	VIDEO_DURATION_IN_FRAMES,
	VIDEO_WIDTH,
	VIDEO_HEIGHT,
	VIDEO_ID,
}

export const APP_CONFIG = {
	API_URL: 'https://coinmarketcap.com/api/'
}

export const COMPOSITION_CONFIG = {
	VIDEO: {
		BACKGROUND_COLOR: '#fff',
	},
	TEXT: {
		FONT_SIZE_TITLE: '60px',
		FONT_SIZE_PRICE: '90px',
		FONT_SIZE_CURRENCY: '60px',
	},
	COLOR: {
		PRICE: '#202124',
		CURRENCY_FIAT: '#70757a'
	}
}
