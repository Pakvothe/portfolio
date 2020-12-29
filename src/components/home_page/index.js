import React, { useRef } from 'react';

//components ==> 
import Intro from '../intro';
import Background from '../background';
import Education from '../education';
import Contact from '../contact';

//styles ==>
import arrowUp from '../../assets/img/arrow-up.svg';
import { StyledSVG, ScrollButton, GlobalStyle } from '../styles/GlobalStyle';

const HomePage = () => {
	const scrollButton = useRef();

	window.onscroll = function () { scrollFunction() };
	const scrollDistance = 700;

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
		</div>
	)
}

export default HomePage;