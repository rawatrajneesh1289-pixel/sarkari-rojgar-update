import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

interface DisclaimerAlertProps {
  isDemo?: boolean;
  compact?: boolean;
}

export const DisclaimerAlert: React.FC<DisclaimerAlertProps> = ({ isDemo = true, compact = false }) => {
  return (
    <div className={`rounded-xl border ${compact ? 'p-3 text-xs' : 'p-4 text-sm'} bg-amber-50/70 border-amber-200 text-amber-950 shadow-xs mb-4`}>
      <div className="flex items-start gap-2.5">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          {isDemo && (
            <div className="inline-block bg-amber-200/90 text-amber-900 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-1">
              DEMO DATA — कृपया आधिकारिक अधिसूचना से पुष्टि करें
            </div>
          )}
          <p className="font-medium text-amber-950 leading-relaxed">
            <strong>महत्वपूर्ण सूचना:</strong> Sarkari Rozgar Update (SRU) एक स्वतंत्र गैर-सरकारी सूचना पोर्टल है। यह किसी भी सरकारी विभाग या आयोग की आधिकारिक वेबसाइट नहीं है। यहाँ दी गई समस्त जानकारी केवल अभ्यर्थियों की सहायता एवं जागरूकता हेतु सार्वजनिक स्रोतों से संकलित की गई है। कृपया आवेदन शुल्क भुगतान अथवा फॉर्म सबमिट करने से पहले संबंधित आयोग/मंत्रालय की मूल आधिकारिक अधिसूचना का अनिवार्य रूप से अध्ययन करें।
          </p>
        </div>
      </div>
    </div>
  );
};

export const TrustBadgeBar: React.FC = () => {
  return (
    <div className="bg-slate-100 border-y border-slate-200 py-2 px-4 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>100% सत्यापित एवं आधिकारिक स्रोतों से संकलित जानकारी</span>
      </div>
      <div className="flex items-center gap-4 text-slate-600">
        <span>बिना किसी भ्रामक विज्ञापन के शुद्ध सूचना</span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">नियमित रूप से अद्यतन (Updated Daily)</span>
      </div>
    </div>
  );
};
