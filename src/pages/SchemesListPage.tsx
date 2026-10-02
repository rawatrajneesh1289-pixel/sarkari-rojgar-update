import React, { useState } from 'react';
import { Compass, Search, CheckCircle, Sparkles, Building2, ExternalLink } from 'lucide-react';
import { db } from '../services/db';
import { SchemeCard } from '../components/cards/SchemeCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';

type SectorFilter = 'ALL' | 'AGRI' | 'HEALTH' | 'HOUSING' | 'WOMEN' | 'EMPLOYMENT' | 'STATE';

export const SchemesListPage: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<SectorFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const allSchemes = db.getSchemes();

  const sectorTabs: { key: SectorFilter; label: string; count?: number }[] = [
    { key: 'ALL', label: 'सभी योजनाएं (All)', count: allSchemes.length },
    {
      key: 'AGRI',
      label: '🌾 कृषि व किसान (Agriculture)',
      count: allSchemes.filter((s) => s.sector?.includes('Agriculture') || s.category === 'Farmer').length,
    },
    {
      key: 'HEALTH',
      label: '🏥 स्वास्थ्य व सामाजिक सुरक्षा (Healthcare)',
      count: allSchemes.filter((s) => s.sector?.includes('Healthcare') || s.category === 'Healthcare' || s.category === 'Social Security').length,
    },
    {
      key: 'HOUSING',
      label: '🏠 आवास व दैनिक उपयोगिता (Housing & Power)',
      count: allSchemes.filter((s) => s.sector?.includes('Housing') || s.category === 'Housing').length,
    },
    {
      key: 'WOMEN',
      label: '👩👧 महिला व बाल विकास (Women & Child)',
      count: allSchemes.filter((s) => s.sector?.includes('Women') || s.category === 'Women' || s.category === 'Madhya Pradesh').length,
    },
    {
      key: 'EMPLOYMENT',
      label: '💼 रोजगार, व्यवसाय व ऋण (Employment & Loans)',
      count: allSchemes.filter((s) => s.sector?.includes('Employment') || s.category === 'Employment').length,
    },
  ];

  const filtered = allSchemes.filter((s) => {
    // Sector Filtering
    if (selectedSector === 'AGRI') {
      const match = s.sector?.includes('Agriculture') || s.category === 'Farmer';
      if (!match) return false;
    } else if (selectedSector === 'HEALTH') {
      const match = s.sector?.includes('Healthcare') || s.category === 'Healthcare' || s.category === 'Social Security';
      if (!match) return false;
    } else if (selectedSector === 'HOUSING') {
      const match = s.sector?.includes('Housing') || s.category === 'Housing';
      if (!match) return false;
    } else if (selectedSector === 'WOMEN') {
      const match = s.sector?.includes('Women') || s.category === 'Women' || s.category === 'Madhya Pradesh';
      if (!match) return false;
    } else if (selectedSector === 'EMPLOYMENT') {
      const match = s.sector?.includes('Employment') || s.category === 'Employment';
      if (!match) return false;
    }

    // Search Query
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      s.schemeName.toLowerCase().includes(q) ||
      s.schemeNameHi.toLowerCase().includes(q) ||
      s.objective.toLowerCase().includes(q) ||
      (s.tagline && s.tagline.toLowerCase().includes(q)) ||
      s.benefits.some((b) => b.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <SeoHead
        title="सरकारी योजनाएं 2026 | Sarkari Yojana, PM & State Schemes Portal"
        description="केन्द्र एवं राज्य सरकारों की प्रमुख कल्याणकारी योजनाएं। पीएम किसान, फसल बीमा, आयुष्मान भारत, पीएम आवास 2.0, पीएम सूर्य घर, उज्ज्वला 2.0, लखपति दीदी, सुकन्या समृद्धि, मुद्रा लोन, पीएम विश्वकर्मा एवं रोजगार प्रोत्साहन योजनाओं की सम्पूर्ण जानकारी।"
        canonicalUrl="https://sarkari-rozgar-update.netlify.app/sarkari-yojana"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Sarkari Yojana (सरकारी योजनाएं)' }]} />

        {/* Header Banner */}
        <div className="my-4 pb-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <Compass className="w-7 h-7 text-blue-600" />
              <span>सरकारी योजना पोर्टल (Latest Sarkari Yojana 2026)</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              कृषि, स्वास्थ्य, आवास, महिला सशक्तिकरण, पेंशन, व्यवसाय ऋण व रोजगार योजनाओं की संपूर्ण जानकारी (कुल {allSchemes.length} योजनाएं उपलब्ध)
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="योजना का नाम या लाभ खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs outline-hidden focus:border-blue-600 shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Sector Guide Highlights Card */}
        <div className="mb-5 bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  सभी प्रमुख योजनाएं एक ही मंच पर
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-100 max-w-2xl leading-relaxed">
                प्रत्येक योजना के अंतर्गत <strong>पात्रता मानदंड (Eligibility)</strong>, <strong>दस्तावेज चेकलिस्ट (Documents)</strong>, <strong>वित्तीय लाभ व सब्सिडी (Benefits)</strong>, <strong>आवेदन की स्टार्टिंग डेट व लास्ट डेट (No Last Date / Deadlines)</strong> तथा <strong>ऑनलाइन आवेदन (Apply Online)</strong> का सीधा आधिकारिक लिंक उपलब्ध है।
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap sm:flex-col items-start sm:items-end gap-2">
              <span className="inline-flex items-center gap-1 text-xs bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 text-blue-200 font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-blue-300" />
                <span>100% आधिकारिक पोर्टल लिंक्स</span>
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] bg-white/10 px-2.5 py-1 rounded-md text-blue-200 font-medium">
                ⏱️ लास्ट डेट व समय-सीमा स्पष्ट चिह्नित
              </span>
            </div>
          </div>
        </div>

        {/* Sector Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-5 scrollbar-none">
          {sectorTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedSector(tab.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                selectedSector === tab.key
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{tab.label}</span>
              {typeof tab.count === 'number' && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    selectedSector === tab.key ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-600'
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
                दिखाई जा रही योजनाएं: {filtered.length} / {allSchemes.length}
              </span>
              <span className="text-blue-700 font-semibold">
                नवीनतम वित्तीय वर्ष 2026-27 अद्यतन
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
                <Compass className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="text-base font-bold text-slate-800 mb-1">कोई योजना नहीं मिली</h3>
                <p className="text-xs text-slate-500 mb-4">
                  अपनी खोज बदलें या दूसरा सेक्टर फ़िल्टर चुनें।
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSector('ALL');
                  }}
                  className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg"
                >
                  सभी योजनाएं रीसेट करें
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map((scheme) => (
                  <SchemeCard key={scheme.id} scheme={scheme} />
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
