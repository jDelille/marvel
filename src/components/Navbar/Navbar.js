import React, { useState } from 'react';
import './Navbar.scss';
import ComicMenu from './Menus/ComicMenu';
import MovieMenu from './Menus/MovieMenu';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const [movieMenu, setMovieMenu] = useState(false);
	const [about, setAbout] = useState(false);

	function close() {
		setMenu(false);
		setMovieMenu(false);
	}

	return (
		<>
			<nav>
				<div className='nav-content'>
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
			<div className='sub-nav'>
				<div className='links'>
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
		</>
	);
};

export default Navbar;
