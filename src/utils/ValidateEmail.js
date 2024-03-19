/**
 * Validate user email
 * @param {string} email 
 * @returns error message if any error is found.
 * 
 * @note Emails should only contain alphabets, numbers, periods, hyphens, and @ symbol  
 */
export const validateEmail = (email) => {
  email = email.trim();
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!email) return "Please, provide an email!";
  else if (!pattern.test(email)) return "Please, enter a VALID email address! Alphabets, numbers, periods, hyphens, and @ symbol is only allowed!";

  else return; // No error
};
