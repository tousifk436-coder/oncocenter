// // // import React from "react";

// // // const Navbar = () => {
// // //   const menuItems = [
// // //     {
// // //       name: "Home",
// // //       dropdown: ["Overview", "Updates", "News"],
// // //     },
// // //     {
// // //       name: "About",
// // //       dropdown: ["Surgical Oncology", "medical oncology", "critical care","pain clinic"],
// // //     },
// // //     {
// // //       name: "Our services",
// // //       dropdown: ["cancer Speciality", "general service"],
// // //     },
// // //     {
// // //       name: "Gallery",
// // //       dropdown: ["Seminars", "Events", "Awarness program","hospital activities"],
// // //     },
// // //     {
// // //       name: "others",
// // //       dropdown: ["Our team", "career"],
// // //     },
   
// // //   ];

// // //   return (
// // //     <nav className="bg-white shadow-md sticky top-0 z-50">
// // //       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

// // //         {/* Logo */}
// // //         <div className="flex items-center">
// // //           <img
// // //             src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
// // //             alt="Logo"
// // //             className="h-10 object-contain"
// // //           />
// // //         </div>

// // //         {/* Menu */}
// // //         <ul className="hidden md:flex space-x-6 items-center font-medium text-gray-700">
// // //           {menuItems.map((item, index) => (
// // //             <li key={index} className="relative group cursor-pointer">
              
// // //               {/* Anchor */}
// // //               <span className="hover:text-blue-600 transition">
// // //                 {item.name}
// // //               </span>

// // //               {/* Dropdown */}
// // //               <div className="absolute left-0 top-8 hidden group-hover:block bg-white shadow-lg rounded-lg w-52 py-2">
// // //                 {item.dropdown.map((subItem, subIndex) => (
// // //                   <a
// // //                     key={subIndex}
// // //                     href="#"
// // //                     className="block px-4 py-2 hover:bg-gray-100"
// // //                   >
// // //                     {subItem}
// // //                   </a>
// // //                 ))}
// // //               </div>
// // //             </li>
// // //           ))}
// // //         </ul>

// // //         {/* Button */}
// // //         <div>
// // //           <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300">
// // //             Make an Appointment
// // //           </button>
// // //         </div>

// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState, useRef, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   const [openIndex, setOpenIndex] = useState(null);
// //   const menuRef = useRef();

// //   const menuItems = [
// //     {
// //       name: "Home",
// //       path: "/",
// //       dropdown: [
// //         { name: "Overview", path: "/" },
// //         { name: "Updates", path: "/updates" },
// //         { name: "News", path: "/news" },
// //       ],
// //     },
// //     {
// //       name: "About",
// //       path: "/about",
// //       dropdown: [
// //         { name: "Surgical Oncology", path: "/surgical" },
// //         { name: "Medical Oncology", path: "/medical" },
// //         { name: "Critical Care", path: "/critical" },
// //         { name: "Pain Clinic", path: "/pain" },
// //       ],
// //     },
// //     {
// //       name: "Our Services",
// //       path: "/services",
// //       dropdown: [
// //         { name: "Cancer Speciality", path: "/cancer-speciality" },
// //         { name: "General Service", path: "/general-service" },
// //       ],
// //     },
// //     {
// //       name: "Gallery",
// //       dropdown: [
// //         { name: "Seminars", path: "/seminars" },
// //         { name: "Events", path: "/events" },
// //         { name: "Awareness Program", path: "/awareness" },
// //         { name: "Hospital Activities", path: "/activities" },
// //       ],
// //     },
// //     {
// //       name: "Others",
// //       dropdown: [
// //         { name: "Our Team", path: "/team" },
// //         { name: "Career", path: "/career" },
// //       ],
// //     },
// //   ];

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (!menuRef.current.contains(e.target)) {
// //         setOpenIndex(null);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   return (
// //     <nav className="bg-white shadow-md sticky top-0 z-50">
// //       <div
// //         ref={menuRef}
// //         className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between"
// //       >
// //         {/* Logo */}
// //         <Link to="/">
// //           <img
// //             src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
// //             alt="Logo"
// //             className="h-10 object-contain"
// //           />
// //         </Link>

// //         {/* Menu */}
// //         <ul className="hidden md:flex space-x-6 items-center font-medium text-gray-700">
// //           {menuItems.map((item, index) => (
// //             <li key={index} className="relative">
              
// //               {/* Main Clickable */}
// //               <button
// //                 onClick={() =>
// //                   setOpenIndex(openIndex === index ? null : index)
// //                 }
// //                 className="hover:text-blue-600 transition"
// //               >
// //                 {item.name}
// //               </button>

// //               {/* Dropdown */}
// //               {openIndex === index && (
// //                 <div className="absolute left-0 top-10 bg-white shadow-lg rounded-lg w-56 py-2 z-50">
// //                   {item.dropdown.map((subItem, subIndex) => (
// //                     <Link
// //                       key={subIndex}
// //                       to={subItem.path}
// //                       className="block px-4 py-2 hover:bg-gray-100"
// //                       onClick={() => setOpenIndex(null)}
// //                     >
// //                       {subItem.name}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               )}
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Button */}
// //         <Link to="/appointment">
// //           <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300">
// //             Make an Appointment
// //           </button>
// //         </Link>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const timeoutRef = useRef(null);

//   const menuItems = [
//     {
//       name: "Home",
//       dropdown: [
//         { name: "Overview", path: "/" },
//         { name: "Updates", path: "/updates" },
//         { name: "News", path: "/news" },
//       ],
//     },
//     {
//       name: "About",
//       dropdown: [
//         { name: "Surgical Oncology", path: "/surgical" },
//         { name: "Medical Oncology", path: "/medical" },
//         { name: "Critical Care", path: "/critical" },
//         { name: "Pain Clinic", path: "/pain" },
//       ],
//     },
//     {
//       name: "Our Services",
//       dropdown: [
//         { name: "Cancer Speciality", path: "/cancer-speciality" },
//         { name: "General Service", path: "/general-service" },
//       ],
//     },
//     {
//       name: "Gallery",
//       dropdown: [
//         { name: "Seminars", path: "/seminars" },
//         { name: "Events", path: "/events" },
//         { name: "Awareness", path: "/awareness" },
//         { name: "Activities", path: "/activities" },
//       ],
//     },
//     {
//       name: "Others",
//       dropdown: [
//         { name: "Our Team", path: "/team" },
//         { name: "Career", path: "/career" },
//       ],
//     },
//   ];

//   const handleMouseEnter = (index) => {
//     clearTimeout(timeoutRef.current);
//     setOpenIndex(index);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setOpenIndex(null);
//     }, 200); // delay prevents flicker
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

//         {/* Logo */}
//         <Link to="/">
//           <img
//             src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
//             alt="Logo"
//             className="h-10"
//           />
//         </Link>

//         {/* Menu */}
//         <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
//           {menuItems.map((item, index) => (
//             <li
//               key={index}
//               className="relative"
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <span className="cursor-pointer hover:text-blue-600">
//                 {item.name}
//               </span>

//               {/* Dropdown */}
//               {openIndex === index && (
//                 <div className="absolute left-0 top-10 w-56 bg-white shadow-lg rounded-lg py-2">
//                   {item.dropdown.map((subItem, subIndex) => (
//                     <Link
//                       key={subIndex}
//                       to={subItem.path}
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       {subItem.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Button */}
//         <Link to="/appointment">
//           <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
//             Make an Appointment
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = [
    {
      name: "Home",
      dropdown: [
        { name: "Overview", path: "/" },
        { name: "Updates", path: "/updates" },
        { name: "News", path: "/news" },
      ],
    },
    {
      name: "About",
      dropdown: [
        { name: "Surgical Oncology", path: "/surgical" },
        { name: "Medical Oncology", path: "/medical" },
        { name: "Critical Care", path: "/critical" },
        { name: "Pain Clinic", path: "/pain" },
      ],
    },
    {
      name: "Our Services",
      dropdown: [
        { name: "Cancer Speciality", path: "/cancer-speciality" },
        { name: "General Service", path: "/general-service" },
      ],
    },
    {
      name: "Gallery",
      dropdown: [
        { name: "Seminars", path: "/seminars" },
        { name: "Events", path: "/events" },
        { name: "Awareness", path: "/awareness" },
        { name: "Activities", path: "/activities" },
      ],
    },
    {
      name: "Others",
      dropdown: [
        { name: "Our Team", path: "/team" },
        { name: "Career", path: "/career" },
      ],
    },
  ];

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 200);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
            alt="Logo"
            className="h-10"
          />
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer hover:text-blue-600">
                {item.name}
              </span>

              {/* 🔥 Animated Dropdown */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 top-10 w-56 bg-white shadow-lg rounded-lg py-2"
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link to="/appointment">
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Make an Appointment
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;