import React from 'react';
import Header from './Header';

function WelcomeCard() {
  return (
    <div>
      <div className="p-4 p-md-5 border rounded-3 mb-5">
        <div className="text-center">
          <Header text={"✒️ Inkdown"} size={1} />
          <div className="col-lg-6 mx-auto">
            <p className="display-4 lead mb-4">
              Your friendly in-browser text editor
            </p>
            <p className="lead fw-light text-body-emphasis">
              Experience the Speed of Thought with Inkdown!
            </p>
            <p className="lead">
              Discover a whole new level of personalization with Inkdown's
              lightning-fast, simple, and lightweight platform. Creating
              personalized texts and notes has never been easier! Our intuitive
              interface allows you to unleash your creativity effortlessly.
            </p>
            <div className="d-grid pt-4 gap-2 d-sm-flex justify-content-sm-center">
              <button className="btn btn-primary btn-lg px-4 gap-4">
                Try it now!
              </button>
            </div>
            <span className="lighter">A lightweight yet simple experience!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCard;
