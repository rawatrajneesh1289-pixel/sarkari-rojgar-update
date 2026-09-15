import React, { useState } from 'react';
import { Search, Sparkles, TrendingUp } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export const HeroSearch: React.FC = () => {
  const { navigate } = useRouter();
  const [query, setQuery] = useState('');

  const popularTags = [
    'SSC',
    'UPSC',
    'Railway',
    'Bank',
    'Police',
    'MPPSC',
    'ESB',
    'Teacher',
    'Defence',
    '10th Pass',
    '12th Pass',
    'Graduate',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleTagClick = (tag: string) => {
    navigate(`/search?q=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white py-8 sm:py-12 px-4 relative overflow-hidden">
      {/* Subtle background ornamentation */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/50 text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Sarkari Rozgar Update • प्रमाणित रोजगार सूचना</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight mb-3">
          सरकारी नौकरी और परीक्षा की जानकारी खोजें
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-6">
          भर्तियां, एडमिट कार्ड, परीक्षा परिणाम, आंसर की, सरकारी योजनाएं एवं छात्रवृत्ति की त्वरित और सटीक जानकारी
        </p>

        {/* Big Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-5">
          <div className="relative flex items-center bg-white rounded-xl sm:rounded-2xl p-1.5 shadow-xl border-2 border-amber-500/80 focus-within:border-amber-400">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="जैसे SSC, UPSC, Railway, Police, MPPSC..."
              className="w-full px-3 py-2.5 sm:py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base outline-hidden bg-transparent"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold tracking-wide transition shrink-0 shadow-xs"
            >
              खोजें (Search)
            </button>
          </div>
        </form>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto">
          <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
            <span>लोकप्रिय खोज:</span>
          </span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-2.5 py-1 bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-medium rounded-md transition border border-white/10"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
