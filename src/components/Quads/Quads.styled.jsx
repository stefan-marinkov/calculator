import styled from 'styled-components';

export const StyledButton = styled.button`
	box-shadow: 1px 1px 2px 2px wheat;
	background-color: ${(props) =>
		props.changeTheme ? props.theme.colors.onyx : props.theme.colors.wheat};
	width: ${(props) => props.maxWidth && '100%'};
	height: ${(props) => props.maxHeight && '100%'};
	color: ${(props) =>
		props.changeTheme ? props.theme.colors.wheat : props.theme.colors.onyx};

	@media screen and (orientation: landscape) {
		height: ${(props) => props.maxHeight && '50%'};
		margin-top: ${(props) => props.maxHeight && '27px'};
	}
`;
