// src/components/ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        // Delay needed in case content hasn't mounted yet
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
