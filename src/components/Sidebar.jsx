// Sidebar.js
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {
  BsChatLeftTextFill,
  BsArchiveFill,
  BsFillTrashFill,
} from "react-icons/bs"; // Import the icons

function Sidebar() {
  return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto col-md-2 px-2 my-3 d-none d-md-block sidebar">
            <Nav.Item>
              <Nav.Link href="/username/home">
                <BsChatLeftTextFill className="mr-2" /> Notes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/archive">
                <BsArchiveFill className="mr-2" /> Archive
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/trash">
                <BsFillTrashFill className="mr-2" /> Trash
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Sidebar;
