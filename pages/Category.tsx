
import React, { useState } from 'react';
import { CATEGORIES, MOCK_CASES } from '../constants';

interface CategoryProps {
  categorySlug: string;
  onNavigate: (path: string) => void;
  // Added onOpenMeasurement to CategoryProps to match usage in App.tsx
  onOpenMeasurement: () => void;
}

const Category: React.FC<CategoryProps> = ({ categorySlug, onNavigate, onOpenMeasurement }) => {
  const category = CATEGORIES.find(c => c.slug === categorySlug);
  const cases = MOCK_CASES.filter(c => c.category === categorySlug);
  const [filter, setFilter] = useState('all');

  const filteredCases = filter === 'all' 
    ? cases 
    : cases.filter(c => c.clientType === filter);

  if (!category) return <div className="p-20 text-center">Категория не найдена</div>;

  return (
    <div className="pb-20">
      {/* Header / Breadcrumbs */}
      <div className="bg-white border-b border-slate-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <nav className="text-[10px] font-bold text-slate-400 mb-8 flex items-center space-x-2 uppercase tracking-widest">
            <button onClick={() => onNavigate('/')} className="hover:text-blue-600 transition">Главная</button>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900">Портфолио: {category.title}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
            {category.h1Title || `${category.title}: примеры работ в Москве и МО`}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-4xl leading-relaxed font-medium">
            Смотрите реальные фото и описания процессов установки {category.title.toLowerCase()} от компании МОСРОЛЛЕТА. Мы собрали более 100 объектов, чтобы вы могли убедиться в нашей экспертизе.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Advanced Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Все объекты' },
              { id: 'private', label: 'Частные дома' },
              { id: 'commercial', label: 'Бизнес / ТЦ' }
            ].map((f) => (
              <button 
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${filter === f.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-300'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Найдено объектов: {filteredCases.length}
          </div>
        </div>

        {/* Case Listing Grid */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredCases.map(item => (
              <div 
                key={item.id}
                onClick={() => onNavigate(`/${item.category}/${item.slug}`)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.mainImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className="bg-white/90 backdrop-blur text-slate-900 text-[9px] font-black px-3 py-1.5 rounded-full shadow-sm uppercase tracking-tighter">
                      {item.results.timeline}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-3">Объект в {item.location.split(',').pop()}</div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition leading-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow">
                    {item.task}
                  </p>
                  <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Подробнее</span>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-200 mb-24">
            <div className="text-6xl mb-6">📂</div>
            <h3 className="text-2xl font-black mb-4">Раздел наполняется</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-8">Мы скоро опубликуем новые кейсы в этой категории. А пока вы можете посмотреть другие разделы или оставить заявку на расчет.</p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => onNavigate('/')} className="bg-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg">
                На главную
              </button>
              <button onClick={onOpenMeasurement} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-200">
                Оставить заявку
              </button>
            </div>
          </div>
        )}

        {/* SEO / Expert Text Block */}
        <div className="bg-white p-12 md:p-20 rounded-[3rem] border border-slate-200 shadow-sm mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </div>
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-10 tracking-tight leading-none text-slate-900">
              Профессиональный подход к {category.title.toLowerCase()}
            </h2>
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-loose">
              <p className="font-bold text-slate-900 mb-6">{category.seoText}</p>
              <p>
                Многие клиенты в Москве и Московской области совершают одну и ту же ошибку — выбирают по самой низкой цене, забывая о стоимости владения. В МОСРОЛЛЕТА мы используем только качественные комплектующие, которые не "клинят" при первом морозе и не выцветают на солнце. 
              </p>
              <h3 className="text-2xl font-black text-slate-900 mt-12 mb-6">Почему нам доверяют в столичном регионе:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-none p-0">
                <li className="flex items-start">
                  <span className="text-blue-600 font-black mr-3 text-xl">✓</span>
                  <span><strong>Свой склад запчастей</strong> — ремонт и сервис в день обращения.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-black mr-3 text-xl">✓</span>
                  <span><strong>Инженеры-славяне</strong> с опытом работы от 7 лет.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-black mr-3 text-xl">✓</span>
                  <span><strong>Прозрачная смета</strong> — цена не растет в процессе монтажа.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-black mr-3 text-xl">✓</span>
                  <span><strong>Прямые цены</strong> от заводов Alutech и DoorHan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Category FAQ */}
        {category.faq && (
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-black text-center mb-12">Вопросы и ответы по {category.title.toLowerCase()}</h2>
            <div className="space-y-4">
              {category.faq.map((item, idx) => (
                <details key={idx} className="group bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all duration-300">
                  <summary className="p-8 cursor-pointer font-bold text-lg list-none flex justify-between items-center group-open:bg-slate-50">
                    {item.question}
                    <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </summary>
                  <div className="p-8 text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
