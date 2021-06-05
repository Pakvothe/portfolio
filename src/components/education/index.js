import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

//styles ==>
import CertificadoHenry from '../../assets/img/CertfHenry.jpg';
import close from '../../assets/img/close-transparent-gray.svg';
import { StyledSVG } from '../styles/styled_navbar';
import {
  EducationContainer,
  Ed,
  Skills,
  Certificado,
} from '../styles/styled_education';
import Fade from 'react-reveal/Fade';
import Shake from 'react-reveal/Shake';

//strings ==>
import strings from './strings';

const Education = () => {
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const [modalOpen, setModalOpen] = useState(false);
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
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };
  //test
  return (
    <EducationContainer>
      <Modal
        isOpen={modalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={'Contact'}
        portalClassName={'ReactModalPortal'}
        ariaHideApp={false}
      >
        <Certificado alt='Certificado henry' src={CertificadoHenry} />
        <button className='button2' onClick={closeModal}>
          <StyledSVG src={close} />
        </button>
      </Modal>
      <Ed>
        <div className='title'>
          <Fade>
            <p>
              <span>{strings[language].title1}</span>
            </p>
          </Fade>
        </div>
        <div className='info'>
          <div className='edContainer'>
            <Fade cascade>
              <div className='education'>
                <h5>{strings[language].ed1}</h5>
                <p>{strings[language].ed1info}</p>
                <Shake when={modalOpen}>
                  <Shake>
                    {/* eslint-disable-next-line  */}
                    <a className='certf' onClick={() => setModalOpen(true)}>
                      {strings[language].certf}
                    </a>
                  </Shake>
                </Shake>
              </div>
              <div className='education'>
                <h5>{strings[language].ed2}</h5>
                <p>HTML5 - CSS3 - JavaScript - jQuery - AJAX - MySQL.</p>
              </div>
              <div className='education'>
                <h5>{strings[language].ed3}</h5>
                <p>{strings[language].ed3info}</p>
              </div>
            </Fade>
          </div>
        </div>
      </Ed>
      <Skills>
        <div className='title'>
          <Fade>
            <p>
              <span>{strings[language].title2}</span>
            </p>
          </Fade>
        </div>
        <div className='info'>
          <ul className='skill'>
            <Fade cascade>
              <div className='skillDiv'>
                <h5>Front</h5>
                <li>
                  <p>JavaScript ES6+</p>
                </li>
                <li>
                  <p>React</p>
                </li>
                <li>
                  <p>React Native</p>
                </li>
                <li>
                  <p>Redux</p>
                </li>
                <li>
                  <p>Semantic HTML</p>
                </li>
                <li>
                  <p>CSS</p>
                </li>
                <li>
                  <p>LESS</p>
                </li>
                <li>
                  <p>Bootstrap</p>
                </li>
                <li>
                  <p>Styled Components</p>
                </li>
              </div>
              <div className='skillDiv'>
                <h5>Back</h5>
                <li>
                  <p>Node</p>
                </li>
                <li>
                  <p>Express</p>
                </li>
                <li>
                  <p>GraphQl</p>
                </li>
                <li>
                  <p>MongoDB</p>
                </li>
                <li>
                  <p>Sequelize</p>
                </li>
                <li>
                  <p>PostgreSQL</p>
                </li>
                <li>
                  <p>Passport</p>
                </li>
                <li>
                  <p>Firebase</p>
                </li>
              </div>
              <div className='skillDiv'>
                <h5>Tools</h5>
                <li>
                  <p>Linux</p>
                </li>
                <li>
                  <p>Git & Github</p>
                </li>
                <li>
                  <p>React & Redux DevTools</p>
                </li>
                <li>
                  <p>Postman</p>
                </li>
                <li>
                  <p>Insomnia</p>
                </li>
                <li>
                  <p>VSCode & VIM</p>
                </li>
              </div>
              <div className='skillDiv'>
                <h5>Soft Skills</h5>
                <li>
                  <p>{strings[language].ss1}</p>
                </li>
                <li>
                  <p>{strings[language].ss2}</p>
                </li>
                <li>
                  <p>{strings[language].ss3}</p>
                </li>
                <li>
                  <p>{strings[language].ss4}</p>
                </li>
                <li>
                  <p>{strings[language].ss5}</p>
                </li>
                <li>
                  <p>{strings[language].ss6}</p>
                </li>
              </div>
            </Fade>
          </ul>
        </div>
      </Skills>
    </EducationContainer>
  );
};

export default Education;
