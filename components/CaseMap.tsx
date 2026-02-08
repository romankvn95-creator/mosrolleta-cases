
import React, { useEffect, useRef } from 'react';
import { MOCK_CASES } from '../constants';

interface CaseMapProps {
  onNavigate: (path: string) => void;
}

const CaseMap: React.FC<CaseMapProps> = ({ onNavigate }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<any>(null);

  useEffect(() => {
    // Fix: Access Leaflet from window object using any cast to bypass TypeScript error
    const L = (window as any).L;
    if (typeof window === 'undefined' || !mapRef.current || !L) return;

    // Initialize map if not already done
    if (!leafletMap.current) {
      // Fix: Use local L reference instead of window.L
      leafletMap.current = L.map(mapRef.current).setView([55.7558, 37.6173], 9);

      // Fix: Use local L reference
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(leafletMap.current);
    }

    // Add markers for cases with coordinates
    MOCK_CASES.forEach(item => {
      if (item.coords) {
        // Fix: Use local L reference
        const marker = L.marker([item.coords.lat, item.coords.lng]).addTo(leafletMap.current);
        
        const popupContent = document.createElement('div');
        popupContent.className = 'custom-popup-content';
        popupContent.innerHTML = `
          <div class="p-4 bg-white rounded-lg">
            <img src="${item.mainImage}" alt="${item.title}" class="w-full h-24 object-cover rounded-md mb-2">
            <h4 class="text-sm font-black text-slate-900 leading-tight mb-2">${item.title}</h4>
            <div class="text-[10px] text-blue-600 font-bold uppercase mb-3">${item.location}</div>
            <button class="w-full bg-blue-600 text-white py-2 rounded-md text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition">Смотреть кейс</button>
          </div>
        `;

        popupContent.querySelector('button')?.addEventListener('click', () => {
          onNavigate(`/${item.category}/${item.slug}`);
        });

        marker.bindPopup(popupContent, {
          className: 'custom-popup',
          closeButton: false
        });
      }
    });

    return () => {
      if (leafletMap.current) {
        // We might want to keep it persistent if navigating back, but standard React cleanup:
        // leafletMap.current.remove();
        // leafletMap.current = null;
      }
    };
  }, [onNavigate]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Карта наших объектов</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Мы работаем по всей Москве и Московской области. Найдите реализованные проекты в вашем районе.
          </p>
        </div>
        
        <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] shadow-2xl border-8 border-slate-50 overflow-hidden">
          <div ref={mapRef} className="w-full h-full" />
          
          {/* Overlay Info */}
          <div className="absolute bottom-6 left-6 z-[1000] hidden md:block">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Живая карта</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-bold tracking-tight">
                Нажмите на маркер, чтобы увидеть детали объекта, фото до/после и стоимость решения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseMap;
