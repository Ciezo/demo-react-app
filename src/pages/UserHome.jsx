import React from "react";
import Header from "../components/Header";
import { UserCookie } from "../utils/UserCookie";

function UserHome() {

  let usernameCookie = UserCookie('')

  return (
    <>
      <div className="container-sm mx-auto pt-5">
        <Header 
        text={`Hello, ${usernameCookie}`} 
        size={2} />
      </div>
    </>
  );
}

export default UserHome;