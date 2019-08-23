import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'



import {FourOhFour} from "./pages/FourOhFour";
import {Home} from "./pages/Home";
import {AboutUs} from "./pages/AboutUs";
import "./index.css";
import {
	faEnvelope,
	faPencilAlt,
	faSignInAlt,
	faSortDown,
	faUserCircle,
	faDog
} from "@fortawesome/free-solid-svg-icons";
import {NavBar} from "./shared/components/NavBar";
import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";
import {Posts} from "./pages/Posts";

library.add(faPencilAlt, faUserCircle, faSortDown, faEnvelope, faSignInAlt, faKey, faDog );

const Routing = () => (
	<>
		<BrowserRouter>
			<NavBar/>
			<Switch>
				<Route exact path="/about-us" component={AboutUs} />
				<Route exact path="/posts" component={Posts} />
				<Route exact path="/" component={Home} />
				<Route component={FourOhFour} />
			</Switch>
		</BrowserRouter>
	</>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));
