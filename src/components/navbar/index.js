import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavbarStyled, Dropdown, StyledSVG } from '../styles/styled_navbar';

//actions ==>
import { toggleTheme, changeLanguage } from '../../redux/actions';

//logos ==> 
import moon from '../../assets/img/moon.svg';
import sun from '../../assets/img/sun.svg';
import languageIcon from '../../assets/img/language.svg';

//strings ==>
import strings from './strings'

const Navbar = () => {
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
				<div />
				<ul className='navbar__options'>
					<Dropdown>
						<StyledSVG src={languageIcon} />
						<span>{strings[language].language}</span>
						<ul onClick={(e) => handleLang(e)}>
							<li>
								<a id="en" className={language === 'en' ? 'selected' : null}>
									{strings[language].language_en}
								</a> </li>
							<li>
								<a id="es" className={language === 'es' ? 'selected' : null}>
									{strings[language].language_es}
								</a>
							</li>
						</ul>
					</Dropdown>
					<li>
						<button onClick={handleTheme}>
							<StyledSVG src={theme === 'light' ? sun : moon} />
							<span>{strings[language].theme}</span>
						</button>
					</li>
				</ul>
			</div>
		</NavbarStyled>
	)
}

export default Navbar;
