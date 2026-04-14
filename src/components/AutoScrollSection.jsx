import React from "react";

const AutoScrollSection = () => {
  const cards = [
    { title: "Medical Oncology", desc: "nusnu fufhuerf jsndufnuief uhsdiubfjkw jnfuwefuew nfdouwhfwue", img: "https://oncocentrecancer.com/assets/img/all-images/service/service-img18.png" },
    { title: "Gynecology and obstrics", desc: "jfudhu cjdshfre dhuifhru buedgyif urghr hfeiu ", img: "https://oncocentrecancer.com/assets/img/och-images/Gynecology1.png" },
    { title: "Critical care", desc: "jkfhidf dyegfuie dugfey ugfe ", img: "https://oncocentrecancer.com/assets/img/och-images/critical.png" },
    { title: "Pain Clinic", desc: "jdhfuiru hdgfyew bwebfkbf fiygbry ", img: "https://oncocentrecancer.com/assets/img/och-images/pain.png" },
    { title: "Diet and nutrition", desc: "dhbvyue udgfejh sjhfiue jdghfyie", img: "https://oncocentrecancer.com/assets/img/och-images/nutri.png" },
    { title: "Physiotherapy", desc: "jcufu djuhfiuhbfie djnfiur dgfye", img: "https://oncocentrecancer.com/assets/img/och-images/physio.png" },
    { title: "Surgical Oncology", desc: "dnjdfsy dbygduyse sdhkgfye hbdyuey", img: "https://oncocentrecancer.com/assets/img/och-images/sugical.png" },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-semibold mb-2">
            Departments
          </h2>
          <h1 className="text-4xl font-bold text-gray-800">
            Specialized Care Across Every
Oncology and Medical Need
          </h1>
        </div>

        {/* Scrolling Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            

            {/* Duplicate cards for infinite effect */}
            {[...cards, ...cards].map((card, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white rounded-2xl shadow-md p-5 flex-shrink-0"
              >
                <img
                  src={card.img}
                  alt="card"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />

                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                  {card.title}
                </h1>

                <p className="text-gray-600 text-sm mb-3">
                  {card.desc}
                </p>

                <a
                  href="#"
                  className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More →
                </a>
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
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AutoScrollSection;