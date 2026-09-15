import React, { useState } from 'react';
import {
  ExternalLink,
  Download,
  Globe,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  Eye,
  AlertCircle,
  Share2,
} from 'lucide-react';
import { ImportantLinkItem, Job } from '../../types';
import { useRouter } from '../../context/RouterContext';
import { NotificationViewerModal } from './NotificationViewerModal';
import { ApplyPortalModal } from './ApplyPortalModal';

interface ImportantLinksProps {
  links: ImportantLinkItem[];
  examOrJobTitle: string;
  job?: Job;
}

export const ImportantLinks: React.FC<ImportantLinksProps> = ({
  links,
  examOrJobTitle,
  job,
}) => {
  const { navigate } = useRouter();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedNotificationUrl, setSelectedNotificationUrl] = useState('');
  const [selectedApplyUrl, setSelectedApplyUrl] = useState('');

  const getLinkIcon = (type: ImportantLinkItem['type']) => {
    switch (type) {
      case 'APPLY':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      case 'NOTIFICATION':
        return <Download className="w-4 h-4 text-blue-600" />;
      case 'WEBSITE':
        return <Globe className="w-4 h-4 text-indigo-600" />;
      case 'SYLLABUS':
      case 'ADMIT_CARD':
      case 'RESULT':
        return <FileText className="w-4 h-4 text-purple-600" />;
      default:
        return <ExternalLink className="w-4 h-4 text-blue-600" />;
    }
  };

  const getHindiSublabel = (type: ImportantLinkItem['type']) => {
    switch (type) {
      case 'APPLY':
        return 'यहाँ से ऑनलाइन फॉर्म भरें (Active Application Portal)';
      case 'NOTIFICATION':
        return 'विस्तृत आधिकारिक विज्ञापन पढ़ें व डाउनलोड करें (Official CEN PDF)';
      case 'WEBSITE':
        return 'विभाग का अधिकृत मुख्य पोर्टल (Official Portal)';
      case 'SYLLABUS':
        return 'विस्तृत परीक्षा सिलेबस एवं पैटर्न देखें (Syllabus)';
      default:
        return 'आधिकारिक सत्यापित लिंक (Official Resource)';
    }
  };

  const handleCopy = (url: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2500);
  };

  const handleLinkClick = (link: ImportantLinkItem) => {
    // 1. Attempt direct window.open first
    try {
      if (link.isExternal) {
        window.open(link.url, '_blank', 'noopener,noreferrer');
      }
    } catch (err) {
      console.warn('Direct popup open attempt caught:', err);
    }

    // 2. Open dedicated helper modal for instant in-app action/reading
    if (link.type === 'NOTIFICATION') {
      setSelectedNotificationUrl(link.url);
      setIsNotificationModalOpen(true);
    } else if (link.type === 'APPLY') {
      setSelectedApplyUrl(link.url);
      setIsApplyModalOpen(true);
    } else if (!link.isExternal) {
      navigate(link.url);
    }
  };

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-amber-400/20 rounded-lg text-amber-400">
              <ExternalLink className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                महत्वपूर्ण लिंक्स (Important Direct Links)
              </h3>
              <p className="text-[11px] text-slate-300">
                100% सत्यापित एवं सक्रिय आधिकारिक लिंक्स (Active & Verified)
              </p>
            </div>
          </div>
          <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-bold border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All Links Active</span>
          </span>
        </div>

        {/* Informative Helper Notice */}
        <div className="p-3 sm:p-4 bg-amber-50/60 border-b border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>महत्वपूर्ण सूचना:</strong> यदि आपके ब्राउज़र में पॉप-अप ब्लॉकर के कारण लिंक पर
            क्लिक करने पर नई विंडो नहीं खुलती है, तो <strong>'अधिसूचना पढ़ें'</strong> बटन दबाकर पूरा
            विज्ञापन सीधे इसी पेज पर पढ़ें अथवा <strong>'Copy Link'</strong> दबाकर लिंक को अपने ब्राउज़र
            के नए टैब में खोलें।
          </div>
        </div>

        {/* Links List */}
        <div className="divide-y divide-slate-100">
          {links.map((link, idx) => {
            const isCopied = copiedIndex === idx;

            return (
              <div
                key={idx}
                className="p-3.5 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-slate-50 transition"
              >
                {/* Left Side: Icon & Title */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 shrink-0 mt-0.5 border border-slate-200">
                    {getLinkIcon(link.type)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-bold text-slate-900 text-sm sm:text-base">
                        {link.label}
                      </p>
                      {link.type === 'APPLY' && (
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200">
                          Active Now
                        </span>
                      )}
                      {link.type === 'NOTIFICATION' && (
                        <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full border border-blue-200">
                          PDF Available
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      {getHindiSublabel(link.type)}
                    </p>
                    {link.isExternal && (
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5 truncate max-w-xs sm:max-w-md">
                        {link.url}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Side: Interactive Action Buttons */}
                <div className="shrink-0 flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  {/* Copy Link Button */}
                  {link.isExternal && (
                    <button
                      onClick={(e) => handleCopy(link.url, idx, e)}
                      title="लिंक कॉपी करें"
                      className={`px-3 py-2 rounded-lg text-xs font-semibold border transition flex items-center justify-center gap-1.5 ${
                        isCopied
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                          : 'bg-white border-slate-300 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>कॉपी हो गया!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  )}

                  {/* Primary Action Button */}
                  {link.type === 'NOTIFICATION' ? (
                    <div className="flex items-center gap-1.5 w-full sm:w-auto">
                      <button
                        onClick={() => {
                          setSelectedNotificationUrl(link.url);
                          setIsNotificationModalOpen(true);
                        }}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-xs transition"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>अधिसूचना पढ़ें (View Notice)</span>
                      </button>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setSelectedNotificationUrl(link.url);
                          setIsNotificationModalOpen(true);
                        }}
                        title="सीधे नई विंडो में खोलें"
                        className="inline-flex items-center justify-center p-2 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ) : link.type === 'APPLY' ? (
                    <div className="flex items-center gap-1.5 w-full sm:w-auto">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          setSelectedApplyUrl(link.url);
                          setIsApplyModalOpen(true);
                        }}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-wide bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-xs transition"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Apply Online (आवेदन करें)</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ) : link.isExternal ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleLinkClick(link)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-wide bg-slate-800 hover:bg-slate-900 text-white shadow-xs transition"
                    >
                      <span>यहाँ क्लिक करें (Open Link)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => navigate(link.url)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold tracking-wide bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition"
                    >
                      <span>देखें (View Here)</span>
                      <FileText className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Official Notification Reader Modal */}
      <NotificationViewerModal
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        job={job}
        notificationUrl={selectedNotificationUrl || 'https://rrb.gov.in'}
        title={examOrJobTitle}
      />

      {/* Apply Online Gateway Modal */}
      <ApplyPortalModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        job={job}
        applyUrl={selectedApplyUrl || 'https://rrb.gov.in'}
        title={examOrJobTitle}
      />
    </>
  );
};
