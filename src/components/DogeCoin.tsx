import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'
import { ContainerAnimated } from './ContainerAnimated'

type DogeCoinProps = {
	children: React.ReactNode
}

export const DogeCoin: React.FunctionComponent<DogeCoinProps> = ({
	children,
}) => (
	<ContainerAnimated>
		<Doge src={Images.DOGE} />
		{children}
	</ContainerAnimated>
)

const Doge = styled(Img)`
	width: 220px;
`
