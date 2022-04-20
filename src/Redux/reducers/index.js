// Combine reducers in this file.
import { combineReducers } from 'redux';
import comicId from './comic-reducers/comicId';

const reducers = combineReducers({
	comicId: comicId,
});

export default reducers;
