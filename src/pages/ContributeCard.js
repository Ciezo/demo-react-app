import React from "react";

function ContributeCard() {
  return (
    <>
      <div className="p-4 p-md-5 border rounded-3 mb-5">
        <h3 className="display-6">Issues</h3>
        <p>If, you spot a problem. Please, open an issue.</p>
        <h3 className="display-6">Solve an issue</h3>
        <p>Comment and search through labels. If, you have any solutions to problems, please reply a comment to the current opened issue</p>
        <h3 className="display-6">Make changes</h3>
        <p>
            <ol>
                <li> Clone this repository </li>
                <li> Create your own branch </li>
                <li> Submit a pull request </li>
            </ol>
        </p>
      </div>
    </>
  );
}

export default ContributeCard;
