import React, { useEffect } from "react";
import { extract_auth_state } from "../utils/ExtractAuthState";
import { extract_auth } from "../utils/ExtractAuth";

function TestApiCallsUsingFetchToSpringBoot() {
  let author = extract_auth_state("_auth_state");
  let token = extract_auth();

  let baseURL = "http://localhost:18080/api/inkdown/v1";
  let relativeURL = `/notes/author?author=${author.user}`;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(baseURL + relativeURL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const parsedJSONResponse = await response.json();
          console.log(parsedJSONResponse);
        }
      }; fetchData();
    } catch (error) {
      console.log("Something went wrong with fetch!");
      console.error(error);
    }
    
  }, [baseURL, relativeURL, token])


  return (
    <>
      <div className="lead">Check browser console...</div>
    </>
  );
}

export default TestApiCallsUsingFetchToSpringBoot;
