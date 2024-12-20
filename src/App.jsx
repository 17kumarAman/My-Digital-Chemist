import { useState } from "react";

import "./App.css";
import Navbar from "./components/home/Navbar";
import Banner from "./components/home/Banner";
import About from "./components/home/About";
import Advantages from "./components/home/Advantages";
import Faqs from "./components/home/Faqs";
import Footer from "./components/home/Footer";
import Offers from "./components/home/Offers";
import ScrollToTop from "./components/home/ScrollToTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Banner />

      {/* About Us Section */}
      <About />
      <Offers />
      {/* Advantages Section */}
      <Advantages />

      {/* FAQ Section */}
      <Faqs />

      {/* Footer Section */}
      <ScrollToTop/>
      <Footer />
    </div>
  );
}

export default App;
