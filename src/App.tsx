/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { TopNoticeBar } from './components/layout/TopNoticeBar';
import { AdPlaceholder } from './components/layout/AdPlaceholder';

// Pages
import { HomePage } from './pages/HomePage';
import { JobsListPage } from './pages/JobsListPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { AdmitCardListPage } from './pages/AdmitCardListPage';
import { AdmitCardDetailPage } from './pages/AdmitCardDetailPage';
import { ResultsListPage } from './pages/ResultsListPage';
import { ResultDetailPage } from './pages/ResultDetailPage';
import { AnswerKeyListPage } from './pages/AnswerKeyListPage';
import { AnswerKeyDetailPage } from './pages/AnswerKeyDetailPage';
import { SchemesListPage } from './pages/SchemesListPage';
import { SchemeDetailPage } from './pages/SchemeDetailPage';
import { ScholarshipListPage } from './pages/ScholarshipListPage';
import { AdmissionListPage } from './pages/AdmissionListPage';
import { AdmissionDetailPage } from './pages/AdmissionDetailPage';
import { SyllabusListPage } from './pages/SyllabusListPage';
import { SyllabusDetailPage } from './pages/SyllabusDetailPage';
import { PreviousPapersPage } from './pages/PreviousPapersPage';
import { ArticlesListPage } from './pages/ArticlesListPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { SearchPage } from './pages/SearchPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { PrivacyPolicyPage, TermsPage } from './pages/PrivacyPolicyPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminJobEditor } from './pages/admin/AdminJobEditor';
import { NotFoundPage } from './pages/NotFoundPage';
import { db } from './services/db';
import { envHelper } from './utils/envHelper';

function AdminGlobalListener() {
  const { navigate, path } = useRouter();
  const [isAdmin, setIsAdmin] = useState(() => db.isAdminLoggedIn());
  const isPreview = envHelper.isAIStudioOrDev();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        navigate('/admin');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  useEffect(() => {
    setIsAdmin(db.isAdminLoggedIn());
  }, [path]);

  // When logged in: show active toolbar
  if (isAdmin) {
    return (
      <div className="fixed bottom-4 right-4 z-40 bg-slate-900/95 hover:bg-slate-900 text-white px-3 py-1.5 rounded-full shadow-lg border border-amber-500/50 flex items-center gap-2 text-xs backdrop-blur-xs">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="font-semibold text-[11px] text-amber-300">
          Admin Active {isPreview ? '(AI Studio)' : ''}
        </span>
        <button
          onClick={() => navigate('/admin')}
          className="underline hover:text-white text-[11px] font-medium"
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            db.adminLogout();
            setIsAdmin(false);
            navigate('/');
          }}
          className="ml-1 text-[10px] bg-red-800 hover:bg-red-700 px-1.5 py-0.5 rounded text-red-100 font-bold"
        >
          Logout
        </button>
      </div>
    );
  }

  // In AI Studio Preview: show a convenient floating shortcut so creator can access it instantly
  if (isPreview) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => navigate('/admin')}
          className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 font-bold px-3 py-1.5 rounded-full shadow-md text-xs flex items-center gap-1.5 border border-amber-400 transition"
          title="AI Studio Preview Admin Access"
        >
          <span className="text-[13px]">🛠️</span>
          <span>Admin Panel (Preview)</span>
        </button>
      </div>
    );
  }

  // On Netlify / Production: completely hidden from public viewers!
  return null;
}

const AppRoutes: React.FC = () => {
  const { path } = useRouter();

  // Normalize path without trailing slash (except for '/')
  const cleanPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;

  // Exact matches
  if (cleanPath === '/' || cleanPath === '') {
    return <HomePage />;
  }
  if (cleanPath === '/jobs') {
    return <JobsListPage />;
  }
  if (cleanPath === '/admit-card') {
    return <AdmitCardListPage />;
  }
  if (cleanPath === '/results') {
    return <ResultsListPage />;
  }
  if (cleanPath === '/answer-key') {
    return <AnswerKeyListPage />;
  }
  if (cleanPath === '/sarkari-yojana') {
    return <SchemesListPage />;
  }
  if (cleanPath === '/scholarship') {
    return <ScholarshipListPage />;
  }
  if (cleanPath === '/admission') {
    return <AdmissionListPage />;
  }
  if (cleanPath === '/syllabus') {
    return <SyllabusListPage />;
  }
  if (cleanPath === '/previous-papers') {
    return <PreviousPapersPage />;
  }
  if (cleanPath === '/articles') {
    return <ArticlesListPage />;
  }
  if (cleanPath === '/search') {
    return <SearchPage />;
  }
  if (cleanPath === '/about') {
    return <AboutPage />;
  }
  if (cleanPath === '/contact') {
    return <ContactPage />;
  }
  if (cleanPath === '/disclaimer') {
    return <DisclaimerPage />;
  }
  if (cleanPath === '/privacy-policy') {
    return <PrivacyPolicyPage />;
  }
  if (cleanPath === '/terms') {
    return <TermsPage />;
  }
  if (cleanPath === '/admin') {
    return <AdminDashboard />;
  }
  if (cleanPath === '/admin/new-job') {
    return <AdminJobEditor />;
  }

  // Parameterized routes
  if (cleanPath.startsWith('/jobs/')) {
    const slug = cleanPath.replace('/jobs/', '');
    return <JobDetailPage slug={slug} />;
  }
  if (cleanPath.startsWith('/admit-card/')) {
    const slug = cleanPath.replace('/admit-card/', '');
    return <AdmitCardDetailPage slug={slug} />;
  }
  if (cleanPath.startsWith('/results/')) {
    const slug = cleanPath.replace('/results/', '');
    return <ResultDetailPage slug={slug} />;
  }
  if (cleanPath.startsWith('/answer-key/')) {
    const slug = cleanPath.replace('/answer-key/', '');
    return <AnswerKeyDetailPage slug={slug} />;
  }
  if (cleanPath.startsWith('/sarkari-yojana/')) {
    const slug = cleanPath.replace('/sarkari-yojana/', '');
    return <SchemeDetailPage slug={slug} />;
  }
  if (cleanPath.startsWith('/admission/')) {
    const slug = cleanPath.replace('/admission/', '');
    return <AdmissionDetailPage slug={slug} />;
  }
  if (cleanPath.startsWith('/syllabus/')) {
    const slug = cleanPath.replace('/syllabus/', '');
    return <SyllabusDetailPage slug={slug} />;
  }
  if (cleanPath.startsWith('/articles/')) {
    const slug = cleanPath.replace('/articles/', '');
    return <ArticleDetailPage slug={slug} />;
  }
  if (cleanPath.startsWith('/admin/edit-job/')) {
    const id = cleanPath.replace('/admin/edit-job/', '');
    return <AdminJobEditor jobId={id} />;
  }

  return <NotFoundPage />;
};

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen bg-slate-100/70 text-slate-800 flex flex-col font-sans antialiased selection:bg-amber-200 selection:text-amber-950">
        <TopNoticeBar />
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
        <AdPlaceholder type="Mobile Sticky Ad" />
        <AdminGlobalListener />
      </div>
    </RouterProvider>
  );
}
