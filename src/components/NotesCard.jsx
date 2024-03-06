import React from "react";
import Card from "react-bootstrap/Card";

function NotesCard(props) {
  return (
    <>
      <Card style={{ width: "15rem" }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default NotesCard;
