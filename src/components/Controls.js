import React from 'react';
import { StyledControls } from './styles/StyledControls';

const Controls = ({ clickHandler, mediaQuery }) => {
	return (
		<StyledControls mediaQuery={mediaQuery}>
			<div className="row drop">
				<div onClick={(e) => clickHandler('drop')}>&darr;</div>
			</div>
			<div className="row translate">
				<div onClick={(e) => clickHandler('left')}>&larr;</div>
				<div onClick={(e) => clickHandler('rotate')}>&#8635;</div>
				<div onClick={(e) => clickHandler('right')}>&rarr;</div>
			</div>
		</StyledControls>
	);
};

export default Controls;