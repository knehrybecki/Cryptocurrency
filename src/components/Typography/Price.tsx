import { interpolate, useCurrentFrame } from 'remotion'
import styled from 'styled-components'
import { COMPOSITION_CONFIG } from '../../config'
import { useTranslations } from '../../hooks.ts'

type PriceProps = {
	children: React.ReactNode
}
const { TEXT, COLOR } = COMPOSITION_CONFIG

export const Price: React.FunctionComponent<PriceProps> = ({
	children,
}) => {
	const T = useTranslations()
	const frame = useCurrentFrame()
	const animatedScale = interpolate(
		frame,
		[0, 10, 15],
		[0, 1.2, 1],
		{
			extrapolateRight: 'clamp',
		}
	)
	const animatedOpacity = interpolate(
		frame,
		[0, 40, 50],
		[1, 1, 0]
	)

	return (
		<BasePrice
			style={{
				transform: `scale(${animatedScale})`,
				opacity: animatedOpacity,
			}}>
			{children}
			<Currency>{T.currency}</Currency>
		</BasePrice>
	)
}

export const BasePrice = styled.div`
	font-size: ${TEXT.FONT_SIZE_PRICE};
	font-family: 'Comic Sans MS', cursive, sans-serif;
	color: ${COLOR.PRICE};
`
const Currency = styled.span`
	margin-left: 15px;
	font-size: ${TEXT.FONT_SIZE_CURRENCY};
	font-weight: bold;
	color: ${COLOR.CURRENCY_FIAT};
`
