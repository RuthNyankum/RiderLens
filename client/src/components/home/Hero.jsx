import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/images";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center pb-40"
      aria-labelledby="hero-heading"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={IMAGES.heroMotorcylce}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center py-20">
        <div className="max-w-4xl text-center">
          <h1
            id="hero-heading"
            className="text-white font-semibold leading-tight mb-6 text-center"
          >
            <span className="block md:whitespace-nowrap text-[clamp(2rem,5vw,4.5rem)]">
              Action Cameras &amp; Mounts
            </span>

            <span className="block md:whitespace-nowrap text-[clamp(1.5rem,4vw,3rem)]">
              Built for Motorcycle Riders
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-xl md:text-2xl lg:text-3xl mt-8 mb-12 font-light tracking-wide">
            Capture every ride. Stable. Weatherproof. Secure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 px-4 sm:px-0">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-12 py-6 bg-brand hover:bg-hover-state text-white font-bold text-xl rounded-2xl shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand/50"
            >
              Shop Cameras
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-12 py-6 bg-brand hover:bg-hover-state text-white font-bold text-xl rounded-2xl shadow-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand/50"
            >
              Shop Mounts
            </Link>
          </div>

          {/* Trust Badges */}
          <div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white"
            role="list"
            aria-label="Store features"
          >
            {/* Free Shipping */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-electric-blue/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-electric-blue"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-semibold text-lg whitespace-nowrap">
                Free Shipping
              </span>
            </div>

            {/* 30-Day Returns */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-electric-blue/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-electric-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <span className="font-semibold text-lg whitespace-nowrap">
                30-Day Returns
              </span>
            </div>

            {/* 2-Year Warranty */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-electric-blue/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-electric-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="font-semibold text-lg whitespace-nowrap">
                2-Year Warranty
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
