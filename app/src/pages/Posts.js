import React, {useEffect} from "react"
import {connect} from "react-redux";
import {getAllPosts, getPostByPostId} from "../shared/actions";

const PostComponent = ({posts, getAllPosts}) => {

	useEffect(() => {
		getAllPosts()

	}, [getAllPosts]);

	console.log(posts);
	return (
		<>
			<main className="my-5">
				<div className="container-fluid text-center text-sm-left">

					<div className="row mb-3">
						<div className="col">
							<h1>Meow Forum</h1>
						</div>
					</div>
					<div className="card-columns">
					{posts.map(post => (
						<div className="card" key={post.postId}>
							<div className="card-body">
								<h4 className="card-title">{post.postTitle}</h4>
								<p className="card-text">{post.postContent}</p>
							</div>
						</div>
					))}
					</div>
				</div>
			</main>
		</>
	)
};


const mapStateToProps = (reduxState) => {
	return {posts: reduxState.posts}

};
export const Posts = connect(mapStateToProps, {getAllPosts, getPostByPostId})(PostComponent);