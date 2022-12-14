export type ListPrices = {
	BTC: number
	ETH: number
	XRP: number
	DOGE: number
	ADA: number
}

export const fetchCryptoPrices = async () => {
	const listCrypto = await fetch('http://127.0.0.2:3005/price')
		.then(response => response.json())
		.then((data: ListPrices) => data)
	    .catch(() => {
            throw new Error('Error while fetching data from API')
        })

	return listCrypto
}
