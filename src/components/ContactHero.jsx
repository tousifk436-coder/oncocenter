import React from "react";

const ContactHero = () => {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-r from-violet-100 via-purple-100 to-indigo-100">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Begin Your Path to
Expert Cancer Care
          </h1>

          <p className="text-gray-600 mb-6">
            Reach out now to schedule your consultation with our cancer care specialists.
          </p>

          {/* Button + Phone */}
          <div className="flex items-center gap-6">
            
            <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition">
              Scedule an appointment
              <span className="text-lg">→</span>
            </button>

            <p className="text-gray-800 font-semibold">
              📞 +91 98765 43210
            </p>

          </div>
        </div>

        {/* Right Side */}
        <div>
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/about/pathnew.png"
            alt="hero"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactHero;