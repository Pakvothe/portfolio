import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpen } from '../../redux/actions';
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';

//components ==>
import Loading from '../loading';
import Navbar from '../navbar';
import Intro from '../intro';
import Background from '../background';
import Education from '../education';
import Contact from '../contact';
import Experience from '../experience';
import Projects from '../projects';
import Footer from '../footer';

//styles ==>
import arrowUp from '../../assets/img/arrow-up.svg';
import { StyledSVG, ScrollButton } from '../styles/GlobalStyle';
import { animateScroll } from 'react-scroll';

//strings ==>
import contactStrings from '../contact/strings';

const HomePage = () => {
	const dispatch = useDispatch();
	const scrollButton = useRef();
	const contactButton = useRef();
	const language = useSelector((state) => state.language);
	const [loading, setLoading] = useState(true);
	const [visits, setVisits] = useState(0);

	useEffect(() => {
		const db = getFirestore();
		const counter = db.collection('Counter').doc('contador666');
		counter.get().then((visit) => {
			setLoading(false);

			if (!localStorage.getItem('visitante')) {
				localStorage.setItem('visitante', '1');
				counter.update({
					counter: firebase.firestore.FieldValue.increment(1),
				});
			}
			setVisits(visit.data().counter);
		});
	}, []);

	window.onscroll = function () {
		scrollFunction();
	};
	const scrollDistance = 700;

	const openModal = () => {
		dispatch(setIsOpen(true));
	};
	function scrollFunction() {
		if (scrollButton.current) {
			if (
				document.body.scrollTop > scrollDistance ||
				document.documentElement.scrollTop > scrollDistance
			) {
				scrollButton.current.style.pointerEvents = 'auto';
				scrollButton.current.style.opacity = '100';
			} else {
				scrollButton.current.style.pointerEvents = 'none';
				scrollButton.current.style.opacity = '0';
			}
		}
		if (contactButton.current) {
			if (
				document.body.scrollTop > scrollDistance ||
				document.documentElement.scrollTop > scrollDistance
			) {
				contactButton.current.style.pointerEvents = 'auto';
				contactButton.current.style.opacity = '100';
			} else {
				contactButton.current.style.pointerEvents = 'none';
				contactButton.current.style.opacity = '0';
			}
		}
	}
	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};

	return (
		<>
			{loading === false ? (
				<div>
					<Navbar visits={visits} />
					<Intro />
					<Background />
					<Education />
					<Contact />
					<Experience/>
					<Projects />
					<Footer />
					<ScrollButton ref={scrollButton} onClick={scrollToTop}>
						<StyledSVG src={arrowUp} />
					</ScrollButton>
					<button
						ref={contactButton}
						className="contact"
						onClick={openModal}
					>
						<p>{contactStrings[language].contact}</p>
					</button>
				</div>
			) : (
				<Loading loading={loading} />
			)}
		</>
	);
};

export default HomePage;

