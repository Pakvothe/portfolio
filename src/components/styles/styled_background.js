import styled from 'styled-components';


export const BackgroundStyled = styled.section`
	display: flex;
	justify-content: space-evenly;
	font-size: 1.1em;
	margin-bottom: 6em;

	.title{
		text-transform: uppercase;
		color: var(--clr-primary-dark);
		font-weight: 600;
		margin: 0.7em;
	}

	.info {
		width: 40vw;
		display: flex;
		flex-direction: column;
		align-items: left;
		text-align: left;
		line-height: 1.3em;

		p{
			margin: 0.7em;
		}

		.resume {
			cursor: pointer;
			font-size: 1em;
			padding: 0.1em 0;
			font-weight: 600;
			width: 150px;
			text-align: center;
			border: 2px solid currentColor;
			border-radius: 7px;

			&:hover{
				color: var(--clr-primary);
				box-shadow: 0 0 2px var(--clr-primary)
			}
		}
	}

	@media (max-width: 480px){
		flex-direction: column;
		align-items: flex-end;
		
		.title{
			align-self: flex-start;
			margin-left: 2em;
			width: 40vw;
		}

		.info {
			margin-top: 3em;
			width: 60vw;
		}
	}
`