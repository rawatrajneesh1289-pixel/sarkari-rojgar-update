import React from 'react';
import { Compass, CheckCircle, ArrowRight, ExternalLink, Sparkles, Clock, Calendar } from 'lucide-react';
import { SarkariYojana } from '../../types';
import { useRouter } from '../../context/RouterContext';

interface SchemeCardProps {
  scheme: SarkariYojana;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({ scheme }) => {
  const { navigate } = useRouter();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
          {scheme.sector ? (
            <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/70">
              {scheme.sector}
            </span>
          ) : (
            <span className="text-[11px] font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              {scheme.category} श्रेणी
            </span>
          )}
          
          {scheme.timelineType && (
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                scheme.hasLastDate === false
                  ? 'bg-slate-100 text-slate-800 border border-slate-200'
                  : scheme.timelineType === 'SEASONAL'
                  ? 'bg-amber-100 text-amber-900 border border-amber-200'
                  : 'bg-blue-100 text-blue-900 border border-blue-200'
              }`}
            >
              <Clock className="w-3 h-3" />
              <span>
                {scheme.hasLastDate === false
                  ? 'सदा चालू (No Last Date)'
                  : scheme.timelineType === 'SEASONAL'
                  ? 'सीजनल / समय-सीमा'
                  : 'चरणबद्ध (Phase-wise)'}
              </span>
            </span>
          )}
        </div>

        <h3
          onClick={() => navigate(`/sarkari-yojana/${scheme.slug}`)}
          className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition cursor-pointer leading-snug mb-1"
        >
          {scheme.schemeName}
        </h3>

        <p className="text-xs text-amber-800 font-bold mb-2">
          {scheme.schemeNameHi}
        </p>

        {scheme.timelineNotice && (
          <div className="mb-2 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="line-clamp-1">{scheme.timelineNotice}</span>
          </div>
        )}

        {scheme.tagline && (
          <div className="mb-2.5 px-2.5 py-1.5 rounded-lg bg-blue-50/70 border border-blue-200/60 text-[11px] font-semibold text-blue-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="line-clamp-1">{scheme.tagline}</span>
          </div>
        )}

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
          {scheme.objective}
        </p>

        <div className="bg-blue-50/40 p-3 rounded-xl border border-blue-100/70 mb-3 space-y-1">
          <p className="text-[11px] font-bold text-blue-950">मुख्य लाभ एवं विशेषताएं:</p>
          <ul className="text-xs text-slate-700 space-y-1">
            {scheme.benefits.slice(0, 2).map((b, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <button
          onClick={() => navigate(`/sarkari-yojana/${scheme.slug}`)}
          className="text-xs font-bold text-slate-700 hover:text-blue-700 inline-flex items-center gap-1 transition"
        >
          <span>पात्रता व आवेदन प्रक्रिया</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={scheme.applyOnlineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-bold shadow-xs transition"
        >
          <span>Apply Online</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
