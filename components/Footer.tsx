
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark py-20 px-10 border-t border-black/5 dark:border-white/5 transition-colors">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">emoji_food_beverage</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight uppercase text-[#181411] dark:text-white">Single Tea India</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-xs font-bold uppercase tracking-widest text-[#897161]">
          <a href="#" className="hover:text-primary transition-colors">Shop</a>
          <a href="#" className="hover:text-primary transition-colors">Origins</a>
          <a href="#" className="hover:text-primary transition-colors">Sourcing</a>
          <a href="#" className="hover:text-primary transition-colors">Journal</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>

        <div className="flex justify-center gap-6">
          {['public', 'share', 'mail'].map((icon) => (
            <button key={icon} className="size-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-[#897161] hover:bg-primary hover:text-white hover:border-primary transition-all">
              <span className="material-symbols-outlined text-[20px]">{icon}</span>
            </button>
          ))}
        </div>

        <p className="text-[10px] font-bold uppercase tracking-widest text-[#897161] opacity-60">
          © 2024 Single Tea India. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
