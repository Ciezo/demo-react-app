import React from 'react';
import { useState } from 'react';

function SignupForm() {
  // Form values
  /**
   * @note Remember the concepts of setters in OOP where
   * we use it to handle assigning of values to a variable.
   * In this case, React hooks allow the use of Setters to 
   * update the state of assigned values in the given form values.
   */
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Handle form submission (e.g., send data to the server)
    console.log('First name submitted:', firstname);
    console.log('Last name submitted:', lastname);
    console.log('Birthday submitted:', birthday);
    console.log('Username submitted:', username);
    console.log('Password submitted:', password);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}
          className="needs-validation p-4 p-md-5 border rounded-3"
          /** @note I am not going to use POST and action yet because there is no API. */
          /**       I will try submitting this form and console logging them in the browser. */
          // action="/signup-user"
          // method="POST"
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              id="floatingInput"
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label>
              <i className="fa-regular fa-address-card"></i> First name
            </label>
            <span className="invalid-feedback"></span>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              id="floatingInput"
              className="form-control"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label>
              <i className="fa-solid fa-signature"></i> Last name
            </label>
            <span className="invalid-feedback"></span>
          </div>

          <div className="form-floating mb-3">
            <input
              type="date"
              name="birthday"
              id="floatingDate"
              className="form-control"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
            <label>
              <i className="fa-solid fa-cake-candles"></i> Birthday
            </label>
            <span className="invalid-feedback"></span>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="floatingUsername"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>
              <i className="fa-regular fa-user"></i> Username
            </label>
            <span className="invalid-feedback"></span>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="floatingPassword"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>
              <i className="fa-solid fa-vault"></i> Password
            </label>
            <span className="invalid-feedback"></span>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>

          <input
            className="w-100 btn btn-lg btn-primary"
            name="register-user"
            type="submit"
            value="Sign up"
            required
          />
          <hr className="my-4" />
          <small className="text-body-secondary">
            By clicking Sign up, you agree to the terms of use.
          </small>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
