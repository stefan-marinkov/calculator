import React from 'react';
import './Quads.scss';

const Quads = React.forwardRef(({ numb, onClick }, ref) => {
	return (
		<button className='tip' onClick={onClick} ref={ref}>
			{numb}
		</button>
	);
});

export default Quads;
