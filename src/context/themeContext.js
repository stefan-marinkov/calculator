import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		powderWhite: '#FFFDF9',
		persianGreen: '#06B49A',
		lightBlue: '#AFDBD2',
		onyx: '#36313D',
		wheat: 'wheat',
	},
	fonts: ['sans-serif', 'Roboto'],
	fontSizes: {
		small: '1rem',
		medium: '2rem',
		large: '3rem',
	},
};

const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
