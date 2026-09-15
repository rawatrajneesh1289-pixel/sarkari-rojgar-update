import React from 'react';
import {
  Briefcase,
  Award,
  FileCheck2,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Download,
} from 'lucide-react';
import { db } from '../../services/db';
import { useRouter } from '../../context/RouterContext';
import { AdPlaceholder } from './AdPlaceholder';

export const Sidebar: React.FC = () => {
  const { navigate } = useRouter();

  const jobs = db.getJobs().slice(0, 5);
  const results = db.getResults().slice(0, 4);
  const admitCards = db.getAdmitCards().slice(0, 4);

  const officialLinks = [
    { name: 'UPSC Official Portal', url: 'https://upsc.gov.in' },
    { name: 'Staff Selection Commission (SSC)', url: 'https://ssc.gov.in' },
    { name: 'Railway Recruitment Control Board', url: 'https://indianrailways.gov.in' },
    { name: 'MP Employees Selection Board (ESB)', url: 'https://esb.mp.gov.in' },
    { name: 'IBPS Banking Examination Portal', url: 'https://ibps.in' },
    { name: 'National Scholarship Portal (NSP)', url: 'https://scholarships.gov.in' },
  ];

  const popularExams = [
    'SSC CGL 2026',
    'Railway NTPC',
    'MP Police Constable',
    'UPSC CSE IAS',
    'CTET 2026',
    'IBPS Bank PO',
  ];

  return (
    <aside className="space-y-6">
      {/* Quick Search Tag Cloud */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
        <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-1.5 pb-2 border-b border-slate-100">
          <TrendingUp className="w-4 h-4 text-amber-500" />
          <span>ट्रेंडिंग परीक्षाएं (Trending Exams)</span>
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {popularExams.map((exam) => (
            <button
              key={exam}
              onClick={() => navigate(`/search?q=${encodeURIComponent(exam)}`)}
              className="text-xs bg-slate-100 hover:bg-blue-100 hover:text-blue-900 text-slate-700 px-2.5 py-1 rounded-md transition font-medium"
            >
              {exam}
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar Ad Placement */}
      <AdPlaceholder type="Sidebar Ad" />

      {/* Latest Jobs Box */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="bg-blue-950 text-white px-4 py-3 flex items-center justify-between">
          <h4 className="font-bold text-sm flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span>नवीनतम सरकारी नौकरी (Latest Jobs)</span>
          </h4>
          <button
            onClick={() => navigate('/jobs')}
            className="text-[11px] text-amber-300 hover:underline"
          >
            सभी देखें
          </button>
        </div>
        <div className="p-3 divide-y divide-slate-100">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => navigate(`/jobs/${job.slug}`)}
              className="py-2.5 hover:bg-slate-50 transition cursor-pointer group px-1"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] bg-blue-50 text-blue-800 font-bold px-1.5 py-0.5 rounded">
                  {job.status}
                </span>
                <span className="text-[11px] text-slate-500 truncate">{job.organization}</span>
              </div>
              <h5 className="text-xs font-semibold text-slate-900 group-hover:text-blue-700 transition line-clamp-2 leading-snug">
                {job.titleHi || job.title}
              </h5>
              <div className="text-[10px] text-rose-600 mt-1 font-medium">
                अंतिम तिथि: {job.applicationLastDate}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Admit Cards Box */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="bg-blue-950 text-white px-4 py-3 flex items-center justify-between">
          <h4 className="font-bold text-sm flex items-center gap-2">
            <Download className="w-4 h-4 text-amber-400" />
            <span>एडमिट कार्ड (Admit Card Updates)</span>
          </h4>
          <button
            onClick={() => navigate('/admit-card')}
            className="text-[11px] text-amber-300 hover:underline"
          >
            सभी देखें
          </button>
        </div>
        <div className="p-3 divide-y divide-slate-100">
          {admitCards.map((card) => (
            <div
              key={card.id}
              onClick={() => navigate(`/admit-card/${card.slug}`)}
              className="py-2.5 hover:bg-slate-50 transition cursor-pointer group px-1"
            >
              <span className="text-[10px] text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded font-medium border border-blue-100">
                {card.organization}
              </span>
              <h5 className="text-xs font-semibold text-slate-900 group-hover:text-blue-700 transition line-clamp-2 leading-snug mt-1">
                {card.examNameHi || card.examName}
              </h5>
              <div className="text-[10px] text-slate-500 mt-1">
                परीक्षा: {card.examDate}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Results Box */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="bg-blue-950 text-white px-4 py-3 flex items-center justify-between">
          <h4 className="font-bold text-sm flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>ताजा रिजल्ट (Latest Results)</span>
          </h4>
          <button
            onClick={() => navigate('/results')}
            className="text-[11px] text-amber-300 hover:underline"
          >
            सभी देखें
          </button>
        </div>
        <div className="p-3 divide-y divide-slate-100">
          {results.map((res) => (
            <div
              key={res.id}
              onClick={() => navigate(`/results/${res.slug}`)}
              className="py-2.5 hover:bg-slate-50 transition cursor-pointer group px-1"
            >
              <span className="text-[10px] text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded font-medium border border-blue-100">
                {res.organization}
              </span>
              <h5 className="text-xs font-semibold text-slate-900 group-hover:text-blue-700 transition line-clamp-2 leading-snug mt-1">
                {res.examNameHi || res.examName}
              </h5>
              <div className="text-[10px] text-slate-500 mt-1">
                घोषित: {res.resultDate}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Links Box */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
        <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-1.5 pb-2 border-b border-slate-100">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>प्रमुख आधिकारिक पोर्टल (Official Links)</span>
        </h4>
        <ul className="space-y-2">
          {officialLinks.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-700 hover:text-blue-700 flex items-center justify-between p-1.5 rounded hover:bg-slate-50 transition"
              >
                <span className="truncate pr-2">{item.name}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
