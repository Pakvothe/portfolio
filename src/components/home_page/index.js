import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../redux/actions';

//components ==> 
import Intro from '../intro';
import Background from '../background';
import Education from '../education';
import Contact from '../contact';

//styles ==>
import arrowUp from '../../assets/img/arrow-up.svg';
import { StyledSVG, ScrollButton } from '../styles/GlobalStyle';

//strings ==>
import contactStrings from '../contact/strings';


const HomePage = () => {
	const dispatch = useDispatch();
	const scrollButton = useRef();
	const contactButton = useRef();
	const language = useSelector(state => state.language);

	window.onscroll = function () { scrollFunction() };
	const scrollDistance = 700;

	const openModal = () => {
		dispatch(setIsOpen(true))

	}
	function scrollFunction() {
		if (scrollButton.current) {
			if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {
				scrollButton.current.style.pointerEvents = 'auto';
				scrollButton.current.style.opacity = '100';
			} else {
				scrollButton.current.style.pointerEvents = 'none';
				scrollButton.current.style.opacity = '0';
			}
		}
		if (contactButton.current) {
			if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {
				contactButton.current.style.pointerEvents = 'auto';
				contactButton.current.style.opacity = '100';
			} else {
				contactButton.current.style.pointerEvents = 'none';
				contactButton.current.style.opacity = '0';
			}
		}
	}
	const scrollToTop = () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<div>
			<Intro />
			<Background />
			<Education />
			<Contact />
			<ScrollButton ref={scrollButton} onClick={scrollToTop}>
				<StyledSVG src={arrowUp} />
			</ScrollButton>
			<button ref={contactButton} className='contact' onClick={openModal}><p>{contactStrings[language].contact}</p></button>
		</div>
	)
}

export default HomePage;