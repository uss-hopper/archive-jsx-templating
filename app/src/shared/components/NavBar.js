import React from "react"
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NavLink from "react-bootstrap/NavLink";

import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";

export const NavBar = () => (
	<>
		<header>
			<Navbar bg="dark" expand="sm" variant="dark">
				<Link exact to="/"><Navbar.Brand>ReactInfinity ÷ -0</Navbar.Brand> </Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav"/>
				<Navbar.Collapse>
					<Navbar.Text>
						Signed in as: <a href="*">Foo Bar Baz</a>
					</Navbar.Text>
					<NavDropdown title="CLICK ME" bg="dark" varient="dark" id="basic-nav-dropdown">
						<NavLink>
							<Link exact to="/about-us">
								About Us <FontAwesomeIcon icon="user-circle"/>
							</Link>
						</NavLink>
						<NavLink>
							<Link exact to="/posts">
								Posts <FontAwesomeIcon icon="pencil-alt"/>
							</Link>
						</NavLink>
					</NavDropdown>
				</Navbar.Collapse>
			</Navbar>
		</header>
	</>
);