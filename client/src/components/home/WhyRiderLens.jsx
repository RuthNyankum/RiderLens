import React from "react";
import { WHY_RIDER_LENS_FEATURES } from "../constants/home.constants";

const WhyRiderLens = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="why-heading"
            className="text-4xl md:text-5xl font-bold text-dark-charcoal font-montserrat mb-4"
          >
            Why RiderLens?
          </h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            We're not just selling cameras – we're delivering the complete
            riding capture experience.
          </p>
        </header>

        {/* Features Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_RIDER_LENS_FEATURES.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <li key={index} className="text-center group">
                <div
                  className={`${feature.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-dark-charcoal mb-3 font-montserrat">
                  {feature.title}
                </h3>

                <p className="text-medium-gray">{feature.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WhyRiderLens;
