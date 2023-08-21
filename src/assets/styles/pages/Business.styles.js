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
`;

export const ImageStain = styled.img`
	position: absolute;
	left: -50px;
	top: 130px;
	animation: ${move} 3s linear infinite alternate;
`;
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
	@media (min-width: 1440px) {
		padding-inline: 250px;
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
	${({ theme }) => theme.mq.desktop} {
		font-size: ${({ theme }) => theme.font.size.heading};
		line-height: 7.8rem;
		text-align: left;
		padding-top: 6.6rem;
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
	${({ theme }) => theme.mq.desktop} {
		font-size: ${({ theme }) => theme.font.size.heading};
		line-height: 7.8rem;
		text-align: left;
		padding-top: 3.8rem;
		margin-bottom: 3.2rem;
	}
`;
export const CertificateWrapper = styled.div`
	p {
		color: ${({ theme }) => theme.color.purple};
		font-size: ${({ theme }) => theme.font.size.headingSmallMobile};
		line-height: 2.4rem;
		font-weight: 300;
		margin-top: 0;
		margin-bottom: 0;
		padding-bottom: 2.2rem;
	}
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
