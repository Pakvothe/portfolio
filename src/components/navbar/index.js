import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

//styles ==>
import { NavbarStyled, Dropdown, StyledSVG } from '../styles/styled_navbar';
import Fade from 'react-reveal/Fade';
//actions ==>
import { toggleTheme, changeLanguage } from '../../redux/actions';

//logos ==> 
import moon from '../../assets/img/moon.svg';
import sun from '../../assets/img/sun.svg';
import languageIcon from '../../assets/img/language.svg';
import user from '../../assets/img/user.svg';

//strings ==>
import strings from './strings'

const Navbar = ({ visits }) => {
	const dispatch = useDispatch();
	const language = useSelector(state => state.language);
	const theme = useSelector(state => state.theme);

	const handleLang = (ev) => {
		dispatch(changeLanguage(ev.target.id))
	}

	const handleTheme = () => {
		dispatch(toggleTheme())
	}

	return (
		<NavbarStyled>
			<div className='wrapper navbar__top'>
				<div className='visits'>
					<StyledSVG src={user} />

					<p>{strings[language].vis} <span className='number'>{visits}</span> </p>


				</div>
				<ul className='navbar__options'>
					<Dropdown>
						<Fade top>
							<StyledSVG src={languageIcon} />
						</Fade>
						<Fade bottom>
							<span>{strings[language].language}</span>
						</Fade>
						<ul onClick={(e) => handleLang(e)}>
							<Fade duration={200}>
								<li>
									<a id='en' href='/#' className={language === 'en' ? 'selected' : null}>
										{strings[language].language_en}
									</a> </li>
								<li>
									<a id='es' href='/#' className={language === 'es' ? 'selected' : null}>
										{strings[language].language_es}
									</a>
								</li>
							</Fade>
						</ul>
					</Dropdown>
					<li>
						<button onClick={handleTheme}>
							<Fade top>
								<StyledSVG src={theme === 'light' ? sun : moon} />
							</Fade>
							<Fade bottom>
								<span>{strings[language].theme}</span>
							</Fade>
						</button>
					</li>
				</ul>
			</div>
		</NavbarStyled>
	)
}

export default Navbar;
