import { Result, FAQItem } from '../types';

export interface ResultInput {
  id: string;
  slug: string;
  examName: string;
  examNameHi: string;
  organization: string;
  postName: string;
  examDate?: string;
  resultDate: string;
  resultUrl: string;
  cutOffUrl?: string;
  meritListUrl?: string;
  overview: string;
  howToCheck?: string[];
  cutOffMarks?: { category: string; marks: string }[];
  faqs?: FAQItem[];
  publishedAt?: string;
  updatedAt?: string;
}

export const buildResult = (input: ResultInput): Result => {
  const defaultHowToCheck = [
    `${input.organization} के आधिकारिक पोर्टल (${input.resultUrl.replace('https://', '')}) पर जाएं।`,
    `होमपेज पर "Results / Merit List / Score Card" सेक्शन खोलें।`,
    `"${input.examName}" लिंक पर क्लिक करें।`,
    `अपना रोल नंबर / रजिस्ट्रेशन नंबर और जन्मतिथि (Date of Birth) दर्ज करें अथवा मेरिट लिस्ट PDF डाउनलोड करें।`,
    `पीडीएफ खुलने पर Ctrl+F दबाकर अपना रोल नंबर खोजें और कट-ऑफ अंकों से मिलान करें।`,
    `आगामी दस्तावेज सत्यापन (DV) / काउंसलिंग हेतु अपने स्कोरकार्ड और रिजल्ट का प्रिंटआउट सुरक्षित रख लें।`,
  ];

  const defaultCutOffMarks = [
    { category: 'General / Unreserved (UR)', marks: 'आधिकारिक मेरिट व श्रेणीवार कट-ऑफ नोटिस के अनुसार' },
    { category: 'OBC (Non-Creamy Layer)', marks: 'आरक्षण नियमानुसार निर्धारित अर्हक/चयन कट-ऑफ' },
    { category: 'EWS (Economically Weaker Section)', marks: 'ईडब्ल्यूएस श्रेणी हेतु निर्धारित कट-ऑफ अंक' },
    { category: 'SC / ST Category', marks: 'अनुसूचित जाति/जनजाति श्रेणीवार कट-ऑफ पीडीएफ में उपलब्ध' },
  ];

  const defaultFaqs: FAQItem[] = [
    {
      question: `${input.examName} कैसे चेक और डाउनलोड करें?`,
      answer: `अभ्यर्थी आधिकारिक वेबसाइट (${input.resultUrl}) पर जाकर अपने रोल नंबर/रजिस्ट्रेशन नंबर से लॉगिन करके या चयनित अभ्यर्थियों की मेरिट लिस्ट पीडीएफ डाउनलोड करके परिणाम देख सकते हैं।`,
    },
    {
      question: `परिणाम घोषित होने के बाद अगला चरण क्या है?`,
      answer: `चयनित / शॉर्टलिस्ट किए गए अभ्यर्थियों को संबंधित बोर्ड/आयोग द्वारा निर्धारित कार्यक्रम के अनुसार मूल अभिलेख सत्यापन (Document Verification), कौशल परीक्षण अथवा काउंसलिंग प्रक्रिया में शामिल होना होगा।`,
    },
  ];

  return {
    id: input.id,
    slug: input.slug,
    examName: input.examName,
    examNameHi: input.examNameHi,
    organization: input.organization,
    postName: input.postName,
    examDate: input.examDate,
    resultDate: input.resultDate,
    status: 'Declared',
    resultUrl: input.resultUrl,
    cutOffUrl: input.cutOffUrl || input.resultUrl,
    meritListUrl: input.meritListUrl || input.resultUrl,
    overview: input.overview,
    howToCheck: input.howToCheck && input.howToCheck.length > 0 ? input.howToCheck : defaultHowToCheck,
    cutOffMarks: input.cutOffMarks && input.cutOffMarks.length > 0 ? input.cutOffMarks : defaultCutOffMarks,
    faqs: input.faqs && input.faqs.length > 0 ? input.faqs : defaultFaqs,
    publishedAt: input.publishedAt || '2026-09-28',
    updatedAt: input.updatedAt || '2026-10-01',
    isDemo: false,
  };
};
