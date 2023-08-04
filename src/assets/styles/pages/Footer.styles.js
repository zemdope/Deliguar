import styled from 'styled-components';
export const FooterContainer = styled.footer`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	max-width: 1920px;
	margin-inline: auto;
	/* padding-top:70px; */
	padding-inline: 24px;
	padding-bottom: 24px;
	padding-top: 32px;
	@media (min-width: 480px) {
		padding: 32px;
	}
	@media (min-width: 768px) {
		padding-top: 50px;
		padding-bottom: 50px;
	}
	${({ theme }) => theme.mq.desktop} {
		flex-direction: row;
	}

	a {
		img {
			width: 100%;
			max-width: 100px;
			margin-bottom: 40px;
			${({ theme }) => theme.mq.desktop} {
				max-width: 60px;
				margin-bottom: unset;
			}
		}
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		padding-left: 0;
		margin-bottom: 40px;

		${({ theme }) => theme.mq.desktop} {
			flex-direction: row;
			margin-bottom: 20px;
		}
		li {
			text-align: center;
			margin: 0 20px 20px;
			${({ theme }) => theme.mq.desktop} {
				margin-bottom: unset;
			}

			a {
				text-decoration: none;
				font-size: 20px;
				text-transform: uppercase;
				color: black;
			}
			a::after {
				display: block;
				content: '';
				border-bottom: solid 2px #000;
				transform: scaleX(0);
				transition: transform 300ms ease-out;
				${({ theme }) => theme.mq.desktop} {
					border-bottom: solid 1px #000;
				}
			}
			@media (hover: hover) {
				a:hover::after {
					transform: scaleX(1);
					transform-origin: 0% 50%;
				}
			}
		}
	}
`;
