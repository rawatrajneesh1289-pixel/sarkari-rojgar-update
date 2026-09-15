import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Article } from '../../types';
import { useRouter } from '../../context/RouterContext';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { navigate } = useRouter();

  return (
    <div
      onClick={() => navigate(`/articles/${article.slug}`)}
      className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
    >
      <div>
        <div className="h-40 overflow-hidden relative bg-slate-100">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <span className="absolute top-2.5 left-2.5 bg-blue-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
            {article.category}
          </span>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700 transition leading-snug line-clamp-2 mb-1.5">
            {article.titleHi || article.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
            {article.summary}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-slate-400" />
          <span>{article.readTime}</span>
        </div>
        <span className="font-semibold text-blue-600 group-hover:text-blue-800 flex items-center gap-1">
          <span>पूरा पढ़ें</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition" />
        </span>
      </div>
    </div>
  );
};
