// Combine reducers in this file.
import { combineReducers } from 'redux';
import getDate from './date/date';
import getComics from './endpoints/getComics';
import comicId from './comic/comicId';
import movieId from './movie/movieId';

const reducers = combineReducers({
	getComics: getComics,
	getDate: getDate,
	comicId: comicId,
	movieId: movieId,
});

export default reducers;
