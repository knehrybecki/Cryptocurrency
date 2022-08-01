import styled from 'styled-components'
import { Etherum, Title, VideoBackground } from '../components'
import { Price } from '../components/Typography'
import { useTranslations } from '../hooks'

type EthProps = {
	price: number
}

export const Eth: React.FunctionComponent<EthProps> = ({ price }) => {
	const T = useTranslations()

	return (
		<VideoBackground>
			<Container>
				<Etherum>
					<Title>{T.Eth.title}</Title>
				</Etherum>
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
