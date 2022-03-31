import React, { createRef, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { operators } from '../../helpers/numbs';
import Quads from '../Quads/Quads';
import './Calc.scss';

const Calc = () => {
	// const toLocaleString = (num) =>
	// 	String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

	// const removeSpaces = (num) => num.toString().replace(/\s/g, '');
	const [calculate, setCalculate] = useState({
		num: 0,
		result: 0,
		sign: '',
	});

	const [disableBtn, setDisableBtn] = useState(false);

	const signHandle = (e) => {
		e.preventDefault();
		setCalculate({
			...calculate,
			sign: e.target.innerHTML,

			result:
				!calculate.result && calculate.num
					? calculate.num
					: calculate.result,
			num: 0,
		});
		setDisableBtn(true);
	};

	const resultHandle = (e) => {
		e.preventDefault();
		function math(a, b, sign) {
			return sign === '+'
				? a + b
				: sign === '-'
				? a - b
				: sign === '*'
				? a * b
				: a / b;
		}
		setCalculate({
			...calculate,
			result: math(
				Number(calculate.result),
				Number(calculate.num),
				calculate.sign
			),

			sign: '',
			num: 0,
		});
		setDisableBtn(false);
	};

	const restartHandle = (e) => {
		e.preventDefault();
		setCalculate({
			num: 0,
			result: 0,
			sign: '',
		});
		setDisableBtn(false);
	};
	const numberHandle = (e) => {
		e.preventDefault();
		const value = e.target.innerHTML;

		setCalculate({
			...calculate,
			num:
				calculate.num === 0 && value === '0'
					? '0'
					: Number(calculate.num + value),

			result: !calculate.sign ? 0 : calculate.result,
		});
	};

	const comaHandle = (e) => {
		e.preventDefault();
		setCalculate({
			...calculate,
			num: !calculate.num.toString().includes('.')
				? calculate.num + e.target.innerHTML
				: calculate.num,
		});
	};
	return (
		<>
			<header className='monitor'>
				<div className='monitor-grid'>
					<div>
						{!calculate.result ? '' : calculate.result}
						{calculate.sign && calculate.sign}
						{!calculate.num ? '' : calculate.num}
					</div>
					<div>
						{operators.map(
							(n) =>
								n.tip === '<=' && (
									<Quads
										key={n.key}
										numb={n.tip}
										backspace='backspace-width'
									/>
								)
						)}
					</div>
				</div>
			</header>
			<div className='all-tips'>
				<div className='tips'>
					{operators.map((n) => (
						<Quads
							key={n.key}
							numb={n.tip}
							onClick={
								n.tip === 'C'
									? restartHandle
									: n.tip === '.'
									? comaHandle
									: n.tip === '+' ||
									  n.tip === '-' ||
									  n.tip === '*' ||
									  n.tip === '/'
									? signHandle
									: n.tip === '='
									? resultHandle
									: numberHandle
							}
							disabled={
								(n.tip === '%' ||
									n.tip === '+' ||
									n.tip === '-' ||
									n.tip === '*' ||
									n.tip === '/') &&
								disableBtn
							}

							// grow={n.tip === 'C' ? 'grow' : ''}
							// marginLeft={n.tip === '.' ? 'marginLef' : ''}
						/>
					))}
				</div>
				{/* <div className='btns'>
					{operators.map((o) => (
						<Quads
							key={o.key}
							numb={o.tip}
							onClick={
								o.tip === '+' ||
								o.tip === '-' ||
								o.tip === '*' ||
								o.tip === '/'
									? signHandle
									: resultHandle
							}
							disabled={o.tip === '=' ? false : disableBtn}
							growSecond={o.tip === '=' ? 'grow2' : ''}
						/>
					))}
				</div> */}
			</div>
		</>
	);
};

export default Calc;
