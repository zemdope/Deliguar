import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { gsap } from 'gsap';

// get other plugins:
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
	Wrapper,
	HeroSection,
	HeaderWrapper,
	HeroImage,
	LeftItem,
	RightItem,
	IdeaSection,
	IdeaWrapper,
	IdeaHeaderSolution,
	IdeaTitleSolution,
	IdeaParagraph,
	IdeaBottleImage,
	IdeaWrapperInner,
	ImageDogProblem,
	LearnMoreWrapper,
	TestSection,
	TestWrapper,
	TitleIcon,
	TestContainer,
	EffectSection,
	EffectWrapper,
	EffectRightItem,
	EffectHeader,
	EffectImage,
	EffectItem,
	EffectItemReverse,
	EffectItemsWrapper,
	DosageSection,
	DosageleftItem,
	DosageRightItem,
	DosageSubheader,
	DosageWrapper,
	RangeContainer,
	InstructionButton,
	ReviewSection,
	ReviewWrapper,
	ImageDog,
	SlideContainer,
	SlideSubheader,
	SlideHeader,
	ImageItemRight,
	ImageItemLeft,
	SlideDescription,
	ButtonSliderWrapper,
	DesktopSliderWrapper,
	FaqSection,
	FaqWrapper,
	FaqLeftItem,
	FaqRightItem,
	SolutionsWrapper,
	SolutionsSection,
	Icon,
	SolutionImage,
	ContactSection,
	ContactWrapper,
	MailLink,
	SocialLink,
	ContactImg,
	ContactInnerWrapper,
	KnowledgeSection,
	KnowledgeWrapper
} from '../assets/styles/pages/Index.styles';
import hero from '../assets/images/hero.png';
import heroDesktop from '../assets/images/heroDesktop.png';
import left from '../assets/images/left.svg';
import right from '../assets/images/right.svg';
import bottleHomePage from '../assets/images/bottleHomePage.png';
import dogProblem from '../assets/images/dogProblem.png';
import bell from '../assets/images/bell.svg';
import bulb from '../assets/images/bulb.svg';
import bottleDesktop from '../assets/images/bottleDesktop.png';
import eye from '../assets/images/eye.svg';
import effect from '../assets/images/effect.png';
import effectImage from '../assets/images/effectImage2.png';
import effectItem3 from '../assets/images/effectItem3.png';
import effectItem2 from '../assets/images/effectItem2.svg';
import effectItem from '../assets/images/effectItem.svg';
import smallCat from '../assets/images/smallCat.svg';
import mediumCat from '../assets/images/mediumCat.svg';
import bigCat from '../assets/images/bigCat.png';
import smallDog from '../assets/images/smallDog.svg';
import mediumDog from '../assets/images/mediumDog.svg';
import bigDog from '../assets/images/bigDog.png';
import drop from '../assets/images/drop.svg';
import dog from '../assets/images/dog.svg';
import arrowPrev from '../assets/images/arrowPrev.svg';
import arrowNext from '../assets/images/arrowNext.svg';
import bag from '../assets/images/bag.svg';
import solution from '../assets/images/solutionImage.png';
import plus from '../assets/images/plus.svg';
import ig from '../assets/images/insta.svg';
import fb from '../assets/images/fb.svg';
import buttonIcon from '../assets/images/buttonIcon.png';
import item5 from '../assets/images/item5.svg';
import item6 from '../assets/images/item6.svg';
import item7 from '../assets/images/item7.svg';
import item8 from '../assets/images/item8.svg';
import item9 from '../assets/images/item9.svg';
import item10 from '../assets/images/item10.svg';
import item11 from '../assets/images/item11.svg';
import item14 from '../assets/images/item14.svg';
import item15 from '../assets/images/iteem15.svg';
import contactImage from '../assets/images/Contact.png';
import mail from '../assets/images/mail.svg';
import solutionDesktop from '../assets/images/solutionImageDesktop.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slider from '../components/Slider';
import Modal from '../components/Modal';

const IndexPage = () => {
	const [currentStep, setCurrentStep] = useState(2);
	const [currentStepDog, setCurrentStepDog] = useState(2);

	const handleStepChange = (event) => {
		setCurrentStep(Number(event.target.value));
	};
	const handleStepDogChange = (event) => {
		setCurrentStepDog(Number(event.target.value));
	};
	const darkColor = '#5E286D';
	const lightColor = '#FFFBF5';
	const bgProgress =
		currentStep === 1 ? '0%' : currentStep === 3 ? '100%' : '50%';
	const bgProgressDog =
		currentStepDog === 1 ? '0%' : currentStepDog === 3 ? '100%' : '50%';

	const [currentSlide, setCurrentSlide] = useState(0);

	const swiperMobileRef = useRef();

	const [modalIndex, setModalIndex] = useState(null);

	const openModal = (index) => {
		setModalIndex(index);
	};

	const closeModal = () => {
		setModalIndex(null);
	};
	const slides = [
		{
			image: dog,
			title: 'Daisy',
			subtitle: 'Beagle | 11y.',
			description:
				'Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa earum eligendi tenetur rerum debitis, autem ullam omnis molestiae eveniet, sequi commodi, necessitatibus corrupti laudantium accusantium veritatis at architecto laboriosam! for Slide 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad provident sapiente facere similique natus asperiores ipsa accusantium unde nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quos?'
		},
		{
			image: dog,
			title: 'Alex',
			subtitle: 'Beagle | 11y.',
			description:
				'Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, fuga. Laborum at illum veritatis doloremque porro voluptatibus architecto, quos, voluptate exercitationem veniam, sapiente temporibus? Voluptates vitae ex tempora odio debitis. for Slide 2'
		},
		{
			image: dog,
			title: 'Daisy',
			subtitle: 'Beagle | 11y.',
			description:
				'Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint omnis voluptate consequuntur ea qui sequi, exercitationem assumenda eaque doloremque quia incidunt sunt odit ullam repellat. Numquam, facilis saepe? Ipsum, molestiae. for Slide 3'
		},
		{
			image: dog,
			title: 'Alex',
			subtitle: 'Beagle | 11y.',
			description:
				'Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint omnis voluptate consequuntur ea qui sequi, exercitationem assumenda eaque doloremque quia incidunt sunt odit ullam repellat. Numquam, facilis saepe? Ipsum, molestiae. for Slide 3'
		},
		{
			image: dog,
			title: 'Daisy',
			subtitle: 'Beagle | 11y.',
			description:
				'Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint omnis voluptate consequuntur ea qui sequi, exercitationem assumenda eaque doloremque quia incidunt sunt odit ullam repellat. Numquam, facilis saepe? Ipsum, molestiae. for Slide 3'
		}
	];
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);
	useEffect(() => {
		const element = ref.current;
		const t2 = gsap.timeline({ paused: true });
		t2.from(element.querySelector('.first-icon'), {
			opacity: 0,

			duration: 0.4,
			delay: 1,
			ease: 'power2.out'
		});
		t2.from(element.querySelector('.first-paragraph'), {
			opacity: 0,
			x: 30,
			duration: 0.4,
			delay: 0.2,
			ease: 'power2.out'
		});
		t2.from(element.querySelector('.second-icon'), {
			opacity: 0,

			duration: 0.4,
			delay: 0.1,
			ease: 'power2.out'
		});
		t2.from(element.querySelector('.second-paragraph'), {
			opacity: 0,
			x: 30,
			duration: 0.4,
			delay: 0.2,
			ease: 'power2.out'
		});
		t2.from(element.querySelector('.third-icon'), {
			opacity: 0,

			duration: 0.4,
			delay: 0.1,
			ease: 'power2.out'
		});

		t2.from(element.querySelector('.third-paragraph'), {
			opacity: 0,
			x: 30,
			duration: 0.4,
			delay: 0.2,
			ease: 'power2.out'
		});
		ScrollTrigger.create({
			trigger: element.querySelector('.first'),
			onEnter: () => {
				// Play the timeline when the section is visible
				t2.play();
			},
			onLeaveBack: () => {
				// Reverse the timeline when the section is not visible anymore
				t2.reverse();
			}
		});
	}, []);

	return (
		<Layout>
			<HeroSection>
				<Wrapper>
					<LeftItem>
						<img className='d-lg-none' src={left} alt='' />
						<img
							className='d-none d-lg-block'
							src={item15}
							alt=''
						/>
					</LeftItem>
					<RightItem>
						<img className='d-lg-none' src={right} alt='' />
						<img
							className='d-none d-lg-block'
							src={item14}
							alt=''
						/>
					</RightItem>
					<HeaderWrapper>
						<h1>Masz dość nieskutecznych suplementów?</h1>
						<p>Kupujesz i nie widzisz że działają?</p>
						<p>Zdrowie Twojego zwierzęcia ma być widoczne</p>
					</HeaderWrapper>
					<HeroImage>
						<img className='d-lg-none' src={hero} alt='' />
						<img
							className='d-none d-lg-block'
							src={heroDesktop}
							alt=''
						/>
					</HeroImage>
				</Wrapper>
			</HeroSection>
			<IdeaSection>
				<IdeaWrapper>
					<Row>
						<Col
							className='d-none d-md-flex align-items-center'
							xs='12'
							md='6'>
							<ImageDogProblem src={dogProblem} alt='' />
						</Col>
						<Col xs='12' md='5'>
							<h2>
								Problem <TitleIcon src={bell} alt='' />
							</h2>
							<ImageDogProblem
								className='d-md-none'
								src={dogProblem}
								alt=''
							/>
							<span className='text-end text-md-start'>
								Czy wiesz, że...
							</span>
							<h3>
								Zdrowe jelita są kluczem do ogólnego zdrowia
								Twojego zwierzaka?
							</h3>
							<p>
								Nieodpowiednie odżywianie i brak wsparcia dla
								zdrowia jelit mogą spowodować trudności w
								trawieniu pokarmu, słaby apetyt i pobranie wody
								lub problemy ze skórą i sierścią.
								<br />
								<br />W wielu przypadkach stosowanie suplementów
								nie przynosi oczekiwanych rezultatów ponieważ
								ich strawnoś jest ograniczona przez obniżoną
								funkcjonalność jelit. W efekcie podajemy
								suplementy, których organizm zwierzęcia nie może
								wykorzystać.
							</p>
						</Col>
					</Row>
				</IdeaWrapper>
				<IdeaWrapper>
					<Row>
						<Col xs='12' md='6'>
							<IdeaTitleSolution>
								Rozwiązanie <TitleIcon src={bulb} alt='' />
							</IdeaTitleSolution>
							<IdeaWrapperInner>
								<div>
									<IdeaHeaderSolution>
										DeliGuard to innowacyjne podejście do
										żywienia Twojego pupila.
									</IdeaHeaderSolution>
									<IdeaParagraph>
										Zawiera produkty wytwarzane przez
										dobroczynne bakterie Bacillus subtilis,
										które usprawniają pracę jelit,
										wspomagają naturalne procesy obronne
										organizmu oraz przyswajanie składników
										odżywczych z pokarmu.
									</IdeaParagraph>
								</div>
								<IdeaBottleImage
									className='d-md-none'
									src={bottleHomePage}
									alt=''
								/>
							</IdeaWrapperInner>
							<LearnMoreWrapper className='d-none d-lg-block'>
								<h3>
									Dowiedz się więcej o DeliGuard i
									postbiotykach
								</h3>
								<Link>Przeczytaj o produkcie</Link>
								<p>
									DeliGuard to efekt badań naszych ekspertów i
									tą wiedzą chcemy się z Tobą podzielić.
								</p>
								<h4>
									Zamów teraz i otrzymaj darmowego e-book o
									zdrowym żywieniu twojego pupila.
								</h4>
								<a href=''>Pobierz e-book</a>
							</LearnMoreWrapper>
						</Col>
						<Col className='d-none d-md-block' xs='12' md='6'>
							<IdeaBottleImage src={bottleDesktop} alt='' />
						</Col>
					</Row>
				</IdeaWrapper>
				<LearnMoreWrapper className='d-lg-none'>
					<h3>Dowiedz się więcej o DeliGuard i postbiotykach</h3>
					<Link>Przeczytaj o produkcie</Link>
					<p>
						DeliGuard to efekt badań naszych ekspertów i tą wiedzą
						chcemy się z Tobą podzielić.
					</p>
					<h4>
						Zamów teraz i otrzymaj darmowego e-book o zdrowym
						żywieniu twojego pupila.
					</h4>
					<a href=''>Pobierz e-book</a>
				</LearnMoreWrapper>
			</IdeaSection>
			<TestSection>
				<TestWrapper>
					{/* <ImageTest src={pipeta} alt='' /> */}
					<h2>Badania przeprowadzone przez ekspertów BioDose </h2>
					<TestContainer>
						<p>
							potwierdzają, że DeliGuard skutecznie poprawia
							kondycję zwierząt, co jest szybko zauważalne.
						</p>
						<h3>Sprawdź rezultaty badań:</h3>
						<Link>Nasze badania</Link>
					</TestContainer>
				</TestWrapper>
			</TestSection>
			<EffectSection>
				<EffectWrapper>
					<EffectRightItem>
						<img src={item5} alt='' />
					</EffectRightItem>
					<Row>
						<Col md='12'>
							<EffectHeader>
								<img src={eye} alt='' />
								<div>
									<h2>Zastosuj DeliGuard</h2>
									<p>u swojego zwierzaka</p>
								</div>
							</EffectHeader>
						</Col>
						<Col md='3'>
							<EffectImage
								className='d-none d-xl-block'
								src={effectImage}
								alt=''
							/>
							<EffectImage
								className='d-xl-none'
								src={effect}
								alt=''
							/>
						</Col>
						<Col md='9'>
							<EffectItemsWrapper ref={ref} className='first'>
								<Row>
									<Col>
										<EffectItemReverse>
											<p className='first-paragraph'>
												Lepsze pobranie wody i karmy
											</p>
											<img
												className='first-icon'
												src={effectItem3}
												alt=''
											/>
										</EffectItemReverse>
									</Col>
								</Row>
								<Row>
									<Col md='6'>
										<EffectItem>
											<img
												className='second-icon'
												src={effectItem2}
												alt=''
											/>
											<p className='second-paragraph'>
												Zdrową i lśniącą sierść
											</p>
										</EffectItem>
									</Col>
									<Col md='6'>
										<EffectItemReverse>
											<p className='third-paragraph'>
												Poprawę trawienia
											</p>
											<img
												className='third-icon'
												src={effectItem}
												alt=''
											/>
										</EffectItemReverse>
									</Col>
								</Row>
							</EffectItemsWrapper>
						</Col>
					</Row>
				</EffectWrapper>
			</EffectSection>
			<DosageSection>
				<DosageWrapper>
					<DosageleftItem>
						<img src={item6} alt='' />
					</DosageleftItem>
					<DosageRightItem>
						<img src={item7} alt='' />
					</DosageRightItem>
					<h2>Dawkowanie</h2>
					<DosageSubheader>
						Oceń wielkość swojego zwierzaka i dowiedz się ile kropli
						mu podać
					</DosageSubheader>
					<Row>
						<Col lg='6'>
							<h3>Koty</h3>
							<div>
								<div className='transition-container'>
									<div
										className={`step-content ${
											currentStep === 1 ? 'active' : ''
										}`}>
										<img src={smallCat} alt='Step 1' />
										<h4>{'Mały (< 5 kg)'}</h4>
										<p>
											<img src={drop} alt='' />
											<span>
												Dawkowanie: 2 kropli na dzień
											</span>
										</p>
									</div>
									<div
										className={`step-content ${
											currentStep === 2 ? 'active' : ''
										}`}>
										<img src={mediumCat} alt='Step 2' />
										<h4>{'Średni (5 -10 kg)'}</h4>
										<p>
											<img src={drop} alt='' />
											<span>
												Dawkowanie: 5 kropli na dzień
											</span>
										</p>
									</div>
									<div
										className={`step-content ${
											currentStep === 3 ? 'active' : ''
										}`}>
										<img src={bigCat} alt='Step 3' />
										<h4>{'Duży (>10 kg)'}</h4>
										<p>
											<img src={drop} alt='' />
											<span>
												Dawkowanie: 7 kropli na dzień
											</span>
										</p>
									</div>
								</div>
								<RangeContainer>
									<input
										type='range'
										min='1'
										max='3'
										step='1'
										className='cat-input'
										value={currentStep}
										onChange={handleStepChange}
										style={{
											'--dark-color': darkColor,
											'--light-color': lightColor,
											'--bg-progress': bgProgress
										}}
									/>
									<div className='dots-container'>
										<div
											className='dot'
											style={{
												'--dark-color': darkColor,
												'--light-color': lightColor,
												'--bg-progress': bgProgress
											}}></div>
										<div
											className='dot'
											style={{
												'--dark-color': darkColor,
												'--light-color': lightColor,
												'--bg-progress': bgProgress
											}}></div>
										<div
											className='dot'
											style={{
												'--dark-color': darkColor,
												'--light-color': lightColor,
												'--bg-progress': bgProgress
											}}></div>
									</div>
								</RangeContainer>
							</div>
						</Col>
						<Col lg='6'>
							<h3>Psy</h3>
							<div>
								<div className='transition-container-dog'>
									<div
										className={`step-content ${
											currentStepDog === 1 ? 'active' : ''
										}`}>
										<img src={smallDog} alt='Step 1' />
										<h4>{'Mały (< 10 kg)'}</h4>
										<p>
											<img src={drop} alt='' />
											<span>
												Dawkowanie: 3 kropli na dzień
											</span>
										</p>
									</div>
									<div
										className={`step-content ${
											currentStepDog === 2 ? 'active' : ''
										}`}>
										<img src={mediumDog} alt='Step 2' />
										<h4>{'Średni (10 -30 kg)'}</h4>
										<p>
											<img src={drop} alt='' />
											<span>
												Dawkowanie: 5 kropli na dzień
											</span>
										</p>
									</div>
									<div
										className={`step-content ${
											currentStepDog === 3 ? 'active' : ''
										}`}>
										<img src={bigDog} alt='Step 3' />
										<h4>{'Duży (>30 kg)'}</h4>
										<p>
											<img src={drop} alt='' />
											<span>
												Dawkowanie: 7 kropli na dzień
											</span>
										</p>
									</div>
								</div>
								<RangeContainer>
									<input
										type='range'
										min='1'
										max='3'
										step='1'
										className='dog-input'
										value={currentStepDog}
										onChange={handleStepDogChange}
										style={{
											'--dark-color': darkColor,
											'--light-color': lightColor,
											'--bg-progress-dog': bgProgressDog
										}}
									/>
									<div className='dots-container'>
										<div
											className='dot-dog'
											style={{
												'--dark-color': darkColor,
												'--light-color': lightColor,
												'--bg-progress-dog':
													bgProgressDog
											}}></div>
										<div
											className='dot-dog'
											style={{
												'--dark-color': darkColor,
												'--light-color': lightColor,
												'--bg-progress-dog':
													bgProgressDog
											}}></div>
										<div
											className='dot-dog'
											style={{
												'--dark-color': darkColor,
												'--light-color': lightColor,
												'--bg-progress-dog':
													bgProgressDog
											}}></div>
									</div>
								</RangeContainer>
							</div>
						</Col>
					</Row>
					<InstructionButton>Instrukcja użycia</InstructionButton>
				</DosageWrapper>
			</DosageSection>
			<ReviewSection>
				<ReviewWrapper>
					<h2>
						Nasi zadowoleni nabywcy potwierdzają skuteczność
						DeliGuard:
					</h2>
					<div>
						<Swiper
							spaceBetween={10}
							navigation
							className='mobile-slider'
							keyboard={{
								enabled: true
							}}
							modules={[Navigation, Pagination, Keyboard]}
							onBeforeInit={(swiper) => {
								swiperMobileRef.current = swiper;
							}}
							pagination={{ clickable: true }}
							slidesPerView={1}>
							{slides.map((slide, index) => (
								<SwiperSlide key={index}>
									<SlideContainer>
										<ImageItemRight src={item10} alt='' />
										<ImageItemLeft src={item11} alt='' />
										<ImageDog
											src={slide.image}
											alt={`Slide ${index + 1}`}
										/>
										<SlideHeader>
											{slides[currentSlide].title}
										</SlideHeader>
										<SlideSubheader>
											{slides[currentSlide].subtitle}
										</SlideSubheader>
										<SlideDescription>
											{slides[currentSlide].description}
										</SlideDescription>
									</SlideContainer>
								</SwiperSlide>
							))}
							<ButtonSliderWrapper>
								<button
									onClick={() =>
										swiperMobileRef.current?.slidePrev()
									}
									className='swiper-button-prev'>
									<img src={arrowPrev} alt='' />
								</button>
								<button
									onClick={() =>
										swiperMobileRef.current?.slideNext()
									}
									className='swiper-button-next'>
									<img src={arrowNext} alt='' />
								</button>
							</ButtonSliderWrapper>
						</Swiper>
					</div>
				</ReviewWrapper>
				<DesktopSliderWrapper>
					<Slider slides={slides} onSlideClick={openModal} />
					{modalIndex !== null && (
						<Modal
							slides={slides}
							initialSlide={modalIndex}
							onClose={closeModal}
						/>
					)}
				</DesktopSliderWrapper>
			</ReviewSection>
			<FaqSection>
				<FaqWrapper>
					<FaqLeftItem>
						<img src={item8} alt='' />
					</FaqLeftItem>
					<FaqRightItem>
						<img src={item9} alt='' />
					</FaqRightItem>
					<h2>FAQ</h2>
					<Row>
						<Col>
							<Accordion defaultActiveKey='0'>
								<Accordion.Item eventKey='0'>
									<Accordion.Header>
										Jak DeliGuard wpływa na regulację pracy
										przewodu pokarmowego?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit
										in voluptate velit esse cillum dolore eu
										fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim
										id est laborum.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='1'>
									<Accordion.Header>
										Czy znane są skutki uboczne?
									</Accordion.Header>
									<Accordion.Body>
										DeliGuard może powodować wzrost apetytu
										u pewnej grupy zwierząt, jest to
										szczególnie ważne dla właścicieli psów,
										które mają tendencję do przejadania się.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='2'>
									<Accordion.Header>
										Czy DeliGuard można podawać zamiast
										antybiotyków?
									</Accordion.Header>
									<Accordion.Body>
										DeliGuard może powodować wzrost apetytu
										u pewnej grupy zwierząt, jest to
										szczególnie ważne dla właścicieli psów,
										które mają tendencję do przejadania się.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='3'>
									<Accordion.Header>
										Czy DeliGuard może być podawany podczas
										choroby jako forma wzmocnienia
										osłabionego zwierzęcia? Czy DeliGuard
										może być podawany profilaktycznie?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Sequi ipsam iusto
										neque quis asperiores ut, perspiciatis
										ullam, dolorem in cumque nam enim porro
										quae, voluptate atque quo aliquam! Modi
										quia cupiditate explicabo, vitae dolores
										assumenda provident harum itaque!
										Tempora ex reprehenderit architecto
										iusto harum corporis excepturi molestias
										doloribus, magni dolorem?
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='4'>
									<Accordion.Header>
										Czym różnią się postbiotyki od pro- i
										prebiotyków?
									</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Sequi ipsam iusto
										neque quis asperiores ut, perspiciatis
										ullam, dolorem in cumque nam enim porro
										quae, voluptate atque quo aliquam! Modi
										quia cupiditate explicabo, vitae dolores
										assumenda provident harum itaque!
										Tempora ex reprehenderit architecto
										iusto harum corporis excepturi molestias
										doloribus, magni dolorem?
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Col>
						<Col xs='12'>
							<div className='faq-button-container'>
								<a href=''>
									<img src={bag} alt='' />
									<span>Przekonaj się sam</span>
								</a>
								<p className='paragraph-faq'>
									i zobacz że DeliGuard działa
								</p>
							</div>
						</Col>
					</Row>
				</FaqWrapper>
			</FaqSection>
			<SolutionsSection>
				<SolutionsWrapper>
					<h2>Rozwiązania dla biznesu</h2>
					<Row>
						<Col lg='7'>
							<h3>
								Deliguard może działać jako cenne wsparcie dla:
							</h3>
							<ul>
								<li>
									<h4>producentów karm</h4>
									<p>
										<Icon src={plus} alt='' />{' '}
										<span>
											ponieważ może być dodawany do paszy
											podczas jej produkcji.
										</span>
									</p>
								</li>
								<li>
									<h4>Lekarzy weterynarii</h4>
									<p>
										<Icon src={plus} alt='' />{' '}
										<span>
											jako wsparcie w leczeniu biegunek o
											nieznanej etiologii, a także
											problemów trawiennych lub
											dermatologicznych
										</span>
									</p>
								</li>
								<li>
									<h4>Handlu</h4>
									<p>
										<Icon src={plus} alt='' />{' '}
										<span>
											jako innowacyjny produkt i odpowiedź
											na potrzeby właścicieli zwierząt
											domowych
										</span>
									</p>
								</li>
							</ul>
							<Link>
								{' '}
								<img src={buttonIcon} alt='' />{' '}
								<span>Dowiedz się więcej</span>
							</Link>
						</Col>
						<Col lg='5'>
							<SolutionImage
								className='d-lg-none'
								src={solution}
								alt=''
							/>
							<SolutionImage
								className=' d-none d-lg-block'
								src={solutionDesktop}
								alt=''
							/>
						</Col>
					</Row>
				</SolutionsWrapper>
			</SolutionsSection>
			<ContactSection>
				<ContactWrapper>
					<Row className='flex-lg-row-reverse'>
						<Col xs='12' lg='6'>
							<ContactInnerWrapper>
								<h2>Kontakt</h2>
								<h3>
									W przypadku pytań prosimy o wiadomość na
									adres
								</h3>
								<MailLink href=''>
									<img src={mail} alt='' />
									<span> support@deliguard.net</span>
								</MailLink>
								<p>
									Jeśli szukasz przydatnych wskazówek dla
									właścicieli zwierząt domowych, będziemy
									szczęśliwi, jeśli do nas dołączysz:{' '}
								</p>
								<Row>
									<Col xs='12' lg='6'>
										<SocialLink href=''>
											<img src={ig} alt='' />{' '}
											<span>deliguard.pets</span>
										</SocialLink>
									</Col>
									<Col xs='12' lg='6'>
										<SocialLink href=''>
											<img src={fb} alt='' />{' '}
											<span>deliguard.pets</span>
										</SocialLink>
									</Col>
								</Row>
							</ContactInnerWrapper>
						</Col>
						<Col xs='12' lg='6'>
							<ContactImg src={contactImage} alt='' />
						</Col>
					</Row>
				</ContactWrapper>
			</ContactSection>
			<KnowledgeSection>
				<KnowledgeWrapper>
					<h2>Baza wiedzy</h2>
					<Swiper
						spaceBetween={10}
						initialSlide={1}
						keyboard={{
							enabled: true
						}}
						loop
						breakpoints={{
							768: {
								slidesPerView: 3
							}
						}}
						centeredSlides={true}
						modules={[Keyboard, Navigation]}
						slidesPerView={2.2}>
						<SwiperSlide>
							<iframe src='https://www.youtube.com/embed/VAH-ixdFWFs?si=RuSf6gPUX7LgTVYV'></iframe>
						</SwiperSlide>
						<SwiperSlide>
							<iframe src='https://www.youtube.com/embed/VAH-ixdFWFs?si=RuSf6gPUX7LgTVYV'></iframe>
						</SwiperSlide>
						<SwiperSlide>
							<iframe src='https://www.youtube.com/embed/VAH-ixdFWFs?si=RuSf6gPUX7LgTVYV'></iframe>
						</SwiperSlide>
						<SwiperSlide>
							<iframe src='https://www.youtube.com/embed/VAH-ixdFWFs?si=RuSf6gPUX7LgTVYV'></iframe>
						</SwiperSlide>
					</Swiper>
				</KnowledgeWrapper>
			</KnowledgeSection>
		</Layout>
	);
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
