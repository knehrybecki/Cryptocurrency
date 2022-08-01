import { interpolate, useCurrentFrame } from 'remotion'
import styled from 'styled-components'

type ContainerAnimatedProps = {
	children: React.ReactNode
}

export const ContainerAnimated: React.FunctionComponent<
	ContainerAnimatedProps
> = ({ children }) => {
	const frame = useCurrentFrame()
	const animatedOpacity = interpolate(
		frame,
		[0, 10, 20, 30, 40, 50],
		[0, 0.5, 1, 1, 1, 0]
	)

	return (
		<Container
			style={{
				opacity: animatedOpacity,
			}}>
			{children}
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
`
