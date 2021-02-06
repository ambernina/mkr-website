import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="p-3">
        <Row>
          <Col>
          <img src={require("../assets/mkr-linkedin-photo.jpeg")} alt="Marla K. Robertson" />
          </Col>
          <Col>Paragraph</Col>
        </Row>
      </Container>
  )
}

export default HomePage;