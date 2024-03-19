/**
 * Validate first name input
 * @param {string} firstname
 * @returns error message if any error is found.
 *
 * @note Names should only contain alphabet, commas, and apostrophe.
 * 
 * To allow international names a string pattern must have the following: 
 * /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
 * 
 * @reference https://stackoverflow.com/questions/2385701/regular-expression-for-first-and-last-name
 */
export const validateFirstNameOnly = (firstname) => {
  firstname = firstname.trim();
  const pattern = /^[a-z ,.'-]+$/i;
  
  if (!firstname) return "First name is required";
  else if (!pattern.test(firstname)) return "Special characters such as periods, commas, hyphens, and forward or back slashes are not allowed. Examples: [-!$%^&*()_+|~=`{}[]:";
  else if (/\d/.test(firstname)) return "First names should not contain numbers";
  else if (firstname.length < 5) return "First names must be at least 5 characters";
  else if (firstname.length > 255) return "First names should not exceed 255 characters";
  else return; // No error
};
