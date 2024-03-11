import { useEffect, useState } from "react";
import UserHomeNavbar from "../components/UserHomeNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { getUserCookie } from "../utils/GetUserCookie";
import NotesCardOnArchive from "../components/NotesCardOnArchive";

function UserNotesArchive() {
  const [username, setUsername] = useState("");
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const usernameCookie = getUserCookie("username");
    setUsername(usernameCookie);
  }, []);

  // Check the :8001/notes-archive endpoint if there are any archived notes
  useEffect(() => {
    fetch("http://localhost:8001/notes-archive")
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
      <UserHomeNavbar username={username} />

      {/* Main user content goes here */}
      <Container fluid="lg" className="px-auto my-5">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>

          <Col lg={10} className="mx-auto my-2">
            <p className="lead">Archived notes by {username}</p>
            {isError && <p className="lead">An error occurred no archive notes found...</p>}
            <Container fluid>
              {!isError && (
                <Row className="p-2 mx-auto">
                  {archiveNotes.map((note, index) => (
                    <NotesCardOnArchive
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

export default UserNotesArchive;
