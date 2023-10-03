import styled, { keyframes } from 'styled-components';

const moveIn = keyframes`
from {
	transform: scaleX(0);
	
} 
  to {
	transform: scaleX(1);   
  }
`;

const move = keyframes`
from {
	transform: rotate(-3deg) translateY(-8px);
} 
  to {
	transform:rotate(3deg)  translateY(8px);
  }
`;
export const ImageBottle = styled.img`
	float: right;
	shape-outside: circle(21%);
	width: 80%;
	min-width: 210px;
	transform: translateY(50px);
	
	@media (max-width: 340px) {
		shape-outside: circle(0%);
		float: unset;
	}
	@media (min-width:400px) {
		shape-outside: circle(30%);
	}
	@media (min-width: 768px) {
		width: 100%;
	
		aspect-ratio:1/1;
		display: block;
	}
	@media (min-width: 992px) {
	}
	@media (min-width: 1200px) {
		transform: translate(-100px, 37px);
		aspect-ratio:1/1;
	}
`;
export const AboutProductHero = styled.section`
	margin-top: 70px;
	max-width: 1440px;
	margin-inline: auto;
	position: relative;
	@media (min-width: 1024px) {
		margin-top: 102px;
	}
	h1 {
		padding-inline: 18px;
		color: #f28f1d;
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		padding-top: 30px;
		margin-bottom: 17px;
		@media (min-width: 768px) {
			padding-inline: unset;
			padding-left: 50px;
			font-size: 45px;
			padding-top: 60px;
			margin-bottom: 40px;
			line-height: 60px; /* 120% */
		}
		@media (min-width: 1024px) {
			padding-left: 90px;
			font-size: 65px;

			line-height: 78px; /* 120% */
		}
		@media (min-width: 1280px) {
			padding-left: 165px;
		}
	}
	p {
		color: #5e286d;
		font-family: 'Americane';

		padding-left: 16px;
		@media (min-width: 768px) {
			padding-left: 50px;
			font-family: 'Open Sans';
		}
		@media (min-width: 1024px) {
			padding-left: 90px;
		}
		@media (min-width: 1280px) {
			padding-left: 165px;
		}
	}
	.hero-wrapper {
		max-width: 450px;
		margin-inline: auto;
	}
`;
export const Paragraph = styled.p`
	padding-inline: 16px;
	margin-top: 40px;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	@media (min-width: 768px) {
		padding-inline: unset;
		padding-left: 50px;

		margin-top: 65px;
	}
	@media (min-width: 1024px) {
		padding-left: 90px;
		font-size: 20px;

		line-height: 28px; /* 140% */
	}
	@media (min-width: 1280px) {
		padding-left: 165px;
	}

	img {
		vertical-align: middle;
		padding-right: 4px;
		@media (min-width: 768px) {
			width: 14px;
			height: 14px;
			padding-right: unset;
			margin-right: 4px;
		}
	}
`;
export const ParagraphTop = styled.p`
	margin: 0;
	position: relative;
	max-width: 75%;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	@media (max-width: 340px) {
		max-width: 100%;
	}
	@media (min-width: 768px) {
		font-size: 18px;
		font-weight: 700;
		line-height: 30px;
		max-width: 100%;
	}
	@media (min-width: 1024px) {
		font-size: 24px;
		font-weight: 700;
		line-height: 34px;
	}
	br {
		@media (min-width: 768px) {
			display: none;
		}
	}
	img {
		vertical-align: top;
		margin-left: -2px;
		margin-top: 3px;
		@media (min-width: 768px) {
			width: 14px;
			height: 14px;
			vertical-align: top;
			margin-left: -4px;
			margin-top: 7px;
		}
	}

	&::after {
		content: '';
		position: absolute;
		display: block;
		bottom: 0;
		left: 0px;
		margin-left: 16px;
		width: 80%;
		height: 1px;
		transform-origin: left center;
		transform: scaleX(0);
		z-index: 3;
		background-color: #5e286d;
		animation: ${moveIn} 500ms 700ms 1 alternate forwards;
		@media (min-width: 376px) {
			width: 85%;
		}
		@media (min-width: 430px) {
			width: 94%;
		}
		@media (min-width: 768px) {
			margin-left: 50px;
			width: 120%;
		}
		@media (min-width: 992px) {
			bottom: -18px;
			width: 120%;
		}
		@media (min-width: 1024px) {
			margin-left: 90px;
		}
		@media (min-width: 1280px) {
			margin-left: 165px;
			width: 120%;
		}
	}
`;
export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	max-width: 255px;
	margin-inline: auto;
	margin-bottom: 20px;
	@media (min-width: 768px) {
		margin-inline: unset;
		max-width: 300px;
		justify-content: flex-start;
	}
	p {
		color: #5e286d;
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
		@media (min-width: 768px) {
			text-align: center;
		}
	}
	img {
		width: 70px;
		@media (min-width: 768px) {
			min-width: 80px;
			display: block;
		}
	}
`;
export const WrapperReverse = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	flex-direction: row-reverse;
	max-width: 249px;
	margin-inline: auto;
	margin-bottom: 20px;
	@media (min-width: 768px) {
		flex-direction: row;
		margin-inline: unset;
		justify-content: flex-start;
		max-width: 300px;
	}
	img {
		@media (min-width: 768px) {
			min-width: 80px;
			display: block;
		}
	}
	p {
		color: #5e286d;
		text-align: right;
		/* H8 */
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px;
		@media (min-width: 768px) {
			text-align: center;
		}
	}
`;
export const EffectParagraph = styled.p`
color: #5E286D;

/* H9 */
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */
padding-inline: 18px;
max-width:765px;
margin-bottom:30px;

		@media (min-width: 480px) {
			padding-inline: 32px;
		}

		@media (min-width: 768px) {
			padding-inline: 50px;
			margin-inline:auto;

			
		}
		@media (min-width: 1024px) { 
			margin-bottom:10px;
			font-size: 20px; 
			line-height: 28px; 
		}
		
img {
		vertical-align: top;
		margin-left: 2px;
		margin-right: 1px;
		margin-top: 3px;
		@media (min-width: 768px) {
			width: 14px;
			height: 14px;
			vertical-align: top;
			margin-left: 2px;
			margin-top:3px;
		}
	}
	
`
export const EffectSection = styled.section``;
export const SerumImage = styled.img`
	width: 95%;
	max-width: 600px;
	margin-top:40px;
	@media (min-width: 768px) {
		max-width: unset;
		width: 120%;
		margin-top:unset;
		/* transform: translateY(-90px); */
	}
	@media (min-width: 992px) {
		width: 100%;
	}
	@media (min-width:1100px) {
		transform: translateY(-100px) !important;
		max-width: 750px;
	}
	@media (min-width: 1280px) {
		transform: translateY(-120px) !important;
		max-width: 800px;
	}
	@media (min-width: 1440px) {
		transform: translate(-60px,-170px ) !important;
		max-width: 850px;
	}
`;
export const EffectWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	margin-top: 64px;
	position: relative;

	h2 {
		margin: 0;
		text-align: center;
		color: #f28f1d;

		/* H6 */
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px;
		padding-inline: 18px;
		margin-bottom:36px;

		@media (min-width: 480px) {
			padding-inline: 32px;
		}

		@media (min-width: 768px) {
			padding-inline: 50px;
			text-align: left;
			font-size: 45px;

			line-height: 60px; /* 120% */

			max-width: 765px;
			margin-inline: auto;
		}
		@media (min-width: 768px) {
			padding-inline: 50px;
		}
		@media (min-width: 1024px) {
			font-size: 65px;

			line-height: 78px; /* 120% */
		}
		img {
			vertical-align:top;
			width: 20px;
			margin-left:3px;
			@media (min-width:1024px) {
				width: initial;
				margin-left:1px;
			}
		}
	}
	.effect-content-wrapper {
		transform: translateY(-80px);
	}
	@media (min-width: 768px) {
		margin-bottom: 100px;
		.effect-content-wrapper {
			transform: translateY(0px);
		}
		.wrapper-effect {
			margin-left: 184px;
		}
		.wrapper-effect-reverse {
			margin-left: 92px;
		}
		.effect-container {
			transform: translateX(-50px);
			margin-top: 45px;
		}
	}
	@media (min-width: 1200px) {
		margin-bottom: -20px;
		.effect-container {
			margin-top: 90px;
		}
	}
	@media (min-width: 1280px) {
		margin-top: 120px;
		.effect-container {
			transform: translateX(-100px);
		}
	}
`;

export const TestsSection = styled.section`
	background: rgba(250, 236, 216, 0.5);
`;
export const TestsWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 16px;
	padding-bottom: 20px;
	@media (min-width: 480px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: 50px;
	}
	@media (min-width: 1024px) {
		padding-inline: 90px;
	}
	@media (min-width: 1280px) {
		padding-inline: 165px;
	}
	h2 {
		color: #f28f1d;

		/* H6 */
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		padding-top: 18px;
		padding-bottom: 28px;
		margin: 0;
		@media (min-width: 768px) {
			font-size: 45px;

			line-height: 60px; /* 120% */
		}
		@media (min-width: 1024px) {
			font-size: 65px;

			line-height: 78px; /* 120% */
			padding-top: 68px;
			padding-bottom: 32px;
		}
	}
`;
export const Content = styled.p`
	color: #5e286d;

	/* H10 */
	font-family: 'Americane';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px; /* 150% */
	padding-top: 24px;
	padding-bottom: 24px;
	margin: 0;
	@media (min-width: 768px) {
		font-size: 18px;

		line-height: 28px; /* 155.556% */
	}
	@media (min-width: 1024px) {
		padding-bottom: 48px;
	}
`;
export const Subheader = styled.p`
	color: #5e286d;

	/* H8 */
	font-family: 'Open Sans';
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px; /* 125% */
	margin: 0;
	@media (min-width: 768px) {
		font-size: 24px;

		line-height: 34px; /* 141.667% */
	}
`;
export const ButtonWrapper = styled.div`
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 8px;
	}
	@media (min-width: 1024px) {
		gap: 18px;
	}
	a {
		display: flex;
		width: fit-content;
		gap: 8px;
		max-width: 280px;
		height: 44px;
		padding: 8px 32px;
		justify-content: center;
		align-items: center;
		color: #fff8ee !important;
		text-align: center;
		text-decoration: none;
		position: relative;
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
		border-radius: 32px;
		background: #f2851d;
		box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23),
			-5px -5px 10px 0px rgba(250, 251, 255, 0.1);
		margin-inline: auto;
		@media (min-width: 768px) {
			margin-inline: unset;

			font-size: 20px;

			line-height: 30px; /* 150% */
		}
	}
	a::after {
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
	@media (hover: hover) {
		a:hover::after {
			opacity: 1;
		}
	}

	p {
		color: #5e286d;
		text-align: center;

		/* H8 */
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
		margin-bottom: 24px;
		margin-top: 5px;
		@media (min-width: 768px) {
			margin: 0;
			color: #5e286d;

			font-size: 20px;

			line-height: 30px; /* 150% */
		}
	}
`;
export const ImageSection = styled.img`
	display: block;
	width: 100%;
`;
export const RightItem = styled.div`
	position: absolute;
	right: -80px;
	top: 50px;
	display: none;
	animation: ${move} 2.5s 2.5s linear infinite alternate;
	img {
		max-height: 200px;
	}

	@media (min-width: 1024px) {
		display: block;
	}
`;

export const LeftItem = styled.div`
	position: absolute;
	left: -170px;
	top: 200px;
	display: none;
	animation: ${move} 2.5s 2.5s linear infinite alternate;

	@media (min-width: 1024px) {
		display: block;
	}
	@media (min-width: 1280px) {
		left: -150px;
	}
`;
export const PostbioticsSection = styled.section`
max-width:1440px;
margin-inline:auto;
padding-inline: 16px;
	@media (min-width: 480px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: 50px;
	}
	@media (min-width: 1024px) {
		padding-inline: 90px;
	}
	@media (min-width: 1280px) {
		padding-inline: 165px;
	}
h2 {
	color: #F28F1D;
max-width:750px;
/* H6 */
font-family: "Americane";
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 112.5% */
margin-bottom:30px;
margin-top:34px;
@media (min-width: 992px) {
	margin-bottom:65px;
	margin-top: 0;
font-size: 65px;

line-height: 78px; /* 120% */
}
}
a {
		display: flex;
		width: 232px;
		height: 44px;
		padding: 8px 32px;
		justify-content: center;
		margin-inline:auto;
		align-items: center;
		position: relative;
		z-index: 0;
		font-weight: 700;
		font-size: 1.6rem;
		line-height: 2rem;
		flex-shrink: 0;
		color: #fff;
		border-radius: 32px;
background: #5E286D;
box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23), -5px -5px 10px 0px rgba(250, 251, 255, 0.10);
margin-top:16px;
text-decoration:none !important;
		@media (min-width: 768px) {
			color: white;
			font-size: 2rem;
			line-height: 3rem;
			width: 100%;
			max-width: 280px;
		}
		@media (min-width:992px) {
			margin-inline:unset;
			margin-left: auto;
			margin-top:24px;
			margin-right:40px;

		}
	}
	a::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		opacity: 0;

		border-radius: 32px;

		box-shadow: 10px 10px 20px 0px rgba(22, 27, 29, 0.23),
			-10px -10px 20px 0px rgba(250, 251, 255, 0.1);
		transition: opacity 0.3s ease-in-out;
	}

	a:hover::after {
		opacity: 1;
	}

`
export const PostbioticsItem = styled.div`
display:flex;
gap:11px;
h3 {
	color: #5E286D;

/* H6 */
font-family: "Americane";
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 112.5% */
margin-bottom:0;
@media (min-width: 992px) {
margin-top:8px;
font-size: 40px;

line-height: 36px; /* 90% */
margin-bottom:6.5px;
}
}
span {
	color: #5E286D;
display:block;
/* H3 */
font-family: "Open Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 150% */
margin-bottom: 9px;
@media (min-width:992px) {
	font-family: "Americane";
margin-bottom: 14px;
font-size: 32px;
line-height: 36px; /* 112.5% */
}
}
p {
	color: #5E286D;

/* H9 */
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */
margin-bottom: 16px;
@media (min-width:992px) {

font-size: 18px;
line-height: 28px; /* 155.556% */
max-width:265px;
margin-bottom: 0;
}
}

`
