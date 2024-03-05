import React from "react";
import ContributeCard from "../components/ContributeCard";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contribute() {
  return (
    <>
      <CustomNavbar />
      <div className="container-sm mx-auto pt-5">
        <ContributeCard />
      </div>
      <Footer />
    </>
  );
}

export default Contribute;
