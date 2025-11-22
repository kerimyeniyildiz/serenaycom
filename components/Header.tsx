import React from 'react';
import { Instagram } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-brand-purple py-3 z-50 relative">
      <div className="container mx-auto px-2 md:px-4">
        {/* White Pill Container */}
        <div className="bg-white w-full rounded-full h-12 md:h-14 flex items-center justify-between px-4 md:px-6 shadow-lg">
          
          {/* Logo Text */}
          <span className="text-[#d0269e] font-extrabold text-xl md:text-2xl tracking-tight">
            Serenay.com
          </span>

          {/* Icons */}
          <div className="flex items-center gap-3">
            {/* Instagram Icon - Pink */}
            <a href="#" className="text-[#d0269e] hover:opacity-80 transition-opacity">
              <Instagram size={26} strokeWidth={2.5} />
            </a>
            
            {/* WhatsApp/Message Icon - Green */}
            <a href="#" className="text-[#25d366] hover:opacity-80 transition-opacity">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="26" 
                height="26" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-message-circle"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};