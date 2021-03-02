import styled from 'styled-components';

export const BackgroundStyled = styled.section`
  display: flex;
  justify-content: space-evenly;
  font-size: 1.1em;

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-transform: uppercase;
    color: var(--clr-primary-dark);
    font-weight: 600;
    margin: 0.7em;
    width: 20vw;

    img {
      width: 12em;
      height: 12em;
      border-radius: 99em;
      border: 4px solid var(--clr-primary-dark);
      object-fit: contain;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    }
  }

  .info {
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    line-height: 1.1em;

    img {
      display: none;
    }

    p {
      margin: 0.7em;

      a {
        position: relative;
        text-align: center;
        text-decoration: none;
        color: var(--clr-primary-dark);
        font-weight: 600;

        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--clr-primary-dark);
          border-radius: 3px;
          z-index: -1;
          transform: scaleY(0.1);
          transition: transform 300ms ease;
          transform-origin: bottom;
        }

        &:hover {
          &:after {
            transform: scaleY(1);
          }
          color: white;
        }
      }
    }

    .resume {
      cursor: pointer;
      font-size: 1em;
      padding: 0.2em 0.1em;
      font-weight: 600;
      width: 150px;
      text-align: center;
      border: 2px solid currentColor;
      border-radius: 7px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
      transition: color 0.2s ease-in-out;

      &:hover {
        color: var(--clr-primary);
        box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
      }
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;

    .title {
      align-self: flex-start;
      margin-left: 2em;
      width: 40vw;

      img {
        display: none;
      }
    }

    .info {
      width: 80%;
      align-items: center;
      margin: auto;
      margin-top: 3em;
      font-size: 0.9em;

      img {
        align-self: center;
        display: block;
        width: 12em;
        height: 12em;
        border-radius: 99em;
        border: 4px solid var(--clr-primary-dark);
        margin-bottom: 0.5em;
      }
    }
  }
`;
