import React from 'react';
import { useStaticQuery, graphql, Link} from "gatsby";
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
import Pprivacy from '../assets/images/polityka.pdf';
import { useIntl } from "gatsby-plugin-intl";
const Footer = () => {
	const intl = useIntl();
	const data = useStaticQuery(graphql`
    query {
      allContentfulKontaktIStopka {
        nodes {
          linkFb
          linkIg
          linkYt
          stopkaTekst
          politykaPrywatnoci {
            url
          }
          deliguardIcon {
            url
          }
        }
      }
    }
  `);

  // Access the data
  const contentfulData = data.allContentfulKontaktIStopka.nodes[0];

	return (
		<FooterContainer>
			<FooterWrapper>
				<Row>
					<Col xs='6' lg='8'>
						<Row>
							<Col xs='12'>
								<h5>{contentfulData.stopkaTekst}</h5>
								<a href={Pprivacy} target='blank'>{intl.locale === 'pl' ? 'Polityka Prywatności': 'Privacy policy' }</a>
							</Col>
							
						</Row>
					</Col>
					<Col xs='6' lg='4' className='text-end'>
						<Link>
							{' '}
							<img src={contentfulData.deliguardIcon.url} alt='' />
						</Link>
						<Col xs='12' lg='12'>
								<SocialContainer>
									<a href={contentfulData.linkIg}>
										<img src={ig} alt='' />
									</a>
									<a href={contentfulData.linkFb}>
										<img src={fb} alt='' />
									</a>
									<a href={contentfulData.linkYt}>
										<img src={yt} alt='' />
									</a>
								</SocialContainer>
							</Col>
					</Col>
					
				</Row>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
