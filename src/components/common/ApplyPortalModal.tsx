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

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(applyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenDirect = () => {
    try {
      window.open(applyUrl, '_blank', 'noopener,noreferrer');
    } catch (e) {
      console.error(e);
    }
  };

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
              <span className="truncate">{applyUrl}</span>
              <button
                onClick={handleCopy}
                className="shrink-0 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-sans text-xs font-semibold rounded-md border border-slate-300 transition flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'कॉपी हो गया' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
              <a
                href={applyUrl || 'https://www.rrbapply.gov.in/#/auth/landing'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOpenDirect}
                className="w-full sm:flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2"
              >
                <span>सीधे आधिकारिक पोर्टल खोलें (Open Portal)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopy}
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

          {/* Quick Dual Link Options for RRB */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900">Direct Auth Landing Portal</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Active</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 break-all">
                https://www.rrbapply.gov.in/#/auth/landing
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://www.rrbapply.gov.in/#/auth/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg text-center flex items-center justify-center gap-1"
                >
                  <span>Open Landing</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('https://www.rrbapply.gov.in/#/auth/landing');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="py-1.5 px-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-slate-900">RRB Central Official Portal</span>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">Official</span>
              </div>
              <p className="text-[11px] font-mono text-slate-500 break-all">
                https://rrb.gov.in
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://rrb.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg text-center flex items-center justify-center gap-1"
                >
                  <span>Open rrb.gov.in</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('https://rrb.gov.in');
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="py-1.5 px-2.5 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
                >
                  Copy
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

          {/* Quick Step Guide */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>फॉर्म भरने के 4 मुख्य चरण (Quick 4 Steps):</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-900 block mb-0.5">1. खाता बनाएं (Registration)</span>
                <p className="text-slate-600">
                  rrb.gov.in पर जाकर आधार कार्ड व ओटीपी द्वारा न्यू रजिस्ट्रेशन करें।
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-900 block mb-0.5">2. भर्ती का चयन करें</span>
                <p className="text-slate-600">
                  लॉगिन कर "CEN 05/2026 Paramedical Staff" चुनें एवं पद वरीयता भरें।
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-900 block mb-0.5">3. विवरण व दस्तावेज अपलोड</span>
                <p className="text-slate-600">
                  शैक्षणिक योग्यता अंक, सफेद बैकग्राउंड फोटो (30-70KB) व हस्ताक्षर अपलोड करें।
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-blue-900 block mb-0.5">4. फीस भुगतान व रिफंड खाता</span>
                <p className="text-slate-600">
                  ऑनलाइन फीस जमा करें और अपना सही बैंक खाता दर्ज करें ताकि CBT के बाद रिफंड प्राप्त हो सके।
                </p>
              </div>
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
            onClick={handleOpenDirect}
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
