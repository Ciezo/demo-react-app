export const validatePassword = (password) => {
    if (!password) return "Please, provide a password!";
    if (password.length < 5) return "Password should at least contain 5 characters!";
  
    return; // No error
  };