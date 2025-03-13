import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const NavbarPart = () => {
  return (
    <Navbar className="bg-body-tertiary p-0">
      <Container className=" justify-content-center">
        <Navbar.Brand href="#home" className=" d-flex align-items-center gap-2">
          <img
            alt="Logo"
            src="https://images.template.net/83682/free-simple-car-illustration-3v7wz.jpg"
            width="80"
            height="80"
            className="d-inline-block align-top m-0 rounded-circle"
          />{" "}
          <h2 className="p-0 m-0 fw-semibold">Rent Your Trip Car</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarPart;
