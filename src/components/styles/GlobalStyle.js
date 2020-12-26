import { createGlobalStyle } from 'styled-components';

// Estilos globales para habilitar el dark mode:
export const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.body};
		color:  ${({ theme }) => theme.text};
		
		.btn-sec {
			color: ${({ theme }) => theme.btnSecText};
			background-color: ${({ theme }) => theme.btnSecBg};
			box-shadow: ${({ theme }) => theme.btnSecShadow};
			border: ${({ theme }) => theme.btnSecBorder};
			&:hover {
				border: ${({ theme }) => theme.btnSecHoverBorder};
			}
		}
		
		label > span:not(.no-shadow) {
			background: ${({ theme }) => theme.body};
			color:  ${({ theme }) => theme.text};
		}
		
		label > input,
		label > textarea {
				color:  ${({ theme }) => theme.text};
				background: ${({ theme }) => theme.body};
			}

		select {
			color:  ${({ theme }) => theme.text};
			
			option {
				background: ${({ theme }) => theme.body};
			}
		}

		.modal {
			background-color: ${({ theme }) => theme.body};
			color:  ${({ theme }) => theme.text};
		}
		
		.card {
			background: ${({ theme }) => theme.cardBg};
		}
		.card__title {
			@supports (-webkit-background-clip: text)  {
				background: ${({ theme }) => theme.cardText};
			}
		}

		table {
			thead { background: ${({ theme }) => theme.tableBg}; }
			tbody tr:nth-of-type(even) { background: ${({ theme }) => theme.tableBg}; }
			td button {
				border: 1px solid ${({ theme }) => theme.tableBtn};
				color: ${({ theme }) => theme.tableBtn};
			}

			td button:hover {
				background-color: ${({ theme }) => theme.tableBtn};
				color: ${({ theme }) => theme.tableBtnHoverText};
			}

		}
	}
`
