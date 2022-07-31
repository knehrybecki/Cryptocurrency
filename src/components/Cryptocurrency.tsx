import { Sequence, useVideoConfig } from 'remotion'
import { BitCoin } from './BitCoin'

enum SymbolCrypto {
	BTC = 'BTC',
	ETH = 'ETH',
	XRP = 'XRP',
	DOGE = 'DOGE',
}

export const Cryptocurrency: React.FunctionComponent = () => {
	const { fps } = useVideoConfig()
	return (
		<>
			<Sequence
				from={0}
				durationInFrames={3 * fps}
				name={SymbolCrypto.BTC}>
				<BitCoin />
			</Sequence>
			<Sequence
				from={3 * fps}
				durationInFrames={3 * fps}
				name={SymbolCrypto.ETH}>
				<div />
			</Sequence>
			<Sequence
				from={6 * fps}
				durationInFrames={3 * fps}
				name={SymbolCrypto.XRP}>
				<div />
			</Sequence>
			<Sequence
				from={9 * fps}
				durationInFrames={3 * fps}
				name={SymbolCrypto.DOGE}>
				<div />
			</Sequence>
		</>
	)
}
