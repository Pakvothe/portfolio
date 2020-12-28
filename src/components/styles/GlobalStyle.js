import styled, { createGlobalStyle } from 'styled-components';
import SVG from 'react-inlinesvg';

// Estilos globales para habilitar el dark mode:
export const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.body};
		color:  ${({ theme }) => theme.text};	

		.dropdown_theme {
			color: ${({ theme }) => theme.text};
		}
		
	}

`
export const StyledSVG = styled(SVG)`
`
export const ScrollButton = styled.button`
	pointer-events: none;
	opacity: 0;
	position: fixed;
	right: 50px;
	bottom: 50px;
	border: 0;
	padding: 0.5em;
	background: var(--clr-primary);
	color: var(--clr-light);
	transition: opacity .2s ease;
	border-radius: 999em;
	cursor: pointer;

	svg {
		fill: var(--clr-light);
		width: 30px;
		height: 30px;
	}

	&:hover{
		background: var(--clr-primary-dark);

		svg{
			fill: var(--clr-light);
			width: 30px;
			height: 30px;
		}
	}

	@media (max-width: 480px){
		right: 15px;
		bottom: 15px;
		padding: 0.3em;
	}
`
