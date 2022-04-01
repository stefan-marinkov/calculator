import styled from 'styled-components';

export const StyledToggle = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-right: 5%;
	margin-top: 15%;

	@media screen and (max-width: 792px) and (orientation: landscape) {
		margin-top: 1%;
	}
`;

export const StyledTitleTheme = styled.div`
	width: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CheckBoxWrapper = styled.div`
	position: relative;
`;
export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 42px;
	height: 26px;
	border-radius: 15px;
	border: 0.5px solid
		${({ changeTheme, theme: { colors } }) =>
			changeTheme ? colors.wheat : colors.onyx};

	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		border: 0.3px solidck
			${({ changeTheme, theme: { colors } }) =>
				changeTheme ? colors.onyx : colors.wheat};
		width: 18px;
		height: 18px;
		margin: 3px;
		background: ${({ changeTheme, theme: { colors } }) =>
			changeTheme ? colors.wheat : colors.onyx};
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
export const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 42px;
	height: 26px;
	&:checked + ${CheckBoxLabel} {
		border: 0.3px solid
			${({ changeTheme, theme: { colors } }) =>
				changeTheme ? colors.wheat : colors.onyx};
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 21px;
			transition: 0.2s;
		}
	}
`;
