import React from "react";

const shopItems = [
  {
    title: "Gate Motors",
    image: "/images/Zerabek Shop 1.jpg",
    description:
      "Quality & affordable gate motors for domestic, commercial & industrial use. Makes your life easier with advanced diagnostic feedback.",
  },
  {
    title: "Garage Doors",
    image: "/images/Zerabek Shop 2.jpg",
    description:
      "We supply garage doors with the finest finish treated with antirust chemicals that withstand harsh weather conditions.",
  },
  {
    title: "CCTV Cameras",
    image: "/images/Zerabek Shop 3.jpg",
    description:
      "Enjoy a bird's-eye view of your property with our 360-degree Full-Color Night Vision Cameras. Order yours today and experience the difference!",
  },
  {
    title: "Electric Fence",
    image: "/images/Zerabek Shop 4.jpg",
    description:
      "Enhancing the security of your home is paramount. Installing an electric fence is a crucial step in safeguarding your property and ensuring peace of mind.",
  },
  {
    title: "Burglar Proof",
    image: "/images/Zerabek Shop 5.jpg",
    description:
      "Protect your windows with Superlock Fix and Collapsible grills, made of galvanized steel and provide the best possible defense against break-ins.",
  },
  {
    title: "Lighting & LED",
    image: "/images/Zerabek Shop 6.jpg",
    description:
      "We supply premium LED panels, floodlights, street lights & decorative fixtures from top brands.",
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-24 px-4 bg-white/95">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-xs uppercase tracking-widest text-red-600 font-bold">
              ELECTRICAL SHOP
            </span>
            <span className="w-8 h-[2px] bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight">
            Quality Electrical <span className="text-red-600">Materials</span>
          </h2>
          <p className="text-black mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Buy certified electrical products from our shop. Only genuine,
            tested materials.
          </p>
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {shopItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-red-500/30 rounded-2xl p-6 shadow-lg hover:border-red-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="rounded-xl overflow-hidden mb-5 bg-black h-48 border border-gray-800 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                  <h3 className="text-lg font-bold text-black">{item.title}</h3>
                </div>
                <p className="text-black text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
