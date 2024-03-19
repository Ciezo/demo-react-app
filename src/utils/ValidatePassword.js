/**
 * Validate user password
 * @param {string} password 
 * @returns an error message if there is an error otherwise, returns an empty string
 */
export const validatePassword = (password) => {
    if (!password) return "Please, provide a password!";
    else if (password.length < 5) return "Password should at least contain 5 characters!";  
    else return; // No error
};