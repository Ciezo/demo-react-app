import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BiSolidAddToQueue } from "react-icons/bi";

/**
 *
 * @TODO March 6, 2024
 * - Implement handleChange to add notes
 * - Implement onSubmit to handle form submissions
 * - Implement onClick for the button
 */
function NotesEditor(props) {
  // This state is used to expand and contract the form
  const [isExpanded, setExpand] = useState(false);
  // This state allows us to save submitted notes 
  const [note, setNote] = useState({ title: "", body: "" });

  const expand = () => {
    setExpand(true);
  };

  const handleChange = (event) => {
    // `name` is the name of the input field
    // `value is the value of the input field
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const addNote = () => {
    props.onAdd(note);
    setNote({ title: "", body: "" });
    console.log([note.title, note.body])
  };

  const handleSubmit = (event) => {
    /**
     * @note HERE WE CAN POST THE REQUEST TO BACKEND SERVER
     * BUT FOR NOW THERE IS NONE BECAUSE I AM STILL WORKING ON THIS...
     */
    addNote();
    event.preventDefault();
  };

  return (
    <Card style={{ width: "50rem" }} className="p-2 my-3 editor">
      <Form>
        {/* This will expand upon onClick */}
        <Form.Group className="mb-3" controlId="input.NoteTitle">
          {isExpanded && (
            <Form.Control
              name="title"
              value={note.title}
              type="text"
              onChange={handleChange}
              minLength={1}
              placeholder="Title"
            />
          )}
        </Form.Group>
        {/* This is the textarea the Note body ( or content) */}
        <Form.Group className="mb-3" controlId="input.NoteBody">
          <Form.Control
            name="body"
            value={note.body}
            as="textarea"
            onChange={handleChange}
            onClick={expand}
            minLength={1}
            rows={isExpanded ? 5 : 1}
            placeholder="Take a note..."
          />
        </Form.Group>
        {/* Render button upon expand */}
        {isExpanded && (
          <Button variant="outline-dark" onClick={handleSubmit}>
            <BiSolidAddToQueue /> Save
          </Button>
        )}
      </Form>
    </Card>
  );
}

export default NotesEditor;
