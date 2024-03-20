import React, { useEffect, useState } from "react";
import UserHomeNavbar from "../components/UserHomeNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { extract_auth_state } from "../utils/ExtractAuthState";
import NotesCardOnTrash from "../components/NotesCardOnTrash";

function UserNotesTrash() {
  const [username, setUsername] = useState("");
  const [trashNotes, setTrashNotes] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const username = extract_auth_state("_auth_state");
    setUsername(username.user);
  }, []);

  // Check the :8001/notes-trash endpoint if there are any archived notes
  useEffect(() => {
    fetch("http://localhost:8001/notes-trash")
      .then((res) => res.json())
      .then((data) => {
        setTrashNotes(data);
      })
      .catch((error) => {
        setError(true);
        console.error("Error fetching data: " + error);
      });
  }, []);

  return (
    <>
      <UserHomeNavbar />

      {/* Main user content goes here */}
      <Container fluid="lg" className="px-auto my-5">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col lg={10} className="mx-auto my-2">
            <p className="lead">Trash notes by {username}</p>
            {isError && <p className="lead">No trash notes found...</p>}
            <Container fluid>
              {!isError && (
                <Row className="p-2 mx-auto">
                  {trashNotes.map((note, index) => (
                    <NotesCardOnTrash
                      key={index}
                      id={note.id}
                      title={note.title}
                      body={note.body}
                      author={note.author}
                    />
                  ))}
                </Row>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserNotesTrash;
