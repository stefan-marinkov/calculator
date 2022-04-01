import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import GlobalStyle from './index.styled';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
