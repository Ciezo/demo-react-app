/**
 * Extracts the cookie value set by `react-auth-kit` 
 * specifically the cookie value for `_auth_state`
 * @param {string} cookie_name the name of the cookie to extract
 * @return parsed cookies with key-value pairs 
 * @example {user: <username>, role: note_author}
 * @note To get the user value use the `user` key
 * 
 * <p>
 * This took a lot of research...prompt engineering...pain....and tears 😭😭😭
 * I think it is better to 
 * </p>
 */
export function extract_auth_state(cookie_name) {
  cookie_name = cookie_name.trim();
  /** Using pure regex to extract a cookie by force...
   * Reference: https://stackoverflow.com/questions/51109559/get-cookie-with-react 
   * */ let pattern = new RegExp( `(?:(?:^|.*;\\s*)${cookie_name}\\s*=\\s*([^;]*).*$)|^.*$` );


  // This is raw like this
  // {%22user%22:%22cloydvan%22%2C%22role%22:%22note%20author%22}
  let temp_cookie_value = document.cookie.replace(pattern, "$1").trim("{}");
  // Pre-process the cookie by hand...to clean it for parsing in key-value pairs...
  let preprocess_cookie_value = 
        temp_cookie_value
        .replace("{", "")
        .replace(/%22/g, "")
        .replace(/%2C/g, ",")
        .replace(/%20/g, " ")
        .replace("}", "")
        .replace(",", " ");

  // Now, it looks like this
  // user:cloydvan role:note_author
  let clean_cookie_value = preprocess_cookie_value.replace();
  // Now, we can parse them
  const parseKeyValueCookie = parseKeyValueString(clean_cookie_value);

  return parseKeyValueCookie;
}

function parseKeyValueString(inputString) {
  const keyValuePairs = inputString.split(" ");

  const result = {};
  for (const pair of keyValuePairs) {
    const [key, value] = pair.split(":");
    result[key] = value;
  }

  return result;
}
