import styled from 'styled-components';
import map from '../../images/map.png';
export const Wrapper = styled.div`
max-width: 1440px;
	margin-inline: auto;
	margin-top: 70px;
	background-image: url(${map});
	// background-size: 80% 80%;
	object-fit: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding-bottom: 180px;
	@media (min-width: 1024px) {
		margin-top: 102px;
		padding-bottom: 200px;
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
	text-align:center;
	@media (min-width: 768px) {
padding-inline:50px;
		font-size: 45px;
		padding-top: 60px;
		margin-bottom: 40px;
		line-height: 60px; /* 120% */
		text-align:left;
	}
	@media (min-width: 1024px) {
		padding-inline:100px;
		font-size: 65px;

		line-height: 78px; /* 120% */
	}
}
h2 {
	color: #5E286D;

/* H2 */
font-family: "Open Sans";
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 141.667% */
padding-inline: 18px;
@media (min-width: 768px) {
	padding-inline: 50px;
	font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 34px; /* 141.667% */
}
@media (min-width: 1024px) {
	padding-inline: 90px;
}
@media (min-width: 1280px) {
	padding-inline: 112px;
	max-width: 1180px;
}
}
h2:last-of-type {
	margin-top: 20px;
margin-bottom: 30px;
@media (min-width: 768px) {
	margin-top: 32px;
	margin-bottom: 55px;
}
}
h3 {
	color: #5E286D;
font-family: "Americane";
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 28px; /* 90% */
margin-top: 20px;
margin-bottom: 25px;
text-align: center;
@media (min-width: 768px) {
	margin-top: 32px;
	text-align: left;
	margin-bottom: 55px;
	font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 90% */
}
}
.wrapper {
	padding-inline: 18px;
@media (min-width: 768px) {
	padding-inline: 50px;
}
@media (min-width: 1024px) {
	padding-inline: 90px;
}
@media (min-width: 1280px) {
	padding-inline: 100px;
}
ul {
	list-style: none;
	padding-left: 0;
	li {

		color: #5E286D;

/* H6 */
font-family: "Americane";
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 112.5% */
button {
	margin-bottom: 10px;
	display:flex;
	align-items: center;
	gap:5px;
	border:none;
	background-color: transparent;
	font-family: "Americane";
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 26px; /* 112.5% */
color: #5E286D;
padding: 0;
@media (min-width: 768px) {
	gap:9px;
	font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 112.5% */
}
	img {
		width: 15px;
		height: 15px;
		@media (min-width: 768px) {
			width: 20px;
		height: 20px;
		}
	}
	
}
button.open {
	color: #f28f1d;
}
p {
	display: none;
	margin-bottom: 15px;
}
p.open {
	display:block;
	
}
h4 {
	color: #5E286D;
font-family: "Open Sans";
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 141.667% */
margin-bottom: 10px;
@media (min-width: 768px) {
	margin-bottom: 0;
	font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 34px; /* 141.667% */
}
}
a {
	color: #5E286D;
font-family: "Open Sans";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 22px; /* 141.667% */

@media (min-width: 768px) {
	font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 34px; /* 141.667% */
}
}
		
	}
}
}
`