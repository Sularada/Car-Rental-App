import Container from "react-bootstrap/esm/Container";
import CardItem from "../../molecules/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { getFilteredCars } from "../../../../firebase/dbController";
const CardListSection = ({ filters }) => {
  const [cars, setCars] = useState();
  console.log(filters);
  useEffect(() => {
    fetchData();
  }, [filters]);
  async function fetchData() {
    setCars(
      await getFilteredCars(
        filters.model,
        filters.min,
        filters.max,
        filters.rentalState
      )
    );
  }
  return cars ? (
    <Container>
      {cars.length == 0 ? (
        <p className="my-3">İstenilen özelliklere sahip araç bulunamadı</p>
      ) : (
        <Row key="cardsRow" xs={1} md={2} lg={4}>
          {cars.map((car, index) => (
            <Col key={index}>
              <CardItem car={car} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  ) : (
    <p>Araçlar Yükleniyor...</p>
  );
};

export default CardListSection;
