import React from 'react';
import {
  Briefcase,
  Award,
  FileCheck2,
  KeyRound,
  Compass,
  GraduationCap,
  School,
  BookOpen,
  FileStack,
  ArrowRight,
} from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

interface CategoryCardItem {
  id: string;
  title: string;
  titleHi: string;
  desc: string;
  count: number;
  link: string;
  iconName: string;
  badgeColor: string;
  iconBg: string;
}

interface CategoryCardProps {
  category: CategoryCardItem;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { navigate } = useRouter();

  const renderIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-blue-700' };
    switch (name) {
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'Award':
        return <Award {...props} />;
      case 'FileCheck2':
        return <FileCheck2 {...props} />;
      case 'KeyRound':
        return <KeyRound {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'School':
        return <School {...props} />;
      case 'BookOpen':
        return <BookOpen {...props} />;
      case 'FileStack':
        return <FileStack {...props} />;
      default:
        return <Briefcase {...props} />;
    }
  };

  return (
    <div
      onClick={() => navigate(category.link)}
      className="bg-white border border-slate-200 rounded-xl p-4.5 hover:border-blue-400 hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-700 group-hover:scale-105 transition border border-blue-100">
            {renderIcon(category.iconName)}
          </div>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50/70 text-blue-900 border border-blue-200/60">
            {category.count}+ अपडेट्स
          </span>
        </div>

        <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition">
          {category.title}
        </h3>
        <p className="text-xs font-medium text-slate-600 mb-1.5">{category.titleHi}</p>
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {category.desc}
        </p>
      </div>

      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-900">
        <span>यहाँ देखें</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
      </div>
    </div>
  );
};
