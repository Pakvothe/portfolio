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
		margin-bottom: 0.5em;
	}
	
	.sign{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 10vh;
		
		p{
			font-weight: 600;	
		}

		a{
			cursor: pointer;
			position: relative;
			font-weight: 900;
			text-decoration: none;
			font-size: 1.2em;
			padding: 0.2em;
			color: var(--clr-primary-dark);
		
			&:after{
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

			&:hover{
				&:after{
					transform: scaleY(1);
				}
				color: white;
			}
		}
		@media (max-width: 950px){
			margin: 0.5em 0;
			flex-wrap: wrap;
			height: 100%;
			
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