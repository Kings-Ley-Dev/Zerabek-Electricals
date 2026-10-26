import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const CONTACT_EMAIL = "zerabek@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact form request - ${formData.name}`);
    const body = encodeURIComponent(
      [
        "Hello Zerabek Electricals,",
        "",
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Service: ${formData.service}`,
        `Project Notes: ${formData.notes}`,
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-[radial-gradient(circle_at_center,_#E0202B_2%,_#000000_25%)] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-xs uppercase tracking-widest text-red-600 font-bold">
              CONTACT & SCHEDULING
            </span>
            <span className="w-8 h-[2px] bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's power your project.
          </h2>
          <p className="text-white max-w-xl mx-auto text-sm sm:text-base">
            Schedule a private site audit or request a direct quotation for gate
            motors, garage doors, electric fencing, CCTV arrays, or full smart
            automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Info Cards */}
          <div className="space-y-6 lg:col-span-1 mt-12">
            <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 shadow-xl flex items-start gap-4">
              <div className="bg-red-600/10 p-3 rounded-xl text-red-600">
                <Phone size={24} />
              </div>
              <div>
                <span className="text-white/70 text-xs uppercase tracking-wider block font-semibold mb-1">
                  DIRECT HOTLINE
                </span>
                <a
                  href="tel:+233246883884"
                  className="text-white font-bold text-lg hover:text-red-500 transition-colors"
                >
                  +233 246 883 884
                </a>
              </div>
            </div>

            <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 shadow-xl flex items-start gap-4">
              <div className="bg-red-600/10 p-3 rounded-xl text-red-600">
                <Mail size={24} />
              </div>
              <div>
                <span className="text-white/70 text-xs uppercase tracking-wider block font-semibold mb-1">
                  OFFICIAL EMAIL
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-white font-bold text-base hover:text-red-500 transition-colors"
                >
                  zerabek@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-[#121212] border border-gray-800 rounded-2xl p-6 shadow-xl flex items-start gap-4">
              <div className="bg-red-600/10 p-3 rounded-xl text-red-600">
                <MapPin size={24} />
              </div>
              <div>
                <span className="text-white/70  text-xs uppercase tracking-wider block font-semibold mb-1">
                  ENGINEERING HQ
                </span>
                <p className="text-white font-bold text-base">
                  Kasoa, Central Region
                </p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-[#121212] border border-gray-800 rounded-2xl p-8 lg:col-span-2 shadow-2xl">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex bg-red-600/20 text-red-500 p-4 rounded-full mb-2">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Email Ready to Send
                </h3>
                <p className="text-gray-400 max-w-md mx-auto text-sm">
                  Your email app should open with your request addressed to{" "}
                  {CONTACT_EMAIL}. Please review it and press Send to deliver
                  your message. If no email app opens, email us directly at{" "}
                  {CONTACT_EMAIL}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70  font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+233 123 456 789"
                      className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                      Service Type
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="Gate Motors">Gate Motors</option>
                      <option value="Garage Doors">Garage Doors</option>
                      <option value="Electric Fence">Electric Fence</option>
                      <option value="CCTV Cameras">CCTV Cameras</option>
                      <option value="General Electrical Works">
                        General Electrical Works
                      </option>
                      <option value="Full Smart Automation">
                        Full Smart Automation
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                    Project Notes
                  </label>
                  <textarea
                    name="notes"
                    rows="4"
                    required
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about what you need"
                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
