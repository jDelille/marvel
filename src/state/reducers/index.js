// Combine reducers in this file.
import { combineReducers } from 'redux';
import char from './character-reducers/charReducer';
import letter from './letterReducer';
import charURL from './character-reducers/charURLReducer';
import comicId from './comic-reducers/comicIDReducer';
import relatedComics from './character-reducers/relatedComicsReducer';
import movieId from './movie-reducers/movieIDReducer';
const reducers = combineReducers({
	char: char,
	letter: letter,
	charURL: charURL,
	comicId: comicId,
	relatedComics: relatedComics,
	movieId: movieId,
});

export default reducers;
