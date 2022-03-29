import React, { createRef, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Quads from '../Quads/Quads';
import './Calc.scss';

const Calc = () => {
	const operators = [
		{
			key: 1,
			tip: '+',
		},
		{
			key: 2,
			tip: '-',
		},
		{
			key: 3,
			tip: '*',
		},
		{
			key: 4,
			tip: '/',
		},
		{
			key: 5,
			tip: '=',
		},
	];
	const numbs = [
		{
			key: 1,
			tip: '1',
		},
		{
			key: 2,
			tip: '2',
		},
		{
			key: 3,
			tip: '3',
		},
		{
			key: 4,
			tip: '4',
		},
		{
			key: 5,
			tip: '5',
		},
		{
			key: 6,
			tip: '6',
		},
		{
			key: 7,
			tip: '7',
		},
		{
			key: 8,
			tip: '8',
		},
		{
			key: 9,
			tip: '9',
		},
		{
			key: 0,
			tip: '0',
		},
		{
			key: 10,
			tip: 'C',
		},
	];
	const toLocaleString = (num) =>
		String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

	const removeSpaces = (num) => num.toString().replace(/\s/g, '');
	const [calculate, setCalculate] = useState({
		num: 0,
		result: 0,
		sign: '',
	});
	const [valueField, setValueField] = useState('');
	const [valueFirst, setValueFirst] = useState();
	const [valueSecond, setValueSecond] = useState();
	const [res, setRes] = useState();

	const handleClick = (e) => {
		e.preventDefault();
		setRes('');
		const fieldValue = e.target.innerHTML;
		setValueField((prev) => prev + fieldValue);
		if (fieldValue === '=') {
			let v = valueField.split('+');
			setValueFirst(v[0]);
			setValueSecond(v[1]);
			setRes(parseInt(v[0]) + parseInt(v[1]));
			setValueField('');
		}
	};
	return (
		<div>
			<header>
				<div className='monitor'>
					{!res && valueField}
					{res}
				</div>
			</header>
			<div className='all-tips'>
				<div className='tips'>
					{numbs.map((n) => (
						<Quads key={n.key} numb={n.tip} onClick={handleClick} />
					))}
				</div>
				<div className='btns'>
					<Quads numb='+' onClick={handleClick} />
					<Quads numb='-' onClick={handleClick} />
					<Quads numb='*' onClick={handleClick} />
					<Quads numb='/' onClick={handleClick} />
					<Quads numb='=' onClick={handleClick} />
				</div>
			</div>
		</div>
	);
};

export default Calc;
