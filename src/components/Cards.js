import React from 'react';

function Cards({ header, body, isRowReverse }) {
  return (
    <div>
      <div className="p-4 p-md-5 border rounded-3 mb-5">
        <div
          className={`row ${
            isRowReverse ? "flex-lg-row-reverse" : "flex-lg-row"
          } 
        align-items-center g-5 py-5`}
        >
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              {header}
            </h1>
          </div>
          <div className="col-lg-6">
            <p className="lead">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
