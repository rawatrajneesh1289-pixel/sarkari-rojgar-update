import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'सामान्य सुझाव / Feedback',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <SeoHead
        title="Contact Us (संपर्क करें) | Sarkari Rozgar Update"
        description="Sarkari Rozgar Update सहायता केंद्र। किसी भी सुझाव, त्रुटि सुधार अथवा सहायता के लिए हमारी टीम से संपर्क करें।"
        canonicalUrl="https://sarkarirozgarupdate.com/contact"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Breadcrumbs items={[{ label: 'Contact Us (संपर्क करें)' }]} />

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs my-4 space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Contact Us (संपर्क एवं सहायता)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              किसी भी सूचना में सुधार, विज्ञापन पूछताछ अथवा तकनीकी समस्या हेतु हमें लिखें
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <Mail className="w-5 h-5 text-blue-600 mb-2" />
              <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wider">ईमेल (Email)</h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">help@sarkarirozgarupdate.com</p>
              <p className="text-[11px] text-slate-400">24-48 घंटों में उत्तर</p>
            </div>

            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <MessageSquare className="w-5 h-5 text-blue-600 mb-2" />
              <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wider">सूचना सुधार (Corrections)</h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">editor@sarkarirozgarupdate.com</p>
              <p className="text-[11px] text-slate-400">त्रुटि सुधार डेस्क</p>
            </div>

            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <MapPin className="w-5 h-5 text-blue-600 mb-2" />
              <h3 className="font-bold text-xs text-slate-800 uppercase tracking-wider">स्थान (Location)</h3>
              <p className="text-xs text-slate-600 mt-1 font-medium">Bhopal / New Delhi, India</p>
              <p className="text-[11px] text-slate-400">Digital Operations</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-base text-slate-900 mb-4">
              संदेश भेजें (Send a Message)
            </h3>

            {submitted ? (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 p-6 rounded-xl text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base">आपका संदेश सफलतापूर्वक प्राप्त हुआ!</h4>
                <p className="text-xs text-emerald-800">
                  Sarkari Rozgar Update सहायता दल शीघ्र ही आपके ईमेल पर उत्तर प्रेषित करेगा।
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-semibold text-emerald-950 underline"
                >
                  दूसरा संदेश भेजें
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      आपका नाम (Full Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="उदा. राहुल शर्मा"
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg outline-hidden focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      ईमेल पता (Email Address) *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg outline-hidden focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    विषय (Subject)
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg outline-hidden focus:border-blue-600"
                  >
                    <option value="सामान्य सुझाव / Feedback">सामान्य सुझाव / Feedback</option>
                    <option value="सूचना में त्रुटि सुधार / Correction">सूचना में त्रुटि सुधार / Correction</option>
                    <option value="तकनीकी समस्या / Bug Report">तकनीकी समस्या / Bug Report</option>
                    <option value="अन्य विषय">अन्य विषय</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    आपका संदेश (Your Message) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="कृपया अपनी बात विस्तार से लिखें..."
                    className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>संदेश प्रेषित करें (Submit Message)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
