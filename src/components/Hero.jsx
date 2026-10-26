import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Zerabek Hero.jpg"
          alt="Zerabek Hero Background"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/20 via-[#080808]/10 to-[#080808]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-red-500/40 bg-black/50 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-gray-200 font-semibold">
            PREMIUM ELECTRICAL ENGINEERING
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Excellence is Our <span className="text-red-600">Hallmark.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-100 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Smart automation, electric fencing, CCTV camera installation and
          premium electrical engineering services - engineered with precision
          for modern homes and businesses.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all text-center"
          >
            Contact Us Today
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto border border-gray-700 hover:border-gray-500 bg-black/40 text-white font-semibold px-8 py-3.5 rounded-full transition-all text-center backdrop-blur-sm"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
