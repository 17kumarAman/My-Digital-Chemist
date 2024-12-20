import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Importing icons
import Logo from "./Logo";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <a href="/">
        <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between gap-6">
          <div className="flex gap-6 items-center">
            <a href="#home" className="text-blue-600 hover:text-blue-800">
              Home
            </a>
            <a href="#about" className="text-blue-600 hover:text-blue-800">
              About Us
            </a>
            <a href="#offer" className="text-blue-600 hover:text-blue-800">
              We Offer
            </a>
            <a href="#advantages" className="text-blue-600 hover:text-blue-800">
              Advantages
            </a>
            <a href="#faq" className="text-blue-600 hover:text-blue-800">
              FAQ
            </a>
          </div>
          {/* Download Button on Desktop */}
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700">
            Download App
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-600 hover:text-blue-800"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-blue-600 hover:text-blue-800">
              Home
            </a>
            <a href="#about" className="text-blue-600 hover:text-blue-800">
              About Us
            </a>
            <a href="#offer" className="text-blue-600 hover:text-blue-800">
              We Offer
            </a>
            <a href="#advantages" className="text-blue-600 hover:text-blue-800">
              Advantages
            </a>
            <a href="#faq" className="text-blue-600 hover:text-blue-800">
              FAQ
            </a>
            {/* Download Button on Mobile */}
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700">
              Download App
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
