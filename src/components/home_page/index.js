import React from 'react'

//components ==> 
import Intro from '../intro';
import Background from '../background';
import Education from '../education';

const HomePage = () => {
	return (
		<div>
			<Intro />
			<Background />
			<Education />
		</div>
	)
}

export default HomePage;