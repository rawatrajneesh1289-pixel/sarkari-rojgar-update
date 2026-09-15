import React from 'react';
import {
  Award,
  Calendar,
  Building2,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
  FileCheck2,
  CheckCircle,
  FileText,
} from 'lucide-react';
import { db } from '../services/db';
import { StatusBadge } from '../components/common/StatusBadge';
import { ShareButtons } from '../components/common/ShareButtons';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { useRouter } from '../context/RouterContext';

interface ResultDetailPageProps {
  slug: string;
}

export const ResultDetailPage: React.FC<ResultDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const result = db.getResultBySlug(slug);

  if (!result) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">रिजल्ट विवरण उपलब्ध नहीं है</h1>
        <p className="text-slate-600 mb-6">यह परीक्षा परिणाम उपलब्ध नहीं है या हटा दिया गया है।</p>
        <button
          onClick={() => navigate('/results')}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold"
        >
          सभी रिजल्ट देखें
        </button>
      </div>
    );
  }

  const related = db.getResults().filter((r) => r.id !== result.id).slice(0, 3);

  return (
    <>
      <SeoHead
        title={`${result.examName} Result 2026 - Cut Off Marks & Merit List`}
        description={`${result.examNameHi || result.examName}: घोषित तिथि ${result.resultDate}। कट-ऑफ मार्क्स, स्कोरकार्ड एवं चयन सूची डाउनलोड लिंक।`}
        canonicalUrl={`https://sarkarirozgarupdate.com/results/${result.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Results', url: '/results' },
            { label: result.examName },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-100 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{result.organization}</span>
                </span>
                <StatusBadge status={result.status} />
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                {result.examName} Result 2026
              </h1>

              <p className="text-sm sm:text-base text-blue-900 font-semibold mb-4">
                {result.examNameHi}
              </p>

              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-xs flex items-center justify-between">
                <span className="text-slate-600">रिजल्ट घोषणा तिथि (Result Declared):</span>
                <span className="font-bold text-blue-900 text-sm">{result.resultDate}</span>
              </div>
            </div>

            <DisclaimerAlert isDemo={result.isDemo} />

            {/* Direct Result Checking Box */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md text-center">
              <h3 className="text-lg font-bold mb-2">
                सीधा रिजल्ट डाउनलोड व स्कोरकार्ड लिंक (Direct Result Links)
              </h3>
              <p className="text-xs text-blue-200 mb-4 max-w-lg mx-auto">
                अपना रोल नंबर एवं जन्मतिथि डालकर परीक्षा परिणाम और कट-ऑफ सूची देखें।
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={result.resultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition shadow-md"
                >
                  <Award className="w-4 h-4" />
                  <span>Check Result / Scorecard</span>
                </a>
                {result.cutOffUrl && (
                  <a
                    href={result.cutOffUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm border border-white/20 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Download Cut-Off PDF</span>
                  </a>
                )}
              </div>
            </div>

            {/* Cut-off Information */}
            {result.cutOffMarks && result.cutOffMarks.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>श्रेणीवार कट-ऑफ मार्क्स (Category-wise Cut-Off Marks)</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-200 rounded-lg">
                    <thead className="bg-slate-100 text-slate-700 font-semibold uppercase">
                      <tr>
                        <th className="p-2.5 border-b">आरक्षण श्रेणी (Category)</th>
                        <th className="p-2.5 border-b">कट-ऑफ अंक (Cut-Off Marks)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {result.cutOffMarks.map((c, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-2.5 font-medium">{c.category}</td>
                          <td className="p-2.5 font-bold text-blue-800">{c.marks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Overview / Merit List */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>परीक्षा परिणाम सारांश (Result Overview)</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl">
                {result.overview}
              </p>
            </div>

            {/* How to check */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-blue-600" />
                <span>रिजल्ट कैसे देखें? (Step-by-Step Guide)</span>
              </h3>
              <ol className="space-y-2.5 text-sm text-slate-700">
                {result.howToCheck.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Important Links Table */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-blue-600" />
                <span>महत्वपूर्ण आधिकारिक लिंक (Important Official Links)</span>
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 gap-2">
                  <span className="font-semibold text-slate-900">Check Result / Scorecard Link:</span>
                  <a
                    href={result.resultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs self-start sm:self-auto"
                  >
                    <span>Click Here</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {result.cutOffUrl && (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 gap-2">
                    <span className="font-semibold text-slate-900">Download Cut-Off Marks Notice:</span>
                    <a
                      href={result.cutOffUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg text-xs self-start sm:self-auto"
                    >
                      <span>Click Here</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {result.meritListUrl && (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 gap-2">
                    <span className="font-semibold text-slate-900">Download Qualified Candidates Merit List:</span>
                    <a
                      href={result.meritListUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg text-xs self-start sm:self-auto"
                    >
                      <span>Click Here</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* FAQs */}
            {result.faqs && result.faqs.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-blue-600" />
                  <span>अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions)</span>
                </h3>
                <div className="space-y-3">
                  {result.faqs.map((faq, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                        प्रश्न: {faq.question}
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        उत्तर: {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <ShareButtons title={`${result.examName} Result 2026`} />

            {/* Related */}
            {related.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  अन्य परीक्षा परिणाम
                </h3>
                <div className="space-y-2.5">
                  {related.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => navigate(`/results/${r.slug}`)}
                      className="p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] text-blue-700 font-semibold">{r.organization}</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{r.examName}</h4>
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
