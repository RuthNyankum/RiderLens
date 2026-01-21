// components/ProductGrid.jsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Grid, List } from "lucide-react";
import {
  setSortBy,
  setViewMode,
  setPage,
} from "../../features/products/productSlice";
import { addToRecentlyViewed } from "../../features/products/recentlyViewedSlice";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductGrid = () => {
  const dispatch = useAppDispatch();
  const { products, filters, viewMode, pagination } = useAppSelector(
    (state) => state.products,
  );

  // Filter products based on current filters
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (filters.category !== "all" && product.category !== filters.category) {
      return false;
    }

    // Price range filter
    if (
      product.price < filters.priceRange[0] ||
      product.price > filters.priceRange[1]
    ) {
      return false;
    }

    // Features filter
    if (filters.features.length > 0) {
      const hasFeature = filters.features.some((feature) =>
        product.features.includes(feature),
      );
      if (!hasFeature) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Pagination calculations
  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / pagination.itemsPerPage);
  const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
  const endIndex = startIndex + pagination.itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Reset to page 1 if current page exceeds total pages
  useEffect(() => {
    if (pagination.currentPage > totalPages && totalPages > 0) {
      dispatch(setPage(1));
    }
  }, [totalPages, pagination.currentPage, dispatch]);

  const handleProductClick = (product) => {
    dispatch(addToRecentlyViewed(product));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleViewModeChange = (mode) => {
    dispatch(setViewMode(mode));
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    // Scroll to top of products
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex-1 min-w-0">
      {/* Header with count and controls */}
      <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm mb-4 md:mb-6">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-start lg:items-center justify-between">
          <div className="text-dark-charcoal text-sm md:text-base">
            Showing{" "}
            <span className="font-bold text-brand-orange">
              {totalProducts === 0 ? 0 : startIndex + 1}-
              {Math.min(endIndex, totalProducts)}
            </span>{" "}
            of <span className="font-bold">{totalProducts}</span> products
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <label
                htmlFor="sort-select"
                className="text-xs md:text-sm text-medium-gray whitespace-nowrap"
              >
                Sort by:
              </label>
              <select
                id="sort-select"
                value={filters.sortBy}
                onChange={handleSortChange}
                className="flex-1 sm:flex-initial px-2 md:px-3 py-1.5 md:py-2 text-sm border border-border-gray rounded focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            <div className="flex gap-2" role="group" aria-label="View mode">
              <button
                onClick={() => handleViewModeChange("grid")}
                className={`p-1.5 md:p-2 rounded transition-colors ${
                  viewMode === "grid"
                    ? "bg-brand-orange text-white"
                    : "bg-light-gray text-medium-gray hover:bg-border-gray"
                }`}
                aria-pressed={viewMode === "grid"}
                aria-label="Grid view"
              >
                <Grid size={18} className="md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => handleViewModeChange("list")}
                className={`p-1.5 md:p-2 rounded transition-colors ${
                  viewMode === "list"
                    ? "bg-brand-orange text-white"
                    : "bg-light-gray text-medium-gray hover:bg-border-gray"
                }`}
                aria-pressed={viewMode === "list"}
                aria-label="List view"
              >
                <List size={18} className="md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid/List */}
      {currentProducts.length > 0 ? (
        <>
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                : "space-y-4"
            }
          >
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={totalProducts}
              itemsPerPage={pagination.itemsPerPage}
            />
          )}
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-5xl md:text-6xl mb-4">🔍</div>
            <h3 className="text-xl md:text-2xl font-bold text-dark-charcoal mb-2">
              No Products Found
            </h3>
            <p className="text-sm md:text-base text-medium-gray">
              We couldn't find any products matching your filters.
              <br />
              Try adjusting your filter criteria.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
