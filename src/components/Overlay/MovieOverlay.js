import React from 'react';
import './Overlay.scss';
const MovieOverlay = ({ details }) => {
	return (
		<>
			<div
				className='overlay'
				style={{
					backgroundImage: `url(${details.cover_url})`,
					backgroundPosition: '0 -210px',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundBlendMode: 'darken',
				}}></div>
		</>
	);
};

export default MovieOverlay;
