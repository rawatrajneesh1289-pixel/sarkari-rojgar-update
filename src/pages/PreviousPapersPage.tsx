import React, { useState, useMemo } from 'react';
import {
  FileStack,
  Download,
  CheckCircle,
  Search,
  Filter,
  Calendar,
  Layers,
  FileText,
  ExternalLink,
  BookOpen,
  HelpCircle,
  Sparkles,
  Check,
  Building2,
  X,
} from 'lucide-react';
import { db } from '../services/db';
import { PreviousPaper } from '../types';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';

const CATEGORIES = [
  'All',
  'SSC',
  'Railway',
  'UPSC & State PSC',
  'Police & Defence',
  'Banking',
  'Teaching',
] as const;

const YEARS = ['All', '2025', '2024', '2023', '2022', '2021', '2020'] as const;

export const PreviousPapersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [filterType, setFilterType] = useState<'All' | 'Solved' | 'Unsolved'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalPaper, setActiveModalPaper] = useState<PreviousPaper | null>(null);

  const papers = useMemo(() => db.getPreviousPapers(), []);

  const filtered = useMemo(() => {
    return papers.filter((p) => {
      // Category filter
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }
      // Year filter
      if (selectedYear !== 'All' && p.year !== selectedYear) {
        return false;
      }
      // Solved filter
      if (filterType !== 'All' && p.solutionAvailable !== (filterType === 'Solved')) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return (
          p.examName.toLowerCase().includes(q) ||
          p.subject.toLowerCase().includes(q) ||
          p.organization.toLowerCase().includes(q) ||
          p.shiftOrTier.toLowerCase().includes(q) ||
          p.year.includes(q) ||
          (p.category && p.category.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [papers, selectedCategory, selectedYear, filterType, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedYear('All');
    setFilterType('All');
    setSearchQuery('');
  };

  return (
    <>
      <SeoHead
        title="पुराने प्रश्न पत्र हल सहित (2020-2025) | Previous Year Question Papers PDF Solved"
        description="SSC CGL, CHSL, GD, Railway NTPC, Group D, UPSC CSE, UP/MP Police, BPSC, CTET, UGC NET, Banking के 2020 से 2025 तक के सभी रियल प्रश्न पत्र एवं आधिकारिक उत्तर कुंजी PDF।"
        canonicalUrl="https://sarkari-rozgar-update.netlify.app/previous-papers"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Previous Papers (पुराने पेपर्स 2020-2025)' }]} />

        {/* Hero Header */}
        <div className="my-4 pb-4 border-b border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>2020 से 2025 तक के 100% प्रामाणिक प्रश्न पत्र (Real PYQs Library)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <FileStack className="w-7 h-7 text-blue-600 shrink-0" />
                <span>पुराने हल प्रश्न पत्र (Previous Year Question Papers PDF)</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-3xl leading-relaxed">
                SSC (CGL, CHSL, GD, MTS), Railway (NTPC, Group D, ALP), UPSC, UP/MP पुलिस, BPSC, Banking एवं CTET/TET परीक्षाओं के 2020-2025 तक के आधिकारिक प्रश्न पत्र, शिफ्ट-वाइज हल और फाइनल आंसर की का विशाल संग्रह।
              </p>
            </div>

            {/* Quick Stat Badges */}
            <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs bg-slate-900 text-white px-3 py-1.5 rounded-lg font-semibold shadow-xs">
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>{papers.length}+ वास्तविक पेपर्स उपलब्ध</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-1 rounded-md font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                <span>आधिकारिक फाइनल उत्तर कुंजी सहित</span>
              </span>
            </div>
          </div>
        </div>

        <DisclaimerAlert isDemo={false} compact />

        {/* Search & Filter Controls */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs mb-6 space-y-4">
          {/* Search bar & Type filter */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="परीक्षा का नाम, वर्ष, बोर्ड (उदा. SSC CGL, MP Police, CTET, 2024)..."
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Solved / Unsolved toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl shrink-0 self-start md:self-auto">
              {(['All', 'Solved', 'Unsolved'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    filterType === type
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {type === 'Solved'
                    ? 'हल सहित (Solved)'
                    : type === 'Unsolved'
                    ? 'मूल पेपर (Question Only)'
                    : 'सभी पेपर्स'}
                </button>
              ))}
            </div>
          </div>

          {/* Exam Category Badges */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                परीक्षा श्रेणी (Exam Category):
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat === 'All' ? 'सभी श्रेणियां (All)' : cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter Badges (2020 - 2025) */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1 mr-1">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>वर्ष चुनें (Year):</span>
              </span>
              {YEARS.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition ${
                    selectedYear === yr
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {yr === 'All' ? 'सभी वर्ष' : yr}
                </button>
              ))}
            </div>

            {(selectedCategory !== 'All' || selectedYear !== 'All' || filterType !== 'All' || searchQuery) && (
              <button
                onClick={clearFilters}
                className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline flex items-center gap-1"
              >
                <span>फ़िल्टर रीसेट करें (Clear All)</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Results Header */}
            <div className="flex items-center justify-between text-xs text-slate-600 px-1">
              <span>
                कुल <strong>{filtered.length}</strong> प्रश्न पत्र मिले{' '}
                {selectedCategory !== 'All' && `(श्रेणी: ${selectedCategory})`}{' '}
                {selectedYear !== 'All' && `(वर्ष: ${selectedYear})`}
              </span>
              <span className="text-slate-500">PDF & ऑफिशियल लिंक्स सक्रिय</span>
            </div>

            {/* Empty State */}
            {filtered.length === 0 ? (
              <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-10 text-center">
                <FileStack className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">
                  कोई प्रश्न पत्र नहीं मिला
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                  आपके द्वारा चुने गए फिल्टर अथवा खोज शब्द के अनुसार कोई पेपर उपलब्ध नहीं है। कृपया फिल्टर रीसेट करें।
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition"
                >
                  सभी पेपर्स देखें (Reset Filters)
                </button>
              </div>
            ) : (
              /* Papers Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filtered.map((paper) => (
                  <div
                    key={paper.id}
                    className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 hover:border-blue-400 hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-black text-blue-950 bg-blue-100 px-2.5 py-0.5 rounded-md border border-blue-200">
                            वर्ष {paper.year}
                          </span>
                          {paper.category && (
                            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                              {paper.category}
                            </span>
                          )}
                        </div>

                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                            paper.solutionAvailable
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                          <span>{paper.solutionAvailable ? 'हल सहित (Solved)' : 'Question Paper'}</span>
                        </span>
                      </div>

                      {/* Exam Title */}
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition leading-snug mb-1.5">
                        {paper.examName}
                      </h3>

                      {/* Organization & Shift */}
                      <div className="space-y-1 mb-3">
                        <p className="text-xs text-blue-900 font-semibold flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{paper.organization}</span>
                        </p>
                        <p className="text-[11px] text-slate-500 font-medium">
                          शिफ्ट / चरण: <span className="text-slate-700 font-semibold">{paper.shiftOrTier}</span>
                        </p>
                      </div>

                      {/* Subject summary */}
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 mb-3 leading-relaxed">
                        <strong className="text-slate-800 block text-[11px] mb-0.5">शामिल विषय / सेक्शन:</strong>
                        <p className="line-clamp-2">{paper.subject}</p>
                      </div>

                      {/* Metadata Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-4 text-[11px] text-slate-500">
                        {paper.language && (
                          <span className="bg-slate-100 px-2 py-0.5 rounded font-medium text-slate-700">
                            🌐 {paper.language}
                          </span>
                        )}
                        {paper.totalQuestions && (
                          <span className="bg-slate-100 px-2 py-0.5 rounded font-medium text-slate-700">
                            📝 {paper.totalQuestions}
                          </span>
                        )}
                        {paper.fileSize && (
                          <span className="bg-slate-100 px-2 py-0.5 rounded font-medium text-slate-700">
                            📦 {paper.fileSize}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom CTA Actions */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveModalPaper(paper)}
                        className="text-xs font-semibold text-slate-600 hover:text-blue-600 underline"
                      >
                        विवरण देखें
                      </button>

                      <a
                        href={paper.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs hover:shadow transition shrink-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Preparation Tips & FAQ Section */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 mt-8">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>पिछले वर्षों के प्रश्न पत्रों (PYQs) से तैयारी करने की सही रणनीति</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                  <h4 className="font-bold text-blue-950 mb-1">1. नवीनतम परीक्षा पैटर्न का ज्ञान</h4>
                  <p className="leading-relaxed">
                    2020 से 2025 के बीच SSC, Railway, BPSC एवं अन्य आयोगों ने अपने परीक्षा पैटर्न व निगेटिव मार्किंग में महत्वपूर्ण बदलाव किए हैं। नए पेपर्स हल करने से वास्तविक ट्रेंड स्पष्ट होता है।
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                  <h4 className="font-bold text-blue-950 mb-1">2. टाइम मैनेजमेंट और एक्यूरेसी</h4>
                  <p className="leading-relaxed">
                    प्रत्येक पेपर को निर्धारित समय (उदा. 60 मिनट अथवा 120 मिनट) का टाइमर लगाकर हल करें और आधिकारिक आंसर की से नेगेटिव मार्किंग काटकर अपना वास्तविक स्कोर जांचें।
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                  <h4 className="font-bold text-blue-950 mb-1">3. रिपीटेड टॉपिक्स की पहचान</h4>
                  <p className="leading-relaxed">
                    गणित, रीजनिंग, सामान्य ज्ञान और बाल विकास में 40% से 50% कोर कॉन्सेप्ट्स पिछले 5 वर्षों के पेपर्स से सीधे रिपीट होते हैं।
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                  <h4 className="font-bold text-blue-950 mb-1">4. मिस्टेक नोटबुक (Error Notebook)</h4>
                  <p className="leading-relaxed">
                    जो प्रश्न गलत हों, उन्हें अपनी डायरी में नोट करें और संबंधित विषय के नोट्स से रिविजन करके दोबारा उसी प्रश्न का अभ्यास करें।
                  </p>
                </div>
              </div>

              {/* FAQs */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-slate-500" />
                  <span>प्रतियोगी परीक्षा पेपर्स संबंधी सामान्य प्रश्न (FAQs)</span>
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-1">
                      प्रश्न: क्या यहां दिए गए पेपर्स 100% आधिकारिक (Real Official Papers) हैं?
                    </strong>
                    <p className="text-slate-600 leading-relaxed">
                      उत्तर: हां, सभी प्रश्न पत्र संबंधित परीक्षा बोर्ड (जैसे SSC, UPSC, RRB, MPESB, UPPRPB, CBSE) द्वारा आयोजित वास्तविक परीक्षाओं के मास्टर प्रश्न पत्र और आधिकारिक उत्तर कुंजी (Official Answer Key) पर आधारित हैं।
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block mb-1">
                      प्रश्न: क्या इन प्रश्न पत्रों के साथ हल (Solutions) भी उपलब्ध हैं?
                    </strong>
                    <p className="text-slate-600 leading-relaxed">
                      उत्तर: अधिकांश प्रश्न पत्रों में आयोग द्वारा जारी फाइनल आंसर की (Final Answer Key) शामिल है, जिससे आप सही उत्तर का तुरंत मिलान कर सकते हैं।
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <AdPlaceholder type="In-Content Ad" />
          </div>

          <div>
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Modal for Paper Details */}
      {activeModalPaper && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalPaper(null)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-black text-blue-950 bg-blue-100 px-2.5 py-0.5 rounded-md border border-blue-200">
                वर्ष {activeModalPaper.year}
              </span>
              {activeModalPaper.category && (
                <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                  {activeModalPaper.category}
                </span>
              )}
              {activeModalPaper.solutionAvailable && (
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  ✓ हल सहित (Solved)
                </span>
              )}
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {activeModalPaper.examName}
            </h3>

            <p className="text-xs text-blue-900 font-semibold mb-4">
              {activeModalPaper.organization} • {activeModalPaper.shiftOrTier}
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-900 block mb-1">
                  शामिल विषय एवं अनुभाग (Subjects & Syllabus):
                </span>
                <p className="text-slate-600 leading-relaxed">{activeModalPaper.subject}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                {activeModalPaper.language && (
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">भाषा माध्यम:</span>
                    <span className="font-semibold text-slate-800">{activeModalPaper.language}</span>
                  </div>
                )}
                {activeModalPaper.totalQuestions && (
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">प्रश्न संख्या / अंक:</span>
                    <span className="font-semibold text-slate-800">{activeModalPaper.totalQuestions}</span>
                  </div>
                )}
                {activeModalPaper.fileSize && (
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">अनुमानित फाइल साइज:</span>
                    <span className="font-semibold text-slate-800">{activeModalPaper.fileSize}</span>
                  </div>
                )}
                {activeModalPaper.officialPortal && (
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">आधिकारिक पोर्टल:</span>
                    <span className="font-semibold text-slate-800">{activeModalPaper.officialPortal}</span>
                  </div>
                )}
              </div>

              {activeModalPaper.answerKeyStatus && (
                <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-900 text-xs font-medium">
                  ✓ {activeModalPaper.answerKeyStatus}
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setActiveModalPaper(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                बंद करें
              </button>

              <a
                href={activeModalPaper.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition"
              >
                <Download className="w-4 h-4" />
                <span>आधिकारिक पोर्टल से डाउनलोड करें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
