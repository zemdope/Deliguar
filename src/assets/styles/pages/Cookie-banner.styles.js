import styled from 'styled-components';

export const Wrapper = styled.div`
position:fixed;
top:72px;
background: #FAECD8;
box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.23);
z-index:9999;
width:100%;

${({ theme }) => theme.mq.desktop} {
		top:100px;
	}
`
export const InnerWrapper = styled.div`

display:flex;
flex-direction:column;
align-items: center;
gap:36px;
padding-top:30px;
padding-bottom:50px;
margin-inline:auto;
max-width:1440px;
padding-inline:18px;

@media (min-width:1024px) {
	padding-inline:30px;
	padding-right:110px;
	flex-direction:row;
	align-items: flex-start;
	
}
@media (min-width:1440px) {
	padding-left:40px;
	padding-right:100px;
	}
@media (min-width:1600px) {
	padding-left:30px;
	padding-right:110px;
	}

	svg {
		${({ theme }) => theme.mq.desktop} {
	width:220px;
	}
	
	}
	h2 {
		color: #5E286D;

/* H3 */
font-family: "Open Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 150% */
margin-bottom:13px;
text-align:center;
@media (min-width: 1024px) {
	text-align:left;
}
	}
	p {
		color: #5E286D;
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px;
text-align:center;
/* text-decoration-line: underline; */
max-width:700px;

@media (min-width: 1024px) {
	text-align:left;
	max-width:unset;

}}
a {
	color: #5E286D;
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px;
/* text-decoration-line: underline; */
}
	
	.button-container {

		@media (min-width:1024px) {
			align-self:flex-end;	
		}
	}
	.disable-button {
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
		color: #fff8ee !important;
		text-align: center;
		z-index: 0;
		@media (min-width: 992px) {
			color: #fff8ee;
			text-align: center;
			margin-inline: unset;
			font-size: 1.9rem;

			line-height: 30px; /* 150% */
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
`