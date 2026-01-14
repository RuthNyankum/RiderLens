import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants/home.constants";

const CategoryCards = () => {
  return (
    <section
      className="relative -mt-32 pb-16 bg-transparent"
      aria-labelledby="categories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="categories-heading" className="sr-only">
          Product Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => {
            const IconComponent = category.icon;

            return (
              <Link
                key={category.id}
                to={category.link}
                className="group focus:outline-none focus:ring-4 focus:ring-brand/50 rounded-2xl"
                aria-label={`Browse ${category.name} - ${category.description}`}
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  {/* Icon Section */}
                  <div
                    className={`${category.color} h-56 flex items-center justify-center`}
                    aria-hidden="true"
                  >
                    <IconComponent className="w-24 h-24 text-white drop-shadow-lg" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 text-center bg-white">
                    <h3 className="text-2xl font-bold text-dark-charcoal mb-3 font-montserrat">
                      {category.name}
                    </h3>

                    <p className="text-medium-gray text-base mb-6">
                      {category.description}
                    </p>

                    <span
                      className="inline-block px-8 py-3 border-2 border-brand text-brand font-bold rounded-xl group-hover:bg-brand group-hover:text-white transition-all duration-200 text-lg"
                      aria-hidden="true"
                    >
                      Shop now
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
