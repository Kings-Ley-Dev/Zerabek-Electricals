import React from "react";

const projectImages = [
  "/images/Zerabek Project 1.jpg",
  "/images/Zerabek Project 2.jpg",
  "/images/Zerabek Project 3.jpg",
  "/images/Zerabek Project 4.jpg",
  "/images/Zerabek Project 5.jpg",
  "/images/Zerabek Project 6.jpg",
  "/images/Zerabek Project 7.jpg",
  "/images/Zerabek Project 8.jpg",
  "/images/Zerabek Project 9.jpg",
];

// Array mapping your video filenames in the public/images folder
const projectVideos = [
  "/images/Zerabek Video 1.mp4",
  "/images/Zerabek Video 2.mp4",
  "/images/Zerabek Video 3.mp4",
  "/images/Zerabek Video 4.mp4",
  "/images/Zerabek Video 5.mp4",
  "/images/Zerabek Video 6.mp4",
  "/images/Zerabek Video 7.mp4",
  "/images/Zerabek Video 8.mp4",
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-white/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-xs uppercase tracking-widest text-red-600 font-bold">
              OUR WORK
            </span>
            <span className="w-8 h-[2px] bg-red-600"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight">
            Recent <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-black mt-3 max-w-xl mx-auto text-sm">
            A selection of completed projects across Accra and beyond.
            Residential, Commercial & Industrial.
          </p>
        </div>

        {/* Project Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projectImages.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-[#121212] border border-gray-800 h-64 group shadow-lg"
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Project Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectVideos.map((vid, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-black border border-gray-800 h-64 flex items-center justify-center relative shadow-xl group"
            >
              <video
                src={vid}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover rounded-2xl"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
