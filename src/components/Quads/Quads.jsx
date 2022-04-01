import React from 'react';

import { StyledButton } from './Quads.styled.jsx';

const Quads = React.forwardRef(
	({ numb, onClick, disabled, maxWidth, maxHeight, changeTheme }, ref) => {
		return (
			<StyledButton
				changeTheme={changeTheme}
				maxWidth={maxWidth}
				maxHeight={maxHeight}
				onClick={onClick}
				ref={ref}
				disabled={disabled}>
				{numb}
			</StyledButton>
		);
	}
);

export default Quads;
