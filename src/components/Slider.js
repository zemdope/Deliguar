import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ slides, onSlideClick }) => {
	return (
		<Swiper
			spaceBetween={30}
			className='desktop-slider'
			modules={[Navigation, Keyboard, Autoplay]}
			slidesPerView={2.5}
			
			breakpoints={{
				
				1440: {
			
					slidesPerView: 2,
				},
			   }}
			// centeredSlides={true}
			keyboard={{
				enabled: true
			}}
			loop={true}
			// initialSlide={1}
			speed={6000}
			autoplay={{
				delay:1,
				// pauseOnMouseEnter: true 
				pauseOnMouseEnter: true,        // added
        disableOnInteraction: false, 
	//    reverseDirection: true, 
			}}
			
			navigation={{
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			}}>
			{slides.map((slide, index) => (
				<SwiperSlide key={index} onClick={() => onSlideClick(index)}>
					<div className='slider-container'>
						<img
							className='slider-desktop-image'
							src={slide.image}
							alt={`Slide ${index}`}
						/>
						<div>
							<h3 className='slider-desktop-title'>
								{slide.title}
							</h3>
							<p className='slider-desktop-subtitle'>
								{slide.subtitle}
							</p>
							<div className='description'>
								{slide.description}
							</div>
							<span className='name'>{slide.name}</span>
						</div>
					</div>
				</SwiperSlide>
				
			))}
		</Swiper>
	);
};

export default Slider;
