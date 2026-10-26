import React from "react";
import { ShieldCheck, Clock, CheckCircle, Award, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-xs uppercase tracking-widest text-red-600 font-bold">
              WHAT SETS US APART
            </span>
            <span className="w-8 h-[2px] bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Precision Meets <br className="hidden sm:inline" />{" "}
            Clean Design
          </h2>
        </div>

        {/* 3 Numbered Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#121212] border border-gray-800 rounded-2xl p-8 shadow-xl">
            <span className="text-red-600 text-xl font-bold block mb-4">
              01
            </span>
            <h3 className="text-xl font-bold text-white mb-3">
              Invisible Integration
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              CCTV Systems installed with concealed cabling and clean lines -
              security that never spoils your architecture.
            </p>
          </div>
          <div className="bg-[#121212] border border-gray-800 rounded-2xl p-8 shadow-xl">
            <span className="text-red-600 text-xl font-bold block mb-4">
              02
            </span>
            <h3 className="text-xl font-bold text-white mb-3">
              Smart Home Automation
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Electric sliding gates and devices you control from your phone,
              voice or schedule - effortless, anywhere.
            </p>
          </div>
          <div className="bg-[#121212] border border-gray-800 rounded-2xl p-8 shadow-xl">
            <span className="text-red-600 text-xl font-bold block mb-4">
              03
            </span>
            <h3 className="text-xl font-bold text-white mb-3">24/7 Shield</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Round-the-clock emergency response and proactive maintenance. when
              it matters, we're already on the way.
            </p>
          </div>
        </div>

        {/* 4 Badge Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-red-600 mb-3">
              <Award size={32} />
            </div>
            <h4 className="font-bold text-white mb-1">Licensed Master Techs</h4>
            <p className="text-white/60 text-xs">
              Certified Electrical Engineers
            </p>
          </div>
          <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-red-600 mb-3">
              <Clock size={32} />
            </div>
            <h4 className="font-bold text-white mb-1">On-Time Guarantee</h4>
            <p className="text-white/60 text-xs">Strict Scheduling SLA</p>
          </div>
          <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-red-600 mb-3">
              <CheckCircle size={32} />
            </div>
            <h4 className="font-bold text-white mb-1">100% Safety Compliant</h4>
            <p className="text-white/60 text-xs">Zero Safety Infractions</p>
          </div>
          <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-red-600 mb-3">
              <ShieldCheck size={32} />
            </div>
            <h4 className="font-bold text-white mb-1">Certified Installer</h4>
            <p className="text-white/60 text-xs">Strict Quality Standards</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex text-red-600 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic mb-6">
                "Zerabek automated our massive sliding gate and installed an
                8-camera 4K CCTV grid. Clean wire concealed work, ultra
                professional team."
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Marcus Vance</h5>
              <p className="text-white/60 text-xs">Luxury Homeowner</p>
            </div>
          </div>

          <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex text-red-600 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic mb-6">
                "Finding an electrical contractor that respects high-end
                architecture is rare. Zerabek Electricals integrated our
                electric fencing seamlessly."
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">Elena Rostova</h5>
              <p className="text-white/60 text-xs">Commercial Architect</p>
            </div>
          </div>

          <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex text-red-600 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 text-sm italic mb-6">
                "App integration for garage doors and perimeter alarm is
                flawless. Highly recommended for anyone wanting tech-forward
                security."
              </p>
            </div>
            <div>
              <h5 className="font-bold text-white text-sm">David K. Lawson</h5>
              <p className="text-white/60 text-xs">Smart Home Enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
