import styled from 'styled-components';

export const ProjectsStyled = styled.section`
	display: flex;
	justify-content: space-between;
	font-size: 1.1em;
	margin-top: 6em;

	.title {
		text-transform: uppercase;
		color: var(--clr-primary-dark);
		font-weight: 600;
		margin: 0.7em 0 0 2.7em;
		width: 20vw;
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		margin: 0;
		text-align: left;
		line-height: 1.3em;

		p {
			margin: 0.7em;
		}
		.project_container {
			display: flex;
			align-items: flex-start;
			justify-content: space-evenly;
			width: 100%;
			margin: 2em auto;

			&:first-child {
				margin-top: 3em;
			}
			.image_container {
				height: 35vh;
				width: 35vw;
				margin: 0 2em 0.5em 0;

				.image_zoom {
					object-fit: contain;
					border-radius: 10px;
					border: 3px solid var(--clr-primary-dark);
					box-shadow: 5px 5px 7px var(--clr-primary-light);
				}
			}
			.image_mobile_container {
				height: 35vh;
				width: 100%;
				display: flex;
				justify-content: space-between;

				.mobile-img {
					height: auto;
					width: 80%;
					object-fit: cover;
				}

				.hidden {
					display: none;
				}
			}

			figcaption {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 25vw;
				height: 100%;
				padding: 0 0 0.5em 0;

				.title_container {
					width: 100%;

					.title_app {
						text-transform: uppercase;
					}

					.repo {
						font-weight: 400;
						color: currentColor;

						&:hover {
							color: white;
						}
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

				p {
					margin: 0.5em 0;
					text-align: left;
				}

				.in_process {
					font-weight: 600;
					margin-bottom: 0;
					height: 1.6em;
					width: 6em;
				}

				.badges {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: flex-start;
					flex-wrap: wrap;
					list-style-type: none;
					margin: 0.3em 0;

					li {
						margin: 0.2em 0.4em;
						font-size: 0.8em;
						font-weight: 600;
						color: var(--clr-primary-dark);
						border: 2px solid var(--clr-primary-dark);
						border-radius: 5px;
						padding: 0 0.2em;
					}
				}
			}
		}
	}

	@media (max-width: 480px) {
		flex-direction: row;
		align-items: flex-end;
		flex-wrap: wrap;

		.title {
			align-self: flex-start;
			margin-left: 2em;
			width: 100vw;
		}

		.info {
			width: 100vw;
			margin-left: 2em;

			.mt-12 {
				margin-top: 6em;
			}
			.project_container {
				flex-direction: column-reverse;
				flex-wrap: wrap;

				.image_container {
					width: 80vw;
					margin: 0 0 -6em 0;
				}

				figcaption {
					margin-top: 1em;
					width: 80vw;

					.badges {
						justify-content: center;
					}
					.title_container {
						display: flex;
						align-items: flex-start;

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
		.image_mobile_container {
			align-items: center;
			justify-content: center;

			.mobile-img {
				max-height: auto;
				max-width: 22vh;
				object-fit: cover;
			}

			.hidden {
				display: block !important;
			}
		}
		@media (min-width: 1700px) {
			.mobile-img {
				max-height: auto;
				max-width: 23vh;
				object-fit: cover;
			}
		}
	}
`;
