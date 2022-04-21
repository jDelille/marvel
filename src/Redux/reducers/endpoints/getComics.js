const getComics = (state = `/comics`, action) => {
	switch (action.type) {
		case 'getComics':
			return (state = action.payload);
		default:
			return state;
	}
};

export default getComics;
