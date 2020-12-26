import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//styles ==>
import './App.css';
import { GlobalStyle } from './components/styles/GlobalStyle';
import { lightTheme, darkTheme } from './components/styles/themes';

//components ==>
import HomePage from './components/home_page';

function App() {
	const theme = useSelector(state => state.theme);

	return (
		<>
			<GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
			<Switch>
				<Route path='/' component={HomePage} />
			</Switch>
		</>
	);
}

export default App;