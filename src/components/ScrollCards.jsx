import React from "react";

const ScrollCards = () => {
  const cards = [
    {
      img: "https://res.cloudinary.com/dusw7izfx/image/upload/v1765368583/opjrpqg3gwjdpovccq5f.png",
      title: "Dr Anjum kausar",
      sub1: "Heart Specialist",
      sub2: "Expert Care",
    },
    {
      img: "https://res.cloudinary.com/dusw7izfx/image/upload/v1765368525/cn4l9rh886rzjbrtckgk.png",
      title: "Dr Indra jeet Gupta",
      sub1: "Child Care",
      sub2: "Friendly Doctors",
    },
    {
      img: "https://res.cloudinary.com/dusw7izfx/image/upload/v1765368487/aqmu2lyug0ol8laahsyd.png",
      title: "Dr Aditiya Yadav",
      sub1: "Dental Care",
      sub2: "Bright Smile",
    },
    {
      img: "https://res.cloudinary.com/dusw7izfx/image/upload/v1765348567/awmxva3bcxn6aes08ykr.png",
      title: "Dr Yakeela yasmeen",
      sub1: "Bone Care",
      sub2: "Joint Specialist",
    },
    {
      img: "https://res.cloudinary.com/dusw7izfx/image/upload/v1765368755/jfkl31cfxxposqxvusjq.png",
      title: "DR Mohammed Ali",
      sub1: "Skin Care",
      sub2: "Healthy Skin",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-semibold mb-2">
            OUR TEAMS
          </h2>
          <h1 className="text-4xl font-bold text-gray-800">
           MEET OUR  EXPERT MEDICAL TEAM
          </h1>
        </div>

        {/* Scrolling Container */}
        <div className="overflow-hidden relative">
          <div className="flex gap-8 animate-scroll">

            {/* Duplicate for infinite loop */}
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-2xl shadow-md p-6 text-center flex-shrink-0"
              >
                {/* Rounded Image */}
                <img
                  src={card.img}
                  alt="card"
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
                />

                {/* Text */}
                <h1 className="text-lg font-bold text-gray-800">
                  {card.title}
                </h1>

                <h2 className="text-blue-600 text-sm">
                  {card.sub1}
                </h2>

                <h2 className="text-gray-500 text-sm">
                  {card.sub2}
                </h2>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 18s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default ScrollCards;