import React, { useState } from "react"; 
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

function Faqs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      question: "What is My Digital Chemist?",
      answer:
        "My Digital Chemist is an online platform for ordering medicines and healthcare products conveniently.",
    },
    {
      question: "How do I order medicines?",
      answer:
        "You can search for the required medicines, add them to your cart, and place an order with a few clicks.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we prioritize your privacy and ensure that your data is kept secure and confidential.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div>
      <section id="faq" className="py-12 bg-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="p-4 border rounded-md shadow">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold text-blue-800">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" />
                )}
              </div>
              {openFAQ === index && (
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faqs;
