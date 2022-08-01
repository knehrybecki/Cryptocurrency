import styled from 'styled-components'
import { RippleXrp, Title, VideoBackground } from '../components'
import { Price } from '../components/Typography'
import { useTranslations } from '../hooks.ts'

type XrpProps = {
	price: number
}

export const Xrp: React.FunctionComponent<XrpProps> = ({price}) => {
	const T = useTranslations()

	return (
		<VideoBackground>
			<Container>
				<RippleXrp>
					<Title>{T.Xrp.title}</Title>
				</RippleXrp>
				<Price> {price}</Price>
			</Container>
		</VideoBackground>
	)
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
