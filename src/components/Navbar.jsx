import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-white py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo.png"
            alt="Zerabek Electricals Logo"
            className="h-10 w-40 object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-gray-800">
          <a href="#home" className="hover:text-red-600 transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-red-600 transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-red-600 transition-colors">
            About Us
          </a>
          <a href="#projects" className="hover:text-red-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-red-600 transition-colors">
            Contact
          </a>
          <a href="#shop" className="hover:text-red-600 transition-colors">
            Shop
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition-all"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col space-y-4 text-gray-800 font-medium">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Services
          </a>
          <a
            href="#shop"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Shop
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            About Us
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-red-600"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-red-600 text-white text-center py-2.5 rounded-full font-semibold shadow"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}
