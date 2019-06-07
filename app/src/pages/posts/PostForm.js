import React from "react";
import {httpConfig} from "../../shared/misc/http-config";
import {Formik} from "formik";
import * as Yup from "yup";
import {PostFormContent} from "./PostFormContent";

export const PostForm = () => {

	const validator = Yup.object().shape({
		postContent: Yup.string()
			.min(3, "at least three characters are necessary to post a post")
			.max(1024, "content is way long")
			.required("you must have something to post about to upload a post"),
		postTitle: Yup.string()
			.max(64, "title is to long")
			.required("title is required")
	});

	const initialValues = {
		postContent: "",
		postTitle: ""
	};

	const submitPost = (values, b) => {
		const {resetForm, setStatus} = b;
		console.log(b);
		httpConfig.post("/apis/post/", values).then(
			reply=> {
				if (reply.status === 200) {
					resetForm()
				}

			}
		)
	};

	return(
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validator}
				onSubmit={submitPost}
			>
				{PostFormContent}
			</Formik>
		</>
	)

};