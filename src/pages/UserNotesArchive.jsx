import React from "react";
import UserHomeNavbar from "../components/UserHomeNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { getUserCookie } from "../utils/GetUserCookie";

function UserNotesArchive() {
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
                Archive
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default UserNotesArchive;
