import React from 'react';
import { BookOpen, Download, ExternalLink, HelpCircle, CheckCircle, Clock, Award, AlertCircle } from 'lucide-react';
import { db } from '../services/db';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { Sidebar } from '../components/layout/Sidebar';
import { ShareButtons } from '../components/common/ShareButtons';

interface SyllabusDetailPageProps {
  slug: string;
}

export const SyllabusDetailPage: React.FC<SyllabusDetailPageProps> = ({ slug }) => {
  const syl = db.getSyllabusBySlug(slug);

  if (!syl) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">पाठ्यक्रम नहीं मिला (Syllabus Not Found)</h2>
        <p className="text-slate-600 text-sm">यह सिलेबस हटा दिया गया है अथवा लिंक अमान्य है।</p>
      </div>
    );
  }

  return (
    <>
      <SeoHead
        title={`${syl.examName} Syllabus 2026 PDF Download - Exam Pattern & Marking Scheme`}
        description={`${syl.examName} विस्तृत पाठ्यक्रम 2026। परीक्षा पैटर्न, अंक विभाजन एवं विषयवार टॉपिक्स की सूची। आधिकारिक पीडीएफ डाउनलोड करें।`}
        canonicalUrl={`https://sarkari-rozgar-update.netlify.app/syllabus/${syl.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Syllabus', href: '/syllabus' },
            { label: syl.examName },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
              <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-100 mb-3 inline-block">
                {syl.organization}
              </span>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                {syl.examName}
              </h1>

              <p className="text-sm sm:text-base text-blue-900 font-semibold mb-4">
                {syl.examNameHi}
              </p>

              {syl.overview && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {syl.overview}
                </p>
              )}
            </div>

            <DisclaimerAlert isDemo={syl.isDemo} />

            {/* Direct Download Box */}
            {syl.pdfDownloadUrl && (
              <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-6 shadow-md text-center">
                <h3 className="text-lg font-bold mb-2">
                  आधिकारिक सिलेबस पीडीएफ डाउनलोड (Download Syllabus PDF)
                </h3>
                <p className="text-xs text-blue-200 mb-4 max-w-lg mx-auto">
                  अपनी तैयारी को व्यवस्थित करने के लिए आधिकारिक सिलेबस डाउनलोड करें।
                </p>
                <a
                  href={syl.pdfDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official Syllabus PDF</span>
                </a>
              </div>
            )}

            {/* Exam Pattern Stages */}
            {syl.examPattern && syl.examPattern.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span>परीक्षा पैटर्न एवं अंक योजना (Exam Pattern & Scheme)</span>
                </h3>

                {syl.examPattern.map((stage, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                      <h4 className="font-bold text-base text-blue-950">{stage.stage}</h4>
                      <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                        मोड: {stage.mode}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                      <div className="p-2.5 bg-slate-50 rounded-lg">
                        <span className="text-slate-500 block">कुल अंक (Total Marks):</span>
                        <span className="font-bold text-slate-800">{stage.totalMarks}</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-lg">
                        <span className="text-slate-500 block">समय अवधि (Time):</span>
                        <span className="font-bold text-slate-800">{stage.totalTime}</span>
                      </div>
                      <div className="p-2.5 bg-rose-50/60 rounded-lg">
                        <span className="text-rose-600 block">नेगेटिव मार्किंग:</span>
                        <span className="font-bold text-rose-800">{stage.negativeMarking}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Selection Process */}
            {syl.selectionProcess && syl.selectionProcess.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span>चयन प्रक्रिया (Selection Process)</span>
                </h3>
                <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {syl.selectionProcess.map((step, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Subjects & Topics */}
            {syl.subjects && syl.subjects.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>विषयवार पाठ्यक्रम (Subject-wise Topics)</span>
                </h3>

                {syl.subjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs"
                  >
                    <h4 className="font-bold text-base text-slate-900 pb-2 mb-3 border-b border-slate-100">
                      {sub.subjectName}
                    </h4>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {sub.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <ShareButtons title={`${syl.examName} Syllabus 2026`} />
          </div>

          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};
