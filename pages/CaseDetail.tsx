
import React from 'react';
import { MOCK_CASES, CATEGORIES, CONTACTS } from '../constants.tsx';
import TrustReviews from '../components/TrustReviews.tsx';

interface CaseDetailProps {
  caseSlug: string;
  onNavigate: (path: string) => void;
  onOpenMeasurement: () => void;
}

const CaseDetail: React.FC<CaseDetailProps> = ({ caseSlug, onNavigate, onOpenMeasurement }) => {
  const item = MOCK_CASES.find(c => c.slug === caseSlug);
  const category = CATEGORIES.find(c => c.slug === item?.category);

  if (!item) return <div className="p-20 text-center">Кейс не найден</div>;

  return (
    <div className="pb-20">
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="text-xs text-slate-500 mb-8 flex space-x-2">
            <button onClick={() => onNavigate('/')} className="hover:text-white">Главная</button>
            <span>/</span>
            <button onClick={() => onNavigate(`/${item.category}`)} className="hover:text-white">{category?.title}</button>
            <span>/</span>
            <span className="text-slate-300">{item.title}</span>
          </nav>
          <div className="max-w-4xl">
            <span className="bg-blue-600 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest mb-6 inline-block">Завершенный объект</span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
              Кейс: {item.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border-l border-slate-700 pl-4">
                <div className="text-slate-500 text-xs mb-1 uppercase font-bold tracking-tighter">Срок</div>
                <div className="font-bold text-lg">{item.results.timeline}</div>
              </div>
              <div className="border-l border-slate-700 pl-4">
                <div className="text-slate-500 text-xs mb-1 uppercase font-bold tracking-tighter">Тип объекта</div>
                <div className="font-bold text-lg">{item.clientType === 'private' ? 'Частный' : 'Коммерческий'}</div>
              </div>
              <div className="border-l border-slate-700 pl-4">
                <div className="text-slate-500 text-xs mb-1 uppercase font-bold tracking-tighter">Локация</div>
                <div className="font-bold text-lg">{item.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Image Banner */}
      <div className="container mx-auto px-4 -mt-10 mb-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/8] bg-slate-200">
           <img src={item.mainImage} alt={item.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-16">
            
            <section id="task">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center uppercase tracking-tight">
                <span className="bg-blue-600 w-2 h-8 mr-4 inline-block"></span>
                Задача клиента
              </h2>
              <div className="prose prose-lg text-slate-700 max-w-none">
                <p className="leading-relaxed">
                  {item.task}
                </p>
              </div>
            </section>

            <section id="problem" className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center uppercase tracking-tight">
                <span className="bg-red-500 w-2 h-8 mr-4 inline-block"></span>
                Проблема ДО установки
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                {item.problem}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.gallery.map((img, i) => (
                  <div key={i} className="group relative rounded-2xl overflow-hidden aspect-video bg-slate-100 border border-slate-200">
                    <img src={img} alt={`Состояние до монтажа ${i}`} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded backdrop-blur">Фото объекта</div>
                  </div>
                ))}
              </div>
            </section>

            <section id="solution">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center uppercase tracking-tight">
                <span className="bg-green-500 w-2 h-8 mr-4 inline-block"></span>
                Реализованное решение
              </h2>
              <p className="text-slate-700 leading-loose text-lg mb-8">
                {item.solution}
              </p>
              
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Технические характеристики:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.materials.map((m, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <svg className="w-5 h-5 mr-3 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span className="font-medium">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="result" className="border-t border-slate-200 pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                   <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Финальный результат</h2>
                   <p className="text-slate-600 mb-6">{item.results.effect}</p>
                   <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm">
                     Гарантия на объект: 3 года
                   </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm italic text-slate-500 text-sm">
                  "Мы гарантируем, что каждый элемент системы отлажен и готов к многолетней работе. Каждый объект, будь он в Москве, Санкт-Петербурге, Екатеринбурге или Краснодаре — это пример того, как мы работаем: качественно и в срок."
                  <div className="mt-4 font-bold text-slate-900 not-italic">— Команда МОСРОЛЛЕТА</div>
                </div>
              </div>
            </section>

            {item.clientFeedback && (
              <section className="bg-blue-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-blue-200">
                <div className="flex items-center mb-8">
                  <div className="flex text-yellow-300 mr-4">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
                  </div>
                  <span className="bg-blue-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Отзыв подтвержден</span>
                </div>
                <blockquote className="text-xl md:text-3xl font-medium italic mb-10 leading-snug">
                  «{item.clientFeedback.text}»
                </blockquote>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-blue-500 mr-4 flex items-center justify-center text-xl font-black shadow-inner">
                    {item.clientFeedback.author[0]}
                  </div>
                  <div>
                    <div className="font-extrabold text-lg">{item.clientFeedback.author}</div>
                    <div className="text-blue-200 text-sm uppercase font-bold tracking-widest">{item.clientType === 'private' ? 'Частное лицо' : 'Представитель бизнеса'}</div>
                  </div>
                </div>
              </section>
            )}

            {/* TRUST REVIEWS Integration on Case Page */}
            <div className="pt-10 border-t border-slate-100">
              <TrustReviews />
            </div>

            {/* SEO Block */}
            <section className="bg-slate-100 p-8 rounded-3xl text-sm text-slate-500 leading-relaxed border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4 uppercase text-[10px] tracking-widest">SEO Справка:</h4>
              <p>
                Данный кейс по направлению "{category?.title}" реализован в одном из регионов присутствия МОСРОЛЛЕТА. 
                Мы осуществляем профессиональный монтаж ворот и рольставен в Москве, Санкт-Петербурге, Екатеринбурге и Краснодаре. 
                Используем только сертифицированные комплектующие Alutech и DoorHan, адаптированные под климат конкретного региона — от уральских морозов до южного солнца. 
                Если вам требуется расчет стоимости — напишите нам в Telegram, и мы подготовим смету для вашего города в течение 15 минут.
              </p>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-2xl relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 leading-tight">Хотите такой же результат?</h3>
                  <p className="text-slate-500 text-sm mb-8">Работаем в Москве, СПб, Екб и Краснодаре. Замер и расчет сметы — 0 ₽.</p>
                  
                  <button 
                    onClick={onOpenMeasurement}
                    className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-200 active:scale-95 flex items-center justify-center space-x-3"
                  >
                    <span>Записаться в Telegram</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                  
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <div className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Напишите инженеру напрямую</div>
                    <div className="flex justify-center space-x-4">
                      <button 
                        onClick={() => window.open(CONTACTS.telegramUrl, '_blank')}
                        className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-bold text-xs hover:bg-blue-600 transition flex items-center justify-center"
                      >
                        Telegram
                      </button>
                      <a 
                        href={`tel:${CONTACTS.phoneClean}`}
                        className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold text-xs hover:bg-slate-200 transition flex items-center justify-center"
                      >
                        Позвонить
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
