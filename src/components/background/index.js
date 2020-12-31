import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleResume } from '../../redux/actions';

//styles ==> 
import { BackgroundStyled } from '../styles/styled_background';
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';
import Flip from 'react-reveal/Flip';
import Paco from '../../assets/img/Paco.png';

//strings ==>
import strings from './strings'

//components ==>
import Resume from '../resume';

const Background = () => {
	const language = useSelector(state => state.language);
	const dispatch = useDispatch();
	const showResume = useSelector(state => state.showResume);

	//resume modal ->
	const toggleModal = () => {
		dispatch(toggleResume());
	}
	// <--

	return (
		<BackgroundStyled>
			<div className='title'>
				<Fade left big>
					<p>
						<span> {strings[language].title}</span>
					</p>
				</Fade>
				<Flip left big duration={2000}>
					<img src={Paco} alt="Franco Ortiz" />
				</Flip>
				<div />
			</div>
			<div className='info'>
				<Flip left big duration={2000}>
					<img src={Paco} />
				</Flip>
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
				<Shake when={showResume}>
					<Shake>
						<p className='resume' onClick={toggleModal}> {strings[language].cv}</p>
					</Shake>
				</Shake>
			</div>
			<Resume closeCallback={toggleModal} show={showResume} />
		</BackgroundStyled>
	)
}

export default Background;