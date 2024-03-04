import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <div className="container col-xl-10 col-xxl-10 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Hello 👋 <br />
              Welcome back!
            </h1>
            <p className="col-lg-10 fs-4">
              Ready to get back in your productivity zone? Login now! 👉
            </p>
          </div>

          <div className="col-md-10 mx-auto col-lg-5">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
