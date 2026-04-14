import React from "react";

const TwoColumnSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Images */}
        <div className="relative flex gap-4 justify-center">
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/3.jpg"
            alt="img1"
            className="rounded-2xl shadow-lg w-1/2 object-cover"
          />
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/4.jpg"
            alt="img2"
            className="rounded-2xl shadow-lg w-1/2 object-cover mt-10"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-blue-600 font-semibold mb-2">
             About OncoCenter Hospital
          </h2>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Delivering
Excellence in Cancer
Care
          </h1>

          <p className="text-gray-600 mb-6">
            OncoCenter Hospital is a leading cancer care institution providing world-class treatment backed by clinical excellence and cutting-edge medical technology. Our mission is to offer holistic and patient-centric oncology care under one roof.
          </p>

          {/* List */}
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              ✅ Compossinate care
            </li>
            <li className="flex items-center gap-2">
              ✅ Innovation
            </li>
            <li className="flex items-center gap-2">
              ✅ Clinical Excellence
            </li>
            <li className="flex items-center gap-2">
              ✅ integrity and transparency
            </li>
          </ul>

          {/* Button */}
          <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default TwoColumnSection;