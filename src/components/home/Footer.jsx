import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // You can use react-icons for social media icons

function Footer() {
  return (
    <div>
      <footer className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                At My Digital Chemist, we are committed to providing convenient and
                reliable healthcare products online. Our goal is to offer a
                seamless and secure shopping experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a href="#home" className="text-sm hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#offer" className="text-sm hover:underline">
                    What We Offer
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p className="text-sm">Email: support@emydigitalchemist.com</p>
              <p className="text-sm">Phone: +123 456 7890</p>
              <p className="text-sm">Address: 123 Pharmacy St, City, Country</p>
            </div>

            
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-6 w-6 hover:text-blue-800" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="h-6 w-6 hover:text-blue-800" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-6 w-6 hover:text-blue-800" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="h-6 w-6 hover:text-blue-800" />
                </a>
              </div>
            </div>
          </div>

         
          <div className="mt-8 text-center">
            <p className="text-sm">
              &copy; 2024 mydigitalchemist. All rights reserved. | Designed by Your
              Company
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
