import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser, faSignOutAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons'

import {Home} from "./pages/Home";
import {FourOhFour} from "./pages/FourOhFour";
import {NavBar} from "./shared/components/NavBar";
import "./index.css"


library.add(faUser, faSignOutAlt, faPencilAlt);

const Routing = () => (
	<>

			<BrowserRouter>
				<NavBar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route component={FourOhFour}/>
				</Switch>
			</BrowserRouter>

	</>
);


ReactDOM.render(<Routing/>, document.querySelector('#root'));