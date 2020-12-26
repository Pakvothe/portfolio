import React from 'react'
import { useSelector } from 'react-redux';

//styles ==> 
import { AboutStyled } from '../styles/styled_about';

//strings ==>
import strings from './strings'

const AboutMe = () => {
	const language = useSelector(state => state.language);

	return (
		<AboutStyled>
			<div className='about-title'>
				<p>
					<span> {strings[language].title}</span>
				</p>
			</div>
			<div className='about-info'>
				<p>
					<span> Aca va todo el aboutme loremloremlashdkjkadshflsjdkfhlakdjsfhlaskdjfhadslkjfsadjklhfasdjklfhasdlkjfhadslkjfhadskljfhadff </span>
				</p>
			</div>
			<div className='about-scroll'>
				<p>
					<span> scroll to see work </span>
				</p>
			</div>
		</AboutStyled>
	)
}

export default AboutMe
