import React from 'react';
import { useSelector } from 'react-redux';

//styles ==> 
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { ProjectsStyled } from '../styles/styled_projects';
import Fade from 'react-reveal/Fade';

//images ==> 
import InnerImageZoom from 'react-inner-image-zoom';
import finalweather from '../../assets/img/finalweather.png';

//strings ==>
import strings from './strings'

const Projects = () => {
	const language = useSelector(state => state.language);

	return (
		<ProjectsStyled>
			<div className='title'>
				<Fade left >
					<p>
						<span>Projects</span>
					</p>
				</Fade>
			</div>
			<div className='info'>
				<div className='project_container'>
					<div className='image_container'>
						<Fade left big>
							<InnerImageZoom src={finalweather} className='image_zoom' zoomScale='0.7' />
						</Fade>
					</div>
					<Fade right cascade big>
						<figcaption>
							<div className='title_container'>
								<a href='https://ff-weather.herokuapp.com/' target='_blank' rel='noreferrer'> Final Weather </a>
								<a href='https://github.com/Pakvothe/FinalWeather' target='_blank' rel='noreferrer'>{strings[language].repo}</a>
							</div>
							<p>{strings[language].fw}</p>
							<ul className='badges'>
								<li>React</li>
								<li>React-Reveal</li>
								<li>CSS Modules</li>
								<li>Heroku</li>
							</ul>
						</figcaption>
					</Fade>
				</div>
				<div className='project_container'>
					<div className='image_container'>
						<Fade left big>
							<InnerImageZoom src={finalweather} className='image_zoom' zoomScale='0.5' />
						</Fade>
					</div>
					<Fade right cascade big>
						<figcaption>
							<div>
								<a href='/#'>Title</a>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt bibendum velit, quis cursus ligula vehicula vel. Ut mauris sem, ultrices sed velit a, dignissim malesuada quam. Proin facilisis metus v</p>
							<ul className='badges'>
								<li>React</li>
								<li>Redux</li>
								<li>Node</li>
								<li>Express</li>
							</ul>
						</figcaption>
					</Fade>
				</div>
				<div className='project_container'>
					<div className='image_container'>
						<Fade left big>
							<InnerImageZoom src={finalweather} className='image_zoom' zoomScale='0.5' />
						</Fade>
					</div>
					<Fade right cascade big>
						<figcaption>
							<div>
								<a href='/#'>Title</a>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt bibendum velit, quis cursus ligula vehicula vel. Ut mauris sem, ultrices sed velit a, dignissim malesuada quam. Proin facilisis metus v</p>
							<ul className='badges'>
								<li>React</li>
								<li>Redux</li>
								<li>Node</li>
								<li>Express</li>
							</ul>
						</figcaption>
					</Fade>
				</div>
			</div>
		</ProjectsStyled>
	)
}

export default Projects;