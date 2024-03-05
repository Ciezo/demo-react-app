export const UserCookie = (username) => {
    let usernameCookie = document.cookie = `username=${username}`;
    if(username === '') return usernameCookie;   
    console.log(usernameCookie)
    return usernameCookie;
};

