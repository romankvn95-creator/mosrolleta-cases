import React from 'react';
import { CATEGORIES, MOCK_CASES, CONTACTS, FAQ_SECTIONS } from '../constants.tsx';
import TrustReviews from '../components/TrustReviews.tsx';

interface HomeProps {
  onNavigate: (path: string) => void;
  onOpenMeasurement: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onOpenMeasurement }) => {
  return (
    <div>
      <section className="bg-white border-b border-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
              Москва, МО, Санкт-Петербург, ЛО, Краснодар
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
              Кейсы МОСРОЛЛЕТА: <span className="text-blue-600">рольставни, ворота, жалюзи и рулонные шторы</span> в Москве, СПб и Краснодаре
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Более 200+ примеров работ с ценами, фото и видео. Посмотрите реальные отзывы, фото и видео до/после. 
              <br /><br />
              Рассчитайте стоимость за 5 минут. Профессиональный монтаж под ключ с гарантией от производителя. Заходите за вдохновением!
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200"
              >
                Вызвать инженера
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tight">Направления работ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.slug}
                onClick={() => onNavigate(`/${cat.slug}`)}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">{cat.title}</h3>
                <p className="text-slate-500 text-sm mb-6">{cat.description}</p>
                <span className="text-blue-600 font-bold text-sm">Смотреть кейсы →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-12">Последние объекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_CASES.map(item => (
              <div 
                key={item.id}
                onClick={() => onNavigate(`/${item.category}/${item.slug}`)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.mainImage} alt={item.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="text-blue-600 font-bold text-xs uppercase mb-2">{item.location}</div>
                  <h3 className="text-xl font-black mb-4 group-hover:text-blue-600">{item.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2">{item.task}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <TrustReviews />

      {/* FAQ SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-tight">Ответы на вопросы</h2>
            
            <div className="space-y-12">
              {FAQ_SECTIONS.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h3 className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center">
                    <span className="w-8 h-[2px] bg-blue-600 mr-4"></span>
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, iIdx) => (
                      <details 
                        key={iIdx} 
                        className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
                      >
                        <summary className="p-6 cursor-pointer font-bold text-slate-800 list-none flex justify-between items-center group-open:bg-slate-50 transition-colors">
                          <span className="pr-4">{item.question}</span>
                          <svg 
                            className="w-5 h-5 text-slate-400 transform group-open:rotate-180 transition-transform duration-300 shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </summary>
                        <div className="p-6 text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-10 bg-blue-600 rounded-[2.5rem] text-white text-center shadow-2xl shadow-blue-200">
              <h3 className="text-2xl font-black mb-4">Остались вопросы?</h3>
              <p className="text-blue-100 mb-8 max-w-md mx-auto">Напишите нашему инженеру в Telegram — мы ответим в течение 10 минут и проконсультируем по вашему объекту.</p>
              <a 
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-slate-100 transition shadow-xl"
              >
                Задать вопрос в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;