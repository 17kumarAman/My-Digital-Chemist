import React from "react";

function NeedHelp() {
  return (
    <section id="need-help" className="py-12 bg-blue-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Need Help?
        </h2>
        <p className="text-gray-600 text-sm md:text-lg mb-6">
          We're here to assist you with any questions or concerns you may have.
          Our team is available 24/7 to provide support and guidance.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md shadow hover:bg-blue-700 transition">
            Contact Support
          </button>
          <button className="bg-white border border-blue-600 text-blue-600 py-2 px-6 rounded-md shadow hover:bg-blue-100 transition">
            Visit FAQs
          </button>
        </div>
      </div>
    </section>
  );
}

export default NeedHelp;
