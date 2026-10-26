import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 text-white py-16 px-4">
      {/* Updated to a 12-column grid with custom col-span allocations */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
        {/* Brand & Bio (Spans 5 of 12 columns for wider bio text) */}
        <div className="space-y-4 md:col-span-5">
          <div className="bg-white inline-block px-3 py-1.5 rounded shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <img
                  src="/images/logo.png"
                  alt="Zerabek Electricals Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
          <p className="text-white text-xs sm:text-sm leading-relaxed max-w-sm">
            Premium smart automation, burglar proof systems, electric fencing,
            high-definition surveillance engineering and general electrical
            works.
          </p>
          <p className="text-white text-xs sm:text-sm leading-relaxed max-w-sm">
            We are committed to quality work across Ghana and beyond.
          </p>
        </div>

        {/* Services Links (Spans 3 of 12 columns) */}
        <div className="md:col-span-3">
          <h4 className="text-red-600 font-bold uppercase tracking-wider text-xs mb-4">
            SERVICES
          </h4>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition-colors"
              >
                General Electrical Works
              </a>
            </li>
          </ul>
          <br />
          <p className="text-white/80 text-xs mb-2">
            Sales and Installation of;
          </p>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition-colors"
              >
                Gate Motors
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition-colors"
              >
                Garage Doors
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition-colors"
              >
                Electric Fence
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition-colors"
              >
                CCTV Cameras
              </a>
            </li>
          </ul>
        </div>

        {/* Menu Links (Spans 2 of 12 columns) */}
        <div className="md:col-span-2">
          <h4 className="text-red-600 font-bold uppercase tracking-wider text-xs mb-4">
            MENU
          </h4>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-red-500 transition-colors"
              >
                Shop
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-red-500 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Get in Touch (Spans 2 of 12 columns) */}
        <div className="md:col-span-2">
          <h4 className="text-red-600 font-bold uppercase tracking-wider text-xs mb-4">
            GET IN TOUCH
          </h4>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a
                href="tel:+233246883884"
                className="hover:text-red-500 transition-colors"
              >
                +233 246 883 884
              </a>
            </li>
            <li>
              <a
                href="mailto:zerabek@gmail.com"
                className="hover:text-red-500 transition-colors"
              >
                zerabek@gmail.com
              </a>
            </li>
            <li className="text-white">Kasoa, Central Region</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 text-center text-s text-white">
        <p>© 2026 Zerabek Electricals. All rights reserved.</p>
      </div>
    </footer>
  );
}
