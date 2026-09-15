import React from 'react';
import { SearchX, ArrowLeft } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

interface EmptyStateProps {
  title?: string;
  message?: string;
  onReset?: () => void;
  showHomeBtn?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'कोई परिणाम नहीं मिला',
  message = 'इस श्रेणी में अभी कोई नई जानकारी उपलब्ध नहीं है अथवा आपके द्वारा खोजे गए शब्दों से कोई मेल नहीं मिला।',
  onReset,
  showHomeBtn = true,
}) => {
  const { navigate } = useRouter();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center my-6 shadow-xs max-w-xl mx-auto">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
        {message}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {onReset && (
          <button
            onClick={onReset}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium rounded-lg transition"
          >
            फ़िल्टर रीसेट करें (Reset Filters)
          </button>
        )}
        {showHomeBtn && (
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>होमपेज पर जाएं</span>
          </button>
        )}
      </div>
    </div>
  );
};
