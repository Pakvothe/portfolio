import styled from 'styled-components';

export const EducationContainer = styled.section`
	display: flex;
	justify-content: space-between;
	margin-top: 4em;

	@media (max-width: 720px) {
		flex-wrap: wrap;
		width: 100%;
	}
`;
export const Ed = styled.div`
	display: flex;
	justify-content: space-evenly;
	font-size: 1.1em;
	width: 30vw;
	margin: 0 2em;

	.title {
		text-transform: uppercase;
		color: var(--clr-primary-dark);
		font-weight: 600;
		margin: 0.7em;
	}
	.info {
		margin-top: 2em;
		display: flex;
		flex-direction: column;
		align-items: left;
		text-align: left;
		line-height: 1.1em;
		width: 100%;

		.edContainer {
			width: 100%;
			margin: 0.7em;

			.education {
				width: 100%;
				margin: 1.5em 2em;

				h5 {
					font-size: 1em;
					color: var(--clr-primary-dark);
					margin: 0.5em 0;
					font-weight: 600;
					line-height: 1.1em;
				}
			}
		}
	}
	@media (max-width: 720px) {
		flex-direction: column;
		align-items: flex-end;
		width: 100%;

		.title {
			align-self: flex-start;
			margin: 0;
		}

		.info {
			width: 100%;
			margin: 1em auto;
			font-size: 0.9em;
			.edContainer {
				width: 90%;

				.education {
					margin: 1em 0;
				}
			}
		}
	}
`;
export const Skills = styled.div`
	display: flex;
	justify-content: space-evenly;
	font-size: 1.1em;
	width: 40vw;
	margin: 0.75em 2em 0 2em;

	.title {
		text-transform: uppercase;
		color: var(--clr-primary-dark);
		font-weight: 600;
		margin-top: 0;
		align-self: flex-start;
	}
	.info {
		margin-top: 1.35em;
		display: flex;
		flex-direction: column;
		align-items: left;
		text-align: left;
		line-height: 1.2em;
		font-size: 0.9em;

		.skill {
			margin: 0.7em;
			display: flex;
			flex-wrap: wrap;

			.skillDiv {
				margin: 1em 2em;
				width: 10vw;
				p {
					text-align: left;
				}
			}
			h5 {
				font-size: 1em;
				text-align: left;
				color: var(--clr-primary-dark);
				margin: 0.5em -1em;
				font-weight: 600;
				line-height: 1.1em;
			}
		}
	}

	@media (max-width: 720px) {
		flex-direction: column;
		align-items: flex-end;
		width: 100vw;

		.title {
			align-self: flex-start;
		}

		.info {
			width: 100%;

			.skill {
				margin: 0 auto;

				.skillDiv {
					width: 90%;
					margin: 1em 1.7em;
					p {
						text-align: left;
					}
				}
			}
		}
	}
`;
