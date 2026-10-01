import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  Globe,
  HelpCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Job } from '../../types';

interface ApplyPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  job?: Job;
  applyUrl: string;
  title: string;
}

export const ApplyPortalModal: React.FC<ApplyPortalModalProps> = ({
  isOpen,
  onClose,
  job,
  applyUrl,
  title,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedSecondary, setCopiedSecondary] = useState(false);

  if (!isOpen) return null;

  const targetApplyUrl =
    applyUrl && applyUrl !== '#'
      ? applyUrl
      : job?.applyUrl || job?.importantLinks.find((l) => l.type === 'APPLY')?.url || job?.officialWebsite || 'https://esb.mp.gov.in';

  const officialWebsiteUrl = job?.officialWebsite || 'https://esb.mp.gov.in';

  const handleCopy = (url: string, isSec: boolean = false) => {
    navigator.clipboard.writeText(url);
    if (isSec) {
      setCopiedSecondary(true);
      setTimeout(() => setCopiedSecondary(false), 2500);
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleOpenDirect = (url: string) => {
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (e) {
      console.error(e);
    }
  };

  // Extract application guidelines specific to the current exam
  const stepsToDisplay =
    job?.howToApplySteps && job.howToApplySteps.length > 0
      ? job.howToApplySteps.slice(0, 4)
      : [
          'आधिकारिक भर्ती पोर्टल पर जाकर नया प्रोफाइल / रजिस्ट्रेशन (New Registration) पूर्ण करें।',
          'पंजीकृत क्रेडेंशियल्स से लॉगिन करके संबंधित पद व वरीयता का चयन करें।',
          'सभी अनिवार्य शैक्षणिक योग्यता विवरण, फोटो व हस्ताक्षर निर्धारित प्रारूप में अपलोड करें।',
          'ऑनलाइन परीक्षा शुल्क का भुगतान करें और भरे हुए आवेदन पत्र का प्रिंटआउट सुरक्षित रखें।',
        ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-blue-900 text-white px-5 py-4 flex items-center justify-between border-b border-blue-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-700/50 border border-blue-500/40 text-blue-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">
                  Direct Apply Gateway
                </span>
                <span className="text-xs text-blue-200">ऑनलाइन आवेदन पोर्टल</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-tight line-clamp-1 mt-0.5">
                {title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-blue-300 hover:text-white hover:bg-blue-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto space-y-5 text-slate-800">
          {/* Main Direct Action Card */}
          <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50/50 border-2 border-blue-200 rounded-xl space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>आधिकारिक आवेदन पोर्टल (Official Apply Portal)</span>
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Portal</span>
              </span>
            </div>

            <div className="p-3 bg-white border border-blue-200 rounded-lg flex items-center justify-between gap-3 font-mono text-xs sm:text-sm text-blue-950 font-bold break-all shadow-2xs">
              <span className="truncate">{targetApplyUrl}</span>
              <button
                onClick={() => handleCopy(targetApplyUrl, false)}
                className="shrink-0 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-sans text-xs font-semibold rounded-md border border-slate-300 transition flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'कॉपी हो गया' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
              <a
                href={targetApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleOpenDirect(targetApplyUrl)}
                className="w-full sm:flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2"
              >
                <span>सीधे आधिकारिक पोर्टल खोलें (Open Portal)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => handleCopy(targetApplyUrl, false)}
                className={`w-full sm:w-auto py-3 px-4 font-bold rounded-xl text-sm border transition flex items-center justify-center gap-2 ${
                  copied
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                    : 'bg-white border-slate-300 hover:bg-slate-50 text-slate-800'
                }`}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '✓ लिंक कॉपी हो गई' : 'लिंक कॉपी करें'}</span>
              </button>
            </div>
          </div>

          {/* Quick Dual Link Options for this Recruitment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900">
                  {job?.organization ? `${job.organization.slice(0, 24)}... Apply Link` : 'Direct Apply Link'}
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Active</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 break-all">
                {targetApplyUrl}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={targetApplyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg text-center flex items-center justify-center gap-1"
                >
                  <span>Open Apply Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => handleCopy(targetApplyUrl, false)}
                  className="py-1.5 px-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900">Official Board Website</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">Official</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 break-all">
                {officialWebsiteUrl}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg text-center flex items-center justify-center gap-1"
                >
                  <span>Open Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => handleCopy(officialWebsiteUrl, true)}
                  className="py-1.5 px-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
                >
                  {copiedSecondary ? '✓' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          {/* Fallback Notice for iframe/preview */}
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>सुझाव (Important Note):</strong> यदि आपके ब्राउज़र के पॉप-अप ब्लॉकर अथवा ऐपलेट
              प्रीव्यू में क्लिक करने पर नई विंडो नहीं खुली है, तो ऊपर दिए गए{' '}
              <strong>'लिंक कॉपी करें'</strong> बटन पर क्लिक करें और लिंक को सीधे अपने क्रोम (Chrome),
              सफारी या फ़ायरफ़ॉक्स ब्राउज़र के नए टैब में पेस्ट (Paste) करके खोलें।
            </div>
          </div>

          {/* Quick Step Guide - Dynamically rendered from the specific Exam Guidelines */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{job?.title ? `${job.postName || job.title} - आवेदन चरण:` : 'फॉर्म भरने के मुख्य चरण:'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {stepsToDisplay.map((step, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-blue-900 block mb-0.5">चरण {idx + 1}:</span>
                  <p className="text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates Recap */}
          {job && (
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex flex-wrap items-center justify-between gap-2">
              <span>
                <strong>आवेदन प्रारंभ:</strong> {job.applicationStartDate}
              </span>
              <span>
                <strong>अंतिम तिथि:</strong>{' '}
                <span className="text-rose-700 font-bold">{job.applicationLastDate}</span>
              </span>
              <span>
                <strong>फीस अंतिम तिथि:</strong> {job.feeLastDate}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-5 py-3 border-t border-slate-200 flex items-center justify-end gap-2 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-slate-300 hover:bg-white text-slate-700 rounded-lg text-xs font-semibold transition"
          >
            बंद करें (Close)
          </button>
          <button
            onClick={() => handleOpenDirect(targetApplyUrl)}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition flex items-center gap-1.5"
          >
            <span>पोर्टल पर जाएं</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
