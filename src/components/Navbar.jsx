import React from "react";

const Navbar = () => {
  const menuItems = [
    {
      name: "Home",
      dropdown: ["Overview", "Updates", "News"],
    },
    {
      name: "About",
      dropdown: ["Surgical Oncology", "medical oncology", "critical care","pain clinic"],
    },
    {
      name: "Our services",
      dropdown: ["cancer Speciality", "general service"],
    },
    {
      name: "Gallery",
      dropdown: ["Seminars", "Events", "Awarness program","hospital activities"],
    },
    {
      name: "others",
      dropdown: ["Our team", "career"],
    },
   
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
            alt="Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 items-center font-medium text-gray-700">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              
              {/* Anchor */}
              <span className="hover:text-blue-600 transition">
                {item.name}
              </span>

              {/* Dropdown */}
              <div className="absolute left-0 top-8 hidden group-hover:block bg-white shadow-lg rounded-lg w-52 py-2">
                {item.dropdown.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Make an Appointment
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;