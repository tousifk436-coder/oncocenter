import React from "react";

const FormSection = () => {
  return (
    <section className="w-full py-16 px-6 bg-gray-100">
      
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-sm text-blue-500 font-semibold uppercase">
          BOOK YOUR APPOINTMENT NOW
        </h2>
        <h1 className="text-4xl font-bold text-gray-800">
          Schedule Appoinment Today
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          
          {/* Form Heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Book an appointment
            </h1>
            <h2 className="text-gray-500">
              Scheduling a consultation is the first step toward achieving
your health and wellness goals with trusted expert support.
            </h2>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Patient name" className="input" />
            <input type="text" placeholder="patient Age" className="input" />
            <input type="number" placeholder="Appointment Date" className="input" />
            <input type="time" placeholder="Appointment time" className="input" />
            <input type="date" placeholder="Previous Appointment date" className="input" />
            <input type="text" placeholder="Gender" className="input" />
            <input type="tel" placeholder="phone number" className="input" />
            <input type="email" placeholder="Email Address" className="input" />
            <input type="text" placeholder="doctor name" className="input" />
            <textarea placeholder="Message" rows="3" className="input"></textarea>

            <button className="bg-orange-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Book Now
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full h-full">
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/contact.jpg"
            alt="Contact"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default FormSection;