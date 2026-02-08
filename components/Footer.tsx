import React from 'react';
import { CONTACTS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-white font-bold text-xl mb-4">МОСРОЛЛЕТА</div>
            <p className="text-sm leading-relaxed mb-6">
              Специализированный сайт-портфолио выполненных работ. Реальная экспертиза в Москве, СПб, Екатеринбурге и Краснодаре.
            </p>
            <div className="flex space-x-3">
              <a 
                href={CONTACTS.vkUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer text-[10px] font-bold text-white uppercase"
              >
                VK
              </a>
              <a 
                href={CONTACTS.telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer text-[10px] font-bold text-white uppercase"
              >
                TG
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Кейсы по разделам</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-white transition text-left">Рольставни в Москве и регионах</button></li>
              <li><button className="hover:text-white transition text-left">Секционные ворота в МО и ЛО</button></li>
              <li><button className="hover:text-white transition text-left">Жалюзи для офиса</button></li>
              <li><button className="hover:text-white transition text-left">Рулонные шторы Blackout</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Клиентам</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={CONTACTS.mainSiteUrl} className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  Основной каталог
                </a>
              </li>
              <li>
                <a href={CONTACTS.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Вызвать замерщика
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты и Репутация</h4>
            <p className="text-sm mb-2">{CONTACTS.address}</p>
            
            <a 
              href={CONTACTS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold mb-4 border border-slate-700 hover:bg-blue-600 hover:border-blue-500 transition shadow-lg shadow-black/20 group"
            >
              <svg className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
              <span>Показать на карте</span>
            </a>

            <a href={`tel:${CONTACTS.phoneClean}`} className="text-white font-bold block mb-4 italic">{CONTACTS.phone}</a>
            
            <div className="space-y-3">
              <a 
                href={CONTACTS.yandexMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex items-center justify-between hover:bg-slate-800 hover:border-yellow-500/50 transition-all group"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-tight group-hover:text-yellow-500 transition-colors">Рейтинг Яндекс</span>
                  <div className="flex items-center">
                    <div className="text-yellow-500 mr-2 flex text-xs">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <span className="text-xs font-black text-white">4.9</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 font-medium group-hover:text-white transition-colors">40+ отзывов</div>
              </a>

              <a 
                href={CONTACTS.avitoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex items-center justify-between hover:border-blue-500/50 transition-colors group"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-tight group-hover:text-blue-400 transition-colors">Профиль Avito</span>
                  <div className="flex items-center">
                    <div className="text-green-500 mr-2 flex text-xs">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <span className="text-xs font-black text-white">5.0</span>
                  </div>
                </div>
                <div className="text-[10px] text-blue-500 font-bold group-hover:underline">Перейти →</div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-xs flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} МОСРОЛЛЕТА. Кейсы и портфолио работ. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="hover:text-white transition">Политика конфиденциальности</button>
            <button className="hover:text-white transition">Карта сайта</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;