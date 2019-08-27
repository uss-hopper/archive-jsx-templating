import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Container from "react-bootstrap/es/Container";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import {getAllPosts} from "../shared/actions/post";


export const Posts = () => {

	const posts = useSelector(state => state.posts ? state.posts : []);

	console.log(posts);

	const dispatch = useDispatch();

	const effectInputs = undefined;

	useEffect(() => {
		dispatch(getAllPosts())
	}, []);

	return (
		<>
			<main className="my-5">
				<Container fluid="true" className="container-fluid text-center text-sm-left">

					<Row className=" mb-3">
						<Col>
							<h1>Meow Forum</h1>
						</Col>
					</Row>

					<Row>

						<Card bg="shadow-light" className="border-0 rounded-6 col">
							<Card.Body>
								<Card.Text>
									<Form>
										<Form.Group>
											<InputGroup>
												<FormControl placeholder="Title Goes Here"/>
											</InputGroup>
										</Form.Group>

										<Form.Group>
											<InputGroup>
												<InputGroup.Prepend>
													<InputGroup.Text>
														<FontAwesomeIcon icon="dog"/>
													</InputGroup.Text>
												</InputGroup.Prepend>
												<FormControl as="textarea" placeholder="Meow Meow Goes Here"/>
												<InputGroup.Append>
													<Button variant="primary" type="submit"> Submit <FontAwesomeIcon
														icon="envelope"/></Button>
												</InputGroup.Append>
											</InputGroup>
										</Form.Group>

									</Form>
								</Card.Text>
							</Card.Body>
						</Card>
						<CardColumns className="p-4">

							{
								posts.map(post => (
									<Card className="card text-center">
										<div className="card-body">
											<Card.Title>{post.postTitle}</Card.Title>
											<Card.Text>
												{post.postContent}
												<small className="text-muted">{post.postDate}</small>
											</Card.Text>
										</div>
									</Card>))
							}
						</CardColumns>
					</Row>

				</Container>
			</main>
		</>
	)
};