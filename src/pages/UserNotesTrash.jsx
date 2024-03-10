import React, { useEffect, useState } from "react";
import UserHomeNavbar from "../components/UserHomeNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { getUserCookie } from "../utils/GetUserCookie";
import NotesCard from "../components/NotesCard";

function UserNotesTrash() {
  let usernameCookie = getUserCookie("username");

  const [trashNotes, setTrashNotes] = useState([]);
  const [isError, setError] = useState(false);

  // Check the :3001/notes-trash endpoint if there are any archived notes
  useEffect(() => {
    fetch("http://localhost:3001/notes-trash")
      .then((res) => res.json())
      .then((data) => {
        setTrashNotes(data);
        console.log(data);
      })
      .catch((error) => {
        setError(true);
        console.error("Error fetching data: " + error);
      });
  }, []);

  return (
    <>
      <UserHomeNavbar username={usernameCookie} />

      {/* Main user content goes here */}
      <Container fluid="lg" className="px-auto my-5">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col lg={10} className="mx-auto my-2">
            {isError && <p className="lead">No trash notes found...</p>}
            <Container className="d-flex justify-content-center">
              {!isError && (
                <Row className="p-2 mx-auto">
                  {trashNotes.map((note, index) => (
                    <NotesCard
                      key={index}
                      id={index}
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
