import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Shop from "./components/Shop";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Shop />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
