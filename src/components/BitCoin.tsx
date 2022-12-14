import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'
import { ContainerAnimated } from './ContainerAnimated'

type BitCoinProps = {
	children: React.ReactNode
}

export const BitCoin: React.FunctionComponent<BitCoinProps> = ({
	children,
}) => {
	return (
		<ContainerAnimated>
			<BitCoins src={Images.BTC} />
			{children}
		</ContainerAnimated>
	)
}

const BitCoins = styled(Img)`
	width: 220px;
`