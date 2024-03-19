/**
 * Validate last name input
 * @param {string} lastname
 * @returns error message if any error is found.
 * 
 * @note Names should only contain alphabet, commas, and apostrophe.
 * 
 * To allow international names a string pattern must have the following:
 * /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
 *  
 * @reference https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
 */
export const validateLastNameOnly = (lastname) => {
  lastname = lastname.trim();
  const pattern = /^[a-z ,.'-]+$/i;
  
  if (!lastname) return "Last name is required";
  else if (!pattern.test(lastname)) return "Special characters such as periods, commas, hyphens, and forward or back slashes are not allowed. Examples: [-!$%^&*()_+|~=`{}[]:";
  else if (/\d/.test(lastname)) return "Last names should not contain numbers";
  else if (lastname.length < 5) return "Last names must be at least 5 characters";
  else if (lastname.length > 255) return "Last names should not exceed 255 characters";
  else return; // No error
};
