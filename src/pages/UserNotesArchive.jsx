import React from "react";
import { useEffect, useState } from "react";
import UserHomeNavbar from "../components/UserHomeNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { extract_auth_state } from "../utils/ExtractAuthState";
import NotesCardOnArchive from "../components/NotesCardOnArchive";
import { extract_auth } from "../utils/ExtractAuth";
import useFetch from "../api/useFetch";

function UserNotesArchive() {
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [isError, setError] = useState(false);
  const user = extract_auth_state("_auth_state");
  const token = extract_auth();
  const { data, isPending, error } = useFetch(`/notes-archive`, token);
  
  useEffect(() => {
    try {
      if(data) {
        /** All archived notes by its own username 
         * should be assigned here... 
         * 
         * `/notes-archive` is returning all kinds of archived notes from all users.
         * 
         * Therefore, we want to create a match to assign all archived notes 
         * by the same user who is logged-in.
         * 
         * */
        const archiveNotesByUsername = [];

        for(const notesArchive of data) {
          /** The supposed author of an archive note */
          const _user = notesArchive.author;
          /** Current user logged-in */
          const userInSession = user.user;
          
          const id = notesArchive.id;
          const title = notesArchive.title;
          const author = notesArchive.author;
          const body = notesArchive.body;

          const notesOnArchiveObject = {
            id, 
            title,
            author,
            body
          };

          /** Match and assign all archive notes data related to the 
           * User by using the username value matched to the author of the archive note
           * To put it simply, we just want to filter the data...
           */
          if(_user === userInSession) {   // A filter condition
            archiveNotesByUsername.push(notesOnArchiveObject);
            setArchiveNotes(archiveNotesByUsername);
          }
        }

      }

    } catch (error) {
      setError(error);
      console.log("An error occurred!"); 
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
            <p className="lead">Archived notes by {user.user}</p>

            {/* Error prompt */}
            {isError && <div className="lead">
              An error occurred! 
              <div className="lead"> { error }</div>
            </div>}

            {/* Loading Prompt */}
            {isPending && <div className="lead">Loading...</div>}
            
            {/* Render the archive notes here */}
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
