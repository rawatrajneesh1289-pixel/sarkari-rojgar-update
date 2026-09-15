import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, FileText, Sparkles, Filter } from 'lucide-react';
import { db } from '../services/db';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { EmptyState } from '../components/common/EmptyState';
import { Sidebar } from '../components/layout/Sidebar';
import { useRouter } from '../context/RouterContext';

export const SearchPage: React.FC = () => {
  const { searchParams, navigate } = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [selectedType, setSelectedType] = useState('ALL');

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const results = query.trim() ? db.searchAll(query) : [];

  const filteredResults = results.filter((item) => {
    if (selectedType === 'ALL') return true;
    return item.type.toLowerCase() === selectedType.toLowerCase();
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const getTypeBadge = (_type: string) => {
    return 'bg-blue-50 text-blue-800 border-blue-200';
  };

  return (
    <>
      <SeoHead
        title={`सर्च परिणाम: ${query || 'सरकारी नौकरी व परीक्षा खोजें'} | Sarkari Rozgar Update`}
        description="सरकारी भर्ती, परीक्षा परिणाम, एडमिट कार्ड, आंसर की और योजनाओं के लिए ग्लोबल सर्च।"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Global Search' }]} />

        {/* Big Search Input */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs my-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2 flex items-center gap-2">
            <Search className="w-6 h-6 text-blue-600" />
            <span>स्मार्ट खोज (Search Portal)</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mb-5">
            नौकरी, परीक्षा, एडमिट कार्ड, रिजल्ट, उत्तर कुंजी अथवा योजनाओं का नाम लिखें
          </p>

          <form onSubmit={handleSearchSubmit}>
            <div className="relative flex items-center bg-slate-50 border border-slate-300 rounded-xl p-1.5 focus-within:border-blue-600 focus-within:bg-white transition">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="जैसे SSC CGL, Railway, Police, MPPSC, 10th Pass..."
                className="w-full px-3 py-2.5 text-sm sm:text-base text-slate-900 bg-transparent outline-hidden"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition shrink-0 shadow-xs"
              >
                खोजें
              </button>
            </div>
          </form>

          {/* Type Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-4 no-scrollbar">
            {[
              { label: 'सभी (All)', value: 'ALL' },
              { label: 'नौकरियां (Jobs)', value: 'Job' },
              { label: 'एडमिट कार्ड (Admit Card)', value: 'Admit Card' },
              { label: 'रिजल्ट (Results)', value: 'Result' },
              { label: 'उत्तर कुंजी (Answer Key)', value: 'Answer Key' },
              { label: 'योजनाएं (Yojana)', value: 'Sarkari Yojana' },
              { label: 'छात्रवृत्ति (Scholarship)', value: 'Scholarship' },
            ].map((t) => (
              <button
                key={t.value}
                onClick={() => setSelectedType(t.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  selectedType === t.value
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results list */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {query.trim() && (
              <p className="text-xs font-medium text-slate-600">
                "{query}" के लिए कुल <strong>{filteredResults.length}</strong> परिणाम मिले
              </p>
            )}

            {filteredResults.length === 0 ? (
              <EmptyState
                title="कोई परिणाम नहीं मिला"
                message={
                  query
                    ? `"${query}" के लिए कोई सूचना नहीं मिली। कृपया कोई अन्य शब्द या वर्तनी (Spelling) बदलकर पुनः खोजें।`
                    : 'कृपया खोज बॉक्स में परीक्षा या नौकरी का नाम लिखकर सर्च करें।'
                }
                showHomeBtn={false}
              />
            ) : (
              <div className="space-y-3">
                {filteredResults.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => navigate(item.url)}
                    className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getTypeBadge(
                            item.type
                          )}`}
                        >
                          {item.type}
                        </span>
                        {item.organization && (
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                            {item.organization}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700 transition">
                        {item.title}
                      </h3>
                      {item.snippet && (
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {item.snippet}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 flex sm:justify-end">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-800">
                        <span>देखें</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
