import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import { setIsOpen } from '../../redux/actions';

//strings ==>
import strings from './strings';

//Styles ==>
import '../styles/contact.css';
import { StyledSVG } from '../styles/styled_navbar';
import Swal from 'sweetalert2';
import close from '../../assets/img/close-transparent-gray.svg';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
	const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_USER } = process.env;
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
		emailjs.sendForm(REACT_APP_SERVICE, REACT_APP_TEMPLATE, e.target, REACT_APP_USER)
			.then((result) => {
				Swal.fire({
					heightAuto: false,
					title: strings[language].alert1,
					text: strings[language].succ,
					icon: 'success',
					confirmButtonText: 'Ok',
					confirmButtonColor: '#0097A7',
					willClose: () => {
						dispatch(setIsOpen(false))
						document.body.style.overflow = 'unset';
					}
				})
			}, (error) => {
				Swal.fire({
					heightAuto: false,
					title: 'Error!',
					text: strings[language].err,
					icon: 'error',
					confirmButtonText: 'Ok',
					confirmButtonColor: '#0097A7',
					willClose: () => {
						dispatch(setIsOpen(false))
						document.body.style.overflow = 'unset';
					}
				})
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
				contentLabel={'Contact'}
				portalClassName={'ReactModalPortal'}
				ariaHideApp={false}
			>
				<Zoom cascade duration={200}>
					<button className='button' onClick={closeModal}><StyledSVG src={close} /></button>
					<form onSubmit={sendEmail}>
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
									type='text'
									name='name'
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
									type='email'
									name='email'
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
									type='text'
									name='subject'
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
									name='message'
									placeholder={strings[language].ph}
									required
								/>
							</label>
							<input className='submit' type='submit' value={strings[language].send} />
						</div>
					</form>
				</Zoom>
			</Modal>
		</>
	);
}

export default Contact;