import React from "react";
import { Link } from "react-router-dom";
import { FEATURED_PRODUCTS } from "../constants/home.constants";

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2
            id="featured-heading"
            className="text-4xl md:text-5xl font-bold text-dark-charcoal font-montserrat mb-4"
          >
            Featured Products
          </h2>
          <p className="text-lg text-medium-gray">
            Our most popular gear trusted by riders worldwide
          </p>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-4 bg-brand hover:bg-hover-state text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-brand/50"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-border-gray">
      <Link
        to={`/product/${product.id}`}
        className="block focus:outline-none focus:ring-4 focus:ring-brand/50 rounded-xl"
        aria-label={`View ${product.name} - $${product.price}`}
      >
        {/* Product Image */}
        <div className="relative h-72 bg-light-gray overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/400x400?text=Product+Image";
            }}
          />

          {product.badge && (
            <span className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark-charcoal mb-3 font-montserrat group-hover:text-brand transition-colors">
            {product.name}
          </h3>

          <p className="text-3xl font-bold text-brand mb-6">
            <span className="sr-only">Price: </span>${product.price.toFixed(2)}
          </p>

          <span
            className="block w-full py-3 text-center border-2 border-brand text-brand font-bold rounded-lg group-hover:bg-brand group-hover:text-white transition-all duration-200 text-lg"
            aria-hidden="true"
          >
            View Product
          </span>
        </div>
      </Link>
    </article>
  );
};

export default FeaturedProducts;

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "../../features/products/productSlice";

// const FeaturedProducts = () => {
//   const dispatch = useDispatch();
//   const { featured, loading, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     // Fetch products when component mounts
//     if (featured.length === 0) {
//       dispatch(fetchProducts());
//     }
//   }, [dispatch, featured.length]);

//   // Loading state
//   if (loading) {
//     return (
//       <section
//         className="py-20 bg-light-gray"
//         aria-labelledby="featured-heading"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <header className="text-center mb-12">
//             <h2
//               id="featured-heading"
//               className="text-4xl md:text-5xl font-bold text-dark-charcoal font-montserrat mb-4"
//             >
//               Featured Products
//             </h2>
//           </header>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {[...Array(4)].map((_, index) => (
//               <ProductSkeleton key={index} />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <section
//         className="py-20 bg-light-gray"
//         aria-labelledby="featured-heading"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2
//             id="featured-heading"
//             className="text-4xl md:text-5xl font-bold text-dark-charcoal font-montserrat mb-4"
//           >
//             Featured Products
//           </h2>
//           <p className="text-error-red text-lg mb-6">
//             Failed to load products. Please try again later.
//           </p>
//           <button
//             onClick={() => dispatch(fetchProducts())}
//             className="px-8 py-4 bg-brand hover:bg-hover-state text-white font-semibold rounded-lg transition-colors duration-200"
//           >
//             Retry
//           </button>
//         </div>
//       </section>
//     );
//   }

//   // Empty state
//   if (featured.length === 0) {
//     return (
//       <section
//         className="py-20 bg-light-gray"
//         aria-labelledby="featured-heading"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2
//             id="featured-heading"
//             className="text-4xl md:text-5xl font-bold text-dark-charcoal font-montserrat mb-4"
//           >
//             Featured Products
//           </h2>
//           <p className="text-medium-gray text-lg">
//             No featured products available at the moment.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 bg-light-gray" aria-labelledby="featured-heading">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <header className="text-center mb-12">
//           <h2
//             id="featured-heading"
//             className="text-4xl md:text-5xl font-bold text-dark-charcoal font-montserrat mb-4"
//           >
//             Featured Products
//           </h2>
//           <p className="text-lg text-medium-gray">
//             Our most popular gear trusted by riders worldwide
//           </p>
//         </header>

//         {/* Products Grid - First 4 products */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
//           {featured.slice(0, 4).map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         {/* Bottom Row - Remaining products */}
//         {featured.length > 4 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
//             {featured.slice(4).map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <Link
//             to="/shop"
//             className="inline-block px-8 py-4 bg-brand hover:bg-hover-state text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-brand/50"
//           >
//             View All Products
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

//   return (
//     <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
//       <Link
//         to={`/product/${product.id}`}
//         className="block focus:outline-none focus:ring-4 focus:ring-brand/50 rounded-xl"
//         aria-label={`View ${product.name} - $${product.price}`}
//       >
//         {/* Product Image */}
//         <div className="relative h-64 bg-light-gray overflow-hidden">
//           <img
//             src={
//               product.image || product.images?.[0] || "/images/placeholder.jpg"
//             }
//             alt={product.name}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//             loading="lazy"
//           />
//           {product.badge && (
//             <span
//               className="absolute top-4 left-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full"
//               aria-label={`${product.badge} badge`}
//             >
//               {product.badge}
//             </span>
//           )}

//           {/* Stock status */}
//           {product.stock === 0 && (
//             <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//               <span className="bg-error-red text-white text-sm font-bold px-4 py-2 rounded-lg">
//                 Out of Stock
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Product Info */}
//         <div className="p-6">
//           <h3 className="text-lg font-bold text-dark-charcoal mb-2 font-montserrat">
//             {product.name}
//           </h3>

//           {/* Price */}
//           <div className="mb-4">
//             {product.compareAtPrice ? (
//               <div className="flex items-center gap-2">
//                 <p className="text-2xl font-bold text-brand">
//                   <span className="sr-only">Sale price: </span>${product.price}
//                 </p>
//                 <p className="text-lg text-medium-gray line-through">
//                   <span className="sr-only">Original price: </span>$
//                   {product.compareAtPrice}
//                 </p>
//               </div>
//             ) : (
//               <p className="text-2xl font-bold text-brand">
//                 <span className="sr-only">Price: </span>${product.price}
//               </p>
//             )}
//           </div>

//           <span
//             className="block w-full py-3 text-center border-2 border-brand text-brand font-semibold rounded-lg group-hover:bg-brand group-hover:text-white transition-colors duration-200"
//             aria-hidden="true"
//           >
//             View Product
//           </span>
//         </div>
//       </Link>
//     </article>
//   );
// };

// // Loading Skeleton Component
// const ProductSkeleton = () => {
//   return (
//     <div className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
//       <div className="h-64 bg-medium-gray/20" />
//       <div className="p-6">
//         <div className="h-6 bg-medium-gray/20 rounded mb-2" />
//         <div className="h-8 bg-medium-gray/20 rounded w-24 mb-4" />
//         <div className="h-12 bg-medium-gray/20 rounded" />
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;
