import React from "react"
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => (
	<>
		<header>
			<Navbar bg="dark"  expand="lg">
				<NavBar.Brand
					href="https://bootcamp-coders.cnm.edu/~rlewis37/meow-app-5/static-ui/home-view.php">=^ Meow App 5
					^=</NavBar.Brand><small className="d-none d-md-inline-block text-muted mr-auto"><em>An Angularific
				Demo.</em></small>
				<Button className="navbar-toggler" type="button" data-toggle="collapse"
						  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
						  aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</Button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
								data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Hello, {{username}}
							</a>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#"><i className="fa fa-user"></i>&nbsp;&nbsp;My Profile</a>
								<a className="dropdown-item" href="posts-view.php"><i
									className="fa fa-pencil" />&nbsp;&nbsp;New Post</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#"><i className="fa fa-sign-out"></i>&nbsp;&nbsp;Sign Out</a>
							</div>
						</li>
					</ul>
				</div>
			</Navbar>
		</header>
	</>
)