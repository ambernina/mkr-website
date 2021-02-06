import React from "react";
// import {Route, Switch} from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";

const MKRJumbotron = () => {
  return (
    <Jumbotron>
				<h1 className="header">Marla K. Robertson</h1>
				{/* <h2>
					Current page is{" "}
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</h2> */}
			</Jumbotron>
  )
}

export default MKRJumbotron;