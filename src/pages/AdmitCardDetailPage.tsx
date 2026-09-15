import React from 'react';
import {
  FileCheck2,
  Calendar,
  Building2,
  Download,
  ShieldAlert,
  ArrowRight,
  HelpCircle,
  Clock,
  AlertCircle,
  ExternalLink,
  Users,
  Briefcase,
} from 'lucide-react';
import { db } from '../services/db';
import { StatusBadge } from '../components/common/StatusBadge';
import { ShareButtons } from '../components/common/ShareButtons';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { useRouter } from '../context/RouterContext';

interface AdmitCardDetailPageProps {
  slug: string;
}

export const AdmitCardDetailPage: React.FC<AdmitCardDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const card = db.getAdmitCardBySlug(slug);

  if (!card) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">एडमिट कार्ड उपलब्ध नहीं है</h1>
        <p className="text-slate-600 mb-6">यह जानकारी अभी उपलब्ध नहीं है या हटा दी गई है।</p>
        <button
          onClick={() => navigate('/admit-card')}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold"
        >
          सभी एडमिट कार्ड देखें
        </button>
      </div>
    );
  }

  const related = db.getAdmitCards().filter((c) => c.id !== card.id).slice(0, 5);

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `${card.examName} Admit Card 2026`,
    description: `${card.examNameHi || card.examName}: परीक्षा तिथि ${card.examDate}। आधिकारिक एडमिट कार्ड डाउनलोड लिंक एवं निर्देश।`,
    organizer: {
      '@type': 'Organization',
      name: card.organization,
      url: card.officialNotificationUrl,
    },
    startDate: card.examDate.includes('/') ? card.examDate.split(' ')[0] : '2026-09-15',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  };

  return (
    <>
      <SeoHead
        title={`${card.examName} Admit Card 2026 - Hall Ticket & Exam City Link`}
        description={`${card.examNameHi || card.examName}: परीक्षा तिथि ${card.examDate}। प्रवेश पत्र जारी स्थिति ${card.releaseDate}। डाउनलोड करने की प्रक्रिया एवं सीधा लिंक।`}
        canonicalUrl={`https://sarkarirozgarupdate.com/admit-card/${card.slug}`}
        schema={eventSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs
          items={[
            { label: 'Admit Card (एडमिट कार्ड)', url: '/admit-card' },
            { label: card.examName },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-100 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{card.organization}</span>
                </span>
                <StatusBadge status={card.status} />
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">
                {card.examName}
              </h1>

              <p className="text-sm sm:text-base text-blue-900 font-semibold mb-4">
                {card.examNameHi}
              </p>

              {/* Key Overview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-blue-50/50 p-4 rounded-xl border border-blue-100 text-xs">
                <div>
                  <span className="text-slate-500 block">पद का नाम (Post Name):</span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{card.postName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">परीक्षा तिथि (Exam Date):</span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{card.examDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">एडमिट कार्ड जारी तिथि:</span>
                  <span className="font-bold text-blue-800 text-xs sm:text-sm">{card.releaseDate}</span>
                </div>
                {card.totalVacancy && (
                  <div>
                    <span className="text-slate-500 block">कुल पद (Total Vacancies):</span>
                    <span className="font-bold text-blue-800 text-xs sm:text-sm">{card.totalVacancy}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 block">अद्यतन स्थिति (Updated):</span>
                  <span className="font-bold text-slate-700 text-xs sm:text-sm">{card.updatedAt}</span>
                </div>
              </div>
            </div>

            <DisclaimerAlert isDemo={card.isDemo} />

            {/* Direct Download Box */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-md text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                सीधा एडमिट कार्ड डाउनलोड लिंक (Direct Download Link)
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mb-5 max-w-lg mx-auto">
                अपना रजिस्ट्रेशन नंबर / रोल नंबर एवं जन्मतिथि (DOB) दर्ज करके अपना प्रवेश पत्र तुरंत डाउनलोड करें।
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={card.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm transition shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Admit Card / Exam City</span>
                </a>
                <a
                  href={card.officialNotificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm border border-white/20 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Official Website / Notice</span>
                </a>
              </div>
            </div>

            {/* How to download */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-blue-600" />
                <span>एडमिट कार्ड कैसे डाउनलोड करें? (Step-by-Step Guide)</span>
              </h3>
              <ol className="space-y-3 text-sm text-slate-700">
                {card.stepsToDownload.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Exam Hall Instructions */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2 text-rose-800">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <span>परीक्षा केंद्र हेतु आवश्यक निर्देश (Exam Hall Instructions)</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {card.instructions.map((inst, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{inst}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs Accordion */}
            {card.faqs && card.faqs.length > 0 && (
              <FAQAccordion
                faqs={card.faqs}
                title={`${card.examName} से जुड़े महत्वपूर्ण सवाल (FAQs)`}
              />
            )}

            <ShareButtons title={`${card.examName} Admit Card 2026`} />

            {/* Related Admit Cards */}
            {related.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-3">
                  अन्य महत्वपूर्ण एडमिट कार्ड (Latest Admit Cards)
                </h3>
                <div className="space-y-2.5">
                  {related.map((r) => (
                    <div
                      key={r.id}
                      onClick={() => {
                        navigate(`/admit-card/${r.slug}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <span className="text-[10px] text-blue-700 font-semibold">{r.organization}</span>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{r.examName}</h4>
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
