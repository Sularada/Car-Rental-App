import {
  Button,
  ButtonGroup,
  Col,
  FormLabel,
  Row,
  ToggleButton,
} from "react-bootstrap";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/esm/Stack";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const FilterSection = ({ models, setFilters }) => {
  const [model, setModel] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5000);
  const [rentalState, setRentalState] = useState(true);
  const [sort, setSort] = useState("");
  function applyFilters() {
    setFilters({
      min: Number(min),
      max: Number(max),
      model: model,
      rentalState: rentalState,
    });
  }
  function clearFilters() {
    setModel("");
    setMin(0);
    setMax(5000);
    setRentalState(true);
    setFilters({
      min: 0,
      max: 5000,
      model: "",
      rentalState: true,
    });
  }
  return (
    <Container className="my-3">
      <Row xs={1} md={2} lg={4}>
        <Col>
          <FormLabel>Model</FormLabel>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setModel(e.target.value)}
            value={model}
          >
            <option value="">Model Seçiniz</option>
            {models &&
              models.map((model, index) => {
                return (
                  <option key={index} value={model}>
                    {model}
                  </option>
                );
              })}
          </Form.Select>
        </Col>
        <Col>
          <Stack>
            <FormLabel>Ücret</FormLabel>
            <Stack direction="horizontal" gap={4}>
              <InputGroup>
                <Form.Control
                  aria-label="min price"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
                <InputGroup.Text>₺</InputGroup.Text>
              </InputGroup>
              <InputGroup>
                <Form.Control
                  aria-label="max price"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
                <InputGroup.Text>₺</InputGroup.Text>
              </InputGroup>
            </Stack>
          </Stack>
        </Col>
        <Col>
          <FormLabel>Kiralama</FormLabel>
          <ButtonGroup className="d-flex w-100">
            <ToggleButton
              type="radio"
              variant={rentalState ? "outline-success" : "outline-danger"}
              name="radio"
              checked={true === rentalState}
              onClick={() => {
                setRentalState(true);
              }}
              className="w-100"
            >
              {"Kiralık"}
            </ToggleButton>
            <ToggleButton
              className="w-100"
              type="radio"
              variant={rentalState ? "outline-success" : "outline-danger"}
              name="radio"
              checked={false === rentalState}
              onClick={() => {
                setRentalState(false);
              }}
            >
              {"Kiralanmış"}
            </ToggleButton>
          </ButtonGroup>
        </Col>
        <Col className="d-flex align-items-bottom gap-2">
          <Button onClick={applyFilters} className="mt-auto w-100">
            Uygula
          </Button>
          <Button
            variant="danger"
            onClick={clearFilters}
            className="mt-auto w-100"
          >
            Temizle
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterSection;
