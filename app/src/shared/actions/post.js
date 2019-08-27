import {httpConfig} from "../utils/http-config";
export const getAllPosts = () => async dispatch => {
	const {data} = await httpConfig('/apis/post/');
	dispatch({type: "GET_ALL_POSTS", payload: data })
};


// export function getAllPosts() {
// 	return async function(dispatch) {
// 		const {data} = await httpConfig("apis/post");
// 		dispatch({type: "GET_ALL_POSTS", payload: data})
// 	}
// }