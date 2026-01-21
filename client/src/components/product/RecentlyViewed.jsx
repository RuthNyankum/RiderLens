// components/RecentlyViewed.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const RecentlyViewed = () => {
  const recentlyViewed = useSelector((state) => state.recentlyViewed.items);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Update items per page on resize
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentIndex(0); // Reset to first page on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (recentlyViewed.length === 0) {
    return null;
  }

  const maxIndex = Math.max(0, recentlyViewed.length - itemsPerPage);
  const totalPages = Math.ceil(recentlyViewed.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const goToPage = (pageIndex) => {
    const newIndex = pageIndex * itemsPerPage;
    setCurrentIndex(newIndex > maxIndex ? maxIndex : newIndex);
  };

  const visibleProducts = recentlyViewed.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const currentPage = Math.floor(currentIndex / itemsPerPage);

  return (
    <section
      className="bg-white rounded-lg shadow-sm p-4 md:p-6 mt-6 md:mt-8"
      aria-labelledby="recently-viewed-heading"
    >
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2
          id="recently-viewed-heading"
          className="text-xl md:text-2xl font-bold text-dark-charcoal flex items-center gap-2"
        >
          <Eye className="text-brand-orange" size={24} aria-hidden="true" />
          Recently Viewed
        </h2>

        <div
          className="flex gap-2"
          role="group"
          aria-label="Product navigation"
        >
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-1.5 md:p-2 rounded-full bg-light-gray text-dark-charcoal hover:bg-brand-orange hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-light-gray disabled:hover:text-dark-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Previous products"
          >
            <ChevronLeft size={18} className="md:w-5 md:h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-1.5 md:p-2 rounded-full bg-light-gray text-dark-charcoal hover:bg-brand-orange hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-light-gray disabled:hover:text-dark-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Next products"
          >
            <ChevronRight size={18} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="relative overflow-hidden">
        <div className="flex gap-3 md:gap-4">
          {visibleProducts.map((product) => (
            <article
              key={product.id}
              className={`flex-shrink-0 bg-light-gray rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer group ${
                itemsPerPage === 1
                  ? "w-full"
                  : itemsPerPage === 2
                  ? "w-[calc(50%-6px)]"
                  : "w-[calc(25%-12px)]"
              }`}
              tabIndex={0}
              role="button"
              aria-label={`View ${product.name} for $${product.price.toFixed(
                2
              )}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2 md:p-3">
                <h3 className="font-semibold text-dark-charcoal text-xs md:text-sm mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-base md:text-lg font-bold text-brand-orange">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div
          className="flex justify-center gap-2 mt-4"
          role="group"
          aria-label="Page indicators"
        >
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 ${
                currentPage === idx
                  ? "bg-brand-orange w-6"
                  : "bg-border-gray w-2 hover:bg-medium-gray"
              }`}
              aria-label={`Go to page ${idx + 1}`}
              aria-current={currentPage === idx ? "true" : "false"}
            />
          ))}
        </div>
      )}

      {/* Accessibility: Current position */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Showing products {currentIndex + 1} to{" "}
        {Math.min(currentIndex + itemsPerPage, recentlyViewed.length)} of{" "}
        {recentlyViewed.length} recently viewed items
      </div>
    </section>
  );
};

export default RecentlyViewed;
