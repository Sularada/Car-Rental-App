import Container from "react-bootstrap/esm/Container";
import CardItem from "../../molecules/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const CardListSection = ({ cars }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={4}>
        {cars.map((car) => (
          <Col key={car.id}>
            <CardItem car={car} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardListSection;
