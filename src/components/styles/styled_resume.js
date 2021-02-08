import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledResume = styled.div`
	z-index: 999;

	.resume__overlay {
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(2px);
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	.modal {
		background-color: white;
		position: fixed;
		right: 0;
		top: 0;
		height: 100vh;
		width: 70vw;
		padding: 4em 2em;
		overflow: auto;
		box-shadow: 0 0 50px rgba(0, 0, 0, 0.7);

		@media (max-width: 800px) {
			width: 100vw;
			transform: translatex(0px);
		}

		.modal__close {
			position: absolute;
			top: 2em;
			left: 2em;
			height: 40px;
			width: 40px;
			border: none;
			background: none;

			&:hover {
				svg {
					fill: var(--clr-dark);
				}
			}
			&:focus {
				outline: none;
				color: var(--clr-dark);
			}

			&:active {
				transform: scale(0.9);
			}
		}

		.donwload {
			color: red;
			position: absolute;
			top: 2em;
			right: 2em;
			border-radius: 10px;
			color: var(--clr-primary-dark);
			font-size: 1em;
			text-align: center;
			padding: 0.5em;
			font-weight: 600;
			background-color: transparent;
			border: 2px solid var(--clr-primary-dark);
			text-decoration: none;
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
			transition: color 0.2s ease-in-out;

			&:hover {
				box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
				color: var(--clr-primary);
				border-color: var(--clr-primary);
				cursor: pointer;
			}

			@media (max-width: 800px) {
				font-size: 0.8em;
				top: 2.5em;
				right: 2.6em;
			}
		}

		.curriculum {
			display: block;
			margin: 1em auto;
			width: 100%;
			height: auto;

			@media (max-width: 800px) {
				object-fit: fill;
				height: 100%;
				transform: translatex(0px);
			}
		}
	}
`;

export const StyledCloseBtn = styled(SVG)`
	cursor: pointer;
	width: 40px;
	height: 40px;
	fill: #999;
`;
