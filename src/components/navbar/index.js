import React from "react";
import { useDispatch, useSelector } from "react-redux";

//styles ==>
import { NavbarStyled, Dropdown, StyledSVG } from "../styles/styled_navbar";
import Fade from "react-reveal/Fade";
//actions ==>
import { toggleTheme, changeLanguage } from "../../redux/actions";

//logos ==>
import moon from "../../assets/img/moon.svg";
import sun from "../../assets/img/sun.svg";
import languageIcon from "../../assets/img/language.svg";

//strings ==>
import strings from "./strings";

const Navbar = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  const handleLang = (ev) => {
    if (ev.target.id) {
      dispatch(changeLanguage(ev.target.id));
    }
  };

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <NavbarStyled>
      <div className="wrapper navbar__top">
        <ul className="navbar__options">
          <Dropdown>
            <Fade>
              <StyledSVG src={languageIcon} />
            </Fade>
            <Fade>
              <span>{strings[language].language}</span>
            </Fade>
            <ul onClick={(e) => handleLang(e)}>
              <Fade duration={200}>
                <li>
                  <p id="en" className={language === "en" ? "selected" : null}>
                    {strings[language].language_en}
                  </p>{" "}
                </li>
                <li>
                  <p id="es" className={language === "es" ? "selected" : null}>
                    {strings[language].language_es}
                  </p>
                </li>
              </Fade>
            </ul>
          </Dropdown>
          <li>
            <button onClick={handleTheme}>
              <Fade>
                <StyledSVG src={theme === "light" ? sun : moon} />
              </Fade>
              <Fade>
                <span>{strings[language].theme}</span>
              </Fade>
            </button>
          </li>
        </ul>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
