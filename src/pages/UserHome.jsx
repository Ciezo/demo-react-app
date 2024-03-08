import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getUserCookie } from "../utils/GetUserCookie";
import UserHomeNavbar from "../components/UserHomeNavbar";
import Sidebar from "../components/Sidebar";
import NotesEditor from "../components/NotesEditor";
import { useState } from "react";
import NotesCard from "../components/NotesCard";

function UserHome() {
  let usernameCookie = getUserCookie("username");

  const [notes, setNote] = useState([]);

  function addNote(newNote) {
    setNote((prevValue) => {
      return [...prevValue, newNote];
    });
  }

  return (
    <>
      <UserHomeNavbar username={usernameCookie} />

      {/* Main user content goes here */}
      <Container fluid className="px-auto my-5">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col lg={10} className="mx-auto my-2">
            <Container className="d-flex justify-content-center">
              {/* Here is where the user submits their notes */}
              <NotesEditor onAdd={addNote} className="mt-5"/>
            </Container>
            {/* Render the submitted user notes displayed as cards */}
            <Container fluid>
              <Row className="p-2 mx-auto">
                {notes.map((note, index) => (
                  <NotesCard key={index} title={note.title} author={note.author} body={note.body} />
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserHome;
