import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'
import { COMPOSITION_CONFIG } from '../config'
import { VideoBackground } from './VideoBackground'

export const BitCoin: React.FunctionComponent = () => {
	return (
		<VideoBackground
			backgroundColor={
				COMPOSITION_CONFIG.VIDEO.BACKGROUND_COLOR
			}>
			<BitCoins src={Images.BTC} />
		</VideoBackground>
	)
}

export const BitCoins = styled(Img)`
	width: 200px;
`
