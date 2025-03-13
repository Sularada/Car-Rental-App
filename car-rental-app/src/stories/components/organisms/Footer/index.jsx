import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";

const Footer = () => {
  return (
    <footer className="position-absolute bottom-0 w-100 bg-body-tertiary p-4">
      <Container>
        <Stack
          direction="horizontal"
          gap={4}
          className="justify-content-between flex-wrap"
        >
          <Stack className="logo">
            <img
              alt="Logo"
              src="https://images.template.net/83682/free-simple-car-illustration-3v7wz.jpg"
              width="120"
              height="120"
              className="d-inline-block align-top m-0 rounded-circle"
            />
          </Stack>
          <Stack className="address">
            <h4>Adress</h4>
            <p>1234 Street NAme City, AA 999999</p>
          </Stack>
          <Stack>
            <h4>Contacts</h4>
            <p>
              <i className="bi bi-envelope"></i> reytic@reytic.com
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> 0-555-555-55-55
            </p>
            <p>
              <i className="bi bi-send"></i> 0-555-555-55-55
            </p>
          </Stack>
          <Stack className="socialLinks">
            <h4>Links</h4>
            <Stack direction="horizontal" gap={4}>
              <i className="bi bi-facebook text-black"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-github"></i>
            </Stack>
          </Stack>
        </Stack>
        <Stack className="my-3">
          <p className="text-center">
            © Copyright 2025 Rent Your Trip Car Company - All Rights Reserved
          </p>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
