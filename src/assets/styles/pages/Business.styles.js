import styled, { keyframes } from 'styled-components';
const move = keyframes`
from {
	transform: rotate(-3deg) translateY(-8px);
}
  to {
	transform:rotate(3deg)  translateY(8px);
  }
`;

export const BusinessSection = styled.section`
	padding-top: 70px;
	@media (min-width: 1024px) {
		padding-top: 102px;
	}
`;

export const ImageStain = styled.img``;
export const Wrapper = styled.div`
	position: relative;
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 24px;
	@media (min-width: 480px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: 50px;
	}
	@media (min-width: 1024px) {
		padding-inline: 80px;
	}
	@media (min-width: 1280px) {
		padding-inline: 165px;
	}
	@media (min-width: 1340px) {
		padding-inline: 250px;
	}

	.bottom {
		padding-top: 30px !important;
		@media (min-width: 768px) {
			padding-top: 85px !important;
			padding-left: 25px;
			margin-bottom: 27px;
			text-align: left;
			font-size: 45px;
			line-height: 60px;
		}
		@media (min-width: 992px) {
			line-height: 78px;
			font-size: 65px;
		}
	}
	.paragraph-bottom {
		font-weight: 400 !important;
		font-size: 14px;
		line-height: 22px;
		@media (min-width: 768px) {
			padding-left: 25px;
			font-size: 18px;
			line-height: 28px;
		}
	}
	.certificate-container {
		@media (min-width: 768px) {
			padding-top: 60px;
			padding-bottom: 53px;
		}
	}
`;

export const HeaderPage = styled.h1`
	margin-top: 4rem;
	margin-bottom: 4rem;
	text-align: center;
	font-family: 'Americane';
	color: ${({ theme }) => theme.color.orange};
	font-size: ${({ theme }) => theme.font.size.headingMobile};
	font-weight: bold;
	/* font-family: 'REM'; */
	@media (min-width: 768px) {
		font-size: 45px;
		line-height: 60px;
	}
	${({ theme }) => theme.mq.desktop} {
		font-size: ${({ theme }) => theme.font.size.heading};
		line-height: 7.8rem;
		text-align: left;
		padding-top: 0;
		margin-top: 6.6rem;
		margin-bottom: 5.8rem;
	}
`;
export const TargetList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0;
	${({ theme }) => theme.mq.desktop} {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		padding-bottom: 6rem;
	}
	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 400px;
		${({ theme }) => theme.mq.desktop} {
			flex-basis: 33%;
			max-width: 260px;
		}
		img {
			width: 100%;
			max-width: 150px;
			${({ theme }) => theme.mq.tablet} {
				max-width: 170px;
			}
			${({ theme }) => theme.mq.desktop} {
				max-width: 250px;
			}
		}
		h3 {
			text-align: center;
			color: ${({ theme }) => theme.color.purple};
			font-size: ${({ theme }) => theme.font.size.headingSmall};
			line-height: 3rem;
			font-weight: bold;
			font-family: 'Americane';
			text-align: center;
			margin-top: 2.4rem;
			margin-bottom: 1rem;
			width: 100%;
			border-bottom: 1px solid #662472;

			${({ theme }) => theme.mq.desktop} {
				line-height: 3.4rem;
				white-space: nowrap;
			}
		}
		p {
			text-align: center;
			color: ${({ theme }) => theme.color.purple};
			font-size: ${({ theme }) => theme.font.size.paragraphMobile};
			line-height: 2.2rem;
			font-weight: 300;
			text-align: center;
			margin-top: 0;
			margin-bottom: 2.2rem;
			${({ theme }) => theme.mq.desktop} {
				text-align: left;
				font-size: ${({ theme }) => theme.font.size.paragraph};
				line-height: 2.8rem;
			}
		}
	}
	li:first-child {
		${({ theme }) => theme.mq.desktop} {
			max-width: 290px;
		}
	}
`;
export const AboutUsSection = styled.section`
	background: rgba(250, 236, 216, 0.5);
	max-width: unset;
`;

export const HeaderAbout = styled.h2`
	padding-top: 4rem;
	margin-top: 0;
	margin-bottom: 1.5rem;
	text-align: center;
	color: ${({ theme }) => theme.color.orange};
	font-size: ${({ theme }) => theme.font.size.headingMobile};
	font-weight: bold;
	font-family: 'Americane';
	@media (min-width: 768px) {
		font-size: 45px;
		line-height: 60px;
	}
	${({ theme }) => theme.mq.desktop} {
		font-size: 6.5rem;
		line-height: 7.8rem;
		text-align: left;
		padding-top: 3.8rem;
		margin-bottom: 3.2rem;
	}
`;
export const ImageLogo = styled.img`
	display: block;
	margin-left: auto;
`;
export const ImageCertificate = styled.img`
	display: block;
	width: 100%;
`;
export const Paragraph = styled.p`
	color: ${({ theme }) => theme.color.purple};
	font-size: ${({ theme }) => theme.font.size.headingSmallMobile};
	line-height: 2.4rem;
	font-weight: 300;
	margin-top: 0;
	margin-bottom: 2.2rem;
	${({ theme }) => theme.mq.desktop} {
		text-align: left;
		font-size: ${({ theme }) => theme.font.size.headingSmall};
		line-height: 3.4rem;
		font-weight: bold;
	}
`;

export const PartnersSection = styled.section``;
export const PartnersWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 16px;
	position: relative;
	@media (min-width: 580px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: unset;
		padding-left: 50px;
		padding-top: 77px;
	}
	@media (min-width: 1024px) {
		padding-left: 100px;
	}
	@media (min-width: 1280px) {
		padding-left: 200px;
	}
	@media (min-width: 1400px) {
		padding-left: 260px;
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
		margin-top: 25px;
		margin-bottom: 20px;
		@media (min-width: 768px) {
			font-size: 45px;
			line-height: 60px;
			text-align: left;
			margin-top: 0;
			margin-bottom: 48px;
		}
		@media (min-width: 1280px) {
			font-size: 65px;
			line-height: 78px;
			white-space: nowrap;
		}
	}
	ul {
		list-style: none;
		padding: 0;
		margin-bottom: 40px;
		@media (min-width: 1024px) {
			margin-bottom: 105px;
		}
		li:not(:last-child) {
			margin-bottom: 13px;
		}
		li {
			display: flex;
			align-items: flex-start;
			gap: 8px;
			@media (min-width: 768px) {
				max-width: 430px;
			}
			img {
				width: 21px;
				height: 21px;
				@media (min-width: 768px) {
				}
			}
			p {
				margin: 0;
				span:first-child {
					color: #5e286d;
					font-family: 'Open Sans';
					font-size: 14px;
					font-style: normal;
					font-weight: 700;
					line-height: 22px; /* 157.143% */
					@media (min-width: 768px) {
						font-size: 18px;
						line-height: 28px;
					}
				}
				span:last-child {
					color: #5e286d;

					/* H9 */
					font-family: 'Open Sans';
					font-size: 14px;
					font-style: normal;
					font-weight: 400;
					line-height: 22px;
					@media (min-width: 768px) {
						font-size: 18px;
						line-height: 28px;
					}
				}
			}
		}
	}
	h3 {
		color: #5e286d;
		margin-bottom: 40px;
		/* H8 */
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
		@media (min-width: 768px) {
			font-size: 24px;
			max-width: 550px;
			line-height: 34px; /* 141.667% */
		}
	}
`;

export const ImagePartners = styled.img`
	display: block;
	width: 100%;
`;

export const ContactSection = styled.section``;

export const ContactWrapper = styled.div`
	max-width: 920px;
	margin-inline: auto;
	position: relative;
	@media (min-width: 992px) {
		transform: translateY(-75px);
	}
	h2 {
		color: #f28f1d;
		text-align: center;
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		margin-bottom: 30px;
		@media (min-width: 768px) {
			font-size: 45px;

			line-height: 60px; /* 120% */
		}
		@media (min-width: 992px) {
			font-size: 65px;

			line-height: 78px; /* 120% */
			margin-bottom: 66px;
		}
	}
	.last-team-item {
		margin-bottom: 87px;
		@media (min-width: 992px) {
			margin-bottom: unset;
		}
	}
`;
export const TeamItemWrapper = styled.div`
	margin-bottom: 25px;
	img {
		display: block;
		margin-inline: auto;
	}
	h3 {
		color: #5e286d;
		text-align: center;
		font-family: 'Americane';
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: 26px; /* 108.333% */
		margin-top: 17px;
	}
	p {
		color: #5e286d;
		text-align: center;
		font-family: 'Open Sans';
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px; /* 130% */
		@media (min-width: 992px) {
			font-size: 18px;
			line-height: 28px; /* 155.556% */
			margin-bottom: 30px;
		}
	}
	a {
		color: #5e286d;
		text-align: center;
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px; /* 162.5% */
		text-decoration-line: underline;
		display: block;
		cursor: pointer;
	}
`;

export const LeftItem = styled.div`
	position: absolute;
	left: -70px;
	top: 0px;
	animation: ${move} 3s linear infinite alternate;
	@media (min-width: 992px) {
		top: 400px;
		left: -170px;
	}
`;
export const RightItem = styled.div`
	position: absolute;
	right: -60px;
	top: 450px;
	animation: ${move} 3s linear infinite alternate;
	@media (min-width: 992px) {
		top: 100px;
		right: -170px;
	}
`;
export const RightItemAbout = styled.div`
	position: absolute;
	right: -60px;
	top: 10px;
	animation: ${move} 3s linear infinite alternate;
	@media (min-width: 992px) {
		right: -180px;
	}
	@media (min-width: 1024px) {
		right: -160px;
		top: 60px;
	}
`;
export const RightItemContact = styled.div`
	position: absolute;
	right: -60px;
	top: 30px;
	animation: ${move} 3s linear infinite alternate;
	@media (min-width: 992px) {
		display: none;
	}
`;
export const LeftItemContact = styled.div`
	position: absolute;
	left: -70px;
	bottom: -60px;
	animation: ${move} 3s linear infinite alternate;
	@media (min-width: 992px) {
		bottom: -30px;
		left: -340px;
	}
`;
export const LeftItemPartners = styled.div`
	position: absolute;
	left: -150px;
	top: 60px;
	animation: ${move} 3s linear infinite alternate;
`;

export const Subheader = styled.p`
	color: #5e286d;

	font-family: 'Open Sans' !important;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px; /* 125% */
	margin-bottom: 20px;
	@media (min-width: 768px) {
		font-size: 24px !important;

		line-height: 34px !important; /* 141.667% */
	}
`;
