export const validateUserName = (username) => {
  if (!username) return "Please, provide a user name!";
  if (username.length < 5) return "Username should at least contain 5 characters!";
  if (username.length > 20) return "Username should not be more than 20 characters";

  return; // No error
};