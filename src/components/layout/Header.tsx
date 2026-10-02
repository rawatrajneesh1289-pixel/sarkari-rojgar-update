import React, { useState } from 'react';
import {
  Search,
  Menu,
  X,
  Briefcase,
  Award,
  FileCheck2,
  KeyRound,
  Compass,
  GraduationCap,
  School,
  BookOpen,
  FileStack,
  ChevronDown,
  ShieldAlert,
  Sparkles,
  Lock,
  Wrench,
} from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { db } from '../../services/db';
import { envHelper } from '../../utils/envHelper';

export const Header: React.FC = () => {
  const { path, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [quickSearchText, setQuickSearchText] = useState('');
  const showAdmin = envHelper.shouldShowAdminInNavigation(db.isAdminLoggedIn());

  const navItems = [
    { label: 'Home', labelHi: 'होम', path: '/' },
    { label: 'Latest Jobs', labelHi: 'सरकारी नौकरी', path: '/jobs' },
    { label: 'Admit Card', labelHi: 'एडमिट कार्ड', path: '/admit-card' },
    { label: 'Results', labelHi: 'रिजल्ट', path: '/results' },
    { label: 'Answer Key', labelHi: 'उत्तर कुंजी', path: '/answer-key' },
    { label: 'Sarkari Yojana', labelHi: 'सरकारी योजना', path: '/sarkari-yojana' },
    { label: 'Scholarship', labelHi: 'छात्रवृत्ति', path: '/scholarship' },
    { label: 'Admission', labelHi: 'प्रवेश', path: '/admission' },
    { label: 'Syllabus', labelHi: 'सिलेबस', path: '/syllabus' },
    { label: 'Previous Papers', labelHi: 'पुराने पेपर्स', path: '/previous-papers' },
  ];

  const moreItems = [
    { label: 'Preparation Articles', labelHi: 'तैयारी लेख व टिप्स', path: '/articles' },
    { label: 'About Portal', labelHi: 'हमारे बारे में', path: '/about' },
    { label: 'Contact Us', labelHi: 'संपर्क करें', path: '/contact' },
    { label: 'Disclaimer Notice', labelHi: 'अस्वीकरण (Disclaimer)', path: '/disclaimer' },
    ...(showAdmin
      ? [{ label: 'Admin Portal', labelHi: 'एडमिन पैनल (व्यवस्थापक)', path: '/admin' }]
      : []),
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearchText.trim()) {
      navigate(`/search?q=${encodeURIComponent(quickSearchText.trim())}`);
      setQuickSearchText('');
      setMobileMenuOpen(false);
    }
  };

  const isActive = (itemPath: string) => {
    if (itemPath === '/') return path === '/';
    return path.startsWith(itemPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* Top micro brand banner */}
      <div className="bg-slate-900 text-slate-300 py-1 px-4 text-[11px] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-semibold tracking-wide">
              🇮🇳 भारत का विश्वसनीय सरकारी रोजगार एवं परीक्षा सूचना पोर्टल
            </span>
            <span>•</span>
            <span>sarkari-rozgar-update.netlify.app</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <button
              onClick={() => navigate('/jobs')}
              className="hover:text-amber-400 transition"
            >
              लेटेस्ट सरकारी नौकरियां
            </button>
            <span>|</span>
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-amber-400 transition"
            >
              मदद एवं सुझाव (Helpdesk)
            </button>
            {showAdmin && (
              <>
                <span>|</span>
                <button
                  onClick={() => navigate('/admin')}
                  className="hover:text-amber-300 font-bold text-amber-400 transition flex items-center gap-1"
                  title="एडमिन पोर्टल"
                >
                  <Lock className="w-3 h-3" />
                  <span>एडमिन पैनल {envHelper.isAIStudioOrDev() ? '(Preview)' : ''}</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          {/* Brand Logo */}
          <div
            onClick={() => navigate('/')}
            className="cursor-pointer flex items-center gap-2 sm:gap-3 shrink-0 select-none group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white flex flex-col items-center justify-center font-extrabold shadow-sm border border-blue-950/30">
              <span className="text-xs sm:text-sm tracking-tighter leading-none text-amber-400 font-black">SRU</span>
              <span className="text-[8px] uppercase tracking-widest text-slate-200 mt-0.5 font-bold">PORTAL</span>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-2xl text-blue-950 tracking-tight leading-none group-hover:text-blue-800 transition">
                  SARKARI ROZGAR <span className="text-amber-600">UPDATE</span>
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-600 leading-tight mt-0.5 hidden xs:block">
                सरकारी नौकरी और परीक्षा की हर जरूरी जानकारी एक जगह
              </p>
            </div>
          </div>

          {/* Desktop Search Box */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs mx-4">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                placeholder="नौकरी, परीक्षा, रिजल्ट खोजें..."
                value={quickSearchText}
                onChange={(e) => setQuickSearchText(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-slate-100 focus:bg-white text-xs text-slate-800 border border-slate-200 focus:border-blue-600 rounded-full outline-hidden transition shadow-inner"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            </form>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Quick Search Button on Mobile */}
            <button
              onClick={() => navigate('/search')}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Admin shortcut visible in Preview mode or when logged in */}
            {showAdmin && (
              <button
                onClick={() => navigate('/admin')}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg border border-amber-500 bg-amber-50 hover:bg-amber-100 text-amber-950 transition shadow-2xs"
                title="Admin Control Panel"
              >
                <Lock className="w-3.5 h-3.5 text-amber-700" />
                <span>Admin Panel</span>
                {envHelper.isAIStudioOrDev() && (
                  <span className="text-[9px] bg-amber-200 text-amber-950 font-bold px-1.5 py-0.5 rounded hidden sm:inline">
                    Preview
                  </span>
                )}
              </button>
            )}

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Primary Desktop Navigation Bar */}
      <nav className="bg-blue-950 text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-between text-xs lg:text-sm font-medium overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <li key={item.path} className="shrink-0">
                  <button
                    onClick={() => navigate(item.path)}
                    className={`py-3 px-2.5 lg:px-3.5 block transition border-b-2 tracking-tight ${
                      active
                        ? 'border-amber-400 text-amber-300 font-bold bg-white/5'
                        : 'border-transparent text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}

            {/* More Dropdown */}
            <li className="relative shrink-0">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="py-3 px-3 flex items-center gap-1 text-slate-200 hover:text-white transition hover:bg-white/5"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-1 w-52 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                >
                  {moreItems.map((m) => (
                    <button
                      key={m.path}
                      onClick={() => {
                        navigate(m.path);
                        setMoreDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 transition flex flex-col"
                    >
                      <span className="font-semibold text-slate-900">{m.label}</span>
                      <span className="text-[10px] text-slate-500">{m.labelHi}</span>
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Mobile search */}
          <div className="p-3 border-b border-slate-100 bg-slate-50">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="नौकरी, परीक्षा, रिजल्ट खोजें..."
                value={quickSearchText}
                onChange={(e) => setQuickSearchText(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white text-sm text-slate-800 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </form>
          </div>

          <div className="p-2 divide-y divide-slate-100">
            <div className="py-1">
              <p className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                मुख्य श्रेणियां (Categories)
              </p>
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm flex items-center justify-between transition ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-900 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="text-xs text-slate-400">{item.labelHi}</span>
                </button>
              ))}
            </div>

            <div className="py-2">
              <p className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                अन्य सेवाएं (More Links)
              </p>
              {moreItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-600 hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-slate-400">{item.labelHi}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
