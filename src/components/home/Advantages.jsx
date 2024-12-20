import React from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { TruckIcon } from "@heroicons/react/24/solid";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

function Advantages() {
  const cards = [
    {
      logo: <HandThumbUpIcon className="h-16 w-16 text-[#EC8B22]" />,
      title: "PharmacyChecker Approved",
      info: "Accredited Pharmacy backed by",
      compliment: "10-year experience",
    },
    {
      logo: <TruckIcon className="h-16 w-16 text-[#EC8B22]" />,
      title: "Free Shipping",
      info: "All Across USA -",
      compliment: "For New Customers",
    },
    {
      logo: <TruckIcon className="h-16 w-16 text-[#EC8B22]" />,
      title: "LTFS Shipping",
      info: "Pay once get subsequent order",
      compliment: "Free Shipping",
    },
    {
      logo: <ShieldCheckIcon className="h-16 w-16 text-[#EC8B22]" />,
      title: "100% Secure Transaction",
      info: "Secure & Fast Checkout",
      compliment: "SSL Encrypted",
    },
  ];
  return (
    <div>
      <section id="advantages" className="py-12 bg-blue-50 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
          Advantages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="text-center rounded-tl-[70px] rounded-br-[70px] p-4 border rounded-lg shadow-md hover:shadow-lg bg-white transition-all duration-300"
            >
              <div className="flex justify-center items-center mb-4">
                {card.logo}
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-2">{card.info}</p>
              <p className="text-sm text-gray-500 font-semibold">
                {card.compliment}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Advantages;
