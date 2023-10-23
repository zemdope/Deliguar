import styled from 'styled-components';
export const Wrapper = styled.div`

padding-inline: 18px;
margin-top: 70px;
max-width: 1440px;
margin-inline: auto;
    @media (min-width: 480px) {
        padding-inline: 32px;
        margin-inline: auto;
    }
    @media (min-width: 768px) {
        padding-inline: 90px;

    }
    @media (min-width: 1024px) {
        padding-inline: 110px;
        margin-top: 102px;
    }
    @media (min-width: 1280px) {
        padding-left: 200px;
    }
    h1 {
        font-size: ${({ theme }) => theme.font.size.headingMobile};
        color: ${({ theme }) => theme.color.orange};
        font-weight: 700;
        line-height: 3.6rem;
        margin-bottom: 0;
        padding-top: 45px;
        margin-bottom: 20px;
        ${({ theme }) => theme.mq.tablet} {
            
            font-size: 7.2rem;
            line-height: 7.6rem;
        }
        @media (min-width: 1024px) {
            
            font-size: 7.2rem;
            line-height: 7.6rem;
            padding-top: 5rem;
            margin-bottom: 30px;
        }
        @media (min-width: 1280px) {
            padding-top: 11rem;
        }
    }
    p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.color.purple};
        font-weight: 400;
        line-height: 2rem;
        margin: 0;
        margin-bottom: 65px;
        ${({ theme }) => theme.mq.tablet} {
            font-size: 1.8rem;
            line-height: 2.8rem;
            margin-bottom: 90px;
        }
    }
    .swiper {
        .swiper-wrapper {
            padding-bottom:130px;
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
			background: transparent !important;
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
			z-index: 999;
		}
		.swiper-button-next::after,
		.swiper-button-prev::after {
			display: none;
		}
    }
`

export const BlogItem  = styled.div`
border-radius: 20px;
background: #FAECD8;
margin-bottom:16px;
@media (min-width:768px) {
    border-radius: 40px;
    margin-bottom:32px;
}
h2 {
    color: #5E286D;
font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 157.143% */
// padding: 8px 10px;
padding-top:8px;
padding-bottom: 8px;
padding-right: 20px;
@media (min-width: 768px) {
    color: #5E286D;
    font-family: "Americane";
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 120% */
    padding: 20px 16px;
    max-width:640px;
}
@media (min-width: 992px) {
    color: #5E286D;
    font-family: "Americane";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 120% */
    padding: 20px 16px;
    max-width:640px;
}
}
.text-container {
    max-width:640px;
}
.blog-list-image {
    border-radius: 20px 0px 0px 20px;
    width: 100%;
    display:block; 
    height: 100%;
    object-fit:cover;
}
.info-container {
    display:flex;
    justify-content: space-between;
    align-items:flex-end;
    padding-left: 20px;
    margin-top: 43px;
   
    padding-bottom: 15px;
    @media (max-width: 1280px) {
        padding-right:30px;
    }
    @media (max-width: 768px) {
        flex-direction:column;
        padding-left: 0px;
        gap:10px;
        justify-content: center;
        align-items:center;
        margin-top: 13px;
    }

a {
    color: #fff8ee;
	text-align: center;
	display:flex;
	// height: 44px;
	padding:6px 20px;
	justify-content: center;
	align-items: center;
	border-radius: 32px;
	background: #f2851d;
	box-shadow: 5px 5px 10px 0px rgba(22, 27, 29, 0.15),
		-5px -5px 10px 0px rgba(250, 251, 255, 0.1);

	position: relative;
    max-width:130px;
	z-index: 0;
	gap: 8px;
	text-decoration: none;
	font-family: 'Open Sans';
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 20px; /* 125% */
	
    @media (min-width:768px) {
        padding: 8px 32px;
        max-width:160px;
        
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
div {
    display: flex;
    gap:5px;
    align-items:center;
    span {
        color: #5E286D;

font-family: "Open Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 157.143% */
@media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
}
    }
    img {
        width: 15px;
        height:15px;
        @media (min-width: 768px) {
            width: 20px;
            height:20px;
        }
    }
}
}

`