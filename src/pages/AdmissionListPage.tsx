import React, { useState, useMemo } from 'react';
import { School, Calendar, GraduationCap, ExternalLink, Search, Filter, ArrowRight, UserCheck, CreditCard } from 'lucide-react';
import { db } from '../services/db';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { useRouter } from '../context/RouterContext';

export const AdmissionListPage: React.FC = () => {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<string>('All');
  const admissions = db.getAdmissions();

  const filteredAdmissions = useMemo(() => {
    return admissions.filter((adm) => {
      // Level filter
      if (levelFilter !== 'All' && adm.level !== levelFilter) {
        return false;
      }
      // Search filter
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        adm.courseOrExam.toLowerCase().includes(q) ||
        (adm.courseOrExamHi && adm.courseOrExamHi.toLowerCase().includes(q)) ||
        adm.institution.toLowerCase().includes(q) ||
        adm.eligibility.toLowerCase().includes(q)
      );
    });
  }, [admissions, levelFilter, searchQuery]);

  return (
    <>
      <SeoHead
        title="प्रवेश सूचना 2026-27 | Active Admission & Entrance Exam Online Form"
        description="सक्रिय राष्ट्रीय एवं राज्य स्तरीय प्रवेश परीक्षाएं (Active Admissions 2026-27): Bihar BLET 2026, NVS Class 9th & 11th Date Extended 2027-28, AIBE 22 (XXII), IIT GATE 2027, CLAT 2026 एवं IIT JAM 2027 ऑनलाइन आवेदन फॉर्म।"
        canonicalUrl="https://sarkari-rozgar-update.netlify.app/admission"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Admissions (प्रवेश परीक्षा व काउंसलिंग)' }]} />

        <div className="my-4 pb-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <School className="w-6 h-6 text-blue-600" />
              <span>कॉलेज व विश्वविद्यालय प्रवेश (Admission Updates 2026)</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              संयुक्त प्रवेश परीक्षाएं, कॉलेज मेरिट लिस्ट, काउंसलिंग एवं ऑनलाइन रजिस्ट्रेशन फॉर्म (कुल {admissions.length} अपडेट्स)
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="कोर्स, परीक्षा या संस्थान खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-white p-3 rounded-xl border border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
            <span className="text-xs font-semibold text-slate-700">श्रेणी:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { key: 'All', label: `सभी (${admissions.length})` },
                { key: 'Entrance Exam', label: 'प्रवेश परीक्षा (Entrance)' },
                { key: 'University', label: 'विश्वविद्यालय (University)' },
                { key: 'Counselling', label: 'काउंसलिंग (Counselling)' },
                { key: 'School', label: 'विद्यालय (School)' },
                { key: 'College', label: 'कॉलेज (College)' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setLevelFilter(tab.key)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                    levelFilter === tab.key
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
            प्रदर्शित: <span className="font-bold text-slate-800">{filteredAdmissions.length}</span> प्रवेश सूचनाएं
          </span>
        </div>

        <DisclaimerAlert isDemo={false} compact />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          <div className="lg:col-span-2 space-y-4">
            {filteredAdmissions.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
                <School className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">कोई प्रवेश सूचना नहीं मिली</h3>
                <p className="text-xs text-slate-500 mb-4">
                  आपके खोजे गए शब्द &quot;{searchQuery}&quot; के अनुसार कोई परिणाम नहीं मिला। कृपया दूसरा शब्द खोजें।
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setLevelFilter('All');
                  }}
                  className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  सभी फिल्टर हटाएं
                </button>
              </div>
            ) : (
              filteredAdmissions.map((adm) => (
                <div
                  key={adm.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition space-y-3.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                      <span>{adm.institution}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {adm.level}
                      </span>
                      <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-100 px-2.5 py-0.5 rounded-md">
                        अंतिम तिथि: {adm.applicationLastDate}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2
                      onClick={() => navigate(`/admission/${adm.slug}`)}
                      className="font-extrabold text-base sm:text-lg text-slate-900 hover:text-blue-700 cursor-pointer transition leading-snug"
                    >
                      {adm.courseOrExam}
                    </h2>
                    {adm.courseOrExamHi && (
                      <p className="text-xs sm:text-sm text-blue-900 font-medium mt-0.5">
                        {adm.courseOrExamHi}
                      </p>
                    )}
                  </div>

                  {/* Summary Box */}
                  <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-slate-500 font-medium">पात्रता (Eligibility):</span>
                      <span className="font-semibold text-slate-800 text-left sm:text-right max-w-md">
                        {adm.eligibility}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-slate-200/60">
                      <div>
                        <span className="text-slate-500">आवेदन प्रारंभ: </span>
                        <span className="font-semibold text-slate-700">{adm.applicationStart}</span>
                      </div>
                      {adm.examDate && (
                        <div>
                          <span className="text-slate-500">परीक्षा / आवंटन: </span>
                          <span className="font-bold text-slate-900">{adm.examDate}</span>
                        </div>
                      )}
                      {adm.feeDetails && (
                        <div>
                          <span className="text-slate-500">आवेदन शुल्क: </span>
                          <span className="font-bold text-emerald-800">{adm.feeDetails.generalOBC.split('(')[0]}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
                    <span className="text-[11px] text-slate-400">
                      अद्यतन: {adm.updatedAt}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/admission/${adm.slug}`)}
                        className="inline-flex items-center gap-1 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition"
                      >
                        <span>विस्तृत विवरण देखें</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={adm.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition"
                      >
                        <span>Apply Online</span>
                        <ExternalLink className="w-3.5 h-3.5" />
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
