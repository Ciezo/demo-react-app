import React from "react";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateUserName } from "../utils/ValidateUserName";
import { validatePassword } from "../utils/ValidatePassword";
/**
 * 
 * @todo March 5, 2024 
 * REFACTOR THIS INTO REACT-BOOTSTRAP
 */
function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validated, setValidated] = useState(false);

  // Handle onChange
  const handleUsernameChange = (e) => {setUsername(e.target.value);};
  const handlePasswordChange = (e) => {setPassword(e.target.value);};

  // Form validations
  const usernameErr = validateUserName(username);
  const passwordErr = validatePassword(password); 

  const handleSubmit = (event) => {
    // stop page reload
    event.preventDefault();
    
    const form = event.currentTarget;
    // If errors are detected then, don't send to backend
    if (form.checkValidity() === false && usernameErr && passwordErr) {
      event.stopPropagation();
      console.log("Errors detected!")
    } else {  // Otherwise, for now we can log them in the browser
      console.log([username, password])
    }

    setValidated(true);
  };
  return (
    <>
      <Form 
        noValidate 
        validated={validated} 
        onSubmit={handleSubmit}>
        {/* Username */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Username">
            <Form.Control 
            required 
            type="text" 
            minLength={5}
            maxLength={10}
            value={username}
            onChange={handleUsernameChange}
            placeholder="" />

            <Form.Control.Feedback type="invalid">
              {usernameErr}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Username">
            <Form.Control 
            required 
            type="password" 
            minLength={5}
            maxLength={10}
            value={password}
            onChange={handlePasswordChange}
            placeholder="" />

            <Form.Control.Feedback type="invalid">
              {passwordErr}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <Button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </Button>
        </Form>
    </>
  );
}

export default LoginForm;
