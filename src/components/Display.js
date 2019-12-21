import React from 'react'
import {StyledDisplay} from './styles/StyledDisplay'

const Display = ({mediaQuery, text}) => (
<StyledDisplay mediaQuery={mediaQuery}>{text}</StyledDisplay>
)

export default Display
