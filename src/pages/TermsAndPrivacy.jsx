import React from "react";
import TermsCard from "../components/TermsCard";
import PrivacyCard from "../components/PrivacyCard";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function TermsAndPrivacy() {
  return (
    <>
      <CustomNavbar />
      <div className="container-sm mx-auto pt-5">
        <TermsCard />
        <div className="mb-3"></div>
        <PrivacyCard />
      </div>
      <Footer />      
    </>
  );
}

export default TermsAndPrivacy;
