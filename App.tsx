
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Category from './pages/Category.tsx';
import CaseDetail from './pages/CaseDetail.tsx';
import MeasurementModal from './components/MeasurementModal.tsx';
import { CATEGORIES, CONTACTS, MOCK_CASES } from './constants.tsx';

const App: React.FC = () => {
  const [path, setPath] = useState<string>(window.location.hash.replace('#', '') || '/');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.replace('#', '') || '/';
      setPath(newPath);
      window.scrollTo(0, 0);
      
      // Dynamic Title Management
      if (newPath === '/') {
        document.title = 'Кейсы МОСРОЛЛЕТА: рольставни, ворота, жалюзи и рулонные шторы в Москве, СПб и Краснодаре.';
      } else {
        const parts = newPath.split('/').filter(Boolean);
        if (parts.length === 1) {
          const category = CATEGORIES.find(c => c.slug === parts[0]);
          if (category) document.title = `${category.title} — Кейсы МОСРОЛЛЕТА`;
        } else if (parts.length === 2) {
          const item = MOCK_CASES.find(c => c.slug === parts[1]);
          if (item) document.title = `${item.title} — Кейс МОСРОЛЛЕТА`;
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial title set
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (newPath: string) => {
    window.location.hash = newPath;
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const renderPage = () => {
    if (path === '/') return <Home onNavigate={navigate} onOpenMeasurement={openModal} />;

    const parts = path.split('/').filter(Boolean);
    
    if (parts.length === 1) {
      const category = CATEGORIES.find(c => c.slug === parts[0]);
      if (category) return <Category categorySlug={parts[0]} onNavigate={navigate} onOpenMeasurement={openModal} />;
    }

    if (parts.length === 2) {
      return <CaseDetail caseSlug={parts[1]} onNavigate={navigate} onOpenMeasurement={openModal} />;
    }

    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Страница не найдена</h1>
        <button onClick={() => navigate('/')} className="text-blue-600 font-bold underline">Вернуться на главную</button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={navigate} currentPath={path} onOpenMeasurement={openModal} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      
      <MeasurementModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 flex space-x-2 z-40">
        <a href={`tel:${CONTACTS.phoneClean}`} className="flex-1 bg-slate-900 text-white font-bold py-3 rounded-xl text-center text-sm shadow-lg">
          Позвонить
        </a>
        <a 
          href={CONTACTS.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl text-sm shadow-lg text-center"
        >
          Замер (TG)
        </a>
      </div>
    </div>
  );
};

export default App;