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
		<>
			<nav>
				<div className='nav-content'>
					<div className='logo'></div>
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
						}}>
						Comics
					</p>
					<p
						className={movieMenu ? 'underline' : 'no-underline'}
						onMouseOver={() => {
							close();
							setMovieMenu(true);
						}}>
						Movies
					</p>
				</div>
			</div>
		</>
	);
};

export default Navbar;
