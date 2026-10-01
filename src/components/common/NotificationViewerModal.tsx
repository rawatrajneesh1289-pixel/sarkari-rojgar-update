import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Copy,
  Check,
  Printer,
  FileText,
  Calendar,
  IndianRupee,
  Award,
  CheckCircle2,
  AlertCircle,
  Building2,
  BookOpen,
  Globe,
  HelpCircle,
  Clock,
  Briefcase,
} from 'lucide-react';
import { Job } from '../../types';

interface NotificationViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  job?: Job;
  notificationUrl: string;
  title: string;
}

export const NotificationViewerModal: React.FC<NotificationViewerModalProps> = ({
  isOpen,
  onClose,
  job,
  notificationUrl,
  title,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'document' | 'links' | 'steps'>('document');

  if (!isOpen) return null;

  const targetNotificationUrl =
    notificationUrl && notificationUrl !== '#'
      ? notificationUrl
      : job?.notificationUrl ||
        job?.importantLinks.find((l) => l.type === 'NOTIFICATION')?.url ||
        job?.officialWebsite ||
        'https://esb.mp.gov.in';

  const handleCopyLink = (url: string = targetNotificationUrl) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenDirect = (url: string = targetNotificationUrl) => {
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (e) {
      console.error(e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const isRrbJob =
    job?.id === 'job-rrb-paramedical-staff-cen-05-2026' ||
    (job?.organization && job.organization.toLowerCase().includes('railway')) ||
    (!job && (title.toLowerCase().includes('rrb') || title.toLowerCase().includes('railway')));

  const linksToDisplay =
    job?.importantLinks && job.importantLinks.length > 0
      ? job.importantLinks
      : [
          {
            label: 'Download Official Notification PDF',
            url: targetNotificationUrl,
            type: 'NOTIFICATION' as const,
            isExternal: true,
          },
          {
            label: 'Official Website Portal',
            url: job?.officialWebsite || targetNotificationUrl,
            type: 'WEBSITE' as const,
            isExternal: true,
          },
        ];

  const stepsToDisplay =
    job?.howToApplySteps && job.howToApplySteps.length > 0
      ? job.howToApplySteps
      : [
          'आधिकारिक पोर्टल पर जाकर विस्तृत अधिसूचना (Notification Rulebook) ध्यानपूर्वक पढ़ें।',
          'पोर्टल पर "New Registration" अथवा प्रोफाइल पंजीयन लिंक पर क्लिक करके अपना रजिस्ट्रेशन पूर्ण करें।',
          'पंजीकृत क्रेडेंशियल्स के साथ लॉगिन कर संबंधित पद के लिए आवेदन पत्र भरें।',
          'सभी आवश्यक शैक्षणिक अंकसूचियां, कंप्यूटर दक्षता/टाइपिंग प्रमाण पत्र व पासपोर्ट फोटो अपलोड करें।',
          'ऑनलाइन परीक्षा शुल्क का भुगतान करें और भरे हुए आवेदन पत्र की रसीद प्रिंट करके सुरक्षित रखें।',
        ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white border border-slate-200 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-600/30 border border-blue-400/30 text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-400/30">
                  Official Notification Reader
                </span>
                <span className="text-[11px] text-slate-300">आधिकारिक विज्ञापन एवं नियमपुस्तिका</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight line-clamp-1 mt-0.5">
                {title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Document"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Action & Link Status Bar */}
        <div className="bg-blue-50 border-b border-blue-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-blue-950 font-medium">
            <Globe className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="truncate max-w-xs sm:max-w-md font-mono text-[11px]">
              {targetNotificationUrl}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopyLink(targetNotificationUrl)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold text-xs transition ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border border-blue-300 text-blue-900 hover:bg-blue-100'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '✓ लिंक कॉपी हो गई' : 'Copy URL'}</span>
            </button>

            <button
              onClick={() => handleOpenDirect(targetNotificationUrl)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold text-xs shadow-xs transition"
            >
              <span>सीधे पोर्टल खोलें</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100 px-5 pt-2 border-b border-slate-200 flex gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('document')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'document'
                ? 'border-blue-600 text-blue-900 bg-white rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>अधिसूचना विवरण (Notification Details)</span>
          </button>
          <button
            onClick={() => setActiveTab('links')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'links'
                ? 'border-blue-600 text-blue-900 bg-white rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>आधिकारिक पोर्टल्स व लिंक्स (Official Links)</span>
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'steps'
                ? 'border-blue-600 text-blue-900 bg-white rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>आवेदन गाइड (How to Apply Guidelines)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-6 text-slate-800 flex-1">
          {activeTab === 'document' && (
            <div className="space-y-6">
              {/* Official Gazette Header Style */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4 sm:p-6 text-center space-y-2">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full uppercase tracking-wider mb-1">
                  {job?.organization || 'Official Recruitment Notification'}
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                  {job?.organizationHi || job?.organization || 'आधिकारिक भर्ती विज्ञापन'}
                </h3>
                <h4 className="text-sm sm:text-base font-bold text-blue-900">
                  {job?.title || title}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  {job?.shortDescriptionHi || job?.shortDescription}
                </p>
                <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap justify-center gap-4">
                  {job?.applicationStartDate && (
                    <span>
                      <strong>आवेदन प्रारंभ:</strong> {job.applicationStartDate}
                    </span>
                  )}
                  {job?.applicationLastDate && (
                    <span>
                      <strong>अंतिम तिथि:</strong>{' '}
                      <span className="text-rose-700 font-bold">{job.applicationLastDate}</span>
                    </span>
                  )}
                  {job?.feeLastDate && (
                    <span>
                      <strong>शुल्क अंतिम तिथि:</strong> {job.feeLastDate}
                    </span>
                  )}
                  {job?.examDate && (
                    <span>
                      <strong>परीक्षा तिथि:</strong> {job.examDate}
                    </span>
                  )}
                </div>
              </div>

              {/* Notice Highlight Box */}
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>उम्मीदवारों के लिए अति-महत्वपूर्ण दिशा-निर्देश:</span>
                </p>
                <p>
                  1. केवल आधिकारिक पोर्टल ({job?.officialWebsite || 'Official Portal'}) के माध्यम से ही ऑनलाइन
                  आवेदन स्वीकार किए जाएंगे। किसी भी अनधिकृत लिंक पर निजी क्रेडेंशियल्स दर्ज न करें।
                </p>
                <p>
                  2. आवेदन शुल्क, आयु सीमा और शैक्षणिक योग्यता के संबंध में विभाग द्वारा जारी विस्तृत
                  नियमपुस्तिका (Rulebook) के सभी नियमों का अनुपालन अनिवार्य है।
                </p>
                {job?.ageRelaxationDetails && (
                  <p>
                    3. <strong>आयु सीमा छूट:</strong> {job.ageRelaxationDetails}
                  </p>
                )}
              </div>

              {/* Post Wise Vacancy Matrix Table */}
              {job?.postWiseVacancies && job.postWiseVacancies.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>पदवार रिक्तियां, वेतनमान एवं योग्यता तालिका (Post-wise Matrix)</span>
                  </h4>

                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3">पद का नाम (Post Name)</th>
                          <th className="p-3 text-center">कुल पद</th>
                          <th className="p-3">वेतनमान (Salary Scale)</th>
                          <th className="p-3">अनिवार्य शैक्षणिक योग्यता (Eligibility)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {job.postWiseVacancies.map((vacancy, idx) => (
                          <tr key={idx} className="hover:bg-blue-50/50">
                            <td className="p-3 font-bold text-blue-950">{vacancy.postName}</td>
                            <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60 whitespace-nowrap">
                              {vacancy.totalPosts}
                            </td>
                            <td className="p-3 font-semibold text-slate-700">
                              {job.salaryScale || 'नियमपुस्तिका अनुसार'}
                            </td>
                            <td className="p-3 text-slate-600">{vacancy.eligibility}</td>
                          </tr>
                        ))}
                        <tr className="bg-slate-100 font-bold text-slate-900">
                          <td className="p-3">कुल पदों की संख्या (Total Vacancies)</td>
                          <td className="p-3 text-center text-blue-800 text-sm">
                            {job.totalVacancy}
                          </td>
                          <td colSpan={2} className="p-3 text-right text-xs text-slate-500">
                            श्रेणी: {job.category} • कार्यक्षेत्र: {job.state}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Selection Process */}
              {job?.selectionProcess && job.selectionProcess.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>चयन प्रक्रिया (Selection Process)</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {job.selectionProcess.map((step, idx) => (
                      <li key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-slate-800">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Fee & Refund Policy */}
              {job && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-xs space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-emerald-600" />
                    <span>आवेदन शुल्क एवं भुगतान विवरण (Application Fee)</span>
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700">
                    <li>
                      <strong>General / OBC / EWS:</strong> {job.feeGeneralObcEws}
                    </li>
                    <li>
                      <strong>SC / ST / PwD / Reserved:</strong> {job.feeScStPh}
                    </li>
                    {job.feeFemale && (
                      <li>
                        <strong>महिला अभ्यर्थी (Female Candidates):</strong> {job.feeFemale}
                      </li>
                    )}
                    <li>
                      <strong>भुगतान का माध्यम:</strong> {job.paymentMode}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'links' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs sm:text-sm text-blue-900">
                <p className="font-bold mb-1">
                  {job?.organization || 'भर्ती बोर्ड'} आधिकारिक पोर्टल्स एवं महत्वपूर्ण लिंक्स:
                </p>
                <p className="text-xs text-slate-600">
                  इस भर्ती का आधिकारिक पोर्टल{' '}
                  <code className="px-1.5 py-0.5 bg-white border border-blue-200 rounded font-bold font-mono">
                    {job?.officialWebsite || targetNotificationUrl}
                  </code>{' '}
                  है। नीचे दिए गए सीधे लिंक्स से आप आवेदन, आधिकारिक अधिसूचना व पाठ्यक्रम देख सकते हैं।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {linksToDisplay.map((lnk, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-slate-200 rounded-xl bg-white hover:border-blue-400 transition shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-sm text-slate-900">
                          {idx + 1}. {lnk.label}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            lnk.type === 'APPLY'
                              ? 'bg-emerald-100 text-emerald-800'
                              : lnk.type === 'NOTIFICATION'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {lnk.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-3 font-mono break-all">
                        {lnk.url}
                      </p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <a
                        href={lnk.url}
                        target={lnk.isExternal ? '_blank' : '_self'}
                        rel={lnk.isExternal ? 'noopener noreferrer' : undefined}
                        className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition"
                      >
                        <span>Open Link</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => handleCopyLink(lnk.url)}
                        className="px-3 py-2 border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 transition"
                      >
                        {copied ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Board Specific Information Card */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 text-xs">
                <h4 className="font-bold text-slate-900 mb-1">आधिकारिक सत्यापन सूचना (Official Verification):</h4>
                <p className="text-slate-600">
                  उम्मीदवारों को सलाह दी जाती है कि आवेदन करने से पहले विभाग ({job?.organization || 'संबंधित भर्ती बोर्ड'}) के आधिकारिक पोर्टल पर जारी मूल नियमपुस्तिका (Rulebook) से सभी पात्रता शर्तों की पुनः पुष्टि कर लें।
                </p>
              </div>
            </div>
          )}

          {activeTab === 'steps' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950">
                <p className="font-bold mb-1">
                  {job?.title || 'भर्ती'} पर ऑनलाइन आवेदन करने की चरणबद्ध प्रक्रिया:
                </p>
                <p className="text-xs text-emerald-900">
                  फॉर्म भरने से पहले अपने सभी आवश्यक दस्तावेज, फोटो, हस्ताक्षर एवं शैक्षणिक प्रमाण पत्र तैयार रखें ताकि आवेदन में कोई त्रुटि न हो।
                </p>
              </div>

              <ol className="space-y-3 text-xs sm:text-sm">
                {stepsToDisplay.map((step, idx) => (
                  <li key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="space-y-1">
                      <h5 className="font-bold text-slate-900">चरण {idx + 1} (Step {idx + 1}):</h5>
                      <p className="text-slate-700 leading-relaxed">{step}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {job?.requiredDocuments && job.requiredDocuments.length > 0 && (
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                  <h5 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>आवश्यक दस्तावेज सूची (Required Documents Checklist):</span>
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {job.requiredDocuments.map((doc, idx) => (
                      <li key={idx} className="p-2 bg-slate-50 border border-slate-200 rounded-md flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            स्रोत: {job?.organization || 'आधिकारिक भर्ती बोर्ड'} अधिसूचना पोर्टल
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopyLink(targetNotificationUrl)}
              className="px-4 py-2 border border-slate-300 hover:bg-white text-slate-700 rounded-lg text-xs font-semibold transition flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'लिंक कॉपी हो गई' : 'लिंक कॉपी करें'}</span>
            </button>

            <button
              onClick={() => handleOpenDirect(targetNotificationUrl)}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition flex items-center gap-1.5"
            >
              <span>आधिकारिक पोर्टल पर जाएं</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
