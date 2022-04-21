import React from 'react';
import { useSelector } from 'react-redux';

import './Overlay.scss';
const MovieOverlay = ({ details }) => {
	// redux
	const movieId = useSelector((state) => state.movieId);

	return (
		<>
			<div
				className='movie-overlay'
				style={{
					backgroundImage: `url(${details?.poster_img})`,
					backgroundPosition: '0 -210px',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundBlendMode: 'darken',
				}}></div>
		</>
	);
};

export default MovieOverlay;
