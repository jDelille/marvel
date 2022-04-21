import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../Redux';
import './Card.scss';

const Card = ({ data, close }) => {
	
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateComicId } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className='card'>
			<Link to='/details'>
				<img
					onClick={() => {
						updateComicId(data.id);
						close();
					}}
					className='comic-img'
					src={`${data?.thumbnail?.path}.${data?.thumbnail?.extension}`}
					alt={data?.title}
				/>
			</Link>

			<p>{data.title}</p>
		</div>
	);
};

export default Card;
