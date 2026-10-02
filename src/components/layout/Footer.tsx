import React from 'react';
import { ShieldAlert, ExternalLink, Mail, MapPin, Heart, ArrowUp, Lock } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import { db } from '../../services/db';
import { envHelper } from '../../utils/envHelper';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const showAdmin = envHelper.shouldShowAdminInNavigation(db.isAdminLoggedIn());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-8 border-t-4 border-amber-500 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1 & 2: Brand Information & Disclaimer */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex flex-col items-center justify-center font-black border border-blue-500/30">
                <span className="text-xs text-amber-400">SRU</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  SARKARI ROZGAR <span className="text-amber-500">UPDATE</span>
                </span>
                <p className="text-xs text-slate-400">sarkari-rozgar-update.netlify.app</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              "सरकारी नौकरी और परीक्षा की हर जरूरी जानकारी एक जगह"
            </p>

            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>सांविधिक अस्वीकरण (Statutory Disclaimer)</span>
              </div>
              <p className="leading-relaxed text-[11px] text-slate-300">
                Sarkari Rozgar Update एक स्वतंत्र सूचना पोर्टल है। यह वेबसाइट भारत सरकार या किसी राज्य सरकार के किसी विभाग की आधिकारिक वेबसाइट नहीं है। हम सरकारी नौकरी, परीक्षा, परिणाम और योजनाओं से संबंधित सार्वजनिक रूप से उपलब्ध जानकारी को सरल रूप में प्रस्तुत करते हैं। आवेदन करने से पहले संबंधित विभाग की आधिकारिक वेबसाइट और आधिकारिक अधिसूचना अवश्य देखें।
              </p>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-3 text-amber-400">
              शीर्ष श्रेणियां (Categories)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('/jobs')} className="hover:text-amber-400 transition">
                  लेटेस्ट सरकारी नौकरी (Latest Jobs)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/admit-card')} className="hover:text-amber-400 transition">
                  एडमिट कार्ड (Admit Cards)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/results')} className="hover:text-amber-400 transition">
                  परीक्षा परिणाम (Results)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/answer-key')} className="hover:text-amber-400 transition">
                  उत्तर कुंजी (Answer Key)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/sarkari-yojana')} className="hover:text-amber-400 transition">
                  सरकारी योजनाएं (Sarkari Yojana)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/scholarship')} className="hover:text-amber-400 transition">
                  छात्रवृत्ति (Scholarships)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Exam Resources */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-3 text-amber-400">
              परीक्षा संसाधन (Resources)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('/syllabus')} className="hover:text-amber-400 transition">
                  विस्तृत सिलेबस (Exam Syllabus)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/previous-papers')} className="hover:text-amber-400 transition">
                  पुराने पेपर्स (Previous Papers)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/admission')} className="hover:text-amber-400 transition">
                  कॉलेज व यूनिवर्सिटी प्रवेश (Admission)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/articles')} className="hover:text-amber-400 transition">
                  तैयारी रणनीति व गाइड (Articles)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/search')} className="hover:text-amber-400 transition">
                  स्मार्ट सर्च पोर्टल (Global Search)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Legal & Policy */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-3 text-amber-400">
              नीति एवं संपर्क (Legal)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navigate('/about')} className="hover:text-amber-400 transition">
                  About Us (हमारे बारे में)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-amber-400 transition">
                  Contact Us (संपर्क करें)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/disclaimer')} className="hover:text-amber-400 transition">
                  Disclaimer (अस्वीकरण)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/privacy-policy')} className="hover:text-amber-400 transition">
                  Privacy Policy (गोपनीयता नीति)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/terms')} className="hover:text-amber-400 transition">
                  Terms & Conditions (नियम व शर्तें)
                </button>
              </li>
              {showAdmin && (
                <li>
                  <button
                    onClick={() => navigate('/admin')}
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 transition"
                  >
                    <Lock className="w-3 h-3" />
                    <span>Admin Panel (व्यवस्थापक)</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Scroll to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Sarkari Rozgar Update (SRU). All Rights Reserved. Made for Indian Students & Aspirants.
            <button
              onClick={() => navigate('/admin')}
              className="opacity-10 hover:opacity-40 text-[10px] ml-1 transition cursor-default"
              title="Portal Management"
              aria-label="Portal Management"
            >
              •
            </button>
          </p>

          <div className="flex items-center gap-4">
            <span>Domain: sarkari-rozgar-update.netlify.app</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>शीर्ष पर जाएं</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
