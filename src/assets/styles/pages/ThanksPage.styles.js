import styled from 'styled-components';


export const Wrapper = styled.div`

	background-color:#FFFBF5;
	

	div {
		
	max-width: 1440px;
	margin-inline: auto;
	position: relative;
	margin-top:30%;
	height:100vh;
	
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
		text-align:center;
		@media (min-width: 768px) {
	padding-inline:50px;
			font-size: 45px;
			padding-top: 60px;
			margin-bottom: 40px;
			line-height: 60px; /* 120% */
		}
		@media (min-width: 1024px) {
			padding-inline:100px;
			font-size: 65px;

			line-height: 78px; /* 120% */
		}
	}
	a {
		width: 100%;
		max-width: 280px;
		color: white;
		font-size: 1.6rem;
		line-height: 2.6rem;
		font-family: 'Open sans';
		font-weight: 700;
		color: white;
		padding: 8px 32px;
		border-radius: 32px;
		background: #f28f1d;
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
		margin-inline: auto;
		@media (min-width: 992px) {
			color: #fff8ee;
			text-align: center;
		
			font-size: 1.3rem;
			max-width: 295px;
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
		/* background: ${({ theme }) => theme.color.orange}; */
		margin-bottom: 0;
	}

	}
`