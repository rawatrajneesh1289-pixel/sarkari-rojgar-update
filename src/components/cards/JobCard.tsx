import React from 'react';
import { Calendar, Users, GraduationCap, Building2, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { Job } from '../../types';
import { StatusBadge } from '../common/StatusBadge';
import { useRouter } from '../../context/RouterContext';

interface JobCardProps {
  job: Job;
  compact?: boolean;
}

export const JobCard: React.FC<JobCardProps> = ({ job, compact = false }) => {
  const { navigate } = useRouter();

  const applyLink = job.importantLinks.find((l) => l.type === 'APPLY')?.url || 'https://ssc.gov.in';

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-blue-400 hover:shadow-md transition flex flex-col justify-between group relative overflow-hidden">
      {/* Top Tag & Status */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 flex items-center gap-1">
              <Building2 className="w-3 h-3 text-blue-600" />
              <span className="truncate max-w-[180px] sm:max-w-[240px]">{job.organization}</span>
            </span>
            <span className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
              {job.state}
            </span>
          </div>

          <StatusBadge status={job.status} size="sm" />
        </div>

        {/* Post Title */}
        <h3
          onClick={() => navigate(`/jobs/${job.slug}`)}
          className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition cursor-pointer leading-snug mb-1"
        >
          {job.title}
        </h3>

        <p className="text-xs text-slate-600 mb-3 font-medium">
          {job.titleHi}
        </p>

        {/* Key Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-3">
          <div>
            <span className="text-slate-600 block text-[10px]">कुल पद (Vacancy):</span>
            <span className="font-bold text-slate-900">{job.totalVacancy}</span>
          </div>
          <div>
            <span className="text-slate-600 block text-[10px]">योग्यता (Eligibility):</span>
            <span className="font-bold text-blue-800 truncate block">{job.qualification}</span>
          </div>
          <div>
            <span className="text-slate-600 block text-[10px]">आयु सीमा (Age):</span>
            <span className="font-bold text-slate-900">{job.minAge} - {job.maxAge}</span>
          </div>
          <div>
            <span className="text-slate-600 block text-[10px]">अंतिम तिथि (Last Date):</span>
            <span className="font-bold text-rose-800">{job.applicationLastDate}</span>
          </div>
        </div>

        {/* Demo banner indicator */}
        {job.isDemo && (
          <div className="text-[10px] text-amber-900 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mb-3 inline-block">
            DEMO DATA — कृपया आधिकारिक सूचना देखें
          </div>
        )}
      </div>

      {/* Card Actions */}
      <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
        <div className="text-[11px] text-slate-500 flex items-center gap-1">
          <Clock className="w-3 h-3 text-slate-400" />
          <span>अपडेट: {job.updatedAt}</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => navigate(`/jobs/${job.slug}`)}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
          >
            <span>विवरण देखें (Details)</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              try {
                window.open(applyLink, '_blank', 'noopener,noreferrer');
              } catch (err) {
                // ignore
              }
            }}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition shadow-xs"
          >
            <span>Apply Online</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
