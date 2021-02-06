import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "../assets/App.css";
import MKRNav from "./Navbar";
import MKRJumbotron from "./Jumbotron";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";

const AllContent = () => {
	return (
		<>
			<MKRNav />
			<MKRJumbotron />
			<Container>
				<Switch>
					<Route path="/contact">
						<ContactPage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Container>
		</>
	);
};

export default AllContent;
