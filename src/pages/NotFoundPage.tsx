import React from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { SeoHead } from '../components/common/SeoHead';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      <SeoHead
        title="404 पृष्ठ नहीं मिला | Sarkari Rozgar Update"
        description="क्षमा करें, आपके द्वारा खोजा गया पृष्ठ उपलब्ध नहीं है।"
      />

      <div className="max-w-2xl mx-auto px-4 py-16 text-center my-8 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xs">
        <span className="text-5xl sm:text-7xl font-black text-amber-500 block mb-2">404</span>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
          यह पृष्ठ उपलब्ध नहीं है (Page Not Found)
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
          शायद यह जानकारी स्थानांतरित कर दी गई है या लिंक में कोई वर्तनी त्रुटि है। आप होमपेज पर जा सकते हैं अथवा ऊपर दिए गए सर्च बॉक्स का उपयोग कर सकते हैं।
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>होमपेज पर जाएं</span>
          </button>

          <button
            onClick={() => navigate('/jobs')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-semibold transition"
          >
            <span>सरकारी नौकरियां देखें</span>
          </button>
        </div>
      </div>
    </>
  );
};
