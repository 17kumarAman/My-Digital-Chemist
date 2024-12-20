import React from "react";

function Banner() {
  return (
    <div>
      <section id="home" className="text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Your Trusted Online Pharmacy
        </h2>
        <p className="text-lg md:text-xl text-blue-600 mb-6">
          Get your medicines delivered to your doorstep quickly and easily.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search for medicines..."
            className="w-full max-w-lg py-2 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
            Search
          </button>
        </div>
        <img
          src="https://assets.sayacare.in/api/images/home_banner/new_arrival_banner_desktop_2.webp"
          alt="Healthcare Banner"
          className="mx-auto rounded-lg shadow-md"
        />
      </section>
    </div>
  );
}

export default Banner;
