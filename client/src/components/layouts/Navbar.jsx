import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="bg-dark-charcoal text-white sticky top-0 z-50 shadow-lg"
        // role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-brand text-2xl font-bold font-montserrat hover:text-hover-state transition-colors"
              aria-label="RiderLens Home"
            >
              RiderLens
            </Link>

            {/* Navigation Links - Hidden on mobile, flex on md+ */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-200 hover:text-brand ${
                      isActive
                        ? "text-brand border-b-2 border-brand"
                        : "text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Cart & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label={`Shopping cart with ${cartItemCount} items`}
              >
                <ShoppingCart className="w-6 h-6" aria-hidden="true" />
                {cartItemCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 bg-brand text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                    aria-label={`${cartItemCount} items in cart`}
                  >
                    {cartItemCount}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Toggle - Hidden on md+ */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Sidebar - Slides from right */}
      <aside
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-64 sm:w-80 bg-dark-charcoal text-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation menu"
      >
        {/* Sidebar Header - Just close button */}
        <div className="flex items-center justify-end p-4 border-b border-white/10">
          <button
            onClick={closeMobileMenu}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-white hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Cart Summary in Sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <Link
            to="/cart"
            onClick={closeMobileMenu}
            className="flex items-center justify-between w-full py-3 px-4 bg-brand hover:bg-hover-state rounded-lg transition-colors"
          >
            <span className="font-semibold">View Cart</span>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="bg-white text-brand text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
