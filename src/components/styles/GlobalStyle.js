import { createGlobalStyle } from 'styled-components';

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
