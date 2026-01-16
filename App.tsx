import React, { useEffect } from 'react';
// Deployed at 2026-01-13T12:00:00
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import LandingPage from './LandingPage';
import InfoPage from './InfoPage';
import AdCreative from './AdCreative';
import AdGallery from './AdGallery';
import { TermsOfService, PrivacyPolicy, Support } from './Pages';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/ad-preview" element={<AdCreative />} />
        <Route path="/ad-gallery" element={<AdGallery />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;
