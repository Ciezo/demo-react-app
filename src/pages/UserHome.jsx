import React from "react";
import Header from "../components/Header";
import { getUserCookie } from "../utils/GetUserCookie";

function UserHome() {
  let usernameCookie = getUserCookie("username");
  
  return (
    <>
      <div className="container-sm mx-auto pt-5">
        <Header text={`Hello, ${usernameCookie}`} size={2} />
      </div>
    </>
  );
}

export default UserHome;
