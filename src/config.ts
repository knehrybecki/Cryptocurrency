const FPS = 30
const VIDEO_DURATION_IN_SECONDS = 12
const VIDEO_DURATION_IN_FRAMES = FPS * VIDEO_DURATION_IN_SECONDS
const VIDEO_WIDTH = 1080
const VIDEO_HEIGHT = 1920
const VIDEO_ID = 'CryptocurrencyPrices'

export const VIDEO_CONFIG = {
    FPS,
    VIDEO_DURATION_IN_SECONDS,
    VIDEO_DURATION_IN_FRAMES,
    VIDEO_WIDTH,
    VIDEO_HEIGHT,
    VIDEO_ID
}

export const APP_CONFIG = {
    CRYPTO_API_KEY: ''
}

export const COMPOSITION_CONFIG = {
    VIDEO: {
        BACKGROUND_COLOR: '#fff',
    },
    TEXT: {
        FONT_SIZE: '40px',
    }

}