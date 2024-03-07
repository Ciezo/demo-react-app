import React from "react";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateFirstLastName } from "../utils/ValidateFirstLastName";
import { validateUserName } from "../utils/ValidateUserName";
import { validatePassword } from "../utils/ValidatePassword";
import Alert from "react-bootstrap/Alert";

function SignupForm() {
  // Form values
  /**
   * @note Remember the concepts of setters in OOP where
   * we use it to handle assigning of values to a variable.
   * In this case, React hooks allow the use of Setters to
   * update the state of assigned values in the given form values.
   */
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validated, setValidated] = useState(false);

  // Handle onChange
  const handleFirstNameChange = (e) => {setFirstName(e.target.value);};
  const handleLastNameChange = (e) => {setLastName(e.target.value);};
  const handleBirthdayChange = (e) => {setBirthday(e.target.value);};
  const handleUsernameChange = (e) => {setUsername(e.target.value);};
  const handlePasswordChange = (e) => {setPassword(e.target.value);};
  
  // Form validations
  const firstNameErr = validateFirstLastName(firstname);
  const lastNameErr = validateFirstLastName(lastname);
  const usernameErr = validateUserName(username);
  const passwordErr = validatePassword(password); 

  // Success prompt to notify user on successful registration
  const [isNotified, setNotified] = useState(false);

  const handleSubmit = (event) => {
    // stop page reload
    event.preventDefault();
    
    const form = event.currentTarget;
    // If errors are detected then, don't send to backend
    if (form.checkValidity() === false && firstNameErr && lastNameErr && usernameErr && passwordErr) {
      event.stopPropagation();
      console.log("Errors detected!")
    } else {  // Otherwise, register the user thru fetch()
      const user = {firstname, lastname, birthday, username, password};
      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(user) 
      })
      .then(() => {
        setNotified(true);
        console.log("User registered");
        console.log(user);
      });
    }

    setValidated(true);
  };

  return (
    <>
      {isNotified && (
        <Alert variant={"success"}>You are now registered!</Alert>
      )}
      <Form 
        noValidate 
        validated={validated} 
        onSubmit={handleSubmit}>
        {/* Firstname */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput" label="First name">
            <Form.Control 
            required 
            type="text" 
            minLength={5}
            maxLength={10}
            value={firstname}
            onChange={handleFirstNameChange}
            placeholder="" />

            <Form.Control.Feedback type="invalid">
              {firstNameErr}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        {/* Lastname */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Last name">
            <Form.Control 
            required 
            type="text" 
            minLength={5}
            maxLength={10}
            value={lastname}
            onChange={handleLastNameChange}
            placeholder="" />
            <Form.Control.Feedback type="invalid">
              {lastNameErr}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        {/* Birthday */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Birthday">
            <Form.Control 
            required 
            type="date" 
            value={birthday}
            onChange={handleBirthdayChange}
            placeholder="" />
            <Form.Control.Feedback type="invalid">
              Please, provide birth date.
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        {/* Username */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Username">
            <Form.Control required 
            type="text"
            minLength={5}
            maxLength={10}
            value={username}
            onChange={handleUsernameChange}
            placeholder="name@example.com" />
            <Form.Control.Feedback type="invalid">
              {usernameErr}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Password">
            <Form.Control 
            required 
            type="password" 
            minLength={5}
            value={password}
            onChange={handlePasswordChange}
            placeholder="******" />
            <Form.Control.Feedback type="invalid">
              {passwordErr}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign up
        </Button>
      </Form>
    </>
  );
}

export default SignupForm;
