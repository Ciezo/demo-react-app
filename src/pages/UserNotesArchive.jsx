import { useEffect, useState } from "react";
import UserHomeNavbar from "../components/UserHomeNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { getUserCookie } from "../utils/GetUserCookie";
import NotesCard from "../components/NotesCard";

function UserNotesArchive() {
  let usernameCookie = getUserCookie("username");

  const [archiveNotes, setArchiveNotes] = useState([]);
  const [isError, setError] = useState(false);

  // Check the :3001/notes-archive endpoint if there are any archived notes
  useEffect(() => {
    fetch("http://localhost:3001/notes-archive")
      .then((res) => res.json())
      .then((data) => {
        setArchiveNotes(data);
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
            {isError && <p className="lead">An error occurred no archive notes found...</p>}
            <Container className="d-flex justify-content-center">
              {!isError && (
                <Row className="p-2 mx-auto">
                  {archiveNotes.map((note, index) => (
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

export default UserNotesArchive;
