import React, { useState } from 'react';
import Layout from '../components/Layout';
import product from '../assets/images/product.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
	AboutProductHero,
	ImageBottle,
	Paragraph,
	ParagraphTop,
	EffectSection,
	EffectWrapper,
	SerumImage,
	Wrapper,
	WrapperReverse,
	TestsSection,
	TestsWrapper,
	Content,
	Subheader,
	ButtonWrapper,
	ImageSection,
	RightItem,
	LeftItem
} from '../assets/styles/pages/o-produkcir.styles';
import bottle from '../assets/images/bottole.png';
import newBottle from '../assets/images/newBottle.svg';
import serum from '../assets/images/serum.png';
import serum2 from '../assets/images/serum2.png';
import effectItem3 from '../assets/images/EffectItem3.svg';
import effectItem2 from '../assets/images/effectItem2.svg';
import effectItem from '../assets/images/effectItem.svg';
import zab from '../assets/images/zab.svg';
import plaster from '../assets/images/plaster.svg';
import bag from '../assets/images/bag.svg';
import testsImage from '../assets/images/testsImage.png';
import solution from '../assets/images/solutionImage.png';
import plus from '../assets/images/plus.svg';
import plus2 from '../assets/images/plus2.svg';
import item16 from '../assets/images/item16.svg';
import item17 from '../assets/images/item17.svg';
import buttonIcon from '../assets/images/buttonIcon.png';
import solutionDesktop from '../assets/images/solutionImageDesktop.png';
import solutionMobile from '../assets/images/solutionMobile.svg';
import solutionn from '../assets/images/solutionn.svg';

import { Link } from 'gatsby';
import {
	Icon,
	SolutionImage,
	SolutionsWrapper,
	SolutionsSection
} from '../assets/styles/pages/Index.styles';

const AboutProduct = () => {
	return (
		<Layout>
			<AboutProductHero>
				<Row className='hero-wrapper d-md-none'>
					<h1>O produkcie</h1>
					<Col>
						<ImageBottle src={newBottle} alt='' />

						<ParagraphTop>
							DeliGuard to postbiotyk <img src={plus2} alt='' />
							<br />
							produkowany przez dobroczynne bakterie Bacillus
							subtilis, który ułatwia neutralizację toksyn i
							stymuluje naturalne procesy obronne organizmu.
						</ParagraphTop>
						<Paragraph>
							<img src={plus2} alt='' />
							Postbiotyk - bioaktywnyprodukt
							zawierającyinaktywowane szczepyprobiotyczne i ich
							metabolity, które podawane w odpowiednich ilościach
							stymulują mikrobiom jelitowy, mają działanie
							immunomodulujące i promują zdrowie i dobre
							samopoczucie organizmu.
						</Paragraph>
					</Col>
				</Row>
				<Row className='d-none d-md-flex'>
					<LeftItem>
						<img src={item16} alt='' />
					</LeftItem>
					<Col md='6'>
						<h1>O produkcie</h1>
						<ParagraphTop>
							DeliGuard to postbiotyk <img src={plus2} alt='' />{' '}
							<br /> produkowany przez dobroczynne bakterie
							Bacillus subtilis, który ułatwia neutralizację
							toksyn i stymuluje naturalne procesy obronne
							organizmu.
						</ParagraphTop>
						<Paragraph>
							<img src={plus2} alt='' />
							Postbiotyk - bioaktywnyprodukt
							zawierającyinaktywowane szczepyprobiotyczne i ich
							metabolity, które podawane w odpowiednich ilościach
							stymulują mikrobiom jelitowy, mają działanie
							immunomodulujące i promują zdrowie i dobre
							samopoczucie organizmu.
						</Paragraph>
					</Col>
					<Col
						md='6'
						className='d-flex d-xl-block align-items-center'>
						<ImageBottle src={newBottle} alt='' />
					</Col>
				</Row>
			</AboutProductHero>
			<EffectSection>
				<EffectWrapper>
					<RightItem>
						<img src={item17} alt='' />
					</RightItem>
					<Row>
						<Col>
							<h2>Zastosuj DeliGuard po 10 dniach</h2>
						</Col>
					</Row>
					<Row className='effect-content-wrapper'>
						<Col md='6' lg='7'>
							<SerumImage
								className='d-none d-lg-block'
								src={serum2}
								alt=''
							/>
							<SerumImage
								className='d-lg-none'
								src={serum}
								alt=''
							/>
						</Col>
						<Col xs='12' md='6' lg='5' className='effect-container'>
							<Row>
								<Col xs='12'>
									<Wrapper>
										<img src={effectItem3} alt='' />

										<p>Lepsze pobraniewody i karmy</p>
									</Wrapper>
								</Col>
								<Col xs='12'>
									<WrapperReverse className='wrapper-effect-reverse'>
										<img src={effectItem2} alt='' />
										<p>Zdrową i lśniącą sierść</p>
									</WrapperReverse>
								</Col>
								<Col xs='12'>
									<Wrapper className='wrapper-effect'>
										<img src={effectItem} alt='' />
										<p>Poprawę trawienia</p>
									</Wrapper>
								</Col>
								<Col xs='12'>
									<WrapperReverse className='wrapper-effect-reverse'>
										<img src={plaster} alt='' />
										<p>Szybsza odbudowa ran</p>
									</WrapperReverse>
								</Col>
								<Col xs='12'>
									<Wrapper>
										<img src={zab} alt='' />
										<p>Zmniejszenie kamienia nazębnego</p>
									</Wrapper>
								</Col>
							</Row>
						</Col>
					</Row>
				</EffectWrapper>
			</EffectSection>
			<TestsSection>
				<TestsWrapper>
					<Row>
						<Col xs='12' md='6'>
							<h2>Nasze badania</h2>
							<Subheader>Zobacz nasze osiągnięcia</Subheader>
							<Content>
								Badania przeprowadzone przez ekspertów BioDose
								potwierdzają, że DeliGuard skutecznie poprawia
								kondycję zwierząt, co jest szybko zauważalne
							</Content>
							<ButtonWrapper>
								<Link>Sprawdź</Link>
								<p>Rezultaty Naszych badań</p>
							</ButtonWrapper>
							<ButtonWrapper className='d-md-none'>
								<Link>
									<img src={bag} alt='' />{' '}
									<span>Przekonaj się sam</span>
								</Link>
								<p>i zobacz że DeliGuard działa</p>
							</ButtonWrapper>
						</Col>
						<Col xs='12' md='6'>
							<ImageSection src={testsImage} alt='' />
						</Col>
					</Row>
				</TestsWrapper>
			</TestsSection>
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

export default AboutProduct;
