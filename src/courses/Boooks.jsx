import React from "react";
import Navbar from "../components/Navbar";
import Books from "../components/Books";
import Footer from "../components/Footer";

function Boooks() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Books></Books>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Boooks;
