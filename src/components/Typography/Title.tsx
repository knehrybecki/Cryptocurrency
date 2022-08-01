import styled from 'styled-components'
import { COMPOSITION_CONFIG } from '../../config'

const { TEXT } = COMPOSITION_CONFIG

export const Title = styled.h1`
	font-size: ${TEXT.FONT_SIZE_TITLE};
	font-family: 'Comic Sans MS', cursive, sans-serif;
	font-weight: bold;
	margin-bottom: 120px;
`
