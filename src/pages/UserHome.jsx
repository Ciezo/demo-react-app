import React from "react";
import { getUserCookie } from "../utils/GetUserCookie";
import UserHomeNavbar from "../components/UserHomeNavbar";

function UserHome() {
  let usernameCookie = getUserCookie("username");

  return (
    <>
      <UserHomeNavbar 
      username={usernameCookie}/>
      <div className="container-sm mx-auto pt-5">
      </div>
    </>
  );
}

export default UserHome;
