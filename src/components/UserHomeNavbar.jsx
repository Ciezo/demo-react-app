import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from 'react-bootstrap/Form';
import { AiFillSetting } from "react-icons/ai";
import { RiRefreshFill } from "react-icons/ri";
import { MdViewList } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { IoLogOut } from "react-icons/io5";
import { Outlet, Link, useNavigate } from "react-router-dom";
import useSignOut from 'react-auth-kit/hooks/useSignOut';

function UserHomeNavbar({ username }) {
  const logout = useSignOut();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Destroying userInfo
    logout();
    navigate("/login");
  }

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className="border">
        <Container>
          <Navbar.Brand href="">✒️ Inkdown</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Form.Control size="md" type="text" placeholder="Search..." />
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/user/my-account"><RxAvatar /> My Account</Nav.Link>
            </Nav> 
            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item><b>{`Hello, ${username}!`}</b></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#refresh"><RiRefreshFill /> Refresh</NavDropdown.Item>
              <NavDropdown.Item href="#list_view"><MdViewList /> List View</NavDropdown.Item>
              <NavDropdown.Item href="#setting"><AiFillSetting /> Setting</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}><IoLogOut /> Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default UserHomeNavbar;
