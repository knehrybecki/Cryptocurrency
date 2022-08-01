import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'
import { ContainerAnimated } from './ContainerAnimated'

type ContainerProps = {
	children: React.ReactNode
}

export const CardanoAda: React.FunctionComponent<ContainerProps> = ({
	children,
}) => (
	<ContainerAnimated>
		<Ada src={Images.ADA} />
		{children}
	</ContainerAnimated>
)

const Ada = styled(Img)`
	width: 220px;
`