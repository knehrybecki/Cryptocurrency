import styled from 'styled-components'
import { CardanoAda, Title, VideoBackground, Copyright } from '../components'
import { Price } from '../components/Typography/Price'
import { useTranslations } from '../hooks'

type AdaProps = {
	price: number
}

export const ShowADA: React.FunctionComponent<AdaProps> = ({ price }) => {
	const T = useTranslations()

	return (
		<VideoBackground>
			<Container>
				<CardanoAda>
					<Title>{T.Ada.title}</Title>
				</CardanoAda>
				<Price>{price}</Price>
				<Copyright />
			</Container>
		</VideoBackground>
	)
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
