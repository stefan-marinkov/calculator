import React from 'react';
import './Quads.scss';

const Quads = React.forwardRef(
	({ numb, onClick, disabled, grow, marginLeft }, ref) => {
		return (
			<button
				className={`tip ${grow} ${marginLeft}`}
				onClick={onClick}
				ref={ref}
				disabled={disabled}>
				{numb}
			</button>
		);
	}
);

export default Quads;
