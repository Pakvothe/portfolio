import styled from 'styled-components';

export const AboutStyled = styled.div`
	display: flex;
	font-size: 3em;
	flex-direction: column;
	align-items: flex-start;
	overflow-x: hidden;
	overflow-y: auto;
	word-break: break-word;
	margin: 1em 0;

	.about-title {
		font-size: 0.5em;
		margin-bottom: 3em;
		text-transform: uppercase;
	}

	.about-info {
		line-height: 1.5em;
		text-align: left;
		word-spacing: 0px;
		min-width: auto;
		min-height: auto;
		margin: 0 2em 0 0;
	}

	.about-scroll{
		font-size: 0.5em;
		margin-top: 3em;
	}
`