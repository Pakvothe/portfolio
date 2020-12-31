import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

//styles ==>
import { StyledResume, StyledCloseBtn } from '../styles/styled_resume';
import Slide from 'react-reveal/Slide';
import Shake from 'react-reveal/Shake';
import BigCloseButton from '../../assets/img/close-transparent-gray.svg';
import CurriculumEN from '../../assets/docs/CurriculumEN.jpg';
import CurriculumES from '../../assets/docs/CurriculumES.jpg';
import CurriculumENpdf from '../../assets/docs/CurriculumEN.pdf';
import CurriculumESpdf from '../../assets/docs/CurriculumES.pdf';

//strings ==>
import strings from './strings'

const Resume = ({ show, closeCallback }) => {
	const language = useSelector(state => state.language);


	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = '15px';
		}
		return () => {
			document.body.style.overflow = 'unset';
			document.body.style.paddingRight = '0px';
		};
	}, [show]);



	return (
		<StyledResume>
			<div className='resume__overlay' style={{ display: show ? 'block' : 'none' }} onClick={closeCallback} />
			<Slide right duration={400} when={show}>
				<div className='modal' style={{ display: show ? 'block' : 'none' }}>
					<button title='Close' className='modal__close' onClick={closeCallback}>
						<StyledCloseBtn src={BigCloseButton} />
					</button>
					<Shake>
						<a className='donwload' href={language === 'en' ? CurriculumENpdf : CurriculumESpdf} target='_blank' rel='noreferrer'>{strings[language].dw}</a>
					</Shake>
					<img alt='CV RESUME' className='curriculum' src={language === 'en' ? CurriculumEN : CurriculumES} />
				</div>
			</Slide>
		</StyledResume>
	);
};

export default Resume;