import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid"; // Importing the arrow icon

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition-all"
      >
        <ChevronUpIcon className="h-6 w-6" />
      </div>
    )
  );
}

export default ScrollToTop;
