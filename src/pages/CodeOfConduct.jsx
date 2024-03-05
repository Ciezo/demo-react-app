import React from "react";
import CodeOfConductCard from "../components/CodeOfConductCard";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function CodeOfConduct() {
  return (
    <>
      <CustomNavbar />
      <div className="container-sm mx-auto pt-5">
        <CodeOfConductCard />
      </div>
      <Footer />
    </>
  );
}

export default CodeOfConduct;
