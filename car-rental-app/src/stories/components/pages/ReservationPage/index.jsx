import { useEffect, useState } from "react";
import CardItem from "../../molecules/Card";
import { useNavigate, useParams } from "react-router";
import { getCar, updateRentalState } from "../../../../firebase/dbController";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const ReservationPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(
      `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${
        startDate.getDate() + 2
      }`
    )
  );
  console.log(startDate);
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      updateRentalState(id, false);
      alert("Rezervasyon işlemi başarılı!");
      navigate("/");
    }
    setValidated(true);
  };
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    setCar(await getCar(id));
  }
  return (
    <Container>
      <h2>Araç Kiralama Formu</h2>
      <Row>
        <Col md={6} lg={4}>
          {car && <CardItem car={car} />}
        </Col>
        <Col md={6} lg={8} className="my-3">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationName">
                <Form.Label>İsim</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Adınızı yazınız"
                />
                <Form.Control.Feedback>Geçerli</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Geçersiz
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationSurname">
                <Form.Label>Soyad</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Soyadınızı giriniz"
                />
                <Form.Control.Feedback>Geçerli</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Geçersiz
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCity">
                <Form.Label>Şehir</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Şehir bilgisini giriniz"
                />
                <Form.Control.Feedback>Geçerli</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Geçersiz
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="validationDate">
                <Form.Label>Kiralama Aralığı</Form.Label>
                <Row>
                  <Col md="6">
                    <Form.Control
                      type="date"
                      value={startDate.toJSON().slice(0, 10)}
                      min={startDate.toJSON().slice(0, 10)}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setStartDate(new Date(e.target.value));
                      }}
                      required
                    />
                  </Col>
                  <Col md="6">
                    <Form.Control
                      type="date"
                      min={endDate.toJSON().slice(0, 10)}
                      onChange={(e) => setEndDate(new Date(e.target.value))}
                      value={endDate.toJSON().slice(0, 10)}
                      required
                    />
                  </Col>
                </Row>
                <Form.Control.Feedback>Geçerli</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Geçersiz
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Koşulları kabul ediyorum."
                feedback="Koşulları kabul etmelisiniz."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Onayla</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ReservationPage;
