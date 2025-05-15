import React from "react";

const Header = () => {
  return (
    <>
      <nav className="bg-emerald-950 text-white flex py-5 px-10 items-center-safe justify-between">
        <h2 className="text-4xl font-bold">Voice-Bot</h2>
        <div className="flex items-center gap-7">
          <h4 className="text-xl">About</h4>
          <h4 className="text-xl">Contact</h4>
          <h4 className="text-xl">Services</h4>
          <h4 className="text-xl">Your Account</h4>
        </div>
      </nav>
    </>
  );
};

export default Header;
