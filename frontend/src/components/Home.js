import React from "react";
import Aboutus from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import HowItWorks from "../pages/HowItWorks";
import Navbars from "../pages/Navbar";

const Home = () => {
  return (
    <>
      <Navbars />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
