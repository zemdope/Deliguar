import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
	List,
	StyledBurger,
	Navigation,
	Header,
	SocialWrapper,
	LogoLink,
	Button
} from '../assets/styles/pages/Navbar.styles';
import menu from '../assets/images/menu.svg';
import close from '../assets/images/close.svg';
import logo from '../assets/images/logo.png';
import logoText from '../assets/images/logoText.png';

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
						<Link to='/'>Rozwiązanie dla biznesu </Link>
					</li>
					<li>
						<Button>Spróbuj</Button>
					</li>
				</List>
			</Navigation>
		</Header>
	);
};

export default Navbar;
