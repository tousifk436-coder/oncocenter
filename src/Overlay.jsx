import { useEffect, useState } from "react";

const images = [
  "https://oncocentrecancer.com/assets/img/och-images/2.jpg",
  "https://oncocentrecancer.com/assets/img/och-images/1.jpg"
];

export default function Overlay() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Trusted Partner in our Advanced cancer care
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Experience the highest standard of cancer care with exper doctors advanced theripies and complete patent support
        </p>
        <button className="bg-orange-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold transition">
          Schedule an Appointment
        </button>
      </div>
    </div>
  );
}