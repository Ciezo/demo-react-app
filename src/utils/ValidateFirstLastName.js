export const validateFirstLastName = (name) => {
  if (!name) return "First or last name is required";
  if (/\d/.test(name)) return "First or last names should not contain numbers";
  if (name.length < 5) return "First or last names must be at least 5 characters";
  if (name.length > 255) return "First or last names should not exceed 255 characters";

  return; // No error
};