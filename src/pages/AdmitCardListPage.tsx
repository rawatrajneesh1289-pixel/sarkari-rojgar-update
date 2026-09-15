import React, { useState, useMemo } from 'react';
import { FileCheck2, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { db } from '../services/db';
import { AdmitCardItem } from '../components/cards/AdmitCardItem';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';

const ITEMS_PER_PAGE = 12;

export const AdmitCardListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Released' | 'Expected Soon' | 'Delayed'>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const allCards = db.getAdmitCards();

  const filteredCards = useMemo(() => {
    return allCards.filter((c) => {
      // Status filter
      if (statusFilter !== 'All' && c.status !== statusFilter) {
        return false;
      }
      // Search filter
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        c.examName.toLowerCase().includes(q) ||
        c.examNameHi.toLowerCase().includes(q) ||
        c.organization.toLowerCase().includes(q) ||
        (c.postName && c.postName.toLowerCase().includes(q))
      );
    });
  }, [allCards, statusFilter, searchQuery]);

  const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);

  const paginatedCards = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCards.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCards, currentPage]);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleStatusChange = (status: 'All' | 'Released' | 'Expected Soon' | 'Delayed') => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  return (
    <>
      <SeoHead
        title="एडमिट कार्ड 2026 | Sarkari Exam Admit Card, Hall Ticket & Exam City Download"
        description="विभिन्न प्रतियोगी परीक्षाओं के एडमिट कार्ड, एग्जाम सिटी स्लिप एवं हॉल टिकट डाउनलोड करें। CSBC, UGC NET, UPSC CDS/NDA, AIIMS, SBI PO, SSC, UP Police एवं DSSSB प्रवेश पत्र।"
        canonicalUrl="https://sarkarirozgarupdate.com/admit-card"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Admit Cards (एडमिट कार्ड)' }]} />

        <div className="my-4 pb-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <FileCheck2 className="w-6 h-6 text-blue-600" />
              <span>प्रवेश पत्र / एडमिट कार्ड (Admit Card Updates 2026)</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              प्रतियोगी परीक्षाओं के हॉल टिकट, एग्जाम सिटी स्लिप और आधिकारिक डाउनलोड लिंक (कुल {allCards.length} अपडेट्स)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="परीक्षा या आयोग का नाम खोजें..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-white p-3 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
            <span className="text-xs font-semibold text-slate-700">स्थिति:</span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => handleStatusChange('All')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                  statusFilter === 'All'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                सभी ({allCards.length})
              </button>
              <button
                onClick={() => handleStatusChange('Released')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                  statusFilter === 'Released'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                जारी (Released)
              </button>
              <button
                onClick={() => handleStatusChange('Expected Soon')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                  statusFilter === 'Expected Soon'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                शीघ्र अपेक्षित (Upcoming)
              </button>
              <button
                onClick={() => handleStatusChange('Delayed')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition ${
                  statusFilter === 'Delayed'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                स्थगित / विलंबित (Delayed / Postponed)
              </button>
            </div>
          </div>

          <span className="text-xs text-slate-500 font-medium">
            प्रदर्शित: <span className="font-bold text-slate-800">{filteredCards.length}</span> एडमिट कार्ड
          </span>
        </div>

        <DisclaimerAlert isDemo={false} compact />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          <div className="lg:col-span-2 space-y-6">
            {paginatedCards.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center">
                <FileCheck2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800 mb-1">कोई एडमिट कार्ड नहीं मिला</h3>
                <p className="text-xs text-slate-500 mb-4">
                  आपके खोजे गए शब्द &quot;{searchQuery}&quot; के अनुसार कोई परिणाम नहीं मिला। कृपया दूसरा शब्द खोजें।
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setStatusFilter('All');
                    setCurrentPage(1);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  सभी फिल्टर हटाएं
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paginatedCards.map((card) => (
                  <AdmitCardItem key={card.id} card={card} />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200 bg-white p-4 rounded-xl border">
                <span className="text-xs text-slate-500">
                  पेज <span className="font-bold text-slate-900">{currentPage}</span> / {totalPages} (कुल {filteredCards.length} एडमिट कार्ड)
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>पिछला</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition ${
                          currentPage === num
                            ? 'bg-blue-700 text-white shadow-xs'
                            : 'text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                  >
                    <span>अगला</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

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
