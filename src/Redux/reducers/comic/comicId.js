const comicId = (state = 0, action) => {
	switch (action.type) {
		case 'comicId':
			return (state = action.payload);
		default:
			return state;
	}
};

export default comicId;
