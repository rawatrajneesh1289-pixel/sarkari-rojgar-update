import { Job, JobCategory, JobStatus, ImportantLink, FAQ } from '../types';

export interface CreateJobInput {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  organization: string;
  organizationHi?: string;
  postName: string;
  totalVacancy: string;
  qualification: string;
  category: JobCategory;
  state: string;
  status?: JobStatus;
  shortDescription: string;
  shortDescriptionHi: string;
  applicationStartDate: string;
  applicationLastDate: string;
  feeLastDate: string;
  correctionLastDate?: string;
  examDate?: string;
  admitCardDate?: string;
  feeGeneralObcEws: string;
  feeScStPh: string;
  feeFemale?: string;
  paymentMode?: string;
  minAge: string;
  maxAge: string;
  ageCalculationDate?: string;
  ageRelaxationDetails?: string;
  salaryScale: string;
  postWiseVacancies?: { postName: string; totalPosts: string; eligibility: string }[];
  selectionProcess?: string[];
  howToApplySteps?: string[];
  requiredDocuments?: string[];
  officialWebsite: string;
  notificationUrl?: string;
  applyUrl?: string;
  importantLinks?: ImportantLink[];
  faqs?: FAQ[];
  publishedAt?: string;
}

export function buildJob(data: CreateJobInput): Job {
  const defaultApply = data.applyUrl || data.officialWebsite;
  const defaultNotif = data.notificationUrl || data.officialWebsite;

  const links: ImportantLink[] = data.importantLinks || [
    {
      label: 'Apply Online (ऑनलाइन आवेदन करें)',
      url: defaultApply,
      type: 'APPLY',
      isExternal: true,
    },
    {
      label: 'Download Official Notification PDF (विस्तृत अधिसूचना)',
      url: defaultNotif,
      type: 'NOTIFICATION',
      isExternal: true,
    },
    {
      label: 'Official Website (आधिकारिक वेबसाइट)',
      url: data.officialWebsite,
      type: 'WEBSITE',
      isExternal: true,
    },
  ];

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    titleHi: data.titleHi,
    organization: data.organization,
    organizationHi: data.organizationHi || data.organization,
    postName: data.postName,
    totalVacancy: data.totalVacancy,
    qualification: data.qualification,
    category: data.category,
    state: data.state,
    status: data.status || 'OPEN',
    shortDescription: data.shortDescription,
    shortDescriptionHi: data.shortDescriptionHi,
    applicationStartDate: data.applicationStartDate,
    applicationLastDate: data.applicationLastDate,
    feeLastDate: data.feeLastDate,
    correctionLastDate: data.correctionLastDate,
    examDate: data.examDate || 'सूचित किया जाएगा (As per Schedule)',
    admitCardDate: data.admitCardDate || 'परीक्षा से 4 दिन पूर्व',
    feeGeneralObcEws: data.feeGeneralObcEws,
    feeScStPh: data.feeScStPh,
    feeFemale: data.feeFemale,
    paymentMode: data.paymentMode || 'ऑनलाइन नेट बैंकिंग / डेबिट कार्ड / क्रेडिट कार्ड / यूपीआई',
    minAge: data.minAge,
    maxAge: data.maxAge,
    ageCalculationDate: data.ageCalculationDate || '01/07/2026',
    ageRelaxationDetails: data.ageRelaxationDetails || 'नियमानुसार आरक्षित वर्गों (OBC/SC/ST/EWS/PH) को अधिकतम आयु सीमा में छूट अनुमन्य है।',
    postWiseVacancies: data.postWiseVacancies || [
      {
        postName: data.postName,
        totalPosts: data.totalVacancy,
        eligibility: data.qualification,
      },
    ],
    selectionProcess: data.selectionProcess || [
      'लिखित परीक्षा (कंप्यूटर आधारित परीक्षा CBT / OMR)',
      'दस्तावेज सत्यापन (Document Verification)',
      'चिकित्सा परीक्षण (Medical Examination)',
    ],
    salaryScale: data.salaryScale,
    howToApplySteps: data.howToApplySteps || [
      `सबसे पहले ${data.organization} की आधिकारिक वेबसाइट (${data.officialWebsite}) पर जाएं।`,
      'नवीनतम भर्ती अधिसूचना लिंक पर क्लिक करें और पात्रता दिशा-निर्देश ध्यानपूर्वक पढ़ें।',
      'अपना ऑनलाइन पंजीकरण (Registration) करें और लॉगिन आईडी पासवर्ड प्राप्त करें।',
      'मांगी गई सभी शैक्षणिक योग्यता एवं व्यक्तिगत विवरण सावधानीपूर्वक भरें।',
      'पासपोर्ट साइज फोटो, हस्ताक्षर एवं आवश्यक प्रमाण पत्र निर्धारित प्रारूप में अपलोड करें।',
      'अपनी श्रेणी अनुसार परीक्षा शुल्क का ऑनलाइन भुगतान करें।',
      'फॉर्म फाइनल सबमिट करने के बाद रसीद व आवेदन पत्र का प्रिंटआउट सुरक्षित रख लें।',
    ],
    requiredDocuments: data.requiredDocuments || [
      '10वीं एवं 12वीं की अंकसूची एवं प्रमाण पत्र',
      'अनिवार्य शैक्षणिक डिग्री / डिप्लोमा / सर्टिफिकेट',
      'आधार कार्ड या अन्य सरकारी पहचान पत्र',
      'जाति प्रमाण पत्र एवं निवास प्रमाण पत्र (आरक्षित वर्ग हेतु)',
      'हाल ही में खिंचवाई गई रंगीन पासपोर्ट साइज फोटो एवं हस्ताक्षर',
    ],
    importantLinks: links,
    officialWebsite: data.officialWebsite,
    applyUrl: data.applyUrl || data.officialWebsite,
    notificationUrl: data.notificationUrl || data.officialWebsite,
    faqs: data.faqs || [
      {
        question: `${data.postName} के लिए ऑनलाइन आवेदन की अंतिम तिथि क्या है?`,
        answer: `इस भर्ती के लिए ऑनलाइन आवेदन की अंतिम तिथि ${data.applicationLastDate} निर्धारित है।`,
      },
      {
        question: 'आवेदन शुल्क कितना है?',
        answer: `General/OBC/EWS के लिए ${data.feeGeneralObcEws} तथा SC/ST/PH के लिए ${data.feeScStPh} निर्धारित है।`,
      },
    ],
    seoTitle: `${data.title} - Notification, Eligibility, Last Date`,
    seoDescription: `${data.titleHi}। कुल पद: ${data.totalVacancy}। योग्यता, आयु सीमा, परीक्षा तिथि एवं ऑनलाइन आवेदन की विस्तृत जानकारी sarkarirozgarupdate.com पर देखें।`,
    seoKeywords: [
      data.postName,
      data.organization,
      'Sarkari Result 2026',
      'Latest Government Jobs',
      'Online Form 2026',
    ],
    publishedAt: data.publishedAt || '2026-08-30',
    updatedAt: '2026-09-06',
    isDemo: false, // Genuine real job entries
  };
}
