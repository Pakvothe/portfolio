import React from 'react';
import { useSelector } from 'react-redux';

//styles ==> 
import { BackgroundStyled } from '../styles/styled_background';
import Fade from 'react-reveal/Fade';

//strings ==>
import strings from './strings'

const Background = () => {
	const language = useSelector(state => state.language);
	return (
		<BackgroundStyled>
			<div className='title'>
				<Fade left big>
					<p>
						<span> {strings[language].title}</span>
					</p>
				</Fade>
			</div>
			<div className='info'>
				<Fade right big>
					<p>
						{strings[language].p1}
					</p>
					<p>
						{strings[language].p2}
					</p>
					<p>
						{strings[language].p3}
					</p>
				</Fade>
			</div>
		</BackgroundStyled>
	)
}

export default Background;
