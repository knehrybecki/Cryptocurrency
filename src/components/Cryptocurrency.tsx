import { Sequence, useVideoConfig } from 'remotion'
import { ListPrices } from '../actions'
import {
	ShowADA,
	ShowBTC,
	ShowDOGE,
	ShowETH,
	ShowXRP,
} from '../sequences'

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
				<ShowBTC price={BTC} />
			</Sequence>
			<Sequence
				from={2 * fps}
				durationInFrames={2 * fps}
				name={SymbolCrypto.ETH}>
				<ShowETH price={ETH} />
			</Sequence>
			<Sequence
				from={4 * fps}
				durationInFrames={2 * fps}
				name={SymbolCrypto.XRP}>
				<ShowXRP price={XRP} />
			</Sequence>
			<Sequence
				from={6 * fps}
				durationInFrames={2 * fps}
				name={SymbolCrypto.DOGE}>
				<ShowDOGE price={DOGE} />
			</Sequence>
			<Sequence
				from={8 * fps}
				durationInFrames={2 * fps}
				name={SymbolCrypto.ADA}>
				<ShowADA price={ADA} />
			</Sequence>
		</>
	)
}
