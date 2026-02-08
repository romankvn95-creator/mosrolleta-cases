import React, { useState } from 'react';
import { CATEGORIES } from '../constants.tsx';

interface MeasurementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

const MeasurementModal: React.FC<MeasurementModalProps> = ({ isOpen, onClose, initialCategory }) => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setPhone('');
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm transition-all">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {!submitted ? (
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-black text-slate-900 mb-2">Вызвать замерщика</h3>
            <p className="text-slate-500 mb-8">Инженер приедет с образцами материалов и сделает точный расчет стоимости.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Что вас интересует?</label>
                <select 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 font-bold text-slate-700 outline-none"
                  defaultValue={initialCategory}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat.slug} value={cat.slug}>{cat.title}</option>
                  ))}
                  <option value="other">Комплексный замер</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Телефон для связи</label>
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__" 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 font-bold outline-none focus:border-blue-500" 
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-100">
                Отправить заявку
              </button>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center py-20">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Заявка принята!</h3>
            <p className="text-slate-500">Мы свяжемся с вами в течение 15 минут.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeasurementModal;