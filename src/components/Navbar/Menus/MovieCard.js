import React from 'react';
import './Card.scss';

const MovieCard = ({ data }) => {
	return (
		<div className='movie-card'>
			<img src={data.poster_img} alt='' />
			<div className='info'>
				<h1>{data.title}</h1>
				<p>{data.date}</p>
			</div>
		</div>
	);
};

export default MovieCard;
