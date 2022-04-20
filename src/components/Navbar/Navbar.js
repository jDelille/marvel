import React, { useState } from 'react';
import './Navbar.scss';
import ComicMenu from './Menus/ComicMenu';
import MovieMenu from './Menus/MovieMenu';
const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const [movieMenu, setMovieMenu] = useState(false);

	function close() {
		setMenu(false);
		setMovieMenu(false);
	}

	return (
		<nav>
			<div className='nav-content'>
				<div className='logo'></div>
				<div className='links'>
					<p
						onMouseOver={() => {
							close();
							setMenu(true);
						}}>
						Comics
					</p>
					<p
						onMouseOver={() => {
							close();
							setMovieMenu(true);
						}}>
						Movies
					</p>
				</div>
			</div>
			(
			<ComicMenu setMenu={setMenu} menu={menu} close={close} />
			<MovieMenu
				setMovieMenu={setMovieMenu}
				movieMenu={movieMenu}
				close={close}
			/>
		</nav>
	);
};

export default Navbar;
