import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { gsap } from 'gsap';
// import { ButtonSliderWrapper } from '../assets/styles/pages/Index.styles';

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
import bottleHomePage from '../assets/images/bottleMobile.svg';
import dogProblem2 from '../assets/images/dogProblem2.svg';
import bell from '../assets/images/bell.svg';
import bulb from '../assets/images/bulb.svg';
import bottleDesktop from '../assets/images/bottleDesktop2.svg';
import eye from '../assets/images/eye.svg';
import effect from '../assets/images/effect.png';
import effectImage from '../assets/images/effectImage2.png';
import effectImagee from '../assets/images/effectImagee.svg';
import effectItem3 from '../assets/images/EffectItem3.svg';
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
import contactImage from '../assets/images/contactImage.svg';
import mail from '../assets/images/mail.svg';
import solutionMobile from '../assets/images/solutionMobile.svg';
import solutionn from '../assets/images/solutionn.svg';
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
	const swiperKnowledgeRef = useRef();
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
			title: 'Apsel',
			subtitle: 'Border collie | 7y.',
			description:
				'Apsel przyjmuje DeliGuard od czerwca 2023, zauważyłam pierwsze zmiany po 2 tygodniach. Dodanie DeliGuard do diety Apsel przyczyniło się do poprawy kondycji sierści. Stała się ona wyczuwalnie bardziej miękka. Wyniki krwi natomiast nigdy nie były tak dobre.',
			name: 'Anna Budny'
		},
		{
			image: dog,
			title: 'Tosia',
			subtitle: 'kot europejski | 10y.',
			description:
				'po jakim czasie zauważył poprawę: poprawa pobrania wody - już w drugim dniu podania!; poprawa zapachu z jamy ustnej - ok 5 dnia.poprawa sierści - po około 2 tygodniach. Nasza Tośka miała bardzo nieprzyjemny oddech spowodowany problemami dziąseł. Po włączeniu DeliGuard oddech się poprawił! Co więcej kotka zaczęła częściej pić, a jej sierść zrobiła się miękka i zdecydowanie mniej jej gubi w mieszkaniu.',
			name: 'Denis Stolc'
		},
		{
			image: dog,
			title: 'Barsa',
			subtitle: 'Beagle | 6y.',
			description:
				'Nasza Beaglelka ma skłonności do otyłości, co powoduje jej osłabienie oraz nadmierne wypadnie sierści. Pomimo zmiany karmy na pełnowartościową, problem nie ustawał. Zdecydowaliśmy się więc na dodatkową suplementację preparatem DeliGuard. Nasza Barsa podejmuje wysiłek, mniej się męczy podczas spacerów, a jej skóra i sierść są w lepszej kondycji - zmniejszyło się wypadanie sierści, stała się bardziej miękka i zyskała więcej blasku. Dziękujemy wraz z Naszą Barsą zwaną Baśką i polecamy produkt DeliGuard!',
			name: 'Artur Akwarski '
		},
		{
			image: dog,
			title: 'Oreo',
			subtitle: 'krótkowłosego Europejskiego | 8y.',
			description:
				'Oreo ma 8 lat, zaczął pobierać DG w lipcu 2023 Po 8-9 dniach stosowania  zauważyłem 2 rzeczy. Po-pierwsze, po pobraniu DG jego sierść stała się gładsza i bardziej błyszcząca (osoby które przez dłuższy czas nie widziały Oreo od razu zauważyły różnicę). Po-drugie, zaczął lepiej jeść. Po 2 tygodniach stosowania zauważyłem drobną zmianę w wadze. Było widać że Oreo więcej jadł. Jeśli chodzi o pobieranie samego DG nie było ono regularne. Ze względu na jego wybredny charakter Oreo miewał dni gdzie nie pił wody z miski. Bywały również momenty kiedy pił DG przez ponad minutę bez przerwy. Jeśli chodzi o dawkowanie to nie miałem najmniejszego problemu z podawaniem DG kotu.',
			name: 'Mikołaj Pastuszak'
		},
		{
			image: dog,
			title: 'Daisy',
			subtitle: 'Beagle | 13y.',
			description:
				'Daisy ma 11 lat, w czerwcu 2022 zaczęliśmy z żoną podawać jej DeliGuard do wody, pierwsze efekty w zmianie jej sierści zauważyliśmy po około 2 tygodniach. Po miesiącu stosowania jej apetyt wzrósł. Jest to pies rasy beagle i w jej przypadku nie było to pożądane. Po konsultacji z żywieniowcem zmniejszyliśmy dawkowanie DeliGuard, apetyt wrócił do stanu z przed podawania DeliGuardu a efekt lśniącej sierści się utrzymał',
			name: 'Andrzej Matecki'
		}
	];
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);
	const ref2 = useRef(null);
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
		const element2 = ref2.current;
		const t3 = gsap.timeline({ paused: true });
		t3.from(element2.querySelector('.dog-image'), {
			opacity: 0,
			x: 30,
			duration: 0.4,
			delay: 0.5,
			ease: 'power2.out'
		});
		t3.from(element2.querySelector('.idea-header'), {
			opacity: 0,
			x: 30,
			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t3.from(element2.querySelector('.idea-subheader'), {
			opacity: 0,
			x: -30,
			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t3.from(element2.querySelector('.idea-content'), {
			opacity: 0,
			x: 30,
			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t3.from(element2.querySelector('.solution-image'), {
			opacity: 0,
			x: 30,
			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t3.from(element2.querySelector('.solution-header'), {
			opacity: 0,
			x: 30,
			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t3.from(element2.querySelector('.solution-subheader'), {
			opacity: 0,
			x: -30,
			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t3.from(element2.querySelector('.solution-content'), {
			opacity: 0,
			x: 30,
			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t3.from(element2.querySelector('.solution-button'), {
			scale: 0,

			duration: 0.35,
			delay: 0.3,
			ease: 'power2.out'
		});

		ScrollTrigger.create({
			trigger: element2.querySelector('.idea'),
			onEnter: () => {
				// Play the timeline when the section is visible
				t3.play();
			},
			onLeaveBack: () => {
				// Reverse the timeline when the section is not visible anymore
				t3.reverse();
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
					<HeaderWrapper ref={ref2} className='hero'>
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
			<IdeaSection ref={ref2}>
				<IdeaWrapper className='idea'>
					<Row>
						<Col
							className='d-none dog-image d-md-flex align-items-center'
							xs='12'
							md='6'>
							<ImageDogProblem src={dogProblem2} alt='' />
						</Col>
						<Col xs='12' md='5'>
							<h2 className='idea-header'>
								Problem <TitleIcon src={bell} alt='' />
							</h2>
							<ImageDogProblem
								className='d-md-none'
								src={dogProblem2}
								alt=''
							/>
							<span className='text-end text-md-start'>
								Czy wiesz, że...
							</span>
							<h3 className='idea-subheader'>
								Zdrowe jelita są kluczem do ogólnego zdrowia
								Twojego zwierzaka?
							</h3>
							<p className='idea-content'>
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
							<IdeaTitleSolution className='solution-header'>
								Rozwiązanie <TitleIcon src={bulb} alt='' />
							</IdeaTitleSolution>
							<IdeaWrapperInner>
								<div>
									<IdeaHeaderSolution className='solution-subheader'>
										DeliGuard to innowacyjne podejście do
										żywienia Twojego pupila.
									</IdeaHeaderSolution>
									<IdeaParagraph className='solution-content'>
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
								<Link
									to='/o-produkcie'
									className='solution-button'>
									Przeczytaj o produkcie
								</Link>
								{/* <p>
									DeliGuard to efekt badań naszych ekspertów i
									tą wiedzą chcemy się z Tobą podzielić.
								</p>
								<h4>
									Zamów teraz i otrzymaj darmowego e-book o
									zdrowym żywieniu twojego pupila.
								</h4>
								<a href=''>Pobierz e-book</a> */}
							</LearnMoreWrapper>
						</Col>
						<Col className='d-none d-md-block' xs='12' md='6'>
							<IdeaBottleImage
								className='solution-image'
								src={bottleDesktop}
								alt=''
							/>
						</Col>
					</Row>
				</IdeaWrapper>
				<LearnMoreWrapper className='d-lg-none'>
					<h3>Dowiedz się więcej o DeliGuard i postbiotykach</h3>
					<Link>Przeczytaj o produkcie</Link>
					{/* <p>
						DeliGuard to efekt badań naszych ekspertów i tą wiedzą
						chcemy się z Tobą podzielić.
					</p>
					<h4>
						Zamów teraz i otrzymaj darmowego e-book o zdrowym
						żywieniu twojego pupila.
					</h4>
					<a href=''>Pobierz e-book</a> */}
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
						<Link to='/nasze-badania'>Nasze badania</Link>
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
								src={effectImagee}
								alt=''
							/>
							<EffectImage
								className='d-xl-none'
								src={effectImagee}
								alt=''
							/>
						</Col>
						<Col md='9'>
							<EffectItemsWrapper ref={ref}>
								<Row className='first'>
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
											<span>
												{slides[currentSlide].name}
											</span>
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
										Czym różnią się postbiotyki od pro- i
										prebiotyków?
									</Accordion.Header>
									<Accordion.Body>
										Prebiotyki to składniki odżywcze dla
										bakterii jelitowych np. błonnik,
										oligosacharydy, inulina, które działają
										w jelitach i odżywiają gromadzące się
										tam bakterie.Probiotyki to
										wyselekcjonowane bakterie kwasu
										mlekowego tj. Lactobacillus czy
										Bifidobacterium, które mają pozytywny
										wpływ na układ pokarmowy.Postbiotyki to
										substancje wytwarzane przez bakterie
										probiotyczne, które pozytywnie modulują
										mikrobiom jelitowy.Probiotyki wymagają
										odpowiednich warunków do namnażania i
										wzrostu. Niestety, wiele czynników,
										takich jak dieta, antybiotyki, choroby
										czy pasożyty, może zmniejszać
										skuteczność rozwoju probiotyków i
										produkcji pozytywnych substancji. W
										przypadku stosowania postbiotyków
										dostarczane są gotowe substancje, które
										bezpośrednio wspierają rozwój bakterii
										probiotycznych lub naturalnego
										mikrobiomu jelitowego (w profilaktyce).
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='1'>
									<Accordion.Header>
										Czy DeliGuard można podawać zamiast
										antybiotyków?
									</Accordion.Header>
									<Accordion.Body>
										Postbiotyki pozytywnie wpływają na
										poprawę odporności, funkcjonowanie
										układu pokarmowego i zmniejszenie stanu
										zapalnego. Jednak przy silnej infekcji
										bakteryjnej postbiotyki nie są
										wystarczające. Nie zalecamy podawania
										postbiotyków zamiast antybiotyków, ale
										jako dodatkową pomoc i wsparcie w
										procesie leczenia.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='2'>
									<Accordion.Header>
										Jak DeliGuard wpływa na regulację pracy
										przewodu pokarmowego?
									</Accordion.Header>
									<Accordion.Body>
										Wspólnym działaniem wszystkich biotyków
										jest przede wszystkim odbudowa
										mikrobiomu jelitowego i regeneracja
										bariery jelitowej, której zadaniem jest
										kontrola dopływu składników odżywczych,
										witamin, minerałów i innych substancji
										niezbędnych do prawidłowego metabolizmu.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='3'>
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
								<Accordion.Item eventKey='4'>
									<Accordion.Header>
										Jak to smakuje?
									</Accordion.Header>
									<Accordion.Body>
										Czy zwierzę chętnie go zje?DeliGuard ma
										lekko słony smak. Indywidualne
										preferencje mogą uniemożliwić niektórym
										zwierzętom picie wody z DeliGuard. W
										takim przypadku można dodać DeliGuard do
										suchej lub mokrej karmy.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey='5'>
									<Accordion.Header>
										Czy DeliGuard może być podawany podczas
										choroby jako forma wzmocnienia
										osłabionego zwierzęcia?
									</Accordion.Header>
									<Accordion.Body>
										Czy DeliGuard może być podawany
										profilaktycznie?Zdecydowanie tak!
										DeliGuard to postbiotyk - preparat
										inaktywowanych mikroorganizmów i ich
										składników (peptydów, witamin,
										krótkołańcuchowych kwasów tłuszczowych,
										enzymów, lipopolisacharydów,
										egzopolisacharydów i nukleotydów), który
										zapewnia korzyści zdrowotne dla
										gospodarza. Poprawiając integralność
										jelit, DeliGuard zmniejsza stan zapalny
										i poprawia funkcjonowanie układu
										odpornościowego.
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
							<Link to='/rozwiazanie-dla-biznesu'>
								{' '}
								<img src={buttonIcon} alt='' />{' '}
								<span>Dowiedz się więcej</span>
							</Link>
						</Col>
						<Col lg='5'>
							<SolutionImage
								className='d-lg-none'
								src={solutionMobile}
								alt=''
							/>
							<SolutionImage
								className=' d-none d-lg-block'
								src={solutionn}
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
			{/* <KnowledgeSection>
				<KnowledgeWrapper>
					<h2>Baza wiedzy</h2>
					<Swiper
						spaceBetween={10}
						keyboard={{
							enabled: true
						}}
						loop
						navigation={{
							prevEl: '.prevv',
							nextEl: '.nextt'
						}}
						breakpoints={{
							768: {
								slidesPerView: 3
							}
						}}
						onBeforeInit={(swiper) => {
							swiperKnowledgeRef.current = swiper;
						}}
						centeredSlides={true}
						modules={[Navigation, Pagination, Keyboard]}
						pagination={{ clickable: true }}
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
						<SwiperSlide>
							<iframe src='https://www.youtube.com/embed/VAH-ixdFWFs?si=RuSf6gPUX7LgTVYV'></iframe>
						</SwiperSlide>
						<ButtonSliderWrapper>
							<button
								className='swiper-button-prev prevv'
								onClick={() =>
									swiperKnowledgeRef.current?.slidePrev()
								}>
								<img src={arrowPrev} alt='' />
							</button>
							<button
								className='swiper-button-next nextt'
								onClick={() =>
									swiperKnowledgeRef.current?.slideNext()
								}>
								<img src={arrowNext} alt='' />
							</button>
						</ButtonSliderWrapper>
					</Swiper>
				</KnowledgeWrapper>
			</KnowledgeSection> */}
		</Layout>
	);
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
