import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow flex items-center justify-center text-white text-9xl">
        Services
      </div>

      <Footer />
    </div>
  );
};

export default Services;
