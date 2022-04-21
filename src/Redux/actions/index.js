// update the comic id
export const updateComicId = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'comicId',
			payload: amount,
		});
	};
};

// update the movie id
export const updateMovieId = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'movieId',
			payload: amount,
		});
	};
};

// update the comic endpoint
export const updateComicEndpoint = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'getComics',
			payload: amount,
		});
	};
};

// update the date
export const updateDate = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'getDate',
			payload: amount,
		});
	};
};
