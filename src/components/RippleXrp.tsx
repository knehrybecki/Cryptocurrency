import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'
import { ContainerAnimated } from './ContainerAnimated'

type RippleXrpProps = {
	children: React.ReactNode
}

export const RippleXrp: React.FunctionComponent<RippleXrpProps> = ({
	children,
}) => (
	<ContainerAnimated>
		<Xrp src={Images.XRP} />
		{children}
	</ContainerAnimated>
)

const Xrp = styled(Img)`
	width: 200px;
	margin-bottom: 20px;
`
