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
import { extract_auth_state } from "../utils/ExtractAuthState";
import { extract_auth } from "../utils/ExtractAuth"

function NotesCardOnArchive(props) {
  const _user = extract_auth_state("_auth_state");
  const token = extract_auth();
  const baseURL = "http://localhost:18080/api/inkdown/v1";
  const { id, title, body, author } = props;
  const note = { id, title, body, author };
  const [isNoteRestored, setNoteCardVisibility] = useState(false);
  
  const user = {
    id: _user.user_id_pk,
    role: "USER"
  };

  const postObjectNewNote = {
    note, 
    user
  }

  // Remove the note card component once restored back to the home page
  const restoreNote = async () => {
    try {
      // Create a copy of an archive note to send to /notes  
      const createNewNoteCopy = JSON.stringify(postObjectNewNote);
      await fetch(baseURL + "/notes", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: createNewNoteCopy
      }).then(() => {
        // Remove the original archive note from its own resource, /notes-archive
        fetch(baseURL + "/notes-archive/delete-archive-note/id/" + note.id, {
          method: "DELETE",
          headers: { 
            "Authorization": `Bearer ${token}` 
          }
        }).catch((error) => {
          console.log("Something went wrong with the deletion of archive note");
          console.error(error);
        })
      });
      
      setNoteCardVisibility(true);

    } catch (error) {
      console.log("Something went wrong with deleting the archive note");
      console.error(error);
    }
  };

  return (
    <>
      {!isNoteRestored && (
        <Col xs={3} className="mb-3">
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <small>
                <p>
                  <i>By: {note.author}</i>
                </p>
              </small>
              <p>id: {note.id} </p>
              <Card.Text>{note.body}</Card.Text>
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
