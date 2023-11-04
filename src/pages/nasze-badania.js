import React, { useState, useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import { gsap } from 'gsap';
import { Helmet } from "react-helmet";
import { StaticImage } from 'gatsby-plugin-image';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import circle from '../assets/images/circle.png';
import circle2 from '../assets/images/circle2.png';
import circle3 from '../assets/images/circle3.svg';
import plus2 from '../assets/images/plus2.svg';
import actionImage from '../assets/images/actionImage.svg';
import actionImage2 from '../assets/images/actionImage2.svg';
import actionImage3 from '../assets/images/actionImage3.svg';
import buttonIcon from '../assets/images/buttonIcon.svg';
import solutionDesktop from '../assets/images/solutionImageDesktop.png';
import solution from '../assets/images/solutionImage.png';
import solutionMobile from '../assets/images/solutionMobile.svg';
import solutionn from '../assets/images/solutionn.svg';
import plus from '../assets/images/plus.svg';
import bag from '../assets/images/bag.svg';
import { useIntl } from "gatsby-plugin-intl";
import {
  ImageCircle,
  HeroSection,
  HeroWrapper,
  Subheader,
  ParagraphBottom,
  ParagraphCenter,
  ParagraphTop,
  ActionSection,
  ActionWrapper,
  ShoppingSection,
  ShoppingWrapper,
  DescriptionSection
} from '../assets/styles/pages/Nasze-badania.styles';
import { Link } from 'gatsby';
import {
  Icon,
  SolutionImage,
  SolutionsWrapper,
  SolutionsSection
} from '../assets/styles/pages/Index.styles';

const OurTests = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  useEffect(() => {
    const element6 = ref6.current;
    const t7 = gsap.timeline({ paused: true });

    t7.from(element6.querySelector('.tests-image'), {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      delay: 0.5,
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
      scale: 0,
      duration: 0.4,
      delay: 0.5,
      ease: 'power2.out'
    });
    t8.from(element7.querySelector('.solution-image-2'), {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      delay: 0.2,
      ease: 'power2.out'
    });

    t8.from(element7.querySelector('.solution-image-3'), {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      delay: 0.5,
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
    const element8 = ref8.current;
    const t9 = gsap.timeline({ paused: true });

    t9.from(element8.querySelector('.solution-image-3'), {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      delay: 0.5,
      ease: 'power2.out'
    });

    ScrollTrigger.create({
      trigger: element8.querySelector('.solution-image-3'),
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

  // Set the language state
	const intl = useIntl();
	console.log(intl)
  const userLanguage = intl.locale === 'pl' ? 'pl' : 'en' ;
  const [language, setLanguage] = useState(userLanguage); 

  // Define the contentful data for different queries based on user's language
  const contentfulData =
    userLanguage === 'pl'
      ? data.allContentfulNsHero.nodes.find((node) => node.node_locale === 'en-US')
      : data.allContentfulNsHero.nodes.find((node) => node.node_locale === 'pl');

  // Define the contentful data for other queries
  const contentfulNsDzialanieData =
    userLanguage === 'pl'
      ? data.allContentfulNsDzialanie.nodes.find((node) => node.node_locale === 'en-US')
      : data.allContentfulNsDzialanie.nodes.find((node) => node.node_locale === 'pl');

  const contentfulNsPoprawaData =
    userLanguage === 'pl'
      ? data.allContentfulNsPoprawa.nodes.find((node) => node.node_locale === 'en-US')
      : data.allContentfulNsPoprawa.nodes.find((node) => node.node_locale === 'pl');

  const contentfulNsKupData =
    userLanguage === 'pl'
      ? data.allContentfulNsKup.nodes.find((node) => node.node_locale === 'en-US')
      : data.allContentfulNsKup.nodes.find((node) => node.node_locale === 'pl');

  const contentfulRozwiazaniedlabiznesuData =
    userLanguage === 'pl'
      ? data.allContentfulRozwiazaniedlabiznesu.nodes.find((node) => node.node_locale === 'en-US')
      : data.allContentfulRozwiazaniedlabiznesu.nodes.find((node) => node.node_locale === 'pl');

  return (
    <Layout>
      <Helmet>
        <title>{contentfulData.seoTitle}</title>
        <meta name="description" content={contentfulData.seoMetaDescription.seoMetaDescription} />
      </Helmet>
      <HeroSection>
        <HeroWrapper>
          <Row className="mobile-hero">
            <Col xs="12" lg="7">
              <Subheader>{contentfulData.subtitle}</Subheader>
              <h1>{contentfulData.title}</h1>
            </Col>
            <Col
              xs="12"
              lg="6"
              className="pe-0 d-lg-flex align-items-end percent desktop-content"
            >
              <div>
                <ImageCircle className="d-lg-none" src={circle} alt="" />
                <ParagraphTop>
                  <span>{contentfulData.itemTopNumber}</span>
                  <span>
                    {contentfulData.itemTop}
                    <img src={plus2} alt="" />
                  </span>
                </ParagraphTop>
                <ParagraphCenter>
                  <span>{contentfulData.itemBottomNumber}</span>
                  <span>{contentfulData.itemBottom}</span>
                </ParagraphCenter>
                <ParagraphBottom>
                  <img src={plus2} alt="" /> <span>{contentfulData.content}</span>
                </ParagraphBottom>
              </div>
            </Col>
            <Col className="d-none d-lg-block desktop-content" lg="6">
              <ImageCircle src={circle3} alt="" />
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </HeroWrapper>
      </HeroSection>
      <DescriptionSection>
        <div className="container">
          <Row>
            <Col className='d-lg-flex gap-5 justify-content-center'>
              <h2>{contentfulData.researchDescription}</h2>
              <p>{contentfulData.researchParagraph.researchParagraph}</p>
            </Col>
          </Row>
        </div>
      </DescriptionSection>
      <ActionSection>
        <ActionWrapper>
          <Row className='d-md-flex flex-row-reverse first-action-container'>
            <Col
              xs='12'
              md='7'
              lg='8'
              className='first-action-content'>
              <h2>{contentfulNsDzialanieData.title}</h2>
              <p>
                {contentfulNsDzialanieData.subtitle}
              </p>
            </Col>
            <Col xs='12' md='5' lg='4' ref={ref6}>
              <img className="tests-image" src={contentfulNsDzialanieData.image.url} alt='' />
            </Col>
          </Row>
          <Row className='px-0 second-action-container' ref={ref7}>
            <Col xs='12' className='px-0'>
              <h3>{contentfulNsPoprawaData.title}</h3>
              <p>
                {contentfulNsPoprawaData.subtitle}
              </p>
            </Col>
            <Col xs='12' md='6'>
              <img
                className='action-image-left solution-image'
                src={contentfulNsPoprawaData.image.url}
                alt=''
              />
            </Col>
            <Col xs='12' md='6'>
              <img
                className='action-image-right solution-image-2 bottom'
                src={contentfulNsPoprawaData.secondImage.url}
                alt=''
              />
            </Col>
          </Row>
        </ActionWrapper>
      </ActionSection>
      {/* <ShoppingSection>
        <ShoppingWrapper>
          <a href={contentfulNsKupData.link}>
            <img src={bag} alt='' />
            <span>{contentfulNsKupData.button}</span>
          </a>
          <p>{contentfulNsKupData.text}</p>
        </ShoppingWrapper>
      </ShoppingSection> */}
      <SolutionsSection>
        <SolutionsWrapper className='solutions-wrapper'>
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
              <Link to="/rozwiazanie-dla-biznesu" className='btn-about'>
                {' '}
                <img src={buttonIcon} alt='' />{' '}
                <span>{contentfulRozwiazaniedlabiznesuData.button}</span>
              </Link>
            </Col>
						<Col lg='5' ref={ref8}>
							<SolutionImage
								className='d-lg-none'
								src={contentfulRozwiazaniedlabiznesuData.imageMobile.url}
								alt=''
							/>
							<SolutionImage
								className=' d-none d-lg-block img-about solution-image-3'
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

export default OurTests;




export const query = graphql`
query MyQuery {
	allContentfulNsHero {
	  nodes {
	    content
	    itemBottom
	    itemBottomNumber
	    itemTop
			node_locale
	    itemTopNumber
	    subtitle
	    title
	    seoMetaDescription {
        seoMetaDescription
      }
      seoTitle
	    researchDescription
      researchParagraph {
        researchParagraph
      }
	  }
	}
	allContentfulNsDzialanie {
	  nodes {
			node_locale
	    image {
		 url
	    }
	    subtitle
	    title
	  }
	}
	allContentfulNsPoprawa {
	  nodes {
			node_locale
	    image {
		 url
	    }
	    secondImage {
		url
	    }
	    title
	    subtitle
	  }
	}
	allContentfulNsKup {
    nodes {
      button
      link
      text
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
   }`;