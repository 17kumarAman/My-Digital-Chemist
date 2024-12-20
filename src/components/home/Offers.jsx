import React from "react";

function Offers() {
  // Define services as an array of objects
  const services = [
    {
      title: "Fast Delivery",
      description:
        "Get your medicines delivered quickly and efficiently, with free shipping on all orders.",
    },
    {
      title: "Wide Range of Products",
      description:
        "We offer a wide selection of medicines, health supplements, and wellness products.",
    },
    {
      title: "Secure Payment",
      description:
        "Enjoy safe and secure online payments with multiple payment options.",
    },
    {
      title: "Expert Advice",
      description:
        "Get expert medical advice and consultation from certified health professionals.",
    },
    {
      title: "Easy Returns",
      description:
        "If you're not satisfied with your order, we offer hassle-free returns and refunds.",
    },
    {
      title: "24/7 Support",
      description:
        "Our customer support team is available 24/7 to assist you with any inquiries or concerns.",
    },
  ];

  return (
    <section id="offer" className="py-12 bg-gray-50 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
        What We Offer
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Map through the services array */}
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;
