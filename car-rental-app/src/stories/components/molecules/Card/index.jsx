import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { NavLink } from "react-router";
import { Col, Row } from "react-bootstrap";
export const CardItem = ({ car }) => {
  return (
    <Card className="position-relative my-3">
      <Card.Img
        variant="top"
        src={
          `${car.image}` ||
          "data:image/png;base64,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"
        }
      />
      <Card.Body>
        <Card.Title>{car.model}</Card.Title>
        <Card.Text>
          <span className="text-secondary">Vites: </span>{" "}
          {car.type.charAt(0).toUpperCase() + car.type.slice(1)}
        </Card.Text>
        <Card.Text>
          <span className="text-secondary">Günlük Ücret: </span> {car.price} ₺
        </Card.Text>

        {car.id && (
          <NavLink to={`/car/${car.id}`} className="btn btn-primary">
            İncele
          </NavLink>
        )}
      </Card.Body>
      <Badge
        bg={`${car.rentalState == true ? "success" : "danger"}`}
        className="position-absolute end-0 top-0 rounded p-2 m-2"
      >
        Kirala
      </Badge>
    </Card>
  );
};

export const DetailCardItem = ({ car }) => {
  return (
    <Card className="my-3 h-100">
      <Card.Header>Araç Bilgileri</Card.Header>
      <Row>
        <Col xs={12} md={5}>
          <Card.Img src={car.image} />
        </Col>
        <Col xs={12} md={7}>
          <Card.Body>
            <Card.Title>{car.model}</Card.Title>
            <Card.Text className="d-flex flex-wrap gap-4">
              <span>
                <i className="bi bi-fuel-pump me-1"></i>{" "}
                {car.fuel.charAt(0).toUpperCase() + car.fuel.slice(1)}
              </span>
              <span>
                <i className="bi bi-gear me-1"></i>{" "}
                {car.type.charAt(0).toUpperCase() + car.type.slice(1)}
              </span>
              <span>
                <i className="bi bi-person-square me-1"></i> {car.driverAge}+
                yaş
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
  );
};

export const PriceCardItem = ({ car, id }) => {
  return (
    <Card className="my-3">
      <Card.Header>Toplam Tutar</Card.Header>
      <Card.Body>
        <Card.Title>Günlük Ödeme</Card.Title>
        <Card.Text>{car.price} TL</Card.Text>
        {car.rentalState ? (
          <NavLink className="btn btn-success w-100" to={`/reservation/${id}`}>
            Hemen Kirala
          </NavLink>
        ) : (
          <Button className="btn btn-secondary w-100" disabled>
            Hemen Kirala
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
