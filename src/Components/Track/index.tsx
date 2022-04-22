import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Track = ({ items }: any) => {
  return (
    <Container fluid>
      <Row>
        <Col className="align-items-center w-100 h-100 d-flex align-items-center justify-content-center">
          <Col className="grid-column-song  ">{items}</Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Track;
