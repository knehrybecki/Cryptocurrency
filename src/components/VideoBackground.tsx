import styled from 'styled-components'
import { COMPOSITION_CONFIG } from '../config'

type VideoBackgroundProps = {
	children: React.ReactNode
	backgroundColor?: string
}

export const VideoBackground = styled.div<VideoBackgroundProps>`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${COMPOSITION_CONFIG.VIDEO.BACKGROUND_COLOR};
`
