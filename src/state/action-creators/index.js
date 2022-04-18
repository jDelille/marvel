// update the character id
export const updateCharacterId = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'character',
			payload: amount,
		});
	};
};

// store comic data from api
export const setComics = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'comics',
			payload: amount,
		});
	};
};

// change letter for character search
export const changeLetter = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'letter_select',
			payload: amount,
		});
	};
};

// change character url
export const changeCharURL = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'charURL',
			payload: amount,
		});
	};
};

// change comic id
export const changeComicId = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'comicId',
			payload: amount,
		});
	};
};

// change comic id
export const plusCharId = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'character',
			payload: amount,
		});
	};
};

// change id for related comics (character page)
export const updatedRelatedComics = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'related_comics',
			payload: amount,
		});
	};
};

// change id for selected movie
export const updateMovieId = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'movieId',
			payload: amount,
		});
	};
};
