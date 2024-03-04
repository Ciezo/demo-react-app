import React from "react";
/**
 * 
 * @todo March 5, 2024 
 * REFACTOR THIS INTO REACT-BOOTSTRAP
 */
function LoginForm() {
  return (
    <>
      <div>
        <form
          className="needs-validation p-4 p-md-5 border rounded-3"
          /**@note I need to comment this out first because 
           * I have no Spring Boot API yet
            */
          // action=""
          // method=""
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="floatingUsername"
              className="form-control"
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
            />
            <label>
              <i className="fa-solid fa-vault"></i> Password
            </label>
            <span className="invalid-feedback"></span>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Stay signed-in
            </label>
          </div>

          <hr className="my-4" />
          <input
            type="submit"
            name="login-user"
            className="w-100 btn btn-lg btn-success"
            value="Login"
          />
        </form>
      </div>
    </>
  );
}

export default LoginForm;
