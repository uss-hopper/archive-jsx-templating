export const post = (state = [], action ) => {
	switch(action.type) {
		case "GET_ALL_USERS":
			return action.payload;
		default:
			return state
	}
};