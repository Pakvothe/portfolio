import React from 'react';
import { useSelector } from 'react-redux';

//styles ==> 
import { ProjectsStyled } from '../styles/styled_projects';
import Fade from 'react-reveal/Fade';

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
						<Fade>
							<a href='/#'><img src='https://freepngimg.com/thumb/final_fantasy/3-2-final-fantasy-free-download-png.png' alt='lalalala' /></a>
						</Fade>
					</div>
					<Fade right cascade>
						<figcaption>
							<div>
								<a href='/#'> Title </a>
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
						<Fade  >
							<a href='/#'><img src='https://freepngimg.com/thumb/final_fantasy/3-2-final-fantasy-free-download-png.png' alt='lalalala' /></a>
						</Fade>
					</div>
					<Fade right cascade>
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
						<Fade  >
							<a href='/#'><img src='https://freepngimg.com/thumb/final_fantasy/3-2-final-fantasy-free-download-png.png' alt='lalalala' /></a>
						</Fade>
					</div>
					<Fade right cascade>
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