import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PortfolioMo from "./PortfolioMohamed.jsx";
import ContactPage from "./Component/ContactPage.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<PortfolioMo />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
