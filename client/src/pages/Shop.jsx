import React, { useState } from "react";
import Breadcrumb from "@/components/layouts/Breadcrumb";
import { Menu } from "lucide-react";
import CategorySidebar from "../components/product/CategorySidebar";
import ProductGrid from "../components/product/ProductGrid";
import RecentlyViewed from "../components/product/RecentlyViewed";
import ScreenReaderAnnouncements from "../components/product/ScreenReaderAnnouncements";

const ShopPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Shop" }];

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Screen reader announcements */}
      <ScreenReaderAnnouncements />

      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-white text-black px-4 py-2 rounded shadow"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-bold text-dark-charcoal mb-1 md:mb-2">
                Action Camera Store
              </h1>
              <p className="text-xs md:text-base text-medium-gray">
                Premium mounts and accessories for your adventures
              </p>
            </div>

            {/* Mobile filter button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 bg-brand-orange text-white rounded-lg hover:bg-hover-state transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange ml-4"
              aria-label="Open filters"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mt-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Main content */}
      <main
        id="main-content"
        tabIndex={-1}
        className="container mx-auto px-4 pb-8 mt-6"
      >
        <div className="flex gap-6 lg:gap-8 relative">
          {/* Sidebar */}
          <CategorySidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Products */}
          <ProductGrid />
        </div>

        {/* Recently Viewed */}
        <RecentlyViewed />
      </main>
    </div>
  );
};

export default ShopPage;
