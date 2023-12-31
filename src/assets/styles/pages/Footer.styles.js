import styled from 'styled-components';

export const SocialContainer = styled.div`
	display: flex;
	justify-content:flex-end;
	margin-top:17px;
	gap: 16px;
	
	@media (min-width: 992px) {
		gap: 24px;
		justify-content: flex-end;
	}
`;
export const FooterWrapper = styled.div`
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 18px;
	padding-top: 22px;
	padding-bottom: 22px;

	@media (min-width: 480px) {
		padding-inline: 32px;
	}
	@media (min-width: 768px) {
		padding-inline: 50px;
	}

	@media (min-width: 992px) {
		padding-inline: 90px;
		padding-top: 52px;
		padding-bottom: 52px;
	}
	@media (min-width: 1280px) {
		padding-inline: 165px;
	}
	h5 {
		color: #fef8ed;
		margin-bottom: 8px;
		font-family: 'Open Sans';
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px; /* 157.143% */
		white-space: nowrap;
		@media (min-width: 992px) {
			font-size: 16px;

			font-weight: 700;
			line-height: 20px; /* 125% */
		}
	}
	a {
		color: #FEF8ED;

/* H9 */
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */
	}
`;
export const FooterContainer = styled.footer`
	background-color: #5e286d;
	position: relative;
	z-index: 9;
`;
