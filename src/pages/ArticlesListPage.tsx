import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { db } from '../services/db';
import { ArticleCard } from '../components/cards/ArticleCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';

export const ArticlesListPage: React.FC = () => {
  const articles = db.getArticles();

  return (
    <>
      <SeoHead
        title="परीक्षा तैयारी गाइड व महत्वपूर्ण लेख | Sarkari Exam Preparation Tips & Articles"
        description="सरकारी नौकरी और प्रतियोगी परीक्षाओं की तैयारी के लिए सर्वश्रेष्ठ रणनीति, आवश्यक दस्तावेज गाइड, आरक्षण एवं आयु सीमा नियम और विशेषज्ञ सुझाव।"
        canonicalUrl="https://sarkarirozgarupdate.com/articles"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Articles & Guides (तैयारी लेख)' }]} />

        <div className="my-4 pb-4 border-b border-slate-200">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span>परीक्षा तैयारी गाइड व नियम (Preparation Articles)</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            रणनीति, समय प्रबंधन, दस्तावेज चेकलिस्ट और आधिकारिक नियम संबंधी उपयोगी लेख
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {articles.map((art) => (
                <ArticleCard key={art.id} article={art} />
              ))}
            </div>

            <AdPlaceholder type="In-Content Ad" />
          </div>

          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
