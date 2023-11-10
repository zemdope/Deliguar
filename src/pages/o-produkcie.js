import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet";
import product from '../assets/images/product.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; 
import { useIntl } from "gatsby-plugin-intl";
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
	LeftItem,
	EffectParagraph,PostbioticsSection,PostbioticsItem
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
import inst from '../assets/images/inst.pdf';
import testsImage from '../assets/images/testsImage.png';
import solution from '../assets/images/solutionImage.png';
import plus from '../assets/images/plus.svg';
import plus2 from '../assets/images/plus2.svg';
import plus5 from '../assets/images/plus5.svg';
import item16 from '../assets/images/item16.svg';
import item17 from '../assets/images/item17.svg';
import buttonIcon from '../assets/images/buttonIcon.svg';
import pb1 from '../assets/images/pb1.svg';
import pb2 from '../assets/images/pb2.svg';
import pb3 from '../assets/images/pb3.svg';
import solutionDesktop from '../assets/images/solutionImageDesktop.png';
import solutionMobile from '../assets/images/solutionMobile.svg';
import solutionn from '../assets/images/solutionn.svg';
import bottle3 from '../assets/images/bottle4.svg';

import { Link } from 'gatsby';
import {
	Icon,
	SolutionImage,
	SolutionsWrapper,
	SolutionsSection
} from '../assets/styles/pages/Index.styles';

const AboutProduct = ({data}) => {
	gsap.registerPlugin(ScrollTrigger);
	const ref5 = useRef(null);
	const ref6 = useRef(null);
	const ref7 = useRef(null);
	useEffect(() => {
		
		const element5 = ref5.current;
		const t6 = gsap.timeline({ paused: true });
		t6.from(element5.querySelector('.serum-image'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			delay:0.5,
			ease: 'power2.out'
		});
		t6.from(element5.querySelector('.serum-image-mobile'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			ease: 'power2.out'
		});
		t6.from(element5.querySelector('.icon1'), {
			opacity: 0,
                scale:0,
			duration: 0.2,
			delay:.1,
			ease: 'power2.out'
		});
		t6.from(element5.querySelector('.icon2'), {
			opacity: 0,
                scale:0,
			duration: 0.2,
			delay:.1,
			ease: 'power2.out'
		});
		t6.from(element5.querySelector('.icon3'), {
			opacity: 0,
                scale:0,
			duration: 0.2,
			delay:.1,
			ease: 'power2.out'
		});
		t6.from(element5.querySelector('.icon4'), {
			opacity: 0,
                scale:0,
			duration: 0.2,
			delay:.1,
			ease: 'power2.out'
		});
		t6.from(element5.querySelector('.icon5'), {
			opacity: 0,
                scale:0,
			duration: 0.2,
			delay:.1,
			ease: 'power2.out'
		});
		
		

		ScrollTrigger.create({
			trigger: element5.querySelector('.serum-image'),
			onEnter: () => {
				// Play the timeline when the section is visible
				t6.play();
			},
			onLeaveBack: () => {
				// Reverse the timeline when the section is not visible anymore
				t6.reverse();
			}
		});
		const element6 = ref6.current;
		const t7 = gsap.timeline({ paused: true });
	
		t7.from(element6.querySelector('.tests-image'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			delay:.5,
			ease: 'power2.out'
		});
		
		

		ScrollTrigger.create({
			trigger: element6.querySelector('.tests-image'),
			onEnter: () => {
				// Play the timeline when the section is visible
				t7.play();
			},
			onLeaveBack: () => {
				// Reverse the timeline when the section is not visible anymore
				t7.reverse();
			}
		});
		const element7 = ref7.current;
		const t8 = gsap.timeline({ paused: true });
	
		t8.from(element7.querySelector('.solution-image'), {
			opacity: 0,
                scale:0,
			duration: 0.4,
			delay:.5,
			ease: 'power2.out'
		});
		
		

		ScrollTrigger.create({
			trigger: element7.querySelector('.solution-image'),
			onEnter: () => {
				// Play the timeline when the section is visible
				t8.play();
			},
			onLeaveBack: () => {
				// Reverse the timeline when the section is not visible anymore
				t8.reverse();
			}
		});
	}, []);

	const intl = useIntl();
  const userLanguage = intl.locale === 'pl' ? 'pl' : 'en';
  const [language, setLanguage] = useState(userLanguage);

  // Define the contentful data for different queries based on user's language
  const contentfulData =
    userLanguage === 'pl'
      ? data.allContentfulOpHero.nodes.find((node) => node.node_locale === 'en-US')
      : data.allContentfulOpHero.nodes.find((node) => node.node_locale === 'pl');

  // Define the contentful data for other queries
  const contentfulOpZastosujData =
    userLanguage === 'pl'
      ? data.allContentfulOpZastosuj.nodes.find((node) => node.node_locale === 'en-US')
      : data.allContentfulOpZastosuj.nodes.find((node) => node.node_locale === 'pl');

  const contentfulOpNaszeBadaniaData =
    userLanguage === 'pl'
      ? data.allContentfulOpNaszeBadania.nodes.find((node) => node.node_locale === 'en-US')
      : data.allContentfulOpNaszeBadania.nodes.find((node) => node.node_locale === 'pl');

  const contentfulRozwiazaniedlabiznesuData =
    userLanguage === 'pl'
      ? data.allContentfulRozwiazaniedlabiznesu.nodes.find((node) => node.node_locale === 'en-US')
      : data.allContentfulRozwiazaniedlabiznesu.nodes.find((node) => node.node_locale === 'pl');

	return (
		<Layout>
			<Helmet>
        <title>{contentfulData.seoTitle}</title>
        <meta
          name="description"
          content={contentfulData.seoMetaDescription.seoMetaDescription}
        />
      </Helmet>
			<AboutProductHero>
				<Row className='hero-wrapper d-md-none'>
					<h1>{contentfulData.title}</h1>
					<Col>
						<ImageBottle className={intl.locale === 'pl' ? '': 'image-bottole-about' }  src={contentfulData.image.file.url} alt='' />

						<ParagraphTop>
						{contentfulData.subtitlebeforeplus}<img src={plus2} alt='' />
							<br />
							{contentfulData.subtitleafterplus}
						</ParagraphTop>
						<Paragraph>
							<img src={plus2} alt='' />
							{contentfulData.content}
						</Paragraph>
					</Col>
				</Row>
				<Row className='d-none d-md-flex'>
					<LeftItem>
						<img src={item16} alt='' />
					</LeftItem>
					<Col md='6'>
						<h1>{contentfulData.title}</h1>
						<ParagraphTop>
						{contentfulData.subtitlebeforeplus} <img src={plus2} alt='' />{' '}
							<br /> {contentfulData.subtitleafterplus}
						</ParagraphTop>
						<Paragraph>
							<img src={plus2} alt='' />
							{contentfulData.content}
						</Paragraph>
					</Col>
					<Col
						md='6'
						className='d-flex d-xl-block align-items-center'>
						<ImageBottle 	className={intl.locale === 'pl' ? '': 'image-bottole-about' } src={contentfulData.image.file.url} alt='' />
					</Col>
				</Row>
			</AboutProductHero>
			<PostbioticsSection>
				<h2>
				{contentfulData.postbioticsTitle}
				</h2>
				<Row>
					<Col lg="4">
					<PostbioticsItem>
						<div>
						<img src={pb1} alt="" />
						</div>
						<div>
							<h3>{contentfulData.postbioticsItemTitle}</h3>
							<span>{contentfulData.postbioticsItemSubitle}</span>
							<p>{contentfulData.postbioticsItemDescription}</p>
						</div>
					
					</PostbioticsItem>
					</Col>
					<Col lg="4">
					<PostbioticsItem>
				
					<div>
						<img src={pb2} alt="" />
						</div>
						<div>
							<h3>{contentfulData.postbioticsItemTitle2}</h3>
							<span>{contentfulData.postbioticsItemSubitle2}</span>
							<p>{contentfulData.postbioticsItemDescription2}</p>
						</div>
					</PostbioticsItem>
					</Col>
					<Col lg="4">
					<PostbioticsItem>
					<div>
						<img src={pb3} alt="" />
						</div>
						<div>
							<h3>{contentfulData.postbioticsItemTitle3}</h3>
							<span>{contentfulData.postbioticsItemSubitle3}</span>
							<p>{contentfulData.postbioticsItemDescription3}</p>
						</div>
					
					
					</PostbioticsItem>
					</Col>
				</Row>
				<Col xs='12'>
					<a  href={inst} target='blank'>{intl.locale === 'pl' ? 'Dowiedz się więcej': 'Find out more' }</a>
				</Col>
			</PostbioticsSection>
			<EffectSection>
				<EffectWrapper>
					<RightItem>
						<img src={item17} alt='' />
					</RightItem>
					<Row>
						<Col>
							<h2>{contentfulOpZastosujData.title}<img src={plus5} alt='' /></h2>
						</Col>
						<Col xs='12'>
						<EffectParagraph>
						<img src={plus2} alt='' />
						{intl.locale === 'pl' ? '10 dni to średni czas wystąpienia widocznych zmian w kondycji zwierzęcia, określony na podstawie wyników badań z udziałem 100 domowych psów i kotów. Organizm każdego zwierzęcia ma swoje cechy osobnicze, zatem efekt działania produktu może pojawić się później niż w terminie 10 dni, przy zastosowaniu DeliGuard według instrukcji.': '10 days is the average time for visible changes in the animals condition to occur, as determined by the results of trials involving 100 domestic dogs and cats.' }
						
				
						</EffectParagraph>
						</Col>
					</Row>
					<Row className='effect-content-wrapper' ref={ref5}>
						<Col md='6' lg='7' >
							<SerumImage
								className='d-none d-lg-block serum-image'
								src={contentfulOpZastosujData.image.url}
								alt=''
							/>
							<SerumImage
								className='d-lg-none serum-image-mobile'
								
								src={contentfulOpZastosujData.image.url}
								alt=''
							/>
						</Col> 
						<Col xs='12' md='6' lg='5' className='effect-container'>
							<Row>
								<Col xs='12'>
									<Wrapper>
										<img src={contentfulOpZastosujData.firstIcon.url} className="icon1"  alt='' />

										<p>{contentfulOpZastosujData.firstIconText}</p>
									</Wrapper>
								</Col>
								<Col xs='12'>
									<WrapperReverse className='wrapper-effect-reverse'>
										<img src={contentfulOpZastosujData.secondIcon.url} className="icon2" alt='' />
										<p>{contentfulOpZastosujData.secondIconText}</p>
									</WrapperReverse>
								</Col>
								<Col xs='12'>
									<Wrapper className='wrapper-effect'>
										<img src={contentfulOpZastosujData.thidIcon.url} className="icon3" alt='' />
										<p>{contentfulOpZastosujData.thirdIconText}</p>
									</Wrapper>
								</Col>
								<Col xs='12'>
									<WrapperReverse className='wrapper-effect-reverse'>
										<img src={contentfulOpZastosujData.fourthIcon.url} className="icon4" alt='' />
										<p>{contentfulOpZastosujData.fourthIcontext}</p>
									</WrapperReverse>
								</Col>
								<Col xs='12'>
									<Wrapper>
										<img src={contentfulOpZastosujData.fifthIcon.url} className="icon5" alt='' />
										<p>
										{contentfulOpZastosujData.fifthIconText}
										</p>
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
							<h2>{contentfulOpNaszeBadaniaData.title}</h2>
							<Subheader>{contentfulOpNaszeBadaniaData.subtitle}</Subheader>
							<Content>
							{contentfulOpNaszeBadaniaData.content}
							</Content>
							<ButtonWrapper>
								<Link to='/nasze-badania'>{contentfulOpNaszeBadaniaData.button}</Link>
								<p>{contentfulOpNaszeBadaniaData.nearButtonText}</p>
							</ButtonWrapper>
							<ButtonWrapper className='d-md-none'>
								<a href="https://allegro.pl/oferta/suplement-dla-psa-i-kota-na-trawienie-deliguard-14236919045">
									<img src={bag} alt='' />{' '}
									<span>	{intl.locale === 'pl' ? 'Przekonaj się sam': 'Try it' }
						</span>
								</a>
								<p>{intl.locale === 'pl' ? 'i zobacz że DeliGuard działa': 'and see that DeliGuard works' }
</p>
							</ButtonWrapper>
						</Col>
						<Col xs='12' md='6' ref={ref6}>
							<ImageSection  className="tests-image" src={contentfulOpNaszeBadaniaData.image.url} alt='' />
						</Col>
					</Row>
				</TestsWrapper>
			</TestsSection>
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
							<Link
								to='/rozwiazanie-dla-biznesu'
								className='btn-about'>
								{' '}
								<img src={buttonIcon} alt='' />{' '}
								<span>{contentfulRozwiazaniedlabiznesuData.button}</span>
							</Link>
						</Col>
						<Col lg='5' ref={ref7}>
							<SolutionImage
								className='d-lg-none'
								src={contentfulRozwiazaniedlabiznesuData.imageMobile.url}
								alt=''
							/>
							<SolutionImage
								className=' d-none d-lg-block img-about solution-image'
								src={contentfulRozwiazaniedlabiznesuData.image.url}
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
export const query = graphql`
query MyQuery {
  allContentfulOpHero {
    nodes {
			node_locale
      subtitleafterplus
      subtitlebeforeplus
      title
      content
	 postbioticsItemDescription
      postbioticsItemDescription2
      postbioticsItemDescription3
      postbioticsItemSubtitle
      postbioticsItemSubtitle2
      postbioticsItemSubtitle3
      postbioticsItemTitle
      postbioticsItemTitle2
      postbioticsItemTitle3
      postbioticsTitle
	 seoTitle
      seoMetaDescription {
        seoMetaDescription
      }
      image {
        file {
          url
        }
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
  allContentfulOpZastosuj {
    nodes {
			node_locale
      title
      image {
		url
      }
      fifthIconText
      fifthIcon {
		url
      }
      firstIcon {
		url
      }
      firstIconText
      fourthIcontext 
      fourthIcon {
		url
      }
      secondIconText
      secondIcon {
		url
      }
      thidIcon {
		url
      }
      thirdIconText
    }
  }
  allContentfulOpNaszeBadania {
    nodes {
			node_locale
      button
      content
      image {
		url
      }
      nearButtonText
      subtitle
      title
    }
  }
}
`;
