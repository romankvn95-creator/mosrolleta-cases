
import React from 'react';
import { PLATFORM_REVIEWS, CONTACTS } from '../constants';

const TrustReviews: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">Репутация, подтвержденная отзывами</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Мы дорожим своим рейтингом 4.9 на Яндекс.Картах и 5.0 на Авито. Читайте живые отзывы наших клиентов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORM_REVIEWS.map((review) => (
            <div 
              key={review.id}
              className={`relative bg-white p-8 rounded-[2rem] border-2 transition-all duration-300 hover:shadow-2xl ${
                review.platform === 'yandex' ? 'border-red-50 hover:border-red-100' : 'border-blue-50 hover:border-blue-100'
              }`}
            >
              {/* Platform Badge */}
              <div className="absolute top-6 right-6">
                {review.platform === 'yandex' ? (
                  <div className="flex items-center space-x-1">
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-tighter">Яндекс</span>
                    <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-[10px] font-black">Я</div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-tighter">Авито</span>
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-black">А</div>
                  </div>
                )}
              </div>

              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg ${
                  review.platform === 'yandex' ? 'bg-red-500 shadow-lg shadow-red-100' : 'bg-blue-500 shadow-lg shadow-blue-100'
                }`}>
                  {review.avatarLetter}
                </div>
                <div className="ml-4">
                  <div className="font-black text-slate-900 leading-tight">{review.author}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{review.date}</div>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-4 text-sm">
                {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed italic">
                «{review.text}»
              </p>

              <div className="mt-6 pt-6 border-t border-slate-50 flex items-center">
                <div className="flex items-center text-[10px] font-black text-green-600 uppercase tracking-widest">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Заказ подтвержден
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={CONTACTS.yandexMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-slate-50 px-6 py-3 rounded-xl border border-slate-200 hover:bg-white hover:border-red-400 transition-all group"
          >
            <span className="text-xs font-black text-slate-600 group-hover:text-red-600 transition-colors uppercase tracking-widest">Все отзывы на Яндекс</span>
            <div className="text-red-600 font-black">4.9 ★</div>
          </a>
          <a 
            href={CONTACTS.avitoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-slate-50 px-6 py-3 rounded-xl border border-slate-200 hover:bg-white hover:border-blue-400 transition-all group"
          >
            <span className="text-xs font-black text-slate-600 group-hover:text-blue-500 transition-colors uppercase tracking-widest">Профиль на Авито</span>
            <div className="text-blue-500 font-black">5.0 ★</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustReviews;
