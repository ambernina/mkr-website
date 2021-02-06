import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedInImg from "../components/LinkedInImg";

const HomePage = () => {
	return (
		<Container className="p-3">
			<Row>
				<Col>
					<LinkedInImg />
				</Col>
				<Col>Paragraph</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
