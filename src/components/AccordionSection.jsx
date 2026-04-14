import React, { useState } from "react";
import { motion } from "framer-motion";

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Expert Oncology Specialists",
      content: "hisbyigbryysdyibyifbid.",
    },
    {
      title: "Comprenshive Cancer Services under one roof",
      content: "Our team consists of experienced developers and designers.",
    },
    {
      title: "Advanced Technology and modern Facilities",
      content: "We are always available to support your business anytime.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-blue-600 font-semibold mb-2">
            Why Choose Us
          </h2>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            
Trusted Excellence in
Comprehensive Cancer
Care
          </h1>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-6"
          >
            At OncoCenter Hospital, we combine expert oncologists, advanced medical technology, and a patient-first approach to deliver comprehensive, compassionate, and effective cancer care. With multidisciplinary specialists, modern facilities, and 24×7 critical support—all under one roof—we ensure every patient receives personalized treatment and the highest standards of clinical excellence.
          </motion.p>

          {/* Accordion */}
          <div className="space-y-4 mb-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="border-b pb-3"
              >

                {/* Heading */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <span className="text-xl">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </div>

                {/* Animated Content */}
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-600 mt-2"
                  >
                    {item.content}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>

          <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            READ MORE
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/010.jpg"
            className="w-72 rounded-2xl shadow-lg"
          />

          <img
            src="https://oncocentrecancer.com/assets/img/och-images/11.jpg"
            className="w-60 rounded-2xl shadow-xl absolute top-[-30px] right-0"
          />
        </div>

      </div>
    </section>
  );
};

export default AccordionSection;