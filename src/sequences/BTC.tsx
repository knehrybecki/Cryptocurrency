import styled from 'styled-components'
import { BitCoin, Title, VideoBackground } from '../components'
import { Price } from '../components/Typography'
import { useTranslations } from '../hooks'

type BtcProps = {
	price: number
}

export const Btc: React.FunctionComponent<BtcProps> = ({ price }) => {
	const T = useTranslations()

	return (
		<VideoBackground>
			<Container>
				<BitCoin>
					<Title>{T.Btc.title}</Title>
				</BitCoin>
				<Price>{price}</Price>
			</Container>
		</VideoBackground>
	)
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
