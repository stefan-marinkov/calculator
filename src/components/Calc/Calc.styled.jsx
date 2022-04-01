import styled from 'styled-components';

export const StyledCalculator = styled.div`
	/* height: 100%; */
	@media screen and (orient: landscape) {
		width: 100%;
		min-height: 200px;
	}
`;
export const StyledMonitor = styled.header`
	display: flex;
	width: 100%;
	margin: 0 auto;
	background: ${({ changeTheme, theme: { colors } }) =>
		changeTheme ? colors.onyx : colors.wheat};
	@media screen and (max-width: 792px) {
		width: 100%;
	}
	@media screen and (orientation: landscape) {
		.monitor-grid {
			margin-top: 0;
			width: 70%;
		}
	}
`;

export const StyledMonitorGrid = styled.div`
	border: 0.5px solid
		${({ changeTheme, theme: { colors } }) =>
			changeTheme ? colors.wheat : colors.onyx};
	border-bottom: none;
	width: 90%;
	height: 75px;
	margin: 0 auto;
	margin-top: 10%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	padding: 20px;
	> :first-child {
		grid-column: 1/4;
		font-size: 2rem;
		height: 54px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
`;
export const StyledMonitorDisplay = styled.div`
	border-bottom: 0.5px solid
		${({ changeTheme, theme: { colors } }) =>
			changeTheme ? colors.wheat : colors.onyx};
	padding-right: 2%;
	overflow-x: hidden;
`;

export const StyledAllTips = styled.div`
	display: flex;
	width: 100%;
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
export const StyledTips = styled.div`
	border: 0.5px solid
		${({ changeTheme, theme: { colors } }) =>
			changeTheme ? colors.wheat : colors.onyx};
	border-top: none;
	width: 90%;
	height: 350px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	padding: 20px;
	> :first-child {
		grid-column: 1/3;
	}
	> :nth-child(2) {
		display: none;
	}
	@media screen and (max-width: 792px) and (orientation: landscape) {
		height: 250px;
	}
`;
