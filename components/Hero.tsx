
import React from 'react';

interface HeroProps {
  onCta: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCta }) => {
  return (
    <main className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background-light">
      {/* Parallax Floating Leaves */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] opacity-40 blur-[2px] animate-float">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI9c9AyhGNTIwlr7cAX0n9gLrZ6CczfiUAhpHNQciq3tpMGprUBGOvw7NeTdDWWrhsP4v-kWEVGdOxu5-6oH6mIGatFIelUiZQkzESkXsUkc-wunAxhvvqNJpobNurB1L0swOsrXKdTxBhvgNNMIYIJ2QH55NTllW67J3w1Rx3KNmphZN9eVPO7nS-SU_kjJBhV4WnT88zlUbLb-HJImzCIzgB6rsw2kn5QMtrU216StTrazh0kRgmVsM-7WoMZdThx8NsWwWgDrY" className="w-12 h-12 rotate-45" alt="Leaf" />
        </div>
        <div className="absolute bottom-[30%] right-[15%] opacity-30 blur-[1px] animate-float-delayed">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI8BWtWMfSDj9MqSYvuZ1Mj8TbxYs1GmcmWAEHYgZQbjmEyKl_eBiL6RcXgIepf6oHXbljngRBliLjb-r_SZEHM_dSPSKMmvIigqw9dXUIVHwDbcwgcq2-YelIjsItvFeAHZ9CL9Z56AyLvdbGeVp600vnU2hi-ECFOnYpJDicQ70_1oDjhOlGvYLf6l_4J-IfBJ8naw5qDtJEiF-du4UWk3tYjv-5DJ27TDLiOTTc3MfS6iGxUAXkXt4M49A4HWSw06buwCEo1Cw" className="w-16 h-16 -rotate-12" alt="Leaf" />
        </div>
      </div>

      <div className="layout-container relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-8 lg:pr-10 pt-10 lg:pt-0">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 w-fit animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary-dark">2024 Harvest Available</span>
            </div>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light tracking-[-0.03em] leading-[1.1] text-[#171412] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              The Soul of <br/>
              <span className="font-serif italic text-primary">Indian Origins</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Experience the purest single-origin teas, hand-harvested from the mist-covered peaks of the Himalayas to the lush valleys of Assam.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={onCta}
              className="relative overflow-hidden group rounded-full bg-primary text-white h-14 px-8 text-base font-medium tracking-wide shadow-lg shadow-primary/30 transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Explore Collection</span>
            </button>
            <a href="#" className="group flex items-center gap-3 text-primary-dark font-medium hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
              </div>
              <span>Watch our harvest</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="relative w-[80%] lg:w-[90%] h-[80%] rounded-t-[200px] rounded-b-[20px] overflow-hidden shadow-2xl z-10">
            <div className="absolute inset-0 bg-black/10 z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL9oyVLJlNxtow36D7vsxjnHoAVXT_-6_WOm8wIi00qy8zigdg0sAeetX9ngt5hHNMxK8lwuZWladOaN3Yu9fesL_W9sl9AqN_tyyjsL1N_UpS0vgoYwBzvKEEuZ0OYWMBx6hptTaSDuu9uq8xKFU4VCyRUyhyzeH4bQp5VPUtzV4-5FqaR4-fQpIA7bUExBV72xGTB9998nQnZHklXaQhzRl9qnL_eHGXqxjTJqBD0WPqm-LgMhgoe9f5bM8TxI1Y1urhB8UnvkY" 
              className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-110" 
              alt="Harvest"
            />
          </div>
          <div className="absolute bottom-[5%] left-[-5%] lg:left-[0%] w-[180px] h-[220px] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 hidden md:block">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVwZqu1NypjvWAGeJi13kehM6idIaSNVOESY3dHsHSJcdUHVQGZEtH17I-AoEPIy0CbbnOJ48IoQMS6o0BWgqlIrGRq7ht4wXnHml637-uanemzC8FWS8JlgiM8utKrFYDx_3mmiGKDFd8YQBZsKfFHjZB2IWIGTNWnODY8LSnaHAmqAlz5NEJbeb_7lqAVrUvO0kjHamkmHmDIN9PtXYS5E8a2a2Y1XSguH6-MzopSLDyQDUIQbuOPM18gi8C2moPbM-VEXVaZxc" className="w-full h-full object-cover" alt="Glass Pot" />
          </div>
          {/* Spin Badge */}
          <div className="absolute top-[10%] right-[-5%] z-30 hidden lg:block">
            <div className="relative w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-lg p-1">
              <div className="absolute inset-0 animate-spin-slow">
                <svg height="100%" viewBox="0 0 100 100" width="100%">
                  <defs><path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circle"></path></defs>
                  <text fontSize="11.5">
                    <textPath className="fill-primary-dark font-bold uppercase tracking-[0.2em]" xlinkHref="#circle">Premium • Single • Origin • Tea •</textPath>
                  </text>
                </svg>
              </div>
              <span className="material-symbols-outlined text-3xl text-primary">eco</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="relative w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
        <span className="text-xs uppercase tracking-widest text-primary/80 font-medium">Scroll</span>
      </div>
    </main>
  );
};

export default Hero;
