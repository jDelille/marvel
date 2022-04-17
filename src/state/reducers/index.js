// Combine reducers in this file.
import { combineReducers } from 'redux';
import char from './character-reducers/charReducer';
import letter from './letterReducer';
import charURL from './character-reducers/charURLReducer';
import comicId from './comic-reducers/comicIDReducer';
import relatedComics from './character-reducers/relatedComicsReducer';
const reducers = combineReducers({
	char: char,
	letter: letter,
	charURL: charURL,
	comicId: comicId,
	relatedComics: relatedComics,
});

export default reducers;
