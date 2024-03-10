/**
 * @author Cloyd Van Secuya
 * <p>
 * This component shall be used over the http://localhost:3000/username/home page.
 * 
 * `NotesCard.jsx` is responsible for the following: 
 *  - 1. Displaying the submitted notes over the home page which what the user directly sees.
 *  - 2. Moving a note to /archive for archiving through POST
 *  - 3. Moving a note to /trash for removal through POST, but 
 *       please keep in mind the note is not deleted yet.
 * </p>
 */
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { FaBoxArchive } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { Button, ButtonGroup } from "react-bootstrap";

function NotesCard(props) {
  const { title, body, author } = props;
  const note = { title, body, author };

  // This state helps with rendering a NotesCard component,
  // and it helps with the visibility of the card.
  // If a NoteCard is archived or trashed, then remove it from the page.
  const [isArchivedOrTrashed, setNoteCardVisibility] = useState(true);

  const archiveNote = () => {
    /**
     * Archived notes are rendered and stored in the
     * `UserNotesArchive.jsx` page, but they are not
     * removed or deleted.
     *
     * It simply is used for safe-keeping. */
    // Store all archived notes in this endpoint
    fetch("http://localhost:3001/notes-archive", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }).then(() => {
      setNoteCardVisibility(false);
      console.log("note moved to archived.");
    });
  };

  const trashNote = () => {
    /**
     * Trash notes are resources where the notes can be deleted.
     * But, upon here we just try to move them into the trash resource
     */
    // Store all trashed notes (can be deleted) at this endpoint
    fetch("http://localhost:3001/notes-trash", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }).then(() => {
      console.log("note moved to trash.");
      setNoteCardVisibility(false);
    });
  };

  return (
    <>
      {isArchivedOrTrashed && <Col xs={3} className="mb-3">
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
            <Button variant="outline-primary" onClick={archiveNote}>
              <FaBoxArchive />
            </Button>
            <Button variant="outline-danger" onClick={trashNote}>
              <FaTrash />
            </Button>
          </ButtonGroup>
        </Card>
      </Col>}
    </>
  );
}

export default NotesCard;
