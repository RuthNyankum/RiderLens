// components/ScreenReaderAnnouncements.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAnnouncement } from "../../features/products/uiSlice";

const ScreenReaderAnnouncements = () => {
  const dispatch = useDispatch();
  const announcement = useSelector((state) => state.ui.announcement);

  useEffect(() => {
    if (announcement) {
      // Clear announcement after 3 seconds
      const timer = setTimeout(() => {
        dispatch(clearAnnouncement());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [announcement, dispatch]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
};

export default ScreenReaderAnnouncements;
