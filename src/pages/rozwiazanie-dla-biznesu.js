import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
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
const Business = ({data}) => {
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
					<HeaderPage>{data.allContentfulRdbHero.nodes[0].title} </HeaderPage>
					<TargetList>
						<li>
							<img src={data.allContentfulRdbHero.nodes[0].firstItemImage.url} alt='' />
							<h3>{data.allContentfulRdbHero.nodes[0].firstItemTitle}</h3>
							<p>
							{data.allContentfulRdbHero.nodes[0].firstItemContent.firstItemContent}
							</p>
						</li>
						<li>
							<img src={data.allContentfulRdbHero.nodes[0].secondItemImage.url} alt='' />
							<h3>{data.allContentfulRdbHero.nodes[0].secondItemTitle}</h3>
							<p>
							{data.allContentfulRdbHero.nodes[0].secondItemContent.secondItemContent}
							</p>
						</li>
						<li>
							<img src={data.allContentfulRdbHero.nodes[0].thirdItemImage.url} alt='' />
							<h3>{data.allContentfulRdbHero.nodes[0].thirdItemTitle}</h3>
							<p>
							{data.allContentfulRdbHero.nodes[0].thirdItemContent.thirdItemContent}
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
					<HeaderAbout>{data.allContentfulRdbONas.nodes[0].title}</HeaderAbout>
					<Paragraph>
					{data.allContentfulRdbONas.nodes[0].subtitle}
					</Paragraph>
					<ImageLogo src={logoBio} alt='' />
					<Row className='certificate-container'>
						<Col xs='12' md='7'>
							<ImageCertificate src={data.allContentfulRdbONas.nodes[0].image.url} alt='' />
						</Col>
						<Col xs='12' md='5'>
							<HeaderAbout className='bottom'>
							{data.allContentfulRdbONas.nodes[0].certificateTitle}
							</HeaderAbout>
							<Paragraph className='paragraph-bottom'>
							{data.allContentfulRdbONas.nodes[0].certificateContent} <br />
								<br />
								{data.allContentfulRdbONas.nodes[0].certificateContentSecond}
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
							<h2>{data.allContentfulRdbPartnerstwo.nodes[0].title}</h2>
							<Subheader>Naszym partnerom proponujemy:</Subheader>
							<ul>
								<li>
									<img src={plus} alt='' />
									<p>
										<span>{data.allContentfulRdbPartnerstwo.nodes[0].firstItemLeft} </span> -
										<span> {data.allContentfulRdbPartnerstwo.nodes[0].firstItemRight}</span>
									</p>
								</li>
								<li>
									<img src={plus} alt='' />
									<p>
										<span>{data.allContentfulRdbPartnerstwo.nodes[0].secondItemLeft}  </span>-
										<span>
										{data.allContentfulRdbPartnerstwo.nodes[0].secondItemRight}
										</span>
									</p>
								</li>
							</ul>
							<h3>
							{data.allContentfulRdbPartnerstwo.nodes[0].subtitle.subtitle}
							</h3>
						</Col>
						<Col xs='12' md='6'>
							<ImagePartners
								className='d-md-none'
								src={data.allContentfulRdbPartnerstwo.nodes[0].image.url}
								alt=''
							/>
							<ImagePartners
								className='d-none d-md-block'
								src={data.allContentfulRdbPartnerstwo.nodes[0].image.url}
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
							<h2>{data.allContentfulRdbContact.nodes[0].title}</h2>
						</Col>
						<Col xs='12' lg='4'>
							<TeamItemWrapper>
								<img src={data.allContentfulRdbContact.nodes[0].firstItemImage.url} alt='' />
								<h3>{data.allContentfulRdbContact.nodes[0].firstItemName}</h3>
								<p>{data.allContentfulRdbContact.nodes[0].firstItemPosition}</p>
								<a href='mailto:martyna.wilk@biodose.net'>{data.allContentfulRdbContact.nodes[0].firstItemMail}</a>
							</TeamItemWrapper>
						</Col>
						<Col xs='12' lg='4'>
							<TeamItemWrapper>
								<img src={data.allContentfulRdbContact.nodes[0].secondItemImage.url} alt='' />
								<h3>{data.allContentfulRdbContact.nodes[0].secondItemName}</h3>
								<p>{data.allContentfulRdbContact.nodes[0].secondItemPosition}</p>
								<a href='mailto:Kamil.matecki@biodose.net'>{data.allContentfulRdbContact.nodes[0].secondItemMail}</a>
							</TeamItemWrapper> 
						</Col>
						<Col xs='12' lg='4'>
							<TeamItemWrapper className='last-team-item'>
								<img src={data.allContentfulRdbContact.nodes[0].thirdItemImage.url} alt='' />
								<h3>{data.allContentfulRdbContact.nodes[0].thirdItemName}</h3>
								<p>{data.allContentfulRdbContact.nodes[0].thirdItemPosition}</p>
								<a href='mailto:yuliya.mirashnichenka@biodose.net'>{data.allContentfulRdbContact.nodes[0].thirdItemMail}</a>
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


export const query = graphql`
query MyQuery {
	allContentfulRdbHero {
	  nodes {
	    firstItemContent {
		 firstItemContent
	    }
	    firstItemImage {
		url
	    }
	    firstItemTitle
	    secondItemContent {
		 secondItemContent
	    }
	    secondItemImage {
		url
	    }
	    secondItemTitle
	    thirdItemContent {
		 thirdItemContent
	    }
	    thirdItemImage {
		url
	    }
	    thirdItemTitle
	    title
	  }
	}
	allContentfulRdbONas {
	  nodes {
	    image {
		url
	    }
	    subtitle
	    title
	    certificateContent
	    certificateContentSecond
	    certificateTitle
	  }
	}
	allContentfulRdbPartnerstwo {
    nodes {
      firstItemLeft
      firstItemRight
      image {
        url
      }
      secondItemLeft
      secondItemRight
      subtitle {
        subtitle
      }
      title
    }
  }
  allContentfulRdbContact {
    nodes {
      firstItemImage {
          url
      }
      firstItemMail
      firstItemName
      firstItemPosition
      secondItemImage {
          url
      }
      secondItemMail
      secondItemName
      secondItemPosition
      thirdItemImage {
          url
      }
      thirdItemMail
      thirdItemName
      thirdItemPosition
      title
    }
  }
   }`