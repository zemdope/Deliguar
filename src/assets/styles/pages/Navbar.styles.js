import { Link } from 'gatsby';
import styled from 'styled-components';

export const SocialWrapper = styled.div`
	margin-left: auto;

	display: flex;
	img {
		width: 100px;
	}
`;

export const List = styled.ul`
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	display: flex;
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

	margin: 0;
	transform: ${({ isOpen }) =>
		isOpen ? 'translateY(0)' : 'translateY(-100%)'};
	flex-direction: column;
	justify-content: flex-start;
	list-style: none;
	padding: 120px 20px;

	background-color: ${({ theme }) => theme.color.purple};
	height: 100vh;

	transition: opacity 0.3s ease-out;

	li {
		width: 100%;
		opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
		transform: ${({ isOpen }) =>
			isOpen ? 'translateX(0)' : 'translateX(-40px)'};
		transition: transform 0.25s ease-out, opacity 0.25s ease-out;
		a {
			display: inline-block;
			color: ${({ theme }) => theme.color.white};
			text-decoration: none;
			font-weight: 400;
			line-height: 2.8rem;
			font-size: ${({ theme }) => theme.font.size.parapgraph};
		}
	}

	li:nth-child(2) {
		transition-delay: 0.08s;
	}
	li:nth-child(3) {
		transition-delay: 0.14s;
	}

	li:nth-child(2),
	li:nth-child(1) {
		border-bottom: 1px solid rgba(250, 236, 216, 0.2);
	}

	${({ theme }) => theme.mq.desktop} {
		transform: translateY(0);
		opacity: 1;
		visibility: visible;
		flex-direction: row;

		padding: 35px 20px;
		li {
			opacity: 1;
			width: auto;
		}
		li:nth-child(2),
		li:nth-child(1) {
			border-bottom: none;
		}
		li:last-child {
			/* margin: 0; */
		}
	}
`;
export const Header = styled.header`
	margin-inline: auto;
	/* position: relative; */
	position: fixed;
	top: 0;
	left: 50%;
	z-index: 999;
	transform: translateX(-50%);
	background-color: ${({ theme }) => theme.color.orange};
	height: 72px;
	width: 100%;
	box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23);
	transition: background-color 0.3s ease-out;
	${({ theme }) => theme.mq.desktop} {
		height: 100px;
	}
`;

export const LogoLink = styled(Link)`
	width: ${({ isOpen }) => (isOpen ? '145px' : '58px')};

	img {
		max-height: 46px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 16px;
		z-index: 999;
	}
	${({ theme }) => theme.mq.desktop} {
		img {
			left: 40px;
		}
	}
	@media (min-width: 1610px) {
		img {
			left: 20px;
		}
	}
`;
export const Navigation = styled.nav`
	position: relative;
	top: 0;
	background-color: transparent;
	width: 100%;
	max-width: 1920px;
	margin-inline: auto;
	height: 70px;

	${({ theme }) => theme.mq.desktop} {
		height: 100px;

		max-width: 1610px;
		margin-inline: auto;

		ul {
			height: auto;
		}
		li {
			a {
				padding: 0;
				font-size: 20px;
				font-weight: normal;
				color: ${({ theme }) => theme.color.white};
			}
		}
	}

	${({ theme }) => theme.mq.desktop} {
		margin-left: auto;

		ul {
			display: flex;
			justify-content: flex-end;
			background-color: transparent;
			margin-top: 0;

			li:not(:last-child) {
				margin: 0 53px 0 0px;
			}
		}
	}
`;

export const StyledBurger = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 34px;
	height: 34px;
	background: transparent;

	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;
	position: absolute;
	right: 10px;
	top: 16px;

	img {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	img:nth-child(1) {
		display: ${({ isOpen }) => (isOpen ? 'none' : 'inline')};
	}
	img:nth-child(2) {
		display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
	}

	${({ theme }) => theme.mq.desktop} {
		display: none;
	}
`;

export const Button = styled.a`
	display: none !important;
	width: 160px;
	padding: 8px 32px !important;
	margin-top: -8px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	font-weight: 700 !important;
	border-radius: 32px;
	background: #f2851d;
	box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23),
		-5px -5px 10px 0px rgba(250, 251, 255, 0.1);

	${({ theme }) => theme.mq.desktop} {
		display: flex !important;
	}
`;
