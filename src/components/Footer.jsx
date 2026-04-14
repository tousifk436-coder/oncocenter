import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
              alt="logo"
              className="w-10 h-10"
            />
            <h1 className="text-xl font-bold">OncoCenter</h1>
          </div>
          <p className="text-gray-400">
            Delivering world-class cancer care through advanced technology, expert specialists, and unwavering compassion for every patient.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Quick Links</h1>
          <div className="flex flex-col gap-2 text-gray-400">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">our Teams</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">book Appointment</a>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h1 className="text-lg font-semibold mb-4"> popular Services</h1>
          <div className="flex flex-col gap-2 text-gray-400">
            <a href="#" className="hover:text-white">Cancer Surgery</a>
            <a href="#" className="hover:text-white">Chemotherapy</a>
            <a href="#" className="hover:text-white">Immunotherapy</a>
            <a href="#" className="hover:text-white">Radiation Therapy</a>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Contact Us</h1>

          <p className="text-gray-400 mb-2">📞 +91 91511 00990</p>

          <h2 className="text-gray-400">oncocentercancer@gmail.com</h2>
          <h2 className="text-gray-400 mb-4">
            Lucknow, Uttar Pradesh, India
          </h2>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a className="bg-gray-800 p-2 rounded-full hover:bg-violet-500">
              <FaFacebookF />
            </a>
            <a className="bg-gray-800 p-2 rounded-full hover:bg-violet-500">
              <FaInstagram />
            </a>
            <a className="bg-gray-800 p-2 rounded-full hover:bg-violet-500">
              <FaTwitter />
            </a>
            <a className="bg-gray-800 p-2 rounded-full hover:bg-violet-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © 2026 OncoCenter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;