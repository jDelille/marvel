import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import './Related.scss';
const Related = () => {
	const [related, setRelated] = useState([]);

	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	const charURL = useSelector((state) => state.charURL);
	const comicId = useSelector((state) => state.comicId);

	useEffect(() => {
		fetch(
			`${charURL}/comics?dateRange=1990-01-01%2C2006-01-02&ts=${ts}&apikey=${apiKey}&hash=${hash}`
		)
			.then((res) => res.json())
			.then((data) => {
				setRelated(data.data.results);
			});
	}, [charURL, comicId]);
	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { changeComicId, changeCharURL } = bindActionCreators(
		actionCreators,
		dispatch
	);
	return (
		<div className='related'>
			<h1> Related Comics </h1>
			<div className='show-related-comics'>
				{related.map((item) => {
					if (
						item.thumbnail.path !==
						'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'
					)
						return (
							<img
								onClick={() => {
									changeComicId(item.id);
									changeCharURL(item?.characters?.items[0]?.resourceURI);
								}}
								className='comic-img-sm'
								src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
								alt={item.title}
							/>
						);
				})}
			</div>
		</div>
	);
};

export default Related;
