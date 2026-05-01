import React from "react";

const services = [
  "Cancer Surgery",
  "Chemotherapy",
  "Radiation Therapy",
  "Immunotherapy",
  "Targeted Therapy",
  "Palliative Care",
];

const Services = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 border rounded-xl hover:bg-violet-600 hover:text-white transition duration-300"
          >
            <h2 className="text-xl font-semibold">{service}</h2>
            <p className="mt-3 text-gray-500 group-hover:text-white">
              Advanced treatment with expert care and modern technology.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;