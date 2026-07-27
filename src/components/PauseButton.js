import React from 'react'
import { StyledPauseButton } from './styles/StyledPauseButton'

const PauseButton = ({ isPaused, callback, mediaQuery }) => (
	<StyledPauseButton 
		isPaused={isPaused} 
		onClick={callback}
		mediaQuery={mediaQuery}
	>
		{isPaused ? 'Resume' : 'Pause'}
	</StyledPauseButton>
)

export default PauseButton