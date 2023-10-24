import styled from 'styled-components';
import plus from '../../images/plus5.svg';
export const Wrapper = styled.div`
padding-top: 45px;
        
@media (min-width: 1024px) {
    
    padding-top: 5rem;
}
@media (min-width: 1280px) {
    padding-top: 10rem;
}
.details {
    display:flex;
    gap:20px;
}
.date {
    span {
        color: #5E286D;
        vertical-align:bottom;
    }
}
.profile {
    position: relative;
    display: inline-block;
    span {
        color: #5E286D;
        vertical-align:bottom;
    }
}
.profile::after {
    position: absolute;
    right: -10px;
    top: 20%;
    display:block;
    content: '';
    height: 60%;
    width: 1px;
    background-color: #5E286D;
}
.half-width {
    @media (min-width: 1024px) {
        display:inline-block;
        width: 50%;
        padding-inline: 20px;
    }
  
}
.image-mobile {
    @media (min-width: 1024px) {
       display:none !important;
    }
}
.image-desktop {
    @media (max-width: 1024px) {
       display:none !important;
    }
}
a {
    color: #5E286D;
    font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
display:flex;
align-items: center;

gap:5px;
svg {
    width: 20px;
    height: 20px;
}
   
}
.image-half-width {
    width:100%;
    object-fit:cover;
    margin-top:30px;
    margin-bottom: 10px;
    @media (min-width:1024px) {
        width: 50%;
        margin-top:50px;
        margin-bottom: 20px;
    }


}
.image-full-width {
    width: 100%;
    display:block;
    object-fit:cover;
    margin-top:30px;
    margin-bottom: 10px;
    @media (min-width: 768px) {
        margin-top:50px;
        margin-bottom: 20px;
    }
}
padding-inline: 18px;
margin-top: 70px;
max-width: 1440px;
margin-inline: auto;
    @media (min-width: 480px) {
        padding-inline: 32px;
        margin-inline: auto;
    }
    @media (min-width: 768px) {
        padding-inline: 90px;

    }
    @media (min-width: 1024px) {
        padding-inline: 110px;
        margin-top: 102px;
    }
    @media (min-width: 1280px) {
        padding-left: 165px;
    }
    h1 {
        font-size: ${({ theme }) => theme.font.size.headingMobile};
        color: ${({ theme }) => theme.color.orange};
        font-weight: 700;
        line-height: 3.6rem;
        margin-bottom: 0;
        // padding-top: 45px;
        margin-bottom: 40px;
        ${({ theme }) => theme.mq.tablet} {
            
            font-size: 7.2rem;
            line-height: 7.6rem;
        }
        @media (min-width: 1024px) {
            
            font-size: 7.2rem;
            line-height: 7.6rem;
            // padding-top: 5rem;
            margin-bottom: 60px;
        }
        // @media (min-width: 1280px) {
        //     padding-top: 10rem;
        // }
    }
    p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.color.purple};
        font-weight: 400;
        line-height: 2rem;
        margin: 0;
        margin-top: 10px;

        ${({ theme }) => theme.mq.tablet} {
            font-size: 1.8rem;
            line-height: 2.8rem;
        }
    }
    ul {
        list-style: none;
        margin-top: 16px;
        @media (min-width: 1024px) {
            padding-left:50px;
            margin-top: 25px;
        }
        li {
            background: url(${plus}) no-repeat left 4px;
            background-size: 13px 13px; 
            padding-left: 20px; 
            font-size: 1.4rem;
        color: ${({ theme }) => theme.color.purple};
        font-weight: 400;
        line-height: 2rem;
        margin-bottom: 6px;

        ${({ theme }) => theme.mq.tablet} {
            font-size: 1.8rem;
            line-height: 2.8rem;
            margin-bottom: 10px;
            background-size: 20px 20px; 
            padding-left: 30px; 
        }
        }
    } 
    .hero-image {
        width: 100%;
        display:block;
        object-fit: cover;
        margin-top: 8px; 
        margin-bottom: 30px;
        @media (min-width: 768px) {
            margin-top: 18px; 
        margin-bottom: 36px;
        }
    }
    h2 {
        color: #5E286D;

font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 125% */
margin-top: 40px;
margin-bottom: 20px;
@media (min-width: 768px) {
    margin-top: 50px;
    color: #5E286D;
    font-family: "Americane";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 70% */
    margin-bottom: 30px;
   
}
    }
   
`
