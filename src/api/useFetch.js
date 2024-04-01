/**
 * @author iamshaunjp 
 * @author Cloyd Van Secuya
 * GitHub: https://github.com/iamshaunjp 
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
 * 
 * 
 * <p>
 * <h5>Helpful tutorial and practice</h5>
 * How to fetch data from an api using `fetch()`
 * https://www.freecodecamp.org/news/how-to-fetch-data-from-an-api-using-the-fetch-api-in-javascript/
 * </p>
 */

import { useState, useEffect } from "react";

/**
 * This is a configured `fetch()` where it is set to send request 
 * to catch a resource based on the relativeURL, and return a reponse in JSON format. 
 * @param {string} relativeURL the identifying resource to fetch.
 * @param {string} token the Bearer token for Authorization header  
 * @returns converted `Response` object in JSON format.
 */
const useFetch = (relativeURL, token) => {
  const baseURL = "http://localhost:18080/api/inkdown/v1";
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(baseURL + relativeURL, {
            headers: {Authorization: `Bearer ${token}`},
            signal: abortCont.signal
          }) 
          
          // Check the response 
          /** This condition will only be true if something went wrong with fetch-response */
          if(!response.ok) {
            setError('Error code: ' + response.statusText);
            console.log("Something went wrong with fetching data for " + relativeURL)
            throw Error("could not fetch the data for that resource");
          }
          /** Otherwise, if the response object is okay..then we can parse it in JSON */
          const parsedJSONResponse  = await response.json();
          setIsPending(false);
          setData(parsedJSONResponse);
          setError(null);
  
        } catch (error) {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            // auto catches network / connection error
            setIsPending(false);
            setError(error.message);
            console.log(error);
          }
        }
      }; fetchData();
    }, 1000)

    // abort the fetch
    return () => abortCont.abort();
  }, [relativeURL, token]);

  return { data, isPending, error };
};

export default useFetch;