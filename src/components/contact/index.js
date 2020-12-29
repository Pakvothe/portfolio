import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import { setIsOpen } from '../../redux/actions';

//strings ==>
import strings from './strings'

//Styles ==>
import '../styles/contact.css';
import { StyledSVG } from '../styles/styled_navbar';
import close from '../../assets/img/close-transparent-gray.svg';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
	const dispatch = useDispatch();
	const theme = useSelector(state => state.theme);
	const language = useSelector(state => state.language);
	const modalIsOpen = useSelector(state => state.modalIsOpen);
	const customStyles = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(23, 28, 40, 0.95)',
		},
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			height: '80%',
			border: '2px solid #0097A7',
			borderRadius: '10px',
			boxShadow: '0 0 10px #00BCD4',
			color: theme === 'dark' ? 'white' : 'black',
			background: theme === 'dark' ? 'rgba(23, 28, 40, 1)' : 'white',
			WebkitOverflowScrolling: 'touch',
		},
	};

	const afterOpenModal = () => {
		document.body.style.overflow = 'hidden';
	}

	const closeModal = () => {
		dispatch(setIsOpen(false))
		document.body.style.overflow = 'unset';
	}

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_d5iwd6i', 'template_901qvbv', e.target, 'user_LuoBSYK4fAOLTQsEkyDB1')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

		e.target.reset();
	}

	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel={"Contact"}
				portalClassName={"ReactModalPortal"}
			>
				<Zoom cascade duration={700}>
					<button className='button' onClick={closeModal}><StyledSVG src={close} /></button>
					<form onSubmit={sendEmail, closeModal}>
						<div className='flex-form-container'>
							<h1 style={{ color: theme === 'dark' ? 'white' : 'black' }}>{strings[language].contact}</h1>
							<label>
								<span style={{ background: theme === 'dark' ? 'rgba(23, 28, 40, 1)' : 'white' }}>{strings[language].name}</span>
								<input
									className='inputs'
									style={{
										color: theme === 'dark' ? 'white' : 'black',
										background: theme === 'dark' ? 'rgba(23, 28, 40, 1)' : 'white',
									}}
									type="text"
									name="name"
									required
								/>
							</label>
							<label>
								<span style={{ background: theme === 'dark' ? 'rgba(23, 28, 40, 1)' : 'white' }}>{strings[language].email}</span>
								<input
									className='inputs'
									style={{
										color: theme === 'dark' ? 'white' : 'black',
										background: theme === 'dark' ? 'rgba(23, 28, 40, 1)' : 'white',
									}}
									type="email"
									name="email"
									required
								/>
							</label>
							<label>
								<span style={{ background: theme === 'dark' ? 'rgba(23, 28, 40, 1)' : 'white' }}>{strings[language].subject}</span>
								<input
									className='inputs'
									style={{
										color: theme === 'dark' ? 'white' : 'black',
										background: theme === 'dark' ? 'rgba(23, 28, 40, 1)' : 'white',
									}}
									type="text"
									name="subject"
									required
								/>
							</label>
							<label>
								<span style={{ background: theme === 'dark' ? 'rgba(23, 28, 40, 1)' : 'white' }}>{strings[language].message}</span>
								<textarea
									style={{
										color: theme === 'dark' ? 'white' : 'black',
										background: theme === 'dark' ? 'rgba(23, 28, 40, 1)' : 'white',
									}} className='inputs'
									name="message"
									required
								/>
							</label>
						</div>
						<input className='submit' type="submit" value={strings[language].send} />
					</form>
				</Zoom>
			</Modal>
		</>
	);
}

export default Contact;