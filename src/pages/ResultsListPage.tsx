import React, { useState } from 'react';
import { Award, Search, CheckCircle, ArrowUpDown } from 'lucide-react';
import { db } from '../services/db';
import { ResultCard } from '../components/cards/ResultCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';

type FilterCategory = 'ALL' | 'RAILWAY' | 'UPSC' | 'SSC' | 'NTA' | 'STATE' | 'BANKING_OTHER';

export const ResultsListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
  const allResults = db.getResults();

  const filterTabs: { key: FilterCategory; label: string; count?: number }[] = [
    { key: 'ALL', label: 'सभी (All)', count: allResults.length },
    {
      key: 'RAILWAY',
      label: 'रेलवे (RRB)',
      count: allResults.filter((r) => r.organization.toLowerCase().includes('railway') || r.examName.toLowerCase().includes('rrb')).length,
    },
    {
      key: 'UPSC',
      label: 'यूपीएससी (UPSC)',
      count: allResults.filter((r) => r.organization.toLowerCase().includes('upsc')).length,
    },
    {
      key: 'SSC',
      label: 'एसएससी (SSC)',
      count: allResults.filter((r) => r.organization.toLowerCase().includes('ssc') || r.examName.toLowerCase().includes('ssc')).length,
    },
    {
      key: 'NTA',
      label: 'एनटीए (NTA)',
      count: allResults.filter((r) => r.organization.toLowerCase().includes('nta') || r.examName.toLowerCase().includes('nta')).length,
    },
    {
      key: 'STATE',
      label: 'राज्य / बोर्ड (State / BTSC / SCVTUP)',
      count: allResults.filter((r) =>
        r.organization.toLowerCase().includes('btsc') ||
        r.organization.toLowerCase().includes('scvtup') ||
        r.organization.toLowerCase().includes('jammu') ||
        r.organization.toLowerCase().includes('bihar') ||
        r.organization.toLowerCase().includes('uttar pradesh')
      ).length,
    },
    {
      key: 'BANKING_OTHER',
      label: 'बैंकिंग व अन्य (RBI / EMRS / NCERT)',
      count: allResults.filter((r) =>
        r.organization.toLowerCase().includes('rbi') ||
        r.organization.toLowerCase().includes('emrs') ||
        r.organization.toLowerCase().includes('ncert')
      ).length,
    },
  ];

  const filtered = allResults.filter((r) => {
    // Category match
    if (activeCategory === 'RAILWAY') {
      const match = r.organization.toLowerCase().includes('railway') || r.examName.toLowerCase().includes('rrb');
      if (!match) return false;
    } else if (activeCategory === 'UPSC') {
      const match = r.organization.toLowerCase().includes('upsc');
      if (!match) return false;
    } else if (activeCategory === 'SSC') {
      const match = r.organization.toLowerCase().includes('ssc') || r.examName.toLowerCase().includes('ssc');
      if (!match) return false;
    } else if (activeCategory === 'NTA') {
      const match = r.organization.toLowerCase().includes('nta') || r.examName.toLowerCase().includes('nta');
      if (!match) return false;
    } else if (activeCategory === 'STATE') {
      const match =
        r.organization.toLowerCase().includes('btsc') ||
        r.organization.toLowerCase().includes('scvtup') ||
        r.organization.toLowerCase().includes('jammu') ||
        r.organization.toLowerCase().includes('bihar') ||
        r.organization.toLowerCase().includes('uttar pradesh');
      if (!match) return false;
    } else if (activeCategory === 'BANKING_OTHER') {
      const match =
        r.organization.toLowerCase().includes('rbi') ||
        r.organization.toLowerCase().includes('emrs') ||
        r.organization.toLowerCase().includes('ncert');
      if (!match) return false;
    }

    // Search query match
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      r.examName.toLowerCase().includes(q) ||
      r.examNameHi.toLowerCase().includes(q) ||
      r.organization.toLowerCase().includes(q) ||
      (r.postName && r.postName.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <SeoHead
        title="सरकारी रिजल्ट 2026 | Sarkari Result, Cut Off Marks, Merit List"
        description="सभी सरकारी प्रतियोगी परीक्षाओं के रिजल्ट, मेरिट लिस्ट और कट-ऑफ मार्क्स की जांच करें। RRB Group D, EMRS, UPSC CMS, NCERT, Jammu Univ, NTA ICAR, CSIR NET, BTSC, UP SCVTUP ITI, CAPF AC, SSC Steno, RBI Grade B।"
        canonicalUrl="https://sarkarirozgarupdate.com/results"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Results (परीक्षा परिणाम)' }]} />

        <div className="my-4 pb-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <Award className="w-7 h-7 text-blue-600" />
              <span>परीक्षा परिणाम / रिजल्ट (Latest Exam Results 2026)</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              घोषित परीक्षा परिणाम, कट-ऑफ मार्क्स, स्कोरकार्ड एवं चयन सूची (कुल {allResults.length} परिणाम उपलब्ध)
            </p>
          </div>

          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="परीक्षा, बोर्ड या पद नाम खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs outline-hidden focus:border-blue-600 shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                activeCategory === tab.key
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    activeCategory === tab.key ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-600 px-1">
              <span className="font-semibold text-slate-800">
                दिखाए जा रहे परिणाम: {filtered.length} / {allResults.length}
              </span>
              <span className="flex items-center gap-1 text-blue-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>नवीनतम सत्यापित अपडेट</span>
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
                <Award className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="text-base font-bold text-slate-800 mb-1">कोई परिणाम नहीं मिला</h3>
                <p className="text-xs text-slate-500 mb-4">
                  अपनी खोज बदलें या दूसरा फ़िल्टर चुनें।
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('ALL');
                  }}
                  className="px-4 py-2 bg-blue-700 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition"
                >
                  सभी रिजल्ट्स रीसेट करें
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map((result) => (
                  <ResultCard key={result.id} result={result} />
                ))}
              </div>
            )}

            <AdPlaceholder type="In-Content Ad" />
          </div>

          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
