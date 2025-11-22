import React from 'react';
import { Category } from '../types';

interface Props {
  categories: Category[];
  activeId: number;
  onSelect: (id: number) => void;
}

export const CategoryTabs: React.FC<Props> = ({ categories, activeId, onSelect }) => {
  return (
    <div className="container mx-auto px-2 -mt-8 relative z-20 pb-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`
              relative p-3 md:p-4 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-center h-full min-h-[100px] shadow-md
              ${cat.active 
                ? 'bg-brand-lightPink border-2 border-brand-pink text-brand-purple' 
                : 'bg-white border border-gray-200 hover:border-brand-pink/50 text-gray-600'}
            `}
          >
            <div className={`font-bold text-sm md:text-base leading-tight mb-1 ${cat.active ? 'text-brand-pink' : 'text-gray-800'}`}>
              {cat.title}
            </div>
            <div className="text-[10px] md:text-xs opacity-80 leading-tight mb-2 line-clamp-2">
              {cat.subtitle}
            </div>
            <div className="font-extrabold text-base md:text-lg text-gray-900 mt-auto">
              Toplam {cat.price}₺
            </div>
            
            {/* Arrow indicating selection */}
            {cat.active && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-lightPink border-b-2 border-r-2 border-brand-pink transform rotate-45"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};