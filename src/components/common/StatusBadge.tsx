import React from 'react';
import { JobStatus } from '../../types';

interface StatusBadgeProps {
  status: JobStatus | 'Released' | 'Expected Soon' | 'Delayed' | 'Declared' | string;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const getBadgeStyle = () => {
    switch (status) {
      case 'NEW':
        return 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse';
      case 'OPEN':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'CLOSING_SOON':
        return 'bg-rose-100 text-rose-900 border-rose-300 font-semibold';
      case 'CLOSED':
        return 'bg-slate-100 text-slate-600 border-slate-300';
      case 'Released':
      case 'Declared':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300 font-semibold';
      case 'Expected Soon':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'Delayed':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'NEW':
        return 'नया / NEW';
      case 'OPEN':
        return 'आवेदन चालू / OPEN';
      case 'CLOSING_SOON':
        return 'अंतिम तिथि निकट / CLOSING SOON';
      case 'CLOSED':
        return 'आवेदन समाप्त / CLOSED';
      case 'Released':
        return 'जारी / Released';
      case 'Declared':
        return 'घोषित / Declared';
      case 'Expected Soon':
        return 'शीघ्र उपलब्ध / Coming Soon';
      case 'Delayed':
        return 'स्थगित / Postponed';
      default:
        return status;
    }
  };

  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-xs md:text-sm px-2.5 py-1';

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium rounded-full border whitespace-nowrap ${sizeClass} ${getBadgeStyle()}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
      {getStatusLabel()}
    </span>
  );
};
