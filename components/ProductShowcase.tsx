
import React from 'react';
import { PRODUCTS } from '../constants';

const ProductShowcase: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-background-light py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full mb-12 flex flex-col md:flex-row md:items-end justify-between">
        <div className="max-w-xl">
          <h3 className="text-primary text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span>
            The Harvest
          </h3>
          <h1 className="text-[#181411] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
            Misty peaks of <span className="font-serif italic font-medium text-primary">Nilgiri</span>
          </h1>
        </div>
        <div className="hidden md:block pb-2">
          <p className="text-[#897161] text-sm max-w-xs text-right leading-relaxed">
            Discover single-origin teas sourced directly from India's finest estates. Scroll to explore the collection.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden py-8 pl-6 lg:pl-12">
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 gap-6 lg:gap-10 pr-12 items-center h-[55vh] min-h-[450px]">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="relative flex-shrink-0 snap-center group cursor-pointer w-[300px] md:w-[360px] lg:w-[400px] h-full transition-transform duration-500 hover:scale-[1.02]"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-xl border border-black/5">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={product.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={product.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>

                {product.bestSeller && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#181411] border border-white/20">
                      Best Seller
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <p className="text-primary text-xs font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-75">{product.origin} • {product.flush}</p>
                      <h3 className="text-white text-3xl font-serif italic mb-2">{product.name}</h3>
                    </div>
                    <p className="text-white text-xl font-medium">${product.price}</p>
                  </div>

                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <div className="pt-4 border-t border-white/20 flex flex-wrap gap-x-4 gap-y-2 text-white/90 text-xs">
                      {product.notes.map(note => (
                        <span key={note} className="flex items-center gap-1">
                           <span className="material-symbols-outlined text-[14px]">eco</span> {note}
                        </span>
                      ))}
                    </div>
                    <button className="mt-6 w-full py-3 bg-primary text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2">
                      Add to Cart <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 lg:px-12 w-full max-w-[1440px] mx-auto pb-8 flex items-center justify-between">
        <div className="flex flex-col gap-2 w-48 md:w-64">
          <div className="flex justify-between text-[10px] font-bold tracking-widest text-[#181411]">
            <span>01</span>
            <span className="text-[#897161]">05</span>
          </div>
          <div className="h-1 w-full bg-[#e6dfdb] rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[20%] rounded-full"></div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#897161]">Drag to explore</span>
          <div className="size-10 rounded-full border border-[#897161] flex items-center justify-center text-[#897161]">
            <span className="material-symbols-outlined text-[20px]">drag_handle</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
