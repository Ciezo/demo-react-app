/**
 * Validate a user's name.
 * @param {string} name for first name input or last name input 
 * @returns an error message if any errors found.
 * 
 * @note Names should only contain alphabet, commas, apostrophe, and support international names
 * /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
 * 
 * @reference https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
 */
export const validateFirstLastName = (name) => {
  name = name.trim();
  const pattern = /^[a-zA-Z ,.'-]+$/i;
  
  if (!name) return "First or last name is required";
  else if(!pattern.test(name)) return "Provide a VALID last name! Asterisks, semicolons, single quotes, double quotes, backslash, underscore, pipes, percent sign, underscore, are not allowed!";
  else if (/\d/.test(name)) return "First or last names should not contain numbers";
  else if (name.length < 5) return "First or last names must be at least 5 characters";
  else if (name.length > 255) return "First or last names should not exceed 255 characters";

  else return; // No error
};