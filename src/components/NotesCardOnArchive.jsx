/**
 * @author Cloyd Van Secuya
 * <p>
 * This component shall be used over the http://localhost:3000/username/archive page.
 *
 * `NotesCardOnArchive.jsx` is responsible for the following:
 *  - 1. Displaying all archived notes by the user.
 *  - 2. The user can restore their archived notes through POST to http://localhost:8001/notes
 * </p>
 */

import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { MdRestorePage } from "react-icons/md"
import { Button, ButtonGroup } from "react-bootstrap";

function NotesCardOnArchive(props) {
  const { id, title, body, author } = props;
  const note = { id, title, body, author };

  // Remove the note card component once restored back to the home page
  const [isNoteRestored, setNoteCardVisibility] = useState(false);
  const restoreNote = () => {
    fetch('http://localhost:8001/notes', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(note) 
      })
      .then(() => { setNoteCardVisibility(true); })
      .catch((error) => { console.error(error); });
  };

  return (
    <>
      {!isNoteRestored && (
        <Col xs={3} className="mb-3">
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <small>
                <p>
                  <i>By: {author}</i>
                </p>
              </small>
              <Card.Text>{body}</Card.Text>
            </Card.Body>
            <ButtonGroup className="mx-auto my-2">
              <Button variant="outline-info" onClick={restoreNote}>
                <MdRestorePage />
              </Button>
            </ButtonGroup>
          </Card>
        </Col>
      )}
    </>
  );
}

export default NotesCardOnArchive;
