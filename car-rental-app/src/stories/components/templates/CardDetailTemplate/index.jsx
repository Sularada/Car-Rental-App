import React from "react";
import { DetailCardItem, PriceCardItem } from "../../molecules/Card";
import { Col, Container, Row } from "react-bootstrap";

const CarDetailTemplate = ({ car, id }) => {
  return car ? (
    <Container>
      <Row>
        <Col xs={12} lg={9} className="h-100">
          <DetailCardItem car={car} />
        </Col>
        <Col xs={12} lg={3} className="h-100">
          <PriceCardItem car={car} id={id} />
        </Col>
      </Row>
    </Container>
  ) : (
    <p>Araç bilgileri bulunamadı</p>
  );
};

export default CarDetailTemplate;
