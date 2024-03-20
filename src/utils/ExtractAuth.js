/**
 * Extracts the JWT token (a cookie value) set by `react-auth-kit` 
 * @returns token {string}
 * @example '_auth=<jwt>'
 * @reference https://www.w3schools.com/js/js_cookies.asp
 */
export function extract_auth() {
  let name = "_auth=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
