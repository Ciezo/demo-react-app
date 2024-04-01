import React, { useEffect, useState } from "react";
import UserHomeNavbar from "../components/UserHomeNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { extract_auth_state } from "../utils/ExtractAuthState";
import NotesCardOnTrash from "../components/NotesCardOnTrash";
import { extract_auth } from "../utils/ExtractAuth";
import useFetch from "../api/useFetch";

function UserNotesTrash() {
  const [trashNotes, setTrashNotes] = useState([]);
  const [isError, setError] = useState(false);
  const user = extract_auth_state("_auth_state");
  const token = extract_auth();
  const { data, isPending, error } = useFetch(`/notes-trash`, token);

  useEffect(() => {
    try {
      if(data) {
        /** All trash notes by its own username 
         * are assigned here in this emtpy array
         * 
         * `/notes-trash` endpoint returns all trash notes from all users
         * 
         * Therefore, filtering the required data is necessary, and we need 
         * the username for that.
        */
        const trashNotesByUsername = [];
        
        for(const notesTrash of data) {
          /** The supposed author of an archive note */
          const _user = notesTrash.author;
          /** Current user logged-in */
          const userInSession = user.user;

          const id = notesTrash.id;
          const title = notesTrash.title;
          const author = notesTrash.author;
          const body = notesTrash.body;

          const notesOnTrashObject = {
            id, 
            title,
            author,
            body
          };

          /** Matching and filtering */
          if(_user === userInSession) {
            trashNotesByUsername.push(notesOnTrashObject);
            setTrashNotes(trashNotesByUsername);
          }
        }
      }

    } catch (error) {
      setError(error);
      console.log("An error occurred");
      throw new Error(error);
    }
  }, [data, user.user]);

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
            <p className="lead">Trash notes by {user.user}</p>

            {/* Error prompt */}
            {isError && <div className="lead">
              An error occurred! 
              <div className="lead"> { error }</div>
            </div>}
            
            {/* Loading Prompt */}
            {isPending && <div className="lead">Loading...</div>}

            {/* Render the trash notes here */}
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
