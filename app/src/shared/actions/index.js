import {httpConfig} from "../misc/http-config";

export const getAllPosts = () => async dispatch => {
	const {data} = await httpConfig("/apis/post/");
	dispatch({type: "GET_ALL_POSTS", payload: data})
};

export const getPostByPostId = (id) => async dispatch => {
	const {data} = await httpConfig(`/apis/post/${id}`);
	dispatch({type: "GET_POST", payload: data})
};
