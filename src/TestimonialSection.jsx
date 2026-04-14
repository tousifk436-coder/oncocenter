import React, { useEffect, useState } from "react";

const reviewsData = [
  {
    text: "Amazing service! Highly recommended for everyone.",
    name: "John Doe",
    likes: 120,
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Very professional team and great support.",
    name: "Sarah Smith",
    likes: 98,
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Loved the experience, will come back again!",
    name: "Michael Lee",
    likes: 150,
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto change reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviewsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setCurrent((prev) =>
      prev === 0 ? reviewsData.length - 1 : prev - 1
    );
  };

  const review = reviewsData[current];

  return (
    <section className="w-full py-16 px-6 bg-gray-100">
      
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-blue-500 font-semibold uppercase">
           What Our Patients Say
        </h2>
        <h1 className="text-4xl font-bold text-gray-800">
          Real stories of hope, healing, and
trust.
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div>
          <img
            src="https://oncocentrecancer.com/assets/img/och-images/16.jpg"
            alt="review"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="relative">
          
          {/* Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-500">
            
            {/* Likes + Stars */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-red-500 font-semibold">
                ❤️ {review.likes}
              </p>

              <div className="flex text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <h3 className="text-gray-700 text-lg mb-6">
              "{review.text}"
            </h3>

            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt="user"
                className="w-12 h-12 rounded-full"
              />
              <h2 className="font-bold text-gray-800">
                {review.name}
              </h2>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevReview}
              className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Prev
            </button>
            <button
              onClick={nextReview}
              className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Next
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;