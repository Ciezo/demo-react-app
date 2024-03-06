import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getUserCookie } from "../utils/GetUserCookie";
import UserHomeNavbar from "../components/UserHomeNavbar";
import Sidebar from "../components/Sidebar";

function UserHome() {
  let usernameCookie = getUserCookie("username");

  return (
    <>
      <UserHomeNavbar username={usernameCookie} />

      {/* Main user content goes here */}
      <main>
        <Container fluid="lg">
          <Row>
            <Col xs={2}>
              <Sidebar />
            </Col>

            <Col lg={10} className="mx-auto my-2">
              <Container className="d-flex justify-content-center">
                <textarea placeholder="Enter note here..."></textarea>
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default UserHome;
