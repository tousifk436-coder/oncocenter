import React from "react";
import { useLocation } from "react-router-dom";

const CommonPage = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
      {location.pathname.replace("/", "").toUpperCase()} PAGE
    </div>
  );
};

export default CommonPage;