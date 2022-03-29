import React from 'react';
import './Quads.scss';

const Quads = React.forwardRef(({ numb, onClick, disabled }, ref) => {
	return (
		<button className='tip' onClick={onClick} ref={ref} disabled={disabled}>
			{numb}
		</button>
	);
});

export default Quads;
