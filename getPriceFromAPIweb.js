import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import fetch from 'node-fetch'

const app = express()
app.use(cors())
app.use(express.json())

const port = 3005

dotenv.config()

const runScript = async () => {
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?'
        .concat('symbol=BTC,ETH,XRP,DOGE,ADA')
        .concat('&convert=PLN')
        // eslint-disable-next-line no-undef
        .concat(`&CMC_PRO_API_KEY=${ process.env.CRYPTOCURRENCY_API_KEY }`)

    const { BTC, ETH, XRP, DOGE, ADA } = await fetch(url)
        .then(response => response.json())
        .then(data => {
            const btc = data.data.BTC.quote.PLN.price.toLocaleString().replace(',', ' ').slice(0, -1)
            const eth = data.data.ETH.quote.PLN.price.toLocaleString().replace(',', ' ').slice(0, -1)
            const xrp = data.data.XRP.quote.PLN.price.toLocaleString().replace(',', ' ').slice(0, -1)
            const doge = data.data.DOGE.quote.PLN.price.toLocaleString().replace(',', ' ').slice(0, -1)
            const ada = data.data.ADA.quote.PLN.price.toLocaleString().replace(',', ' ').slice(0, -1)

            return {
                'BTC': btc,
                'ETH': eth,
                'XRP': xrp,
                'DOGE': doge,
                'ADA': ada
            }
        })
        .catch(() => {
            throw new Error('Error while fetching data from API')
        })

    return { BTC, ETH, XRP, DOGE, ADA }
}

app.get('/price', (req, res) => {
    runScript().then(data => {
        res.json(data)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`)
})

setTimeout(() => {
    // eslint-disable-next-line no-undef
    process.exit()
}, 10000)