/**
 * A simple async-function to extract the `user_id` primary key from the `User` entity table
 * <b>No problem using with non-functional level components</b>
 * @param {string} username
 * @return userId a primary key to identify a `User` row from `User` entity
 */
async function getUserIdPrimaryKey(username) {
  const baseURL = "http://localhost:18080/api/inkdown/v1";
  
  try {
    const response = await fetch(baseURL + `/user/${username}`, {
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error(
        `Error fetching data: ${response.status} ${response.statusText}`
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
export default getUserIdPrimaryKey;
