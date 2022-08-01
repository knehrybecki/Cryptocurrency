import styled from 'styled-components'
import { Title, VideoBackground } from '../components'
import { DogeCoin } from '../components/DogeCoin'
import { Price } from '../components/Typography'
import { useTranslations } from '../hooks.ts'

type DogeProps = {
	price: number
}

export const Doge: React.FunctionComponent<DogeProps> = ({price}) => {
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