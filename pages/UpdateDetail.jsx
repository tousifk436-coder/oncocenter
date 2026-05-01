import React from "react";
import { useParams } from "react-router-dom";

const updatesData = [
  {
    id: 1,
    title: "New Advanced Cancer Treatment Introduced",
    content:
      "Full details about the new targeted therapy. This treatment improves survival rates and reduces side effects...",
    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
  },
  {
    id: 2,
    title: "Free Cancer Screening Camp",
    content:
      "Detailed information about the screening camp, patients benefited, and future plans...",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    id: 3,
    title: "Award for Excellence in Oncology",
    content:
      "Our hospital was recognized nationally for excellence in cancer care...",
    img: "https://images.unsplash.com/photo-1580281657527-47b43a0d45f3",
  },
];

const UpdateDetail = () => {
  const { id } = useParams();
  const update = updatesData.find((item) => item.id === Number(id));

  if (!update) return <h1 className="text-center mt-20">Update Not Found</h1>;

  return (
    <div className="py-16 px-6 md:px-20">
      <img src={update.img} className="w-full h-96 object-cover rounded-xl mb-8" />

      <h1 className="text-4xl font-bold mb-4">{update.title}</h1>

      <p className="text-gray-600 leading-relaxed text-lg">
        {update.content}
      </p>
    </div>
  );
};

export default UpdateDetail;