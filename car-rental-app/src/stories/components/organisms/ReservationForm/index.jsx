import { useNavigate } from "react-router";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import ReservationFormItem, {
  ReservationFormDateItem,
} from "../../molecules/ReservationFormItem";

const ReservationForm = ({ updateRentalState, id }) => {
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(
      `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${
        startDate.getDate() + 2
      }`
    )
  );
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || endDate < startDate) {
      event.preventDefault();
      event.stopPropagation();
      alert(
        "Rezervasyon tercihlerinizi kontrol ediniz! Kırmızı alanları ve tarih şeciminizi kontrol ediniz"
      );
    } else {
      updateRentalState(id, false);
      alert("Rezervasyon işlemi başarılı!");
      navigate("/");
    }
    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <ReservationFormItem
          md={"4"}
          label={"İsim"}
          inputType={"text"}
          placeholder={"Adınızı yazınız"}
          id={"validationName"}
        />
        <ReservationFormItem
          md={"4"}
          label={"Soyad"}
          inputType={"text"}
          placeholder={"Soyadınızı yazınız"}
          id={"validationSurname"}
        />
        <ReservationFormItem
          md={"4"}
          label={"Şehir"}
          inputType={"text"}
          placeholder={"Şehir bilgisini giriniz"}
          id={"validationCity"}
        />
      </Row>
      <Row className="mb-3">
        <Form.Group controlId="validationDate">
          <Form.Label>Kiralama Aralığı</Form.Label>
          <Row>
            <Col md="6">
              <ReservationFormDateItem
                type="date"
                min={new Date().toJSON().slice(0, 10)}
                onChange={(e) => {
                  console.log(e.target.value);
                  setStartDate(new Date(e.target.value));
                }}
              />
            </Col>
            <Col md="6">
              <ReservationFormDateItem
                type="date"
                min={startDate.toJSON().slice(0, 10)}
                onChange={(e) => setEndDate(new Date(e.target.value))}
              />
            </Col>
          </Row>
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
  );
};

export default ReservationForm;
