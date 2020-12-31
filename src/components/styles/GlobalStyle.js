import styled, { createGlobalStyle } from 'styled-components';
import SVG from 'react-inlinesvg';
import LoadingOverlay from 'react-loading-overlay';

// Estilos globales para habilitar el dark mode:
export const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.body};
		color:  ${({ theme }) => theme.text};	

		.dropdown_theme {
			color: ${({ theme }) => theme.text};
		}

		.modal {
			background: ${({ theme }) => theme.body};
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
	bottom: 60px;
	border: 0;
	padding: 0.3em;
	background: var(--clr-primary);
	color: var(--clr-light);
	transition: opacity 1000ms ease-in-out;
	border-radius: 999em;
	cursor: pointer;

	svg {
		fill: var(--clr-light);
		width: 2.5em;
		height: 2.5em;
	}

	&:hover{
		background: var(--clr-primary-dark);

		svg{
			fill: var(--clr-light);
		}
	}

	@media (max-width: 480px){
		right: 15px;
		bottom: 15px;
		padding: 0.3em;
	}
`

export const StyledLoader = styled(LoadingOverlay)`
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20em;
		height: 20em;
	
	.css-df17o1{
		background: transparent;
	}

	.loading__spinner {
		width: 100px;
		& svg circle { stroke: var(--clr-primary)}
	}

	.loading__content {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1.2em;
		font-weight: 900;
		color: ${props => (props.theme === 'dark' ? 'white' : 'var(--clr-dark)')};
	}
`
