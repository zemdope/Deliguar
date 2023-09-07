import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
	List,
	StyledBurger,
	Navigation,
	Header,
	LogoLink,
	Button,
	SocialWrapper
} from '../assets/styles/pages/Navbar.styles';
import menu from '../assets/images/menu.svg';
import close from '../assets/images/close.svg';
import logo from '../assets/images/newLogo.svg';
import logoText from '../assets/images/logoText.png';
import ig from '../assets/images/insta.svg';
import fb from '../assets/images/fb.svg';
import yt from '../assets/images/yt.svg';


const Navbar = ({data}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavigation = () => { 
		setIsOpen(!isOpen);
	};
	console.log(data)

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
				<List isOpen={isOpen}>
					<li>
						<Link to='/o-produkcie'>O produkcie</Link>
					</li>
					<li>
						<Link to='/nasze-badania'>Nasze Badania </Link>
					</li>
					<li>
						<Link to='/rozwiazanie-dla-biznesu'>
							Rozwiązanie dla biznesu{' '}
						</Link>
					</li>
					<li> 
						<Button href="https://allegro.pl/oferta/suplement-dla-psa-i-kota-na-trawienie-deliguard-14236919045">Spróbuj</Button>
					</li>
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

