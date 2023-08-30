import styled from 'styled-components';

export const FormSection = styled.section`
	background: #fffbf5;
`;
export const ImageBottle = styled.img`
	width: 100%;
	display: block;
	max-width: 500px;
	margin-inline: auto;
	@media (min-width: 992px) {
		max-width: 650px;
	}
`;
export const ImageLogo = styled.img`
	margin-bottom: 30px;
	margin-top: 10px;
	@media (min-width: 992px) {
		margin-bottom: 50px;
		margin-top: 20px;
	}
`;
export const Wrapper = styled.section`
	max-width: 1440px;
	margin-inline: auto;
	padding-inline: 16px;
	@media (min-width: 768px) {
		padding-inline: 50px;
	}
	@media (min-width: 992px) {
		padding-inline: 90px;
	}
	@media (min-width: 1280px) {
		padding-inline: 165px;
	}
	h1 {
		color: #5e286d;

		/* H6 */
		font-family: 'Americane';
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 36px; /* 112.5% */
		@media (min-width: 992px) {
			font-size: 72px;
			font-style: normal;

			line-height: 76px; /* 105.556% */
		}
	}
	p {
		color: #5e286d;

		/* H8 */
		font-family: 'Open Sans';
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 20px; /* 125% */
		@media (min-width: 992px) {
			font-size: 24px;

			line-height: 34px;
		}
	}
`;
