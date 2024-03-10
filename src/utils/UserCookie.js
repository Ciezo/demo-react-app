/** 
 * @param {*} username to assign in the dynamic path at the user home
 */
export const UserCookie = (cookie_name, value) => {
  // globally set cookies across all windows
  /** no expiration set because I want to implement session persistance */
  document.cookie = `${cookie_name} = ${value}; path=/;`;
};