import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-emerald-950 text-white flex py-5 px-10 items-center-safe justify-between">
      <Link className="text-3xl font-bold" to="/">Voice-Bot</Link>
      <div className="flex text-xl items-center gap-7">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
};

export default Header;
