import styled from 'styled-components'
import { CardanoAda, Title, VideoBackground } from '../components'
import { Copyright } from '../components/Copyright'
import { Price } from '../components/Typography/Price'
import { useTranslations } from '../hooks.ts'

type AdaProps = {
	price: number
}

export const Ada: React.FunctionComponent<AdaProps> = ({ price }) => {
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
