import React, { useState } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import product from '../assets/images/product.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
					<Row className='effect-content-wrapper'>
						<Col md='6' lg='7'>
							<SerumImage
								className='d-none d-lg-block'
								src={data.allContentfulOpZastosuj.nodes[0].image.url}
								alt=''
							/>
							<SerumImage
								className='d-lg-none'
								src={data.allContentfulOpZastosuj.nodes[0].image.url}
								alt=''
							/>
						</Col> 
						<Col xs='12' md='6' lg='5' className='effect-container'>
							<Row>
								<Col xs='12'>
									<Wrapper>
										<img src={data.allContentfulOpZastosuj.nodes[0].firstIcon.url} alt='' />

										<p>{data.allContentfulOpZastosuj.nodes[0].firstIconText}</p>
									</Wrapper>
								</Col>
								<Col xs='12'>
									<WrapperReverse className='wrapper-effect-reverse'>
										<img src={data.allContentfulOpZastosuj.nodes[0].secondIcon.url} alt='' />
										<p>{data.allContentfulOpZastosuj.nodes[0].secondIconText}</p>
									</WrapperReverse>
								</Col>
								<Col xs='12'>
									<Wrapper className='wrapper-effect'>
										<img src={data.allContentfulOpZastosuj.nodes[0].thidIcon.url} alt='' />
										<p>{data.allContentfulOpZastosuj.nodes[0].thirdIconText}</p>
									</Wrapper>
								</Col>
								<Col xs='12'>
									<WrapperReverse className='wrapper-effect-reverse'>
										<img src={data.allContentfulOpZastosuj.nodes[0].fourthIcon.url} alt='' />
										<p>{data.allContentfulOpZastosuj.nodes[0].fourthIcontext}</p>
									</WrapperReverse>
								</Col>
								<Col xs='12'>
									<Wrapper>
										<img src={data.allContentfulOpZastosuj.nodes[0].fifthIcon.url} alt='' />
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
						<Col xs='12' md='6'>
							<ImageSection src={data.allContentfulOpNaszeBadania.nodes[0].image.url} alt='' />
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
						<Col lg='5'>
							<SolutionImage
								className='d-lg-none'
								src={data.allContentfulRozwiazaniedlabiznesu.nodes[0].imageMobile.url}
								alt=''
							/>
							<SolutionImage
								className=' d-none d-lg-block img-about'
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
