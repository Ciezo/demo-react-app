import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="justify-content-center p-4 mx-2 my-5">
        <div id="shadow_hover">
          <div className="p-4 p-md-5 border rounded-3 mb-5">
            <div className="row my-5 px-2">
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  Woops! Resource not found!
                  <p className="lead mt-4">
                    Sorry, we didn't get what you were looking for!
                  </p>
                  <small className="lead text-danger">Error 404</small>
                  <p className="lead mt-4">
                    <Link to={"/"}>Take me back home!</Link>
                  </p>
                </h1>
              </div>
              <div className="col-lg-6">
                {/* About loading local images using a Webpack like React.js */}
                {/* https://stackoverflow.com/questions/34582405/react-wont-load-local-images */}
                <img
                  src={require("../assets/img/PLuto.png")}
                  alt="Say hi to Pluto!"
                />
              </div>
            <p className="lead">Hello, Pluto!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
