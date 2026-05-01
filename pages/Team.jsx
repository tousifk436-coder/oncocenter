import React from "react";

const doctors = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Senior Oncologist",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Priya Verma",
    role: "Radiation Specialist",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Amit Singh",
    role: "Cancer Surgeon",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

const Team = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Medical Experts
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
          >
            <img
              src={doc.img}
              alt={doc.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{doc.name}</h2>
            <p className="text-gray-500">{doc.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;