import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { NotificationData } from '../types';

interface Props {
    data: NotificationData[];
}

export const NotificationToast: React.FC<Props> = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const runCycle = () => {
        // 1. Show current notification
        setVisible(true);

        // 2. Hide after 7 seconds
        const hideTimer = setTimeout(() => {
            setVisible(false);

            // 3. Wait 10 seconds after hiding, then update index and loop
            const nextCycleTimer = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
                runCycle();
            }, 10000);

            timeoutIds.push(nextCycleTimer);

        }, 7000);

        timeoutIds.push(hideTimer);
    };

    // Initial start delay
    const startTimer = setTimeout(() => {
        runCycle();
    }, 4000);
    timeoutIds.push(startTimer);

    return () => {
        timeoutIds.forEach(clearTimeout);
    };
  }, [data.length]);

  const currentData = data[currentIndex];

  return (
    <div 
        className={`fixed bottom-4 left-4 z-[60] max-w-[320px] bg-white rounded-lg shadow-2xl border-l-4 border-brand-pink p-3 flex items-start gap-3 transition-all duration-700 transform
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
    >
        
        {/* Icon / Badge */}
        <div className="relative flex-shrink-0">
             <div className="w-10 h-10 rounded-full bg-brand-lightPink flex items-center justify-center text-brand-pink">
                 <ShoppingBag size={20} />
             </div>
             <div className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full border-2 border-white"></div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-brand-pink uppercase mb-0.5">YENİ SİPARİŞ <span className="text-gray-400 font-normal normal-case">• {currentData.timeAgo}</span></h4>
            <p className="text-sm font-bold text-gray-800 truncate">{currentData.name}</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                {currentData.location}
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Tunik Pantolon İkili Takım</p>
        </div>

        {/* Product Thumb */}
        <div className="w-12 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
            <img src={currentData.productImage} alt="Sold item" className="w-full h-full object-cover" />
        </div>
    </div>
  );
};