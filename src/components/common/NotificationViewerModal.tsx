import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Copy,
  Check,
  Download,
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(notificationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenDirect = () => {
    try {
      window.open(notificationUrl, '_blank', 'noopener,noreferrer');
    } catch (e) {
      console.error(e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const isRrbJob =
    job?.id === 'job-rrb-paramedical-staff-cen-05-2026' ||
    title.toLowerCase().includes('rrb') ||
    title.toLowerCase().includes('railway');

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
                <span className="text-[11px] text-slate-300">आधिकारिक विज्ञापन</span>
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
              {notificationUrl}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
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
              onClick={handleOpenDirect}
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
            <span>अधिसूचना विवरण (Full Document)</span>
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
            <span>आवेदन गाइड (How to Apply)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-6 text-slate-800 flex-1">
          {activeTab === 'document' && (
            <div className="space-y-6">
              {/* Official Gazette Header Style */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4 sm:p-6 text-center space-y-2">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full uppercase tracking-wider mb-1">
                  भारत सरकार • रेल मंत्रालय • रेलवे भर्ती बोर्ड (RRB)
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 uppercase tracking-tight">
                  GOVERNMENT OF INDIA • MINISTRY OF RAILWAYS
                </h3>
                <h4 className="text-sm sm:text-base font-bold text-blue-900">
                  CENTRALISED EMPLOYMENT NOTICE (CEN) NO. 05/2026
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">
                  RECRUITMENT FOR VARIOUS POSTS IN PARAMEDICAL CATEGORIES (590 VACANCIES)
                </p>
                <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap justify-center gap-4">
                  <span>
                    <strong>Application Window:</strong> 15/09/2026 to 14/10/2026 (23:59 hrs)
                  </span>
                  <span>
                    <strong>Fee Last Date:</strong> 16/10/2026
                  </span>
                  <span>
                    <strong>Modification Window:</strong> 17/10/2026 to 26/10/2026
                  </span>
                </div>
              </div>

              {/* Notice Highlight Box */}
              <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-amber-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>उम्मीदवारों के लिए अति-महत्वपूर्ण दिशा-निर्देश:</span>
                </p>
                <p>
                  1. केवल एक ही रेलवे भर्ती बोर्ड (RRB) के लिए ऑनलाइन आवेदन स्वीकार किया जाएगा।
                  अभ्यर्थी एक से अधिक RRB में आवेदन न करें।
                </p>
                <p>
                  2. परीक्षा शुल्क में छूट: सीबीटी (CBT) परीक्षा में उपस्थित होने वाले अभ्यर्थियों को
                  निर्धारित रिफंड (₹ 400 / ₹ 250) उनके बैंक खाते में सीधे वापस किया जाएगा।
                </p>
              </div>

              {/* Post Wise Vacancy Matrix Table */}
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
                        <th className="p-3">वेतन स्तर (Pay Level)</th>
                        <th className="p-3">आयु सीमा (01/01/2027 को)</th>
                        <th className="p-3">अनिवार्य शैक्षणिक योग्यता (Eligibility)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">
                          Nursing Superintendent (नर्सिंग अधीक्षक)
                        </td>
                        <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60">
                          365
                        </td>
                        <td className="p-3 font-semibold text-slate-700">
                          Level 7 (₹ 44,900/-)
                        </td>
                        <td className="p-3 text-slate-600">20 से 40 वर्ष</td>
                        <td className="p-3 text-slate-600">
                          B.Sc Nursing (4 Years) अथवा GNM (3 Year Course) + Registered Nurse & Midwife
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">
                          Pharmacist Entry Grade (फार्मासिस्ट)
                        </td>
                        <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60">
                          118
                        </td>
                        <td className="p-3 font-semibold text-slate-700">Level 5</td>
                        <td className="p-3 text-slate-600">20 से 35 वर्ष</td>
                        <td className="p-3 text-slate-600">
                          10+2 साइंस + 2 वर्षीय D.Pharma अथवा B.Pharma + फार्मेसी काउंसिल में वैध
                          पंजीकरण
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">
                          Health & Malaria Inspector Gr. II
                        </td>
                        <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60">
                          43
                        </td>
                        <td className="p-3 font-semibold text-slate-700">Level 6</td>
                        <td className="p-3 text-slate-600">18 से 33 वर्ष</td>
                        <td className="p-3 text-slate-600">
                          B.Sc (रसायन विज्ञान सहित) + 1 वर्षीय हेल्थ/सैनिटरी इंस्पेक्टर डिप्लोमा
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">
                          Lab Assistant Grade II (लैब सहायक)
                        </td>
                        <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60">
                          31
                        </td>
                        <td className="p-3 font-semibold text-slate-700">Level 3</td>
                        <td className="p-3 text-slate-600">18 से 33 वर्ष</td>
                        <td className="p-3 text-slate-600">
                          10+2 (साइंस स्ट्रीम) + DMLT (डिप्लोमा इन मेडिकल लैब टेक्नोलॉजी)
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">
                          Radiographer / X-Ray Technician
                        </td>
                        <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60">
                          25
                        </td>
                        <td className="p-3 font-semibold text-slate-700">
                          Level 5 (₹ 29,200/-)
                        </td>
                        <td className="p-3 text-slate-600">19 से 33 वर्ष</td>
                        <td className="p-3 text-slate-600">
                          10+2 (भौतिकी एवं रसायन) + 2 वर्षीय रेडियोग्राफी / एक्स-रे तकनीक डिप्लोमा
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">ECG Technician</td>
                        <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60">
                          4
                        </td>
                        <td className="p-3 font-semibold text-slate-700">
                          Level 4 (₹ 25,500/-)
                        </td>
                        <td className="p-3 text-slate-600">18 से 33 वर्ष</td>
                        <td className="p-3 text-slate-600">
                          10+2 साइंस + ईसीजी लैब टेक्नोलॉजी / कार्डियोलॉजी तकनीशियन सर्टिफिकेट
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">Optometrist (ऑप्टोमेट्रिस्ट)</td>
                        <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60">
                          2
                        </td>
                        <td className="p-3 font-semibold text-slate-700">Level 4</td>
                        <td className="p-3 text-slate-600">18 से 33 वर्ष</td>
                        <td className="p-3 text-slate-600">
                          B.Sc in Ophthalmic Technique अथवा Diploma in Optometry
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">Dialysis Technician</td>
                        <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60">
                          1
                        </td>
                        <td className="p-3 font-semibold text-slate-700">
                          Level 7 (₹ 35,400/-)
                        </td>
                        <td className="p-3 text-slate-600">20 से 33 वर्ष</td>
                        <td className="p-3 text-slate-600">
                          B.Sc + हीमोडायलिसिस में 2-वर्षीय डिप्लोमा अथवा 2 साल का इन-हाउस अनुभव
                        </td>
                      </tr>
                      <tr className="hover:bg-blue-50/50">
                        <td className="p-3 font-bold text-blue-950">
                          Audiologist & Speech Therapist
                        </td>
                        <td className="p-3 text-center font-bold text-blue-700 bg-blue-50/60">
                          1
                        </td>
                        <td className="p-3 font-semibold text-slate-700">Level 5</td>
                        <td className="p-3 text-slate-600">21 से 30 वर्ष</td>
                        <td className="p-3 text-slate-600">
                          Bachelor Degree in Speech and Language Pathology (BASLP)
                        </td>
                      </tr>
                      <tr className="bg-slate-100 font-bold text-slate-900">
                        <td className="p-3">कुल रिक्त पदों की संख्या (Total Posts)</td>
                        <td className="p-3 text-center text-blue-800 text-sm">590</td>
                        <td colSpan={3} className="p-3 text-right text-xs text-slate-500">
                          (अखिल भारतीय जोनल रेलवे भर्ती)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CBT Exam Pattern & Syllabus */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>सीबीटी परीक्षा संरचना एवं सिलेबस (CBT Exam Pattern)</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  इस भर्ती में <strong>सिंगल स्टेज कंप्यूटर आधारित टेस्ट (Single Stage CBT)</strong>{' '}
                  आयोजित किया जाएगा। कुल 100 बहुविकल्पीय प्रश्न (MCQs) होंगे और कुल समय 90 मिनट (दिव्यांग
                  उम्मीदवारों को 120 मिनट) दिया जाएगा।
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <span className="font-bold text-blue-900 block mb-1">
                      1. प्रोफेशनल एबिलिटी (संबंधित विषय)
                    </span>
                    <span className="text-slate-700 font-medium">70 प्रश्न • 70 अंक</span>
                    <p className="text-[11px] text-blue-700 mt-1">
                      नर्सिंग, फार्मेसी, लैब तकनीक आदि मूल विषय
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1">
                      2. सामान्य जागरूकता (GA)
                    </span>
                    <span className="text-slate-700 font-medium">10 प्रश्न • 10 अंक</span>
                    <p className="text-[11px] text-slate-500 mt-1">
                      करंट अफेयर्स, भारतीय इतिहास, भूगोल, राजनीति
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1">
                      3. जनरल अरिथमेटिक व रीजनिंग
                    </span>
                    <span className="text-slate-700 font-medium">10 प्रश्न • 10 अंक</span>
                    <p className="text-[11px] text-slate-500 mt-1">
                      संख्या पद्धति, अनुपात, कोडिंग-डिकोडिंग, तर्कशक्ति
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="font-bold text-slate-900 block mb-1">
                      4. सामान्य विज्ञान (General Science)
                    </span>
                    <span className="text-slate-700 font-medium">10 प्रश्न • 10 अंक</span>
                    <p className="text-[11px] text-slate-500 mt-1">10वीं स्तर की भौतिकी, रसायन व जीव विज्ञान</p>
                  </div>
                </div>

                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-900">
                  ⚠️ <strong>निगेटिव मार्किंग:</strong> प्रत्येक गलत उत्तर के लिए 1/3 अंक काटा जाएगा।
                  न्यूनतम क्वालिफाइंग अंक: UR/EWS - 40%, OBC/SC - 30%, ST - 25%।
                </div>
              </div>

              {/* Fee & Refund Policy */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-xs space-y-2">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-emerald-600" />
                  <span>परीक्षा शुल्क एवं बैंक रिफंड नियम (Application Fee & Refund)</span>
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>
                    <strong>General / OBC / EWS:</strong> ₹ 500/- (CBT में शामिल होने पर ₹ 400/- बैंक
                    चार्ज काटकर अभ्यर्थी के खाते में वापस किए जाएंगे)।
                  </li>
                  <li>
                    <strong>SC / ST / Ex-Servicemen / PwBD / Female / Transgender:</strong> ₹ 250/-
                    (CBT में शामिल होने पर पूरे ₹ 250/- रिफंड किए जाएंगे)।
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'links' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs sm:text-sm text-blue-900">
                <p className="font-bold mb-1">आरआरबी आधिकारिक पोर्टल एवं जोनल वेबसाइट्स:</p>
                <p className="text-xs text-slate-600">
                  रेलवे भर्ती बोर्ड का आधिकारिक पोर्टल{' '}
                  <code className="px-1.5 py-0.5 bg-white border border-blue-200 rounded font-bold">
                    rrb.gov.in
                  </code>{' '}
                  है। नीचे दिए गए सीधे लिंक्स से आप आवेदन व अधिसूचना देख सकते हैं।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 border border-slate-200 rounded-xl bg-white hover:border-blue-400 transition shadow-2xs">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-sm text-slate-900">
                      1. Official Portal (rrb.gov.in)
                    </span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                      Live
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3 font-mono break-all">
                    https://rrb.gov.in
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://rrb.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition"
                    >
                      <span>Open Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('https://rrb.gov.in');
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="px-3 py-2 border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 transition"
                    >
                      {copied ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="p-4 border border-slate-200 rounded-xl bg-white hover:border-blue-400 transition shadow-2xs">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-sm text-slate-900">
                      2. Official Online Application Portal
                    </span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">
                      Direct
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3 font-mono break-all">
                    https://rrb.gov.in
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://rrb.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition"
                    >
                      <span>Open Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('https://rrb.gov.in');
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      }}
                      className="px-3 py-2 border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 transition"
                    >
                      {copied ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Regional RRBs Directory */}
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  आरआरबी क्षेत्रीय आधिकारिक वेबसाइट्स (Zonal RRB Official Links):
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs">
                  {[
                    { name: 'RRB Prayagraj', url: 'https://rrbald.gov.in' },
                    { name: 'RRB Chandigarh', url: 'https://rrbcdg.gov.in' },
                    { name: 'RRB Bhopal', url: 'https://rrbbpl.nic.in' },
                    { name: 'RRB Patna', url: 'https://rrbpatna.gov.in' },
                    { name: 'RRB Kolkata', url: 'https://rrbkolkata.gov.in' },
                    { name: 'RRB Mumbai', url: 'https://rrbmumbai.gov.in' },
                    { name: 'RRB Secunderabad', url: 'https://rrbsecunderabad.gov.in' },
                    { name: 'RRB Chennai', url: 'https://rrbchennai.gov.in' },
                    { name: 'RRB Ahmedabad', url: 'https://rrbahmedabad.gov.in' },
                    { name: 'RRB Ajmer', url: 'https://rrbajmer.gov.in' },
                    { name: 'RRB Bangalore', url: 'https://rrbbnc.gov.in' },
                    { name: 'RRB Gorakhpur', url: 'https://rrbgkp.gov.in' },
                  ].map((rrb, idx) => (
                    <a
                      key={idx}
                      href={rrb.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white border border-slate-200 rounded-md hover:border-blue-400 hover:text-blue-700 transition flex items-center justify-between"
                    >
                      <span className="truncate">{rrb.name}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'steps' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-950">
                <p className="font-bold mb-1">
                  rrb.gov.in पर ऑनलाइन आवेदन करने की 6-चरणीय प्रक्रिया:
                </p>
                <p className="text-xs text-emerald-900">
                  फॉर्म भरने से पहले अपने सभी दस्तावेज, फोटो और बैंक खाता विवरण तैयार रखें ताकि
                  CBT के बाद शुल्क रिफंड में कोई असुविधा न हो।
                </p>
              </div>

              <ol className="space-y-3 text-xs sm:text-sm">
                <li className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-900">Create an Account (खाता बनाएं):</h5>
                    <p className="text-slate-600 mt-1">
                      आधिकारिक पोर्टल <code className="font-bold">rrb.gov.in</code> पर जाएं।
                      "Apply" &gt; "Create an Account" पर क्लिक करें। अपना नाम, जन्मतिथि, पिता का नाम,
                      आधार नंबर, ईमेल और मोबाइल नंबर दर्ज करें और OTP से सत्यापित करें।
                    </p>
                  </div>
                </li>

                <li className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-900">लॉगिन एवं भर्ती अधिसूचना चयन:</h5>
                    <p className="text-slate-600 mt-1">
                      अपने पंजीकृत मोबाइल/ईमेल और पासवर्ड से लॉगिन करें। "Online Application" पर
                      क्लिक कर "CEN 05/2026 Paramedical Categories" का चयन करें।
                    </p>
                  </div>
                </li>

                <li className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-900">
                      आरआरबी व पद वरीयता का चयन (RRB & Post Preference):
                    </h5>
                    <p className="text-slate-600 mt-1">
                      अपनी इच्छानुसार संबंधित जोनल रेलवे/RRB का चयन करें। अपनी योग्यता (नर्सिंग,
                      फार्मासिस्ट, लैब असिस्टेंट आदि) के अनुसार पद की वरीयता (Priority) निर्धारित करें।
                    </p>
                  </div>
                </li>

                <li className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-900">शैक्षणिक एवं तकनीकी योग्यता विवरण:</h5>
                    <p className="text-slate-600 mt-1">
                      10वीं, 12वीं (साइंस), डिग्री/डिप्लोमा (GNM, B.Sc Nursing, D.Pharma, DMLT आदि)
                      का रोल नंबर, बोर्ड/विश्वविद्यालय, उत्तीर्ण वर्ष एवं प्राप्तांक प्रतिशत दर्ज करें।
                    </p>
                  </div>
                </li>

                <li className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-900">फोटो, हस्ताक्षर व प्रमाणपत्र अपलोड:</h5>
                    <p className="text-slate-600 mt-1">
                      सफेद पृष्ठभूमि वाली हालिया पासपोर्ट साइज रंगीन फोटो (30–70 KB) एवं हस्ताक्षर
                      (30–70 KB JPG प्रारूप) अपलोड करें। एससी/एसटी अभ्यर्थी निशुल्क यात्रा पास हेतु
                      जाति प्रमाण पत्र अपलोड करें।
                    </p>
                  </div>
                </li>

                <li className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h5 className="font-bold text-slate-900">फीस भुगतान एवं प्रिंटआउट:</h5>
                    <p className="text-slate-600 mt-1">
                      डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग अथवा यूपीआई के माध्यम से परीक्षा शुल्क
                      का भुगतान करें और भरे हुए फॉर्म का 2 प्रतियों में प्रिंटआउट निकालकर सुरक्षित रख लें।
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            स्रोत: रेलवे भर्ती बोर्ड (RRB) केंद्रीयकृत रोजगार सूचना CEN No. 05/2026
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 border border-slate-300 hover:bg-white text-slate-700 rounded-lg text-xs font-semibold transition flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'लिंक कॉपी हो गई' : 'लिंक कॉपी करें'}</span>
            </button>

            <button
              onClick={handleOpenDirect}
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
