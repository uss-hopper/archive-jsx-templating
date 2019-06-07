import React from "react"
import {FormDebugger} from "../../shared/components/FormDebugger";

export const PostFormContent = (props) => {

	const {
		status,
		values,
		errors,
		touched,
		dirty,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset
	} = props;
	return (
		<>
			<form onSubmit={handleSubmit}>

				<div className="form-group">
					<div className="input-group">

						<input id="postTitle"

								 type="text"
								 className="form-control"
								 placeholder="title stuff goes here"
								 onChange={handleChange}
								 onBlur={handleBlur}
								 value={values.postTitle}

						/>
						{
							errors.postTitle && touched.postTitle && (
								<div className="alert alert-danger">
									{errors.postTitle}
								</div>
							)

						}

					</div>
					<div className="form-group">
						<div className="input-group">
					<textarea id="postContent"
								 className="form-control"
								 placeholder="post stuff here"
								 onChange={handleChange}
								 onBlur={handleBlur}
								 value={values.postContent}
					/>
							{
								errors.postContent && touched.postContent && (
									<div className="alert alert-danger">
										{errors.postContent}
									</div>
								)

							}

						</div>
					</div>
				</div>
				<div className="text-md-right">
					<button className="btn btn-primary" type="submit">Submit</button>
					<button
						className="btn btn-danger mb-2"
						onClick={handleReset}
						disabled={!dirty || isSubmitting}
					>Reset
					</button>
				</div>
				<FormDebugger {...props} />
			</form>
			{status && (<div className={status.type}>{status.message}</div>)}

		</>

	)
};