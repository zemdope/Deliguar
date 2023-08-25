import React, { useState } from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import circle from '../assets/images/circle.png';
import circle2 from '../assets/images/circle2.png';
import plus2 from '../assets/images/plus2.svg';
import {
	ImageCircle,
	HeroSection,
	HeroWrapper,
	Subheader,
	ParagraphBottom,
	ParagraphCenter,
	ParagraphTop
} from '../assets/styles/pages/Nasze-badania.styles';

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
		</Layout>
	);
};

export default OurTests;
