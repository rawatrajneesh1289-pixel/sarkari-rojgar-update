import React, { useState } from 'react';
import {
  Calendar,
  IndianRupee,
  Users,
  GraduationCap,
  FileText,
  Building2,
  Clock,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Award,
  BookOpen,
  HelpCircle,
  Download,
  ExternalLink,
  Copy,
  Check,
  Eye,
  Globe,
  Edit3,
} from 'lucide-react';
import { db } from '../services/db';
import { StatusBadge } from '../components/common/StatusBadge';
import { ImportantLinks } from '../components/common/ImportantLinks';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { ShareButtons } from '../components/common/ShareButtons';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { NotificationViewerModal } from '../components/common/NotificationViewerModal';
import { ApplyPortalModal } from '../components/common/ApplyPortalModal';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { useRouter } from '../context/RouterContext';

interface JobDetailPageProps {
  slug: string;
}

export const JobDetailPage: React.FC<JobDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const [copiedLink, setCopiedLink] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const job = db.getJobBySlug(slug);

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">भर्ती विवरण उपलब्ध नहीं है</h1>
        <p className="text-slate-600 mb-6">यह भर्ती सूचना हटा दी गई है अथवा गलत लिंक का चयन किया गया है।</p>
        <button
          onClick={() => navigate('/jobs')}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          सभी भर्तियां देखें
        </button>
      </div>
    );
  }

  const relatedJobs = db.getJobs().filter((j) => j.id !== job.id).slice(0, 3);

  // JobPosting Schema
  const jobSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.shortDescription,
    identifier: {
      '@type': 'PropertyValue',
      name: job.organization,
      value: job.id,
    },
    datePosted: job.publishedAt,
    validThrough: job.applicationLastDate,
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: job.organization,
      sameAs: job.importantLinks?.find((l) => l.type === 'WEBSITE')?.url || 'https://sarkari-rozgar-update.netlify.app',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressRegion: job.state,
        addressCountry: 'IN',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        unitText: 'MONTH',
      },
    },
  };

  return (
    <>
      <SeoHead
        title={`${job.title} - Notification, Apply Online, Eligibility`}
        description={`${job.titleHi || job.title}: कुल ${job.totalVacancy} पद। योग्यता: ${job.qualification}। अंतिम तिथि: ${job.applicationLastDate}। ऑनलाइन आवेदन लिंक एवं विस्तृत जानकारी।`}
        canonicalUrl={`https://sarkari-rozgar-update.netlify.app/jobs/${job.slug}`}
        schema={jobSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Latest Jobs', url: '/jobs' },
            { label: job.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-3">
          {/* Main Article Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-100 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{job.organization}</span>
                </span>
                <div className="flex items-center gap-2">
                  {db.isAdminLoggedIn() && (
                    <button
                      onClick={() => navigate(`/admin/edit-job/${job.id}`)}
                      className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 transition"
                      title="एडमिन: इस भर्ती को तुरंत संपादित करें"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>एडिट भर्ती (Admin Edit)</span>
                    </button>
                  )}
                  <StatusBadge status={job.status} />
                </div>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                {job.title}
              </h1>

              <p className="text-sm sm:text-base text-blue-900 font-semibold mb-4">
                {job.titleHi}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>अंतिम अपडेट: {job.updatedAt}</span>
                </span>
                <span>•</span>
                <span>श्रेणी: {job.category}</span>
                <span>•</span>
                <span>कार्यक्षेत्र: {job.state}</span>
              </div>

              {/* Quick Direct Action Bar for Active Links */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 sm:gap-3">
                <a
                  href={job.importantLinks.find((l) => l.type === 'APPLY')?.url || job.applyUrl || job.officialWebsite || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowApplyModal(true)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Apply Online (आवेदन करें)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setShowNotificationModal(true)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition"
                >
                  <Eye className="w-4 h-4" />
                  <span>विस्तृत अधिसूचना पढ़ें (Notice)</span>
                </button>

                <button
                  onClick={() => {
                    const applyLink =
                      job.importantLinks.find((l) => l.type === 'APPLY')?.url ||
                      job.applyUrl ||
                      job.officialWebsite ||
                      window.location.href;
                    navigator.clipboard.writeText(applyLink);
                    setCopiedLink(true);
                    setTimeout(() => setCopiedLink(false), 2500);
                  }}
                  className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-xl border transition ${
                    copiedLink
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? 'लिंक कॉपी हो गई!' : 'Copy Portal Link'}</span>
                </button>
              </div>
            </div>

            {/* Disclaimer Alert */}
            <DisclaimerAlert isDemo={job.isDemo} />

            {/* Summary Brief Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                <span>संक्षिप्त विवरण (Short Summary)</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {job.shortDescription}
              </p>
            </div>

            {/* Top In-Content Ad */}
            <AdPlaceholder type="In-Content Ad" />

            {/* Important Dates & Application Fee (2 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Important Dates */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100 text-blue-900">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>महत्वपूर्ण तिथियां (Important Dates)</span>
                </h3>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-600">आवेदन शुरू तिथि:</span>
                    <span className="font-bold text-slate-900">{job.applicationStartDate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-600">आवेदन अंतिम तिथि:</span>
                    <span className="font-bold text-rose-700">{job.applicationLastDate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-600">फीस भुगतान अंतिम तिथि:</span>
                    <span className="font-bold text-slate-900">{job.feeLastDate}</span>
                  </div>
                  {job.correctionLastDate && (
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-600">फॉर्म सुधार तिथि:</span>
                      <span className="font-semibold text-amber-700">{job.correctionLastDate}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1">
                    <span className="text-slate-600">परीक्षा तिथि (Exam Date):</span>
                    <span className="font-bold text-blue-800">{job.examDate}</span>
                  </div>
                </div>
              </div>

              {/* Application Fee */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2 pb-2 border-b border-slate-100 text-blue-900">
                  <IndianRupee className="w-4 h-4 text-blue-600" />
                  <span>आवेदन शुल्क (Application Fee)</span>
                </h3>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-600">General / OBC / EWS:</span>
                    <span className="font-bold text-slate-900">{job.feeGeneralObcEws}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-600">SC / ST / PH:</span>
                    <span className="font-bold text-blue-700">{job.feeScStPh}</span>
                  </div>
                  {job.feeFemale && (
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-600">महिला (Female):</span>
                      <span className="font-bold text-blue-700">{job.feeFemale}</span>
                    </div>
                  )}
                  <div className="pt-2 text-[11px] text-slate-500">
                    <strong>भुगतान का माध्यम:</strong> {job.paymentMode}
                  </div>
                </div>
              </div>
            </div>

            {/* Age Limit & Eligibility */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                <Users className="w-5 h-5 text-blue-600" />
                <span>आयु सीमा एवं शैक्षणिक योग्यता (Age Limit & Eligibility)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-xl">
                <div>
                  <span className="text-slate-500 block">न्यूनतम आयु:</span>
                  <span className="font-bold text-slate-900 text-sm">{job.minAge} वर्ष</span>
                </div>
                <div>
                  <span className="text-slate-500 block">अधिकतम आयु:</span>
                  <span className="font-bold text-slate-900 text-sm">{job.maxAge} वर्ष</span>
                </div>
                <div>
                  <span className="text-slate-500 block">आयु गणना तिथि व छूट:</span>
                  <span className="font-semibold text-slate-800 text-xs">{job.ageCalculationDate} ({job.ageRelaxationDetails})</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase text-slate-700 tracking-wider">
                  शैक्षणिक योग्यता (Educational Qualification):
                </h4>
                <p className="text-sm text-slate-800 font-medium bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                  {job.qualification}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold text-slate-800 block mb-1">वेतनमान (Salary / Pay Scale):</span>
                  <span className="text-blue-700 font-semibold">{job.salaryScale}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold text-slate-800 block mb-1">कुल रिक्त पद (Total Vacancies):</span>
                  <span className="text-blue-800 font-bold">{job.totalVacancy}</span>
                </div>
              </div>
            </div>

            {/* Post-wise Vacancy Breakdown Table */}
            {job.postWiseVacancies && job.postWiseVacancies.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs overflow-hidden">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>पदवार रिक्तियों का विवरण (Post-wise Vacancy Details)</span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-200 rounded-lg">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-semibold">
                      <tr>
                        <th className="p-2.5 border-b">पद का नाम (Post Name)</th>
                        <th className="p-2.5 border-b text-center">कुल पद (Total)</th>
                        <th className="p-2.5 border-b">अनिवार्य योग्यता (Eligibility)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {job.postWiseVacancies.map((p, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-2.5 font-medium">{p.postName}</td>
                          <td className="p-2.5 text-center font-bold text-blue-700">{p.totalPosts}</td>
                          <td className="p-2.5 text-slate-600">{p.eligibility}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Selection Process */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>चयन प्रक्रिया (Selection Process)</span>
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {job.selectionProcess.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Apply Step-by-Step */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>ऑनलाइन आवेदन कैसे करें (How to Apply Step-by-Step)</span>
              </h3>
              <ol className="space-y-2.5 text-sm text-slate-700">
                {job.howToApplySteps.map((step, idx) => (
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
                  आवेदन के लिए आवश्यक दस्तावेज (Documents Required):
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.requiredDocuments.map((doc, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md border border-slate-200 font-medium"
                    >
                      ✓ {doc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Important Links Table */}
            <ImportantLinks links={job.importantLinks} examOrJobTitle={job.title} job={job} />

            {/* Social Sharing */}
            <ShareButtons title={job.title} />

            {/* FAQ Section */}
            <FAQAccordion faqs={job.faqs} />

            {/* Related Jobs */}
            {relatedJobs.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  अन्य संबंधित सरकारी नौकरियां (Related Jobs)
                </h3>
                <div className="space-y-3">
                  {relatedJobs.map((rj) => (
                    <div
                      key={rj.id}
                      onClick={() => navigate(`/jobs/${rj.slug}`)}
                      className="p-3 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-slate-50 transition cursor-pointer flex items-center justify-between gap-3"
                    >
                      <div>
                        <span className="text-[10px] text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">
                          {rj.organization}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                          {rj.titleHi || rj.title}
                        </h4>
                        <span className="text-[11px] text-rose-600 font-medium">
                          अंतिम तिथि: {rj.applicationLastDate}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Top Header Triggered Modals */}
      <NotificationViewerModal
        isOpen={showNotificationModal}
        onClose={() => setShowNotificationModal(false)}
        job={job}
        notificationUrl={job.importantLinks.find((l) => l.type === 'NOTIFICATION')?.url || job.notificationUrl || job.officialWebsite || '#'}
        title={job.title}
      />

      <ApplyPortalModal
        isOpen={showApplyModal}
        onClose={() => setShowApplyModal(false)}
        job={job}
        applyUrl={job.importantLinks.find((l) => l.type === 'APPLY')?.url || job.applyUrl || job.officialWebsite || '#'}
        title={job.title}
      />
    </>
  );
};
