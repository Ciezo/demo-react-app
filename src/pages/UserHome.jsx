import React from "react";
import Header from "../components/Header";
import { getUserCookie } from "../utils/GetUserCookie";
import UserHomeNavbar from "../components/UserHomeNavbar";

function UserHome() {
  let usernameCookie = getUserCookie("username");

  return (
    <>
      <UserHomeNavbar />
      <div className="container-sm mx-auto pt-5">
        <Header text={`test, ${usernameCookie}`} size={2} />
      </div>
    </>
  );
}

export default UserHome;
