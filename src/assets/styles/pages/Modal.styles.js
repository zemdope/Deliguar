// /* Modal.css */
import styled from 'styled-components';

// /* Styling for the modal container */
// .modal-container {
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	background-color: rgba(0, 0, 0, 0.8);
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
//    }

//    /* Styling for the modal content */
//    .swiper-container {
// 	width: 80%;
// 	height: 80%;
//    }

//    /* Style the slide images inside the modal */
//    .swiper-slide img {
// 	width: 100%;
// 	height: auto;
//    }

//    /* Position the navigation buttons in the modal */
//    .swiper-button-prev,
//    .swiper-button-next {
// 	position: absolute;
// 	top: 50%;
// 	transform: translateY(-50%);
//    }

//    /* Style the pagination bullets in the modal */
//    .swiper-pagination-bullet {
// 	background-color: rgba(255, 255, 255, 0.5);
// 	width: 10px;
// 	height: 10px;
// 	margin: 0 5px;
// 	border-radius: 50%;
//    }

//    .swiper-pagination-bullet-active {
// 	background-color: rgba(255, 255, 255, 1);
//    }

//    /* Styling for the close button */
//    .modal-close-button {
// 	position: absolute;
// 	top: 20px;
// 	right: 20px;
// 	background-color: transparent;
// 	border: none;
// 	color: white;
// 	cursor: pointer;
// 	font-size: 18px;
//    }
export const ModalSliderDescription = styled.p`
	max-width: 650px;
	color: #5e286d;
	font-family: 'Open Sans';
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 30px;
	max-height: 200px;
	padding-right: 30px;
	overflow-y: scroll;
	span {
		display: block;
		color: #5e286d;
		font-family: 'Open Sans';
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 21px;
		text-align: right;
		margin-top: 30px;
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
export const ModalSliderImage = styled.div`
	img {
		border-radius: 50%;
		width: 265px;
		margin-top: -120px;
	}
`;
export const ModalSliderContent = styled.div`
	background-color: #faecd8;
	border-radius: 40px;
	display: flex;
	gap: 100px;
	padding: 50px;
	padding-bottom: 120px;
	position: relative;
	button {
		background-color: #faecd8;
		border: none;
		position: absolute;
		top: 50px;
		right: 50px;
		img {
		}
	}
`;
export const ModalSliderDetails = styled.div``;
export const ModalSliderSubtitle = styled.p`
	color: #5e286d;
	font-family: 'Open sans';
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px;
	margin-bottom: 50px;
`;
export const ModalSliderTitle = styled.h3`
	color: #5e286d;
	text-align: left;
	font-family: 'Americane';
	font-size: 65px;
	font-style: normal;
	font-weight: 700;
	line-height: 78px;
`;
export const ImageItemRight = styled.img`
	position: absolute;
	right: 0;
	top: 0;

	border-top-right-radius: 40px;
`;
export const ImageItemLeft = styled.img`
	position: absolute;
	left: 0;
	bottom: 0;

	border-bottom-left-radius: 40px;
`;
export const ModalContent = styled.div`
	width: 80%;
	max-width: 1200px;
	margin-inline: auto;
	position: relative;
	.swiper {
		.swiper-slide {
			padding-top: 100px;
		}
	}
`;
export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(160, 159, 159, 0.5);
	backdrop-filter: blur(2.5px);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99999;
	.modal-slider {
		.swiper-button-next,
		.swiper-button-prev {
			border: none;
			background-color: transparent;
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
			bottom: 45px !important;
		}
		.swiper-button-next::after,
		.swiper-button-prev::after {
			display: none;
		}
	}
`;
