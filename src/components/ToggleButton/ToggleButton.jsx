import React from 'react';
import './ToggleButton.styled.jsx';
import {
	CheckBox,
	CheckBoxLabel,
	CheckBoxWrapper,
	StyledToggle,
	StyledTitleTheme,
} from './ToggleButton.styled.jsx';

const ToggleButton = ({ handleChange, changeTheme }) => {
	return (
		<StyledToggle changeTheme={changeTheme}>
			<StyledTitleTheme changeTheme={changeTheme}>
				{changeTheme ? (
					<label>Light Mode Switch</label>
				) : (
					<label>Dark Mode Switch</label>
				)}
			</StyledTitleTheme>
			<CheckBoxWrapper changeTheme={changeTheme}>
				<CheckBox
					changeTheme={changeTheme}
					id='checkbox'
					type='checkbox'
					onChange={handleChange}
				/>
				<CheckBoxLabel htmlFor='checkbox' changeTheme={changeTheme} />
			</CheckBoxWrapper>
		</StyledToggle>
	);
};

export default ToggleButton;
