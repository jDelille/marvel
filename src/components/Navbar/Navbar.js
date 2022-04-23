import React, { useState } from 'react';
import './Navbar.scss';
import ComicMenu from './Menus/ComicMenu';
import MovieMenu from './Menus/MovieMenu';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Mobile from './Mobile/Mobile';
const Navbar = () => {
	// state
	const [menu, setMenu] = useState(false);
	const [movieMenu, setMovieMenu] = useState(false);
	const [about, setAbout] = useState(false);
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	function close() {
		setMenu(false);
		setMovieMenu(false);
	}

	return (
		<>
			<nav>
				<div className='nav-content'>
					<div className='burger'>
						<FaBars onClick={() => setShowMobileMenu(true)} />
					</div>
					<div className='logo'>Marvel HQ</div>
				</div>
				(
				<ComicMenu setMenu={setMenu} menu={menu} close={close} />
				<MovieMenu
					setMovieMenu={setMovieMenu}
					movieMenu={movieMenu}
					close={close}
				/>
			</nav>
			<div className='sub-nav '>
				<div className='links desktop'>
					<p
						className={menu ? 'underline' : 'no-underline'}
						onMouseOver={() => {
							close();
							setMenu(true);
							setAbout(false);
						}}>
						Comics
					</p>
					<p
						className={movieMenu ? 'underline' : 'no-underline'}
						onMouseOver={() => {
							close();
							setMovieMenu(true);
							setAbout(false);
						}}>
						Movies
					</p>
					<Link
						to='about'
						className={about ? 'underline' : 'no-underline'}
						onClick={() => {
							setAbout(true);
							close();
						}}>
						About
					</Link>
				</div>
			</div>
			<Mobile
				setShowMobileMenu={setShowMobileMenu}
				showMobileMenu={showMobileMenu}
			/>
		</>
	);
};

export default Navbar;
