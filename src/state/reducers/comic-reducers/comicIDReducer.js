const comicId = (state = 10863, action) => {
	switch (action.type) {
		case 'comicId':
			return (state = action.payload);
		default:
			return state;
	}
};

export default comicId;
