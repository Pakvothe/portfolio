import React from 'react';
import { useSelector } from 'react-redux';

//styles ==> 
import { EducationContainer, Ed, Skills } from '../styles/styled_education';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

//strings ==>
import strings from './strings'

const Education = () => {
	const language = useSelector(state => state.language);
	return (
		<EducationContainer>
			<Ed>
				<div className='title'>
					<Fade left big>
						<p>
							<span>{strings[language].title1}</span>
						</p>
					</Fade>
				</div>
				<div className='info'>
					<div className='edContainer'>
						<Roll left cascade>
							<div className='education'>
								<h5>{strings[language].ed1}</h5>
								<p>{strings[language].ed1info}</p>
							</div>
							<div className='education'>
								<h5>{strings[language].ed2}</h5>
								<p>HTML5 - CSS3 - JavaScript - jQuery - AJAX - MySQL.</p>
							</div>
							<div className='education'>
								<h5>{strings[language].ed3}</h5>
								<p>{strings[language].ed3info}</p>
							</div>
						</Roll>
					</div>
				</div>
			</Ed>
			<Skills>
				<div className='title'>
					<Fade left big>
						<p>
							<span>{strings[language].title2}</span>
						</p>
					</Fade>
				</div>
				<div className='info'>
					<ul className='skill'>
						<Roll right cascade>
							<div className='skillDiv'>
								<h5>Front</h5>
								<li><p>JavaScript ES6+</p></li>
								<li><p>React</p></li>
								<li><p>Redux</p></li>
								<li><p>Semantic HTML</p></li>
								<li><p>CSS</p></li>
								<li><p>LESS</p></li>
								<li><p>Bootstrap</p></li>
								<li><p>Styled Components</p></li>
							</div>
							<div className='skillDiv'>
								<h5>Back</h5>
								<li><p>Node</p></li>
								<li><p>Express</p></li>
								<li><p>Sequelize</p></li>
								<li><p>PostgreSQL</p></li>
								<li><p>Passport</p></li>
								<li><p>Firebase</p></li>
							</div>
							<div className='skillDiv'>
								<h5>Tools</h5>
								<li><p>Linux</p></li>
								<li><p>Git & Github</p></li>
								<li><p>React & Redux DevTools</p></li>
								<li><p>Postman</p></li>
								<li><p>Insomnia</p></li>
								<li><p>VSCode & VIM</p></li>
							</div>
							<div className='skillDiv'>
								<h5>Soft Skills</h5>
								<li><p>{strings[language].ss1}</p></li>
								<li><p>{strings[language].ss2}</p></li>
								<li><p>{strings[language].ss3}</p></li>
								<li><p>{strings[language].ss4}</p></li>
								<li><p>{strings[language].ss5}</p></li>
								<li><p>{strings[language].ss6}</p></li>
							</div>
						</Roll>
					</ul>
				</div>

			</Skills>
		</EducationContainer>
	)
}

export default Education;
