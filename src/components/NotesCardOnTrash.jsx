/**
 * @author Cloyd Van Secuya
 * <p>
 * This component shall be used over the http://localhost:3000/username/trash page.
 *
 * `NotesCardOnTrash.jsx` is responsible for the following:
 *  - 1. Displaying all notes ready for deletion.
 *  - 2. Here is where the user PERMANENTLY DELETES their notes.
 * </p>
 */
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import { Button, ButtonGroup } from "react-bootstrap";

function NotesCardOnTrash(props) {
  const { id, title, body, author } = props;
  const note = { id, title, body, author };

  // Remove the note card component once deleted.
  const [isNoteDeleted, setNoteCardVisibility] = useState(false);
  const deleteNote = () => {
    fetch("http://localhost:3001/notes-trash/" + note.id, {
      method: "DELETE",
    }).then(() => { setNoteCardVisibility(true); })
      .catch((error) => { console.error(error); });
  };

  return (
    <>
      {!isNoteDeleted && (
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
              <Button variant="outline-danger" onClick={deleteNote}>
                <FaTrash />
              </Button>
            </ButtonGroup>
          </Card>
        </Col>
      )}
    </>
  );
}

export default NotesCardOnTrash;
