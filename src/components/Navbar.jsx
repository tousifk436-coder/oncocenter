// // // // // import React from "react";

// // // // // const Navbar = () => {
// // // // //   const menuItems = [
// // // // //     {
// // // // //       name: "Home",
// // // // //       dropdown: ["Overview", "Updates", "News"],
// // // // //     },
// // // // //     {
// // // // //       name: "About",
// // // // //       dropdown: ["Surgical Oncology", "medical oncology", "critical care","pain clinic"],
// // // // //     },
// // // // //     {
// // // // //       name: "Our services",
// // // // //       dropdown: ["cancer Speciality", "general service"],
// // // // //     },
// // // // //     {
// // // // //       name: "Gallery",
// // // // //       dropdown: ["Seminars", "Events", "Awarness program","hospital activities"],
// // // // //     },
// // // // //     {
// // // // //       name: "others",
// // // // //       dropdown: ["Our team", "career"],
// // // // //     },
   
// // // // //   ];

// // // // //   return (
// // // // //     <nav className="bg-white shadow-md sticky top-0 z-50">
// // // // //       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

// // // // //         {/* Logo */}
// // // // //         <div className="flex items-center">
// // // // //           <img
// // // // //             src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
// // // // //             alt="Logo"
// // // // //             className="h-10 object-contain"
// // // // //           />
// // // // //         </div>

// // // // //         {/* Menu */}
// // // // //         <ul className="hidden md:flex space-x-6 items-center font-medium text-gray-700">
// // // // //           {menuItems.map((item, index) => (
// // // // //             <li key={index} className="relative group cursor-pointer">
              
// // // // //               {/* Anchor */}
// // // // //               <span className="hover:text-blue-600 transition">
// // // // //                 {item.name}
// // // // //               </span>

// // // // //               {/* Dropdown */}
// // // // //               <div className="absolute left-0 top-8 hidden group-hover:block bg-white shadow-lg rounded-lg w-52 py-2">
// // // // //                 {item.dropdown.map((subItem, subIndex) => (
// // // // //                   <a
// // // // //                     key={subIndex}
// // // // //                     href="#"
// // // // //                     className="block px-4 py-2 hover:bg-gray-100"
// // // // //                   >
// // // // //                     {subItem}
// // // // //                   </a>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>

// // // // //         {/* Button */}
// // // // //         <div>
// // // // //           <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300">
// // // // //             Make an Appointment
// // // // //           </button>
// // // // //         </div>

// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // import React, { useState, useRef, useEffect } from "react";
// // // // import { Link } from "react-router-dom";

// // // // const Navbar = () => {
// // // //   const [openIndex, setOpenIndex] = useState(null);
// // // //   const menuRef = useRef();

// // // //   const menuItems = [
// // // //     {
// // // //       name: "Home",
// // // //       path: "/",
// // // //       dropdown: [
// // // //         { name: "Overview", path: "/" },
// // // //         { name: "Updates", path: "/updates" },
// // // //         { name: "News", path: "/news" },
// // // //       ],
// // // //     },
// // // //     {
// // // //       name: "About",
// // // //       path: "/about",
// // // //       dropdown: [
// // // //         { name: "Surgical Oncology", path: "/surgical" },
// // // //         { name: "Medical Oncology", path: "/medical" },
// // // //         { name: "Critical Care", path: "/critical" },
// // // //         { name: "Pain Clinic", path: "/pain" },
// // // //       ],
// // // //     },
// // // //     {
// // // //       name: "Our Services",
// // // //       path: "/services",
// // // //       dropdown: [
// // // //         { name: "Cancer Speciality", path: "/cancer-speciality" },
// // // //         { name: "General Service", path: "/general-service" },
// // // //       ],
// // // //     },
// // // //     {
// // // //       name: "Gallery",
// // // //       dropdown: [
// // // //         { name: "Seminars", path: "/seminars" },
// // // //         { name: "Events", path: "/events" },
// // // //         { name: "Awareness Program", path: "/awareness" },
// // // //         { name: "Hospital Activities", path: "/activities" },
// // // //       ],
// // // //     },
// // // //     {
// // // //       name: "Others",
// // // //       dropdown: [
// // // //         { name: "Our Team", path: "/team" },
// // // //         { name: "Career", path: "/career" },
// // // //       ],
// // // //     },
// // // //   ];

// // // //   // Close dropdown when clicking outside
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (e) => {
// // // //       if (!menuRef.current.contains(e.target)) {
// // // //         setOpenIndex(null);
// // // //       }
// // // //     };
// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // // //   }, []);

// // // //   return (
// // // //     <nav className="bg-white shadow-md sticky top-0 z-50">
// // // //       <div
// // // //         ref={menuRef}
// // // //         className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between"
// // // //       >
// // // //         {/* Logo */}
// // // //         <Link to="/">
// // // //           <img
// // // //             src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
// // // //             alt="Logo"
// // // //             className="h-10 object-contain"
// // // //           />
// // // //         </Link>

// // // //         {/* Menu */}
// // // //         <ul className="hidden md:flex space-x-6 items-center font-medium text-gray-700">
// // // //           {menuItems.map((item, index) => (
// // // //             <li key={index} className="relative">
              
// // // //               {/* Main Clickable */}
// // // //               <button
// // // //                 onClick={() =>
// // // //                   setOpenIndex(openIndex === index ? null : index)
// // // //                 }
// // // //                 className="hover:text-blue-600 transition"
// // // //               >
// // // //                 {item.name}
// // // //               </button>

// // // //               {/* Dropdown */}
// // // //               {openIndex === index && (
// // // //                 <div className="absolute left-0 top-10 bg-white shadow-lg rounded-lg w-56 py-2 z-50">
// // // //                   {item.dropdown.map((subItem, subIndex) => (
// // // //                     <Link
// // // //                       key={subIndex}
// // // //                       to={subItem.path}
// // // //                       className="block px-4 py-2 hover:bg-gray-100"
// // // //                       onClick={() => setOpenIndex(null)}
// // // //                     >
// // // //                       {subItem.name}
// // // //                     </Link>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </li>
// // // //           ))}
// // // //         </ul>

// // // //         {/* Button */}
// // // //         <Link to="/appointment">
// // // //           <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300">
// // // //             Make an Appointment
// // // //           </button>
// // // //         </Link>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;



// // // import React, { useState, useRef } from "react";
// // // import { Link } from "react-router-dom";

// // // const Navbar = () => {
// // //   const [openIndex, setOpenIndex] = useState(null);
// // //   const timeoutRef = useRef(null);

// // //   const menuItems = [
// // //     {
// // //       name: "Home",
// // //       dropdown: [
// // //         { name: "Overview", path: "/" },
// // //         { name: "Updates", path: "/updates" },
// // //         { name: "News", path: "/news" },
// // //       ],
// // //     },
// // //     {
// // //       name: "About",
// // //       dropdown: [
// // //         { name: "Surgical Oncology", path: "/surgical" },
// // //         { name: "Medical Oncology", path: "/medical" },
// // //         { name: "Critical Care", path: "/critical" },
// // //         { name: "Pain Clinic", path: "/pain" },
// // //       ],
// // //     },
// // //     {
// // //       name: "Our Services",
// // //       dropdown: [
// // //         { name: "Cancer Speciality", path: "/cancer-speciality" },
// // //         { name: "General Service", path: "/general-service" },
// // //       ],
// // //     },
// // //     {
// // //       name: "Gallery",
// // //       dropdown: [
// // //         { name: "Seminars", path: "/seminars" },
// // //         { name: "Events", path: "/events" },
// // //         { name: "Awareness", path: "/awareness" },
// // //         { name: "Activities", path: "/activities" },
// // //       ],
// // //     },
// // //     {
// // //       name: "Others",
// // //       dropdown: [
// // //         { name: "Our Team", path: "/team" },
// // //         { name: "Career", path: "/career" },
// // //       ],
// // //     },
// // //   ];

// // //   const handleMouseEnter = (index) => {
// // //     clearTimeout(timeoutRef.current);
// // //     setOpenIndex(index);
// // //   };

// // //   const handleMouseLeave = () => {
// // //     timeoutRef.current = setTimeout(() => {
// // //       setOpenIndex(null);
// // //     }, 200); // delay prevents flicker
// // //   };

// // //   return (
// // //     <nav className="bg-white shadow-md sticky top-0 z-50">
// // //       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

// // //         {/* Logo */}
// // //         <Link to="/">
// // //           <img
// // //             src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
// // //             alt="Logo"
// // //             className="h-10"
// // //           />
// // //         </Link>

// // //         {/* Menu */}
// // //         <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
// // //           {menuItems.map((item, index) => (
// // //             <li
// // //               key={index}
// // //               className="relative"
// // //               onMouseEnter={() => handleMouseEnter(index)}
// // //               onMouseLeave={handleMouseLeave}
// // //             >
// // //               <span className="cursor-pointer hover:text-blue-600">
// // //                 {item.name}
// // //               </span>

// // //               {/* Dropdown */}
// // //               {openIndex === index && (
// // //                 <div className="absolute left-0 top-10 w-56 bg-white shadow-lg rounded-lg py-2">
// // //                   {item.dropdown.map((subItem, subIndex) => (
// // //                     <Link
// // //                       key={subIndex}
// // //                       to={subItem.path}
// // //                       className="block px-4 py-2 hover:bg-gray-100"
// // //                     >
// // //                       {subItem.name}
// // //                     </Link>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </li>
// // //           ))}
// // //         </ul>

// // //         {/* Button */}
// // //         <Link to="/appointment">
// // //           <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
// // //             Make an Appointment
// // //           </button>
// // //         </Link>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;



// // import React, { useState, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import { motion, AnimatePresence } from "framer-motion";

// // const Navbar = () => {
// //   const [openIndex, setOpenIndex] = useState(null);
// //   const timeoutRef = useRef(null);

// //   const menuItems = [
// //     {
// //       name: "Home",
// //       dropdown: [
// //         { name: "Overview", path: "/" },
// //         { name: "Updates", path: "/updates" },
// //         { name: "News", path: "/news" },
// //       ],
// //     },
// //     {
// //       name: "About",
// //       dropdown: [
// //         { name: "Surgical Oncology", path: "/surgical" },
// //         { name: "Medical Oncology", path: "/medical" },
// //         { name: "Critical Care", path: "/critical" },
// //         { name: "Pain Clinic", path: "/pain" },
// //       ],
// //     },
// //     {
// //       name: "Our Services",
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
// //         { name: "Awareness", path: "/awareness" },
// //         { name: "Activities", path: "/activities" },
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

// //   const handleMouseEnter = (index) => {
// //     clearTimeout(timeoutRef.current);
// //     setOpenIndex(index);
// //   };

// //   const handleMouseLeave = () => {
// //     timeoutRef.current = setTimeout(() => {
// //       setOpenIndex(null);
// //     }, 200);
// //   };

// //   return (
// //     <nav className="bg-white shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

// //         {/* Logo */}
// //         <Link to="/">
// //           <img
// //             src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
// //             alt="Logo"
// //             className="h-10"
// //           />
// //         </Link>

// //         {/* Menu */}
// //         <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
// //           {menuItems.map((item, index) => (
// //             <li
// //               key={index}
// //               className="relative"
// //               onMouseEnter={() => handleMouseEnter(index)}
// //               onMouseLeave={handleMouseLeave}
// //             >
// //               <span className="cursor-pointer hover:text-blue-600">
// //                 {item.name}
// //               </span>

// //               {/* 🔥 Animated Dropdown */}
// //               <AnimatePresence>
// //                 {openIndex === index && (
// //                   <motion.div
// //                     initial={{ opacity: 0, y: -10 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     transition={{ duration: 0.25 }}
// //                     className="absolute left-0 top-10 w-56 bg-white shadow-lg rounded-lg py-2"
// //                   >
// //                     {item.dropdown.map((subItem, subIndex) => (
// //                       <Link
// //                         key={subIndex}
// //                         to={subItem.path}
// //                         className="block px-4 py-2 hover:bg-gray-100"
// //                       >
// //                         {subItem.name}
// //                       </Link>
// //                     ))}
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Button */}
// //         <Link to="/appointment">
// //           <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
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
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
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
//     }, 200);
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">

//         {/* Logo */}
//         <Link to="/">
//           <img
//             src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
//             alt="Logo"
//             className="h-8 md:h-10"
//           />
//         </Link>

//         {/* Desktop Menu */}
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

//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute left-0 top-10 w-56 bg-white shadow-lg rounded-lg py-2"
//                   >
//                     {item.dropdown.map((subItem, i) => (
//                       <Link
//                         key={i}
//                         to={subItem.path}
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         {subItem.name}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Button */}
//         <Link to="/appointment" className="hidden md:block">
//           <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
//             Make Appointment
//           </button>
//         </Link>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileOpen(true)}>
//             <FaBars size={22} />
//           </button>
//         </div>
//       </div>

//       {/* 🔥 Mobile Sidebar */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 bg-black/50 z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//             />

//             {/* Sidebar */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ duration: 0.3 }}
//               className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-lg p-6 overflow-y-auto"
//             >
//               {/* Close */}
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-lg font-bold">Menu</h2>
//                 <button onClick={() => setMobileOpen(false)}>
//                   <FaTimes size={20} />
//                 </button>
//               </div>

//               {/* Menu Items */}
//               {menuItems.map((item, index) => (
//                 <div key={index} className="mb-4">
//                   <p className="font-semibold text-gray-800 mb-2">
//                     {item.name}
//                   </p>

//                   <div className="ml-3 space-y-2">
//                     {item.dropdown.map((subItem, i) => (
//                       <Link
//                         key={i}
//                         to={subItem.path}
//                         onClick={() => setMobileOpen(false)}
//                         className="block text-gray-600 hover:text-blue-600"
//                       >
//                         {subItem.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ))}

//               {/* Mobile Button */}
//               <Link to="/appointment" onClick={() => setMobileOpen(false)}>
//                 <button className="mt-6 w-full bg-orange-600 text-white py-2 rounded-full text-sm">
//                   Make Appointment
//                 </button>
//               </Link>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔥 Mega Menu Data
  const megaMenu = {
    Services: [
      {
        title: "Cancer Treatment",
        links: [
          { name: "Chemotherapy", path: "/services" },
          { name: "Radiation Therapy", path: "/services" },
          { name: "Immunotherapy", path: "/services" },
        ],
      },
      {
        title: "Specialized Care",
        links: [
          { name: "Surgical Oncology", path: "/surgical" },
          { name: "Medical Oncology", path: "/medical" },
          { name: "Critical Care", path: "/critical" },
        ],
      },
      {
        title: "Support Services",
        links: [
          { name: "Pain Clinic", path: "/pain" },
          { name: "Rehabilitation", path: "/services" },
          { name: "Counselling", path: "/services" },
        ],
      },
    ],

    Gallery: [
      {
        title: "Events",
        links: [
          { name: "Seminars", path: "/seminars" },
          { name: "Awareness Programs", path: "/awareness" },
          { name: "Hospital Activities", path: "/activities" },
        ],
      },
      {
        title: "Media",
        links: [
          { name: "News", path: "/news" },
          { name: "Updates", path: "/updates" },
        ],
      },
    ],
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/ONCOCENTRE-logo.png"
            alt="Logo"
            className="h-8 md:h-10"
          />
        </Link>

        {/* 🔥 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">

          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">About</Link>
          </li>

          {/* Mega Menu - Services */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("Services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="cursor-pointer hover:text-blue-600">
              Our Services
            </span>

            <AnimatePresence>
              {openMenu === "Services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-10 w-[800px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6"
                >
                  {megaMenu.Services.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-semibold mb-3 text-blue-600">
                        {section.title}
                      </h3>

                      {section.links.map((link, j) => (
                        <Link
                          key={j}
                          to={link.path}
                          className="block text-gray-600 hover:text-blue-600 mb-2"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Mega Menu - Gallery */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("Gallery")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className="cursor-pointer hover:text-blue-600">
              Gallery
            </span>

            <AnimatePresence>
              {openMenu === "Gallery" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-10 w-[600px] bg-white shadow-xl rounded-xl p-6 grid grid-cols-2 gap-6"
                >
                  {megaMenu.Gallery.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-semibold mb-3 text-blue-600">
                        {section.title}
                      </h3>

                      {section.links.map((link, j) => (
                        <Link
                          key={j}
                          to={link.path}
                          className="block text-gray-600 hover:text-blue-600 mb-2"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link to="/team" className="hover:text-blue-600">
              Our Team
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <Link to="/appointment" className="hidden md:block">
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Make Appointment
          </button>
        </Link>

        {/* 🔥 Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(true)}>
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* 🔥 Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-lg p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Menu</h2>
                <button onClick={() => setMobileOpen(false)}>
                  <FaTimes />
                </button>
              </div>

              {/* Mobile Links */}
              <Link to="/" onClick={() => setMobileOpen(false)} className="block mb-3">
                Home
              </Link>

              <Link to="/about" onClick={() => setMobileOpen(false)} className="block mb-3">
                About
              </Link>

              {/* Services */}
              <div className="mb-4">
                <p className="font-semibold mb-2">Services</p>
                {megaMenu.Services.flatMap(section =>
                  section.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="block ml-3 text-gray-600 mb-2"
                    >
                      {link.name}
                    </Link>
                  ))
                )}
              </div>

              {/* Gallery */}
              <div className="mb-4">
                <p className="font-semibold mb-2">Gallery</p>
                {megaMenu.Gallery.flatMap(section =>
                  section.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="block ml-3 text-gray-600 mb-2"
                    >
                      {link.name}
                    </Link>
                  ))
                )}
              </div>

              <Link to="/team" onClick={() => setMobileOpen(false)} className="block mb-4">
                Our Team
              </Link>

              {/* Button */}
              <Link to="/appointment" onClick={() => setMobileOpen(false)}>
                <button className="w-full bg-orange-600 text-white py-2 rounded-full text-sm">
                  Make Appointment
                </button>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;