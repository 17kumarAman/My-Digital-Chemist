import React from 'react'

function About() {
  return (
    <div>
      <section id="about" className="py-12 bg-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
          About Us
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6 text-sm md:text-lg">
          At My Digital Chemist, we are dedicated to making healthcare accessible to
          everyone. Our platform ensures a seamless and reliable experience for
          ordering medicines and healthcare products online.
        </p>
        <img
          src="https://sayacare.in/_next/static/media/home_banner_desktop_1.d5b35970.webp"
          alt="About Us"
          className="mx-auto rounded-lg shadow-md "
        />
      </section>
    </div>
  )
}

export default About
