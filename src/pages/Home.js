import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
	return (
		<Container className="p-3">
			<Row>
				<Col>
					<img
						src="https://media-exp1.licdn.com/dms/image/C4D03AQGw2ZW17Qfurg/profile-displayphoto-shrink_800_800/0/1516923170742?e=1617840000&v=beta&t=EbEriY5u3XXPqW7eoLjRcD0IQh-JDEZFS0fFZWadVVw"
						alt="Marla K. Robertson"
					/>
				</Col>
				<Col>Paragraph</Col>
			</Row>
		</Container>
	);
};

export default HomePage;
