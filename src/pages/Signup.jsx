import React from "react";
import SignupForm from "../components/SignupForm";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
  return (
    <>
      <CustomNavbar />
      <div className="container col-xl-10 col-xxl-10 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Embark on an Extraordinary Journey with Inkdown! 🚀
            </h1>
            <p className="col-lg-10 fs-4">
              Are you ready to unleash your creativity and elevate your
              note-taking game to unprecedented heights? Look no further than
              Inkdown, it will revolutionize the way you capture your thoughts
              and ideas! 🌟
            </p>
          </div>

          <div className="col-md-10 mx-auto col-lg-5">
            <SignupForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
