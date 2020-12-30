import styled from 'styled-components';
import SVG from 'react-inlinesvg';


export const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 3.2em 0 -1.5em 0;
	width: 100%;

	@media (max-width: 950px){
		justify-content: center;
		flex-direction: column-reverse;
	}
	
	.sign{
		display: flex;
		flex-direction: column;
		align-items: center;
		
		p{
			font-weight: 600;	
		}

		a{
			cursor: pointer;
			font-weight: 900;
			text-decoration: none;
			font-size: 1.2em;
			color: var(--clr-primary-dark);

			&:hover{
				color: var(--clr-primary);
			}

		
		}
		@media (max-width: 950px){
			margin: 0.5em 0;
			flex-wrap: wrap;

			a:focus{
				outline: 0;
			}
		}
	}

	.social_media{
		display: flex;
		align-items: center;

		li{
			list-style: none;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 1em 1.5em;
		}
		
		@media (max-width: 500px){
			a:focus{
				outline: 0;
			}
		}
	}
`

export const StyledSVG = styled(SVG)`
	height: 2em;
	cursor: pointer;

	&:hover{
		fill: var(--clr-primary-dark) !important;
		border: none;
	}
`