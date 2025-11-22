import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryTabs } from './components/CategoryTabs';
import { ProductCard } from './components/ProductCard';
import { StickyBar } from './components/StickyBar';
import { NotificationToast } from './components/NotificationToast';
import { PRODUCTS, CATEGORIES, NOTIFICATIONS } from './constants';

function App() {
  const [activeCategoryId, setActiveCategoryId] = useState<number>(1);
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);

  const activeCategory = CATEGORIES.find(c => c.id === activeCategoryId) || CATEGORIES[0];
  const maxSelection = activeCategory.maxSelection;

  // Filter products based on active category
  const currentProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.categoryId === activeCategoryId);
  }, [activeCategoryId]);

  const handleCategoryChange = (id: number) => {
    setActiveCategoryId(id);
    setSelectedProductIds([]); // Reset selection when category changes
  };

  // Handle selection logic
  const toggleProductSelection = (id: number) => {
    if (selectedProductIds.includes(id)) {
      // Remove
      setSelectedProductIds(prev => prev.filter(pId => pId !== id));
    } else {
      // Add only if limit not reached based on active category
      if (selectedProductIds.length < maxSelection) {
        setSelectedProductIds(prev => [...prev, id]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20">
      <Header />
      
      <Hero />

      <CategoryTabs 
        categories={CATEGORIES.map(c => ({
          ...c,
          active: c.id === activeCategoryId
        }))}
        activeId={activeCategoryId}
        onSelect={handleCategoryChange}
      />

      <StickyBar 
        title={activeCategory.title}
        price={activeCategory.price}
        count={selectedProductIds.length}
        max={maxSelection}
      />

      <main className="container mx-auto px-2 md:px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {currentProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              isSelected={selectedProductIds.includes(product.id)}
              onToggle={() => toggleProductSelection(product.id)}
              canSelect={selectedProductIds.length < maxSelection}
            />
          ))}
        </div>

        {/* Bottom Action Button for Mobile (Sticky) */}
        {selectedProductIds.length > 0 && (
          <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 z-40 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            <button className="w-full bg-brand-green text-white font-bold py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              <span>SİPARİŞİ TAMAMLA</span>
              <span className="bg-white/20 px-2 py-0.5 rounded text-sm">
                {activeCategory.price}₺
              </span>
            </button>
          </div>
        )}
      </main>

      <NotificationToast data={NOTIFICATIONS} />
      
      {/* WhatsApp Floating Button (Generic Addition for authenticity) */}
      <a href="#" className="fixed bottom-20 right-4 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

    </div>
  );
}

export default App;