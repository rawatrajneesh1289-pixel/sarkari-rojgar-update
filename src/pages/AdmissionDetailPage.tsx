import React from 'react';
import {
  Calendar,
  Building2,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  CreditCard,
  UserCheck,
  FileText,
  BookOpen,
  Link as LinkIcon,
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
        <p className="text-slate-600 mb-6">यह प्रवेश सूचना अभी उपलब्ध नहीं है अथवा समय-सीमा समाप्त होने के कारण हटा दी गई है।</p>
        <button
          onClick={() => navigate('/admission')}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          सभी सक्रिय प्रवेश सूचनाएं देखें
        </button>
      </div>
    );
  }

  const related = db.getAdmissions().filter((a) => a.id !== admission.id).slice(0, 6);

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
        description={`${admission.courseOrExamHi || admission.courseOrExam} by ${admission.institution}। आवेदन की अंतिम तिथि: ${admission.applicationLastDate}। योग्यता, शुल्क, परीक्षा पैटर्न एवं सीधा ऑनलाइन आवेदन लिंक।`}
        canonicalUrl={`https://sarkari-rozgar-update.netlify.app/admission/${admission.slug}`}
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
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                    Active Admission Form
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
                    {admission.level}
                  </span>
                </div>
              </div>

              {admission.advtNo && (
                <p className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 inline-block px-2.5 py-1 rounded-md mb-2.5">
                  विज्ञापन / परीक्षा संख्या: {admission.advtNo}
                </p>
              )}

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
                  <div className="sm:col-span-2">
                    <span className="text-slate-500 block">कुल सीटें / प्रवेश क्षेत्र (Total Seats / Scope):</span>
                    <span className="font-bold text-blue-800 text-xs sm:text-sm">{admission.totalSeats}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 block">अद्यतन तिथि (Updated):</span>
                  <span className="font-bold text-slate-700 text-xs sm:text-sm">{admission.updatedAt}</span>
                </div>
                {admission.ageLimit && (
                  <div className="sm:col-span-3 pt-2 border-t border-blue-100">
                    <span className="text-slate-500 block">आयु सीमा (Age Limit Criteria):</span>
                    <span className="font-bold text-slate-800 text-xs sm:text-sm">{admission.ageLimit}</span>
                  </div>
                )}
              </div>
            </div>

            <DisclaimerAlert isDemo={admission.isDemo} />

            {/* Important Dates & Application Fee Side-by-Side (Sarkari Result Style) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Important Dates Table */}
              {admission.importantDates && admission.importantDates.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                  <h3 className="text-base font-bold text-slate-900 mb-3.5 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>महत्वपूर्ण तिथियां (Important Dates)</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {admission.importantDates.map((d, i) => (
                      <li key={i} className="flex items-start justify-between gap-2 pb-2 border-b border-slate-100 last:border-0 last:pb-0">
                        <span className="text-slate-700 font-medium">{d.event}:</span>
                        <span className="font-bold text-blue-950 text-right shrink-0">{d.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Application Fee Box */}
              {admission.feeDetails && (
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-3.5 pb-2 border-b border-slate-100 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <span>आवेदन शुल्क (Application Fee)</span>
                    </h3>
                    <div className="space-y-3 text-xs sm:text-sm">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block mb-1 font-medium">सामान्य / ओबीसी / ईडब्ल्यूएस (Gen / OBC / EWS):</span>
                        <span className="font-bold text-slate-900">{admission.feeDetails.generalOBC}</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-500 block mb-1 font-medium">अनुसूचित जाति / जनजाति / दिव्यांग / महिला:</span>
                        <span className="font-bold text-slate-900">{admission.feeDetails.scSt}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-3 pt-2.5 border-t border-slate-100">
                    <strong>भुगतान माध्यम:</strong>{' '}
                    {admission.feeDetails.paymentMode ||
                      'शुल्क का भुगतान ऑनलाइन डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग अथवा यूपीआई (UPI) के माध्यम से करें।'}
                  </p>
                </div>
              )}
            </div>

            {/* Eligibility & Course Overview */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-blue-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-600" />
                <span>शैक्षणिक योग्यता एवं पात्रता (Eligibility Criteria)</span>
              </h3>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm text-slate-800 leading-relaxed font-medium">
                {admission.eligibility}
              </div>

              {admission.description && (
                <div className="pt-2">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">संक्षिप्त विवरण (Admission Overview & Details):</h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-blue-50/30 p-4 rounded-xl border border-blue-100">
                    {admission.description}
                  </p>
                </div>
              )}
            </div>

            {/* Course-wise / Stream-wise Eligibility & Seats Table */}
            {admission.courseWiseEligibility && admission.courseWiseEligibility.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>कोर्स / स्ट्रीम-वार पात्रता एवं सीट विवरण (Course / Paper Details)</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800">
                        <th className="py-2.5 px-3 border border-slate-200 font-bold">कोर्स / पेपर का नाम</th>
                        <th className="py-2.5 px-3 border border-slate-200 font-bold">सीटें / मुख्य विवरण</th>
                        <th className="py-2.5 px-3 border border-slate-200 font-bold">निर्धारित शैक्षणिक योग्यता</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admission.courseWiseEligibility.map((item, idx) => (
                        <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50/70">
                          <td className="py-3 px-3 border border-slate-200 font-bold text-blue-950">{item.courseName}</td>
                          <td className="py-3 px-3 border border-slate-200 font-semibold text-emerald-800">{item.seatsOrInfo}</td>
                          <td className="py-3 px-3 border border-slate-200 text-slate-700 leading-relaxed">{item.eligibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Exam Pattern & Selection Process */}
            {admission.examPattern && admission.examPattern.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3.5 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>परीक्षा पैटर्न एवं चयन प्रक्रिया (Exam Pattern & Marking Scheme)</span>
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {admission.examPattern.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 bg-slate-50/80 p-3 rounded-xl border border-slate-200/80">
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Required Documents */}
            {admission.requiredDocuments && admission.requiredDocuments.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3.5 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>आवेदन हेतु आवश्यक दस्तावेज (Required Documents)</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                  {admission.requiredDocuments.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How to apply */}
            {admission.stepsToApply && admission.stepsToApply.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3.5 flex items-center gap-2">
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

            {/* Important Links Table (Sarkari Result Style) */}
            <div className="bg-white border-2 border-blue-900/20 rounded-2xl overflow-hidden shadow-xs">
              <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white px-5 py-4 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-amber-400" />
                  <span>महत्वपूर्ण लिंक्स (Some Useful Important Links)</span>
                </h3>
                <span className="text-[11px] bg-white/15 px-2.5 py-0.5 rounded-full font-semibold">
                  Direct Official Links
                </span>
              </div>

              <div className="divide-y divide-slate-200 text-xs sm:text-sm">
                {admission.importantLinks && admission.importantLinks.length > 0 ? (
                  admission.importantLinks.map((lnk, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-blue-50/40 transition"
                    >
                      <div>
                        <span className="font-bold text-slate-900 block">{lnk.label}</span>
                        {lnk.note && <span className="text-xs text-slate-500">{lnk.note}</span>}
                      </div>
                      <a
                        href={lnk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs transition shrink-0 shadow-2xs"
                      >
                        <span>Click Here</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="p-3.5 sm:px-5 flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-900">Apply Online (ऑनलाइन आवेदन करें)</span>
                      <a
                        href={admission.applyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs transition"
                      >
                        <span>Apply Online</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <div className="p-3.5 sm:px-5 flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-900">Official Notification & Website</span>
                      <a
                        href={admission.officialNotificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg text-xs transition"
                      >
                        <span>Click Here</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* FAQs Accordion */}
            {admission.faqs && admission.faqs.length > 0 && (
              <FAQAccordion
                faqs={admission.faqs}
                title={`${admission.courseOrExam} से जुड़े महत्वपूर्ण प्रश्न (FAQs)`}
              />
            )}

            <ShareButtons title={`${admission.courseOrExam} Online Form`} />

            {/* Related Admissions */}
            {related.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  अन्य सक्रिय प्रवेश फॉर्म (Other Active Admission Forms)
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
