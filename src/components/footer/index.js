import React from 'react';
import { useSelector } from 'react-redux';

//styles ==>
import { StyledFooter, StyledSVG } from '../styles/styled_footer';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import github from '../../assets/img/github.svg';
import instagram from '../../assets/img/instagram.svg';
import linkedin from '../../assets/img/linkedin.svg';
import gmail from '../../assets/img/gmail.svg';

//strings ==>
import strings from './strings'

const Footer = () => {
	const language = useSelector(state => state.language);
	const theme = useSelector(state => state.theme);

	return (
		<StyledFooter>
			<div className='sign'>
				<Fade cascade>
					<p>{strings[language].a}</p>
					<p>{strings[language].b}</p>
				</Fade>
				<Tada>
					<a href='https://github.com/Pakvothe/franco-portfolio' target="_blank" rel="noreferrer">{strings[language].c}</a>
				</Tada>
			</div>
			<Fade bottom cascade>
				<ul className='social_media'>
					<li>
						<a href='mailto:franqitto@gmail.com?Subject=Oferta%20Laboral'>
							<StyledSVG style={{ fill: theme === 'dark' ? 'white' : 'black' }} src={gmail} />
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/franco-david-ortiz/' target="_blank" rel="noreferrer">
							<StyledSVG style={{ fill: theme === 'dark' ? 'white' : 'black' }} src={linkedin} />
						</a>
					</li>
					<li>
						<a href='https://github.com/Pakvothe' target="_blank" rel="noreferrer">
							<StyledSVG style={{ fill: theme === 'dark' ? 'white' : 'black' }} src={github} />
						</a>
					</li>
					<li>
						<a href='https://www.instagram.com/pacooortiz/' target="_blank" rel="noreferrer">
							<StyledSVG style={{ fill: theme === 'dark' ? 'white' : 'black' }} src={instagram} />
						</a>
					</li>
				</ul>
			</Fade>
		</StyledFooter>
	)
}

export default Footer;