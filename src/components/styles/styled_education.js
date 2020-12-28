import styled from 'styled-components';


export const EducationContainer = styled.section`
	display: flex;
	justify-content: space-between;

	@media (max-width: 720px){
		flex-wrap: wrap;
		width: 100%;
	}
`
export const Ed = styled.div`
	display: flex;
	justify-content: space-evenly;
	font-size: 1.1em;
	width: 30vw;
	margin: 0 2em;

	.title{
		text-transform: uppercase;
		color: var(--clr-primary-dark);
		font-weight: 600;
		margin: 0.7em;
	}
	.info{
		margin-top: 2em;
		display: flex;
		flex-direction: column;
		align-items: left;
		text-align: left;
		line-height: 1.3em;

		.edContainer{
				margin: 0.7em;

			.education {
				margin: 1.5em 2em;
				
				h5 {
					font-size: 1em;
					color: var(--clr-primary-dark);
					margin: 0.5em 0;
					font-weight: 600;
				}
			}
		}
	}
	@media (max-width: 720px){
		flex-direction: column;
		align-items: flex-end;
		width: 100vw;

		.title{
			align-self: flex-start;
			margin: 0;
		}

		.info {
			width: 65vw;
		}
	}
`
export const Skills = styled.div`
	display: flex;
	justify-content: space-evenly;
	font-size: 1.1em;
	width: 40vw;
	margin: 0 2em;
	

	.title{
		text-transform: uppercase;
		color: var(--clr-primary-dark);
		font-weight: 600;
		margin: 0.7em;
	}
	.info{
		margin-top: 2em;
		display: flex;
		flex-direction: column;
		align-items: left;
		text-align: left;
		line-height: 1.3em;
		
		.skill {
			margin: 0.7em;
			display: flex;
			list-style-type: none;
			flex-wrap: wrap;
			
			.skillDiv{
				margin: 1em 2em;
				width: 10vw;
				p{
					text-align: left;
				}
			}
			h5 {
				font-size: 1em;
				text-align: left;
				color: var(--clr-primary-dark);
				margin: 0.5em 0;
				font-weight: 600;
			}
		}
	}

	@media (max-width: 720px){
		flex-direction: column;
		align-items: flex-end;
		width: 100vw;

		.title{
			align-self: flex-start;
		}

		.info {
			width: 65vw;
		}
	}
`