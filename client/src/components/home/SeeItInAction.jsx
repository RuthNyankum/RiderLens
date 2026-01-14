import React from "react";
import { Play } from "lucide-react";
import { ACTION_VIDEOS } from "../constants/home.constants";

const SeeItInAction = () => {
  return (
    <section
      className="py-20 bg-dark-charcoal"
      aria-labelledby="videos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2
            id="videos-heading"
            className="text-4xl md:text-5xl font-bold text-white font-montserrat mb-4"
          >
            See It In Action
          </h2>
          <p className="text-lg text-white/80">
            Watch real riders capture stunning footage
          </p>
        </header>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACTION_VIDEOS.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand/50"
              aria-label={`Watch video: ${video.title}`}
            >
              {/* Thumbnail */}
              <div className="relative h-64 md:h-80 bg-medium-gray">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"
                  aria-hidden="true"
                />

                {/* Play Button */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-xl font-bold text-white font-montserrat">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeeItInAction;
