import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
const NavbarPart = () => {
  return (
    <Navbar className="bg-body-tertiary p-0">
      <Container className=" justify-content-center">
        <NavLink to="/" className="text-decoration-none">
          <img
            alt="Logo"
            src="https://images.template.net/83682/free-simple-car-illustration-3v7wz.jpg"
            width="80"
            height="80"
            className="d-inline-block align-top m-0 rounded-circle"
          />{" "}
          <h2 className="p-0 m-0 fw-semibold">Rent Your Trip Car</h2>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default NavbarPart;
