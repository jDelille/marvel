import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import './Card.scss';

const Card = ({ movies }) => {
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateMovieId } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className='movies-card' key={movies.id}>
			<Link to='/movie_details' onClick={() => updateMovieId(movies.id)}>
				{movies.cover_url ? (
					<img
						className='movies-img'
						src={movies.cover_url}
						alt={movies.title}
					/>
				) : (
					<div className='img-container'>
						<img
							className='movies-img-null'
							src='../images/no-img.jpg'
							alt=''
						/>
					</div>
				)}
			</Link>

			<p className='movies-title'>{movies.title}</p>
		</div>
	);
};

export default Card;
