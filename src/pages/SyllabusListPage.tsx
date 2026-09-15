import React from 'react';
import { BookOpen, Download, ArrowRight, FileText } from 'lucide-react';
import { db } from '../services/db';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { useRouter } from '../context/RouterContext';

export const SyllabusListPage: React.FC = () => {
  const { navigate } = useRouter();
  const syllabuses = db.getSyllabuses();

  return (
    <>
      <SeoHead
        title="परीक्षा सिलेबस 2026 | Sarkari Exam Syllabus & Exam Pattern PDF"
        description="सभी सरकारी प्रतियोगी परीक्षाओं का टॉपिक-वाइज विस्तृत सिलेबस एवं एग्जाम पैटर्न। SSC, Railway, UPSC, Bank, Police भर्ती परीक्षा पाठ्यक्रम पीडीएफ डाउनलोड करें।"
        canonicalUrl="https://sarkarirozgarupdate.com/syllabus"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Syllabus (परीक्षा सिलेबस)' }]} />

        <div className="my-4 pb-4 border-b border-slate-200">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span>विस्तृत परीक्षा सिलेबस एवं पैटर्न (Exam Syllabus PDF)</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            अंक विभाजन, विषयवार पाठ्यक्रम और आधिकारिक सिलेबस पीडीएफ
          </p>
        </div>

        <DisclaimerAlert isDemo={true} compact />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {syllabuses.map((syl) => (
              <div
                key={syl.id}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                    {syl.organization}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {Array.isArray(syl.examPattern) && syl.examPattern.length > 0
                      ? `${syl.examPattern.length} चरण परीक्षा (${syl.examPattern[0].mode || 'CBT'})`
                      : 'नवीनतम परीक्षा पैटर्न'}
                  </span>
                </div>

                <div>
                  <h3
                    onClick={() => navigate(`/syllabus/${syl.slug}`)}
                    className="font-bold text-base sm:text-lg text-slate-900 hover:text-blue-700 transition cursor-pointer mb-1"
                  >
                    {syl.examName} Syllabus 2026
                  </h3>
                  <p className="text-xs text-blue-900 font-semibold mb-2">
                    {syl.examNameHi}
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">परीक्षा मोड व अंक:</span>
                    <span className="font-semibold text-slate-800">
                      {syl.examPattern?.[0] ? `${syl.examPattern[0].mode} (${syl.examPattern[0].totalMarks})` : 'आधिकारिक नियमानुसार'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">शामिल विषय: </span>
                    <span className="text-slate-700">
                      {syl.subjects.map((s) => s.subjectName.split(' ')[0]).join(', ')}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => navigate(`/syllabus/${syl.slug}`)}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                  >
                    <span>विस्तृत टॉपिक देखें</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {syl.pdfDownloadUrl && (
                    <a
                      href={syl.pdfDownloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  )}
                </div>
              </div>
            ))}

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
