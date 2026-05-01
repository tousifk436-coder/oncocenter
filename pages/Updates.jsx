// import React from "react";

// const updatesData = [
//   {
//     title: "New Advanced Cancer Treatment Introduced",
//     date: "May 2026",
//     desc: "We have introduced a new targeted therapy that improves recovery rates significantly.",
//     img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
//   },
//   {
//     title: "Free Cancer Screening Camp",
//     date: "April 2026",
//     desc: "OncoCenter organized a free cancer screening camp benefiting over 1000 patients.",
//     img: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
//   },
//   {
//     title: "Award for Excellence in Oncology",
//     date: "March 2026",
//     desc: "Our hospital received national recognition for outstanding cancer care services.",
//     img: "https://images.unsplash.com/photo-1580281657527-47b43a0d45f3",
//   },
// ];

// const Updates = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold">Latest Updates</h1>
//         <p className="text-gray-600 mt-3">
//           Stay informed about our latest news, achievements, and medical advancements.
//         </p>
//       </div>

//       {/* Updates Grid */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {updatesData.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="h-48 w-full object-cover"
//             />

//             <div className="p-6">
//               <p className="text-sm text-gray-500">{item.date}</p>
//               <h2 className="text-xl font-semibold mt-2">
//                 {item.title}
//               </h2>
//               <p className="text-gray-600 mt-3">{item.desc}</p>

//               <button className="mt-4 text-blue-600 font-semibold hover:underline">
//                 Read More →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Updates;

import React from "react";
import { Link } from "react-router-dom";

const updatesData = [
  {
    id: 1,
    title: "New Advanced Cancer Treatment Introduced",
    date: "May 2026",
    desc: "We have introduced a new targeted therapy that improves recovery rates significantly.",
    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
  },
  {
    id: 2,
    title: "Free Cancer Screening Camp",
    date: "April 2026",
    desc: "OncoCenter organized a free cancer screening camp benefiting over 1000 patients.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    id: 3,
    title: "Award for Excellence in Oncology",
    date: "March 2026",
    desc: "Our hospital received national recognition for outstanding cancer care services.",
    img: "https://images.unsplash.com/photo-1580281657527-47b43a0d45f3",
  },
];

const Updates = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Latest Updates
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {updatesData.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow overflow-hidden">
            <img src={item.img} className="h-48 w-full object-cover" />

            <div className="p-6">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
              <p className="text-gray-600 mt-3">{item.desc}</p>

              {/* ✅ Clickable Link */}
              <Link
                to={`/updates/${item.id}`}
                className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;