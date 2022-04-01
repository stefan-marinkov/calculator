import React, { useState } from 'react';
import Theme from '../context/themeContext';
import { StyledApp, StyledCalcContainer } from './App.styled.jsx';
import Calc from './Calc/Calc';
import ToggleButton from './ToggleButton/ToggleButton';

function App() {
	const [changeTheme, setChangeTheme] = useState(false);
	const handleChange = () => setChangeTheme(!changeTheme);
	return (
		<Theme>
			<StyledApp changeTheme={changeTheme}>
				<StyledCalcContainer changeTheme={changeTheme}>
					<ToggleButton
						changeTheme={changeTheme}
						handleChange={handleChange}
					/>
					<Calc changeTheme={changeTheme} />
				</StyledCalcContainer>
			</StyledApp>
		</Theme>
	);
}

export default App;
