
import React, { useState } from 'react';
import { REGIONS } from '../constants';
import { Region } from '../types';

const OriginsMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(REGIONS[0]);

  return (
    <section className="relative min-h-screen pt-24 flex flex-col bg-background-light overflow-hidden">
      <div className="px-6 md:px-10 max-w-[1440px] mx-auto w-full mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Provenance</span>
            <h2 className="text-4xl md:text-6xl font-light text-[#181411] leading-[1.1]">
              The Terroir <br/><span className="font-serif italic font-medium">of India</span>
            </h2>
          </div>
          <div className="max-w-md pb-2">
            <p className="text-[#897161] text-lg leading-relaxed">
              Explore the mist-covered hills and sun-drenched valleys where our single-origin leaves begin their journey.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full flex-grow flex flex-col lg:flex-row bg-white overflow-hidden border-t border-black/5">
        <div className="relative w-full lg:w-2/3 xl:w-3/4 min-h-[600px] bg-[#fcfbf9]">
          <div className="absolute inset-0 flex items-center justify-center p-10 opacity-30 pointer-events-none">
            {/* India Shape Placeholder */}
            <svg className="w-full h-full max-h-[70vh] text-[#e6e2de] fill-current" viewBox="0 0 400 500">
              <path d="M130,20 C140,10 160,10 170,20 L190,40 C200,50 210,60 200,80 C190,100 230,120 250,130 C270,140 320,150 340,140 C360,130 380,140 370,160 C360,180 340,200 320,210 C300,220 280,240 290,260 C300,280 280,300 260,320 C240,340 220,380 200,420 C180,460 160,480 150,490 C140,500 120,480 110,460 C100,440 80,400 70,380 C60,360 40,320 30,300 C20,280 10,240 20,220 C30,200 50,180 60,160 C70,140 60,100 70,80 C80,60 100,40 110,30 L130,20 Z" />
            </svg>
          </div>

          {REGIONS.map((region) => (
            <div 
              key={region.id}
              className={`absolute group cursor-pointer transition-all duration-300 ${selectedRegion.id === region.id ? 'scale-125' : 'opacity-60 hover:opacity-100'}`}
              style={{ top: region.coordinates.y, left: region.coordinates.x }}
              onClick={() => setSelectedRegion(region)}
            >
              <div className="relative flex items-center justify-center w-8 h-8">
                <div className={`absolute w-full h-full rounded-full ${selectedRegion.id === region.id ? 'bg-primary/30 animate-ping' : 'bg-black/10'}`}></div>
                <div className={`relative w-4 h-4 rounded-full shadow-lg border-2 border-white ${selectedRegion.id === region.id ? 'bg-primary' : 'bg-[#897161]'}`}></div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 hidden group-hover:block z-20">
                <div className="bg-white px-3 py-1.5 rounded-lg shadow-xl text-[10px] font-bold tracking-widest uppercase">
                  {region.name}
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-8 left-8 z-20">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-black/5 max-w-[200px]">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#897161] mb-3">Map Layers</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-primary bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[10px]">check</span>
                  </div>
                  <span className="text-xs font-medium text-[#181411]">Active Estates</span>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-4 h-4 rounded border border-gray-300"></div>
                  <span className="text-xs font-medium text-[#181411]">Historical Routes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-1/3 xl:w-1/4 bg-white border-l border-black/5 overflow-y-auto lg:h-auto min-h-[500px] shadow-2xl z-20 animate-fade-in-up">
          <div className="p-8 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">{selectedRegion.state}</span>
              </div>
            </div>

            <div className="mb-8 space-y-6">
              <h3 className="text-4xl font-bold text-[#181411] tracking-tight">{selectedRegion.name}</h3>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group">
                <img 
                  src={selectedRegion.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={selectedRegion.name}
                />
                <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur px-3 py-1 rounded-lg text-white text-[10px] font-bold border border-white/20">
                  Est. {selectedRegion.established}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-[#897161] text-sm leading-relaxed mb-6">
                {selectedRegion.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedRegion.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full bg-background-light text-[10px] font-bold text-[#181411] border border-black/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-background-light border border-black/5">
                <span className="block text-[10px] font-bold text-[#897161] uppercase tracking-widest mb-1">Elevation</span>
                <span className="block text-lg font-bold text-[#181411]">{selectedRegion.elevation}</span>
              </div>
              <div className="p-4 rounded-xl bg-background-light border border-black/5">
                <span className="block text-[10px] font-bold text-[#897161] uppercase tracking-widest mb-1">Harvest</span>
                <span className="block text-lg font-bold text-[#181411]">{selectedRegion.harvest}</span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                Explore Collection
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginsMap;
