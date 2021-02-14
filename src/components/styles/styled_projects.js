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
		width: 5vw;
	}

	.info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		justify-content: space-between;
		margin: 2em 0;
		text-align: left;
		line-height: 1.3em;

		p {
			margin: 0.7em;
		}
		.project_container {
			display: flex;
			justify-content: space-around;
			width: 100%;
			margin: 2em auto;

			&:first-child {
				margin-top: 3em;
				margin-bottom: 10em;
			}

			.image_container {
				height: 35vh;
				width: 50%;
				margin: 0 auto;

				.image_zoom {
					border-radius: 10px;
					border: 3px solid var(--clr-primary-dark);
					box-shadow: 0 7px 30px rgba(0, 0, 0, 0.5);
				}
			}
			.image_mobile_container {
				height: 35vh;
				width: 50%;
				display: flex;
				justify-content: space-between;

				.mobile-img {
					height: auto;
					object-fit: cover;
					box-shadow: 0 7px 30px rgba(0, 0, 0, 0.5);
					border-radius: 5%;
				}

				.hidden {
					display: none;
				}
			}

			figcaption {
				display: flex;
				flex-direction: column;
				width: 50%;
				height: 100%;
				padding: 0 2em;

				.title_container {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 1em;

					.title_app {
						text-transform: uppercase;
						text-align: center;
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
					margin-bottom: 1em;
					padding: 0 1em;
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
					margin-bottom: 1em;
					padding: 0 1em;

					li {
						margin: 0.2em 0.4em;
						font-size: 0.8em;
						font-weight: 600;
						color: var(--clr-primary-dark);
						border: 2px solid var(--clr-primary-dark);
						border-radius: 5px;
						padding: 0 0.2em;
						box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
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
			width: 80%;
			margin: 0 auto;
		}

		.info {
			width: 100%;
			margin: 1em;

			.project_container {
				flex-direction: column-reverse;
				flex-wrap: wrap;
				align-items: center;

				&:first-child {
					margin-top: 1em;
					margin-bottom: 12em;
				}

				.image_container {
					width: 80%;
					margin: 0 auto -6em auto;
				}
				.image_mobile_container {
					width: 80%;
					margin: 0 auto -6em auto;
				}

				figcaption {
					margin: 0;
					margin-top: 1em;
					width: 80vw;
					padding: 0;

					p {
						width: 90%;
						padding: 0.5em;
						margin: 1em auto;
					}
					.badges {
						justify-content: center;
					}
					.title_container {
						display: flex;
						margin: 0.2em;
						flex-wrap: wrap;
						justify-content: space-around;

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
			.project_container {
				&:first-child {
					margin-top: 3em;
					margin-bottom: 2em;
				}
			}

			.image_mobile_container {
				.hidden {
					display: block !important;
				}
			}
		}
	}
`;
