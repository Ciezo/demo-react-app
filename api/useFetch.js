/**
 * <p>
 * Base URL: The consistent part or the root of your website’s address. For example, http://www.YourDomain.com
 * Relative URL: The remaining path given after the base URL. For example, /contact_us, /seo/blog/new_postF
 * 
 * Examples:
 * Absolute URL: www.yourdomain.com/blog/seo/my-first-page
 * Base URL: www.yourdomain.com
 * 
 * Relative URL:
 *  - Prefix URL: /blog/seo
 *  - Entry-specific URL: /my-first page
 * </p>
 * <p>
 * Reference: https://www.contentstack.com/docs/developers/create-content-types/understand-default-url-pattern  
 * </p> 
 */

import { useState, useEffect } from "react";

/**
 * This is a configured `fetch()` where it is set to send request 
 * to catch a resource based on the relativeURL, and return a reponse in JSON format. 
 * @param {string} relativeURL, the identifying resource to fetch. 
 * @returns converted `Response` object in JSON format.
 */
const useFetch = (relativeURL) => {
  const baseURL = "http://localhost:18080/api/v1";
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(baseURL + relativeURL, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            setError(res.Error);
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [relativeURL]);

  return { data, isPending, error };
};

export default useFetch;