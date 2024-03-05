/** 
 * @param {*} username to assign in the dynamic path at the user home
 */
export const UserCookie = (username) => {
  const dynamicPath = `/${username}/home`;
  let usernameCookieWithPath = (document.cookie =
    `username=${username};`.concat(dynamicPath));
  console.log(usernameCookieWithPath);
};