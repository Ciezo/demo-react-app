import React from 'react';

function SignupForm() {
  return (
    <>
      <div>
        <form
          className="needs-validation p-4 p-md-5 border rounded-3"
          novalidate
          action=""
          method=""
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              id="floatingInput"
              className="form-control"
            />
            <label for="floatingInput">
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
            />
            <label for="floatingInput">
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
            />
            <label for="floatingDate">
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
            />
            <label for="floatingUsername">
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
            />
            <label for="floatingPassword">
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
