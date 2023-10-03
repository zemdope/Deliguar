import React, { useState, useEffect } from 'react';
import {Wrapper,InnerWrapper} from '../assets/styles/pages/Cookie-banner.styles';
import Pprivacy from '../assets/images/pp-deliguard.pdf';
function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, []);


  const handleDisableClick = () => {
	localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  return (
    showBanner && (
      <Wrapper>
<InnerWrapper>
	   <svg width="119" height="120" viewBox="0 0 119 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M114.448 71.3746C109.28 96.8363 86.7687 116 59.782 116C28.9744 116 4 91.026 4 60.2182C4 31.2935 26.0154 7.51061 54.2038 4.71191" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.1019 49.0621C27.5615 49.0621 26.3128 47.8133 26.3128 46.273C26.3128 44.7326 27.5615 43.4839 29.1019 43.4839C30.6423 43.4839 31.891 44.7326 31.891 46.273C31.891 47.8133 30.6423 49.0621 29.1019 49.0621Z" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M107.197 15.5931C105.656 15.5931 104.408 14.3444 104.408 12.804C104.408 11.2636 105.656 10.0149 107.197 10.0149C108.737 10.0149 109.986 11.2636 109.986 12.804C109.986 14.3444 108.737 15.5931 107.197 15.5931Z" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M59.782 99.266C56.7011 99.266 54.2038 96.7687 54.2038 93.6878C54.2038 90.607 56.7011 88.1096 59.782 88.1096C62.8628 88.1096 65.3602 90.607 65.3602 93.6878C65.3602 96.7687 62.8628 99.266 59.782 99.266Z" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.891 77.0085L31.9468 76.9465" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M87.673 77.0085L87.7287 76.9465" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54.2038 60.2731L54.2596 60.2112" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M109.986 43.5393L110.042 43.4773" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M87.673 26.8044L87.7287 26.7424" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54.2036 4.43652C51.4145 12.8038 56.9921 21.1711 65.8369 21.1711C54.2036 40.6948 65.36 60.2185 93.2509 57.4294C93.2509 71.3749 107.196 74.164 113.889 71.4508" stroke="#5E286D" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
<div>
<h2>Ciasteczka... Pychota....</h2>
        <p>
          Strona wykorzystuje pliki cookies m.in. w celu poprawienia jej dostępności, personalizacji, obsługi kont użytkowników czy aby zebrać dane, dotyczące ruchu na stronie. Każdy może sam decydować o tym czy dopuszcza pliki cookies, ustawiając odpowiednio przeglądarkę. Więcej informacji znajdziesz w <a href={Pprivacy} target='blank'>Polityce Prywatności</a>
        </p>
	   </div>
        <div className="button-container">
          <a role="button" className="disable-button" onClick={handleDisableClick}>Akceptuję wszystkie</a>
        </div>
	   </InnerWrapper>
      </Wrapper>
    )
  );
}

export default CookieBanner;