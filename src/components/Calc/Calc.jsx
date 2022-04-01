import React, { useState } from 'react';
import { operators } from '../../helpers/numbs';
import Quads from '../Quads/Quads';
import {
	StyledMonitor,
	StyledMonitorGrid,
	StyledAllTips,
	StyledTips,
	StyledMonitorDisplay,
	StyledCalculator,
} from './Calc.styled.jsx';

const Calc = ({ changeTheme }) => {
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
					: calculate.num === 0 && value === '00'
					? '00'
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
	const backspaceHandle = (e) => {
		e.preventDefault();
	};

	return (
		<StyledCalculator changeTheme={changeTheme}>
			<StyledMonitor changeTheme={changeTheme}>
				<StyledMonitorGrid changeTheme={changeTheme}>
					<StyledMonitorDisplay changeTheme={changeTheme}>
						{!calculate.result ? '' : calculate.result}
						{calculate.sign && calculate.sign}
						{!calculate.num ? '' : calculate.num}
					</StyledMonitorDisplay>
					<div>
						{operators.map(
							(n) =>
								n.tip === '<=' && (
									<Quads
										key={n.key}
										numb={n.tip}
										onClick={backspaceHandle}
										maxWidth
										maxHeight
										changeTheme={changeTheme}
									/>
								)
						)}
					</div>
				</StyledMonitorGrid>
			</StyledMonitor>
			<StyledAllTips changeTheme={changeTheme}>
				<StyledTips changeTheme={changeTheme}>
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
							changeTheme={changeTheme}
						/>
					))}
				</StyledTips>
			</StyledAllTips>
		</StyledCalculator>
	);
};

export default Calc;
