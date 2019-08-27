import {combineReducers} from "redux";
import {post} from "./post";




export const reducers = combineReducers({
	posts : post,
});