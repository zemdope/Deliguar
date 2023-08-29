import React, { useState } from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import circle from '../assets/images/circle.png';
import circle2 from '../assets/images/circle2.png';
import plus2 from '../assets/images/plus2.svg';
import actionImage from '../assets/images/actionImage.svg';
import actionImage2 from '../assets/images/actionImage2.svg';
import actionImage3 from '../assets/images/actionImage3.svg';
import buttonIcon from '../assets/images/buttonIcon.png';
import solutionDesktop from '../assets/images/solutionImageDesktop.png';
import solution from '../assets/images/solutionImage.png';
import solutionMobile from '../assets/images/solutionMobile.svg';
import solutionn from '../assets/images/solutionn.svg';
import plus from '../assets/images/plus.svg';
import bag from '../assets/images/bag.svg';
import {
	ImageCircle,
	HeroSection,
	HeroWrapper,
	Subheader,
	ParagraphBottom,
	ParagraphCenter,
	ParagraphTop,
	ActionSection,
	ActionWrapper,
	ShoppingSection,
	ShoppingWrapper
} from '../assets/styles/pages/Nasze-badania.styles';
import { Link } from 'gatsby';
import {
	Icon,
	SolutionImage,
	SolutionsWrapper,
	SolutionsSection
} from '../assets/styles/pages/Index.styles';

const OurTests = () => {
	return (
		<Layout>
			<HeroSection>
				<HeroWrapper>
					<Row className='mobile-hero'>
						<Col xs='12' lg='7'>
							<Subheader>Zobacz wyniki Naszych badań</Subheader>
							<h1>Wpływ DeliGuard na ogólną poprawę zdrowia</h1>
						</Col>
						<Col
							xs='12'
							lg='7'
							className='pe-0 d-lg-flex align-items-end percent desktop-content'>
							<div>
								<ImageCircle
									className='d-lg-none'
									src={circle}
									alt=''
								/>
								<ParagraphTop>
									<span>97%</span>
									<span>
										użytkowników zauważyło wyraźną poprawę
										zdrowia zwierząt{' '}
										<img src={plus2} alt='' />
									</span>
								</ParagraphTop>
								<ParagraphCenter>
									<span>3%</span>
									<span>
										{' '}
										użytkowników nie zgłosiło żadnych
										znaczących zmian w stanie zdrowia
										zwierzęcia
									</span>
								</ParagraphCenter>
								<ParagraphBottom>
									<img src={plus2} alt='' />{' '}
									<span>
										poprawa kondycji zdrowotnej pupila, w
										tym lepsze trawienie i wypróżnienia,
										jakości sierści i redukcję kamienia
										nazębnego.
									</span>
								</ParagraphBottom>
							</div>
						</Col>
						<Col
							className='d-none d-lg-block desktop-content'
							lg='5'>
							<ImageCircle src={circle2} alt='' />
						</Col>
					</Row>
					<Row>
						<Col></Col>
					</Row>
				</HeroWrapper>
			</HeroSection>
			<ActionSection>
				<ActionWrapper>
					<Row className='d-md-flex flex-row-reverse first-action-container'>
						<Col
							xs='12'
							md='7'
							lg='8'
							className='first-action-content'>
							<h2>Działanie na układ immunologiczny</h2>
							<p>
								DeliGuard wspomaga działanie wątroby, co w
								efekcie powoduje spadek produkcji białka CRP -
								wskaźnika stanu zapalnego organizmu, który
								wzrasta np. na skutek choroby lub w wyniku
								codziennych, drobnych urazów tkanek
							</p>
						</Col>
						<Col xs='12' md='5' lg='4'>
							<img src={actionImage} alt='' />
						</Col>
					</Row>
					<Row className='px-0 second-action-container'>
						<Col xs='12' className='px-0'>
							<h3>Poprawa aktywności enzymów wątrobowych</h3>
							<p>
								DeliGuard wspiera działanie wątroby, obniżając
								poziomy enzymów wątrobowych AST i ALT. Poprawa
								tych parametrów korzystnie wpływa na odżywienie
								całego organizmu, jak również kondycję
								zwierzęcia i jakość sierści.
							</p>
						</Col>
						<Col xs='12' md='6'>
							<img
								className='action-image-left'
								src={actionImage2}
								alt=''
							/>
						</Col>
						<Col xs='12' md='6'>
							<img
								className='action-image-right bottom'
								src={actionImage3}
								alt=''
							/>
						</Col>
					</Row>
				</ActionWrapper>
			</ActionSection>
			<ShoppingSection>
				<ShoppingWrapper>
					<a href=''>
						<img src={bag} alt='' />
						<span>Przekonaj się sam</span>
					</a>

					<p> i zobacz że DeliGuard działa</p>
				</ShoppingWrapper>
			</ShoppingSection>
			<SolutionsSection>
				<SolutionsWrapper className='solutions-wrapper'>
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
							<Link className='btn-about'>
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
								className=' d-none d-lg-block img-about'
								src={solutionn}
								alt=''
							/>
						</Col>
					</Row>
				</SolutionsWrapper>
			</SolutionsSection>
		</Layout>
	);
};

export default OurTests;
