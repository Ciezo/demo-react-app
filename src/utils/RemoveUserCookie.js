/**
 * 
 * @param {*} cookie_name to delete by setting a past date
 */
export const removeUserCookie = (cookie_name) => {
    document.cookie = `${cookie_name}=;`.concat("expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
    console.log("Destroying cookies");
    console.log(cookie_name);
}