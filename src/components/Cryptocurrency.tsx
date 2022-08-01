import { Sequence, useVideoConfig } from 'remotion'
import { ListPrices } from '../actions'
import { Ada, Btc, Doge, Eth, Xrp } from '../sequences'

enum SymbolCrypto {
	BTC = 'BTC',
	ETH = 'ETH',
	XRP = 'XRP',
	DOGE = 'DOGE',
	ADA = 'ADA',
}

type CryptocurrencyProps = {
	listPrices: ListPrices
}
export const Cryptocurrency: React.FunctionComponent<
	CryptocurrencyProps
> = ({ listPrices }) => {
	const { fps } = useVideoConfig()
	const { BTC, ETH, XRP, DOGE, ADA } = listPrices

	return (
		<>
			<Sequence
				from={0}
				durationInFrames={2 * fps}
				name={SymbolCrypto.BTC}>
				<Btc price={BTC} />
			</Sequence>
			<Sequence
				from={2 * fps}
				durationInFrames={2 * fps}
				name={SymbolCrypto.ETH}>
				<Eth price={ETH} />
			</Sequence>
			<Sequence
				from={4 * fps}
				durationInFrames={2 * fps}
				name={SymbolCrypto.XRP}>
				<Xrp price={XRP} />
			</Sequence>
			<Sequence
				from={6 * fps}
				durationInFrames={2 * fps}
				name={SymbolCrypto.DOGE}>
				<Doge price={DOGE} />
			</Sequence>
			<Sequence
				from={8 * fps}
				durationInFrames={2 * fps}
				name={SymbolCrypto.ADA}>
				<Ada price={ADA} />
			</Sequence>
		</>
	)
}
