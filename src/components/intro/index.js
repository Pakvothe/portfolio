import React from 'react'
import { useSelector } from 'react-redux';

//styles ==> 
import { IntroStyled } from '../styles/styled_about';

//strings ==>
import strings from './strings'

const Intro = () => {
	const language = useSelector(state => state.language);

	return (
		<IntroStyled>
			<div className='intro-title'>
				<p>
					<span> {strings[language].title}</span>
				</p>
			</div>
			<div className='intro-info'>
				<p>
					<span> {strings[language].info}</span>
				</p>
			</div>
			<div className='intro-scroll'>
				<p>
					<span> {strings[language].scroll}</span>
				</p>
			</div>
		</IntroStyled>
	)
}

export default Intro
