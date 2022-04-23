import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ComicMenu from './Comics/ComicMenu';
import './Mobile.scss';
import MovieMenu from './Movies/MovieMenu';

const Mobile = ({ showMobileMenu, setShowMobileMenu }) => {
	// state
	const [comicMenu, setComicMenu] = useState(false);
	const [movieMenu, setMovieMenu] = useState(false);

	function close() {
		setComicMenu(false);
		setShowMobileMenu(false);
	}

	return (
		<div
			className='mobile-menu'
			style={{ left: showMobileMenu ? '0vw' : '-100vw' }}>
			<div className='controls'>
				<AiOutlineClose
					style={{ color: 'white' }}
					onClick={() => setShowMobileMenu(false)}
				/>
			</div>
			<div className='links'>
				<p onClick={() => setComicMenu(true)}>
					Comics
					<span>
						<AiOutlineRight />
					</span>
				</p>
				<p onClick={() => setMovieMenu(true)}>
					Movies
					<span>
						<AiOutlineRight />
					</span>
				</p>
				<Link to='about' onClick={() => close()}>
					About
					<span>
						<AiOutlineRight />
					</span>
				</Link>
			</div>
			<ComicMenu
				comicMenu={comicMenu}
				setComicMenu={setComicMenu}
				setShowMobileMenu={setShowMobileMenu}
			/>
			<MovieMenu
				movieMenu={movieMenu}
				setMovieMenu={setMovieMenu}
				setShowMobileMenu={setShowMobileMenu}
			/>
		</div>
	);
};

export default Mobile;
