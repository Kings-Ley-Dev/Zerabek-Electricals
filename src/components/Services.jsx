import React from "react";

const servicesList = [
  {
    title: "Gate Motors",
    image: "/images/Zerabek Services 1.jpg", // Replace with exact filename or path in public/images
    description:
      "We offer/sell quality products and professional installation services of Sliding & Swing Gate Motors to give you easy access to your premises. Our prices are very competitive for your purchase. Give us a call now.",
  },
  {
    title: "Garage Doors",
    image: "/images/Zerabek Services 2.jpg",
    description:
      "Our automated garage doors come with the finest finish thus it withstands harsh weather conditions. We have the standard sizes and the custom-made sizes, we offer the best & affordable prices.",
  },
  {
    title: "Electric Fence",
    image: "/images/Zerabek Services 3.jpg",
    description:
      "Our standard IDHSA 8 and 10 lines offers you 90% and 100% wall protection respectively. Their unique designs make sure your security is hardly breached while you go about your daily business without having to think much about burglars.",
  },
  {
    title: "CCTV Cameras",
    image: "/images/Zerabek Services 4.jpg",
    description:
      "Our CCTV surveillance systems are designed to protect your property and assets. The video and audio surveillance monitors behavior, activities, and information over a local screen or remotely on a computer and mobile phone.",
  },
  {
    title: "General Electrical Works",
    image: "/images/Zerabek Services 5.jpg",
    description:
      "We excel in electrical installations, repairs, and maintenance for residential, commercial, and industrial clients. Our skilled technicians ensure reliable and safe electrical systems, adhering to industry standards and regulations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-white/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-xs uppercase tracking-widest text-red-600 font-bold">
              WHAT WE DO
            </span>
            <span className="w-8 h-[2px] bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight">
            Premium Electrical &{" "}
            <span className="text-red-600">Automation</span>
          </h2>
          <p className="text-black mt-3 max-w-xl mx-auto text-sm sm:text-base">
            We provide innovative electrical solutions and smart automation for
            a more efficient future. Everything electric. Done right.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-red-500/30 rounded-2xl p-6 shadow-xl hover:border-red-500 transition-all flex flex-col justify-between ${index === 4 ? "md:col-span-2 max-w-xl mx-auto w-full" : ""}`}
            >
              <div>
                <div className="rounded-xl overflow-hidden mb-5 bg-black h-56 border border-gray-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                  <h3 className="text-xl font-bold text-black">
                    {service.title}
                  </h3>
                </div>
                <p className="text-black text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
