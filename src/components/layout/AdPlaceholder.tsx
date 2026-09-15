import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AdPlaceholderProps {
  type: 'Top Banner Ad' | 'In-Content Ad' | 'Sidebar Ad' | 'Mobile Sticky Ad';
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ type, className = '' }) => {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  if (type === 'Mobile Sticky Ad') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 text-slate-300 border-t border-slate-700 py-1.5 px-3 md:hidden shadow-lg flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium mr-1.5 border border-slate-600 px-1 rounded">विज्ञापन</span>
          <span className="text-xs text-slate-200">Google AdSense / Sponsor Slot (Responsive 320x50)</span>
        </div>
        <button
          onClick={() => setClosed(true)}
          className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
          aria-label="Close Ad"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  if (type === 'Top Banner Ad') {
    return (
      <div className={`w-full max-w-5xl mx-auto my-3 px-2 ${className}`}>
        <div className="relative border border-dashed border-slate-300 bg-slate-50/80 rounded-lg p-3 text-center transition hover:bg-slate-100/80">
          <span className="absolute top-1 right-2 text-[10px] tracking-wider uppercase text-slate-400">
            विज्ञापन / Advertisement (728x90)
          </span>
          <div className="py-3 sm:py-4">
            <p className="text-xs text-slate-500 font-medium">Google AdSense Banner Placement</p>
            <p className="text-[11px] text-slate-400">Reserved responsive slot for display ads</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'Sidebar Ad') {
    return (
      <div className={`w-full my-4 ${className}`}>
        <div className="border border-dashed border-slate-300 bg-slate-50/90 rounded-xl p-4 text-center">
          <span className="inline-block text-[10px] tracking-wider uppercase text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded mb-2">
            विज्ञापन / Ad (300x250)
          </span>
          <div className="h-44 flex flex-col items-center justify-center text-slate-500">
            <p className="text-xs font-semibold">Sidebar Ad Placement</p>
            <p className="text-[11px] text-slate-400 mt-1">Non-intrusive sponsor banner</p>
          </div>
        </div>
      </div>
    );
  }

  // In-Content Ad
  return (
    <div className={`w-full my-6 ${className}`}>
      <div className="border border-dashed border-slate-300 bg-slate-50/70 rounded-xl p-4 text-center">
        <span className="inline-block text-[10px] tracking-wider uppercase text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded mb-1">
          विज्ञापन / Sponsored Content
        </span>
        <div className="py-3">
          <p className="text-xs text-slate-500 font-medium">In-Article Native Ad Slot</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Optimized for clean readability and AdSense compliance</p>
        </div>
      </div>
    </div>
  );
};
