import styled from 'styled-components';

export const ProjectsStyled = styled.section`
	display: flex;
	justify-content: space-around;
	font-size: 1.1em;
	margin: 6em auto;

	.title{
		text-transform: uppercase;
		color: var(--clr-primary-dark);
		font-weight: 600;
		margin: 0.7em 0 0 5.5em;;
	}

	.info {
		width: 60vw;
		margin: 0;
		text-align: left;
		line-height: 1.3em;

		p{
			margin: 0.7em;
		}

		.project_container {
			display: flex;
			align-items: flex-start;
			justify-content: space-evenly;
			margin: 0 0 3em 1.5em;

			&:first-child{
				margin-top: 3em;
			}
			.image_container{
				height: 200px;
				width: 350px;

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
					border: 1px solid red;
			}
		}

			figcaption {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				width: 15vw;
				padding: 0 0 0.5em 0;

				a{
					position: relative;
					padding: 0 5px;
					text-align: center;
					text-decoration: none;
					color: var(--clr-primary-dark);
					font-size: 1.1em;	
					font-weight: 600;	
					
					&:after{
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

					&:hover{
						&:after{
							transform: scaleY(1);
						}
						color: white;
					}
				}

				p {
					margin: 0.5em 0;
					text-align: left;
				}

				.badges{
					width: 100%;
					display: flex;
					justify-content: space-evenly;
					align-items: flex-start;
					flex-wrap: wrap;
					list-style-type: none;
					margin: 0.3em 0;

					li{
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

	@media (max-width: 480px){
		flex-direction: row;
		align-items: flex-end;
		flex-wrap: wrap;
		
		.title{
			align-self: flex-start;
			margin-left: 2em;
			width: 100vw;
		}

		.info {
			width: 100vw;
			margin-left: 2em;
			margin-top: 3em;

			.project_container{
				flex-direction: column;

				&:first-child{
					margin-top: 0.5em;
				}

				.image_container {
					width: 300px;
						margin-bottom: 1em;
				}

				figcaption{
					width: 300px;
				}
			}
		}
	}
`