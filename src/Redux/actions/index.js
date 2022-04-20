// update the comic id
export const updateComicId = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'comic_id',
			payload: amount,
		});
	};
};
