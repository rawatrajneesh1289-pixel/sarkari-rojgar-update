import React, { useState, useMemo } from 'react';
import { Briefcase, ArrowUpDown, Search } from 'lucide-react';
import { JobCard } from '../components/cards/JobCard';
import { FilterPanel } from '../components/common/FilterPanel';
import { EmptyState } from '../components/common/EmptyState';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { DisclaimerAlert } from '../components/common/DisclaimerAlert';
import { Sidebar } from '../components/layout/Sidebar';
import { AdPlaceholder } from '../components/layout/AdPlaceholder';
import { db } from '../services/db';
import { FilterOptions } from '../types';

export const JobsListPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    qualification: 'All',
    category: 'All',
    state: 'All',
    status: 'All',
    searchQuery: '',
  });

  const [sortBy, setSortBy] = useState<'latest' | 'lastDate' | 'vacancies'>('latest');

  const allJobs = db.getJobs();

  const filteredJobs = useMemo(() => {
    return allJobs
      .filter((job) => {
        // Qualification
        if (filters.qualification !== 'All') {
          if (!job.qualification.toLowerCase().includes(filters.qualification.toLowerCase())) {
            return false;
          }
        }
        // Category
        if (filters.category !== 'All') {
          if (job.category !== filters.category) return false;
        }
        // State
        if (filters.state !== 'All') {
          if (job.state !== filters.state && job.state !== 'All India') return false;
        }
        // Status
        if (filters.status !== 'All') {
          if (job.status !== filters.status) return false;
        }
        // Search
        if (filters.searchQuery) {
          const q = filters.searchQuery.toLowerCase();
          const match =
            job.title.toLowerCase().includes(q) ||
            job.titleHi.toLowerCase().includes(q) ||
            job.organization.toLowerCase().includes(q) ||
            job.postName.toLowerCase().includes(q);
          if (!match) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'vacancies') {
          const numA = parseInt(a.totalVacancy.replace(/[^0-9]/g, '')) || 0;
          const numB = parseInt(b.totalVacancy.replace(/[^0-9]/g, '')) || 0;
          return numB - numA;
        }
        if (sortBy === 'lastDate') {
          return a.applicationLastDate.localeCompare(b.applicationLastDate);
        }
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });
  }, [allJobs, filters, sortBy]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 15;

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE) || 1;
  const paginatedJobs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredJobs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  const resetFilters = () => {
    setFilters({
      qualification: 'All',
      category: 'All',
      state: 'All',
      status: 'All',
      searchQuery: '',
    });
    setCurrentPage(1);
  };

  return (
    <>
      <SeoHead
        title="लेटेस्ट सरकारी नौकरी 2026 | Latest Government Jobs Notification Online Form"
        description="केन्द्र एवं राज्य सरकारों द्वारा जारी सभी लेटेस्ट सरकारी नौकरियों की सूची। 10वीं, 12वीं, ग्रेजुएट पास अभ्यर्थियों के लिए SSC, Railway, UPSC, Bank, Police भर्ती ऑनलाइन फॉर्म।"
        canonicalUrl="https://sarkarirozgarupdate.com/jobs"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Breadcrumbs items={[{ label: 'Latest Jobs (सरकारी नौकरियां)' }]} />

        {/* Page Header */}
        <div className="my-4 pb-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <span>लेटेस्ट सरकारी नौकरी (Latest Government Jobs)</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              नवीनतम भर्तियों की अधिसूचना, पात्रता, कुल पद एवं ऑनलाइन आवेदन लिंक (कुल उपलब्ध पद: {allJobs.length})
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>क्रमबद्ध करें (Sort By):</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as any);
                setCurrentPage(1);
              }}
              className="py-1.5 px-3 bg-white border border-slate-300 rounded-lg text-slate-800 text-xs outline-hidden focus:border-blue-600 cursor-pointer"
            >
              <option value="latest">नवीनतम अपडेट (Newest First)</option>
              <option value="lastDate">अंतिम तिथि निकट (Deadline)</option>
              <option value="vacancies">सर्वाधिक पद (Max Vacancies)</option>
            </select>
          </div>
        </div>

        <DisclaimerAlert isDemo={false} compact />

        {/* Filter Panel */}
        <FilterPanel
          filters={filters}
          onChange={(newFilters) => {
            setFilters(newFilters);
            setCurrentPage(1);
          }}
          onReset={resetFilters}
          totalFilteredCount={filteredJobs.length}
        />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {filteredJobs.length === 0 ? (
              <EmptyState
                title="कोई भर्ती नहीं मिली"
                message="आपके द्वारा चुने गए फ़िल्टर से कोई मेल नहीं खाता। कृपया फ़िल्टर रीसेट करें या कोई अन्य योग्यता/राज्य चुनें।"
                onReset={resetFilters}
              />
            ) : (
              <>
                <div className="text-xs text-slate-500 font-medium px-1 flex justify-between items-center">
                  <span>प्रदर्शित: {Math.min(filteredJobs.length, (currentPage - 1) * ITEMS_PER_PAGE + 1)} - {Math.min(filteredJobs.length, currentPage * ITEMS_PER_PAGE)} of {filteredJobs.length} भर्तियां</span>
                  <span>पृष्ठ {currentPage} / {totalPages}</span>
                </div>
                {paginatedJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-4 pb-2">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                    >
                      पिछला (Previous)
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                      <button
                        key={pg}
                        onClick={() => setCurrentPage(pg)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
                          currentPage === pg
                            ? 'bg-blue-900 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {pg}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                    >
                      अगला (Next)
                    </button>
                  </div>
                )}
              </>
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
