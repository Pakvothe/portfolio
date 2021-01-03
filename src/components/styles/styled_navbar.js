import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const NavbarStyled = styled.nav`

	svg  {
		 	fill: currentColor; 
		 	width: 2em;
			height: 2em;
		 }
	
	.navbar__top {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		margin: 1em 0 2em 0;

		.visits {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
			color: currentColor;
			font-weight: 400;

			.number {
				font-weight: 600;
			}
			p{
				text-align: center;
				margin-top: 0.3em;
			}
			svg{
				cursor: default;
			}
		}

		.powr-hit-counter {
			display: flex;
			justify-content: flex-start;
			background: red;
		}

		.navbar__options {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			flex-basis: 300px;

			
			& > li {
				position: relative;
			}


			& > li + li { margin-left: 3em; }

			li, li > button {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}

			li:hover { color: var(--clr-primary); }
		
			button {
				background: none;
				border: none;
				color: inherit;
				font: inherit;

				&:focus{
					outline: none;
				}
			}
		}
	}

	@media (max-width: 750px){
		margin-bottom: 4em;
		padding: 0 0.5em;

		svg{
			width: 2em;
			height: 2em;
		}
	
		.visits{
			height: 100%;
		}
	}
	@media (max-width: 375px){

		.visits{
			margin-left: -1em;
			width: 30vw;
		}
	}

`

export const Dropdown = styled.li`
	position: relative;
	padding-bottom: .8em;
	margin-bottom: -.8em;
	cursor: default;

	.dropdown-columns{
		columns: 3;
		column-rule: 1px solid #ccc;
		padding: 1em;
		li {
			break-inside: avoid;
			-webkit-column-break-inside: avoid;
			page-break-inside: avoid;
			a{
				border-radius: .4em;
			}
			&:last-of-type a {
				border-radius: .4em;
			}
		}
	}

	&:hover > ul {
		display: block;
		list-style: none;
	}

	& > ul {
		min-width: 150px;
		display: none;
		position: absolute;
		left: 50%;
		top: 100%;
		transform: translateX(-50%);
		padding-top: 1em;
		font-size: 1em;
		color: var(--clr-primary-dark);
		background-color: var(--clr-light);
		box-shadow: 0 0 10px black;
		border-radius: .4em;
		z-index: 10;

		&::before {
			content: '';
			width: 0px;
			height: 0px;
			position: absolute;
			top: -19px;
			left: 50%;
			transform: translateX(-50%);
			border: 10px solid transparent;
			border-bottom-color: var(--clr-light);
		}

		& li {
			margin: 0;
			width: 100%;
		
			&:last-of-type a {
				border-radius: 0 0 .3em .3em;
			}
		}


		a {
			color: var(--clr-primary-dark);
			text-align: center;
			display: block;
			width: 100%;
			padding: 1em 2em;
			text-decoration: none;
			cursor: pointer;
			font-weight: 600;

			&:hover {
				background-color: var(--clr-primary-2);
				color: var(--clr-primary);
			}

			&:last-child {
				margin-bottom: 1em;
			}
		}
	}

`

export const StyledSVG = styled(SVG)`
	height: 2em;
	cursor: pointer;

	@media (max-width: 480px){
		height: 1.5em;
	}
`