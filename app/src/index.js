import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {AboutUs} from "./pages/AboutUs";
import "./index.css";
import {faHome, faPencilAlt, faSortDown, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {NavBar} from "./shared/components/NavBar";

library.add(faPencilAlt, faUserCircle, faSortDown);

const Routing = () => (
	<>

		<BrowserRouter>
			<NavBar/>
			<Switch>
				<Route exact path="/about-us" component={AboutUs} />
				<Route exact path="/" component={Home} />
				<Route component={FourOhFour} />
			</Switch>
		</BrowserRouter>
	</>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));