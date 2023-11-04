import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { gsap } from 'gsap';
import { graphql } from 'gatsby'; 
// import { ButtonSliderWrapper } from '../assets/styles/pages/Index.styles';
import Banner from '../components/Banner';
import { Helmet } from "react-helmet";

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
} from '../assets/styles/pages/Index.styles';

import left from '../assets/images/left.svg';
import right from '../assets/images/right.svg';
import { useIntl } from "gatsby-plugin-intl";
import bell from '../assets/images/bell.svg';
import bulb from '../assets/images/bulb.svg';
import eye from '../assets/images/eye.svg';
import drop from '../assets/images/drop.svg';
import arrowPrev from '../assets/images/arrowPrev.svg';
import inst from '../assets/images/inst.pdf';
import arrowNext from '../assets/images/arrowNext.svg';
import bag from '../assets/images/bag.svg';
import plus from '../assets/images/plus.svg';
import ig from '../assets/images/insta.svg';
import fb from '../assets/images/fb.svg';
import buttonIcon from '../assets/images/buttonIcon.svg';
import item5 from '../assets/images/item5.svg';
import item6 from '../assets/images/item6.svg';
import item7 from '../assets/images/item7.svg';
import item8 from '../assets/images/item8.svg';
import item9 from '../assets/images/item9.svg';
import item10 from '../assets/images/item10.svg';
import item11 from '../assets/images/item11.svg';
import item14 from '../assets/images/item14.svg';
import item15 from '../assets/images/iteem15.svg';

import mail from '../assets/images/mail.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slider from '../components/Slider'; 
import Modal from '../components/Modal';

const IndexPage = ({data}) => {
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
	



	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);
	const ref5 = useRef(null);
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
			
				t2.play();
			},
			onLeaveBack: () => {
				
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
			
				t3.play();
			},
			onLeaveBack: () => {
				
				t3.reverse();
			}
		});
		const element3 = ref3.current;
		const t4 = gsap.timeline({ paused: true });
		t4.from(element3.querySelector('.accordion0'), {
			opacity: 0,

			duration: 0.3,
			delay: 1,
			ease: 'power2.out'
		});
		t4.from(element3.querySelector('.accordion1'), {
			opacity: 0,

			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t4.from(element3.querySelector('.accordion2'), {
			opacity: 0,
			x: 30,
			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t4.from(element3.querySelector('.accordion3'), {
			opacity: 0,

			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t4.from(element3.querySelector('.accordion4'), {
			opacity: 0,
			x: 30,
			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t4.from(element3.querySelector('.accordion5'), {
			opacity: 0,

			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		t4.from(element3.querySelector('.accordion6'), {
			opacity: 0,

			duration: 0.3,
			delay: 0.1,
			ease: 'power2.out'
		});
		
		t4.from(element3.querySelector('.image-solution'), {
			opacity: 0,
scale:0,
			duration: 0.4,
			delay: 0.2,
			ease: 'power2.out'
		});

		ScrollTrigger.create({
			trigger: element3.querySelector('.accordion1'),
			onEnter: () => {
				
				t4.play();
			},
			onLeaveBack: () => {
			
				t4.reverse();
			}
		});

		const element4 = ref4.current;
		const t5 = gsap.timeline({ paused: true });
		t5.from(element4.querySelector('.image-solution'), {
			opacity: 0,
                scale:0,
			duration: 0.3,
			ease: 'power2.out'
		});
		
		

		ScrollTrigger.create({
			trigger: element4.querySelector('.image-solution'),
			onEnter: () => {
				
				t5.play();
			},
			onLeaveBack: () => {
				
				t5.reverse();
			}
		});
		const element5 = ref5.current;
		const t6 = gsap.timeline({ paused: true });
		t6.from(element5.querySelector('.image-contact'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			ease: 'power2.out'
		});
		
		

		ScrollTrigger.create({
			trigger: element5.querySelector('.image-contact'),
			onEnter: () => {
				
				t6.play();
			},
			onLeaveBack: () => {
				// Reverse the timeline when the section is not visible anymore
				t6.reverse();
			}
		});
	}, []);
	const advertisingBanner = data.allContentfulHero.nodes[0].advertisingBanner.url;
	// // Check if advertisingBanner exists before rendering the banner
	const shouldDisplayBanner = !!advertisingBanner;
	const imageUrl = shouldDisplayBanner ? advertisingBanner : null;


	const intl = useIntl();
  const userLanguage = intl.locale === 'pl' ? 'pl' : 'en' ;
	
const [language, setLanguage] = useState(userLanguage);

// Define the contentful data for different queries based on user's language
const contentfulData =
	userLanguage === 'pl'
		? data.allContentfulHero.nodes.find((node) => node.node_locale === 'en-US')
		: data.allContentfulHero.nodes.find((node) => node.node_locale === 'pl');

// Define the contentful data for other queries
const contentfulProblemData =
	userLanguage === 'pl'
		? data.allContentfulProblem.nodes.find((node) => node.node_locale === 'en-US')
		: data.allContentfulProblem.nodes.find((node) => node.node_locale === 'pl');

const contentfulRozwiazanieData =
	userLanguage === 'pl'
		? data.allContentfulRozwiazanie.nodes.find((node) => node.node_locale === 'en-US')
		: data.allContentfulRozwiazanie.nodes.find((node) => node.node_locale === 'pl');

const contentfulBadaniaData =
	userLanguage === 'pl'
		? data.allContentfulBadania.nodes.find((node) => node.node_locale === 'en-US')
		: data.allContentfulBadania.nodes.find((node) => node.node_locale === 'pl');

		const contentfulZastosujDeliguardData =
	userLanguage === 'pl'
		? data.allContentfulZastosujDeliguard.nodes.find((node) => node.node_locale === 'en-US')
		: data.allContentfulZastosujDeliguard.nodes.find((node) => node.node_locale === 'pl');

		const contentfulDawkowanieData =
		userLanguage === 'pl'
			? data.allContentfulDawkowanie.nodes.find((node) => node.node_locale === 'en-US')
			: data.allContentfulDawkowanie.nodes.find((node) => node.node_locale === 'pl');

			const contentfulReviewTitleData =
		userLanguage === 'pl'
			? data.allContentfulReviewTitle.nodes.find((node) => node.node_locale === 'en-US')
			: data.allContentfulReviewTitle.nodes.find((node) => node.node_locale === 'pl');

			const contentfulFaqTitleData =
			userLanguage === 'pl'
				? data.allContentfulFaqTitle.nodes.find((node) => node.node_locale === 'en-US')
				: data.allContentfulFaqTitle.nodes.find((node) => node.node_locale === 'pl');

				const contentfulRozwiazaniedlabiznesuData =
				userLanguage === 'pl'
					? data.allContentfulRozwiazaniedlabiznesu.nodes.find((node) => node.node_locale === 'en-US')
					: data.allContentfulRozwiazaniedlabiznesu.nodes.find((node) => node.node_locale === 'pl');

					const contentfulKontaktIStopkaData =
					userLanguage === 'pl'
						? data.allContentfulKontaktIStopka.nodes.find((node) => node.node_locale === 'en-US')
						: data.allContentfulKontaktIStopka.nodes.find((node) => node.node_locale === 'pl');
	
					
						const slides = data.allContentfulOpinie.nodes.filter(el => el.node_locale === (userLanguage === 'pl' ? 'en-US' : 'pl')).map(el => ({
							image: el.image.url,
							title: el.name,
							subtitle: el.breed,
							description: el.content.content,
							name: el.owner,
							 }));
							 const accordionFaq = data.allContentfulFaq.nodes
							 .filter(el => el.node_locale === (userLanguage === 'pl' ? 'en-US' : 'pl'))
							 .map(el => ({
								 question: el.question,
								 answear: el.answear.answear,
								
							 }
							 
							 ));

	return (
	
		<Layout>
		
      <Helmet>
        <title>{contentfulData.seoTitle}</title>
        <meta
          name="description"
          content={contentfulData.seoMetaDescription.seoMetaDescription}
        />
      </Helmet>
  
 {shouldDisplayBanner && <Banner imageUrl={imageUrl} />}
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
						<h1>{contentfulData.title}</h1>
						<p>{contentfulData.subtitle}</p>
						<p>{contentfulData.subtitlebottom}</p>
					</HeaderWrapper> 
					<HeroImage>
						<img className='d-lg-none' src={contentfulData.heroImageMobile.url} alt='' />
						<img
							className='d-none d-lg-block'
							src={contentfulData.image.url}
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
							<ImageDogProblem src={contentfulProblemData.image.url} alt='' />
						</Col>
						<Col xs='12' md='5'>
							<h2 className='idea-header'>
							{contentfulProblemData.title} <TitleIcon src={bell} alt='' />
							</h2>
							<ImageDogProblem
								className='d-md-none'
								src={contentfulProblemData.image.url}
								alt=''
							/>
							<span className='text-end text-md-start'>
							{contentfulProblemData.smallSubtitle}
							</span>
							<h3 className='idea-subheader'>
							{contentfulProblemData.subtitle}
							</h3>
							<p className='idea-content'>
							{contentfulProblemData.contentFirst} 
								<br />
								<br />{contentfulProblemData.contentSecond} 
							</p>
						</Col>
					</Row>
				</IdeaWrapper>
				<IdeaWrapper>
					<Row>
						<Col xs='12' md='6'>
							<IdeaTitleSolution className='solution-header'>
							{contentfulRozwiazanieData.title} <TitleIcon src={bulb} alt='' />
							</IdeaTitleSolution>
							<IdeaWrapperInner>
								<div className="text-container">
									<IdeaHeaderSolution className='solution-subheader'>
									{contentfulRozwiazanieData.subtitle}
									</IdeaHeaderSolution>
									<IdeaParagraph className='solution-content'>
									{contentfulRozwiazanieData.content}
									</IdeaParagraph>
								</div>
								<div className="image-container">
								<IdeaBottleImage
									className='d-md-none'
									src={contentfulRozwiazanieData.imageMobile.url} 
									alt=''
								/>
								</div>
								
							</IdeaWrapperInner>
							<LearnMoreWrapper className='d-none d-lg-block'>
								<h3>
								{contentfulRozwiazanieData.buttonTitle}
								</h3>
								<Link
									to='/o-produkcie'
									className='solution-button'>
								{contentfulRozwiazanieData.button}
								</Link>
								{/* <p>
									DeliGuard to efekt badań naszych ekspertów i
									tą wiedzą chcemy się z Tobą podzielić.
								</p>
								<h4>
									Zamów teraz i otrzymaj darmowego e-book o
									zdrowym żywieniu twojego pupila.
								</h4>
								<a href={data.allContentfulRozwiazanie.nodes[0].ebook.url}>Pobierz e-book</a> */}
							</LearnMoreWrapper>
						</Col>
						<Col className='d-none d-md-flex' xs='12' md='6'>
							<IdeaBottleImage
								className='solution-image'
								src={contentfulRozwiazanieData.image.url}
								alt=''
							/>
						</Col>
					</Row>
				</IdeaWrapper>
				<LearnMoreWrapper className='d-lg-none'>
					<h3>{contentfulRozwiazanieData.buttonTitle}</h3>
					<Link>{contentfulRozwiazanieData.button}</Link>
				
					{/* <p>
						DeliGuard to efekt badań naszych ekspertów i tą wiedzą
						chcemy się z Tobą podzielić.
					</p>
					<h4>
						Zamów teraz i otrzymaj darmowego e-book o zdrowym
						żywieniu twojego pupila.
					</h4>
					<a href={data.allContentfulRozwiazanie.nodes[0].ebook.url}>Pobierz e-book</a> */}
				</LearnMoreWrapper>
			</IdeaSection>
			<TestSection>
				<TestWrapper>
					{/* <ImageTest src={pipeta} alt='' /> */}
					<h2>{contentfulBadaniaData.title} </h2>
					<TestContainer>
						<p>
						{contentfulBadaniaData.subtitle}
						</p>
						<h3>Sprawdź rezultaty badań:</h3>
						<Link to='/nasze-badania'>{contentfulBadaniaData.button}</Link>
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
									<h2>{contentfulZastosujDeliguardData.title}</h2>
								
									<p>{contentfulZastosujDeliguardData.subtitle}</p>
								</div>
							</EffectHeader>
						</Col>
						<Col md='3'>
							<EffectImage
								className='d-none d-xl-block'
								src={contentfulZastosujDeliguardData.image.url}
								alt=''
							/>
							<EffectImage
								className='d-xl-none'
								src={contentfulZastosujDeliguardData.image.url}
								alt=''
							/>
						</Col>
						<Col md='9'>
							<EffectItemsWrapper ref={ref}>
								<Row className='first'>
									<Col>
										<EffectItemReverse>
											<p className='first-paragraph'>
											{contentfulZastosujDeliguardData.firstEffectItem}
											</p>
											<img
												className='first-icon'
												src={contentfulZastosujDeliguardData.firstEffectItemImage.url}
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
												src={contentfulZastosujDeliguardData.secondEffectItemImage.url}
												alt=''
											/>
											<p className='second-paragraph'>
											{contentfulZastosujDeliguardData.secondEffectItem}
											</p>
										</EffectItem>
									</Col>
									<Col md='6'>
										<EffectItemReverse>
											<p className='third-paragraph'>
											{contentfulZastosujDeliguardData.thirdEffectItem}
											</p>
											<img
												className='third-icon'
												src={contentfulZastosujDeliguardData.thirdEffectItemImage.url}
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
					<h2>{contentfulDawkowanieData.title}</h2>
					<DosageSubheader>
					{contentfulDawkowanieData.subtitle}
					</DosageSubheader>
					<Row>
  <Col lg='6'>
    <div className='text-container'>
      <h3>{contentfulDawkowanieData.catTitile}</h3>
      <div className='transition-container'>
        <div
          className={`step-content ${
            currentStep === 1 ? 'active' : ''
          }`}>
			<div className="image-wrapper">
          <img src={contentfulDawkowanieData.smallCatImage.url} alt='Step 1' />
          </div>
		<div className='step-text'>
            <h4>{contentfulDawkowanieData.smallCatWeight}</h4>
            <p>
              <img src={drop} alt='' />
              <span>
                {contentfulDawkowanieData.smallCatDosage}
              </span>
            </p>
          </div>
        </div>
        <div
          className={`step-content ${
            currentStep === 2 ? 'active' : ''
          }`}>
			<div className="image-wrapper">
          <img src={contentfulDawkowanieData.mediumCatImage.url} alt='Step 2' />
          </div>
		<div className='step-text'>
            <h4>{contentfulDawkowanieData.mediumCatWeight}</h4>
            <p>
              <img src={drop} alt='' />
              <span>
                {contentfulDawkowanieData.mediumCatDosage}
              </span>
            </p>
          </div>
        </div>
        <div
          className={`step-content ${
            currentStep === 3 ? 'active' : ''
          }`}>
			<div className="image-wrapper">
          <img src={contentfulDawkowanieData.bigCatImage.url} alt='Step 3' />
		</div>
	     <div className='step-text'>
            <h4>{contentfulDawkowanieData.bigCatWeight}</h4>
            <p>
              <img src={drop} alt='' />
              <span>
                {contentfulDawkowanieData.bigCatDosage}
              </span>
            </p>
          </div>
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
    <div className='text-container'>
      <h3>{contentfulDawkowanieData.dogTitle}</h3>
      <div className='transition-container-dog'>
        <div
          className={`step-content ${
            currentStepDog === 1 ? 'active' : ''
          }`}>
			<div className="image-wrapper">
          <img src={contentfulDawkowanieData.smallDogImage.url} alt='Step 1' />
		</div>
          <div className='step-text'>
            <h4>{contentfulDawkowanieData.smallDogWeight}</h4>
            <p>
              <img src={drop} alt='' />
              <span>
                {contentfulDawkowanieData.smallDogDosage}
              </span>
            </p>
          </div>
        </div>
        <div
          className={`step-content ${
            currentStepDog === 2 ? 'active' : ''
          }`}>
			<div className="image-wrapper">
          <img src={contentfulDawkowanieData.mediumDogImage.url} alt='Step 2' />
		</div>
          <div className='step-text'>
            <h4>{contentfulDawkowanieData.mediumDogWeight}</h4>
            <p>
              <img src={drop} alt='' />
              <span>
                {contentfulDawkowanieData.mediumDogDosage}
              </span>
            </p>
          </div>
        </div>
        <div
          className={`step-content ${
            currentStepDog === 3 ? 'active' : ''
          }`}>
			<div className="image-wrapper">
          <img src={contentfulDawkowanieData.bigDogImage.url} alt='Step 3' />
		</div>
          <div className='step-text'>
            <h4>{contentfulDawkowanieData.bigDogWeight}</h4>
            <p>
              <img src={drop} alt='' />
              <span>
                {contentfulDawkowanieData.bigDogDosage}
              </span>
            </p>
          </div>
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
{/* href={data.allContentfulDawkowanie.nodes[0].buttonFile.url} */}
					<InstructionButton href={inst} target="blank">{contentfulDawkowanieData.button}</InstructionButton>
				</DosageWrapper>
			</DosageSection>
			<ReviewSection>
				<ReviewWrapper>
					<h2>
						{contentfulReviewTitleData.title}
					</h2>
					<div>
						<Swiper
							spaceBetween={10}
							navigation
							className='mobile-slider'
							keyboard={{
								enabled: true
							}}
							modules={[Navigation, Pagination, Keyboard, Autoplay]}
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
										<ImageDog className="image" 
											src={slide.image}
											alt={`Slide ${index + 1}`}
										/>
										<SlideHeader>
											{slide.title}
										</SlideHeader>
										<SlideSubheader>
											{slide.subtitle}
										</SlideSubheader>
										<SlideDescription>
											{slide.description}
											<span>
												{slide.name}
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
					<h2>{contentfulFaqTitleData.title}</h2>
				
					<Row>
						<Col>
							<Accordion ref={ref3} defaultActiveKey='0'>
								{accordionFaq.map((element, index)=> (
									<Accordion.Item  key={index} className={'accordion' + index } eventKey={index}>
									<Accordion.Header>
									{element.question}
									</Accordion.Header>
									<Accordion.Body>
									{element.answear}
									</Accordion.Body>
								</Accordion.Item>
								))
								}
								
							</Accordion>
						</Col>
						<Col xs='12'>
							<div className='faq-button-container'>
								<a href='https://allegro.pl/oferta/suplement-dla-psa-i-kota-na-trawienie-deliguard-14236919045'>
									<img src={bag} alt='' />
									<span>{contentfulFaqTitleData.button}</span>
								</a>
								<p className='paragraph-faq'>
								{contentfulFaqTitleData.textNearButton}
								</p>
							</div>
						</Col>
					</Row>
				</FaqWrapper>
			</FaqSection>
			<SolutionsSection>
				<SolutionsWrapper>
					<h2>{contentfulRozwiazaniedlabiznesuData.title}</h2>
					<Row>
						<Col lg='7'>
							<h3>
							{contentfulRozwiazaniedlabiznesuData.subtitle}
							</h3>
							<ul>
								<li>
									<h4>{contentfulRozwiazaniedlabiznesuData.firstItemTitle}</h4>
									<p>
										<Icon src={plus} alt='' />{' '}
										<span>
										{contentfulRozwiazaniedlabiznesuData.firstItemContent}
										</span>
									</p>
								</li>
								<li>
									<h4>{contentfulRozwiazaniedlabiznesuData.secondItemTitle}</h4>
									<p>
										<Icon src={plus} alt='' />{' '}
										<span>
										{contentfulRozwiazaniedlabiznesuData.secondItemContent}
										</span>
									</p>
								</li>
								<li>
									<h4>{contentfulRozwiazaniedlabiznesuData.thirdItemTitle}</h4>
									<p>
										<Icon src={plus} alt='' />{' '}
										<span>
										{contentfulRozwiazaniedlabiznesuData.thirdItemContent}
										</span>
									</p>
								</li>
							</ul>
							<Link to='/rozwiazanie-dla-biznesu'>
								{' '}
								<img src={buttonIcon} alt='' />{' '}
								<span>{contentfulRozwiazaniedlabiznesuData.button}</span>
							</Link>
						</Col>
						<Col lg='5' ref={ref4}>
							<SolutionImage
								className='d-lg-none'
								src={contentfulRozwiazaniedlabiznesuData.imageMobile.url}
								alt=''
							/>
							<SolutionImage
								className=' d-none d-lg-block image-solution'
								src={contentfulRozwiazaniedlabiznesuData.image.url}
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
								<h2>{contentfulKontaktIStopkaData.title}</h2>
								<h3>
									W przypadku pytań prosimy o wiadomość na
									adres
								</h3>
								<MailLink href='mailto:support@deliguard.net'>
									<img src={mail} alt='' />
									<span>{contentfulKontaktIStopkaData.mail}</span>
								</MailLink>
								<p>
								{contentfulKontaktIStopkaData.content}
								</p>
								<Row>
									<Col xs='12' lg='6'>
										<SocialLink href={contentfulKontaktIStopkaData.igButtonLink}>
											<img src={ig} alt='' />
											<span>{contentfulKontaktIStopkaData.igButtonText}</span>
										</SocialLink>
									</Col>
									<Col xs='12' lg='6'>
										<SocialLink href={contentfulKontaktIStopkaData.fbButtonLink}>
											<img src={fb} alt='' />{' '}
											<span>{contentfulKontaktIStopkaData.fbButtonText}</span>
										</SocialLink>
									</Col>
								</Row>
							</ContactInnerWrapper>
						</Col>
						<Col xs='12' lg='6' ref={ref5}>
							<ContactImg src={contentfulKontaktIStopkaData.image.url} className="image-contact" alt='' />
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


// export const Head = () => <title>Strona Główna</title>;
export const query = graphql`
	
		query MyQuery {
  allContentfulHero {
    nodes {
			node_locale
      title
			advertisingBanner {
        publicUrl
      }
      subtitle
      subtitlebottom
	 seoTitle
      seoMetaDescription {
        seoMetaDescription
      }
      image {
		url
      }
      heroImageMobile {
		url
      }
    }
  }
  allContentfulProblem {
    nodes {
			node_locale
      contentFirst
      contentSecond
     #  smallSubtitle
      subtitle
      title
      image {
		url
      }
    }
  }
  allContentfulRozwiazanie {
    nodes {
			node_locale
      button
      buttonTitle
      content
      subtitle
      title
	  ebook { 
		url
	  }
      image {
		url
      }
      imageMobile {
		url
      }
    }
  }
  
  allContentfulBadania {
    nodes {
			node_locale
      button
      subtitle
      title
    }
  }
  allContentfulZastosujDeliguard {
    nodes {
			node_locale
      title
      subtitle
      image {
		url
      }
      firstEffectItemImage {
		url
      }
      firstEffectItem
      secondEffectItem
      secondEffectItemImage {
		url
      }
      thirdEffectItem
      thirdEffectItemImage {
		url
      }
    }
  }
  allContentfulDawkowanie {
    nodes {
			node_locale
      title
      subtitle
      catTitile
      smallCatImage {
		url
      }
      smallCatWeight
      smallCatDosage
      mediumCatImage {
		url
      }
      mediumCatWeight
      mediumCatDosage
      bigCatImage {
		url
      }
      bigCatWeight
      bigCatDosage
      dogTitle
      smallDogImage {
		url
      }
      smallDogWeight
      smallDogDosage
      mediumDogImage {
		url
      }
      mediumDogWeight
      mediumDogDosage
      bigDogImage {
		url
      }
      bigDogWeight
      bigDogDosage
      button
	 buttonFile {
       
              url
         
      }
    }
  }
  allContentfulReviewTitle {
    nodes {
			node_locale
      title
    }
  }
  allContentfulOpinie {
    nodes {
			node_locale
      image {
		url
      }
      name
      owner
      content {
        content
      }
      breed
    }
  }
  allContentfulFaqTitle {
    nodes {
			node_locale
      title
	 textNearButton
      button
    }
  }
  allContentfulFaq {
    nodes {
			node_locale
      question
      answear {
        answear
      }
    }
  }
  allContentfulRozwiazaniedlabiznesu {
    nodes {
			node_locale
      button
      firstItemContent
      firstItemTitle
      image {
		url
      }
      imageMobile {
		url
      }
      secondItemContent
      secondItemTitle
      thirdItemContent
      thirdItemTitle
      subtitle
      title
    }
  }
  allContentfulKontaktIStopka { 
    nodes {
			node_locale
      content
      fbButtonLink
      fbButtonText
      igButtonLink
      igButtonText
      title
      mail
      image {
		url
      }
    }
  }


#   allContentfulTest {
#     nodes {
#       advertisingBanner {
#         file {
#           url
#         }
#       }
#     }
#   }
}

`;
export default IndexPage; 
