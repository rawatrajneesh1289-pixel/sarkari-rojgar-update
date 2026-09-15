import React from 'react';
import { FileCheck2, Calendar, Download, ArrowRight } from 'lucide-react';
import { AdmitCard } from '../../types';
import { StatusBadge } from '../common/StatusBadge';
import { useRouter } from '../../context/RouterContext';

interface AdmitCardItemProps {
  card: AdmitCard;
}

export const AdmitCardItem: React.FC<AdmitCardItemProps> = ({ card }) => {
  const { navigate } = useRouter();

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
            {card.organization}
          </span>
          <StatusBadge status={card.status} size="sm" />
        </div>

        <h3
          onClick={() => navigate(`/admit-card/${card.slug}`)}
          className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition cursor-pointer leading-snug mb-1"
        >
          {card.examName}
        </h3>

        <p className="text-xs text-slate-600 mb-3 font-medium line-clamp-2">
          {card.examNameHi}
        </p>

        <div className="space-y-1 text-xs bg-slate-50 p-2.5 rounded mb-3">
          <div className="flex items-center justify-between text-slate-600">
            <span>परीक्षा तिथि (Exam Date):</span>
            <span className="font-bold text-slate-900">{card.examDate}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span>एडमिट कार्ड जारी:</span>
            <span className="font-semibold text-blue-900">{card.releaseDate}</span>
          </div>
        </div>
      </div>

      <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => navigate(`/admit-card/${card.slug}`)}
          className="text-xs font-semibold text-slate-700 hover:text-blue-700 inline-flex items-center gap-1"
        >
          <span>निर्देश व डाउनलोड प्रक्रिया</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={card.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs"
        >
          <span>Download</span>
          <Download className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
