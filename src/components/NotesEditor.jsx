import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BiSolidAddToQueue } from "react-icons/bi";
import { extract_auth_state } from "../utils/ExtractAuthState";
import { extract_auth } from "../utils/ExtractAuth";
/**
 *
 * @TODO March 6, 2024
 * - When the Spring Boot backend is finished add a POST method to onSubmit
 */
function NotesEditor(props) {
  /** These are cookie values assigned upon login which are the following:
   * On Console Browser Application Tab:
   * @example {"user":"cloydvan","user_id_pk":1}
   */
  const _user = extract_auth_state("_auth_state");
  /** The assigned (Cookie) JWT token when logged in. 
   * This is assigned by Spring Boot Application
   * 
   * @example {_auth: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbG95ZHZhbiIsImlhdCI6MTcxMTk1MDMxNiwiZXhwIjoxNzExOTU0NjM2fQ.f1xu5C6ob5R8tRMdEdXoatZPItalimIBp-5-yGfNkpc}
  */
  const token = extract_auth();
  /** Base URL for Spring Boot application at port `18080`. <b>Requires Authentication</b> */
  const baseURL = "http://localhost:18080/api/inkdown/v1";


  // A POST request to the Spring Boot application should be 
  // structured like this:
  // {
  //  "note": {
  //       "title": "Test here",
  //       "author": "cloydvan",
  //       "body": "The quick brown fox jumps over the lazy dog"
  //   },
  //   "user": {
  //       "id": <user_id_pk>,
  //       "role": "USER"
  //   }
  // } 

  // Simplify the notes data object
  const [note, setNote] = useState({
    title: "",
    author: _user.user,
    body: ""
  }); 
  // Simplify the user data object
  const user = {
    id: _user.user_id_pk,
    role: "USER"
  };
  // Simply, combine both!
  const postObjectOnSubmit = {
    note, 
    user
  } 

  const [isExpanded, setExpand] = useState(false);
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

  const addNote = async () => {
    props.onAdd(note);
    setNote({ 
      title: "", 
      body: "", 
      author: _user.user
    });
    
    try {
      /** Stringfiy to JSON the `Notes` and `User` Objects for simplification! */
      const noteRequestBody = JSON.stringify(postObjectOnSubmit);
      const response = await fetch(baseURL + "/notes", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: noteRequestBody
      });

      if(response.ok) {
        console.log("Note submitted");
        console.log("Request Body: ")
        console.log(noteRequestBody);
      }

    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    addNote();
    event.preventDefault();
  };

  return (
    <Card style={{ width: "50rem" }} className="p-2 my-3 editor">
      <Form onSubmit={handleSubmit}>
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
