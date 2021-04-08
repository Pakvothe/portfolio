import React from 'react';
import { useSelector } from 'react-redux';

//styles ==>
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { ProjectsStyled } from '../styles/styled_projects';
import Fade from 'react-reveal/Fade';

//images ==>
import InnerImageZoom from 'react-inner-image-zoom';
import tetrisgame from '../../assets/img/tetrisgame.png';
import aconpy from '../../assets/img/aconpy.png';
import gaminghub from '../../assets/img/gaminghub.png';
import quiz1 from '../../assets/img/quiz1.png';
import quiz2 from '../../assets/img/quiz2.png';

//strings ==>
import strings from './strings';
const Projects = () => {
	const language = useSelector((state) => state.language);

	return (
		<ProjectsStyled>
			<div className="title">
				<Fade>
					<p>
						<span>{strings[language].title}</span>
					</p>
				</Fade>
			</div>
			<div className="info">
				<div className="project_container">
					<div className="image_mobile_container">
						<Fade>
							<img
								src={quiz1}
								alt="quiz1"
								className="mobile-img"
							/>
						</Fade>
						<Fade>
							<img
								src={quiz2}
								alt="quiz2"
								className="mobile-img"
							/>
						</Fade>
					</div>
					<Fade cascade>
						<figcaption>
							<div className="title_container">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://appgallery.huawei.com/#/app/C103845919"
									className="title_app hi"
								>
									{' '}
									QuizzMeApp{' '}
								</a>
								<a
									href="https://github.com/Pakvothe/QuizMe-App"
									className="repo"
									target="_blank"
									rel="noreferrer"
								>
									{strings[language].repo}
								</a>
							</div>
							<p>{strings[language].quiz}</p>
							<ul className="badges">
								<li>React Native</li>
								<li>Styled Components</li>
								<li>Firebase</li>
								<li>Redux Toolkit</li>
								<li>GraphQL</li>
								<li>Node</li>
								<li>Express</li>
								<li>MongoDB</li>
								<li>TypeScript</li>
								<li>NextJs</li>
								<li>SCRUM</li>
							</ul>
						</figcaption>
					</Fade>
				</div>
				<div className="project_container mt-12">
					<div className="image_container">
						<Fade>
							<InnerImageZoom
								src={gaminghub}
								className="image_zoom"
								zoomScale={0.7}
							/>
						</Fade>
					</div>
					<Fade cascade>
						<figcaption>
							<div className="title_container">
								<a
									className="title_app"
									href="https://ecommerce-ft07-g07.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									{' '}
									GamingHub{' '}
								</a>
								<a
									className="repo"
									href="https://github.com/Pakvothe/GamingHub"
									target="_blank"
									rel="noreferrer"
								>
									{strings[language].repo}
								</a>
							</div>
							<p>{strings[language].gaming}</p>
							<ul className="badges">
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
				<div className="project_container">
					<div className="image_container">
						<Fade>
							<InnerImageZoom
								src={aconpy}
								className="image_zoom"
								zoomScale={0.7}
							/>
						</Fade>
					</div>
					<Fade cascade>
						<figcaption>
							<div className="title_container">
								<a
									className="title_app"
									href="https://www.aconpy.com/"
									target="_blank"
									rel="noreferrer"
								>
									{' '}
									Aconpy Landing{' '}
								</a>
							
							</div>
							<p>{strings[language].aconpy}</p>
							<ul className="badges">
								<li>Javascript</li>
								<li>HTML</li>
								<li>CSS</li>
								<li>Bootstrap</li>
							</ul>
						</figcaption>
					</Fade>
				</div>
				<div className="project_container">
					<div className="image_container">
						<Fade>
							<InnerImageZoom
								src={tetrisgame}
								className="image_zoom"
								zoomScale={0.7}
							/>
						</Fade>
					</div>
					<Fade cascade>
						<figcaption>
							<div className="title_container">
								<a
									className="title_app"
									href="https://pakvothe.github.io/ReactTetris/"
									target="_blank"
									rel="noreferrer"
								>
									{' '}
									Tetris Game{' '}
								</a>
								<a
									className="repo"
									href="https://github.com/Pakvothe/ReactTetris"
									target="_blank"
									rel="noreferrer"
								>
									{strings[language].repo}
								</a>
							</div>
							<p>{strings[language].tetris}</p>
							<ul className="badges">
								<li>React</li>
								<li>Redux</li>
								<li>Firebase</li>
								<li>Styled Components</li>
							</ul>
						</figcaption>
					</Fade>
				</div>
			</div>
		</ProjectsStyled>
	);
};

export default Projects;
