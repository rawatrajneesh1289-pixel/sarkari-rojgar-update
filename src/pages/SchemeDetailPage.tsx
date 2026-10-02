import React from 'react';
import {
  Compass,
  CheckCircle,
  ExternalLink,
  Building2,
  FileText,
  FileCheck2,
  HelpCircle,
  Clock,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { db } from '../services/db';
import { ShareButtons } from '../components/common/ShareButtons';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { useRouter } from '../context/RouterContext';

interface SchemeDetailPageProps {
  slug: string;
}

export const SchemeDetailPage: React.FC<SchemeDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const scheme = db.getSchemeBySlug(slug);

  if (!scheme) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">योजना विवरण उपलब्ध नहीं है</h1>
        <p className="text-slate-600 mb-6">यह सरकारी योजना पोर्टल से हटा दी गई है अथवा गलत लिंक का चयन किया गया है।</p>
        <button
          onClick={() => navigate('/sarkari-yojana')}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold"
        >
          सभी योजनाएं देखें
        </button>
      </div>
    );
  }

  const related = db.getSchemes().filter((s) => s.id !== scheme.id).slice(0, 4);

  return (
    <>
      <SeoHead
        title={`${scheme.schemeName} 2026 - Eligibility, Benefits & Apply Online`}
        description={`${scheme.schemeNameHi || scheme.schemeName}: उद्देश्य, पात्रता मानदंड, लाभ, आवश्यक दस्तावेज चेकलिस्ट एवं ऑनलाइन आवेदन प्रक्रिया।`}
        canonicalUrl={`https://sarkari-rozgar-update.netlify.app/sarkari-yojana/${scheme.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Sarkari Yojana', url: '/sarkari-yojana' },
            { label: scheme.schemeName },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Main Header Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                {scheme.sector ? (
                  <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-200 flex items-center gap-1.5">
                    <span>{scheme.sector}</span>
                  </span>
                ) : (
                  <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-100 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{scheme.category}</span>
                  </span>
                )}
                <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                  सरकारी कल्याणकारी योजना
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                {scheme.schemeName}
              </h1>

              <p className="text-sm sm:text-base text-blue-950 font-bold mb-3">
                {scheme.schemeNameHi}
              </p>

              {scheme.tagline && (
                <div className="mb-4 px-3.5 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm font-semibold text-blue-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{scheme.tagline}</span>
                </div>
              )}

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900">योजना का मुख्य उद्देश्य:</strong> {scheme.objective}
              </div>

              {scheme.helplineNumber && (
                <div className="mt-3.5 flex items-center gap-2 text-xs font-bold text-slate-700 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>आधिकारिक हेल्पलाइन / टोल-फ्री नंबर: </span>
                  <span className="text-amber-900 font-extrabold">{scheme.helplineNumber}</span>
                </div>
              )}
            </div>

            <DisclaimerAlert isDemo={scheme.isDemo} />

            {/* Direct Links Box */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md text-center">
              <h3 className="text-lg font-bold mb-2">
                आधिकारिक पोर्टल व आवेदन लिंक (Official Portal Links)
              </h3>
              <p className="text-xs text-blue-200 mb-4 max-w-lg mx-auto">
                सीधे सरकारी पोर्टल पर जाकर ऑनलाइन आवेदन करें, ई-केवाईसी या स्थिति (Application Status) जांचें।
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={scheme.applyOnlineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Apply Online (Official Portal)</span>
                </a>
                <a
                  href={scheme.officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm border border-white/20 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Official Website</span>
                </a>
              </div>
            </div>

            {/* Scheme Timeline & Last Date Card */}
            {(scheme.timelineNotice || scheme.lastDateDetail || scheme.timelineType) && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>योजना की समय-सीमा एवं लास्ट डेट (Starting Date & Last Date)</span>
                  </h3>

                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                      scheme.hasLastDate === false
                        ? 'bg-blue-100 text-blue-900 border border-blue-300'
                        : scheme.timelineType === 'SEASONAL'
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-blue-100 text-blue-900 border border-blue-300'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {scheme.hasLastDate === false
                        ? 'कोई लास्ट डेट नहीं (सदा खुली योजना)'
                        : scheme.timelineType === 'SEASONAL'
                        ? 'सीजनल / कट-ऑफ बाध्य लास्ट डेट'
                        : 'चरणबद्ध (Phase-Based) समय सीमा'}
                    </span>
                  </span>
                </div>

                {scheme.timelineNotice && (
                  <div
                    className={`p-3.5 rounded-xl border mb-3 text-xs sm:text-sm font-semibold flex items-start gap-2.5 ${
                      scheme.hasLastDate === false
                        ? 'bg-blue-50 border-blue-200 text-blue-950'
                        : 'bg-amber-50 border-amber-200 text-amber-950'
                    }`}
                  >
                    <span className="font-extrabold text-[11px] uppercase px-2 py-0.5 rounded bg-white border border-slate-200 shrink-0 text-slate-800">
                      आवेदन स्थिति
                    </span>
                    <span className="leading-relaxed">{scheme.timelineNotice}</span>
                  </div>
                )}

                {scheme.lastDateDetail && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 block mb-1">
                      लास्ट डेट व समय-सारणी संबंधी दिशा-निर्देश (Rules & Guidelines):
                    </strong>
                    <p>{scheme.lastDateDetail}</p>
                  </div>
                )}
              </div>
            )}

            {/* Benefits */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>योजना के लाभ एवं वित्तीय सहायता (Key Benefits & Financial Assistance)</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {scheme.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>पात्रता मानदंड (Eligibility Criteria)</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {scheme.eligibility.map((e, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="leading-relaxed">{e}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Apply */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-blue-600" />
                <span>आवेदन की चरणबद्ध प्रक्रिया (How to Apply Step-by-Step)</span>
              </h3>
              <ol className="space-y-2.5 text-sm text-slate-700">
                {scheme.applicationProcess.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              {/* Documents Required */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  आवश्यक दस्तावेज चेकलिस्ट (Required Documents Checklist):
                </h4>
                <div className="flex flex-wrap gap-2">
                  {scheme.requiredDocuments.map((doc, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs rounded-md border border-slate-200 font-medium"
                    >
                      ✓ {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Dates Table */}
            {scheme.importantDates && scheme.importantDates.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>महत्वपूर्ण तिथियां व समय-सारणी (Important Dates)</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50 text-slate-700">
                      <tr>
                        <th className="px-3.5 py-2 text-left font-bold border-b border-slate-200">घटना / विवरण</th>
                        <th className="px-3.5 py-2 text-left font-bold border-b border-slate-200">तिथि / स्थिति</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {scheme.importantDates.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="px-3.5 py-2 text-slate-800 font-medium">{item.event}</td>
                          <td className="px-3.5 py-2 text-blue-800 font-bold">{item.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* FAQs */}
            {scheme.faqs && scheme.faqs.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <span>योजना से जुड़े सामान्य प्रश्न (Frequently Asked Questions - FAQs)</span>
                </h3>
                <div className="space-y-3">
                  {scheme.faqs.map((faq, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                        प्र. {faq.question}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>उत्तर:</strong> {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <ShareButtons title={scheme.schemeName} />

            {/* Related Schemes */}
            {related.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  अन्य प्रमुख सरकारी योजनाएं
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {related.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => navigate(`/sarkari-yojana/${r.slug}`)}
                      className="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-slate-50 transition cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] text-blue-700 font-semibold">{r.category}</span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">{r.schemeName}</h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
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
