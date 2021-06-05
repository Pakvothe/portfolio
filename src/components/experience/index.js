import React from 'react';
import { useSelector } from 'react-redux';

//styles ==>
import { ExperienceStyled } from '../styles/styled_experience';
import Fade from 'react-reveal/Fade';

//strings ==>
import strings from './strings';

const Experience = () => {
	const language = useSelector((state) => state.language);

	return (
		<ExperienceStyled>
            <div className="title">
				<Fade>
					<p>
						<span>{strings[language].title}</span>
					</p>
				</Fade>
			</div>
			<div className="info">
				<div className="experience_container">
					<Fade cascade>
						<figcaption>
							<div className="title_container">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.navent.com"
									className="title_app hi"
								>
									Navent
								</a>
                                <p className="repo">
									May 2021 - {strings[language].act}
								</p>
							</div>
                            <p>{strings[language].navent}</p>
						</figcaption>
					</Fade>
                </div>
                <div className="experience_container">
					<Fade cascade>
						<figcaption>
							<div className="title_container">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.aconpy.com/"
									className="title_app hi"
								>
									Aconpy / Paiddly
								</a>
                                <p className="repo">
									Feb 2021 - May 2021
								</p>
							</div>
							<p>{strings[language].aconpy}</p>
						</figcaption>
					</Fade>
                </div>
            </div>
            
        </ExperienceStyled>
	);
};

export default Experience;
