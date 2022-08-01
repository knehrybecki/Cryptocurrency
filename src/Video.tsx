import { useEffect, useState } from 'react'
import { Composition, continueRender, delayRender } from 'remotion'
import { fetchCryptoPrices, ListPrices } from './actions'
import { Cryptocurrency } from './components'

import { VIDEO_CONFIG } from './config'
import './reset.css'

export const RemotionVideo: React.FunctionComponent = () => {
	const {
		FPS,
		VIDEO_DURATION_IN_FRAMES,
		VIDEO_HEIGHT,
		VIDEO_ID,
		VIDEO_WIDTH,
	} = VIDEO_CONFIG

	const [handle] = useState(() => delayRender())
	const [isReadyToRender, setIsReadyToRender] = useState(false)
	const [cryptoPrices, setCryptoPrices] = useState({})

	const fetchListPrice = async () => {
		const listCryptoPrices = await fetchCryptoPrices()

		setCryptoPrices(listCryptoPrices)
		setIsReadyToRender(true)
		continueRender(handle)
	}

	useEffect(() => {
		fetchListPrice()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return isReadyToRender ? (
		<>
			<Composition
				id={VIDEO_ID}
				component={Cryptocurrency}
				durationInFrames={VIDEO_DURATION_IN_FRAMES}
				fps={FPS}
				width={VIDEO_WIDTH}
				height={VIDEO_HEIGHT}
				defaultProps={{
					listPrices: cryptoPrices as ListPrices,
				}}
			/>
		</>
	) : null
}
