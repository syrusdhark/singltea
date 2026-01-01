
import React, { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Shop Tea', id: 'showcase' },
    { label: 'Origins', id: 'origins' },
    { label: 'Our Story', id: 'features' },
    { label: 'Journal', id: 'journal' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] glass-panel border-b border-black/5 dark:bg-background-dark/80 dark:border-white/5 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group pointer-events-auto"
          onClick={() => handleNavigate('home')}
        >
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">emoji_food_beverage</span>
          </div>
          <span className="text-lg font-bold tracking-tight uppercase text-primary-dark dark:text-primary">
            Single Tea India
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${currentPage === item.id ? 'text-primary' : 'text-gray-800 dark:text-gray-200'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors hidden sm:block">
            <span className="material-symbols-outlined text-gray-800 dark:text-white">search</span>
          </button>
          <button className="relative p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-gray-800 dark:text-white">shopping_bag</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button 
            className="lg:hidden p-2 hover:bg-primary/10 rounded-full transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-gray-800 dark:text-white">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-background-light dark:bg-background-dark z-[90] lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`text-2xl font-bold tracking-tight uppercase transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${currentPage === item.id ? 'text-primary' : 'text-gray-900 dark:text-white'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-8 flex gap-6">
            <span className="material-symbols-outlined text-primary text-3xl">eco</span>
            <span className="material-symbols-outlined text-primary text-3xl">temp_preferences_custom</span>
            <span className="material-symbols-outlined text-primary text-3xl">public</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
