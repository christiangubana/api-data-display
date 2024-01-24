// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">CRG - Assessment</h1>
        </div>
        {/* <nav className="hidden sm:flex space-x-4">
            // Placholder buttons - Don't expect these to function
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
