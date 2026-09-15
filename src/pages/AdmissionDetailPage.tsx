import React from 'react';
import {
  School,
  Calendar,
  Building2,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  HelpCircle,
  CreditCard,
  UserCheck,
  Award,
} from 'lucide-react';
import { db } from '../services/db';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { ShareButtons } from '../components/common/ShareButtons';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { useRouter } from '../context/RouterContext';

interface AdmissionDetailPageProps {
  slug: string;
}

export const AdmissionDetailPage: React.FC<AdmissionDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const admission = db.getAdmissionBySlug(slug);

  if (!admission) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">प्रवेश सूचना उपलब्ध नहीं है</h1>
        <p className="text-slate-600 mb-6">यह प्रवेश सूचना अभी उपलब्ध नहीं है अथवा हटा दी गई है।</p>
        <button
          onClick={() => navigate('/admission')}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          सभी प्रवेश सूचनाएं देखें
        </button>
      </div>
    );
  }

  const related = db.getAdmissions().filter((a) => a.id !== admission.id).slice(0, 5);

  const admissionSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: admission.courseOrExam,
    description: admission.description || `${admission.courseOrExam} by ${admission.institution}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: admission.institution,
      url: admission.officialNotificationUrl,
    },
    applicationStartDate: admission.applicationStart,
    applicationDeadline: admission.applicationLastDate,
  };

  return (
    <>
      <SeoHead
        title={`${admission.courseOrExam} - Online Form, Eligibility, Dates & Fees`}
        description={`${admission.courseOrExamHi || admission.courseOrExam} by ${admission.institution}। आवेदन की अंतिम तिथि: ${admission.applicationLastDate}। योग्यता, शुल्क एवं सीधा ऑनलाइन आवेदन लिंक।`}
        canonicalUrl={`https://sarkarirozgarupdate.com/admission/${admission.slug}`}
        schema={admissionSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Admissions (प्रवेश सूचना)', url: '/admission' },
            { label: admission.courseOrExam },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Header Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-200 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{admission.institution}</span>
                </span>
                <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
                  {admission.level}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                {admission.courseOrExam}
              </h1>

              {admission.courseOrExamHi && (
                <p className="text-sm sm:text-base text-blue-900 font-semibold mb-4">
                  {admission.courseOrExamHi}
                </p>
              )}

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-blue-50/40 p-4 rounded-xl border border-blue-100 text-xs">
                <div>
                  <span className="text-slate-500 block">आवेदन प्रारंभ (Start Date):</span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{admission.applicationStart}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">आवेदन अंतिम तिथि (Last Date):</span>
                  <span className="font-bold text-rose-700 text-xs sm:text-sm">{admission.applicationLastDate}</span>
                </div>
                {admission.examDate && (
                  <div>
                    <span className="text-slate-500 block">परीक्षा / आवंटन तिथि:</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">{admission.examDate}</span>
                  </div>
                )}
                {admission.totalSeats && (
                  <div>
                    <span className="text-slate-500 block">कुल सीटें / क्षेत्र:</span>
                    <span className="font-bold text-blue-800 text-xs sm:text-sm">{admission.totalSeats}</span>
                  </div>
                )}
                {admission.ageLimit && (
                  <div>
                    <span className="text-slate-500 block">आयु सीमा (Age Limit):</span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{admission.ageLimit}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 block">अद्यतन स्थिति:</span>
                  <span className="font-bold text-slate-700 text-xs sm:text-sm">{admission.updatedAt}</span>
                </div>
              </div>
            </div>

            <DisclaimerAlert isDemo={admission.isDemo} />

            {/* Direct Action Box */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-md text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                ऑनलाइन आवेदन एवं आधिकारिक लिंक (Official Links)
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mb-5 max-w-lg mx-auto">
                आवेदन पत्र भरने से पूर्व सभी पात्रता शर्ते एवं आवश्यक दिशा-निर्देश ध्यानपूर्वक पढ़ लें।
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={admission.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Apply Online / Portal</span>
                </a>
                <a
                  href={admission.officialNotificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm border border-white/20 transition"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Official Notification / Website</span>
                </a>
              </div>
            </div>

            {/* Eligibility & Course Overview */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 text-blue-900">
                <UserCheck className="w-5 h-5 text-blue-600" />
                <span>शैक्षणिक योग्यता एवं पात्रता (Eligibility Criteria)</span>
              </h3>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm text-slate-800 leading-relaxed">
                {admission.eligibility}
              </div>

              {admission.description && (
                <div className="pt-2">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">प्रवेश विवरण (Overview & Course Details):</h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-blue-50/30 p-4 rounded-xl border border-blue-100">
                    {admission.description}
                  </p>
                </div>
              )}
            </div>

            {/* Application Fee Box */}
            {admission.feeDetails && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>आवेदन शुल्क विवरण (Application Fee)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-1">सामान्य / ओबीसी / ईडब्ल्यूएस:</span>
                    <span className="font-bold text-slate-900">{admission.feeDetails.generalOBC}</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-1">अनुसूचित जाति / जनजाति / दिव्यांग:</span>
                    <span className="font-bold text-slate-900">{admission.feeDetails.scSt}</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2.5">
                  * शुल्क का भुगतान ऑनलाइन डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग अथवा यूपीआई के माध्यम से किया जा सकता है।
                </p>
              </div>
            )}

            {/* Important Dates Table */}
            {admission.importantDates && admission.importantDates.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>महत्वपूर्ण तिथियां (Important Schedule)</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <tbody>
                      {admission.importantDates.map((d, i) => (
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

            {/* How to apply */}
            {admission.stepsToApply && admission.stepsToApply.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>ऑनलाइन आवेदन कैसे करें? (Step-by-Step Process)</span>
                </h3>
                <ol className="space-y-3 text-sm text-slate-700">
                  {admission.stepsToApply.map((step, idx) => (
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
            {admission.faqs && admission.faqs.length > 0 && (
              <FAQAccordion
                faqs={admission.faqs}
                title={`${admission.courseOrExam} से जुड़े महत्वपूर्ण सवाल (FAQs)`}
              />
            )}

            <ShareButtons title={`${admission.courseOrExam} Online Form 2026`} />

            {/* Related Admissions */}
            {related.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  अन्य महत्वपूर्ण प्रवेश सूचनाएं (Related Admission Updates)
                </h3>
                <div className="space-y-2.5">
                  {related.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => {
                        navigate(`/admission/${r.slug}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] text-blue-700 font-semibold">{r.institution}</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{r.courseOrExam}</h4>
                        <span className="text-[11px] text-rose-600 font-medium">अंतिम तिथि: {r.applicationLastDate}</span>
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
