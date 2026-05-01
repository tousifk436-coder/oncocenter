import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full">

      {/* 🔹 Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1580281657527-47b43a0d45f3"
          alt="Cancer Care"
          className="absolute w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About OnCancer</h1>
          <p className="mt-4 text-lg">
            Compassionate Care. Advanced Treatment. Trusted Experts.
          </p>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67"
            alt="Hospital"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              OnCancer is a dedicated cancer care platform focused on providing
              world-class treatment, personalized patient care, and advanced
              medical solutions. Our team of expert oncologists and healthcare
              professionals ensures every patient receives the best possible
              treatment journey.
            </p>
            <p className="mt-4 text-gray-600">
              We combine technology, research, and compassion to fight cancer
              with strength and hope.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Mission & Vision */}
      <section className="py-16 bg-gray-100 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 text-center">
          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide accessible, affordable, and advanced cancer treatment
              with compassion and care.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a global leader in cancer care and innovation, improving
              survival rates and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose OnCancer
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Expert Oncologists",
            "Advanced Technology",
            "Patient-Centered Care",
            "Affordable Treatment",
            "24/7 Support",
            "Global Standards",
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-gray-600 mt-2">
                Providing high-quality healthcare services with dedication and
                innovation.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Stats Section */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="grid md:grid-cols-4 gap-8 px-6 md:px-20">
          <div>
            <h2 className="text-3xl font-bold">5000+</h2>
            <p>Patients Treated</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">100+</h2>
            <p>Expert Doctors</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p>Centers</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">15+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* 🔹 Team Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Specialists
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((doc) => (
            <div
              key={doc}
              className="text-center p-6 border rounded-xl hover:shadow-lg"
            >
              <img
                src={`https://randomuser.me/api/portraits/men/${doc + 20}.jpg`}
                alt="Doctor"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Dr. John Doe</h3>
              <p className="text-gray-500">Oncologist</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Take the First Step Towards Recovery
        </h2>
        <p className="mb-6">
          Book an appointment with our experts today.
        </p>
        {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Make Appointment
        </button> */}
        

<Link to="/appointment">
  <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
    Make Appointment
  </button>
</Link>
      </section>

    </div>
  );
};

export default About;