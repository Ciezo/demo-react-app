/**
 * Validate username input
 * @param {string} username 
 * @returns an error message if any error is found.
 * 
 * @note valid usernames should start with an alphabet. Valid usernames should start with an alphabet.
 */
export const validateUserName = (username) => {
  username = username.trim();
  const pattern = /^[A-Za-z][A-Za-z0-9_]{6,}$/; 
  
  if (!username) return "Please, provide a username!";
  else if(!pattern.test(username)) return "Please, provide a VALID username! Only letters, numbers, and underscores are allowed. "
  else if (username.length < 5) return "Username should at least contain 5 characters!";
  else if (username.length > 20) return "Username should not be more than 20 characters";

  else return; // No error
};