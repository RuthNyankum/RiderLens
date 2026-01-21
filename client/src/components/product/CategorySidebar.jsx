// components/CategorySidebar.jsx
// import React from "react";
// // import { useDispatch, useSelector } from "react-redux";
// import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import {
//   setCategory,
//   setPriceRange,
//   toggleFeature,
// } from "../../features/products/productSlice";
// import { setAnnouncement } from "../../features/products/uiSlice";
// import { MOCK_CATEGORIES, MOCK_FEATURES } from "../constants/shop.constants";

// import { X } from "lucide-react";

// const CategorySidebar = ({ isOpen, onClose }) => {
//   const dispatch = useAppDispatch();
//   const filters = useAppSelector((state) => state.products.filters);

//   const handleCategoryChange = (categoryId, categoryName) => {
//     dispatch(setCategory(categoryId));
//     dispatch(setAnnouncement(`Filtering by ${categoryName}`));
//     // Close sidebar on mobile after selection
//     if (window.innerWidth < 1024) {
//       onClose();
//     }
//   };

//   const handlePriceChange = (range) => {
//     dispatch(setPriceRange(range));
//     dispatch(setAnnouncement("Price filter applied"));
//   };

//   const handleFeatureToggle = (featureId, featureName) => {
//     dispatch(toggleFeature(featureId));
//     const action = filters.features.includes(featureId) ? "removed" : "added";
//     dispatch(setAnnouncement(`${featureName} filter ${action}`));
//   };

//   return (
//     <>
//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={onClose}
//           aria-hidden="true"
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed lg:sticky top-0 left-0 h-screen lg:h-auto
//           w-72 lg:w-64
//           bg-white p-6 rounded-none lg:rounded-lg shadow-lg lg:shadow-sm
//           overflow-y-auto
//           transition-transform duration-300 ease-in-out
//           z-50 lg:z-auto
//           ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//         `}
//         aria-label="Product filters"
//       >
//         {/* Mobile close button */}
//         <div className="flex justify-between items-center mb-6 lg:hidden">
//           <h2 className="text-lg font-bold text-dark-charcoal">Filters</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-light-gray rounded-full transition-colors"
//             aria-label="Close filters"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="space-y-6">
//           {/* Categories */}
//           <div role="group" aria-labelledby="category-heading">
//             <h3
//               id="category-heading"
//               className="font-bold mb-4 flex items-center gap-2 text-dark-charcoal"
//             >
//               <span aria-hidden="true">📂</span>
//               Categories
//             </h3>
//             <ul className="space-y-2">
//               {MOCK_CATEGORIES.map((cat) => (
//                 <li key={cat.id}>
//                   <button
//                     onClick={() => handleCategoryChange(cat.id, cat.name)}
//                     className={`w-full flex justify-between px-3 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-brand-orange ${
//                       filters.category === cat.id
//                         ? "bg-brand-orange text-white font-semibold"
//                         : "hover:bg-light-gray text-dark-charcoal"
//                     }`}
//                     aria-pressed={filters.category === cat.id}
//                     aria-label={`${cat.name}, ${cat.count} products`}
//                   >
//                     <span>{cat.name}</span>
//                     <span className="text-sm" aria-hidden="true">
//                       {cat.count}
//                     </span>
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Price Range */}
//           <div role="group" aria-labelledby="price-heading">
//             <h3
//               id="price-heading"
//               className="font-bold mb-4 flex items-center gap-2 text-dark-charcoal"
//             >
//               <span aria-hidden="true">💰</span>
//               Price Range
//             </h3>
//             <label htmlFor="price-select" className="sr-only">
//               Select price range
//             </label>
//             <select
//               id="price-select"
//               value={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
//               onChange={(e) => {
//                 const [min, max] = e.target.value.split("-").map(Number);
//                 handlePriceChange([min, max]);
//               }}
//               className="w-full px-3 py-2 border border-border-gray rounded focus:outline-none focus:ring-2 focus:ring-brand-orange"
//             >
//               <option value="0-2000">All Prices</option>
//               <option value="0-200">Under $200</option>
//               <option value="200-500">$200 - $500</option>
//               <option value="500-2000">$500 and above</option>
//             </select>
//           </div>

//           {/* Features */}
//           <fieldset>
//             <legend className="font-bold mb-4 flex items-center gap-2 text-dark-charcoal">
//               <span aria-hidden="true">⚡</span>
//               Features
//             </legend>
//             <ul className="space-y-2">
//               {MOCK_FEATURES.map((feat) => (
//                 <li key={feat.id}>
//                   <label className="flex items-center gap-3 cursor-pointer hover:bg-light-gray p-2 rounded">
//                     <input
//                       type="checkbox"
//                       checked={filters.features.includes(feat.id)}
//                       onChange={() => handleFeatureToggle(feat.id, feat.name)}
//                       className="w-4 h-4 accent-brand-orange focus:ring-2 focus:ring-brand-orange"
//                       aria-describedby={`${feat.id}-count`}
//                     />
//                     <span className="flex-1 text-dark-charcoal">
//                       {feat.name}
//                     </span>
//                     <span
//                       id={`${feat.id}-count`}
//                       className="text-sm text-medium-gray"
//                       aria-label={`${feat.count} products`}
//                     >
//                       {feat.count}
//                     </span>
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </fieldset>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default CategorySidebar;

import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setCategory,
  setPriceRange,
  toggleFeature,
} from "../../features/products/productSlice";
import { setAnnouncement } from "../../features/products/uiSlice";
import { MOCK_CATEGORIES, MOCK_FEATURES } from "../constants/shop.constants";
import { formatPrice } from "../../utils/formatPrice";

import { X } from "lucide-react";

const CategorySidebar = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.products.filters);

  const handleCategoryChange = (categoryId, categoryName) => {
    dispatch(setCategory(categoryId));
    dispatch(setAnnouncement(`Filtering by ${categoryName}`));
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const handlePriceChange = (range) => {
    dispatch(setPriceRange(range));
    dispatch(setAnnouncement("Price filter applied"));
  };

  const handleFeatureToggle = (featureId, featureName) => {
    dispatch(toggleFeature(featureId));
    const action = filters.features.includes(featureId) ? "removed" : "added";
    dispatch(setAnnouncement(`${featureName} filter ${action}`));
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen lg:h-auto
          w-72 lg:w-64
          p-4
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          z-50 lg:z-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        aria-label="Product filters"
      >
        {/* Mobile close button */}
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h2 className="text-lg font-bold text-dark-charcoal">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-light-gray rounded-full transition-colors"
            aria-label="Close filters"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Categories Card */}
          <div
            role="group"
            aria-labelledby="category-heading"
            className="bg-white rounded-lg shadow-sm p-4"
          >
            <h3
              id="category-heading"
              className="font-bold mb-4 flex items-center gap-2 text-dark-charcoal"
            >
              <span aria-hidden="true">📂</span>
              Categories
            </h3>
            <ul className="space-y-2">
              {MOCK_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryChange(cat.id, cat.name)}
                    className={`w-full flex justify-between px-3 py-2 rounded transition focus:outline-none focus:ring-2 focus:ring-brand-orange ${
                      filters.category === cat.id
                        ? "bg-brand-orange text-white font-semibold"
                        : "hover:bg-light-gray text-dark-charcoal"
                    }`}
                    aria-pressed={filters.category === cat.id}
                    aria-label={`${cat.name}, ${cat.count} products`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-sm" aria-hidden="true">
                      {cat.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Card */}
          <div
            role="group"
            aria-labelledby="price-heading"
            className="bg-white rounded-lg shadow-sm p-4"
          >
            <h3
              id="price-heading"
              className="font-bold mb-4 flex items-center gap-2 text-dark-charcoal"
            >
              <span aria-hidden="true">💰</span>
              Price Range
            </h3>
            <label htmlFor="price-select" className="sr-only">
              Select price range
            </label>
            <select
              id="price-select"
              value={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
              onChange={(e) => {
                const [min, max] = e.target.value.split("-").map(Number);
                handlePriceChange([min, max]);
              }}
              className="w-full px-3 py-2 border border-border-gray rounded focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              <option value="0-200">{`Under ${formatPrice(200)}`}</option>
              <option value="200-500">{`${formatPrice(200)} - ${formatPrice(500)}`}</option>
              <option value="500-2000">{`Above ${formatPrice(500)}`}</option>
            </select>
          </div>

          {/* Features Card */}
          <fieldset className="bg-white rounded-lg shadow-sm p-4">
            <legend className="font-bold mb-4 flex items-center gap-2 text-dark-charcoal">
              <span aria-hidden="true">⚡</span>
              Features
            </legend>
            <ul className="space-y-2">
              {MOCK_FEATURES.map((feat) => (
                <li key={feat.id}>
                  <label className="flex items-center gap-3 cursor-pointer hover:bg-light-gray p-2 rounded">
                    <input
                      type="checkbox"
                      checked={filters.features.includes(feat.id)}
                      onChange={() => handleFeatureToggle(feat.id, feat.name)}
                      className="w-4 h-4 accent-brand-orange focus:ring-2 focus:ring-brand-orange"
                      aria-describedby={`${feat.id}-count`}
                    />
                    <span className="flex-1 text-dark-charcoal">
                      {feat.name}
                    </span>
                    <span
                      id={`${feat.id}-count`}
                      className="text-sm text-medium-gray"
                      aria-label={`${feat.count} products`}
                    >
                      {feat.count}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
      </aside>
    </>
  );
};

export default CategorySidebar;
