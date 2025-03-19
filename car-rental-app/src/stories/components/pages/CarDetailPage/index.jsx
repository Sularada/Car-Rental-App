import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { getCar } from "../../../../firebase/dbController";
import { NavLink, useParams } from "react-router";

function CarDetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    setCar(await getCar(id));
  }
  return car ? (
    <Container>
      <Row>
        <Col xs={12} lg={9} className="h-100">
          <Card className="my-3 h-100">
            <Card.Header>Araç Bilgileri</Card.Header>
            <Row>
              <Col xs={12} md={3}>
                <Card.Img src={car.image} />
              </Col>
              <Col xs={12} md={9}>
                <Card.Body>
                  <Card.Title>{car.model}</Card.Title>
                  <Card.Text className="d-flex gap-3">
                    <span>
                      <i className="bi bi-fuel-pump me-1"></i>{" "}
                      {car.fuel.charAt(0).toUpperCase() + car.fuel.slice(1)}
                    </span>
                    <span>
                      <i className="bi bi-gear me-1"></i>{" "}
                      {car.type.charAt(0).toUpperCase() + car.type.slice(1)}
                    </span>
                    <span>
                      <i className="bi bi-person-square me-1"></i>{" "}
                      {car.driverAge}+ yaş
                    </span>
                    <span>
                      <i className="bi bi-speedometer2 me-1"></i> {car.km} KM
                    </span>

                    <span>
                      <i className="bi bi-wallet2 me-1"></i> {car.deposit} TL
                    </span>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={12} lg={3} className="h-100">
          <Card className="my-3">
            <Card.Header>Toplam Tutar</Card.Header>
            <Card.Body>
              <Card.Title>Günlük Ödeme</Card.Title>
              <Card.Text>{car.price} TL</Card.Text>
              {car.rentalState ? (
                <NavLink
                  className="btn btn-success w-100"
                  to={`/reservation/${id}`}
                >
                  Hemen Kirala
                </NavLink>
              ) : (
                <Button className="btn btn-secondary w-100" disabled>
                  Hemen Kirala
                </Button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : (
    <p>Araç bilgileri bulunamadı</p>
  );
}

export default CarDetailPage;
