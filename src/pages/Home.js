import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutParagraph from "../components/AboutParagraph";
import LinkedInImg from "../components/LinkedInImg";

const HomePage = () => {
	return (
		<Container className="p-3">
			<h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
				About Dr. Marla K. Robertson
			</h2>
			<Row>
				<Col>
					<LinkedInImg />
				</Col>
				<Col>
					<AboutParagraph />
				</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
