const relatedComicsReducer = (state = '', action) => {
	switch (action.type) {
		case 'related_comics':
			return (state = action.payload);
		default:
			return state;
	}
};

export default relatedComicsReducer;
