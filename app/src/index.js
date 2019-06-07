import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser, faSignOutAlt, faPencilAlt} from '@fortawesome/free-solid-svg-icons'

import {Home} from "./pages/Home";
import {FourOhFour} from "./pages/FourOhFour";
import {NavBar} from "./shared/components/NavBar";
import "./index.css";
import reducers from "./shared/reducers";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {Posts} from "./pages/posts/Posts";


library.add(faUser, faSignOutAlt, faPencilAlt);

const store = createStore(reducers, applyMiddleware(thunk));

const Routing = (store) => (

	<>
		<Provider store={store}>
			<BrowserRouter>
				<NavBar/>
				<Switch>
					<Route exact path="/posts" component={Posts}/>
					<Route exact path="/" component={Home}/>
					<Route component={FourOhFour}/>
				</Switch>
			</BrowserRouter>
		</Provider>
	</>
);


ReactDOM.render(Routing(store), document.querySelector('#root'));