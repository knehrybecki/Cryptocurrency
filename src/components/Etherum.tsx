import { Img } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'
import { ContainerAnimated } from './ContainerAnimated'

type EtherumProps = {
	children: React.ReactNode
}

export const Etherum: React.FunctionComponent<EtherumProps> = ({
	children,
}) => {
	return (
		<ContainerAnimated>
			<Eth src={Images.ETH} />
			{children}
		</ContainerAnimated>
	)
}

const Eth = styled(Img)`
	width: 150px;
`