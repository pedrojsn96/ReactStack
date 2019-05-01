import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/user/:id" component={User} />
		</Switch>
	</BrowserRouter>
);
export default Routes;
