import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

function NotesCard(props) {
  return (
    <>
      <Col xs={3} className="mb-3">
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <small><p><i>By: {props.author}</i></p></small>
            <Card.Text>{props.body}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default NotesCard;
