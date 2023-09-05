import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import product from '../assets/images/product.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { gsap } from 'gsap';
// get other plugins:
import ScrollTrigger from 'gsap/ScrollTrigger'; 
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
import buttonIcon from '../assets/images/buttonIcon.svg';
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
	return (
		<Layout>
			<AboutProductHero>
				<Row className='hero-wrapper d-md-none'>
					<h1>{data.allContentfulOpHero.nodes[0].title}</h1>
					<Col>
						<ImageBottle src={data.allContentfulOpHero.nodes[0].image.file.url} alt='' />

						<ParagraphTop>
						{data.allContentfulOpHero.nodes[0].subtitlebeforeplus}<img src={plus2} alt='' />
							<br />
							{data.allContentfulOpHero.nodes[0].subtitleafterplus}
						</ParagraphTop>
						<Paragraph>
							<img src={plus2} alt='' />
							{data.allContentfulOpHero.nodes[0].content}
						</Paragraph>
					</Col>
				</Row>
				<Row className='d-none d-md-flex'>
					<LeftItem>
						<img src={item16} alt='' />
					</LeftItem>
					<Col md='6'>
						<h1>{data.allContentfulOpHero.nodes[0].title}</h1>
						<ParagraphTop>
						{data.allContentfulOpHero.nodes[0].subtitlebeforeplus} <img src={plus2} alt='' />{' '}
							<br /> {data.allContentfulOpHero.nodes[0].subtitleafterplus}
						</ParagraphTop>
						<Paragraph>
							<img src={plus2} alt='' />
							{data.allContentfulOpHero.nodes[0].content}
						</Paragraph>
					</Col>
					<Col
						md='6'
						className='d-flex d-xl-block align-items-center'>
						<ImageBottle src={data.allContentfulOpHero.nodes[0].image.file.url} alt='' />
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
							<h2>{data.allContentfulOpZastosuj.nodes[0].title}</h2>
						</Col>
					</Row>
					<Row className='effect-content-wrapper' ref={ref5}>
						<Col md='6' lg='7' >
							<SerumImage
								className='d-none d-lg-block serum-image'
								src={data.allContentfulOpZastosuj.nodes[0].image.url}
								alt=''
							/>
							<SerumImage
								className='d-lg-none serum-image-mobile'
								
								src={data.allContentfulOpZastosuj.nodes[0].image.url}
								alt=''
							/>
						</Col> 
						<Col xs='12' md='6' lg='5' className='effect-container'>
							<Row>
								<Col xs='12'>
									<Wrapper>
										<img src={data.allContentfulOpZastosuj.nodes[0].firstIcon.url} className="icon1"  alt='' />

										<p>{data.allContentfulOpZastosuj.nodes[0].firstIconText}</p>
									</Wrapper>
								</Col>
								<Col xs='12'>
									<WrapperReverse className='wrapper-effect-reverse'>
										<img src={data.allContentfulOpZastosuj.nodes[0].secondIcon.url} className="icon2" alt='' />
										<p>{data.allContentfulOpZastosuj.nodes[0].secondIconText}</p>
									</WrapperReverse>
								</Col>
								<Col xs='12'>
									<Wrapper className='wrapper-effect'>
										<img src={data.allContentfulOpZastosuj.nodes[0].thidIcon.url} className="icon3" alt='' />
										<p>{data.allContentfulOpZastosuj.nodes[0].thirdIconText}</p>
									</Wrapper>
								</Col>
								<Col xs='12'>
									<WrapperReverse className='wrapper-effect-reverse'>
										<img src={data.allContentfulOpZastosuj.nodes[0].fourthIcon.url} className="icon4" alt='' />
										<p>{data.allContentfulOpZastosuj.nodes[0].fourthIcontext}</p>
									</WrapperReverse>
								</Col>
								<Col xs='12'>
									<Wrapper>
										<img src={data.allContentfulOpZastosuj.nodes[0].fifthIcon.url} className="icon5" alt='' />
										<p>
										{data.allContentfulOpZastosuj.nodes[0].fifthIconText}
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
							<h2>{data.allContentfulOpNaszeBadania.nodes[0].title}</h2>
							<Subheader>{data.allContentfulOpNaszeBadania.nodes[0].subtitle}</Subheader>
							<Content>
							{data.allContentfulOpNaszeBadania.nodes[0].content}
							</Content>
							<ButtonWrapper>
								<Link to='/nasze-badania'>{data.allContentfulOpNaszeBadania.nodes[0].button}</Link>
								<p>{data.allContentfulOpNaszeBadania.nodes[0].nearButtonText}</p>
							</ButtonWrapper>
							<ButtonWrapper className='d-md-none'>
								<Link>
									<img src={bag} alt='' />{' '}
									<span>Przekonaj się sam</span>
								</Link>
								<p>i zobacz że DeliGuard działa</p>
							</ButtonWrapper>
						</Col>
						<Col xs='12' md='6' ref={ref6}>
							<ImageSection  className="tests-image" src={data.allContentfulOpNaszeBadania.nodes[0].image.url} alt='' />
						</Col>
					</Row>
				</TestsWrapper>
			</TestsSection>
			<SolutionsSection>
				<SolutionsWrapper>
					<h2>{data.allContentfulRozwiazaniedlabiznesu.nodes[0].title}</h2>
					<Row>
						<Col lg='7'>
							<h3>
							{data.allContentfulRozwiazaniedlabiznesu.nodes[0].subtitle}
							</h3>
							<ul>
								<li>
									<h4>{data.allContentfulRozwiazaniedlabiznesu.nodes[0].firstItemTitle}</h4>
									<p>
										<Icon src={plus} alt='' />{' '}
										<span>
										{data.allContentfulRozwiazaniedlabiznesu.nodes[0].firstItemContent}
										</span>
									</p>
								</li>
								<li>
									<h4>{data.allContentfulRozwiazaniedlabiznesu.nodes[0].secondItemTitle}</h4>
									<p>
										<Icon src={plus} alt='' />{' '}
										<span>
										{data.allContentfulRozwiazaniedlabiznesu.nodes[0].secondItemContent}
										</span>
									</p>
								</li>
								<li>
									<h4>{data.allContentfulRozwiazaniedlabiznesu.nodes[0].thirdItemTitle}</h4>
									<p>
										<Icon src={plus} alt='' />{' '}
										<span>
										{data.allContentfulRozwiazaniedlabiznesu.nodes[0].thirdItemContent}
										</span>
									</p>
								</li>
							</ul>
							<Link
								to='/rozwiazanie-dla-biznesu'
								className='btn-about'>
								{' '}
								<img src={buttonIcon} alt='' />{' '}
								<span>{data.allContentfulRozwiazaniedlabiznesu.nodes[0].button}</span>
							</Link>
						</Col>
						<Col lg='5' ref={ref7}>
							<SolutionImage
								className='d-lg-none'
								src={data.allContentfulRozwiazaniedlabiznesu.nodes[0].imageMobile.url}
								alt=''
							/>
							<SolutionImage
								className=' d-none d-lg-block img-about solution-image'
								src={data.allContentfulRozwiazaniedlabiznesu.nodes[0].image.url}
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
      subtitleafterplus
      subtitlebeforeplus
      title
      content
      image {
        file {
          url
        }
      }
    }
  }
  allContentfulRozwiazaniedlabiznesu {
    nodes {
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
