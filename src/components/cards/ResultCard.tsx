import React from 'react';
import { Award, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { Result } from '../../types';
import { StatusBadge } from '../common/StatusBadge';
import { useRouter } from '../../context/RouterContext';

interface ResultCardProps {
  result: Result;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const { navigate } = useRouter();

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
            {result.organization}
          </span>
          <StatusBadge status={result.status} size="sm" />
        </div>

        <h3
          onClick={() => navigate(`/results/${result.slug}`)}
          className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition cursor-pointer leading-snug mb-1"
        >
          {result.examName}
        </h3>

        <p className="text-xs text-slate-600 mb-3 font-medium line-clamp-2">
          {result.examNameHi}
        </p>

        <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded mb-3 flex items-center justify-between">
          <span>घोषणा तिथि (Declared):</span>
          <span className="font-bold text-slate-900">{result.resultDate}</span>
        </div>
      </div>

      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => navigate(`/results/${result.slug}`)}
          className="text-xs font-semibold text-slate-700 hover:text-blue-700 inline-flex items-center gap-1"
        >
          <span>कट-ऑफ व मेरिट देखें</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={result.resultUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs"
        >
          <span>Check Result</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
