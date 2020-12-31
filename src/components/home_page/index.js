import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../redux/actions';

//components ==> 
import Loading from '../loading';
import Intro from '../intro';
import Background from '../background';
import Education from '../education';
import Contact from '../contact';
import Projects from '../projects';
import Footer from '../footer';

//styles ==>
import arrowUp from '../../assets/img/arrow-up.svg';
import { StyledSVG, ScrollButton, StyledLoader } from '../styles/GlobalStyle';

//strings ==>
import contactStrings from '../contact/strings';

const HomePage = () => {
	const dispatch = useDispatch();
	const scrollButton = useRef();
	const contactButton = useRef();
	const language = useSelector(state => state.language);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 3000)
	}, [])

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
		<>
			{loading === false ? (
				<div>
					<Intro />
					<Background />
					<Education />
					<Contact />
					<Projects />
					<Footer />
					<ScrollButton ref={scrollButton} onClick={scrollToTop}>
						<StyledSVG src={arrowUp} />
					</ScrollButton>
					<button ref={contactButton} className='contact' onClick={openModal}><p>{contactStrings[language].contact}</p></button>
				</div>
			) : (
					<Loading loading={loading} />
				)}
		</>
	)
}

export default HomePage;