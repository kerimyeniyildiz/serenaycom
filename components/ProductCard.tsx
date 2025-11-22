import React from 'react';
import { Product } from '../types';
import { Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

interface Props {
  product: Product;
  isSelected: boolean;
  onToggle: () => void;
  canSelect: boolean;
}

export const ProductCard: React.FC<Props> = ({ product, isSelected, onToggle, canSelect }) => {
  
  // Generate a consistent "view count" based on cart count so it looks realistic but stays static for the product
  const viewCount = Math.floor(product.cartCount * 2.4) + 57;
  
  const handleBtnClick = () => {
    if (isSelected) {
      onToggle(); // Deselect
    } else if (canSelect) {
      onToggle(); // Select
    } else {
      alert("Kampanya limitine ulaştınız!");
    }
  };

  return (
    <div className={`group relative flex flex-col bg-white rounded-lg overflow-hidden border transition-all duration-200 ${isSelected ? 'border-brand-pink ring-1 ring-brand-pink shadow-lg' : 'border-gray-200 hover:shadow-md'}`}>
      
      {/* Image Section */}
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Selection Badge */}
        {isSelected && (
          <div className="absolute top-2 right-2 bg-brand-pink text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-fade-in-up z-10">
            SEÇİLDİ
          </div>
        )}

        {/* Zoom Icon (Bottom Left) */}
        <div className="absolute bottom-2 left-2 bg-white/80 p-1.5 rounded-full text-brand-pink z-10">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/>
            <path d="M3 16.2V21m0 0h4.8M3 21l6-6"/>
            <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/>
            <path d="M3 7.8V3m0 0h4.8M3 3l6 6"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow">
        
        {/* Trust Badges Carousel (Free Shipping, Easy Return, Secure Shopping) */}
        <div className="relative h-7 mb-2 w-full overflow-hidden rounded bg-gray-50">
            <div className="flex flex-col animate-scroll-up-3">
                {/* 1. Ücretsiz Kargo */}
                <div className="h-7 flex flex-shrink-0 items-center justify-center gap-1 text-[10px] font-bold text-brand-green bg-green-50 w-full">
                    <Truck size={12} strokeWidth={2.5} fill="currentColor" />
                    Ücretsiz Kargo
                </div>
                {/* 2. Kolay İade (Green now) */}
                <div className="h-7 flex flex-shrink-0 items-center justify-center gap-1 text-[10px] font-bold text-brand-green bg-green-50 w-full">
                     <RotateCcw size={12} strokeWidth={2.5} />
                     Kolay İade
                </div>
                {/* 3. Güvenli Alışveriş */}
                <div className="h-7 flex flex-shrink-0 items-center justify-center gap-1 text-[10px] font-bold text-white bg-brand-orange w-full">
                     <ShieldCheck size={12} strokeWidth={2.5} />
                     Güvenli Alışveriş
                </div>
                {/* Clone 1 */}
                <div className="h-7 flex flex-shrink-0 items-center justify-center gap-1 text-[10px] font-bold text-brand-green bg-green-50 w-full">
                    <Truck size={12} strokeWidth={2.5} fill="currentColor" />
                    Ücretsiz Kargo
                </div>
            </div>
        </div>

        <h3 className="text-sm font-bold text-gray-800 mb-1 line-clamp-2 leading-tight min-h-[2.5em]">
          {product.title}
        </h3>

        {/* Dynamic Social Proof - CSS Animation "Always Up" */}
        <div className="relative h-5 mb-2 w-full overflow-hidden">
            <div className="flex flex-col animate-scroll-up">
                
                {/* Message 1: Cart Count (RED) */}
                <div className="h-5 flex items-center gap-1 flex-shrink-0">
                    <Heart size={10} className="text-red-500 fill-red-500 flex-shrink-0" />
                    <span className="text-[10px] text-gray-600 font-medium truncate">
                        <span className="text-red-500 font-bold">{product.cartCount} kişinin</span> sepetinde, kaçırma!
                    </span>
                </div>

                {/* Message 2: View Count (Emoji restored, Text Red matched) */}
                <div className="h-5 flex items-center gap-1 flex-shrink-0">
                    <span className="text-[10px] leading-none">😍</span>
                    <span className="text-[10px] text-gray-600 font-medium truncate">
                        24 saatte <span className="text-red-500 font-bold">{viewCount} kişi</span> inceledi!
                    </span>
                </div>

                {/* Message 1 Clone (For smooth infinite loop) */}
                <div className="h-5 flex items-center gap-1 flex-shrink-0">
                    <Heart size={10} className="text-red-500 fill-red-500 flex-shrink-0" />
                    <span className="text-[10px] text-gray-600 font-medium truncate">
                        <span className="text-red-500 font-bold">{product.cartCount} kişinin</span> sepetinde, kaçırma!
                    </span>
                </div>

            </div>
        </div>

        {/* Size/Desc */}
        <div className="text-[10px] text-gray-500 space-y-0.5 mb-3">
            <p>{product.description}</p>
            <p>{product.sizeInfo}</p>
        </div>

        {/* Button */}
        <button 
            onClick={handleBtnClick}
            className={`w-full mt-auto py-2 px-4 rounded text-xs md:text-sm font-bold transition-colors duration-200 
                ${isSelected 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-brand-pink text-white hover:bg-brand-pink/90'
                }`}
        >
            {isSelected ? 'Seçimi Kaldır' : 'Sepete Ekle'}
        </button>
      </div>
    </div>
  );
};