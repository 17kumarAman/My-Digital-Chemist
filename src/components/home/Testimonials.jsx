import React from "react";
import { FaUserSecret } from "react-icons/fa6";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Amazing platform! Fast delivery and excellent customer support.",
    },
    {
      name: "Jane Smith",
      feedback:
        "Wide range of products and very easy to navigate. Highly recommend!",
    },
    {
      name: "Michael Brown",
      feedback:
        "Secure payments and expert advice make this my go-to pharmacy.",
    },
  ];

  return (
    <section id="testimonials" className="py-12 bg-gray-100 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
        What Our Customers Say
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all text-center"
          >
            <FaUserSecret className="w-16 h-16 rounded-full mx-auto mb-4" />
            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            <h3 className="text-blue-800 font-semibold mt-4">
              {testimonial.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
