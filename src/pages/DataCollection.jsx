import React from "react";
import DataCollectionCard from "../components/DataCollectionCard";
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function DataCollection() {
  return (
    <>
      <CustomNavbar />
      <div className="container-sm mx-auto pt-5">
        <DataCollectionCard />
      </div>
      <Footer />
    </>
  );
}

export default DataCollection;
