import styled from 'styled-components'
import { APP_CONFIG } from '../config'
import { useTranslations } from '../hooks.ts'

export const Copyright: React.FunctionComponent = () => {
	const T = useTranslations()

	const year = new Date().getFullYear()
	return (
		<By>
			Copyright &copy; {year} by {T.copyright.author} API
			provided by{' '}
			<Link href={APP_CONFIG.API_URL} target='_blank'>
				CoinMarketCap
			</Link>
		</By>
	)
}

const By = styled.div`
	font-size: 35px;
	font-family: 'Comic Sans MS', cursive, sans-serif;
	font-weight: bold;
	text-align: center;
	position: absolute;
	width: 65%;
	bottom: 20px;
	line-height: 1.3;
`
const Link = styled.a`
	text-decoration: none;
    color: #000;
	cursor: pointer;
`