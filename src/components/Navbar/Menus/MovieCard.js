import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../Redux';
import './Card.scss';

const MovieCard = ({ data, close }) => {
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateMovieId } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className='card'>
			<Link to='/movie_details'>
				<img
					className='movie-img'
					onClick={() => {
						updateMovieId(data.id);
						close();
					}}
					src={data.poster_img}
					alt=''
				/>
			</Link>

			<div className='info'>
				<p className='movie-title'>{data.title}</p>
			</div>
		</div>
	);
};

export default MovieCard;
