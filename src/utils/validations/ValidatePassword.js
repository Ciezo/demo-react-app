export const validatePassword = (password) => {
    if (!password) return "Please, provide a password!";
    if (password.length < 5) return "Password should at least contain 5 characters!";
    if (password.length > 20) return "Password should not be more than 20 characters";
  
    return; // No error
  };