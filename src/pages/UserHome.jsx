import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserHomeNavbar from "../components/UserHomeNavbar";
import Sidebar from "../components/Sidebar";
import NotesEditor from "../components/NotesEditor";
import { useState } from "react";
import NotesCard from "../components/NotesCard";
import Alert from "react-bootstrap/Alert";
import { extract_auth_state } from "../utils/ExtractAuthState";
import { extract_auth } from "../utils/ExtractAuth";
import useFetch from "../api/useFetch";

function UserHome() {
  const [notes, setNotes] = useState([]);
  const [isError, setError] = useState(false);
  const user = extract_auth_state("_auth_state");
  const token = extract_auth();
  const { data, isPending, error } = useFetch(`/notes/user/${user.user_id_pk}`, token);
  
  /** Prepare and structure the notes data only */
  /** About cleaning up the data...
   * This is done since the response is from 
   * `useFetch()` using the endpoint:
   *  http://localhost:18080/api/inkdown/v1/notes/user/<user.user_id_pk> 
   * The response from the Spring Boot application is as follows:
   * [
   *  {
   *    "id": "<note_id>",
   *    "title": "<note_title>",
   *    "body": "<note_body>"
   *     "user": { // UserDetails. !!! We don't need this. !!! }
   *  }
   * ]
   * 
   * Hence, a notesData is represented by the following structure in this object.
   * const noteObject = {
   *    title, 
   *    author,
   *    body
   * };
   */
  
  /** Fetch all stored notes from the database */
  useEffect(() => {
    try {
      if(data) {
        const notesData = [];
        for (const notes of data) {
          const id = notes.id;
          const title = notes.title;
          const author = notes.author;
          const body = notes.body;
          const noteObject = {
            id,
            title,
            author,
            body
          };
          notesData.push(noteObject);
          // Set the notes[] state. Remember this is an array so it must be mapped.
          setNotes(notesData);
        }
      }
    } catch (error) {
      setError(error);
      console.log("An error occurred!"); 
      throw new Error(error);
    }
  }, [data]);

  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

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
              {isPending && <div className="lead">Loading...</div>}
              {isError && <div className="lead">
                An an error occurred!
                <div className="lead"> { error } </div> 
                </div>}
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
