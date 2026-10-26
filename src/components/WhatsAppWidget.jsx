import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const whatsappUrl =
    "https://wa.me/233246883884?text=Hello%20Zerabek%20Electricals,%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-sm font-semibold px-0 group-hover:px-2">
        Chat with us
      </span>
    </a>
  );
}
