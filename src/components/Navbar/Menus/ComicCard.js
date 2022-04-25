import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../Redux';
import './Card.scss';

const ComicCard = ({ data, close }) => {
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateComicId } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className='menu-card'>
			<Link to='/details'>
				<img
					onClick={() => {
						updateComicId(data.id);
						close();
					}}
					className='img'
					src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
					alt={data?.title}
				/>
			</Link>
			<div className='menu-card-info'>
				<p className='card-title'>{data.title}</p>
			</div>
		</div>
	);
};

export default ComicCard;
