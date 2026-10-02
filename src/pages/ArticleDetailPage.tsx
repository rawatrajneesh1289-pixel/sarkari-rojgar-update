import React from 'react';
import { Clock, User, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { db } from '../services/db';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { ShareButtons } from '../components/common/ShareButtons';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { useRouter } from '../context/RouterContext';

interface ArticleDetailPageProps {
  slug: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const article = db.getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">लेख उपलब्ध नहीं है</h1>
        <button
          onClick={() => navigate('/articles')}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold"
        >
          सभी लेख देखें
        </button>
      </div>
    );
  }

  const related = db.getArticles().filter((a) => a.id !== article.id);

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: article.featuredImage,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sarkari Rozgar Update',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sarkari-rozgar-update.netlify.app/logo.png',
      },
    },
    description: article.summary,
  };

  return (
    <>
      <SeoHead
        title={`${article.title} | Sarkari Rozgar Update Guide`}
        description={article.summary}
        canonicalUrl={`https://sarkari-rozgar-update.netlify.app/articles/${article.slug}`}
        schema={articleSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Articles', url: '/articles' },
            { label: article.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-3">
          <div className="lg:col-span-2 space-y-6">
            <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 bg-blue-900/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  {article.category}
                </span>
              </div>

              <div className="p-5 sm:p-8 space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  {article.titleHi || article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>{article.author}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.publishedAt}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4 pt-2">
                  <p className="font-semibold text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {article.summary}
                  </p>

                  <div className="prose prose-slate max-w-none text-slate-700 space-y-4 leading-relaxed whitespace-pre-line">
                    {article.content}
                  </div>
                </div>
              </div>
            </article>

            <ShareButtons title={article.title} />

            <FAQAccordion faqs={article.faqs} />

            {related.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  अन्य उपयोगी तैयारी लेख (Related Guides)
                </h3>
                <div className="space-y-3">
                  {related.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => navigate(`/articles/${r.slug}`)}
                      className="p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] text-blue-700 font-semibold">{r.category}</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{r.titleHi || r.title}</h4>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
