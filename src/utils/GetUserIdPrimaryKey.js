import { extract_auth } from "./ExtractAuth";
/**
 * Extracts the `user_id` primary key from the `User` entity table
 * @param {string} username
 * @return userId a primary key to identify a `User` row from `User` entity
 */
export function getUserIdPrimaryKey(username) {
  const baseURL = "http://localhost:18080/api/inkdown/v1";
  const token = extract_auth();
  let userId = null;

  const getUserId = async () => {
    try {
      const response = await fetch(baseURL + `/user/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) userId = await response.json();
      
    } catch (error) {
      console.log("Something went wrong..");
      console.error(error);
    }
  };
  getUserId();

  return userId;
}
