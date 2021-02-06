import React from "react";
import Container from "react-bootstrap/Container";

import "../assets/App.css";
import MKRNav from "./Navbar";
import MKRJumbotron from "./Jumbotron";

const AllContent = () => {
	return (
    <>
    <MKRNav />
			<MKRJumbotron />
		<Container fluid className="p-3">
      
		</Container>
    </>
	);
};

export default AllContent;
