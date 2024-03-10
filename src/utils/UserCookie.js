/**
 * Here are some cookie values to set across all pages.
 * <b>No expiration date.</b>
 * @param {string} cookie_name 
 * @param {any} value 
 */
export const UserCookie = (cookie_name, value) => {
  // globally set cookies across all windows
  /** no expiration set because I want to implement session persistance */
  document.cookie = `${cookie_name} = ${value}; path=/`;
};