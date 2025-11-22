import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#4a1d56] to-[#2d0f35] overflow-hidden text-white min-h-[380px] md:min-h-[450px]">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-pink-600 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full py-8">
        
        {/* Top Text */}
        <div className="bg-brand-green text-white font-bold px-6 py-1 rounded-full mb-6 uppercase tracking-wider shadow-lg transform -rotate-2">
          KARGO BEDAVA!
        </div>

        {/* Main Circle Content */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-pink-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[6px] border-brand-pink/30 flex items-center justify-center bg-[#4a1d56]/50 backdrop-blur-sm shadow-[0_0_30px_rgba(255,95,158,0.4)]">
            <div className="absolute inset-2 rounded-full border-[2px] border-white/20"></div>
            
            <div className="text-center flex flex-col items-center justify-center">
               <h2 className="text-xl md:text-2xl font-bold leading-tight text-white mb-1">
                 3 ADET TESETTÜR<br />ALT-ÜST TAKIM
               </h2>
               <p className="text-xs md:text-sm text-gray-200 mb-2 opacity-80">Seçeceğin 3 Adet Tesettür Alt-Üst Takım</p>
               <div className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mt-2 drop-shadow-lg">
                 899TL
               </div>
            </div>

            {/* Glowing Orbit Line */}
            <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite] opacity-40 pointer-events-none" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="48" stroke="url(#grad1)" strokeWidth="1" fill="none" strokeDasharray="10, 10" />
               <defs>
                 <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" style={{stopColor:'rgb(255,95,158)', stopOpacity:1}} />
                   <stop offset="100%" style={{stopColor:'rgb(74,29,86)', stopOpacity:0}} />
                 </linearGradient>
               </defs>
            </svg>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 bg-brand-pink text-white px-8 py-2 rounded-full font-bold text-sm md:text-base shadow-lg uppercase tracking-widest">
          ÇOK AL AZ ÖDE
        </div>
      </div>

      {/* Decorative Model Image (Simulated position based on screenshot - usually distinct png) */}
      <div className="hidden md:block absolute bottom-0 right-[10%] h-[90%] w-auto opacity-90">
         {/* Using a placeholder that fits roughly */}
         <img 
           src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
           className="h-full w-auto object-contain mask-image-linear-gradient"
           style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
           alt="Fashion Model"
         />
      </div>
    </div>
  );
};