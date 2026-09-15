import React from 'react';
import {
  KeyRound,
  Calendar,
  Building2,
  Download,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  HelpCircle,
  CreditCard,
  FileText,
  ShieldAlert,
} from 'lucide-react';
import { db } from '../services/db';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { ShareButtons } from '../components/common/ShareButtons';
import { Sidebar } from '../components/layout/Sidebar';
import { useRouter } from '../context/RouterContext';

interface AnswerKeyDetailPageProps {
  slug: string;
}

export const AnswerKeyDetailPage: React.FC<AnswerKeyDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const answerKey = db.getAnswerKeyBySlug(slug);

  if (!answerKey) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">उत्तर कुंजी उपलब्ध नहीं है</h1>
        <p className="text-slate-600 mb-6">यह उत्तर कुंजी अभी उपलब्ध नहीं है अथवा हटा दी गई है।</p>
        <button
          onClick={() => navigate('/answer-key')}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          सभी उत्तर कुंजी देखें
        </button>
      </div>
    );
  }

  const related = db.getAnswerKeys().filter((a) => a.id !== answerKey.id).slice(0, 5);

  const answerKeySchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: `${answerKey.examName} Answer Key & Objection Link 2026`,
    description: answerKey.description || `${answerKey.examNameHi || answerKey.examName} by ${answerKey.organization}`,
    publisher: {
      '@type': 'Organization',
      name: 'Sarkari Rozgar Update',
      url: 'https://sarkarirozgarupdate.com',
    },
    datePublished: answerKey.publishedAt,
    dateModified: answerKey.updatedAt,
  };

  return (
    <>
      <SeoHead
        title={`${answerKey.examName} Answer Key 2026 - PDF Download & Objection Link`}
        description={`${answerKey.examNameHi || answerKey.examName}: परीक्षा तिथि ${answerKey.examDate}। उत्तर कुंजी जारी: ${answerKey.releaseDate}। आपत्ति की अंतिम तिथि: ${answerKey.objectionLastDate || 'शीघ्र'}। आधिकारिक पीडीएफ व सीधा डाउनलोड लिंक।`}
        canonicalUrl={`https://sarkarirozgarupdate.com/answer-key/${answerKey.slug}`}
        schema={answerKeySchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Answer Keys (उत्तर कुंजी)', url: '/answer-key' },
            { label: answerKey.examName },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Header Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-200 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{answerKey.organization}</span>
                </span>
                <span className="text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-md">
                  {answerKey.status || 'Released Online'}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                {answerKey.examName}
              </h1>

              {answerKey.examNameHi && (
                <p className="text-sm sm:text-base text-blue-900 font-semibold mb-4">
                  {answerKey.examNameHi}
                </p>
              )}

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-blue-50/40 p-4 rounded-xl border border-blue-100 text-xs">
                <div>
                  <span className="text-slate-500 block">परीक्षा तिथि (Exam Date):</span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{answerKey.examDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">उत्तर कुंजी जारी तिथि:</span>
                  <span className="font-bold text-blue-700 text-xs sm:text-sm">{answerKey.releaseDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">आपत्ति दर्ज करने की अंतिम तिथि:</span>
                  <span className="font-bold text-rose-700 text-xs sm:text-sm">{answerKey.objectionLastDate || 'निस्तारित / उपलब्ध नहीं'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">प्रति प्रश्न आपत्ति शुल्क:</span>
                  <span className="font-bold text-slate-800 text-xs sm:text-sm">{answerKey.objectionFeePerQuestion || 'निःशुल्क'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">अद्यतन स्थिति:</span>
                  <span className="font-bold text-slate-700 text-xs sm:text-sm">{answerKey.updatedAt}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">सत्यापन स्थिति:</span>
                  <span className="font-bold text-blue-700 text-xs sm:text-sm">आधिकारिक रूप से सत्यापित</span>
                </div>
              </div>
            </div>

            <DisclaimerAlert isDemo={answerKey.isDemo} />

            {/* Direct Action Box */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-md text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                ऑफिशियल उत्तर कुंजी व आपत्ति दर्ज करें (Official Links)
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mb-5 max-w-lg mx-auto">
                नीचे दिए गए आधिकारिक सर्वर लिंक पर क्लिक करके अपनी उत्तर कुंजी (PDF) व रिस्पॉन्स शीट डाउनलोड करें।
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={answerKey.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Answer Key PDF / Login</span>
                </a>

                {answerKey.objectionUrl && (
                  <a
                    href={answerKey.objectionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl text-sm border border-rose-400/40 transition shadow-md"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>Raise Online Objection / Challenge</span>
                  </a>
                )}
              </div>
            </div>

            {/* Overview & Description */}
            {answerKey.description && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 text-blue-900">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>उत्तर कुंजी विस्तृत विवरण (Official Notification & Overview)</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed bg-blue-50/30 p-4 rounded-xl border border-blue-100">
                  {answerKey.description}
                </p>
              </div>
            )}

            {/* Important Dates Table */}
            {answerKey.importantDates && answerKey.importantDates.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>महत्वपूर्ण तिथियां (Important Schedule)</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <tbody>
                      {answerKey.importantDates.map((d, i) => (
                        <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/80">
                          <td className="py-2.5 px-3 font-medium text-slate-700">{d.event}</td>
                          <td className="py-2.5 px-3 font-bold text-blue-950 text-right">{d.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Step-by-Step Instructions */}
            {answerKey.stepsToDownload && answerKey.stepsToDownload.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>उत्तर कुंजी कैसे डाउनलोड करें एवं मिलान कैसे करें? (How to Download & Check)</span>
                </h3>
                <ol className="space-y-3 text-sm text-slate-700">
                  {answerKey.stepsToDownload.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* FAQs Accordion */}
            {answerKey.faqs && answerKey.faqs.length > 0 && (
              <FAQAccordion
                faqs={answerKey.faqs}
                title={`${answerKey.examName} से जुड़े महत्वपूर्ण प्रश्न (FAQs)`}
              />
            )}

            <ShareButtons title={`${answerKey.examName} Answer Key 2026`} />

            {/* Related Answer Keys */}
            {related.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  अन्य महत्वपूर्ण उत्तर कुंजियां (Related Answer Keys)
                </h3>
                <div className="space-y-2.5">
                  {related.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => {
                        navigate(`/answer-key/${r.slug}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] text-blue-700 font-semibold">{r.organization}</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{r.examName}</h4>
                        <span className="text-[11px] text-slate-500">जारी: {r.releaseDate}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
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
