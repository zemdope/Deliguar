import React, { useState } from 'react';
import { Link} from 'gatsby';
import Menu from './getMenuItems';

import {
	List,
	StyledBurger,
	Navigation,
	Header,
	LogoLink,
	Button,
	SocialWrapper,
	ShopLink
} from '../assets/styles/pages/Navbar.styles';
import menu from '../assets/images/menu.svg';
import close from '../assets/images/close.svg';
import logo from '../assets/images/newLogo.svg';
import logoText from '../assets/images/logoText.png';
import ig from '../assets/images/insta.svg';
import fb from '../assets/images/fb.svg';
import yt from '../assets/images/yt.svg';
import card from '../assets/images/card.svg';
import { useIntl } from "gatsby-plugin-intl";


const Navbar = ({data}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavigation = () => { 
		setIsOpen(!isOpen);
	};
  const intl = useIntl();

	return (
		<Header>
			<Navigation>
				<LogoLink isOpen={isOpen} to='/'>
					<img src={isOpen ? logoText : logo} alt='' />
				</LogoLink>

				<StyledBurger isOpen={isOpen} onClick={toggleNavigation}>
					<img src={menu} alt='' />
					<img src={close} alt='' />
				</StyledBurger>
				<ShopLink href="https://allegro.pl/oferta/suplement-dla-psa-i-kota-na-trawienie-deliguard-14236919045"><img src={card} alt="" /></ShopLink>
				<List isOpen={isOpen}>
				{/* <Button>Kup teraz</Button> */}
				<Menu/>
					<SocialWrapper isOpen={isOpen}>
						<a href='https://www.instagram.com/deliguard.pets/'>
							<img src={ig} alt='' />
						</a>
						<a href='https://www.facebook.com/deliguard'>
							<img src={fb} alt='' />
						</a>
						<a href='https://www.youtube.com/@DeliGuard/'>
							<img src={yt} alt='' /> 
						</a>
					</SocialWrapper>
				</List>
			</Navigation>
		</Header>
	); 
};

export default Navbar;

