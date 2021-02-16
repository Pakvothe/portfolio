import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 3.2em 0 -1.5em 0;
	width: 100%;

	@media (max-width: 950px) {
		justify-content: center;
		flex-direction: column-reverse;
		margin: 1.5em auto 0 auto;
	}

	.sign {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: color 0.2s ease-in-out;

		p {
			font-weight: 600;
		}

		&:hover {
			color: var(--clr-primary-dark);
		}

		@media (max-width: 950px) {
			margin: 0.5em 0 0 0;
			flex-wrap: wrap;
		}
		@media (max-width: 480px) {
			font-size: 0.8em;
		}
	}

	.social_media {
		display: flex;
		align-items: center;

		li {
			list-style: none;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 1em 1.5em;
		}

		@media (max-width: 500px) {
			a:focus {
				outline: 0;
			}
		}
	}
`;

export const StyledSVG = styled(SVG)`
	height: 2em;
	cursor: pointer;
	transition: fill 0.2s ease-in-out;

	&:hover {
		fill: var(--clr-primary-dark) !important;
		border: none;
	}
`;
