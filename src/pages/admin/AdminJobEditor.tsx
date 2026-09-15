import React, { useState, useEffect } from 'react';
import { Save, ArrowLeft, Building2, Calendar, IndianRupee, Users, CheckCircle, ExternalLink } from 'lucide-react';
import { db } from '../../services/db';
import { Job, JobCategory, JobStatus } from '../../types';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SeoHead } from '../../components/common/SeoHead';
import { useRouter } from '../../context/RouterContext';

interface AdminJobEditorProps {
  jobId?: string;
}

export const AdminJobEditor: React.FC<AdminJobEditorProps> = ({ jobId }) => {
  const { navigate } = useRouter();
  const isEditing = Boolean(jobId);

  const [formData, setFormData] = useState<Job>(() => {
    if (jobId) {
      const existing = db.getJobById(jobId);
      if (existing) return existing;
    }
    return {
      id: `job-${Date.now()}`,
      title: '',
      titleHi: '',
      slug: '',
      organization: '',
      category: 'Central Government',
      state: 'All India',
      totalVacancy: '',
      postName: '',
      qualification: 'Graduate',
      minAge: 18,
      maxAge: 30,
      ageRelaxationNote: 'नियमानुसार आरक्षित वर्गों को अधिकतम आयु सीमा में छूट',
      applicationStartDate: '01/04/2026',
      applicationLastDate: '30/04/2026',
      feeLastDate: '30/04/2026',
      correctionDate: '',
      examDate: 'सूचित किया जाएगा',
      feeGeneral: '100',
      feeSC_ST: '0',
      feePH: '0',
      feeFemale: '0',
      paymentMode: 'Net Banking / Debit Card / UPI',
      salary: 'Pay Level-4 to Level-7',
      shortDescription: '',
      selectionProcess: ['लिखित परीक्षा (CBT)', 'दस्तावेज सत्यापन (Document Verification)', 'चिकित्सा परीक्षण'],
      howToApply: [
        'सबसे पहले संबंधित आयोग की आधिकारिक वेबसाइट पर जाएं।',
        'वेबसाइट पर उपलब्ध "Apply Online" लिंक पर क्लिक करें।',
        'रजिस्ट्रेशन फॉर्म में अपनी मूलभूत जानकारियां भरें।',
        'फोटो, हस्ताक्षर एवं आवश्यक दस्तावेज अपलोड करें।',
        'अपनी श्रेणी के अनुसार आवेदन शुल्क का ऑनलाइन भुगतान करें।',
        'भरे गए फॉर्म का एक प्रिंटआउट भविष्य के संदर्भ के लिए सुरक्षित रख लें।',
      ],
      documentsRequired: ['10वीं मार्कशीट', 'स्नातक डिग्री', 'आधार कार्ड', 'पासपोर्ट फोटो', 'हस्ताक्षर'],
      importantLinks: [
        { label: 'Apply Online (ऑनलाइन आवेदन करें)', url: 'https://ssc.gov.in', type: 'APPLY', isExternal: true },
        { label: 'Download Notification PDF (विस्तृत विज्ञापन)', url: 'https://ssc.gov.in', type: 'NOTIFICATION', isExternal: true },
        { label: 'Official Website (आधिकारिक वेबसाइट)', url: 'https://ssc.gov.in', type: 'WEBSITE', isExternal: true },
      ],
      faqs: [
        { question: 'इस भर्ती की अंतिम तिथि क्या है?', answer: 'आवेदन करने की अंतिम तिथि 30/04/2026 है।' },
      ],
      status: 'OPEN',
      isFeatured: true,
      isDemo: false,
      officialWebsite: 'https://ssc.gov.in',
      officialNotificationUrl: 'https://ssc.gov.in',
      seo: {
        metaTitle: '',
        metaDescription: '',
        keywords: ['Sarkari Job', 'Recruitment 2026'],
      },
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: 'अभी-अभी',
    };
  });

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: prev.slug || generateSlug(val),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.organization) {
      alert('कृपया नौकरी का शीर्षक और विभाग अवश्य भरें!');
      return;
    }

    const payload = {
      ...formData,
      slug: formData.slug || generateSlug(formData.title),
      updatedAt: 'अभी-अभी',
    };

    db.saveJob(payload);
    alert('नौकरी सूचना सफलतापूर्वक सुरक्षित (Save) कर दी गई!');
    navigate('/admin');
  };

  return (
    <>
      <SeoHead
        title={`${isEditing ? 'Edit Job' : 'Add New Job'} | Admin Portal`}
        description="सरकारी नौकरी जोड़ें अथवा संपादित करें।"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs
          items={[
            { label: 'Admin', url: '/admin' },
            { label: isEditing ? 'Edit Job' : 'Add New Job' },
          ]}
        />

        <form onSubmit={handleSubmit} className="space-y-6 my-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div>
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 mb-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>एडमिन पैनल पर वापस जाएं</span>
              </button>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                {isEditing ? 'नौकरी सूचना संपादित करें (Edit Job)' : 'नई सरकारी भर्ती जोड़ें (Add New Job)'}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isDemo}
                  onChange={(e) => setFormData({ ...formData, isDemo: e.target.checked })}
                  className="rounded text-amber-600"
                />
                <span>डेमो डेटा के रूप में चिह्नित करें (Mark as DEMO)</span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs"
              >
                <Save className="w-4 h-4" />
                <span>सुरक्षित करें (Save Job)</span>
              </button>
            </div>
          </div>

          {/* Basic Details */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h2 className="font-bold text-base text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>बुनियादी जानकारी (Basic Recruitment Details)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  नौकरी का शीर्षक (English Title) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="उदा. SSC CGL 2026 Recruitment Online Form"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  हिंदी शीर्षक (Hindi Title)
                </label>
                <input
                  type="text"
                  value={formData.titleHi}
                  onChange={(e) => setFormData({ ...formData, titleHi: e.target.value })}
                  placeholder="उदा. एसएससी सीजीएल 2026 भर्ती: 14,000+ पदों पर ऑनलाइन आवेदन शुरू"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  URL स्लग (Slug) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="ssc-cgl-recruitment-2026"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  विभाग / आयोग का नाम (Organization) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="उदा. Staff Selection Commission (SSC)"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  भर्ती श्रेणी (Category)
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as JobCategory })}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                >
                  <option value="Central Government">Central Government</option>
                  <option value="State Government">State Government</option>
                  <option value="Railway">Railway</option>
                  <option value="Bank">Bank</option>
                  <option value="Police">Police</option>
                  <option value="Defence">Defence</option>
                  <option value="Teaching">Teaching</option>
                  <option value="PSU">PSU</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  राज्य / क्षेत्र (State)
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="All India, Madhya Pradesh, Uttar Pradesh आदि"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  कुल पद (Total Vacancy)
                </label>
                <input
                  type="text"
                  value={formData.totalVacancy}
                  onChange={(e) => setFormData({ ...formData, totalVacancy: e.target.value })}
                  placeholder="उदा. 14,582 Posts"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  आवेदन स्थिति (Status)
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as JobStatus })}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
                >
                  <option value="OPEN">OPEN (चालू)</option>
                  <option value="NEW">NEW (नया)</option>
                  <option value="CLOSING_SOON">CLOSING_SOON (अंतिम तिथि निकट)</option>
                  <option value="CLOSED">CLOSED (समाप्त)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                संक्षिप्त विवरण (Short Description)
              </label>
              <textarea
                rows={3}
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="भर्ती का संक्षेप में विवरण लिखें..."
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg outline-hidden focus:border-blue-600 focus:bg-white"
              ></textarea>
            </div>
          </div>

          {/* Dates & Fees */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h2 className="font-bold text-base text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>तिथियां एवं शुल्क (Dates & Application Fee)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  आवेदन शुरू तिथि
                </label>
                <input
                  type="text"
                  value={formData.applicationStartDate}
                  onChange={(e) => setFormData({ ...formData, applicationStartDate: e.target.value })}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  आवेदन अंतिम तिथि *
                </label>
                <input
                  type="text"
                  required
                  value={formData.applicationLastDate}
                  onChange={(e) => setFormData({ ...formData, applicationLastDate: e.target.value })}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  फीस भुगतान अंतिम तिथि
                </label>
                <input
                  type="text"
                  value={formData.feeLastDate}
                  onChange={(e) => setFormData({ ...formData, feeLastDate: e.target.value })}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  परीक्षा तिथि
                </label>
                <input
                  type="text"
                  value={formData.examDate}
                  onChange={(e) => setFormData({ ...formData, examDate: e.target.value })}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  General / OBC / EWS Fee (₹)
                </label>
                <input
                  type="text"
                  value={formData.feeGeneral}
                  onChange={(e) => setFormData({ ...formData, feeGeneral: e.target.value })}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  SC / ST Fee (₹)
                </label>
                <input
                  type="text"
                  value={formData.feeSC_ST}
                  onChange={(e) => setFormData({ ...formData, feeSC_ST: e.target.value })}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  दिव्यांग (PH) Fee (₹)
                </label>
                <input
                  type="text"
                  value={formData.feePH}
                  onChange={(e) => setFormData({ ...formData, feePH: e.target.value })}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Eligibility & Salary */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
            <h2 className="font-bold text-base text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>योग्यता एवं आयु सीमा (Eligibility, Age & Salary)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  न्यूनतम आयु (वर्ष)
                </label>
                <input
                  type="number"
                  value={formData.minAge}
                  onChange={(e) => setFormData({ ...formData, minAge: Number(e.target.value) })}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  अधिकतम आयु (वर्ष)
                </label>
                <input
                  type="number"
                  value={formData.maxAge}
                  onChange={(e) => setFormData({ ...formData, maxAge: Number(e.target.value) })}
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  वेतनमान (Salary)
                </label>
                <input
                  type="text"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  placeholder="Pay Level-4 (₹25,500 - ₹81,100)"
                  className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  अनिवार्य शैक्षणिक योग्यता (Qualification)
                </label>
                <input
                  type="text"
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  placeholder="उदा. किसी भी मान्यता प्राप्त विश्वविद्यालय से स्नातक डिग्री (Bachelor Degree in Any Stream)"
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition shadow-md"
            >
              <Save className="w-4 h-4" />
              <span>सुरक्षित करें (Save Recruitment)</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
