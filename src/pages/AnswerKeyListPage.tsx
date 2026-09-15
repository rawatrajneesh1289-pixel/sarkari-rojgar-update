import React, { useState, useMemo } from 'react';
import { KeyRound, Calendar, Download, ExternalLink, Search, Filter, ArrowRight, AlertCircle, Building2, CheckCircle2 } from 'lucide-react';
import { db } from '../services/db';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { useRouter } from '../context/RouterContext';

export const AnswerKeyListPage: React.FC = () => {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [orgFilter, setOrgFilter] = useState<string>('All');
  const allKeys = db.getAnswerKeys();

  const filtered = useMemo(() => {
    return allKeys.filter((k) => {
      // Organization filter
      if (orgFilter !== 'All') {
        if (orgFilter === 'NTA' && !k.organization.includes('National Testing Agency') && !k.organization.includes('NTA')) return false;
        if (orgFilter === 'UPSSSC' && !k.organization.includes('UPSSSC')) return false;
        if (orgFilter === 'SSC' && !k.organization.includes('Staff Selection Commission') && !k.organization.includes('SSC')) return false;
        if (orgFilter === 'DSSSB' && !k.organization.includes('DSSSB')) return false;
        if (orgFilter === 'State/Other' && (k.organization.includes('NTA') || k.organization.includes('UPSSSC') || k.organization.includes('SSC') || k.organization.includes('DSSSB'))) return false;
      }

      // Search query
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        k.examName.toLowerCase().includes(q) ||
        k.examNameHi.toLowerCase().includes(q) ||
        k.organization.toLowerCase().includes(q)
      );
    });
  }, [allKeys, orgFilter, searchQuery]);

  return (
    <>
      <SeoHead
        title="उत्तर कुंजी 2026 | Sarkari Exam Answer Key & Online Objection Link"
        description="सभी सरकारी प्रतियोगी परीक्षाओं की ऑफिशियल आंसर की, क्वेश्चन पेपर एवं ऑनलाइन आपत्ति दर्ज करने के लिंक। NTA AIAPGET, CSIR UGC NET, UPSSSC Lower PCS, SSC JE Paper 2, HTET OMR Sheet, DSSSB July उत्तर कुंजी पीडीएफ डाउनलोड करें।"
        canonicalUrl="https://sarkarirozgarupdate.com/answer-key"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Answer Keys (उत्तर कुंजी व आपत्ति लिंक)' }]} />

        <div className="my-4 pb-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <KeyRound className="w-6 h-6 text-blue-600" />
              <span>उत्तर कुंजी एवं आपत्ति दर्ज (Answer Keys & Objections 2026)</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              आधिकारिक उत्तर कुंजी (Answer Key PDF), ओएमआर रिस्पॉन्स शीट और ऑनलाइन चुनौती ट्रैकर (कुल {allKeys.length} अपडेट्स)
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="परीक्षा, बोर्ड या पद खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-white p-3 rounded-xl border border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
            <span className="text-xs font-semibold text-slate-700">विभाग / बोर्ड:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { key: 'All', label: `सभी (${allKeys.length})` },
                { key: 'NTA', label: 'NTA (5)' },
                { key: 'UPSSSC', label: 'UPSSSC (4)' },
                { key: 'SSC', label: 'SSC (1)' },
                { key: 'DSSSB', label: 'DSSSB (1)' },
                { key: 'State/Other', label: 'राज्य बोर्ड व अन्य (2)' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setOrgFilter(tab.key)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                    orgFilter === tab.key
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <span className="text-xs text-slate-500 font-medium">
            प्रदर्शित: <span className="font-bold text-slate-800">{filtered.length}</span> उत्तर कुंजियां
          </span>
        </div>

        <DisclaimerAlert isDemo={false} compact />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          <div className="lg:col-span-2 space-y-4">
            {filtered.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
                <KeyRound className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">कोई उत्तर कुंजी नहीं मिली</h3>
                <p className="text-xs text-slate-500 mb-4">
                  आपके खोजे गए शब्द &quot;{searchQuery}&quot; के अनुसार कोई परिणाम नहीं मिला। कृपया दूसरा शब्द खोजें।
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setOrgFilter('All');
                  }}
                  className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  सभी फिल्टर हटाएं
                </button>
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition space-y-3.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.organization}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        जारी: {item.releaseDate}
                      </span>
                      {item.status && (
                        <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h2
                      onClick={() => navigate(`/answer-key/${item.slug}`)}
                      className="font-extrabold text-base sm:text-lg text-slate-900 hover:text-blue-700 cursor-pointer transition leading-snug"
                    >
                      {item.examName}
                    </h2>
                    {item.examNameHi && (
                      <p className="text-xs sm:text-sm text-blue-900 font-semibold mt-0.5">
                        {item.examNameHi}
                      </p>
                    )}
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="text-slate-500">परीक्षा तिथि: </span>
                        <span className="font-semibold text-slate-800">{item.examDate}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">आपत्ति अंतिम तिथि: </span>
                        <span className="font-bold text-rose-700">{item.objectionLastDate || 'निस्तारित / लागू नहीं'}</span>
                      </div>
                      <div>
                        <span className="text-slate-500">प्रति प्रश्न शुल्क: </span>
                        <span className="font-semibold text-slate-900">{item.objectionFeePerQuestion || 'निःशुल्क'}</span>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-slate-600 text-[11px] line-clamp-2 pt-1 border-t border-slate-200/60 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
                    <span className="text-[11px] text-slate-400">
                      अद्यतन: {item.updatedAt}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/answer-key/${item.slug}`)}
                        className="inline-flex items-center gap-1 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition"
                      >
                        <span>विस्तृत विवरण देखें</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={item.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF / Key</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
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
