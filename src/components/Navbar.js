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
import logo from '../assets/images/logo.png';
import logoText from '../assets/images/logoText.png';
import ig from '../assets/images/insta.svg';
import fb from '../assets/images/fb.svg';
import yt from '../assets/images/yt.svg';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavigation = () => {
		setIsOpen(!isOpen);
	};

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
						<Link to='/about'>O produkcie</Link>
					</li>
					<li>
						<Link to='/'>Nasze Badania </Link>
					</li>
					<li>
						<Link to='/business'>Rozwiązanie dla biznesu </Link>
					</li>
					<li>
						<Button>Spróbuj</Button>
					</li>
					<SocialWrapper isOpen={isOpen}>
						<a href=''>
							<img src={ig} alt='' />
						</a>
						<a href=''>
							<img src={fb} alt='' />
						</a>
						<a href=''>
							<img src={yt} alt='' />
						</a>
					</SocialWrapper>
				</List>
			</Navigation>
		</Header>
	);
};

export default Navbar;
