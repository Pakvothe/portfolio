import React from 'react';
import { useSelector } from 'react-redux';

//styles ==> 
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { ProjectsStyled } from '../styles/styled_projects';
import Fade from 'react-reveal/Fade';

//images ==> 
import InnerImageZoom from 'react-inner-image-zoom';
import finalweather from '../../assets/img/finalweather.png';
import tetrisgame from '../../assets/img/tetrisgame.png';
import gaminghub from '../../assets/img/gaminghub.png';

//strings ==>
import strings from './strings'

const Projects = () => {
	const language = useSelector(state => state.language);

	return (
		<ProjectsStyled>
			<div className='title'>
				<Fade left >
					<p>
						<span>{strings[language].title}</span>
					</p>
				</Fade>
			</div>
			<div className='info'>
				<div className='project_container'>
					<div className='image_container'>
						<Fade left big>
							<InnerImageZoom src={gaminghub} className='image_zoom' zoomScale={0.7} />
						</Fade>
					</div>
					<Fade right cascade big>
						<figcaption>
							<div className='title_container'>
								<a className='title_app' href='https://ecommerce-ft07-g07.vercel.app/' target='_blank' rel='noreferrer'  > GamingHub </a>
								<a className='repo' href='/#' target='_blank' rel='noreferrer' >{strings[language].repo}</a>
							</div>
							<p className='in_process'>{strings[language].progress}</p>
							<p>{strings[language].gaming}</p>
							<ul className='badges'>
								<li>React</li>
								<li>Redux</li>
								<li>Styled Components</li>
								<li>Node</li>
								<li>Express</li>
								<li>Sequelize</li>
								<li>PostgreSQL</li>
								<li>Firebase</li>
								<li>Passport</li>
								<li>SCRUM</li>
							</ul>
						</figcaption>
					</Fade>
				</div>
				<div className='project_container'>
					<div className='image_container'>
						<Fade left big>
							<InnerImageZoom src={tetrisgame} className='image_zoom' zoomScale={0.7} />
						</Fade>
					</div>
					<Fade right cascade big>
						<figcaption>
							<div className='title_container'>
								<a className='title_app' href='https://pakvothe.github.io/ReactTetris/' target='_blank' rel='noreferrer'  > Tetris Game </a>
								<a className='repo' href='https://github.com/Pakvothe/ReactTetris' target='_blank' rel='noreferrer' >{strings[language].repo}</a>
							</div>
							<p>{strings[language].tetris}</p>
							<ul className='badges'>
								<li>React</li>
								<li>Redux</li>
								<li>Firebase</li>
								<li>Styled Components</li>
							</ul>
						</figcaption>
					</Fade>
				</div>
				<div className='project_container'>
					<div className='image_container'>
						<Fade left big>
							<InnerImageZoom src={finalweather} alt='final weather' className='image_zoom' zoomScale={0.7} />
						</Fade>
					</div>
					<Fade right cascade big>
						<figcaption>
							<div className='title_container'>
								<a className='title_app' href='https://pakvothe.github.io/FinalWeather/' target='_blank' rel='noreferrer'  > Final Weather </a>
								<a className='repo' href='https://github.com/Pakvothe/FinalWeather' target='_blank' rel='noreferrer' >{strings[language].repo}</a>
							</div>
							<p>{strings[language].fw}</p>
							<ul className='badges'>
								<li>React</li>
								<li>React-Reveal</li>
								<li>CSS Modules</li>
							</ul>
						</figcaption>
					</Fade>
				</div>
			</div>
		</ProjectsStyled>
	)
}

export default Projects;