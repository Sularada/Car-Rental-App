import { CardItem } from "../../molecules/Card";
import { Col, Container, Row } from "react-bootstrap";
import ReservationForm from "../../organisms/ReservationForm";

const ReservationTemplate = ({ car, updateRentalState, id }) => {
  return (
    <Container>
      <h2>Araç Kiralama Formu</h2>
      <Row>
        <Col md={6} lg={4}>
          {car && <CardItem car={car} />}
        </Col>
        <Col md={6} lg={8} className="my-3">
          <ReservationForm updateRentalState={updateRentalState} id={id} />
        </Col>
      </Row>
    </Container>
  );
};

export default ReservationTemplate;
