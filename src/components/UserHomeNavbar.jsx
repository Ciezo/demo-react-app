import React, {useState, useEffect} from "react";
import { extract_auth_state } from "../utils/ExtractAuthState";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from 'react-bootstrap/Form';
// import { AiFillSetting } from "react-icons/ai";
import { RiRefreshFill } from "react-icons/ri";
// import { MdViewList } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { IoLogOut } from "react-icons/io5";
import { Outlet, Link, useNavigate } from "react-router-dom";
import useSignOut from 'react-auth-kit/hooks/useSignOut';

function UserHomeNavbar() {
  const [username, setUsername] = useState("");
  const logout = useSignOut();
  const navigate = useNavigate();

  /** Setting the username based on username cookie */
  useEffect(() => {
    const username = extract_auth_state("_auth_state");
    setUsername(username.user);
  }, []);

  const handleLogout = () => {
    // Destroying userInfo
    logout();
    navigate("/login");
  }

  const refreshPage = () => {
    // Reference:
    // https://stackoverflow.com/questions/41481522/how-to-refresh-a-page-using-react-route-link
    window.location.reload();
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
              <NavDropdown.Item onClick={refreshPage}><RiRefreshFill /> Refresh</NavDropdown.Item>
              {/* <NavDropdown.Item><MdViewList /> List View</NavDropdown.Item> */}
              {/* <NavDropdown.Item><AiFillSetting /> Setting</NavDropdown.Item> */}
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
