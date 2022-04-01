import styled from 'styled-components';

export const StyledApp = styled.div`
	position: absolute;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	margin: 0 auto;
	background-color: ${(props) =>
		props.changeTheme ? props.theme.colors.onyx : props.theme.colors.wheat};
	color: ${(props) =>
		props.changeTheme ? props.theme.colors.wheat : props.theme.colors.onyx};
`;
export const StyledCalcContainer = styled.div`
	width: 60%;
	margin: 0 auto;

	@media screen and (max-width: 792px) {
		width: 100%;
	}
	@media screen and (max-width: 792px) and (orientation: landscape) {
		width: 100%;
		background: ${({ changeTheme, theme: { colors } }) =>
			changeTheme ? colors.onyx : colors.wheat};
	}
`;
