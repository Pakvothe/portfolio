import styled from 'styled-components';

export const ExperienceStyled = styled.section`
	display: flex;
	justify-content: space-between;
	font-size: 1.1em;
	margin-top: 4em;

	.title {
		text-transform: uppercase;
		color: var(--clr-primary-dark);
		font-weight: 600;
		margin: 0.7em 0 0 2.7em;
		width: 5vw;
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		margin: 2em 0;
		text-align: left;
		line-height: 1.1em;

		p {
			margin: 0.7em;
		}

		.experience_container {
			display: flex;
			width: 100%;
			margin: 3em auto;

			&:last-child {
				margin-bottom: 0;
			}

			figcaption {
				width: 95%;
				padding: 0 4em;

				.title_container {
					display: flex;
					align-items: center;
                    margin-left: 0.8em;
					margin-bottom: 1em;

					.title_app {
						text-transform: uppercase;
						text-align: center;
					}
                    .repo {
						font-weight: 400;
						color: #b7b7b7;
					}
				}

				a {
					position: relative;
					padding: 0 5px;
					text-align: center;
					text-decoration: none;
					color: var(--clr-primary-dark);
					font-size: 1.1em;
					font-weight: 600;
					margin: 0 2em 0 0;

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
		}
	}

	@media (max-width: 480px) {
		flex-direction: row;
		flex-wrap: wrap;

		.title {
			align-self: flex-start;
			width: 80%;
			margin: 0 auto;
		}

		.info {
			width: 100%;
			margin: 0;
			line-height: 1.1em;

			.experience_container {
				flex-direction: column-reverse;
				flex-wrap: wrap;
				align-items: center;
				margin: 2em auto;
				height: auto;

				&:first-child {
					margin-top: 3em;
				}

				figcaption {
					margin: 0;
					width: 80vw;
					padding: 0;

					p {
						font-size: 0.9em;
						width: 95%;
					}

					.title_container {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;

						a {
							margin: 0 0.5em 0.5em 0;
							padding: 0.1em;
						}
					}
				}
			}
		}
	}
	@media (min-width: 1400px) {
		.info {
			.experience_container {
				&:first-child {
					margin-top: 3em;
					margin-bottom: 2em;
				}
			}
		}
	}
`;
