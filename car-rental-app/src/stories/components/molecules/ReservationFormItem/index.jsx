import { Col, Form } from "react-bootstrap";

const ReservationFormItem = ({ md, inputType, label, placeholder, id }) => {
  return (
    <Form.Group as={Col} md={md} controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control required type={inputType} placeholder={placeholder} />
      <Form.Control.Feedback>Geçerli</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">Geçersiz</Form.Control.Feedback>
    </Form.Group>
  );
};

export const ReservationFormDateItem = ({ ...props }) => {
  return (
    <>
      <Form.Control {...props} required />
      <Form.Control.Feedback>Geçerli</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">Geçersiz</Form.Control.Feedback>
    </>
  );
};

export default ReservationFormItem;
