import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

//styles ==>
import Normalize from 'react-normalize';
import './App.css';
import { GlobalStyle } from './components/styles/GlobalStyle';
import { lightTheme, darkTheme } from './components/styles/themes';

//components ==>
import HomePage from './components/home_page';

function App() {
	const theme = useSelector(state => state.theme);

	return (
		<>
			<Normalize />
			<GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
			<Switch>
				<main className='main-container'>
					<Route path='/' component={HomePage} />
				</main>
			</Switch>
		</>
	);
}

export default App;