const movieId = (state = 1, action) => {
	switch (action.type) {
		case 'movieId':
			return (state = action.payload);
		default:
			return state;
	}
};

export default movieId;
