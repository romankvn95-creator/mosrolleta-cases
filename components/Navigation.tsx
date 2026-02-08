import React from 'react';
import { CONTACTS } from '../constants';

interface NavigationProps {
  onNavigate: (path: string) => void;
  currentPath: string;
  onOpenMeasurement: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPath, onOpenMeasurement }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => onNavigate('/')}
        >
          <div className="bg-blue-600 text-white font-black px-2 py-1 rounded text-lg tracking-tight">
            МОСРОЛЛЕТА
          </div>
          <div className="hidden md:block text-xs text-slate-500 font-medium uppercase tracking-widest leading-tight border-l pl-3 border-slate-200">
            Кейсы и объекты<br/>Репутация 4.9
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-600">
          <button 
            onClick={() => onNavigate('/')} 
            className={`hover:text-blue-600 transition ${currentPath === '/' ? 'text-blue-600' : ''}`}
          >
            Главная
          </button>
          <div className="relative group">
            <span className="cursor-pointer flex items-center hover:text-blue-600 transition">
              Направления
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
            <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-slate-100 rounded-lg py-2 mt-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
              <button onClick={() => onNavigate('/rolstavni')} className="w-full text-left px-4 py-2 hover:bg-slate-50">Рольставни</button>
              <button onClick={() => onNavigate('/sekcionnye-vorota')} className="w-full text-left px-4 py-2 hover:bg-slate-50">Ворота</button>
              <button onClick={() => onNavigate('/zhalyuzi')} className="w-full text-left px-4 py-2 hover:bg-slate-50">Жалюзи</button>
              <button onClick={() => onNavigate('/rulonnye-shtory')} className="w-full text-left px-4 py-2 hover:bg-slate-50">Рулонные шторы</button>
            </div>
          </div>
          <a href={CONTACTS.mainSiteUrl} target="_blank" className="hover:text-blue-600 transition">Основной сайт</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a 
            href={`tel:${CONTACTS.phoneClean}`} 
            className="hidden sm:block text-slate-800 font-bold hover:text-blue-600 transition"
          >
            {CONTACTS.phone}
          </a>
          <a 
            href={CONTACTS.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-100"
          >
            Вызвать на замер
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;