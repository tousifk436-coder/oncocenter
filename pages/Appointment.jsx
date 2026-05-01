import React from "react";

const Appointment = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Book an Appointment
      </h1>

      <form className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow space-y-6">
        <div>
          <label className="block mb-2 font-semibold">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Phone</label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Select Service</label>
          <select className="w-full border p-3 rounded-lg">
            <option>Cancer Surgery</option>
            <option>Chemotherapy</option>
            <option>Radiation Therapy</option>
            <option>Immunotherapy</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            rows="4"
            placeholder="Write your concern"
            className="w-full border p-3 rounded-lg"
          ></textarea>
        </div>

        <button className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Appointment;