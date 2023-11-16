import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import arrowPrev from '../assets/images/arrowPrev.svg';
import arrowNext from '../assets/images/arrowNext.svg';
import close from '../assets/images/closee.svg';
import { ButtonSliderWrapper } from '../assets/styles/pages/Index.styles';

import {
	ModalContainer,
	ModalContent,
	ModalSliderTitle,
	ModalSliderSubtitle,
	ModalSliderDescription,
	ModalSliderImage,
	ModalSliderDetails,
	ModalSliderContent,
	ImageItemRight,
	ImageItemLeft
} from '../assets/styles/pages/Modal.styles';
import item12 from '../assets/images/item12.svg';
import item13 from '../assets/images/item13.svg';

const Modal = ({ slides, initialSlide, onClose }) => {
	const swiperModalRef = useRef();
	return (
		<ModalContainer>
			<ModalContent>
				<Swiper
					autoHeight={true}
					initialSlide={initialSlide}
					modules={[Navigation, Pagination, Keyboard]}
					loop={true}
					navigation
					keyboard={{
						enabled: true
					}}
					className='modal-slider'
					onBeforeInit={(swiper) => {
						swiperModalRef.current = swiper;
					}}
					// pagination={{ clickable: true }}
					>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<ModalSliderContent>
								<ImageItemRight src={item12} alt='' />
								<ImageItemLeft src={item13} alt='' />
								<button
									className='modal-close-button'
									onClick={onClose}>
									<img src={close} alt='' />
								</button>
								<ModalSliderImage>
									<img
										src={slide.image}
										alt={`Slide ${index}`}
									/>
								</ModalSliderImage>
								<ModalSliderDetails>
									<ModalSliderTitle>
										{slide.title}
									</ModalSliderTitle>
									<ModalSliderSubtitle>
										{slide.subtitle}
									</ModalSliderSubtitle>
									<ModalSliderDescription>
										{slide.description}
										<span>{slide.name}</span>
									</ModalSliderDescription>
								</ModalSliderDetails>
							</ModalSliderContent>
						</SwiperSlide>
					))}
					<ButtonSliderWrapper>
						<button
							onClick={() => swiperModalRef.current?.slidePrev()}
							className='swiper-button-prev'>
							<img src={arrowPrev} alt='' />
						</button>
						<button
							onClick={() => swiperModalRef.current?.slideNext()}
							className='swiper-button-next'>
							<img src={arrowNext} alt='' />
						</button>
					</ButtonSliderWrapper>
				</Swiper>
			</ModalContent>
		</ModalContainer>
	);
};

export default Modal;
