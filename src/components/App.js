import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import CoachingPage from '../pages/CoachingPage';
import AboutPage from '../pages/AboutPage';
import FAQPage from '../pages/FAQPage';
import ContactPage from '../pages/ContactPage';
import PricesPage from '../pages/PricesPage';
import ImpressumPage from '../pages/ImpressumPage';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App; 