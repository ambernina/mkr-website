import React from "react";
import {Route, Switch} from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

import HomeSpan from "../components/HomeSpan";
import ContactSpan from "../components/ContactSpan";

const MKRJumbotron = () => {
	return (
		<Jumbotron>
			<h1 className="header">
				{' '}
				<Switch>
					<Route path="/contact">
						<ContactSpan />
					</Route>
					<Route path="/">
						<HomeSpan />
					</Route>
				</Switch>
			</h1>
		</Jumbotron>
	);
};

export default MKRJumbotron;
