import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Freebook></Freebook>
      <Footer></Footer>
    </>
  );
}

export default Home;
