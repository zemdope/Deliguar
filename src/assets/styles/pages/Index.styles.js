import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import pipeta from '../../images/pipeta.png';
import range from '../../images/range.svg';
const move = keyframes`
from {
	transform: rotate(-3deg) translateY(-8px);
} 
  to {
	transform:rotate(3deg)  translateY(8px);
  }
`;
export const HeaderWrapper = styled.div`
	padding-inline: 18px;
	@media (min-width: 480px) {
		padding-inline: 32px;
		max-width: 500px;
		margin-inline: auto;
	}
	@media (min-width: 768px) {
		padding-inline: 90px;
		max-width: unset;
		margin-inline: unset;
	}
	@media (min-width: 1024px) {
		padding-inline: unset;
		padding-left: 80px;
	}
	@media (min-width: 1280px) {
		padding-left: 165px;
	}
	h1 {
		font-size: ${({ theme }) => theme.font.size.headingMobile};
		color: ${({ theme }) => theme.color.purple};
		font-weight: 700;
		line-height: 3.6rem;
		margin-bottom: 0;
		padding-top: 45px;
		${({ theme }) => theme.mq.tablet} {
			max-width: 530px;
			font-size: 7.2rem;
			line-height: 7.6rem;
		}
		@media (min-width: 1024px) {
			max-width: 530px;
			font-size: 7.2rem;
			line-height: 7.6rem;
			padding-top: 5rem;
		}
		@media (min-width: 1280px) {
			padding-top: 11rem;
		}
	}
	p {
		font-size: ${({ theme }) => theme.font.size.headingSmallMobile};
		color: ${({ theme }) => theme.color.purple};
		font-weight: 700;
		line-height: 2rem;
		margin: 0;
		${({ theme }) => theme.mq.tablet} {
			font-size: 2.8rem;
			line-height: 3.6rem;
		}
	}
	p:last-child {
		color: ${({ theme }) => theme.color.orange};
		text-align: right;
		margin-top: 16px;
		margin-bottom: 45px;
		${({ theme }) => theme.mq.tablet} {
			margin-top: 4.4rem;
		}
		@media (min-width: 1024px) {
			margin-top: 6.4rem;
			max-width: 530px;
		}
	}
`;
export const Wrapper = styled.div`
	position: relative;
	margin-top: 70px;
	max-width: 1440px;
	margin-inline: auto;
	@media (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
		margin-top: 102px;
	}
`;
export const HeroSection = styled.section`
	margin-inline: auto;
	background: rgba(250, 236, 216, 0.5);
`;

export const HeroImage = styled.div`
	@media (min-width: 1024px) {
		display: flex;
		align-items: flex-end;
	}
	img {
		width: 100%;
		display: block;
		@media (min-width: 768px) {
			width: 70%;
			margin-left: auto;
		}
		@media (min-width: 1024px) {
			margin-top: 30px;
			min-width: 500px;
		}
		@media (min-width: 11400px) {
			min-width: 600px;
		}
		@media (min-width: 1280px) {
			min-width: 650px;
		}
		@media (min-width: 1400px) {
			min-width: 800px;
		}
	}
`;
export const LeftItem = styled.div`
	position: absolute;
	right: -48px;
	top: 5%;
	img {
		width: 100%;
	}
	animation: ${move} 2.5s 2.5s linear infinite alternate;
	@media (min-width: 992px) {
		right: -150px;
		top: 7%;
	}
`;
export const RightItem = styled.div`
	position: absolute;
	left: -45px;
	top: 40%;
	img {
		width: 100%;
	}
	animation: ${move} 2.5s linear infinite alternate;
	@media (min-width: 992px) {
		left: -145px;
		top: 35%;
	}
`;
export const IdeaWrapper = styled.div`
	position: relative;

	max-width: 1440px;
	margin-inline: auto;
	@media (min-width: 1024px) {
	}
	h2 {
		font-size: ${({ theme }) => theme.font.size.headingMobile};
		color: ${({ theme }) => theme.color.orange};
		font-weight: 700;
		line-height: 3.6rem;
		margin-top: 0;
		margin-bottom: 1.2rem;
		padding-top: 55px;
		text-align: center;
		display: flex;
		justify-content: center;
		gap: 5px;
		${({ theme }) => theme.mq.tablet} {
			font-size: 6.5rem;
			line-height: 7.8rem;
			justify-content: flex-start;
			padding-top: 7rem;
			padding-bottom: 4.8rem;
			/* padding-inline: 90px; */
		}
		@media (min-width: 1024px) {
		}
	}
	span {
		color: #5e286d;
		font-family: 'Open Sans';
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 142.857% */
		display: block;
		padding-right: 50px;
		/* padding-bottom: 15px; */
		transform: translateY(-15px);
		@media (min-width: 480px) {
			padding-inline: 32px;
			max-width: 500px;
			margin-inline: auto;
		}
		@media (min-width: 768px) {
			padding-inline: unset;
			max-width: unset;
			margin-inline: unset;
			font-size: 24px;
			transform: translateY(0px);
			line-height: 34px;
		}
	}
	h3 {
		color: #5e286d;

		/* H8 */
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
		padding-inline: 18px;
		margin-bottom: 15px;
		@media (min-width: 480px) {
			padding-inline: 32px;
			max-width: 500px;
			margin-inline: auto;
		}
		@media (min-width: 768px) {
			padding-inline: unset;
			padding-inline-end: 20px;
			max-width: unset;
			margin-inline: unset;
			font-size: 24px;
			margin-bottom: 25px;
			font-weight: 700;
			line-height: 34px;
		}
	}
	p {
		font-family: 'Open Sans';
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px; /* 157.143% */

		color: ${({ theme }) => theme.color.purple};

		padding-inline: 18px;
		@media (min-width: 480px) {
			padding-inline: 32px;
			max-width: 500px;
			margin-inline: auto;
		}
		@media (min-width: 768px) {
			padding-inline: unset;
			padding-inline-end: 20px;
			max-width: unset;
			margin-inline: unset;

			font-size: 18px;

			line-height: 26px; /* 144.444% */
		}
	}
`;
export const IdeaSection = styled.section``;

export const IdeaHeader = styled.div``;

export const ProblemWrapper = styled.div``;

export const ImageDogProblem = styled.img`
	width: 75%;
	transform: translatex(-30px);
	@media (min-width: 768px) {
		margin-top: auto;
		margin-bottom: auto;
		display: block;
		width: 100%;
		max-width: 630px;
		padding-top: 6rem;
		transform: translatex(-50px);
	}
`;

export const IdeaFlexbox = styled.div`
	display: flex;
`;
export const IdeaWrapperInner = styled.div`
	display: flex;
	max-width: 600px;
	margin-left: auto;
	@media (min-width: 768px) {
		max-width: unset;
		margin-left: unset;
	}
`;

export const IdeaBottleImage = styled.img`
	/* float: right; */
	shape-outside: circle(50%);
	width: 100%;
	display: block;
	@media (min-width: 768px) {
		width: 100%;
		display: block;
	}
`;

export const HeaderSolution = styled.h2`
	@media (min-width: 1024px) {
		display: none !important;
	}
`;
export const LearnMoreWrapper = styled.div`
	padding-inline: 18px;
	max-width: 400px;
	margin-inline: auto;
	padding-bottom: 70px;
	@media (min-width: 480px) {
		padding-inline: 32px;
	}
	@media (min-width: 992px) {
		max-width: 712px;
		padding-inline: 50px;
	}

	@media (min-width: 1024px) {
		padding-inline: 90px;
	}
	@media (min-width: 1280px) {
		padding-inline-start: 165px;
	}
	h3,
	h4 {
		line-height: 2rem;
		color: ${({ theme }) => theme.color.purple};
		font-weight: 700;
		text-align: center;
		font-family: 'Open sans';
		margin-bottom: 10px;
	}
	h3 {
		font-size: 1.6rem;
		@media (min-width: 992px) {
			font-size: 20px;
			text-align: left;
			line-height: 30px; /* 150% */
			margin-top: 15px;
		}
	}
	h4 {
		font-size: 1.4rem;
		@media (min-width: 992px) {
			/* H4 */
			text-align: left;
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 28px; /* 155.556% */
			margin-bottom: 16px;
		}
	}
	p {
		font-size: 1.4rem;
		line-height: 2rem;
		color: ${({ theme }) => theme.color.purple};
		font-weight: 300;
		text-align: center;
		@media (min-width: 768px) {
			margin-top: 50px;
		}
		@media (min-width: 992px) {
			color: #5e286d;
			text-align: left;
			/* H2 */
			font-family: 'Open Sans';
			font-size: 24px;
			font-style: normal;
			font-weight: 700;
			line-height: 34px; /* 141.667% */
			margin-top: 64px;
			margin-bottom: 24px;
		}
	}
	a {
		width: 100%;
		max-width: 280px;
		color: white;
		font-size: 1.6rem;
		line-height: 2rem;
		font-family: 'Open sans';
		font-weight: 700;
		color: white;
		padding: 8px 32px;
		border-radius: 32px;
		background: ${({ theme }) => theme.color.orange};
		box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23),
			-5px -5px 10px 0px rgba(250, 251, 255, 0.1);
		text-decoration: none;
		margin-inline: auto;
		position: relative;
		display: block;
		text-align: center;
		margin-bottom: 32px;
		color: #fff8ee !important;
		text-align: center;
		z-index: 0;
		@media (min-width: 992px) {
			color: #fff8ee;
			text-align: center;
			margin-inline: unset;
			margin-right: auto;
			font-size: 1.9rem;

			line-height: 30px; /* 150% */
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

	a:last-child {
		background: ${({ theme }) => theme.color.purple};
		margin-bottom: 0;
	}
`;
export const IdeaHeaderSolution = styled.h3`
	padding-inline: 18px !important;
	@media (min-width: 480px) {
		padding-inline: 32px !important;
	}
	@media (min-width: 768px) {
		padding-inline: 50px !important;
	}
	@media (min-width: 1024px) {
		padding-inline: 90px !important;
	}
	@media (min-width: 1280px) {
		padding-inline-start: 165px !important;
	}
`;
export const IdeaTitleSolution = styled.h2`
	padding-inline: 18px !important;
	@media (min-width: 480px) {
		padding-inline: 32px !important;
	}
	@media (min-width: 768px) {
		padding-inline: 50px !important;
	}
	@media (min-width: 1024px) {
		padding-inline: 90px !important;
	}
	@media (min-width: 1280px) {
		padding-inline-start: 165px !important;
	}
`;
export const TitleIcon = styled.img`
	@media (min-width: 768px) {
		min-width: 40px;
	}
`;
export const IdeaParagraph = styled.p`
	padding-inline: unset !important;
	padding-inline-start: 18px !important;
	@media (min-width: 480px) {
		padding-inline-start: 32px !important;
	}
	@media (min-width: 768px) {
		padding-inline: 50px !important;
	}
	@media (min-width: 1024px) {
		padding-inline: 90px !important;
	}
	@media (min-width: 1280px) {
		padding-inline-start: 165px !important;
	}
`;
export const TestSection = styled.section`
	background-color: ${({ theme }) => theme.color.orange};
`;
export const TestWrapper = styled.div`
	background-image: url(${pipeta});
	background-repeat: no-repeat;
	background-size: 75%;
	background-position: left 60%;
	position: relative;
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 18px;
	padding-bottom: 2rem;
	@media (min-width: 480px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: 90px;
		background-size: 50%;
		background-position: left 55%;
		padding-bottom: 4.5rem;
	}
	@media (min-width: 1024px) {
		padding-inline: 80px;
	}
	@media (min-width: 1280px) {
		padding-inline: 165px;
	}
	h2 {
		font-size: 3.2rem;
		line-height: 3.6rem;
		color: ${({ theme }) => theme.color.purple};
		font-weight: 700;
		padding-top: 2rem;
		padding-bottom: 1.6rem;
		margin: 0;
		@media (min-width: 768px) {
			margin-left: auto;
			width: 65%;
			font-size: 5.5rem;
			line-height: 6.5rem;
			padding-top: 4.8rem;
			padding-bottom: 3.2rem;
		}
		@media (min-width: 1024px) {
			font-size: 6.5rem;
			line-height: 7.8rem;
		}
	}
	p {
		text-align: right;
		max-width: 50%;
		margin-left: auto;
		font-size: 1.4rem;
		line-height: 2.2rem;
		font-weight: 300;
		color: ${({ theme }) => theme.color.purple};
		margin-top: 0;
		margin-bottom: 0;
		@media (min-width: 768px) {
			margin-left: auto;
			max-width: 350px;
			text-align: left;
			margin-left: 0;
			font-size: 2rem;
			line-height: 2.4rem;
		}
	}
	h3 {
		margin-top: 7.4rem;
		margin-bottom: 1.5rem;
		font-size: 1.6rem;
		line-height: 2rem;
		font-weight: 700;
		color: ${({ theme }) => theme.color.purple};
		text-align: right;
	}
	a {
		display: flex;
		width: 232px;
		height: 44px;
		padding: 8px 32px;
		justify-content: center;
		margin-left: auto;
		align-items: center;
		position: relative;
		z-index: 0;
		font-weight: 700;
		font-size: 1.6rem;
		line-height: 2rem;
		flex-shrink: 0;
		border-radius: 32px;
		color: ${({ theme }) => theme.color.purple};
		background: #f2851d;
		box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23),
			-5px -5px 10px 0px rgba(250, 251, 255, 0.1);
		@media (min-width: 768px) {
			color: white;
			font-size: 2rem;
			line-height: 3rem;
			width: 100%;
			max-width: 280px;
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
`;
export const TestContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		gap: 20px;
		max-width: 65%;
		margin-left: auto;
		align-items: flex-end;
	}
	@media (min-width: 1024px) {
		flex-direction: row;
		gap: 10px;
	}

	h3 {
		@media (min-width: 768px) {
			display: none;
		}
	}
	a {
		color: #fff8ee !important;
	}
`;
export const ImageTest = styled.img`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
`;
export const EffectSection = styled.section`
	margin-inline: auto;
	background: rgba(250, 236, 216, 0.5);
`;

export const EffectRightItem = styled.div`
	position: absolute;
	right: -160px;
	top: 5%;
	img {
		max-height: 165px;
	}
	animation: ${move} 2.5s 2.2s linear infinite alternate;
	@media (max-width: 767px) {
		right: -800px;
	}
	@media (min-width: 768px) {
		img {
			max-height: unset;
		}
	}
`;
export const EffectWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 18px;
	position: relative;

	@media (min-width: 480px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: 90px;
	}
	@media (min-width: 1024px) {
		padding-inline: 165px;
		padding-bottom: 100px;
	}
	@media (min-width: 1280px) {
		padding-inline: 289px;
		max-height: 1000px;
	}
`;
export const EffectImage = styled.img`
	width: 100%;
	transform: translate(-20px, -90px);
	@media (min-width: 768px) {
		min-width: 450px;
		transform: translate(-70px, -100px);
	}
	@media (min-width: 1280px) {
		min-width: 750px;
		transform: translate(-300px, -190px);
	}
`;

export const EffectHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-top: 115px;

	img {
		transform: translate(-40px, -50px);
		@media (min-width: 768px) {
			transform: translate(-85px, -50px);
			width: 120px;
		}
	}
	div {
		flex-basis: 60%;

		h2 {
			font-size: 3.2rem;
			line-height: 3.6rem;
			color: ${({ theme }) => theme.color.orange};
			font-weight: 700;
			margin-bottom: 16px;
			@media (min-width: 768px) {
				font-size: 6.5rem;
				line-height: 6.4rem;
			}
			@media (min-width: 1024px) {
				white-space: nowrap;
			}
		}
		p {
			font-size: 1.6rem;
			line-height: 2rem;
			color: ${({ theme }) => theme.color.purple};
			font-weight: 700;
			margin: 0;
			@media (min-width: 768px) {
				font-size: 3.2rem;
				line-height: 3.6rem;
				text-align: right;
				font-family: 'Americane';
			}
		}
	}
`;
export const EffectItemReverse = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	@media (min-width: 768px) {
		flex-direction: column-reverse;
	}
	img {
		width: 70px;
		height: 70px;
		@media (min-width: 768px) {
			width: 100px;
			height: 100px;
		}
		@media (min-width: 1024px) {
			width: 140px;
			height: 140px;
		}
	}
	p {
		font-size: 1.6rem;
		line-height: 2rem;
		color: ${({ theme }) => theme.color.purple};
		font-weight: bold;
		margin: 0;
		max-width: 170px;
		text-align: center;
		@media (min-width: 768px) {
			max-width: 174px;
			font-size: 2rem;
			line-height: 3rem;
		}
	}
`;
export const EffectItemsWrapper = styled.div`
	width: 100%;
	height: 100%;
	transform: translateY(-90px);
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 15px;
		transform: translateY(0px);
		transform: translateX(60px);
	}
	@media (min-width: 1024px) {
		transform: translateX(60px);
	}
`;
export const EffectItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	@media (min-width: 768px) {
		flex-direction: column;
	}
	img {
		@media (min-width: 768px) {
			width: 100px;
			height: 100px;
		}
		@media (min-width: 1024px) {
			width: 140px;
			height: 140px;
		}
	}
	p {
		font-size: 1.6rem;
		line-height: 2rem;
		color: ${({ theme }) => theme.color.purple};
		font-weight: bold;
		margin: 0;
		max-width: 170px;
		text-align: center;
		@media (min-width: 768px) {
			max-width: 160px;
			font-size: 2rem;
			line-height: 3rem;
		}
	}
`;
export const ModalContent = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	text-align: center;
`;
export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const fadeIn = keyframes`
 from { opacity: 0; }
      to { opacity: 1; }
`;

export const DosageleftItem = styled.div`
	position: absolute;
	left: -95px;
	top: -60px;
	img {
		max-height: 200px;
	}
	animation: ${move} 2.5s 2.5s linear infinite alternate;
	@media (min-width: 1024px) {
		left: -170px;
		top: 160px;
		img {
			max-height: unset;
		}
	}
`;
export const DosageRightItem = styled.div`
	position: absolute;
	right: -95px;
	bottom: 30px;
	animation: ${move} 2.5s 1.5s linear infinite alternate;
	@media (min-width: 1024px) {
		bottom: 250px;
		right: -80px;
	}
`;
export const DosageWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 18px;
	padding-top: 35px;
	padding-bottom: 115px;
	position: relative;
	@media (min-width: 480px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: 90px;
	}
	@media (min-width: 1024px) {
		padding-inline: 165px;
		padding-top: 143px;
		padding-bottom: 140px;
	}
	@media (min-width: 1280px) {
		padding-inline: 250px;
	}
`;
export const DosageSection = styled.section`
	h2 {
		font-size: 3.2rem;
		line-height: 3.6rem;
		color: ${({ theme }) => theme.color.orange};
		font-weight: 700;
		margin-bottom: 16px;
		text-align: center;
		@media (min-width: 768px) {
			font-size: 6.5rem;
			line-height: 6.4rem;

			margin-bottom: 50px;
		}
	}
	h3 {
		font-size: 3.2rem;
		line-height: 3.6rem;
		color: ${({ theme }) => theme.color.purple};
		font-weight: 700;
		margin-top: 0;
		margin-bottom: 60px;
		text-align: center;
		@media (min-width: 768px) {
			font-size: 6.5rem;
			line-height: 7.8rem;
		}
	}
	h4 {
		font-size: 3.2rem;
		line-height: 3.6rem;
		color: ${({ theme }) => theme.color.purple};
		font-weight: 700;
		margin-top: 60px;
		text-align: center;
		@media (min-width: 768px) {
			line-height: 4.2rem;
		}
	}
	.transition-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 287px;
		@media (min-width: 1024px) {
			min-height: 330px;
		}
	}
	.transition-container-dog {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 317px;
		@media (min-width: 1024px) {
			min-height: 330px;
		}
	}

	.step-content {
		display: none;

		img {
			display: block;
			margin-inline: auto;
		}
		p {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5px;
			margin-bottom: 20px;
			img {
				margin-inline: unset;
			}
			span {
				font-size: 2rem;
				line-height: 2.4rem;
				color: ${({ theme }) => theme.color.purple};
				font-weight: 400;

				text-align: center;
				@media (min-width: 768px) {
					line-height: 3rem;
				}
			}
		}
	}

	.step-content.active {
		animation: ${fadeIn} 1s;
		display: block;
	}
	input {
		margin-bottom: 50px;
		width: 100%;
		max-width: 380px;
		margin-inline: auto !important;
		display: block;
	}

	.cat-input {
		appearance: none;
		width: 100%;
		height: 16px;
		background: linear-gradient(
			to right,
			var(--dark-color) 0%,
			var(--dark-color) var(--bg-progress),
			var(--light-color) var(--bg-progress),
			var(--light-color) 100%
		);
		outline: none;
		border: 1px solid #5e286d;
		border-radius: 50px;
		margin: 0;
		padding: 0;
		margin-bottom: 60px;
	}
	.dog-input {
		appearance: none;
		width: 100%;
		height: 16px;
		background: linear-gradient(
			to right,
			var(--dark-color) 0%,
			var(--dark-color) var(--bg-progress-dog),
			var(--light-color) var(--bg-progress-dog),
			var(--light-color) 100%
		);
		outline: none;
		border: 1px solid #5e286d;
		border-radius: 50px;
		margin: 0;
		padding: 0;
	}

	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		width: 28px;
		height: 28px;
		background: url(${range}) no-repeat center center; /* Replace with your icon's path */
		background-size: cover;
		/* border: 2px solid black; */
		border-radius: 50%;
		cursor: pointer;
		margin-top: -4px;
		position: relative;
		z-index: 9;
	}

	input[type='range']::-moz-range-thumb {
		width: 28px;
		height: 28px;
		background: url(${range}) no-repeat center center; /* Replace with your icon's path */
		background-size: cover;
		/* border: 2px solid black; */
		border-radius: 50%;
		cursor: pointer;
		margin-top: -4px;
		position: relative;
		z-index: 9;
	}
`;
export const RangeContainer = styled.div`
	position: relative;
	.dots-container {
		position: absolute;
		top: 4px;
		left: 2%;
		right: 2%;
		display: flex;
		justify-content: space-between;
		max-width: 380px;
		margin-inline: auto;
		padding-inline: 5px;
		@media (min-width: 768px) {
			left: 8%;
			right: 8%;
		}
		@media (min-width: 1024px) {
			left: 2%;
			right: 2%;
		}
		@media (min-width: 1440px) {
			padding-inline: 10px;
		}
	}

	.dot {
		width: 8px;
		height: 8px;
		background: linear-gradient(
			to right,
			var(--light-color) 0%,
			var(--light-color) 100%,
			var(--dark-color) 0%,
			var(--dark-color) 100%
		);

		border-radius: 50%;
	}
	.dot-dog {
		width: 8px;
		height: 8px;
		background: linear-gradient(
			to right,
			var(--light-color) 0%,
			var(--light-color) 100%,
			var(--dark-color) 0%,
			var(--dark-color) 100%
		);
		border-radius: 50%;
	}
`;
export const InstructionButton = styled.a`
	display: flex;
	width: 100%;
	max-width: 280px;
	height: 46px;
	padding: 8px 32px;
	justify-content: center;
	text-decoration: none;
	align-items: center;
	border: none;
	border-radius: 32px;
	background: #5e286d;
	box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23),
		-5px -5px 10px 0px rgba(250, 251, 255, 0.1);
	color: #fff8ee;
	text-align: center;
	position: relative;
	z-index: 0;
	font-family: 'Open Sans';
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px;
	margin-inline: auto;
	margin-top: 50px;
	@media (min-width: 1024px) {
		margin-top: 120px;
	}
	&::after {
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

	&:hover::after {
		opacity: 1;
	}
`;

export const DosageSubheader = styled.p`
	font-size: 1.6rem;
	line-height: 2rem;

	color: ${({ theme }) => theme.color.purple};
	font-weight: 700;
	margin: 0;
	margin-bottom: 50px;
	text-align: center;
	max-width: 300px;
	margin-inline: auto;
	@media (min-width: 768px) {
		font-family: 'Americane';
		font-size: 3.2rem;
		line-height: 3.6rem;
		max-width: 490px;
	}
`;

export const ImageDog = styled.img`
	border-radius: 50%;
	margin-inline: auto;
	max-width: 250px;
	width: 100%;
	display: block;
	position: relative;
	top: -60px;
`;
export const ReviewSection = styled.section`
	background-color: #f28f1d;
`;
export const SlideHeader = styled.h3`
	color: #5e286d;
	text-align: center;

	font-family: 'Americane';
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 36px;
`;
export const SlideSubheader = styled.p`
	color: #5e286d;
	text-align: center;

	font-family: 'Open Sans';
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px; /* 150% */
	margin-bottom: 20px;
`;
export const SlideDescription = styled.p`
	color: #5e286d;

	/* H4 */
	font-family: 'Open Sans';
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px; /* 155.556% */

	margin-inline: 23px;
	max-height: 200px;
	max-width: 500px;
	padding-inline: 10px;
	overflow-y: scroll;
	scrollbar-color: #5e286d;
	scrollbar-width: 16px;
	@media (min-width: 580px) {
		margin-left: auto;
		margin-right: auto;
	}
	@media (min-width: 768px) {
		padding-inline: 33px;
	}
	span {
		text-align: right;
		font-family: 'Open Sans';
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		display: block;
	}
	&::-webkit-scrollbar {
		width: 16px;
	}

	&::-webkit-scrollbar-track {
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 6px #5e286d;
		background-color: #5e286d;
		border-radius: 10px;
		background-clip: padding-box;
	}
`;
export const ImageItemRight = styled.img`
	position: absolute;
	right: 0;
	bottom: 0;

	border-bottom-right-radius: 40px;
`;
export const ImageItemLeft = styled.img`
	position: absolute;
	left: 0;
	bottom: 0;
	border-bottom-left-radius: 40px;
`;
export const SlideContainer = styled.div`
	background-color: #faecd8;
	border-radius: 40px;
	padding-bottom: 100px;
	position: relative;
`;

export const ReviewWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;

	padding-top: 35px;

	h2 {
		color: #fff8ee;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px;
		margin-bottom: 20px;
		padding-inline: 16px;
		@media (min-width: 768px) {
			font-size: 65px;
			padding-inline: 50px;
			line-height: 78px;
		}
		@media (min-width: 1024px) {
			text-align: center;
			padding-inline: 90px;
		}
		@media (min-width: 1280px) {
			padding-inline: 165px;
		}
	}
	.mobile-slider {
		padding-top: 70px;
		position: relative;
		@media (min-width: 1024px) {
			display: none;
		}
		.swiper-wrapper {
			padding-bottom: 50px;
		}
		.swiper-slide {
			cursor: pointer;
			filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.23));
		}
		.swiper-button-next,
		.swiper-button-prev {
			border: none;
			background-color: transparent;
			bottom: 25px !important;
			top: unset !important;
		}
		.swiper-button-next {
			right: 22%;
		}
		.swiper-button-prev {
			left: 22%;
		}

		.swiper-pagination-bullet {
			background: #faecd8 !important;
			border: 1px solid #5e286d !important;
			width: 15px;
			height: 15px;
			opacity: 1;
		}
		.swiper-pagination-bullet-active {
			background: #bfa7c7 !important;
			border: 1px solid #5e286d !important;
			width: 15px;
			height: 15px;
		}
		.swiper-horizontal > .swiper-pagination-bullets,
		.swiper-pagination-bullets.swiper-pagination-horizontal {
			bottom: 95px !important;
		}
		.swiper-button-next::after,
		.swiper-button-prev::after {
			display: none;
		}
	}
	.desktop-slider {
		display: none;
		@media (min-width: 1024px) {
			display: block;
		}
	}
`;
export const DesktopSliderWrapper = styled.div`
	display: none;
	@media (min-width: 1024px) {
		display: block;
		max-width: 1680px;
		margin-inline: auto;
		padding-top: 35px;
		padding-bottom: 45px;
		.swiper {
			.swiper-slide {
				.slider-container {
					display: flex;
					border-radius: 88px;
					background: #faecd8;
					gap: 15px;
					cursor: pointer;

					.slider-desktop-image {
						border-radius: 50%;
					}
					.slider-desktop-title {
						color: #5e286d;
						font-family: 'Open Sans';
						font-size: 18px;
						font-style: normal;
						font-weight: 700;
						line-height: 29px; /* 161.111% */
						padding-top: 15px;
					}
					.slider-desktop-subtitle {
						color: #5e286d;
						font-family: 'Open Sans';
						font-size: 18px;
						font-style: normal;
						font-weight: 400;
						line-height: 20px; /* 111.111% */
					}
					.description {
						color: #5e286d;
						font-family: 'Open Sans';
						font-size: 16px;
						font-style: normal;
						font-weight: 400;
						line-height: 20px; /* 125% */
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow: hidden;
						padding-right: 80px;
					}
					.name {
						display: block;
						color: #5e286d;
						font-family: 'Open Sans';
						font-size: 16px;
						font-style: normal;
						font-weight: 400;
						line-height: 20px; /* 125% */
						text-align: right;
						padding-right: 80px;
						margin-top: 15px;
					}
				}
			}
		}
	}
`;

export const ButtonSliderWrapper = styled.div`
	position: absolute;
	bottom: 60px !important;
	left: 50%;
	width: 100%;
	z-index: 11;
	transform: translateX(-50%);
	max-width: 400px;
`;
export const FaqRightItem = styled.div`
	position: absolute;
	right: -40px;
	/* transform: rotate(180deg); */
	top: -10px;
	animation: ${move} 2.5s 1.8s linear infinite alternate;
	img {
		max-height: 100px;
	}
	@media (min-width: 1024px) {
		right: -100px;
		top: 50px;
		img {
			max-height: unset;
		}
	}
`;
export const FaqLeftItem = styled.div`
	position: absolute;
	left: -72px;
	bottom: 0px;
	animation: ${move} 2.5s 1s linear infinite alternate;
	img {
		max-height: 140px;
	}

	@media (min-width: 1024px) {
		left: -240px;
		img {
			max-height: unset;
		}
	}
`;
export const FaqSection = styled.section``;
export const FaqWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	padding-bottom: 36px;
	padding-inline: 16px;
	position: relative;
	@media (min-width: 768px) {
		padding-inline: 50px;
	}
	@media (min-width: 1024px) {
		padding-inline: 90px;
		padding-bottom: 75px;
	}
	@media (min-width: 1280px) {
		padding-inline: 165px;
	}
	h2 {
		color: #f28f1d;
		margin-top: 72px;
		margin-bottom: 45px;
		/* H6 */
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		text-align: center;
		@media (min-width: 768px) {
			font-size: 65px;

			line-height: 64px; /* 98.462% */
		}
		@media (min-width: 1024px) {
			text-align: left;
		}
	}
	a {
		display: flex;
		width: 232px;
		height: 44px;
		padding: 8px 32px;
		justify-content: center;
		align-items: center;
		border-radius: 32px;
		background: #f2851d;
		box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23),
			-5px -5px 10px 0px rgba(250, 251, 255, 0.1);
		color: #fff8ee;
		text-align: center;

		/* H8 */
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
		text-decoration: none;
		gap: 5px;
		position: relative;
		z-index: 0;
		margin-top: 25px;
		margin-inline: auto;
		@media (min-width: 1024px) {
			margin-top: 50px;
			width: 280px;
			font-size: 20px;
			margin-inline: unset;
			line-height: 30px;
		}
		&::after {
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

		&:hover::after {
			opacity: 1;
		}
	}
	.accordion {
		@media (min-width: 1024px) {
			padding-inline: 100px;
		}
	}
	.faq-button-container {
		@media (min-width: 1024px) {
			display: flex;
			justify-content: flex-end;
			max-width: 1100px;
			padding-inline: 100px;
			margin-inline: auto;
			align-items: center;
			gap: 15px;
		}
	}
	.paragraph-faq {
		color: #5e286d;
		text-align: center;

		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px;
		margin-inline: auto;
		margin-top: 16px;
		@media (min-width: 1024px) {
			align-self: flex-end;
			margin-inline: unset;
			font-size: 24px;
			line-height: 30px;
			margin-top: 8px;
			margin-bottom: 8px;
		}
	}

	/* .accordion-item :is(.accordion-collapse, .accordion-button) {
		border-radius: 0px;
	}
	.accordion-item:first-of-type .accordion-button {
		border-top-left-radius: 36px !important;
		border-top-right-radius: 36px !important;
	}
	.accordion-item:last-of-type .accordion-button {
		border-bottom-left-radius: 36px !important;
		border-bottom-right-radius: 36px !important;
	}
	.accordion-item:last-of-type {
		border-bottom-right-radius: 36px !important;
		border-bottom-left-radius: 36px !important;
	}
	.accordion-item:first-of-type {
		border-top-right-radius: 36px !important;
		border-top-left-radius: 36px !important;
	}
	.accordion-header {
		border: 1px solid #bfa7c7;
		border-radius: 36px;
	}
	.accordion-item {
		border-radius: 36px;
		border: 1px solid #bfa7c7;
		background: #fffbf5;
		.accordion-header {
			margin: 0;
			border: 1px solid #bfa7c7;
			border-radius: 36px;
		}
		.accordion-body {
			padding: 0 16px 20px;
			color: #5e286d;


			font-family: 'Open Sans';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 26px;
			padding-inline: 33px;
		}
	}

	.accordion-item:not(:last-of-type) {
		margin-bottom: 16px;
	}
	.accordion-button {
		border-radius: 36px;
		color: #5e286d;
		padding-top: 16px;
		padding-bottom: 16px;

		font-family: "Open Sans";
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px; 
	}
	.accordion-item:last-of-type .accordion-button.collapsed {
		border-radius: 36px;
	}

	.accordion-button:not(.inside) {
	
		padding-inline: 33px;
	}

	.accordion-button::after {
		display: none;
	}

	.accordion-button:focus {
		box-shadow: none;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}

	.accordion-button.collapsed {
		position: relative;
		border-radius: 36px;
		will-change: color;
		overflow: hidden;
		background: #fffbf5;
		
		border: 1px solid rgb(191, 167, 199);

		span {
			z-index: 99;
		}
	}

	.accordion-button:not(.collapsed) {
		box-shadow: none;
		border-radius: 36px;
		color: black;
		background: transparent;
	
		font-weight: 700;
		color: #5e286d;
	}

	.accordion-item:not(.collapsed) {
		background: rgba(191, 167, 199, 0.4);
		.accordion-header {
			border-radius: 36px !important;
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			border: none !important;
		}
	}
	.accordion-item.collapsed {
		.accordion-header {
			border: 1px solid rgb(191, 167, 199);
		}
	} */

	.accordion-item :is(.accordion-collapse, .accordion-button) {
		border-radius: 0px !important;
	}

	.accordion-item {
		border-radius: 36px !important;
		background: #fffbf5 0% 0% no-repeat padding-box;
		border: 1px solid #bfa7c7;
		.accordion-header {
			margin-top: 0;
			margin-bottom: 0;
		}
		.accordion-body {
			/* padding: 0 16px 20px; */
			/* @include font-style(normal, 1.6rem, 2.6rem);
          color: $navy; */
			color: #5e286d;

			font-family: 'Open Sans';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 26px;
			padding-inline: 33px;
			@media (min-width: 768px) {
				font-size: 20px;

				line-height: 30px;
			}
		}
	}

	.accordion-item:not(:last-of-type) {
		margin-bottom: 16px;
	}

	.accordion-item:last-of-type .accordion-button.collapsed {
		border-radius: 36px !important;
	}

	.accordion-button:not(.inside) {
		/* @include font-style(bold, 1.8rem, 2.6rem); */
		color: #5e286d;

		font-family: 'Open Sans';
		font-size: 16px;

		line-height: 26px;
		padding: 20px 33px;
		@media (min-width: 768px) {
			font-size: 20px;

			line-height: 30px;
		}
	}

	.accordion-button::after {
		display: none;
	}

	.accordion-button:focus {
		box-shadow: none;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}

	.accordion-button.collapsed {
		position: relative;
		border-radius: 36px !important;
		will-change: color;
		overflow: hidden;
		background: #fffbf5 0% 0% no-repeat padding-box;
	}

	.accordion-item:not(.collapsed) {
		background: rgba(191, 167, 199, 0.4) 0% 0% no-repeat padding-box;
		border: 1px solid rgb(191, 167, 199);
	}
	.accordion-header:not(.collapsed) {
		border-radius: 36px !important;
		border: none !important;
	}
	.accordion-header:is(.collapsed) {
		border: 1px solid #bfa7c7 !important;
	}
	.accordion-button:not(.collapsed) {
		box-shadow: none;
		border-radius: 36px !important;
		background: transparent 0% 0% no-repeat padding-box;
		font-weight: 700;
	}
`;
export const SolutionsSection = styled.section`
	.solutions-wrapper {
		padding-top: 70px !important;
		padding-bottom: 70px !important;
		@media (min-width: 992px) {
			padding-top: 150px !important;
			padding-bottom: 0px !important;
		}
	}
`;
export const Icon = styled.img``;
export const SolutionImage = styled.img`
	width: 100%;
	max-width: 600px;
	margin-inline: auto;
	display: block;
	@media (min-width: 768px) {
		transform: translateY(-50px);
	}
	@media (min-width: 992px) {
		transform: translateY(-120px);
		width: 135%;
		max-width: unset;

		margin-inline: unset;
	}
	@media (min-width: 1280px) {
		/* transform: translateY(-150px); */
		transform: translate(-80px, -120px);
		margin-inline: unset;
	}
`;
export const SolutionsWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 18px;
	padding-top: 35px;
	@media (min-width: 768px) {
		padding-inline: 50px;
	}
	@media (min-width: 992px) {
		padding-inline: unset;
		padding-left: 80px;
		padding-top: 75px;
	}
	@media (min-width: 1280px) {
		padding-left: 165px;
	}
	h2 {
		color: #f28f1d;

		/* H6 */
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		margin-bottom: 20px;
		@media (min-width: 768px) {
			font-size: 65px;
			margin-bottom: 50px;
			line-height: 64px; /* 98.462% */
		}
	}
	h3 {
		color: #5e286d;

		/* H8 */
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
		margin-bottom: 16px;

		@media (min-width: 768px) {
			font-size: 24px;
			line-height: 34px;
			margin-bottom: 24px;
		}
	}
	ul {
		list-style: none;
		padding: 0;
		li {
			margin-bottom: 24px;
			@media (min-width: 768px) {
				margin-bottom: 40px;
			}
			h4 {
				color: #5e286d;
				font-family: 'Open Sans';
				font-size: 16px;
				font-style: normal;
				font-weight: 700;
				line-height: 20px; /* 125% */
				text-transform: uppercase;
				text-align: center;
				margin-bottom: 8px;
				@media (min-width: 768px) {
					text-align: left;
					font-family: 'Americane';
					font-size: 30px;
					line-height: 30px; /* 100% */
					margin-bottom: 15px;
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
				display: flex;
				align-items: flex-start;
				gap: 8px;
				@media (min-width: 768px) {
					font-size: 20px;
					line-height: 24px;
					max-width: 600px;
				}
				img {
					margin-top: 3px;
				}
			}
		}
	}
	a {
		display: flex;
		align-items: center;
		justify-content: center;

		@media (min-width: 1024px) {
			justify-content: flex-start;
			margin-bottom: 160px;
		}
		span {
			color: #5e286d;
			font-family: 'Open Sans';
			font-size: 16px;
			font-style: normal;
			font-weight: 700;
			line-height: 20px; /* 125% */
			text-decoration-line: underline;
			@media (min-width: 768px) {
				font-size: 2.4rem;
				line-height: 3.4rem;
			}
		}
	}
	.btn-about {
		@media (min-width: 1024px) {
			margin-bottom: 60px !important;
		}
	}
	.img-about {
		transform: translateY(-120px) !important;
	}
`;
export const ContactInnerWrapper = styled.div`
	max-width: 540px;
	margin-inline: auto;
	@media (min-width: 992px) {
		margin-inline: unset;
	}
`;
export const ContactSection = styled.section`
	background-color: rgba(250, 236, 216, 0.5);
`;
export const ContactWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 16px;
	@media (min-width: 768px) {
		padding-inline: 50px;
	}
	h2 {
		color: #f28f1d;
		text-align: center;
		margin-top: 30px;
		/* H6 */
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		@media (min-width: 1024px) {
			font-size: 65px;
			text-align: left;
			line-height: 64px; /* 98.462% */
			margin-top: 83px;
		}
	}
	h3 {
		color: #5e286d;
		text-align: center;
		padding-inline: 10px;
		letter-spacing: unset;
		margin-top: 20px;
		margin-bottom: 20px;
		/* H8 */
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
		@media (min-width: 1024px) {
			margin-top: 48px;
			margin-bottom: 13px;
			text-align: left;
			font-size: 24px;
			padding-inline: 0px;
			line-height: 34px; /* 141.667% */
		}
	}
	p {
		color: #5e286d;
		text-align: center;
		margin-top: 25px;
		margin-bottom: 25px;
		/* H9 */
		font-family: 'Open Sans';
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px; /* 157.143% */
		@media (min-width: 1024px) {
			font-size: 18px;
			margin-top: 55px;
			text-align: left;
			line-height: 28px; /* 155.556% */
		}
	}
`;
export const SocialLink = styled.a`
	color: #fff8ee;
	text-align: center;
	display: flex;
	width: 232px;
	height: 44px;
	padding: 8px 32px;
	justify-content: center;
	align-items: center;
	border-radius: 32px;
	background: #f2851d;
	box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.15),
		-5px -5px 10px 0px rgba(250, 251, 255, 0.1);

	position: relative;
	z-index: 0;
	gap: 8px;
	text-decoration: none;
	font-family: 'Open Sans';
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px; /* 125% */
	margin-bottom: 20px;
	margin-inline: auto;
	&::after {
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

	&:hover::after {
		opacity: 1;
	}
`;
export const MailLink = styled.a`
	color: #5e286d;
	font-family: 'Open Sans';
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px;
	text-decoration-line: underline;
	display: flex;
	width: 328px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	margin-inline: auto;
	@media (min-width: 992px) {
		justify-content: flex-start;
		margin-inline: unset;
	}
`;
export const KnowledgeSection = styled.section``;
export const KnowledgeWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	@media (min-width: 768px) {
		padding-inline: 60px;
	}
	.swiper {
		.swiper-wrapper {
			padding-top: 50px;
			padding-bottom: 50px;
			position: relative;
			z-index: 999;
		}
		.swiper-slide {
			padding-top: 30px;
			padding-bottom: 50px;
			transition: transform 0.25s ease-out;

			iframe {
				width: 100%;

				aspect-ratio: 3/2;

				border-radius: 36px;

				background-color: #5e286d;

				@media (min-width: 768px) {
					aspect-ratio: 3/2;
				}
			}
		}
		.swiper-slide-active {
			transform: scale(1.3);
			z-index: 99;

			@media (min-width: 768px) {
				transform: scale(1.2);
			}
			iframe {
				border: 3px solid #5e286d;
				box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.25);
			}
		}
	}
	h2 {
		color: #f28f1d;
		text-align: center;

		/* H6 */
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		margin-top: 30px;
		margin-bottom: 0px;
		@media (min-width: 768px) {
			text-align: left;
			font-size: 65px;
			margin-top: 150px;
			margin-bottom: 0px;
			margin-left: 50px;
			line-height: 64px; /* 98.462% */
		}
		@media (min-width: 1024px) {
			margin-left: 80px;
		}
		@media (min-width: 1280px) {
			margin-left: 180px;
		}
	}
`;
export const ContactImg = styled.img`
	width: 100%;
	margin-bottom: 30px;
	max-width: 550px;
	margin-inline: auto;
	display: block;
	@media (min-width: 992px) {
		margin-bottom: 60px;
		margin-inline: unset;
	}
`;
