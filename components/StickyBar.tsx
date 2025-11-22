import React from 'react';

interface Props {
  title: string;
  price: number;
  count: number;
  max: number;
}

export const StickyBar: React.FC<Props> = ({ title, price, count, max }) => {
  const percentage = (count / max) * 100;

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-xs md:text-sm font-bold text-brand-pink uppercase hidden md:block">
            {title}
          </h3>
          <span className="text-xs text-gray-500 md:hidden">
             Seçili Ürün: {count}/{max}
          </span>
          <p className="text-[10px] md:text-xs text-gray-500 hidden md:block">
            Seçeceğin {max} Adet Tesettür Alt-Üst Takım
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
             <div className="text-brand-pink font-bold text-lg">{price}₺</div>
             <div className="text-xs text-gray-400">Seçili Ürün: {count}/{max}</div>
          </div>
          <div className="text-right md:hidden">
             <div className="text-brand-pink font-bold text-lg">{price}₺</div>
          </div>
        </div>
      </div>
      {/* Progress Line */}
      <div className="h-1 w-full bg-gray-100">
        <div 
          className="h-full bg-brand-pink transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};