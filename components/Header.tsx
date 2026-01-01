
import React from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-black/5 dark:bg-background-dark/80 dark:border-white/5 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="size-8 text-primary">
            <span className="material-symbols-outlined text-3xl">emoji_food_beverage</span>
          </div>
          <span className="text-lg font-bold tracking-tight uppercase text-primary-dark dark:text-primary">
            Single Tea India
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <button 
            onClick={() => onNavigate('showcase')}
            className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${currentPage === 'showcase' ? 'text-primary' : ''}`}
          >
            Shop Tea
          </button>
          <button 
            onClick={() => onNavigate('origins')}
            className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${currentPage === 'origins' ? 'text-primary' : ''}`}
          >
            Origins
          </button>
          <button 
            onClick={() => onNavigate('features')}
            className={`text-sm font-medium tracking-wide hover:text-primary transition-colors ${currentPage === 'features' ? 'text-primary' : ''}`}
          >
            Our Story
          </button>
          <a href="#" className="text-sm font-medium tracking-wide hover:text-primary transition-colors">Journal</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-gray-800 dark:text-white">search</span>
          </button>
          <button className="relative p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-gray-800 dark:text-white">shopping_bag</span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button className="lg:hidden p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
