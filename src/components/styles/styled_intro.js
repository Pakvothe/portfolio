import styled from 'styled-components';

export const IntroStyled = styled.div`
	overflow: hidden !important;
	display: flex;
	font-size: 3em;
	flex-direction: column;
	align-items: flex-start;
	overflow-x: hidden;
	overflow-y: auto;
	word-break: break-word;
	margin-top: 1.5em;
	margin-bottom: 3em;

	.intro-title {
		font-size: 0.5em;
		margin-bottom: 3em;
		text-transform: uppercase;
	}

	.intro-info {
		line-height: 1.5em;
		text-align: left;
		word-spacing: 0px;
		min-width: auto;
		min-height: auto;
	}

	.intro-scroll {
		font-size: 0.5em;
		margin-top: 3em;
		font-weight: 600;

		span {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		svg {
			width: 2em;
			height: 2em;
			margin-left: 1em;
			fill: currentColor;
		}
	}

	.strong {
		font-weight: 600;
		position: relative;
		padding: 0 0.1em;
		cursor: default;

		&:after {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: ${(props) =>
				props.theme === 'dark' ? 'white' : 'var(--clr-dark)'};
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
			color: ${(props) =>
				props.theme === 'dark' ? 'var(--clr-dark)' : 'white'};
		}
	}

	@media (max-width: 480px) {
		margin: 0.5em 0 2em 0.75em;
		font-size: 2.8em;

		.intro-title {
			font-size: 0.3em;
			margin-bottom: 3em;
			text-transform: uppercase;
		}

		.intro-info {
			font-size: 0.7em;
			line-height: 1.2em;
			text-align: left;
			word-spacing: 0px;
			min-width: auto;
			min-height: auto;
			margin: 0 2em 0 0;
			width: 100%;
		}

		.intro-scroll {
			font-size: 0.3em;
			margin-top: 3em;
		}

		.strong {
			&:after {
				display: none;
			}
			&:hover {
				color: ${(props) =>
					props.theme === 'dark' ? 'white' : 'var(--clr-dark)'};

				&:after {
					display: none;
				}
			}
		}
	}
`;
