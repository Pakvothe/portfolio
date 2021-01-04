import styled from 'styled-components';


export const BackgroundStyled = styled.section`
	display: flex;
	justify-content: space-evenly;
	font-size: 1.1em;
	margin-bottom: 6em;

	.title{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		text-transform: uppercase;
		color: var(--clr-primary-dark);
		font-weight: 600;
		margin: 0.7em;
		width: 20vw;

		img{
			width: 12em;
			height: 12em;
			border-radius: 99em;
			border: 4px solid var(--clr-primary-dark);
		}
	}

	.info {
		width: 60vw;
		display: flex;
		flex-direction: column;
		align-items: left;
		text-align: left;
		line-height: 1.3em;

		img{
			display: none;
		}

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

			img{
				display: none;
			}
		}

		.info {
			margin-top: 3em;
			width: 60vw;

			img {
				align-self: center;
				display: block;
				width: 12em;
				height: 12em;
				border-radius: 99em;
				border: 4px solid var(--clr-primary-dark);
			}
		}
	}
`