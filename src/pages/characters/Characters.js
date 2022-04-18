import React, { useEffect, useState } from 'react';
import Alphabet from '../../components/Alphabet/Alphabet';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { Link } from 'react-router-dom';
import '../../styles/Pages.scss';

const Characters = () => {
	const [data, setData] = useState([]);

	let ts = process.env.REACT_APP_TIMESTAMP;
	let apiKey = process.env.REACT_APP_API_KEY;
	let hash = process.env.REACT_APP_HASH;

	const letter = useSelector((state) => state.letter);

	// import dispatch
	const dispatch = useDispatch();
	// import from action-creators.
	const { updateCharacterId, updatedRelatedComics } = bindActionCreators(
		actionCreators,
		dispatch
	);

	useEffect(() => {
		fetch(
			`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${letter}&orderBy=name&limit=50&ts=${ts}&apikey=${apiKey}&hash=${hash}`
		)
			.then((res) => res.json())
			.then((data) => {
				setData(data.data.results);
			});
	}, [letter]);

	return (
		<div className='character-page'>
			<div className='search-alphabet'>
				<Alphabet />
			</div>
			<div className='character-container page'>
				{data.map((character) => {
					if (character.description)
						return (
							<Link
								to='/character'
								className='character-card'
								onClick={() => {
									updateCharacterId(character.id);
									updatedRelatedComics(character.comics.collectionURI);
								}}>
								<div className='img-container'>
									<img
										className='character-img'
										src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
										alt={character.title}
									/>
								</div>
								<div className='card-body'>
									<p>{character.name}</p>
									<p className='num-comics'>
										Comics: {character.comics.available}
									</p>
								</div>
							</Link>
						);
				})}
			</div>
		</div>
	);
};

export default Characters;
