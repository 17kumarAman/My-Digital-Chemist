import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa6";

function AppDownload() {
  return (
    <section id="app-download" className="py-12 bg-white px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Download Our App
          </h2>
          <p className="text-gray-600 mb-6">
            Get instant access to our platform on your smartphone. Experience
            fast delivery, secure payments, and expert advice at your
            fingertips.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
              <BiLogoPlayStore className="w-8 h-8" />
              <span className="text-blue-600 font-semibold">Google Play</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-700">
              <FaAppStore className="w-8 h-8" />
              <span className="text-blue-600 font-semibold">App Store</span>
            </div>
          </div>
        </div>
        <img
          src="src\assets\Screenshot 2024-12-18 203914.png"
          alt="App Preview"
          className="rounded-lg shadow-lg w-full md:w-auto max-w-sm"
        />
      </div>
    </section>
  );
}

export default AppDownload;
