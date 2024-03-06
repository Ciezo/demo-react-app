import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BiSolidAddToQueue } from "react-icons/bi";

function NotesEditor() {
  const [isExpanded, setExpand] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  function expand() {
    setExpand(true);
  }

  return (
    <Card style={{ width: "50rem" }} className="p-2 my-3 editor">
      <Form>
        {/* This will expand upon onClick */}
        <Form.Group className="mb-3" controlId="input.NoteTitle">
          {isExpanded && (
            <Form.Control
              type="text"
              minLength={1}
              value={note.title}
              placeholder="Title"
            />
          )}
        </Form.Group>
        {/* This is the textarea the Note body ( or content) */}
        <Form.Group className="mb-3" controlId="input.NoteBody">
          <Form.Control
            as="textarea"
            onClick={expand}
            minLength={1}
            value={note.body}
            rows={isExpanded ? 5 : 1}
            placeholder="Take a note..."
          />
        </Form.Group>
        {/* Render button upon expand */}
        {isExpanded && (
          <Button variant="outline-dark">
            <BiSolidAddToQueue /> Save
          </Button>
        )}
      </Form>
    </Card>
  );
}

export default NotesEditor;
