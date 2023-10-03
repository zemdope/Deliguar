import * as React from 'react';
import {useEffect, useRef} from 'react';
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
					<TargetList ref={ref1}>
						<li>
							<img className='icon1' src={data.allContentfulRdbHero.nodes[0].firstItemImage.url} alt='' />
							<h3>{data.allContentfulRdbHero.nodes[0].firstItemTitle}</h3>
							<p>
							{data.allContentfulRdbHero.nodes[0].firstItemContent.firstItemContent}
							</p>
						</li>
						<li>
							<img className='icon2' src={data.allContentfulRdbHero.nodes[0].secondItemImage.url} alt='' />
							<h3>{data.allContentfulRdbHero.nodes[0].secondItemTitle}</h3>
							<p>
							{data.allContentfulRdbHero.nodes[0].secondItemContent.secondItemContent}
							</p>
						</li>
						<li>
							<img className='icon3' src={data.allContentfulRdbHero.nodes[0].thirdItemImage.url} alt='' />
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
						<Col xs='12' md='7' ref={ref2}>
							<ImageCertificate className="certificate" src={data.allContentfulRdbONas.nodes[0].image.url} alt='' />
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
							<a href="">Certyfikaty</a>
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
						<Col xs='12' md='6' ref={ref3}>
							<ImagePartners
								className='d-md-none partners'
								src={data.allContentfulRdbPartnerstwo.nodes[0].image.url}
								alt=''
							/>
							<ImagePartners
								className='d-none d-md-block partners-mobile'
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