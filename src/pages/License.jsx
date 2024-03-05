import React from "react";
import LicenseCard from "../components/LicenseCard";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function License() {
  return (
    <>
      <CustomNavbar />
      <div className="container-sm mx-auto pt-5">
        <LicenseCard />
      </div>
      <Footer />
    </>
  );
}

export default License;
