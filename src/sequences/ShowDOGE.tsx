import styled from 'styled-components'
import { DogeCoin, Title, VideoBackground } from '../components'
import { Price } from '../components/Typography'
import { useTranslations } from '../hooks'

type DogeProps = {
	price: number
}

export const ShowDOGE: React.FunctionComponent<DogeProps> = ({price}) => {
	const T = useTranslations()

	return (
		<VideoBackground>
			<Container>
				<DogeCoin>
					<Title>{T.Doge.title}</Title>
				</DogeCoin>
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
