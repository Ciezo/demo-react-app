import React from "react";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateUserName } from "../utils/ValidateUserName";
import { validatePassword } from "../utils/ValidatePassword";
import { useNavigate } from "react-router-dom";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import Alert from "react-bootstrap/Alert";

function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const signIn = useSignIn();

  const [validated, setValidated] = useState(false);

  // Handle onChange
  const handleUsernameChange = (e) => {setUsername(e.target.value);};
  const handlePasswordChange = (e) => {setPassword(e.target.value);};

  // Form validations
  const usernameErr = validateUserName(username);
  const passwordErr = validatePassword(password); 

  // Redirection to user/home
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // stop page reload
    event.preventDefault();
    
    const form = event.currentTarget;
    // If errors are detected then, don't send to backend
    if (form.checkValidity() === false && usernameErr && passwordErr) {
      event.stopPropagation();
      console.log("Errors detected!")
    } else {  // If no input errors from the form then, create a fetch() to the Spring Boot
        
      // Create a POST request for User Authentication
      // http://localhost:18080/api/v1/auth/authenticate
      // from the Spring Boot application 
      
      try {
        const response = await fetch('http://localhost:18080/api/v1/auth/authenticate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }) 
        })

        if (!response.ok) { throw new Error('Authentication failed'); }

        /** Extracting the token value from the response */
        // Key: token | Value: jwt
        const data = await response.json(); 
        // Set up user management using react-auth-kit
        /** Cookie set up and everything...  */
        if(signIn({
          auth: {
            token: data.token,
            type: 'Bearer'
          },
          userState: {
            user: username,
            role: "USER"
          }
        })) {
          // Upon successful signin, redirect the user to home
          navigate("/user/home");
        } 
      } catch (error) { 
        setError(true);
        console.log("Something went wrong with fetching data from the backend. Please, check errors!")
        console.log(error) 
      }
    }

    setValidated(true);
  };
  return (
    <>
    {isError && (
      <Alert variant={"danger"}>Invalid username or password! Please, try again!</Alert>
    )}
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
            maxLength={20}
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
