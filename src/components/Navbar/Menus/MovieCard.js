import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../Redux';
import './Card.scss';

const MovieCard = ({ data, close }) => {
	const dispatch = useDispatch();
	const { updateMovieId } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className='menu-card'>
			<Link to='/movie_details'>
				<img
					className='img'
					onClick={() => {
						updateMovieId(data.id);
						close();
					}}
					src={data.poster_img}
					alt=''
				/>
			</Link>
			<div className='menu-card-info'>
				<p className='card-title'>{data.title}</p>
			</div>
		</div>
	);
};

export default MovieCard;
