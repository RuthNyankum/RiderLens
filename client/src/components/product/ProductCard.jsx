import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, viewMode }) => {
  const navigate = useNavigate(); // hook for navigation

  // Handles click on product
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  // Handles keyboard accessibility (Enter or Space)
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  // List view
  if (viewMode === "list") {
    return (
      <article
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group flex flex-col sm:flex-row"
        tabIndex={0}
        role="button"
        aria-label={`View ${product.name} for ${formatPrice(product.price)}`}
      >
        <div className="relative overflow-hidden bg-light-gray w-full sm:w-64 flex-shrink-0 h-48 sm:h-auto">
          <img
            src={product.images[0]}
            alt={product.name}
            // className="w-full h-full object-cover"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 md:p-6 flex flex-col justify-between flex-1">
          <div>
            <p className="text-xs text-medium-gray uppercase tracking-wide mb-2">
              {product.category.replace("-", " ")}
            </p>
            <h3 className="font-semibold text-dark-charcoal text-lg md:text-xl mb-2">
              {product.name}
            </h3>
            <div className="flex gap-2 flex-wrap">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="text-xs bg-light-gray text-medium-gray px-2 py-1 rounded"
                >
                  {feature.replace("-", " ")}
                </span>
              ))}
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-brand-orange mt-4">
            {formatPrice(product.price)}
          </p>
        </div>
      </article>
    );
  }

  // Grid view
  return (
    <article
      onClick={handleClick} // ← fixed here
      onKeyPress={handleKeyPress}
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
      tabIndex={0}
      role="button"
      aria-label={`View ${product.name} for ${formatPrice(product.price)}`}
    >
      <div className="relative overflow-hidden bg-light-gray">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3 md:p-4">
        <p className="text-xs text-medium-gray uppercase tracking-wide mb-1">
          {product.category.replace("-", " ")}
        </p>
        <h3 className="font-semibold text-dark-charcoal text-sm md:text-base mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex gap-1.5 md:gap-2 flex-wrap mb-3">
          {product.features.slice(0, 2).map((feature) => (
            <span
              key={feature}
              className="text-[10px] md:text-xs bg-light-gray text-medium-gray px-1.5 md:px-2 py-0.5 md:py-1 rounded"
            >
              {feature.replace("-", " ")}
            </span>
          ))}
        </div>
        <p className="text-xl md:text-2xl font-bold text-brand-orange">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
