import * as React from 'react';
import Layout from '../components/Layout';
import {
	Wrapper,
	HeaderPage,
	ImageStain,
	BusinessSection,
	TargetList,
	AboutUsSection,
	HeaderAbout,
	Paragraph,
	ImageLogo,
	ImageCertificate,
	PartnersSection,
	PartnersWrapper,
	Subheader,
	ImagePartners,
	ContactSection,
	ContactWrapper,
	TeamItemWrapper,
	LeftItem,
	RightItem,
	RightItemAbout,
	RightItemContact,
	LeftItemContact,
	LeftItemPartners
} from '../assets/styles/pages/Business.styles';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import item3 from '../assets/images/item3.svg';
import item18 from '../assets/images/item18.svg';
import item19 from '../assets/images/item19.svg';
import item20 from '../assets/images/item20.svg';
import item21 from '../assets/images/item21.svg';
import item23 from '../assets/images/item23.svg';
import item24 from '../assets/images/item24.svg';
import item25 from '../assets/images/item25.svg';
import item26 from '../assets/images/item26.svg';
import item27 from '../assets/images/item27.svg';

import business2 from '../assets/images/business2.png';
import team from '../assets/images/team.png';
import team2 from '../assets/images/team2.png';
import team3 from '../assets/images/team3.png';
import team4 from '../assets/images/team4.svg';
import team5 from '../assets/images/team5.svg';
import team6 from '../assets/images/team6.svg';
import business3 from '../assets/images/business3.png';
import logoBio from '../assets/images/logoBio.svg';
import certificate from '../assets/images/certificate.svg';
import partners from '../assets/images/partners.svg';
import partners2 from '../assets/images/partners2.svg';
import partners5 from '../assets/images/partners5.svg';
import plus from '../assets/images/plus.svg';
import itemSol from '../assets/images/itemSolution.svg';
import itemSol2 from '../assets/images/itemSolution2.svg';
import itemSol3 from '../assets/images/itemSolution3.svg';
const Business = () => {
	return (
		<Layout>
			<BusinessSection>
				<Wrapper>
					<LeftItem>
						<ImageStain className='d-lg-none' src={item3} alt='' />
						<ImageStain
							className='d-none d-lg-block'
							src={item23}
							alt=''
						/>
					</LeftItem>
					<RightItem>
						<ImageStain className='d-lg-none' src={item18} alt='' />
						<ImageStain
							className='d-none d-lg-block'
							src={item24}
							alt=''
						/>
					</RightItem>
					<HeaderPage>Rozwiązania dla biznesu </HeaderPage>
					<TargetList>
						<li>
							<img src={itemSol2} alt='' />
							<h3>Dla producentów karmy</h3>
							<p>
								Deliguard jest cennym wsparciem skuteczności i
								funkcjonalnosci karmy zwierzęciej. Może być
								dodany do karmy w trakcie jej produkcji.
							</p>
						</li>
						<li>
							<img src={itemSol} alt='' />
							<h3>Dla weterynarzy</h3>
							<p>
								DeliGuard jest wsparciem w terapii biegunki o
								nieznanej etiologii, jak również problemów
								trawiennych czy dermatologicznych. Poprzez
								stymulację mikrobiomu jelitowego gospodarza
								DeliGuard szybko i skutecznie przywraca
								fizjologiczną mikroflorę przewodu pokarmowego
								oraz pobudza wydalanie toksyn z organizmu.
							</p>
						</li>
						<li>
							<img src={itemSol3} alt='' />
							<h3>Dla handlu</h3>
							<p>
								DeliGuard to nowatorski produkt i odpowiedź na
								poszukiwania oraz potrzeby włascicieli zwierząt.
								Jego jakość i skuteczność działania na organizm
								zwierzęcia potwierdzają własciciele kotów i
								psów, uczestniczących w badaniach
								przeprowadzonych przez firmę BioDose.
							</p>
						</li>
					</TargetList>
				</Wrapper>
			</BusinessSection>
			<AboutUsSection>
				<Wrapper>
					<RightItemAbout>
						<ImageStain className='d-lg-none' src={item19} alt='' />
						<ImageStain
							className='d-none d-lg-block'
							src={item26}
							alt=''
						/>
					</RightItemAbout>
					<HeaderAbout>O nas</HeaderAbout>
					<Paragraph>
						Deliguard został opracowany przez BioDose - polską
						firmę, której z pasją i pełnym zaangażowaniem tworzy
						produkty dla zwierząt, dbając o ich dobrostanz
						wykorzystaniem najnowszych osiągnięć biotechnologii i
						trendów żywieniowych.
					</Paragraph>
					<ImageLogo src={logoBio} alt='' />
					<Row className='certificate-container'>
						<Col xs='12' md='7'>
							<ImageCertificate src={certificate} alt='' />
						</Col>
						<Col xs='12' md='5'>
							<HeaderAbout className='bottom'>
								Certyfikaty
							</HeaderAbout>
							<Paragraph className='paragraph-bottom'>
								Mając na uwadze dobro zwierząt oraz najwyższą
								jakość i bezpieczeństwo naszych produktów,
								współpracujemy z certyfikowanymi producentami i
								akredytowanymi laboratoriami. <br />
								<br />
								Nasze produkty są objęte międzynarodowym
								systemem bezpieczeństwa pasz GMP+ FSA i GMP+FRA
								(GMO Controlled).
							</Paragraph>
						</Col>
					</Row>
				</Wrapper>
			</AboutUsSection>
			<PartnersSection>
				<PartnersWrapper>
					<LeftItemPartners>
						<ImageStain
							className='d-none d-lg-block'
							src={item27}
							alt=''
						/>
					</LeftItemPartners>
					<Row>
						<Col xs='12' md='6'>
							<h2>Partnerstwo z Nami</h2>
							<Subheader>Naszym partnerom proponujemy:</Subheader>
							<ul>
								<li>
									<img src={plus} alt='' />
									<p>
										<span>wsparcie techniczne </span> -
										<span> konsultacje i szkolenia,</span>
									</p>
								</li>
								<li>
									<img src={plus} alt='' />
									<p>
										<span>wsparcie marketingowe </span>-
										<span>
											{' '}
											materiały techniczne i działania
											promocyjne,
										</span>
									</p>
								</li>
							</ul>
							<h3>
								Jeśli chcesz uzyskać więcej dodatkowych
								informacji technicznych, prosimy o kontakt z
								jednym z naszych ekspertów.
							</h3>
						</Col>
						<Col xs='12' md='6'>
							<ImagePartners
								className='d-md-none'
								src={partners5}
								alt=''
							/>
							<ImagePartners
								className='d-none d-md-block'
								src={partners5}
								alt=''
							/>
						</Col>
					</Row>
				</PartnersWrapper>
			</PartnersSection>
			<ContactSection>
				<ContactWrapper>
					<RightItemContact>
						<ImageStain src={item20} alt='' />
					</RightItemContact>
					<LeftItemContact>
						<ImageStain src={item21} alt='' />
					</LeftItemContact>
					<Row>
						<Col xs='12'>
							<h2>Kontakt</h2>
						</Col>
						<Col xs='12' lg='4'>
							<TeamItemWrapper>
								<img src={team6} alt='' />
								<h3>PhD Martyna Wilk</h3>
								<p>R&D MANAGER</p>
								<a href=''>martyna.wilk@biodose.net</a>
							</TeamItemWrapper>
						</Col>
						<Col xs='12' lg='4'>
							<TeamItemWrapper>
								<img src={team5} alt='' />
								<h3>Kamil Matecki</h3>
								<p>Product Manager</p>
								<a href='mailto:Kamil.matecki@biodose.net'>Kamil.matecki@biodose.net</a>
							</TeamItemWrapper> 
						</Col>
						<Col xs='12' lg='4'>
							<TeamItemWrapper className='last-team-item'>
								<img src={team4} alt='' />
								<h3>Yuliya Mirashnichenka</h3>
								<p>Sales&Marketing Manager</p>
								<a href=''>yuliya.mirashnichenka@biodose.net</a>
							</TeamItemWrapper>
						</Col>
					</Row>
				</ContactWrapper>
			</ContactSection>
		</Layout>
	);
};

export default Business;

export const Head = () => <title>Rozwiązanie dla biznesu</title>;
