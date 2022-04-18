import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import './Card.scss';

const Card = ({ comic }) => {
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { changeComicId, changeCharURL } = bindActionCreators(
		actionCreators,
		dispatch
	);

	return (
		<div className='comic-card' key={comic.id}>
			<Link
				to='/details'
				onClick={() => {
					changeComicId(comic.id);
					changeCharURL(comic?.characters?.collectionURI);
				}}>
				<img
					className='comic-img'
					src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
					alt={comic.title}
				/>
			</Link>
			<p className='comic-title'>{comic.title}</p>
			{/* {comic?.creators?.items.map((author) => {
				if (author.role === 'writer') {
					return (
						<p className='comic-author' key={author.id}>
							{author.name}
						</p>
					);
				}
			})} */}
		</div>
	);
};

export default Card;
