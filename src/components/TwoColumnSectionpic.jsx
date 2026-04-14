import React from "react";

const TwoColumnSectionpic = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Image */}
        <div>
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/about/Our-Mission-1.jpg"
            alt="main"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-blue-600 font-semibold mb-2 ">
            ACCOMMODATION FACILITY
          </h2>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Comfortable Stay for
Patients & Attendants
          </h1>

          {/* Small Image + Paragraph */}
          <div className="flex items-start gap-4 ">
            <img
              src="https://oncocentrecancer.com/assets/img/och-images/about/Our-Mission-2.jpg"
              alt="icon"
              className="w-44 h-54 object-cover rounded-lg  "
            />

            <p className="text-gray-600">
              At Oncocentre Cancer Hospital, Lucknow, we understand that cancer treatment often requires patients and their attendants to stay close to the hospital for extended periods. To support this need, we offer safe, comfortable, and conveniently located accommodation facilities designed to provide peace of mind during treatment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TwoColumnSectionpic;