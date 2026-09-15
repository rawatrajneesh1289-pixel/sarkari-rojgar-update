import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

interface Crumb {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigate } = useRouter();

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-3 md:px-0 text-xs md:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
      <ol className="flex items-center gap-1.5">
        <li className="flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {item.url && !isLast ? (
                <button
                  onClick={() => navigate(item.url!)}
                  className="hover:text-blue-600 transition truncate max-w-[200px]"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-slate-800 font-medium truncate max-w-[260px] md:max-w-md">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
