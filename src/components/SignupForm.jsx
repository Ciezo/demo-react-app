import React from "react";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { validateFirstNameOnly } from "../utils/ValidateFirstNameOnly";
import { validateLastNameOnly } from "../utils/ValidateLastNameOnly"; 
import { validateUserName } from "../utils/ValidateUserName";
import { validateEmail } from "../utils/ValidateEmail";
import { validatePassword } from "../utils/ValidatePassword";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = "USER";

  const [validated, setValidated] = useState(false);

  // Handle onChange
  const handleFirstNameChange = (e) => {setFirstName(e.target.value);};
  const handleLastNameChange = (e) => {setLastName(e.target.value);};
  const handleBirthdayChange = (e) => {setBirthday(e.target.value);};
  const handleUsernameChange = (e) => {setUsername(e.target.value);};
  const handleEmailChange = (e) => {setEmail(e.target.value);};
  const handlePasswordChange = (e) => {setPassword(e.target.value);};
  
  // Custom Form validations
  const firstNameErr = validateFirstNameOnly(firstname);
  const lastNameErr = validateLastNameOnly(lastname);
  const usernameErr = validateUserName(username);
  const emailErr = validateEmail(email);
  const passwordErr = validatePassword(password); 

  // Success prompt to notify user on successful registration
  const [isNotified, setNotified] = useState(false);
  // Failed prompt to notify user on unsuccesful registration
  const [isRegisterError, setRegisterError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // stop page reload
    event.preventDefault();
    
    const form = event.currentTarget;
    // If errors are detected then, don't send to backend
    if (form.checkValidity() === false && firstNameErr && lastNameErr && usernameErr && passwordErr) {
      event.stopPropagation();
      console.log("Input fields errors detected!")
    } else {  // Otherwise, register the user thru fetch() to the Spring Boot Application
      const user = {firstname, lastname, birthday, username, email, password, role};
      try {
        console.log(user);
        // Create a POST request for User Registration
        // http://localhost:18080/api/v1/auth/register
        // from the Spring Boot application 

        const response = await fetch('http://localhost:18080/api/v1/auth/register', {
          method: 'POST',
          headers: { 'Content-Type' : 'application/json' },
          body: JSON.stringify(user) 
        })

        if (!response.ok) { throw new Error('User Registration Failed!'); }
        else {
          setNotified(true);
          navigate("/login");
        }

      } catch (error) {
        setRegisterError(true);
        console.log("Something went wrong to sending POST request to backend!");
        console.error(error);
      }
    }

    setValidated(true);
  };

  return (
    <>
      {isNotified && (
        <Alert variant={"success"}>You are now registered! Redirecting to login</Alert>
      )}
      {isRegisterError && (
        <Alert variant={"danger"}>Cannot register user! Something went wrong with the backend</Alert>
      )}
      <Form 
        noValidate 
        validated={validated} 
        onSubmit={handleSubmit}>
        {/* Firstname */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInputFirstName" label="First name">
            <Form.Control 
            required 
            type="text" 
            minLength={5}
            maxLength={255}
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
          <FloatingLabel controlId="floatingInputLastName" label="Last name">
            <Form.Control 
            required 
            type="text" 
            minLength={5}
            maxLength={255}
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
          <FloatingLabel controlId="floatingInputBirthday" label="Birthday">
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
          <FloatingLabel controlId="floatingInputUsername" label="Username">
            <Form.Control required 
            type="text"
            minLength={5}
            maxLength={20}
            value={username}
            onChange={handleUsernameChange}
            placeholder="jamesbond007" />
            <Form.Control.Feedback type="invalid">
              {usernameErr}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInputEmail" label="Email">
            <Form.Control required 
            type="email"
            minLength={5}
            maxLength={255}
            value={email}
            onChange={handleEmailChange}
            placeholder="name@example.com" />
            <Form.Control.Feedback type="invalid">
              {emailErr}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <FloatingLabel controlId="floatingInputPassword" label="Password">
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
