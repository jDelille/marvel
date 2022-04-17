import React from 'react';
import './Overlay.scss';
const Overlay = ({ details }) => {
	return (
		<>
			{details.map((image) => {
				return (
					<div
						className='overlay'
						style={{
							backgroundImage: `url(${image.thumbnail.path}.${image.thumbnail.extension})`,
							backgroundPosition: '0 -210px',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundBlendMode: 'darken',
						}}></div>
				);
			})}
		</>
	);
};

export default Overlay;
