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
	margin: 2em  0 3.5em 0;

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
		margin: 0 2em 0 0;
	}

	.intro-scroll{
		font-size: 0.5em;
		margin-top: 3em;
	}

	.strong{
		font-weight: 600;
	}

	@media (max-width: 480px){
		margin: 0.5em 0 3.5em 0;

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
		}

		.intro-scroll{
			font-size: 0.3em;
			margin-top: 3em;
		}
	}
`