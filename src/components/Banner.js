import React, { useState, useEffect, useRef} from 'react';

import { Wrapper } from '../assets/styles/pages/Banner.styles';


const Banner = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = useState(true);
  const bannerRef = useRef(null);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isVisible && bannerRef.current && !bannerRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    isVisible && (
     <Wrapper ref={bannerRef}>
		<div className="image-container">
        <img src={imageUrl} alt="Banner" />
        <button className="close-button" onClick={handleCloseClick}>
	   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>
        </button>
	   </div>
      </Wrapper>

    )
  );
};

export default Banner;

