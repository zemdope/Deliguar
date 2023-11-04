import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import Layout from '../components/Layout';
import { Helmet } from "react-helmet";
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
import { useIntl } from "gatsby-plugin-intl";
import item3 from '../assets/images/item3.svg';
import item18 from '../assets/images/item18.svg';
import item19 from '../assets/images/item19.svg';
import item20 from '../assets/images/item20.svg';
import item21 from '../assets/images/item21.svg';
import item23 from '../assets/images/item23.svg';
import item24 from '../assets/images/item24.svg';
import item26 from '../assets/images/item26.svg';
import item27 from '../assets/images/item27.svg';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 
import logoBio from '../assets/images/logoBio.svg';
import plus from '../assets/images/plus.svg';

const Business = ({data}) => {
	gsap.registerPlugin(ScrollTrigger);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	useEffect(() => {
		const element6 = ref1.current;
		const t7 = gsap.timeline({ paused: true });
	
		t7.from(element6.querySelector('.icon1'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			delay:.5,
			ease: 'power2.out' 
		});
		
		
		t7.from(element6.querySelector('.icon2'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			delay:.1,
			ease: 'power2.out'
		});
		
		
		t7.from(element6.querySelector('.icon3'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			delay:.1,
			ease: 'power2.out'
		});
		
		

		ScrollTrigger.create({
			trigger: element6.querySelector('.icon1'),
			onEnter: () => {
				// Play the timeline when the section is visible
				t7.play();
			},
			onLeaveBack: () => {
				// Reverse the timeline when the section is not visible anymore
				t7.reverse();
			}
		});
		const element7 = ref2.current;
		const t8 = gsap.timeline({ paused: true });
	
		t8.from(element7.querySelector('.certificate'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			delay:.5,
			ease: 'power2.out'
		});
		
		
		
		
		

		ScrollTrigger.create({
			trigger: element7.querySelector('.certificate'),
			onEnter: () => {
				// Play the timeline when the section is visible
				t8.play();
			},
			onLeaveBack: () => {
				// Reverse the timeline when the section is not visible anymore
				t8.reverse();
			}
		});
		const element8 = ref3.current;
		const t9 = gsap.timeline({ paused: true });
	
		t9.from(element8.querySelector('.partners'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			delay:.5,
			ease: 'power2.out'
		});
		
		t9.from(element8.querySelector('.partners-mobile'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			delay:.1,
			ease: 'power2.out'
		});
		
		
		
		
		

		ScrollTrigger.create({
			trigger: element7.querySelector('.certificate'),
			onEnter: () => {
				// Play the timeline when the section is visible
				t9.play();
			},
			onLeaveBack: () => {
				// Reverse the timeline when the section is not visible anymore
				t9.reverse();
			}
		});
	}, []);

	const intl = useIntl();
  const userLanguage = intl.locale === 'pl' ? 'pl' : 'en' ;
		const [language, setLanguage] = useState(userLanguage);
	
		// Define the contentful data for different queries based on user's language
		const contentfulData =
			userLanguage === 'pl'
				? data.allContentfulRdbHero.nodes.find((node) => node.node_locale === 'en-US')
				: data.allContentfulRdbHero.nodes.find((node) => node.node_locale === 'pl');
	
		// Define the contentful data for other queries
		const contentfulRdbONasData =
			userLanguage === 'pl'
				? data.allContentfulRdbONas.nodes.find((node) => node.node_locale === 'en-US')
				: data.allContentfulRdbONas.nodes.find((node) => node.node_locale === 'pl');
	
		const contentfulRdbPartnerstwoData =
			userLanguage === 'pl'
				? data.allContentfulRdbPartnerstwo.nodes.find((node) => node.node_locale === 'en-US')
				: data.allContentfulRdbPartnerstwo.nodes.find((node) => node.node_locale === 'pl');
	
		const contentfulRdbContactData =
			userLanguage === 'pl'
				? data.allContentfulRdbContact.nodes.find((node) => node.node_locale === 'en-US')
				: data.allContentfulRdbContact.nodes.find((node) => node.node_locale === 'pl');
	
	return (
		<Layout>
			<Helmet>
        <title>{contentfulData.seoTitle}</title>
        <meta
          name="description"
          content={contentfulData.seoMetaDescription.seoMetaDescription}
        />
      </Helmet>
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
					<HeaderPage>{contentfulData.title} </HeaderPage>
					<TargetList ref={ref1}>
						<li>
							<img className='icon1' src={contentfulData.firstItemImage.url} alt='' />
							<h3>{contentfulData.firstItemTitle}</h3>
							<p>
							{contentfulData.firstItemContent.firstItemContent}
							</p>
						</li>
						<li>
							<img className='icon2' src={contentfulData.secondItemImage.url} alt='' />
							<h3>{contentfulData.secondItemTitle}</h3>
							<p>
							{contentfulData.secondItemContent.secondItemContent}
							</p>
						</li>
						<li>
							<img className='icon3' src={contentfulData.thirdItemImage.url} alt='' />
							<h3>{contentfulData.thirdItemTitle}</h3>
							<p>
							{contentfulData.thirdItemContent.thirdItemContent}
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
					<HeaderAbout>{contentfulRdbONasData.title}</HeaderAbout>
					<Paragraph>
					{contentfulRdbONasData.subtitle}
					</Paragraph>
					<ImageLogo src={logoBio} alt='' />
					<Row className='certificate-container'>
						<Col xs='12' md='7' ref={ref2}>
							<ImageCertificate className="certificate" src={contentfulRdbONasData.image.url} alt='' />
						</Col>
						<Col xs='12' md='5'>
							<HeaderAbout className='bottom'>
							{contentfulRdbONasData.certificateTitle}
							</HeaderAbout>
							<Paragraph className='paragraph-bottom'>
							{contentfulRdbONasData.certificateContent} <br />
								<br />
								{contentfulRdbONasData.certificateContentSecond}
							</Paragraph> 
							<a href={contentfulRdbONasData.certificate.publicUrl} target='blank'>{intl.locale === 'pl' ? 'Certyfikaty': 'Certificates' }</a>
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
							<h2>{contentfulRdbPartnerstwoData.title}</h2>
							<Subheader>{intl.locale === 'pl' ? 'Naszym partnerom proponujemy:': 'We offer our partners:' }</Subheader>
							<ul>
								<li>
									<img src={plus} alt='' />
									<p>
										<span>{contentfulRdbPartnerstwoData.firstItemLeft} </span> -
										<span> {contentfulRdbPartnerstwoData.firstItemRight}</span>
									</p>
								</li>
								<li>
									<img src={plus} alt='' />
									<p>
										<span>{contentfulRdbPartnerstwoData.secondItemLeft}  </span>-
										<span>
										{contentfulRdbPartnerstwoData.secondItemRight}
										</span>
									</p>
								</li>
							</ul>
							<h3>
							{contentfulRdbPartnerstwoData.subtitle.subtitle}
							</h3>
						</Col>
						<Col xs='12' md='6' ref={ref3}>
							<ImagePartners
								className='d-md-none partners'
								src={contentfulRdbPartnerstwoData.image.url}
								alt=''
							/>
							<ImagePartners
								className='d-none d-md-block partners-mobile'
								src={contentfulRdbPartnerstwoData.image.url}
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
							<h2>{contentfulRdbContactData.title}</h2>
						</Col>
						<Col xs='12' lg='4'>
							<TeamItemWrapper>
								<img src={contentfulRdbContactData.firstItemImage.url} alt='' />
								<h3>{contentfulRdbContactData.firstItemName}</h3>
								<p>{contentfulRdbContactData.firstItemPosition}</p>
								<a href='mailto:martyna.wilk@biodose.net'>{contentfulRdbContactData.firstItemMail}</a>
							</TeamItemWrapper>
						</Col>
						<Col xs='12' lg='4'>
							<TeamItemWrapper>
								<img src={contentfulRdbContactData.secondItemImage.url} alt='' />
								<h3>{contentfulRdbContactData.secondItemName}</h3>
								<p>{contentfulRdbContactData.secondItemPosition}</p>
								<a href='mailto:Kamil.matecki@biodose.net'>{contentfulRdbContactData.secondItemMail}</a>
							</TeamItemWrapper> 
						</Col>
						<Col xs='12' lg='4'>
							<TeamItemWrapper className='last-team-item'>
								<img src={contentfulRdbContactData.thirdItemImage.url} alt='' />
								<h3>{contentfulRdbContactData.thirdItemName}</h3>
								<p>{contentfulRdbContactData.thirdItemPosition}</p>
								<a href='mailto:yuliya.mirashnichenka@biodose.net'>{contentfulRdbContactData.thirdItemMail}</a>
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
			node_locale
		seoTitle
      seoMetaDescription {
        seoMetaDescription
      }
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
			node_locale
	    image {
		url
	    }
	    certificate {
		publicUrl
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
			node_locale
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
			node_locale
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