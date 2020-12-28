import React from 'react'
import { useSelector } from 'react-redux';

//styles ==> 
import { IntroStyled } from '../styles/styled_intro';
import LightSpeed from 'react-reveal/LightSpeed';
import Pulse from 'react-reveal/Pulse';

//strings ==>
import strings from './strings'

const Intro = () => {
	const language = useSelector(state => state.language);

	return (
		<IntroStyled>
			<Pulse>
				<div className='intro-title'>
					<p>
						<span> {strings[language].title}</span>
					</p>
				</div>
			</Pulse>
			<LightSpeed right>
				<div className='intro-info'>
					<p>
						<span> {strings[language].info} <span className='strong'>Franco Ortiz</span> {strings[language].info2} </span>
					</p>
				</div>
			</LightSpeed>
			<Pulse>
				<div className='intro-scroll'>
					<p>
						<span> {strings[language].scroll}</span>
					</p>
				</div>
			</Pulse>
		</IntroStyled>
	)
}

export default Intro
