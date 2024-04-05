import React from "react";
import UserHomeNavbar from "../components/UserHomeNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Card from 'react-bootstrap/Card';

function MyAccountPage() {
  return (
    <>
      <UserHomeNavbar />

      {/* Main user content goes here */}
      <Container fluid className="px-auto my-5">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col lg={10} className="mx-auto my-2">
            <Container className="justify-content-center">
              <h5 className="pt-3">My Account</h5>
              <Card className="">
                <Card.Body>
                  {/* 
                    @todo 
                    Finish creating a layout for this just like in Door2Dorm
                  */}
                </Card.Body>
              </Card>

            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyAccountPage;
