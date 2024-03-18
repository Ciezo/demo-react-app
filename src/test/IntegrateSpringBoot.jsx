import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function TestSpringBootIntegration() {
  const [data, setData] = useState();
  const [isError, setError] = useState(false);
  const [errors, setErrors] = useState([]);

  const getResponseFromSpringBoot = async () => {
    try {
      const response = await fetch("/api/v1/demo-controller/test");
      console.log(response);

      if (!response.ok) {
        console.log(
          "There was a problem in getting the response from Spring Boot!"
        );
        console.log("Response is not parsed to json");
        throw new Error("Response was not ok");
      }

      console.log("Parsing data to json");
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(true);
      setErrors(error);
    }
  };

  useEffect(() => {
    getResponseFromSpringBoot();
  }, []);

  return (
    <>
      <div className="mt-5 my-5 px-2 back-to-home">
        <p className="mt-4 mx-2">
          <Link to={"/"}>Back to /</Link>
        </p>
      </div>

      {/* If no errors occurred then, render the response! */}
      {isError && (
        <div className="justify-content-center px-5 mt-5 mx-auto response-ok">
          <h5>Response from Spring Boot application</h5>
          <small>If it's not showing up here then, check browser console</small>
          <p className="lead">{data}</p>
        </div>
      )}

      {/* If errors occurred, prompt the user to check browser console */}
      {!isError && (
        <div className="justify-content-center px-5 mt-5 mx-auto error-occurred">
          <p>An error occurred!</p>
          <p>Please, check the browser console</p>
          <h5>Errors: </h5>
          <p className="text-danger">{errors}</p>
        </div>
      )}
    </>
  );
}

export default TestSpringBootIntegration;
