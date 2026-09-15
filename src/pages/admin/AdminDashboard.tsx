import React, { useState } from 'react';
import {
  Briefcase,
  Award,
  FileCheck2,
  KeyRound,
  Compass,
  Plus,
  Trash2,
  Edit,
  Save,
  RotateCcw,
  Volume2,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  Search,
  Lock,
  LogOut,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  Zap,
} from 'lucide-react';
import { db } from '../../services/db';
import { envHelper } from '../../utils/envHelper';
import { Job, Announcement, JobStatus } from '../../types';
import { StatusBadge } from '../../components/common/StatusBadge';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SeoHead } from '../../components/common/SeoHead';
import { useRouter } from '../../context/RouterContext';

export const AdminDashboard: React.FC = () => {
  const { navigate } = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(() => db.isAdminLoggedIn());
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'jobs' | 'announcements' | 'results' | 'admit-cards'>('jobs');
  const [jobs, setJobs] = useState<Job[]>(() => db.getJobs());
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => db.getAnnouncements());
  const [newNoticeText, setNewNoticeText] = useState('');
  const [newNoticeLink, setNewNoticeLink] = useState('/jobs');
  const [successMsg, setSuccessMsg] = useState('');
  const [searchJob, setSearchJob] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (db.adminLogin(passwordInput.trim())) {
      setIsAuthenticated(true);
      setAuthError('');
      setJobs(db.getJobs());
      setAnnouncements(db.getAnnouncements());
    } else {
      setAuthError('अमान्य पासकी! सही व्यवस्थापक पासवर्ड दर्ज करें (डिफ़ॉल्ट: admin2026 या sruadmin)');
    }
  };

  const handleLogout = () => {
    db.adminLogout();
    setIsAuthenticated(false);
    navigate('/');
  };

  const flashMessage = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDeleteJob = (id: string, title: string) => {
    if (window.confirm(`क्या आप "${title}" को हटाना चाहते हैं?`)) {
      db.deleteJob(id);
      setJobs(db.getJobs());
      flashMessage('नौकरी रिकॉर्ड सफलतापूर्वक हटा दिया गया!');
    }
  };

  const handleStatusChange = (id: string, newStatus: JobStatus) => {
    const target = jobs.find((j) => j.id === id);
    if (target) {
      const updated = { ...target, status: newStatus, updatedAt: 'अभी-अभी' };
      db.saveJob(updated);
      setJobs(db.getJobs());
      flashMessage(`स्थिति बदलकर ${newStatus} कर दी गई`);
    }
  };

  const handleToggleDemo = (id: string) => {
    const target = jobs.find((j) => j.id === id);
    if (target) {
      const updated = { ...target, isDemo: !target.isDemo };
      db.saveJob(updated);
      setJobs(db.getJobs());
      flashMessage(`डेमो स्टेटस बदला गया: ${updated.isDemo ? 'DEMO' : 'VERIFIED'}`);
    }
  };

  const handleAddAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeText.trim()) return;
    const item: Announcement = {
      id: `notice-${Date.now()}`,
      text: newNoticeText.trim(),
      textHi: newNoticeText.trim(),
      linkUrl: newNoticeLink.trim() || '/jobs',
      isLive: true,
      type: 'URGENT',
    };
    db.saveAnnouncement(item);
    setAnnouncements(db.getAnnouncements());
    setNewNoticeText('');
    flashMessage('नया लाइव नोटिस बार अपडेट जोड़ा गया!');
  };

  const handleDeleteAnnouncement = (id: string) => {
    db.deleteAnnouncement(id);
    setAnnouncements(db.getAnnouncements());
    flashMessage('नोटिस हटा दिया गया!');
  };

  const handleToggleAnnouncementLive = (id: string) => {
    const list = announcements.map((a) => (a.id === id ? { ...a, isLive: !a.isLive } : a));
    list.forEach((item) => db.saveAnnouncement(item));
    setAnnouncements(db.getAnnouncements());
  };

  const handleResetData = () => {
    if (window.confirm('क्या आप सभी डेटा को डिफ़ॉल्ट डेमो डेटा पर रीसेट करना चाहते हैं?')) {
      db.resetToSeed();
      setJobs(db.getJobs());
      setAnnouncements(db.getAnnouncements());
      flashMessage('डेटा रीसेट कर दिया गया!');
    }
  };

  const filteredJobs = jobs.filter((j) => {
    if (!searchJob) return true;
    const q = searchJob.toLowerCase();
    return j.title.toLowerCase().includes(q) || j.organization.toLowerCase().includes(q);
  });

  if (!isAuthenticated) {
    const isPreview = envHelper.isAIStudioOrDev();

    return (
      <>
        <SeoHead
          title="Admin Authentication | Sarkari Rozgar Update"
          description="व्यवस्थापक लॉगिन"
        />
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-md">
              <Lock className="w-6 h-6 text-amber-400" />
            </div>

            <div className="text-center mb-6">
              {isPreview && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold mb-3 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>AI Studio Preview Environment</span>
                </div>
              )}
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                व्यवस्थापक प्रमाणीकरण
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Admin Control Portal • अधिकृत व्यवस्थापक के लिए
              </p>
            </div>

            {isPreview && (
              <div className="mb-5 p-3.5 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-300 rounded-xl">
                <p className="text-xs font-bold text-amber-950 mb-2 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-600 fill-current" />
                  <span>Preview मोड डायरेक्ट एक्सेस:</span>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    db.adminLogin('admin2026');
                    setIsAuthenticated(true);
                    setJobs(db.getJobs());
                    setAnnouncements(db.getAnnouncements());
                  }}
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-950 text-xs sm:text-sm font-extrabold rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-slate-950" />
                  <span>1-Click Instant Access (AI Studio)</span>
                </button>
                <p className="text-[10px] text-amber-800 mt-1.5 text-center">
                  यहाँ AI Studio में बिना टाइप किए तुरंत एडमिन डैशबोर्ड खोलें
                </p>
              </div>
            )}

            {authError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  सुरक्षा पासकी / पासवर्ड (Admin Password):
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="admin2026 या sruadmin"
                  autoFocus={!isPreview}
                  required
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:border-blue-600 outline-hidden transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>पासवर्ड से लॉगिन करें</span>
              </button>
            </form>

            <div className="mt-5 p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 space-y-1">
              <p className="font-bold text-slate-800 flex items-center gap-1">
                <span>🔒 Netlify / Production सुरक्षा नियम:</span>
              </p>
              <p className="leading-relaxed text-slate-500">
                जब आप इसे Netlify पर डिप्लॉय करेंगे, तब एडमिन पैनल का कोई भी बटन पब्लिक को नहीं दिखेगा। साइट केवल गुप्त URL (<code className="bg-slate-200 px-1 py-0.5 rounded text-slate-700 font-mono">/admin</code>) और पासवर्ड (<code className="bg-slate-200 px-1 py-0.5 rounded text-slate-700 font-mono">admin2026</code>) से ही खुलेगी।
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <button
                onClick={() => navigate('/')}
                className="hover:text-slate-800 flex items-center gap-1 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>होमपेज पर वापस जाएं</span>
              </button>
              <span className="text-[11px] text-slate-400">शॉर्टकट: Ctrl+Shift+A</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SeoHead
        title="Admin Control Panel | Sarkari Rozgar Update"
        description="प्रशासनिक नियंत्रण कक्ष - सामग्री प्रबंधन एवं लाइव अपडेट।"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs items={[{ label: 'Admin Control Panel' }]} />

        {/* Top Header */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                SRU व्यवस्थापक डैशबोर्ड
              </span>
              {envHelper.isAIStudioOrDev() ? (
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/40 font-bold">
                  AI Studio Preview Mode
                </span>
              ) : (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40 font-bold">
                  Production Mode (Hidden from Public)
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Admin Control Panel
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              भर्तियां, रिजल्ट, प्रवेश पत्र एवं लाइव टिकर बार का त्वरित प्रबंधन
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => navigate('/admin/new-job')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>नई नौकरी जोड़ें (Add Job)</span>
            </button>
            <button
              onClick={handleResetData}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium border border-slate-700 transition"
              title="Reset data to initial state"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>रीसेट डेटा</span>
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-red-950/60 hover:bg-red-900 text-red-200 rounded-xl text-xs font-bold border border-red-800/50 transition"
              title="Logout from Admin"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>लॉगआउट</span>
            </button>
          </div>
        </div>

        {/* Flash Message */}
        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl text-xs font-bold flex items-center gap-2 animate-in fade-in duration-150">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <span className="text-xs font-medium text-slate-500">कुल नौकरियां (Jobs)</span>
            <p className="text-2xl font-bold text-slate-900 mt-1">{jobs.length}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <span className="text-xs font-medium text-slate-500">एडमिट कार्ड</span>
            <p className="text-2xl font-bold text-blue-700 mt-1">{db.getAdmitCards().length}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <span className="text-xs font-medium text-slate-500">परीक्षा परिणाम</span>
            <p className="text-2xl font-bold text-blue-700 mt-1">{db.getResults().length}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <span className="text-xs font-medium text-slate-500">सरकारी योजनाएं</span>
            <p className="text-2xl font-bold text-blue-700 mt-1">{db.getSchemes().length}</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-slate-200 mb-6">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition ${
              activeTab === 'jobs'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            सरकारी नौकरियां ({jobs.length})
          </button>
          <button
            onClick={() => setActiveTab('announcements')}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold border-b-2 transition ${
              activeTab === 'announcements'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            लाइव नोटिस टिकर बार ({announcements.length})
          </button>
        </div>

        {/* JOBS TAB */}
        {activeTab === 'jobs' && (
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <h2 className="font-bold text-base text-slate-900">
                भर्ती सूची प्रबंधन (Manage Government Jobs)
              </h2>

              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="नौकरी या विभाग खोजें..."
                  value={searchJob}
                  onChange={(e) => setSearchJob(e.target.value)}
                  className="w-full text-xs pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 rounded-lg">
                <thead className="bg-slate-100 text-slate-700 font-semibold uppercase">
                  <tr>
                    <th className="p-3 border-b">शीर्षक व आयोग (Title)</th>
                    <th className="p-3 border-b">पद (Vacancies)</th>
                    <th className="p-3 border-b">अंतिम तिथि</th>
                    <th className="p-3 border-b">स्थिति (Status)</th>
                    <th className="p-3 border-b">डेटा प्रकार</th>
                    <th className="p-3 border-b text-right">क्रियाएं (Actions)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {filteredJobs.map((j) => (
                    <tr key={j.id} className="hover:bg-slate-50">
                      <td className="p-3">
                        <span className="text-[10px] text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded font-bold">
                          {j.organization}
                        </span>
                        <p className="font-bold text-slate-900 mt-0.5">{j.title}</p>
                        <span className="text-[11px] text-slate-500">{j.postName}</span>
                      </td>
                      <td className="p-3 font-semibold text-blue-900">{j.totalVacancy}</td>
                      <td className="p-3 font-semibold text-rose-700">{j.applicationLastDate}</td>
                      <td className="p-3">
                        <select
                          value={j.status}
                          onChange={(e) => handleStatusChange(j.id, e.target.value as JobStatus)}
                          className="text-xs py-1 px-2 border border-slate-300 rounded bg-white font-medium"
                        >
                          <option value="OPEN">OPEN</option>
                          <option value="NEW">NEW</option>
                          <option value="CLOSING_SOON">CLOSING_SOON</option>
                          <option value="CLOSED">CLOSED</option>
                        </select>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => handleToggleDemo(j.id)}
                          className={`text-[10px] px-2 py-0.5 rounded font-bold border transition ${
                            j.isDemo
                              ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                              : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                          }`}
                        >
                          {j.isDemo ? 'DEMO DATA' : 'VERIFIED'}
                        </button>
                      </td>
                      <td className="p-3 text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            onClick={() => navigate(`/admin/edit-job/${j.id}`)}
                            className="p-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-md transition"
                            title="Edit"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteJob(j.id, j.title)}
                            className="p-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-md transition"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => navigate(`/jobs/${j.slug}`)}
                            className="p-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md transition"
                            title="View on site"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ANNOUNCEMENTS TAB */}
        {activeTab === 'announcements' && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-amber-600" />
                <span>नया लाइव अपडेट जोड़ें (Add Top Ticker Notice)</span>
              </h3>

              <form onSubmit={handleAddAnnouncement} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      सूचना का टेक्स्ट (Hindi / English Notice Text) *
                    </label>
                    <input
                      type="text"
                      required
                      value={newNoticeText}
                      onChange={(e) => setNewNoticeText(e.target.value)}
                      placeholder="जैसे: MP Police Constable एडमिट कार्ड जारी, यहाँ से डाउनलोड करें"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      लिंक (Link Path or URL)
                    </label>
                    <input
                      type="text"
                      value={newNoticeLink}
                      onChange={(e) => setNewNoticeLink(e.target.value)}
                      placeholder="/admit-card या /jobs"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition shadow-xs"
                >
                  + लाइव टिकर में जोड़ें (Add to Live Ticker)
                </button>
              </form>
            </div>

            {/* List of announcements */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
              <h3 className="font-bold text-base text-slate-900 mb-3">
                सक्रिय एवं पूर्ववर्ती सूचनाएं (Active Announcements)
              </h3>

              <div className="divide-y divide-slate-100">
                {announcements.map((a) => (
                  <div key={a.id} className="py-3 flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <p className="font-medium text-xs sm:text-sm text-slate-900">{a.textHi || a.text}</p>
                      <span className="text-[11px] text-blue-600 font-mono">{a.linkUrl}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleToggleAnnouncementLive(a.id)}
                        className={`text-[10px] px-2.5 py-1 rounded font-bold transition ${
                          a.isLive
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {a.isLive ? 'LIVE' : 'HIDDEN'}
                      </button>

                      <button
                        onClick={() => handleDeleteAnnouncement(a.id)}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
