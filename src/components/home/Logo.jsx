import React from "react";

function Logo() {
  return (
    <div className="flex items-center space-x-0.5">
      <div className="flex flex-col items-center space-y-[-8px] font-extrabold text-center">
        {/* Top Section */}
        <div className="flex space-x-2 text-xl md:text-2xl">
          <span className="text-blue-600">My</span>
          <span className="text-green-600">Digital</span>
        </div>
        {/* Bottom Section */}
        <div className="flex items-center text-2xl md:text-3xl">
          <span className="text-red-600">Chemist</span>
        </div>
      </div>
      <div className="ml-2 w-5 h-5 bg-yellow-500 rounded-full shadow-md"></div>
    </div>
  );
}

export default Logo;
