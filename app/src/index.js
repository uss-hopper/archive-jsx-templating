import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Home} from "./pages/Home";
import {FourOhFour} from "./pages/FourOhFour";
const Routing = () => (
	<>

			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route component={FourOhFour}/>
				</Switch>
			</BrowserRouter>

	</>
);


ReactDOM.render(<Routing/>, document.querySelector('#root'));