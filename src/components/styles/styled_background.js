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
	}

	@media (max-width: 480px){
		flex-direction: column;
		align-items: flex-end;

		.title{
			align-self: flex-start;
			margin-right: 2em;
		}

		.info {
			width: 65vw;
		}
	}
`