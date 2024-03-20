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
  let author = extract_auth_state("_auth_state");
  let token = extract_auth();
  const { data, isPending, error } = useFetch(`/notes/author?author=${author.user}`, token);

  /** Fetch all stored notes from the database */
  useEffect(() => {
    try {
      if(data) {
        setNotes(data);
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
                {<NotesCard
                  id={notes.id}
                  title={notes.title}
                  body={notes.body}
                  author={notes.author}
                />}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserHome;
