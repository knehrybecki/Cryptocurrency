import { Composition } from 'remotion'
import { Cryptocurrency } from './components'
import { VIDEO_CONFIG } from './config'
import './reset.css'

export const RemotionVideo: React.FunctionComponent = () => {
	const {
		FPS,
		VIDEO_DURATION_IN_FRAMES,
		VIDEO_HEIGHT,
		VIDEO_ID,
		VIDEO_WIDTH,
	} = VIDEO_CONFIG

	return (
		<>
			<Composition
				id={VIDEO_ID}
				component={Cryptocurrency}
				durationInFrames={VIDEO_DURATION_IN_FRAMES}
				fps={FPS}
				width={VIDEO_WIDTH}
				height={VIDEO_HEIGHT}
			/>
		</>
	)
}
