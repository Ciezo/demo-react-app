import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">✒️ Inkdown</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <NavDropdown title="More" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/license">License</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/terms-and-privacy">Terms & Privacy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/code-of-conduct">Code of Conduct</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contribute">Contribute</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#github">GitHub</Nav.Link>
              <Nav.Link href="#docs">Docs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default CustomNavbar;
