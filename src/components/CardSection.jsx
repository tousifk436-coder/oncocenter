import React from "react";

const CardSection = () => {
  const cards = [
    {
      image: "https://oncocentrecancer.com/assets/img/och-images/5.jpg",
      logo: "https://tse2.mm.bing.net/th/id/OIP.l8cq8abrS8svziONEcsddQHaHa?pid=Api&P=0&h=180",
      title: "Cancer Surgery",
      
    },
    {
      image: "https://oncocentrecancer.com/assets/img/och-images/6.jpg",
      logo: "https://tse2.mm.bing.net/th/id/OIP.l8cq8abrS8svziONEcsddQHaHa?pid=Api&P=0&h=180",
      title: "Chemotherapy",
      
    },
    {
      image: "https://oncocentrecancer.com/assets/img/och-images/7.jpg",
      logo: "https://tse2.mm.bing.net/th/id/OIP.l8cq8abrS8svziONEcsddQHaHa?pid=Api&P=0&h=180",
      title: "Immunotherapy",
     
    },
    {
      image: "https://oncocentrecancer.com/assets/img/och-images/8.jpg",
      logo: "https://tse2.mm.bing.net/th/id/OIP.l8cq8abrS8svziONEcsddQHaHa?pid=Api&P=0&h=180",
      title: "Targeted Therapy",
    
    },
    {
      image: "https://oncocentrecancer.com/assets/img/och-images/9.jpg",
      logo: "https://tse2.mm.bing.net/th/id/OIP.l8cq8abrS8svziONEcsddQHaHa?pid=Api&P=0&h=180",
      title: "Hormonal Therapy",
      
    },
  ];

  const Card = ({ card }) => (
    <div className="relative group rounded-2xl overflow-hidden shadow-md">
      
      {/* Background Image */}
      <img
        src={card.image}
        alt="card"
        className="w-full h-56 object-cover"
      />

      {/* Default Content */}
      <div className="p-6 text-center bg-white">
        <img
          src={card.logo}
          alt="logo"
          className="mx-auto mb-3 w-12 h-12"
        />
        <h1 className="text-lg font-semibold text-gray-800">
          {card.title}
        </h1>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4
                      opacity-0 group-hover:opacity-100 transition duration-500">
        
        <img
          src={card.logo}
          alt="logo"
          className="mb-3 w-12 h-12"
        />

        <h1 className="text-white text-xl font-bold mb-2">
          {card.title}
        </h1>

        <p className="text-gray-200 text-sm mb-4">
          {card.desc}
        </p>

        <a
          href="#"
          className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-semibold mb-2">
            CANCER SPECIALITY SERVICES
          </h2>
          <h1 className="text-4xl font-bold text-gray-800">
            Comprehensive Treatment Options for
Every Need
          </h1>
        </div>

        {/* Row 1 */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {cards.slice(0, 3).map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-8 md:px-32">
          {cards.slice(3, 5).map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CardSection;