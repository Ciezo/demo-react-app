import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BiSolidAddToQueue } from "react-icons/bi";
import { getUserCookie } from "../utils/GetUserCookie";

/**
 *
 * @TODO March 6, 2024
 * - When the Spring Boot backend is finished add a POST method to onSubmit
 */
function NotesEditor(props) {
  // This state is used to expand and contract the form
  const [isExpanded, setExpand] = useState(false);
  /**
   * The attributes title and body are from the Form,
   * while the author is an assigned value based on the username cookie
   */
  const setAuthor = () => {
    const author = getUserCookie("username");
    return author;
  }
  const [note, setNote] = useState({ title: "", body: "", author: setAuthor() });

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
    setNote({ title: "", body: "", author: setAuthor() });
    fetch('http://localhost:8001/notes', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(note) 
      })
      .then(() => {
        console.log([note.title, note.body, note.author])
      });
  };

  const handleSubmit = (event) => {
    addNote();
    event.preventDefault();
  };

  return (
    <Card style={{ width: "50rem" }} className="p-2 my-3 editor">
      <Form
        onSubmit={handleSubmit}
      >
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
