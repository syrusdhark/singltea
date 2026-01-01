
import React from 'react';
import { FEATURES } from '../constants';

const BrandFeatures: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-24 overflow-hidden bg-background-dark text-white">
      {/* Ambient Orbs */}
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-[10%] h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col px-6 md:px-12">
        <div className="mb-12 md:mb-16 flex flex-col gap-4 md:gap-6 text-center md:text-left animate-fade-in-up">
          <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur-sm md:mx-0 mx-auto">
            Why Single Tea
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white lg:leading-[1.1]">
            The Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff9e5e]">Origin</span>
          </h1>
          <p className="max-w-2xl text-base md:text-lg font-light leading-relaxed text-[#b9a89d] md:mx-0 mx-auto">
            Cultivated for Perfection. Experience the nuance of terroir with our single-origin collection, crafted for the discerning palate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#392f28] bg-card-dark/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-card-dark/80 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-all duration-500 group-hover:bg-primary/10 group-hover:blur-2xl"></div>
              <div className="flex size-14 items-center justify-center rounded-xl bg-[#392f28] text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-primary">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-sm font-normal leading-relaxed text-[#b9a89d] group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </div>
              <div className="mt-auto pt-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Learn more →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 text-sm font-bold text-background-dark transition-all hover:bg-primary hover:text-white hover:shadow-lg">
            <span className="relative z-10">Explore the Collection</span>
            <span className="material-symbols-outlined relative z-10 transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandFeatures;
