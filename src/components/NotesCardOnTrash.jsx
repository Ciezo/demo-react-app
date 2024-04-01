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
import { extract_auth } from "../utils/ExtractAuth";

function NotesCardOnTrash(props) {
  const { id, title, body, author } = props;
  const note = { id, title, body, author };
  const token = extract_auth();
  const baseURL = "http://localhost:18080/api/inkdown/v1";

  // Remove the note card component once deleted.
  const [isNoteDeleted, setNoteCardVisibility] = useState(false);
  const deleteNote = async () => {
    try {
      // The said note is deleted forever!
      const response = await fetch(baseURL + "/notes-trash/delete-trash-note/id/" + note.id, {
        method: "DELETE",
        headers: { 
          "Authorization": `Bearer ${token}` 
        }
      });

      if(response.ok) {
        setNoteCardVisibility(true);
        console.log("note deleted forever!");
      }

    } catch (error) {
      console.log("Something went wrong in deleting a note");
      console.error(error);
    }
  };

  return (
    <>
      {!isNoteDeleted && (
        <Col xs={3} className="mb-3">
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>{ note.title }</Card.Title>
              <small>
                <p>
                  <i>By: { note.author }</i>
                </p>
              </small>
              <Card.Text>{ note.body }</Card.Text>
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
