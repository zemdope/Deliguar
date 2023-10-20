//blog.js

import React, {useRef, useState} from 'react';
import { Wrapper, BlogItem } from '../assets/styles/pages/Blog.styles.js';
import Layout from '../components/Layout';
import BlogImage from '../assets/images/blog.png';
import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import arrowPrev from '../assets/images/arrowPrev.svg';
import arrowNext from '../assets/images/arrowNext.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { graphql, useStaticQuery, Link } from 'gatsby'; 
import { ButtonSliderWrapper } from '../assets/styles/pages/Index.styles.js';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    // Add more custom renderers for different content types
  },
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
    // Add more custom renderers for text formatting
  },
};

const BlogPost = () => {
    const swiperMobileRef = useRef();

     // Fetch blog post data from Contentful
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost {
        edges {
          node {
            id
            title
            content {
              raw
            }
          }
        }
      }
  }
`);

const blogData = data.allContentfulBlogPost.edges.map((edge) => edge.node);
    // Number of blog items to display on each slide
    const itemsPerSlide = 5;


   // Group blog items into slides
   const slides = [];
   for (let i = 0; i < blogData.length; i += itemsPerSlide) {
       const blogItems = blogData.slice(i, i + itemsPerSlide); 
       slides.push(
           <SwiperSlide key={i}>
               <div className="slide">
               {blogItems.map((blog, index) => (
  <BlogItem key={index}>
    <Row>
      <Col xs='6' lg='4'>
        <img src={BlogImage} alt="" />
      </Col>
      <Col xs='6' lg='8' className='text-container'>
        <h2>{blog.title}</h2>
        <Link to={`/blog/${blog.id}`}>Czytaj dalej</Link>
      </Col>
    </Row>
  </BlogItem>
))}
               </div>
           </SwiperSlide>
       );
   }

   return (
       <Layout>
           <Wrapper>
               <h1>Wykorzystaj w pełni każdą chwilę ze swoim zwierzakiem</h1>
               <p>
               Postbiotyki to nowa generacja suplementów diety dla zwierząt towarzyszących. DeliGuard jest jedynym w Polsce postbiotykiem dla psów i kotów, którego działanie zostało udowodnione w badaniach z udziałem 100 przedstawicieli różnych ras psów i kotów. Działając holistycznie i wspomagając zdrowie jelit naszych pupili, DeliGuard pozwala zaobserwować m.in. wyraźną poprawę trawienia, redukcję kamienia nazębnego oraz uzyskanie zdrowszej i lśniącej sierści. 

               </p>

               <Swiper
                   slidesPerView={1}
                   spaceBetween={20}
                   modules={[Navigation, Keyboard,Pagination, Autoplay]}
                   pagination={{ clickable: true }}
                   autoHeight={true}
                   navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }}
               >
                   {slides}
                   <ButtonSliderWrapper>
								<button
									onClick={() =>
										swiperMobileRef.current?.slidePrev()
									}
									className='swiper-button-prev'>
									<img src={arrowPrev} alt='' />
								</button>
								<button
									onClick={() =>
										swiperMobileRef.current?.slideNext()
									}
									className='swiper-button-next'>
									<img src={arrowNext} alt='' />
								</button>
							</ButtonSliderWrapper>
               </Swiper>
           </Wrapper>
       </Layout>
   );
};

export default BlogPost;