import React, { useState } from 'react';
import {
  Briefcase,
  Award,
  FileCheck2,
  KeyRound,
  Compass,
  GraduationCap,
  School,
  BookOpen,
  FileStack,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  Search,
  CheckCircle,
} from 'lucide-react';
import { HeroSearch } from '../components/layout/HeroSearch';
import { CategoryCard } from '../components/cards/CategoryCard';
import { JobCard } from '../components/cards/JobCard';
import { ResultCard } from '../components/cards/ResultCard';
import { AdmitCardItem } from '../components/cards/AdmitCardItem';
import { SchemeCard } from '../components/cards/SchemeCard';
import { ArticleCard } from '../components/cards/ArticleCard';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { db } from '../services/db';
import { useRouter } from '../context/RouterContext';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [jobTab, setJobTab] = useState<'ALL' | 'GRADUATE' | '10TH_12TH' | 'POLICE_DEFENCE' | 'RAILWAY'>('ALL');

  const allJobs = db.getJobs();
  const allResults = db.getResults();
  const allAdmitCards = db.getAdmitCards();
  const allAnswerKeys = db.getAnswerKeys();
  const allSchemes = db.getSchemes();
  const allScholarships = db.getScholarships();
  const allAdmissions = db.getAdmissions();
  const allPreviousPapers = db.getPreviousPapers();
  const allArticles = db.getArticles();

  // Filtered jobs for home tabs
  const filteredJobs = allJobs.filter((job) => {
    if (jobTab === 'GRADUATE') return job.qualification.toLowerCase().includes('graduate');
    if (jobTab === '10TH_12TH') return job.qualification.includes('10th') || job.qualification.includes('12th');
    if (jobTab === 'POLICE_DEFENCE') return job.category === 'Police' || job.category === 'Defence';
    if (jobTab === 'RAILWAY') return job.category === 'Railway';
    return true;
  }).slice(0, 5);

  const categories = [
    {
      id: 'jobs',
      title: 'Latest Jobs',
      titleHi: 'नवीनतम सरकारी भर्तियां',
      desc: 'SSC, UPSC, रेलवे, पुलिस, बैंक एवं शिक्षक पदों के नवीनतम विज्ञापन',
      count: allJobs.length,
      link: '/jobs',
      iconName: 'Briefcase',
      badgeColor: 'bg-blue-100 text-blue-900',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'admit-card',
      title: 'Admit Card',
      titleHi: 'प्रवेश पत्र / हॉल टिकट',
      desc: 'विभिन्न प्रतियोगी परीक्षाओं के एडमिट कार्ड एवं एग्जाम सिटी स्लिप',
      count: allAdmitCards.length,
      link: '/admit-card',
      iconName: 'FileCheck2',
      badgeColor: 'bg-blue-100 text-blue-900',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'results',
      title: 'Results',
      titleHi: 'परीक्षा परिणाम व मेरिट',
      desc: 'लिखित परीक्षा, कट-ऑफ मार्क्स और अंतिम चयन सूची',
      count: allResults.length,
      link: '/results',
      iconName: 'Award',
      badgeColor: 'bg-blue-100 text-blue-900',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'answer-key',
      title: 'Answer Key',
      titleHi: 'उत्तर कुंजी व आपत्ति लिंक',
      desc: 'ऑफिशियल आंसर की पीडीएफ एवं ऑनलाइन ऑब्जेक्शन लिंक',
      count: allAnswerKeys.length,
      link: '/answer-key',
      iconName: 'KeyRound',
      badgeColor: 'bg-blue-100 text-blue-900',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'sarkari-yojana',
      title: 'Sarkari Yojana',
      titleHi: 'सरकारी कल्याणकारी योजनाएं',
      desc: 'केंद्र एवं राज्य सरकारों की जनहितैषी एवं वित्तीय सहायता योजनाएं',
      count: allSchemes.length,
      link: '/sarkari-yojana',
      iconName: 'Compass',
      badgeColor: 'bg-blue-100 text-blue-900',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'scholarship',
      title: 'Scholarship',
      titleHi: 'छात्रवृत्ति एवं प्रोत्साहन राशि',
      desc: 'प्री-मैट्रिक, पोस्ट-मैट्रिक, मेधावी एवं उच्च शिक्षा छात्रवृत्ति',
      count: allScholarships.length,
      link: '/scholarship',
      iconName: 'GraduationCap',
      badgeColor: 'bg-blue-100 text-blue-900',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'admission',
      title: 'Admission',
      titleHi: 'कॉलेज व यूनिवर्सिटी एडमिशन',
      desc: 'CUET, बीएड, डी.एल.एड, प्रवेश परीक्षाएं और काउंसलिंग प्रक्रिया',
      count: db.getAdmissions().length,
      link: '/admission',
      iconName: 'School',
      badgeColor: 'bg-blue-100 text-blue-900',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'syllabus',
      title: 'Syllabus',
      titleHi: 'विस्तृत परीक्षा सिलेबस',
      desc: 'टॉपिक वाइज पाठ्यक्रम, अंक विभाजन और एग्जाम पैटर्न पीडीएफ',
      count: db.getSyllabuses().length,
      link: '/syllabus',
      iconName: 'BookOpen',
      badgeColor: 'bg-blue-100 text-blue-900',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'previous-papers',
      title: 'Previous Papers',
      titleHi: 'पुराने हल प्रश्न पत्र',
      desc: 'पिछले वर्षों के प्रश्न पत्र हल सहित (Solved Papers PDF)',
      count: db.getPreviousPapers().length,
      link: '/previous-papers',
      iconName: 'FileStack',
      badgeColor: 'bg-blue-100 text-blue-900',
      iconBg: 'bg-blue-50 text-blue-700',
    },
  ];

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sarkari Rozgar Update',
    url: 'https://sarkarirozgarupdate.com',
    description: 'सरकारी नौकरी और परीक्षा की हर जरूरी जानकारी एक जगह - Latest Jobs, Admit Card, Results, Answer Key & Sarkari Yojana',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sarkarirozgarupdate.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <SeoHead
        title="Sarkari Rozgar Update | सरकारी नौकरी, Admit Card, Results, Sarkari Yojana 2026"
        description="Sarkari Rozgar Update (SRU) - भारत का विश्वसनीय रोजगार पोर्टल। SSC, Railway, UPSC, Bank, Police Bharti, MP Vacancy, Admit Card, Results, Answer Key एवं Sarkari Yojana की सटीक सूचना।"
        canonicalUrl="https://sarkarirozgarupdate.com"
        schema={websiteSchema}
      />

      {/* Hero Search Section */}
      <HeroSearch />

      {/* Top Banner Ad Slot */}
      <AdPlaceholder type="Top Banner Ad" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Important Disclaimer Notice */}
        <DisclaimerAlert isDemo={false} />

        {/* 9 Main Category Grid */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>प्रमुख सूचना श्रेणियां (Main Categories)</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                अपनी जरूरत के अनुसार श्रेणी का चयन करें
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>

        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Left Column (2 Cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Latest Government Jobs Section */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span>नवीनतम सरकारी नौकरी (Latest Government Jobs)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    केन्द्रीय व राज्य सरकारों द्वारा विज्ञापित ताजा भर्तियां
                  </p>
                </div>

                <button
                  onClick={() => navigate('/jobs')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
                >
                  <span>सभी भर्तियां देखें ({allJobs.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick Tab Selectors */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 no-scrollbar">
                {[
                  { key: 'ALL', label: 'सभी (All)' },
                  { key: 'GRADUATE', label: 'स्नातक (Graduate)' },
                  { key: '10TH_12TH', label: '10वीं / 12वीं पास' },
                  { key: 'POLICE_DEFENCE', label: 'पुलिस व रक्षा' },
                  { key: 'RAILWAY', label: 'रेलवे (RRB)' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setJobTab(tab.key as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                      jobTab === tab.key
                        ? 'bg-blue-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Job Cards List */}
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate('/jobs')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-xl text-xs sm:text-sm font-bold transition"
                >
                  <span>और अधिक सरकारी नौकरियां देखें (View All Jobs)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* In-Content Ad Placeholder */}
            <AdPlaceholder type="In-Content Ad" />

            {/* Admit Card Updates Section */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-blue-600" />
                    <span>एडमिट कार्ड अपडेट (Admit Card Updates)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    प्रवेश पत्र एवं परीक्षा शहर आवंटन सूची
                  </p>
                </div>

                <button
                  onClick={() => navigate('/admit-card')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>सभी एडमिट कार्ड</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {allAdmitCards.slice(0, 6).map((card) => (
                  <AdmitCardItem key={card.id} card={card} />
                ))}
              </div>
            </section>

            {/* Latest Results Section */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span>ताजा परीक्षा परिणाम (Latest Results)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    घोषित परिणाम, रोल नंबर लिस्ट और कट-ऑफ
                  </p>
                </div>

                <button
                  onClick={() => navigate('/results')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>सभी रिजल्ट देखें ({allResults.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {allResults.slice(0, 6).map((res) => (
                  <ResultCard key={res.id} result={res} />
                ))}
              </div>
            </section>

            {/* Answer Key Updates Section */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <KeyRound className="w-5 h-5 text-blue-600" />
                    <span>उत्तर कुंजी व आपत्ति दर्ज (Answer Key Updates 2026)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    नवीनतम आधिकारिक उत्तर कुंजी, ओएमआर रिस्पॉन्स शीट और ऑनलाइन ऑब्जेक्शन लिंक
                  </p>
                </div>

                <button
                  onClick={() => navigate('/answer-key')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>सभी उत्तर कुंजियां ({allAnswerKeys.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {allAnswerKeys.slice(0, 4).map((keyItem) => (
                  <div
                    key={keyItem.id}
                    onClick={() => navigate(`/answer-key/${keyItem.slug}`)}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition cursor-pointer flex flex-col justify-between space-y-2 bg-white"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded truncate max-w-[170px]">
                          {keyItem.organization}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                          जारी: {keyItem.releaseDate}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 hover:text-blue-700">
                        {keyItem.examName}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/50 text-[11px] text-slate-500">
                      <span>परीक्षा: {keyItem.examDate}</span>
                      <span className="font-semibold text-blue-700 flex items-center gap-0.5">
                        विवरण देखें <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sarkari Yojana Highlights */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-blue-600" />
                    <span>सरकारी योजनाएं (Sarkari Yojana Updates)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    किसान, महिला, छात्र एवं जन-कल्याणकारी योजनाएं
                  </p>
                </div>

                <button
                  onClick={() => navigate('/sarkari-yojana')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>सभी योजनाएं</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allSchemes.slice(0, 4).map((scheme) => (
                  <SchemeCard key={scheme.id} scheme={scheme} />
                ))}
              </div>
            </section>

            {/* Scholarship Highlights Section */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span>छात्रवृत्ति एवं प्रोत्साहन राशि (Scholarships 2026-27)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    NSP, AICTE, राज्य स्तरीय पोस्ट-मैट्रिक एवं मेधावी विद्यार्थी छात्रवृत्ति योजनाएं
                  </p>
                </div>

                <button
                  onClick={() => navigate('/scholarship')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>सभी छात्रवृत्तियां ({allScholarships.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {allScholarships.slice(0, 4).map((sch) => (
                  <div
                    key={sch.id}
                    onClick={() => navigate('/scholarship')}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xs transition cursor-pointer flex flex-col justify-between space-y-2 bg-white"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded truncate max-w-[170px]">
                          {sch.category} Scheme
                        </span>
                        <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                          अंतिम: {sch.lastDate}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 hover:text-blue-700">
                        {sch.title}
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-600 mt-1 line-clamp-1">
                        {sch.amountOrBenefit}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/50 text-[11px] text-slate-500">
                      <span className="truncate max-w-[160px]">{sch.provider}</span>
                      <span className="font-semibold text-blue-700 flex items-center gap-0.5 shrink-0">
                        आवेदन विवरण <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Admission Highlights Section */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <School className="w-5 h-5 text-blue-600" />
                    <span>प्रवेश सूचना (Admission Updates 2026)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    प्रवेश परीक्षाएं, मेरिट एडमिशन एवं ऑनलाइन काउंसलिंग फॉर्म
                  </p>
                </div>

                <button
                  onClick={() => navigate('/admission')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>सभी प्रवेश फॉर्म ({allAdmissions.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {allAdmissions.slice(0, 4).map((adm) => (
                  <div
                    key={adm.id}
                    onClick={() => navigate(`/admission/${adm.slug}`)}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition cursor-pointer flex flex-col justify-between space-y-2 bg-white"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded truncate max-w-[170px]">
                          {adm.institution}
                        </span>
                        <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">
                          अंतिम: {adm.applicationLastDate}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 hover:text-blue-700">
                        {adm.courseOrExam}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/50 text-[11px] text-slate-500">
                      <span>{adm.level}</span>
                      <span className="font-semibold text-blue-700 flex items-center gap-0.5">
                        विवरण देखें <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Previous Year Papers (2020-2025 Real PYQs) Section */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-900 text-[11px] font-bold mb-1 border border-blue-200">
                    <Sparkles className="w-3 h-3 text-blue-600" />
                    <span>2020 से 2025 तक के रियल प्रश्न पत्र</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileStack className="w-5 h-5 text-blue-600" />
                    <span>पुराने हल प्रश्न पत्र (Previous Year Papers Solved)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    SSC, रेलवे, UPSC, पुलिस, बैंक एवं CTET परीक्षाओं के रियल शिफ्ट पेपर्स व आंसर की
                  </p>
                </div>

                <button
                  onClick={() => navigate('/previous-papers')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>सभी पेपर्स देखें ({allPreviousPapers.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {allPreviousPapers.slice(0, 4).map((paper) => (
                  <div
                    key={paper.id}
                    onClick={() => navigate('/previous-papers')}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xs transition cursor-pointer flex flex-col justify-between space-y-2 bg-white"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                          वर्ष {paper.year}
                        </span>
                        <span className="text-[10px] font-semibold text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                          {paper.solutionAvailable ? '✓ Solved' : 'Question Paper'}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 hover:text-blue-700">
                        {paper.examName}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                        {paper.organization} • {paper.shiftOrTier}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-200/50 text-[11px] text-slate-500">
                      <span>{paper.category || 'प्रतियोगी परीक्षा'}</span>
                      <span className="font-semibold text-blue-700 flex items-center gap-0.5">
                        PDF डाउनलोड करें <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Educational / Preparation Articles */}
            <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span>तैयारी टिप्स व गाइड (Preparation Articles)</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    सटीक रणनीति, डॉक्यूमेंट चेकलिस्ट और महत्वपूर्ण जानकारियां
                  </p>
                </div>

                <button
                  onClick={() => navigate('/articles')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                >
                  <span>सभी लेख देखें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {allArticles.map((art) => (
                  <ArticleCard key={art.id} article={art} />
                ))}
              </div>
            </section>

            {/* SEO Rich Editorial Content (Section 44) */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                Sarkari Rozgar Update - सरकारी नौकरी एवं प्रतियोगी परीक्षा सूचना मंच
              </h3>
              <p>
                <strong>Sarkari Rozgar Update (SRU)</strong> भारत के करोड़ों विद्यार्थियों और प्रतियोगी अभ्यर्थियों के लिए समर्पित एक आधुनिक, तीव्र और विश्वसनीय सूचना मंच है। हमारा प्राथमिक ध्येय केन्द्र सरकार (UPSC, SSC, Railway, Defence, Banking) तथा राज्य सरकारों (मध्य प्रदेश MPESB, उत्तर प्रदेश UPSSSC/UPPRPB, राजस्थान, बिहार आदि) द्वारा जारी की जाने वाली भर्तियों की आधिकारिक सूचनाओं को सरल एवं समझने योग्य हिंदी भाषा में आप तक पहुँचाना है।
              </p>
              <p>
                यहाँ आप नवीनतम सरकारी रिक्तियां (Latest Jobs), प्रवेश पत्र (Admit Card), परीक्षा परिणाम (Results), उत्तर कुंजी (Answer Key), लिखित परीक्षा का विस्तृत पाठ्यक्रम (Syllabus) तथा पिछले वर्षों के प्रश्न पत्र (Previous Year Papers) निःशुल्क देख सकते हैं। इसके अतिरिक्त जन-कल्याणकारी सरकारी योजनाएं (Sarkari Yojana) तथा छात्रवृत्तियों (Scholarships) के आवेदन की सटीक प्रक्रिया की जानकारी भी उपलब्ध कराई जाती है।
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-600">
                <span className="font-semibold text-slate-800">लोकप्रिय श्रेणियां:</span>
                <span>SSC CGL 2026</span> • <span>Railway RRB NTPC</span> • <span>MP Police Bharti</span> • <span>UPSC Civil Services</span> • <span>Ladli Behna Yojana</span> • <span>PM Kisan Samman Nidhi</span>
              </div>
            </section>
          </div>

          {/* Desktop Sidebar (1 Col wide) */}
          <div className="space-y-6">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
