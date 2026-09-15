import React from 'react';
import { Filter, X, RotateCcw } from 'lucide-react';
import { FilterOptions, JobCategory, Qualification, StateOption } from '../../types';

interface FilterPanelProps {
  filters: FilterOptions;
  onChange: (newFilters: FilterOptions) => void;
  onReset: () => void;
  totalFilteredCount: number;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onChange,
  onReset,
  totalFilteredCount,
}) => {
  const qualifications = [
    'All',
    '10th Pass',
    '12th Pass',
    'ITI',
    'Diploma',
    'Graduate',
    'Post Graduate',
  ];

  const categories = [
    'All',
    'Central Government',
    'State Government',
    'Railway',
    'Bank',
    'Police',
    'Defence',
    'Teaching',
    'PSU',
  ];

  const states = [
    'All',
    'All India',
    'Madhya Pradesh',
    'Uttar Pradesh',
    'Rajasthan',
    'Bihar',
    'Maharashtra',
    'Delhi',
  ];

  const statuses = [
    { label: 'All Status', value: 'All' },
    { label: 'आवेदन चालू (Open)', value: 'OPEN' },
    { label: 'अंतिम तिथि निकट (Closing Soon)', value: 'CLOSING_SOON' },
    { label: 'नई भर्ती (New)', value: 'NEW' },
  ];

  const hasActiveFilters =
    filters.qualification !== 'All' ||
    filters.category !== 'All' ||
    filters.state !== 'All' ||
    filters.status !== 'All' ||
    filters.searchQuery !== '';

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs mb-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            नौकरी फ़िल्टर (Filter Government Jobs)
          </h3>
          <span className="text-xs bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
            {totalFilteredCount} उपलब्ध
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-semibold transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>फ़िल्टर हटाएं (Reset)</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Qualification */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            शैक्षणिक योग्यता (Qualification)
          </label>
          <select
            value={filters.qualification}
            onChange={(e) => onChange({ ...filters, qualification: e.target.value })}
            className="w-full text-xs py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:bg-white focus:border-blue-600 outline-hidden transition"
          >
            {qualifications.map((q) => (
              <option key={q} value={q}>
                {q === 'All' ? 'सभी योग्यताएं (All Qualifications)' : q}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            विभाग / श्रेणी (Job Category)
          </label>
          <select
            value={filters.category}
            onChange={(e) => onChange({ ...filters, category: e.target.value })}
            className="w-full text-xs py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:bg-white focus:border-blue-600 outline-hidden transition"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === 'All' ? 'सभी विभाग (All Categories)' : c}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            राज्य / क्षेत्र (State / Region)
          </label>
          <select
            value={filters.state}
            onChange={(e) => onChange({ ...filters, state: e.target.value })}
            className="w-full text-xs py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:bg-white focus:border-blue-600 outline-hidden transition"
          >
            {states.map((s) => (
              <option key={s} value={s}>
                {s === 'All' ? 'अखिल भारतीय व सभी राज्य' : s}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            आवेदन स्थिति (Application Status)
          </label>
          <select
            value={filters.status}
            onChange={(e) => onChange({ ...filters, status: e.target.value })}
            className="w-full text-xs py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:bg-white focus:border-blue-600 outline-hidden transition"
          >
            {statuses.map((st) => (
              <option key={st.value} value={st.value}>
                {st.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
