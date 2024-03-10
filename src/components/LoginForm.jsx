import React from "react";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateUserName } from "../utils/ValidateUserName";
import { validatePassword } from "../utils/ValidatePassword";
import { UserCookie } from "../utils/UserCookie";
import { useNavigate } from "react-router-dom";

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

  // Redirection to user/home
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // stop page reload
    event.preventDefault();
    
    const form = event.currentTarget;
    // If errors are detected then, don't send to backend
    if (form.checkValidity() === false && usernameErr && passwordErr) {
      event.stopPropagation();
      console.log("Errors detected!")
    } else {  // Otherwise, for now we can log them in the browser
      /**
       * @TODO (Hard deadline: March 15, 2024)
       * - Here the front-end should send a request to the 
       * backend to check if the user exists and can be authenticated.
       * Moreover, the client (React.js) should wait for the back-end(Spring Boot)
       * to send out if the user is true (Authenticated and Authorized).
       * 
       * The user should not wait longer than 1 minute or 10 seconds.
       */


      /**
       * @TODO (Hard deadline: March 8, 2024)
       * - For now, implement a mock-up JSON server to 
       * fetch all user credentials for authentication and authorization.
       */
      if(!usernameErr && !passwordErr) {
        UserCookie("username", username);
        navigate("/username/home")
      }
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
          <FloatingLabel controlId="floatingInput" label="Password">
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
