import React from 'react';
import { Link } from 'gatsby';
import {
	FooterContainer,
	FooterWrapper,
	SocialContainer
} from '../assets/styles/pages/Footer.styles';
import ig from '../assets/images/insta.svg';
import fb from '../assets/images/fb.svg';
import yt from '../assets/images/yt.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logoText from '../assets/images/newLogoFooter.svg';
const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<Row>
					<Col xs='6' lg='8'>
						<Row>
							<Col xs='12' lg='6'>
								<h5>Wszystkie prawa zastrzeżone 2023</h5>
							</Col>
							<Col xs='12' lg='6'>
								<SocialContainer>
									<a href='https://www.instagram.com/deliguard.pets/'>
										<img src={ig} alt='' />
									</a>
									<a href='https://www.facebook.com/deliguard'>
										<img src={fb} alt='' />
									</a>
									<a href='https://www.youtube.com/@DeliGuard/'>
										<img src={yt} alt='' />
									</a>
								</SocialContainer>
							</Col>
						</Row>
					</Col>
					<Col xs='6' lg='4' className='text-end'>
						<Link>
							{' '}
							<img src={logoText} alt='' />
						</Link>
					</Col>
				</Row>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
