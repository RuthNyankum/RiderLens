// pages/ProductDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Star,
  Check,
  Minus,
  Plus,
  ShoppingCart,
  Shield,
  Truck,
  RotateCcw,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { addToRecentlyViewed } from "../features/products/recentlyViewedSlice";
import { formatPrice } from "../utils/formatPrice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("specification");

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      dispatch(addToRecentlyViewed(product));
      setSelectedImage(0); // ✅ reset gallery
      window.scrollTo(0, 0);
    }
  }, [product, dispatch]);

  if (!product) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-dark-charcoal mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate("/shop")}
            className="px-6 py-3 bg-brand-orange text-white rounded-lg hover:bg-hover-state transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  // Mock data for demo - in real app, this would come from API/database
  const productImages = product.images?.length
    ? product.images
    : [product.image];

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Action Cameras", path: "/shop?category=action-cameras" },
    { name: product.name, path: "" },
  ];

  const keyFeatures = [
    "5.3K60 & 4K120 video recording for ultra-smooth footage",
    "HyperSmooth 6.0 stabilization - perfect for motorcycle rides",
    "Waterproof to 33ft (10m) without housing",
    "HDR photo and video for stunning detail",
    "8x Slo-Mo at 2.7K resolution",
  ];

  const specifications = [
    { label: "Video Resolution", value: "5.3K60, 4K120, 2.7K240" },
    { label: "Photo Resolution", value: "27MP" },
    { label: "Stabilization", value: "HyperSmooth 6.0" },
    { label: "Waterproof", value: "33ft (10m)" },
    { label: "Display", value: "Rear touchscreen" },
    { label: "Battery Life", value: "Up to 70 minutes (5.3K60)" },
    { label: "Weight", value: "154g" },
    { label: "Connectivity", value: "Wi-Fi, Bluetooth" },
  ];

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", { product, quantity });
    // Add your cart logic here
  };

  const handleBuyNow = () => {
    console.log("Buy now:", { product, quantity });
    // Add your checkout logic here
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-brand-orange">RiderLens</h1>
            <nav className="hidden md:flex gap-6">
              <a
                href="/shop"
                className="text-dark-charcoal hover:text-brand-orange transition-colors"
              >
                Shop
              </a>
              <a
                href="/about"
                className="text-dark-charcoal hover:text-brand-orange transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-dark-charcoal hover:text-brand-orange transition-colors"
              >
                Contact
              </a>
            </nav>
            <button className="relative p-2">
              <ShoppingCart className="text-dark-charcoal" size={24} />
              <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm overflow-x-auto">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-medium-gray">{">"}</span>}
                {crumb.path ? (
                  <button
                    onClick={() => navigate(crumb.path)}
                    className="text-medium-gray hover:text-brand-orange transition-colors whitespace-nowrap"
                  >
                    {crumb.name}
                  </button>
                ) : (
                  <span className="text-dark-charcoal font-semibold whitespace-nowrap">
                    {crumb.name}
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Images */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Main Image */}
            <div className="relative bg-light-gray rounded-lg overflow-hidden mb-4 aspect-square">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Image Navigation Arrows */}
              <button
                onClick={() =>
                  setSelectedImage(
                    (prev) =>
                      (prev - 1 + productImages.length) % productImages.length,
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setSelectedImage((prev) => (prev + 1) % productImages.length)
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-brand-orange ring-2 ring-brand-orange"
                      : "border-border-gray hover:border-medium-gray"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-4">
              <span className="inline-block bg-light-gray text-dark-charcoal text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Action Camera
              </span>
              <h1 className="text-3xl font-bold text-dark-charcoal mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className={
                        star <= 4
                          ? "fill-bright-yellow text-bright-yellow"
                          : "text-border-gray"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-medium-gray">
                  4.8 out of 5 (128 reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-4xl font-bold text-brand-orange mb-2">
                {formatPrice(product.price)}
              </div>
              <p className="text-sm text-medium-gray">
                Free shipping on orders over ₵50
              </p>
            </div>

            {/* Description */}
            <p className="text-dark-gray mb-6 leading-relaxed">
              The GoPro Hero 12 Black delivers stunning 5.3K60 video and 27MP
              photos with industry-leading stabilization. Perfect for capturing
              your most intense motorcycle rides with crystal-clear footage.
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="font-bold text-dark-charcoal mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check
                      className="text-brand-orange flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-sm text-dark-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Status */}
            <div className="bg-success-green/10 border border-success-green/20 rounded-lg p-3 mb-6">
              <div className="flex items-center gap-2 text-success-green">
                <Check size={20} />
                <span className="font-semibold">
                  In Stock - Ships within 1-2 business days
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block font-semibold text-dark-charcoal mb-2">
                Quantity:
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="w-10 h-10 flex items-center justify-center border-2 border-brand-orange text-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={20} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-16 h-10 text-center border-2 border-border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  min="1"
                />
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="w-10 h-10 flex items-center justify-center border-2 border-brand-orange text-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={handleAddToCart}
                className="w-full bg-brand-orange text-white font-bold py-4 rounded-lg hover:bg-hover-state transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                ADD TO CART
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full bg-dark-charcoal text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                BUY NOW
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-gray">
              <div className="flex items-center gap-2">
                <Truck className="text-brand-orange" size={20} />
                <span className="text-sm font-semibold text-dark-charcoal">
                  Free Shipping
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-electric-blue" size={20} />
                <span className="text-sm font-semibold text-dark-charcoal">
                  2-Year Warranty
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="text-dark-charcoal" size={20} />
                <span className="text-sm font-semibold text-dark-charcoal">
                  30-Day Returns
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-bright-yellow" size={20} />
                <span className="text-sm font-semibold text-dark-charcoal">
                  Secure Checkout
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Tab Headers */}
          <div className="flex border-b border-border-gray mb-6">
            <button
              onClick={() => setActiveTab("specification")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                activeTab === "specification"
                  ? "text-brand-orange border-brand-orange"
                  : "text-medium-gray border-transparent hover:text-dark-charcoal"
              }`}
            >
              Specification
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                activeTab === "reviews"
                  ? "text-brand-orange border-brand-orange"
                  : "text-medium-gray border-transparent hover:text-dark-charcoal"
              }`}
            >
              Reviews (123)
            </button>
            <button
              onClick={() => setActiveTab("compatibility")}
              className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
                activeTab === "compatibility"
                  ? "text-brand-orange border-brand-orange"
                  : "text-medium-gray border-transparent hover:text-dark-charcoal"
              }`}
            >
              Compatibility
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "specification" && (
            <div>
              <h2 className="text-2xl font-bold text-dark-charcoal mb-6">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start py-3 border-b border-border-gray"
                  >
                    <span className="font-semibold text-dark-charcoal">
                      {spec.label}
                    </span>
                    <span className="text-dark-gray text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h2 className="text-2xl font-bold text-dark-charcoal mb-6">
                Customer Reviews
              </h2>
              <p className="text-medium-gray">Reviews section coming soon...</p>
            </div>
          )}

          {activeTab === "compatibility" && (
            <div>
              <h2 className="text-2xl font-bold text-dark-charcoal mb-6">
                Compatibility
              </h2>
              <p className="text-medium-gray">
                Compatibility information coming soon...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark-charcoal text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-medium-gray hover:text-white transition-colors"
                  >
                    Action Cameras
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medium-gray hover:text-white transition-colors"
                  >
                    Helmet Mounts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medium-gray hover:text-white transition-colors"
                  >
                    Bike Mounts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medium-gray hover:text-white transition-colors"
                  >
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-medium-gray hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medium-gray hover:text-white transition-colors"
                  >
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medium-gray hover:text-white transition-colors"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-medium-gray hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-medium-gray hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-medium-gray rounded-full"></div>
                <div className="w-10 h-10 bg-medium-gray rounded-full"></div>
                <div className="w-10 h-10 bg-medium-gray rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-medium-gray mt-8 pt-8 text-center">
            <p className="text-medium-gray">
              © 2024 RiderLens. All rights reserved.
            </p>
            <p className="text-sm text-medium-gray mt-2 flex items-center justify-center gap-2">
              <Lock size={14} /> Secure Checkout
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
