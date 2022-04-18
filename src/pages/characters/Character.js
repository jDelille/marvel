import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { Link } from 'react-router-dom';

import '../../styles/Pages.scss';
import Related from '../../components/Related/Related';

function Character() {
	const [details, setDetails] = useState([]);
	const [related, setRelated] = useState([]);
	const [loading, setLoading] = useState(false);

	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	let char = useSelector((state) => state.char);
	const relatedComics = useSelector((state) => state.relatedComics);


	useEffect(() => {
		fetch(
			`http://gateway.marvel.com/v1/public/characters/${char}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
		)
			.then((res) => res.json())
			.then((data) => {
				setDetails(data.data.results);
			});
		fetch(
			`${relatedComics}?dateRange=1970-01-01%2C2006-01-02&limit=50&ts=${ts}&apikey=${apiKey}&hash=${hash}`
		)
			.then((res) => res.json())
			.then((data) => {
				setRelated(data.data.results);
			});
	}, []);

	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { plusCharId } = bindActionCreators(actionCreators, dispatch);

	return (
		<>
			<div className='details page'>
				<div className='control-bar'>
					<Link to='/characters' className='back-btn'>
						Back
					</Link>
					<div className='switch-controls'></div>
				</div>
				<div className='character-content'>
					{details.map((character) => {
						// character img
						const { path, extension } = character.thumbnail;
						// character info
						const { title, name, description } = character;
						return (
							<>
								<div className='character-content'>
									<div className='img-container'>
										<img
											className='character-img'
											src={`${path}.${extension}`}
											alt={title}
										/>
									</div>
									<div className='info'>
										<h1 className='name'>{name}</h1>
										<p>{description}</p>
										<div className='comic-info'>
											<h2>
												Comics: <span>{character.comics.available}</span>
											</h2>
											<h2>
												Series: <span>{character.series.available}</span>
											</h2>
											<h2>
												Stories: <span>{character.stories.available}</span>
											</h2>
										</div>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
			<Related />
		</>
	);
}

export default Character;
