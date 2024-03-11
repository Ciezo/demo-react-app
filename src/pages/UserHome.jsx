import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getUserCookie } from "../utils/GetUserCookie";
import UserHomeNavbar from "../components/UserHomeNavbar";
import Sidebar from "../components/Sidebar";
import NotesEditor from "../components/NotesEditor";
import { useState } from "react";
import NotesCard from "../components/NotesCard";
import Alert from "react-bootstrap/Alert";

function UserHome() {
  const [username, setUsername] = useState("");
  const [notes, setNote] = useState([]);
  const [isError, setError] = useState(false);

  /** Setting the username based on username cookie */
  useEffect(() => {
    const usernameCookie = getUserCookie("username");
    setUsername(usernameCookie);
  }, []);

  /** Fetch all stored notes from the database */
  useEffect(() => {
    fetch("http://localhost:8001/notes")
      .then((res) => res.json())
      .then((data) => {
        setNote(data);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  }, []);

  const addNote = (newNote) => {
    setNote((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  return (
    <>
      <UserHomeNavbar username={username} />

      {/* Main user content goes here */}
      <Container fluid className="px-auto my-5">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col lg={10} className="mx-auto my-2">
            <Container className="d-flex justify-content-center">
              {/* Here is where the user submits their notes */}
              <NotesEditor onAdd={addNote} className="mt-5" />
            </Container>

            <Container fluid>
            {/* Error prompt when a problem occurs in notes submission */}
              {isError && (<Container className="d-flex justify-content-center">
                  <Alert variant="danger" style={{ width: "50rem" }}>
                    There was an error in submitting notes.
                  </Alert>
                </Container>
              )}
              {/* Render the submitted user notes displayed as cards */}
              <Row className="p-2 mx-auto">
                {notes.map((note, index) => (
                  <NotesCard
                    key={index}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    author={note.author}
                  />
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
