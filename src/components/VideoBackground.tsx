import styled from 'styled-components'

type VideoBackgroundProps = {
	children: React.ReactNode
	backgroundColor?: string
}

export const VideoBackground = styled.div<VideoBackgroundProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
`
