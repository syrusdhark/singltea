
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import OriginsMap from './components/OriginsMap';
import BrandFeatures from './components/BrandFeatures';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onCta={() => setCurrentPage('showcase')} />
            <ProductShowcase />
            <OriginsMap />
            <BrandFeatures />
          </>
        );
      case 'showcase':
        return <ProductShowcase />;
      case 'origins':
        return <OriginsMap />;
      case 'features':
        return <BrandFeatures />;
      default:
        return <Hero onCta={() => setCurrentPage('showcase')} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <div className="transition-all duration-500">
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
