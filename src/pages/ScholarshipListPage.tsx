import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Calendar,
  IndianRupee,
  ExternalLink,
  CheckCircle,
  Search,
  X,
  Building2,
  FileText,
  HelpCircle,
  ChevronDown,
  Award,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { db } from '../services/db';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { Scholarship } from '../types';

type CategoryFilter = 'ALL' | 'Central' | 'State' | 'Merit Based' | 'Pre-Matric' | 'Post-Matric' | 'SC/ST/OBC' | 'Minority';

export const ScholarshipListPage: React.FC = () => {
  const scholarships = db.getScholarships();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('ALL');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const categories: { key: CategoryFilter; label: string; count: number }[] = [
    { key: 'ALL', label: 'सभी छात्रवृत्तियां', count: scholarships.length },
    { key: 'Central', label: 'केन्द्रीय योजनाएं (NSP/AICTE)', count: scholarships.filter((s) => s.category === 'Central').length },
    { key: 'State', label: 'राज्य छात्रवृत्तियां (UP/MP/Bihar/Raj)', count: scholarships.filter((s) => s.category === 'State').length },
    { key: 'Merit Based', label: 'मेधावी व उच्च शिक्षा', count: scholarships.filter((s) => s.category === 'Merit Based').length },
    { key: 'Pre-Matric', label: 'प्री-मैट्रिक (स्कूल स्तर)', count: scholarships.filter((s) => s.category === 'Pre-Matric').length },
    { key: 'Post-Matric', label: 'पोस्ट-मैट्रिक (कॉलेज/डिप्लोमा)', count: scholarships.filter((s) => s.category === 'Post-Matric').length },
    { key: 'SC/ST/OBC', label: 'SC / ST / OBC वर्ग', count: scholarships.filter((s) => s.category === 'SC/ST/OBC').length },
    { key: 'Minority', label: 'अल्पसंख्यक वर्ग', count: scholarships.filter((s) => s.category === 'Minority').length },
  ];

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((sch) => {
      // Category filter
      if (selectedCategory !== 'ALL' && sch.category !== selectedCategory) {
        return false;
      }

      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = sch.title.toLowerCase().includes(query);
        const matchesTitleHi = sch.titleHi.toLowerCase().includes(query);
        const matchesProvider = sch.provider.toLowerCase().includes(query);
        const matchesEligibility = sch.eligibility.toLowerCase().includes(query);
        const matchesBenefit = sch.amountOrBenefit.toLowerCase().includes(query);
        return matchesTitle || matchesTitleHi || matchesProvider || matchesEligibility || matchesBenefit;
      }

      return true;
    });
  }, [scholarships, selectedCategory, searchTerm]);

  const scholarshipFaqs = [
    {
      q: 'छात्रवृत्ति (Scholarship) के लिए ऑनलाइन आवेदन हेतु कौन-कौन से आवश्यक दस्तावेज चाहिए?',
      a: 'सामान्यतः सभी प्रमुख राष्ट्रीय व राज्य छात्रवृत्ति पोर्टलों पर निम्न दस्तावेजों की आवश्यकता होती है: 1. आधार कार्ड (मोबाइल नंबर से लिंक), 2. पिछली उत्तीर्ण कक्षा की अंकतालिका (Marksheet), 3. सक्षम अधिकारी द्वारा जारी नवीनतम आय प्रमाण पत्र (Income Certificate), 4. जाति प्रमाण पत्र (Caste Certificate - यदि लागू हो), 5. मूल निवास प्रमाण पत्र (Domicile/Residential Certificate), 6. विद्यार्थी के नाम का बैंक खाता जो आधार व NPCI (DBT) से मैप हो, 7. चालू सत्र की कॉलेज/स्कूल प्रवेश व फीस रसीद, 8. पासपोर्ट साइज रंगीन फोटो एवं हस्ताक्षर।',
    },
    {
      q: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर OTR (One Time Registration) क्या है और यह क्यों अनिवार्य है?',
      a: 'NSP पोर्टल पर भारत सरकार ने वित्तीय वर्ष 2024-25 से OTR (वन टाइम रजिस्ट्रेशन) अनिवार्य किया है। इसमें आधार फेस-ऑथेंटिकेशन अथवा आधार ओटीपी के माध्यम से विद्यार्थी को 14 अंकों का स्थायी OTR नंबर मिलता है। इसके बाद विद्यार्थी बिना बार-बार दस्तावेज अपलोड किए केंद्रीय एवं यूजीसी की किसी भी छात्रवृत्ति हेतु सीधे आवेदन कर सकते हैं।',
    },
    {
      q: 'क्या एक छात्र एक ही शैक्षणिक वर्ष में दो अलग-अलग छात्रवृत्तियों का लाभ ले सकता है?',
      a: 'सरकारी नियमों के अनुसार कोई भी विद्यार्थी एक ही शैक्षणिक वर्ष में दो अलग-अलग सरकारी (केन्द्र अथवा राज्य) योजनाओं से ट्यूशन फीस प्रतिपूर्ति या निर्वाह भत्ता नहीं ले सकता। हालांकि, यदि कोई छात्र सरकारी ट्यूशन फीस प्रतिपूर्ति ले रहा है, तो कुछ मामलों में निजी ट्रस्ट (जैसे रिलायंस, जिंदल या टाटा) की सहायता ले सकता है यदि संबंधित योजना की गाइडलाइन में इसकी अनुमति हो।',
    },
    {
      q: 'छात्रवृत्ति की राशि बैंक खाते में नहीं आने का मुख्य कारण क्या होता है?',
      a: 'छात्रवृत्ति राशि न आने का सबसे प्रमुख कारण बैंक खाते का आधार (Aadhaar) व NPCI मैपर (DBT) से लिंक न होना है। छात्रवृत्ति की राशि डायरेक्ट बेनिफिट ट्रांसफर (DBT) से भेजी जाती है, अतः अपने बैंक जाकर फॉर्म भरकर DBT इनेबल जरूर करवाएं। इसके अतिरिक्त आय प्रमाण पत्र की वैधता समाप्त होना या बायोमेट्रिक सत्यापन अधूरा होना भी कारण हो सकता है।',
    },
  ];

  const getCategoryBadgeClass = (_category: string) => {
    return 'bg-blue-50 text-blue-800 border-blue-200';
  };

  return (
    <>
      <SeoHead
        title="छात्रवृत्ति 2026-27 | National & State Scholarship Schemes Online Form"
        description="भारत की सभी प्रमुख राष्ट्रीय एवं राज्य छात्रवृत्तियां: NSP, AICTE प्रगति, UP Scholarship, बिहार पोस्ट मैट्रिक, मेधावी विद्यार्थी (MMVY), इंस्पायर, PMSS व अन्य। पात्रता व ऑनलाइन आवेदन।"
        canonicalUrl="https://sarkari-rozgar-update.netlify.app/scholarship"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Scholarships (छात्रवृत्ति)' }]} />

        {/* Page Header */}
        <div className="my-4 pb-4 border-b border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-7 h-7 text-blue-600" />
                <span>छात्रवृत्ति एवं वित्तीय सहायता (Scholarship Schemes 2026-27)</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                केन्द्रीय, राज्य, मेधावी, तकनीकी एवं आरक्षित वर्ग के विद्यार्थियों हेतु प्रमुख छात्रवृत्तियों की सम्पूर्ण सूची
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-xs font-bold text-blue-800">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>{scholarships.length} प्रसिद्ध छात्रवृत्तियां सूचीबद्ध</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-6 space-y-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="छात्रवृत्ति का नाम, प्रदाता विभाग, पात्रता (जैसे 12th, B.Tech, OBC, Bihar, MP) खोजें..."
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="क्लियर करें"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                  selectedCategory === cat.key
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    selectedCategory === cat.key ? 'bg-blue-800 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-4">
            {/* Filter Result Counter */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>
                दिखाई जा रही छात्रवृत्तियां: <strong className="text-slate-800">{filteredScholarships.length}</strong>
              </span>
              {(searchTerm || selectedCategory !== 'ALL') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('ALL');
                  }}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  फ़िल्टर हटाएं
                </button>
              )}
            </div>

            {/* Empty State */}
            {filteredScholarships.length === 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-3">
                <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="font-bold text-slate-800 text-base">कोई छात्रवृत्ति नहीं मिली</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  आपकी खोज &quot;{searchTerm}&quot; के लिए कोई परिणाम नहीं मिला। कृपया अन्य कीवर्ड या श्रेणी चुनें।
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('ALL');
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition"
                >
                  सभी छात्रवृत्तियां देखें
                </button>
              </div>
            )}

            {/* Scholarship Cards List */}
            {filteredScholarships.map((sch) => (
              <div
                key={sch.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition space-y-4"
              >
                {/* Card Header Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${getCategoryBadgeClass(
                        sch.category
                      )}`}
                    >
                      {sch.category} Scheme
                    </span>
                    <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-slate-400" />
                      <span className="truncate max-w-[220px] sm:max-w-none">{sch.provider}</span>
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-blue-800 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>अंतिम तिथि: {sch.lastDate}</span>
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {sch.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-900 font-semibold mt-1">
                    {sch.titleHi}
                  </p>
                </div>

                {/* Key Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                  <div className="space-y-1">
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <IndianRupee className="w-3.5 h-3.5 text-blue-600" />
                      <span>छात्रवृत्ति राशि / लाभ (Award Amount):</span>
                    </span>
                    <p className="font-bold text-blue-700 text-xs sm:text-sm leading-relaxed">
                      {sch.amountOrBenefit}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-slate-500 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                      <span>पात्रता मापदंड (Eligibility):</span>
                    </span>
                    <p className="font-medium text-slate-800 text-xs leading-relaxed">
                      {sch.eligibility}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>सत्यापित आधिकारिक छात्रवृत्ति</span>
                  </span>

                  <div className="flex items-center gap-2">
                    {sch.notificationUrl && sch.notificationUrl !== sch.applyUrl && (
                      <a
                        href={sch.notificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold transition"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>विवरण / नोटिस</span>
                      </a>
                    )}
                    <a
                      href={sch.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition"
                    >
                      <span>ऑनलाइन आवेदन (Portal Link)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <AdPlaceholder type="In-Content Ad" />

            {/* Essential Documents Guide Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>छात्रवृत्ति आवेदन हेतु जरूरी दस्तावेज चेकलिस्ट (Essential Checklist)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>आधार कार्ड (Aadhaar Card)</strong>: मोबाइल नंबर से लिंक होना अनिवार्य।
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>आय प्रमाण पत्र (Income Certificate)</strong>: 6 माह से पुराना न हो।
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>जाति व निवास प्रमाण पत्र</strong>: सक्षम राजस्व अधिकारी द्वारा जारी डिजिटल कॉपी।
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>NPCI/DBT लिंक्ड बैंक खाता</strong>: बैंक शाखा जाकर आधार सीडिंग सक्रिय कराएं।
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>शैक्षणिक अंकतालिकाएं</strong>: 10वीं, 12वीं अथवा पिछली उत्तीर्ण सेमेस्टर मार्कशीट।
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>कॉलेज फीस रसीद व बोनाफाइड</strong>: वर्तमान सत्र का एडमिशन प्रमाण पत्र।
                  </div>
                </div>
              </div>
            </div>

            {/* Scholarship FAQs Accordion */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>अक्सर पूछे जाने वाले सवाल (Scholarship FAQs)</span>
              </h3>
              <div className="space-y-2">
                {scholarshipFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden transition"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left px-4 py-3 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-800"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${
                            isOpen ? 'rotate-180 text-blue-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 py-3 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
