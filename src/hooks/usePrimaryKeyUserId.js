import { useState, useEffect } from "react";
import { extract_auth } from "../utils/ExtractAuth";
/**
 * A <b>custom hook</b> to extract the `user_id` primary key from the `User` entity table
 * <b>This can be used for functional level components.</b>
 * @param {string} username
 * @return userId a primary key to identify a `User` row from `User` entity
 */
const usePrimaryKeyUserId = (username) => {
  const baseURL = "http://localhost:18080/api/inkdown/v1";
  const [token, setToken] = useState("");
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const getUserId = async () => {
      setToken(extract_auth);
      
      try {
        const response = await fetch(baseURL + `/user/${username}`, {
          headers: { Authorization: `Bearer ${token}` },
          signal: abortCont.signal
        });

        if (response.ok) {
          // We're expecting the data is just a single value
          // Example: 1
          const parsedData = await response.json();
          setData(parsedData);
          setUserId(data);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
          console.log("safe abort.")
        }
      }
    }; getUserId();
    return () => abortCont.abort();
  }, [username, token, data]);
  
  return { userId };
};

export default usePrimaryKeyUserId;