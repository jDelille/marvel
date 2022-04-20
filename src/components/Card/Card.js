import React from 'react';
import './Card.scss';

const Card = ({ data }) => {
	return (
		<div className='card'>
			<img
				className='comic-img'
				src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
				alt={data?.title}
			/>
			<p>{data.title}</p>
		</div>
	);
};

export default Card;
