import React from 'react';
import './Quads.scss';

const Quads = React.forwardRef(
	(
		{ numb, onClick, disabled, grow, growSecond, backspace, marginLeft },
		ref
	) => {
		return (
			<button
				className={`tip ${grow} ${growSecond} ${backspace} ${marginLeft}`}
				onClick={onClick}
				ref={ref}
				disabled={disabled}>
				{numb}
			</button>
		);
	}
);

export default Quads;
