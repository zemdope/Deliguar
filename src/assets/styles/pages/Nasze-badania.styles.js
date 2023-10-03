import styled, { keyframes } from 'styled-components';
import actionImage from '../../images/actionImage.svg';

const moveIn = keyframes`
from {
	transform: scaleX(0);
	
} 
  to {
	transform: scaleX(1);   
  }
`;

export const ImageCircle = styled.img`
	float: right;
	shape-outside: circle(50%);

	@media (max-width: 380px) {
		transform: translateY(30px);
	}
	@media (min-width: 992px) {
		float: unset;
		display: block;
		width: 100%;
		padding-right: 90px;
	}
	@media (min-width: 1280px) {
		padding-right: 165px;
	}
`;
export const HeroWrapper = styled.div`
	margin-top: 70px;
	max-width: 1440px;
	margin-inline: auto;
	position: relative;
	@media (min-width: 1024px) {
		margin-top: 102px;
	}
	h1 {
		padding-inline: 16px;
		color: #f28f1d;
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		margin-bottom: 46px;
		@media (min-width: 580px) {
			padding-left: 32px;
		}
		@media (min-width: 768px) {
			padding-inline: unset;
			padding-left: 50px;
			font-size: 45px;

			line-height: 60px; /* 120% */
		}
		@media (min-width: 992px) {
			padding-left: 90px;
			font-size: 50px;

			line-height: 65px; /* 120% */
		}
		@media (min-width: 1280px) {
			padding-left: 165px;
			font-size: 65px;

			line-height: 78px; /* 120% */
		}
	}
	.mobile-hero {
		max-width: 600px;
		margin-inline: auto;
		@media (min-width: 992px) {
			max-width: unset;
		}
	}
	.desktop-content {
		/* @media (min-width: 1024px) {
			transform: translateY(-60px);
		} */
		@media (min-width: 1280px) {
			transform: translateY(-120px);
		}
	}
	.percent {
		@media (min-width: 992px) {
			transform: translateY(40px);
			/* transform: translateY(-20px); */
		}
		@media (min-width: 1225px) {
			transform: translateY(20px);
		}
		@media (min-width: 1240px) {
			transform: translateY(0px);
		}
		@media (min-width: 1280px) {
			transform: translateY(-80px);
		}
		@media (min-width: 1400px) {
			transform: translateY(-120px);
		}
	}
`;
export const HeroSection = styled.section``;
export const ParagraphCenter = styled.p`
	display: flex;
	align-items: flex-start;
	gap: 3px;
	padding-left: 16px;
	position: relative;
	@media (min-width: 580px) {
		padding-left: 32px;
	}
	@media (min-width: 992px) {
		padding-left: 180px;
		gap: 18px;
	}
	@media (min-width: 1280px) {
		padding-left: 250px;
	}
	span {
		width: 100%;
		height: 100%;
	}
	span:first-child {
		color: #f28f1d;
		font-family: 'Americane';
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 55.556% */
		width: fit-content;
		margin-top: 12px;
		min-width: 67.5px;
		text-align: right;
		@media (min-width: 992px) {
			font-size: 48px;

			line-height: 26px; /* 54.167% */
		}
	}
	span:last-child {
		width: 60%;
		max-width: 160px;
		color: #5e286d;

		/* H9 */
		font-family: 'Open Sans';
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px; /* 157.143% */
		position: relative;
		@media (min-width: 992px) {
			width: 100%;
			max-width: 420px;
			font-size: 18px;

			line-height: 28px; /* 155.556% */
		}
		&::after {
			content: '';
			position: absolute;
			display: block;
			bottom: -3px;
			left: 0px;

			width: 190%;
			height: 1px;
			transform-origin: left center;
			transform: scaleX(0);
			z-index: 3;
			background-color: #f28f1d;
			animation: ${moveIn} 500ms 800ms 1 alternate forwards;
			@media (min-width: 410px) {
				width: 230%;
			}
			@media (min-width: 493px) {
				width: 300%;
			}
			@media (min-width: 992px) {
				display: none;
			}
			/* @media (min-width: 376px) {
			width: 85%;
		}
		
		
		@media (min-width: 992px) {
			bottom: -18px;
			width: 111%;
		}
		@media (min-width: 1024px) {
			margin-left: 90px;
			width: 107%;
		}
		@media (min-width: 1280px) {
			margin-left: 165px;
			width: 100%;
		} */
		}
	}
	&::after {
		display: none;
		content: '';
		position: absolute;

		bottom: -12px;
		left: 0px;

		width: 120%;
		height: 1px;
		transform-origin: left center;
		transform: scaleX(0);
		z-index: 3;
		background-color: #f28f1d;
		animation: ${moveIn} 500ms 400ms 1 alternate forwards;
		@media (min-width: 992px) {
			display: block;
			margin-left: 180px;
			width: 103%;
		}
		@media (min-width: 1280px) {
			margin-left: 250px;
			width: 96%;
		}
	}
`;
export const ParagraphBottom = styled.p`
	padding-left: 16px;
	color: #5e286d;
	display: flex;
	align-items: flex-start;
	img {
		vertical-align: middle;
		margin-top: 7px;
		margin-right: 4px;
		@media (min-width: 1024px) {
			width: 18px;
			height: 18px;
		}
	}

	/* H9 */
	font-family: 'Open Sans';
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px; /* 157.143% */
	width: 60%;
	margin-top: 20px;
	@media (min-width: 580px) {
		padding-left: 32px;
	}
	@media (min-width: 992px) {
		width: 100%;
		max-width: 550px;
		margin-top: 75px;
		padding-left: 90px;

		font-size: 18px;

		line-height: 28px; /* 155.556% */
	}
	@media (min-width: 1280px) {
		padding-left: 165px;
	}
`;
export const ParagraphTop = styled.p`
	display: flex;
	align-items: flex-start;
	gap: 3px;
	padding-left: 16px;
	margin-bottom: 10px;
	position: relative;
	@media (min-width: 580px) {
		padding-left: 32px;
	}
	@media (min-width: 992px) {
		padding-left: 180px;
		margin-bottom: 30px;

		gap: 18px;
	}
	@media (min-width: 1280px) {
		padding-left: 250px;
	}
	span {
		width: 100%;
		height: 100%;
	}
	span:first-child {
		color: #5e286d;
		font-family: 'Americane';
		width: fit-content;
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 55.556% */
		margin-top: 12px;
		@media (min-width: 992px) {
			font-size: 48px;

			line-height: 26px; /* 54.167% */
		}
	}
	span:last-child {
		color: #5e286d;
		max-width: 190px;
		/* H9 */
		font-family: 'Open Sans';
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px; /* 157.143% */
		position: relative;
		@media (min-width: 992px) {
			width: 100%;
			max-width: 420px;

			font-size: 18px;

			line-height: 28px; /* 155.556% */
		}
		img {
			vertical-align: text-top;
			@media (min-width: 1024px) {
				width: 18px;
				height: 18px;
			}
		}
		&::after {
			content: '';
			position: absolute;
			display: block;
			bottom: -3px;
			left: 0px;

			width: 120%;
			height: 1px;
			transform-origin: left center;
			transform: scaleX(0);
			z-index: 3;
			background-color: #5e286d;
			animation: ${moveIn} 500ms 400ms 1 alternate forwards;
			@media (min-width: 410px) {
				width: 130%;
			}
			@media (min-width: 436px) {
				width: 140%;
			}
			@media (min-width: 458px) {
				width: 150%;
			}
			@media (min-width: 475px) {
				width: 160%;
			}
			@media (min-width: 493px) {
				width: 170%;
			}
			@media (min-width: 511px) {
				width: 180%;
			}
			@media (min-width: 528px) {
				width: 190%;
			}
			@media (min-width: 546px) {
				width: 200%;
			}
			@media (min-width: 570px) {
				width: 210%;
			}
			@media (min-width: 992px) {
				display: none;
			}

			/* @media (min-width: 376px) {
			width: 85%;
		}
		@media (min-width: 430px) {
			width: 94%;
		}
		@media (min-width: 768px) {
			margin-left: 50px;
			width: 114%;
		}
		@media (min-width: 992px) {
			bottom: -18px;
			width: 111%;
		}
		@media (min-width: 1024px) {
			margin-left: 90px;
			width: 107%;
		}
		@media (min-width: 1280px) {
			margin-left: 165px;
			width: 100%;
		} */
		}
	}
	&::after {
		display: none;
		content: '';
		position: absolute;

		bottom: -12px;
		left: 0px;

		width: 120%;
		height: 1px;
		transform-origin: left center;
		transform: scaleX(0);
		z-index: 3;
		background-color: #5e286d;
		animation: ${moveIn} 500ms 400ms 1 alternate forwards;
		@media (min-width: 992px) {
			display: block;
			margin-left: 180px;
			width: 75%;
		}
		@media (min-width: 1240px) {
			width: 80%;
		}
		@media (min-width: 1280px) {
			margin-left: 250px;
			width: 69%;
		}
		@media (min-width: 1400px) {
			width: 73%;
		}
	}
`;
export const Subheader = styled.p`
	color: #5e286d;
	font-family: 'Open sans';
	font-weight: 700;
	padding-top: 40px;
	padding-left: 16px;
	margin-bottom: 8px;
	@media (min-width: 580px) {
		padding-left: 32px;
	}
	@media (min-width: 768px) {
		padding-left: 50px;

		font-size: 24px;

		line-height: 34px;
	}
	@media (min-width: 1024px) {
		padding-left: 90px;
	}
	@media (min-width: 1280px) {
		padding-left: 165px;
	}
`;
export const ActionSection = styled.section``;
export const ActionWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 16px;
	@media (min-width: 580px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: 50px;
		margin-top: 90px;
	}
	@media (min-width: 1024px) {
		padding-inline: 150px;
	}
	@media (min-width: 1280px) {
		padding-inline: 245px;
	}
	h2,
	h3 {
		color: #f28f1d;

		/* H6 */
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		margin-top: 55px;
		margin-bottom: 0;
		@media (min-width: 768px) {
			font-size: 45px;
			line-height: 60px;
		margin-top:0;
		}
		@media (min-width: 1280px) {
			font-size: 65px;
			line-height: 78px;
		}
	}
	h3 {
		margin-top: 72px;
		@media (min-width: 768px) {
			margin-top: 125px;
		}
	}
	h4 {
		color: #5e286d;
		font-family: 'Americane';
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: 26px; /* 108.333% */
		text-align: center;
	}
	img.bottom {
		margin-top: 27px;
		@media (min-width: 768px) {
			margin-top: 0;
		}
	}
	p {
		color: #5e286d;

		/* H9 */
		font-family: 'Open Sans';
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px; /* 157.143% */
		margin-top: 20px;
		margin-bottom: 20px;
		@media (min-width: 768px) {
			margin-top: 48px;
			margin-bottom: 24px;
			font-size: 18px;
			line-height: 28px;
			max-width: 925px;
		}
	}
	img {
		display: block;
		width: 100%;
		padding-inline: 46px;
		@media (min-width: 768px) {
			padding-inline: 0px;
			max-width: 336px;
		}
	}
	.first-action-container {
		@media (min-width: 768px) {
			margin-top: 126px;
		}
		@media (min-width: 1280px) {
			margin-top: 20px;
		}
		.action-image {
			width: 100%;
			height: 100%;
			background-image: url(${actionImage});
			background-repeat: no-repeat;
			background-size: contain;
		}
		.first-action-content {
			@media (min-width: 768px) {
				padding-left: 15px;
			}
		}
	}
	.second-action-container {
		@media (min-width: 768px) {
			padding-inline: 15px;
		}
		@media (min-width: 992px) {
			padding-bottom: 60px;
		}
	}
	.action-image-left {
		margin-left: auto;
	}
	.action-image-right {
		margin-right: auto;
	}
`;
export const ShoppingSection = styled.section`
	display: none;
	background: #f28f1d;
	padding-top: 30px;
	padding-bottom: 30px;
	@media (min-width: 992px) {
		display: block;
	}
`;
export const ShoppingWrapper = styled.section`
	max-width: 1440px;
	margin-inline: auto;
	display: flex;
	justify-content: center;
	gap: 18px;
	align-items: center;
	a {
		position: relative;
		display: flex;
		width: 280px;
		padding: 8px 32px;
		justify-content: center;
		align-items: center;
		gap: 8px;
		flex-shrink: 0;
		color: #fff8ee;
		text-align: center;
		text-decoration: none;
		/* H3 */
		font-family: 'Open Sans';
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 30px; /* 150% */
		border-radius: 32px;
		background: #f2851d;
		box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23),
			-5px -5px 10px 0px rgba(250, 251, 255, 0.1);
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			z-index: 0;
			width: 100%;
			height: 100%;
			opacity: 0;
			border-radius: 32px;
			box-shadow: 10px 10px 20px 0px rgba(22, 27, 29, 0.23),
				-10px -10px 20px 0px rgba(250, 251, 255, 0.1);
			transition: opacity 0.3s ease-in-out;
		}

		&:hover::after {
			opacity: 1;
		}
	}
	p {
		color: #fff8ee;
		font-family: 'Open Sans';
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 30px;
		margin: 0;
	}
`;
export const DescriptionSection = styled.section`
max-width: 100%;
	margin-inline: auto;
	padding-inline: 16px;
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: #F28F1D;
	margin-top:42px;

	@media (min-width: 580px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: 50px;
		margin-top:90px;
	}
	@media (min-width: 1024px) {
		padding-inline: 150px;
		margin-top:120px;
		

	}
	@media (min-width: 1280px) {
		padding-inline: 165px;
	}
	.container {
		max-width:1440px;
		margin-inline:auto;
	
	h2 {
		color: #662472;

/* H6 */
font-family: "Americane";
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 112.5% */
margin-bottom: 25px;
@media (min-width: 1024px) {

font-size: 65px;
min-width:350px;
line-height: 78px; /* 120% */
}
	}
	p {
		color: #662472;

/* H9 */
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */
max-width:726px;
@media (min-width:1024px) {

font-size: 18px;

line-height: 28px; /* 155.556% */
}
	}
}
`
