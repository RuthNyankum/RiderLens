// components/Pagination.jsx
import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  // Calculate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of middle pages
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if near the start
      if (currentPage <= 3) {
        startPage = 2;
        endPage = 4;
      }

      // Adjust if near the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }

      // Add ellipsis if there's a gap after first page
      if (startPage > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis if there's a gap before last page
      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirst = () => {
    onPageChange(1);
  };

  const handleLast = () => {
    onPageChange(totalPages);
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <nav
      className="bg-white rounded-lg shadow-sm p-3 md:p-4 mt-6 md:mt-8"
      aria-label="Pagination"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Page info */}
        <div className="text-xs md:text-sm text-medium-gray order-2 sm:order-1">
          Showing{" "}
          <span className="font-semibold text-dark-charcoal">{startItem}</span>{" "}
          to <span className="font-semibold text-dark-charcoal">{endItem}</span>{" "}
          of{" "}
          <span className="font-semibold text-dark-charcoal">{totalItems}</span>{" "}
          results
        </div>

        {/* Pagination controls */}
        <div className="flex items-center gap-1 md:gap-2 order-1 sm:order-2">
          {/* First page button - Hidden on mobile */}
          <button
            onClick={handleFirst}
            disabled={currentPage === 1}
            className="hidden sm:flex p-1.5 md:p-2 rounded border border-border-gray hover:bg-light-gray transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Go to first page"
          >
            <ChevronsLeft size={16} className="md:w-[18px] md:h-[18px]" />
          </button>

          {/* Previous button */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="p-1.5 md:p-2 rounded border border-border-gray hover:bg-light-gray transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Go to previous page"
          >
            <ChevronLeft size={16} className="md:w-[18px] md:h-[18px]" />
          </button>

          {/* Page numbers */}
          <div className="flex items-center gap-1">
            {pageNumbers.map((page, index) => {
              if (page === "...") {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 md:px-3 py-1 md:py-2 text-medium-gray text-sm"
                  >
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={page}
                  onClick={() => onPageChange(page)}
                  className={`min-w-[32px] md:min-w-[40px] px-2 md:px-3 py-1 md:py-2 text-sm md:text-base rounded border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                    currentPage === page
                      ? "bg-brand-orange text-white border-brand-orange font-semibold"
                      : "border-border-gray hover:bg-light-gray text-dark-charcoal"
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="p-1.5 md:p-2 rounded border border-border-gray hover:bg-light-gray transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Go to next page"
          >
            <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />
          </button>

          {/* Last page button - Hidden on mobile */}
          <button
            onClick={handleLast}
            disabled={currentPage === totalPages}
            className="hidden sm:flex p-1.5 md:p-2 rounded border border-border-gray hover:bg-light-gray transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-label="Go to last page"
          >
            <ChevronsRight size={16} className="md:w-[18px] md:h-[18px]" />
          </button>
        </div>
      </div>

      {/* Screen reader announcement */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Page {currentPage} of {totalPages}
      </div>
    </nav>
  );
};

export default Pagination;
