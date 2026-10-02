import { Result } from '../types';
import { buildResult } from './resultBuilder';

export const NEW_REQUESTED_RESULTS_PART1: Result[] = [
  // 1. RRB ALP CBT-II Result 2026 – Out
  buildResult({
    id: 'res-rrb-alp-cbt2-2026',
    slug: 'rrb-alp-cbt-ii-result-2026-out',
    examName: 'RRB ALP CBT-II Result 2026 – Out (CEN 01/2025-26)',
    examNameHi: 'रेलवे भर्ती बोर्ड (RRB) असिस्टेंट लोको पायलट (ALP) द्वितीय चरण कंप्यूटर आधारित परीक्षा (CBT-II) परिणाम, कट-ऑफ एवं CBAT शॉर्टलिस्ट 2026',
    organization: 'Railway Recruitment Boards (RRBs / Ministry of Railways)',
    postName: 'Assistant Loco Pilot (ALP) Pay Level-2 in Indian Railways',
    resultDate: '30 सितंबर 2026',
    resultUrl: 'https://www.rrbcdg.gov.in',
    cutOffUrl: 'https://www.rrbcdg.gov.in',
    meritListUrl: 'https://www.rrbapply.gov.in',
    overview: 'रेलवे भर्ती बोर्ड (RRB) द्वारा असिस्टेंट लोको पायलट (ALP) भर्ती के अंतर्गत आयोजित द्वितीय चरण कंप्यूटर आधारित परीक्षा (CBT-II: Part-A एवं Part-B) का परिणाम, जोन-वार कट-ऑफ अंक और व्यक्तिगत स्कोरकार्ड सभी 21 क्षेत्रीय आरआरबी वेबसाइटों पर जारी कर दिए गए हैं। Part-B (Relevant Trade) में न्यूनतम 35% अर्हक अंक प्राप्त करने वाले तथा Part-A के नॉर्मलाइज्ड अंकों के आधार पर कुल रिक्तियों के 8 गुना (8x) अभ्यर्थियों को कंप्यूटर आधारित एप्टीट्यूड टेस्ट (CBAT / साइको टेस्ट) के लिए शॉर्टलिस्ट किया गया है।',
    howToCheck: [
      'अपने संबंधित क्षेत्रीय रेलवे भर्ती बोर्ड (जैसे rrbcdg.gov.in, rrbpatna.gov.in, rrballahabad.gov.in आदि) की आधिकारिक वेबसाइट पर जाएं।',
      'होमपेज पर "CEN-01/2025-26 (ALP): List of Candidates Shortlisted for Computer Based Aptitude Test (CBAT) & Cut-Off Marks" लिंक पर क्लिक करें।',
      'चयनित अभ्यर्थियों के रोल नंबर की पीडीएफ फाइल डाउनलोड करें और Ctrl+F से अपना रोल नंबर खोजें।',
      'अपना व्यक्तिगत स्कोरकार्ड (Part-A व Part-B मार्क्स) देखने के लिए rrbapply.gov.in या क्षेत्रीय पोर्टल के स्कोरकार्ड लिंक पर रजिस्ट्रेशन नंबर व जन्मतिथि से लॉगिन करें।',
      'शॉर्टलिस्ट अभ्यर्थी CBAT परीक्षा हेतु दृष्टि प्रमाण पत्र (Vision Certificate in Prescribed Format A-1) तैयार रखें।',
    ],
    cutOffMarks: [
      { category: 'General (UR - Part A Normalized)', marks: '72.40 - 78.85 Marks (जोन अनुसार)' },
      { category: 'OBC (Non-Creamy Layer)', marks: '66.50 - 73.10 Marks' },
      { category: 'EWS (Economically Weaker)', marks: '63.20 - 69.40 Marks' },
      { category: 'SC (Scheduled Caste)', marks: '56.80 - 62.50 Marks' },
      { category: 'ST (Scheduled Tribe)', marks: '51.00 - 57.25 Marks' },
      { category: 'Part-B (Qualifying Trade Test - All Categories)', marks: 'न्यूनतम 35% अंक अनिवार्य (कोई छूट नहीं)' },
    ],
    faqs: [
      {
        question: 'RRB ALP CBT-II में सफल अभ्यर्थियों का अगला चरण क्या है?',
        answer: 'CBT-II में शॉर्टलिस्ट किए गए अभ्यर्थियों को कंप्यूटर आधारित एप्टीट्यूड टेस्ट (CBAT / Psycho Test) देना होगा, जिसमें प्रत्येक टेस्ट बैटरी में न्यूनतम T-Score 42 लाना अनिवार्य है।',
      },
      {
        question: 'ALP अंतिम मेरिट किस आधार पर बनेगी?',
        answer: 'अंतिम मेरिट सूची CBT-II (Part-A) के 70% वेटेज और CBAT (साइको टेस्ट) के 30% वेटेज को मिलाकर तैयार की जाएगी।',
      },
    ],
  }),

  // 2. RRB Junior Engineer JE CBT-2 Result 2026 – Out
  buildResult({
    id: 'res-rrb-je-cbt2-2026',
    slug: 'rrb-junior-engineer-je-cbt-2-result-2026-out',
    examName: 'RRB Junior Engineer JE CBT-2 Result 2026 – Out',
    examNameHi: 'रेलवे भर्ती बोर्ड (RRB) जूनियर इंजीनियर (JE), DMS एवं CMA द्वितीय चरण (CBT-2) अंतिम शॉर्टलिस्ट परिणाम व कट-ऑफ 2026',
    organization: 'Railway Recruitment Boards (RRBs / Ministry of Railways)',
    postName: 'Junior Engineer (Civil, Mechanical, Electrical, S&T), Depot Material Superintendent (DMS) & Chemical & Metallurgical Assistant (CMA)',
    resultDate: '29 सितंबर 2026',
    resultUrl: 'https://www.rrbcdg.gov.in',
    cutOffUrl: 'https://www.rrbcdg.gov.in',
    meritListUrl: 'https://www.rrbapply.gov.in',
    overview: 'रेलवे भर्ती बोर्ड (RRB) ने जूनियर इंजीनियर (JE), डिपो मटेरियल सुपरिंटेंडेंट (DMS) और केमिकल एंड मेटलर्जिकल असिस्टेंट (CMA) पदों के लिए आयोजित द्वितीय चरण कंप्यूटर आधारित परीक्षा (CBT-2) का परिणाम एवं दस्तावेज सत्यापन (Document Verification) व मेडिकल परीक्षण के लिए शॉर्टलिस्ट किए गए अभ्यर्थियों की रोल नंबर सूची आधिकारिक वेबसाइटों पर जारी कर दी है।',
    cutOffMarks: [
      { category: 'Junior Engineer Civil/Mech/Elec (UR)', marks: '96.50 - 104.25 Marks (Out of 150)' },
      { category: 'Junior Engineer (OBC-NCL)', marks: '91.20 - 98.40 Marks' },
      { category: 'Junior Engineer (EWS)', marks: '88.75 - 95.10 Marks' },
      { category: 'Junior Engineer (SC / ST)', marks: '81.50 / 76.20 Marks' },
      { category: 'DMS / CMA Posts (UR)', marks: '101.40 - 108.00 Marks' },
    ],
  }),

  // 3. RRB NTPC 10+2 UG CBT-II Answer Key & Score Card 2026 – Out
  buildResult({
    id: 'res-rrb-ntpc-ug-cbt2-key-score-2026',
    slug: 'rrb-ntpc-10-plus-2-ug-cbt-ii-answer-key-2026',
    examName: 'RRB NTPC 10+2 UG CBT-II Answer Key & Response Sheet 2026 – Out',
    examNameHi: 'रेलवे आरआरबी एनटीपीसी 10+2 अंडर ग्रेजुएट द्वितीय चरण (CBT-II) आधिकारिक उत्तर कुंजी, रिस्पॉन्स शीट एवं स्कोर गणना 2026',
    organization: 'Railway Recruitment Boards (RRBs / Ministry of Railways)',
    postName: 'Commercial Cum Ticket Clerk, Accounts Clerk Cum Typist, Junior Clerk Cum Typist & Trains Clerk (Level 2 & 3)',
    resultDate: '27 सितंबर 2026',
    resultUrl: 'https://www.rrbapply.gov.in',
    cutOffUrl: 'https://www.rrbcdg.gov.in',
    overview: 'रेलवे भर्ती बोर्ड (RRB) द्वारा एनटीपीसी अंडर ग्रेजुएट (10+2 लेवल) द्वितीय चरण परीक्षा (CBT-II) की आधिकारिक उत्तर कुंजी, प्रश्न पत्र एवं अभ्यर्थी रिस्पॉन्स शीट जारी कर दी गई है। परीक्षार्थी अपने रजिस्ट्रेशन नंबर एवं जन्मतिथि से लॉगिन कर अपने उत्तरों का मिलान कर सकते हैं और कंप्यूटर टाइपिंग स्किल टेस्ट (CBST) व दस्तावेज सत्यापन के संभावित कट-ऑफ का आकलन कर सकते हैं।',
    cutOffMarks: [
      { category: 'Level-3 Commercial Cum Ticket Clerk (UR Expected)', marks: '84.00 - 89.50 Marks (Out of 120)' },
      { category: 'Level-2 Clerk Cum Typist for CBST (UR)', marks: '76.50 - 82.00 Marks (Out of 120)' },
      { category: 'OBC / EWS Expected Range', marks: '73.00 - 84.00 Marks' },
      { category: 'SC / ST Expected Range', marks: '64.50 - 74.00 Marks' },
    ],
  }),

  // 4. UPSSSC Lekhpal Mains Result 2026 – Out
  buildResult({
    id: 'res-upsssc-lekhpal-mains-2026',
    slug: 'upsssc-lekhpal-mains-result-2026-out',
    examName: 'UPSSSC Lekhpal Mains Result 2026 – Out',
    examNameHi: 'उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC) राजस्व लेखपाल मुख्य परीक्षा परिणाम एवं अभिलेख परीक्षण (DV) कट-ऑफ 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Rajasva Lekhpal (Revenue Department, Uttar Pradesh)',
    resultDate: '29 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC), लखनऊ द्वारा राजस्व लेखपाल मुख्य परीक्षा का परिणाम एवं अर्हता/अभिलेख परीक्षण (Document Verification) हेतु चिन्हित अभ्यर्थियों का कट-ऑफ आधिकारिक पोर्टल upsssc.gov.in पर घोषित कर दिया गया है। अभ्यर्थी अपने रजिस्ट्रेशन नंबर, जन्मतिथि और जेंडर दर्ज करके अपना व्यक्तिगत परिणाम देख सकते हैं।',
    cutOffMarks: [
      { category: 'Unreserved (General / UR)', marks: '77.25 Marks (Out of 100)' },
      { category: 'OBC (अन्य पिछड़ा वर्ग)', marks: '75.50 Marks' },
      { category: 'EWS (आर्थिक रूप से कमजोर वर्ग)', marks: '75.50 Marks' },
      { category: 'Scheduled Caste (SC)', marks: '73.75 Marks' },
      { category: 'Scheduled Tribe (ST)', marks: '66.50 Marks' },
      { category: 'Female (महिला क्षैतिज आरक्षण)', marks: '75.00 Marks' },
    ],
  }),

  // 5. UPSSSC Platoon Commander / Block Organizer Eligibility Result 2026
  buildResult({
    id: 'res-upsssc-platoon-commander-eligibility-2026',
    slug: 'upsssc-platoon-commander-block-organizer-eligibility-result-2026',
    examName: 'UPSSSC Platoon Commander / Block Organizer Eligibility Result 2026',
    examNameHi: 'यूपीएसएसएससी प्लाटून कमांडर एवं ब्लॉक ऑर्गेनाइजर (क्षेत्रीय युवा कल्याण एवं प्रादेशिक विकास दल अधिकारी) मुख्य परीक्षा शॉर्टलिस्ट परिणाम 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Platoon Commander & Block Organizer (Home Guards & Youth Welfare Dept)',
    resultDate: '30 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC) ने पीईटी (PET) के नॉर्मलाइज्ड स्कोर के आधार पर प्लाटून कमांडर एवं ब्लॉक ऑर्गेनाइजर मुख्य परीक्षा के लिए पात्र (Shortlisted) अभ्यर्थियों का एलिजिबिलिटी रिजल्ट और कट-ऑफ अंक जारी कर दिया है। शॉर्टलिस्ट किए गए अभ्यर्थी अब मुख्य परीक्षा शुल्क ऑनलाइन जमा कर प्रवेश पत्र डाउनलोड कर सकेंगे।',
    cutOffMarks: [
      { category: 'General (UR) / OBC / EWS PET Normalized Cutoff', marks: '64.52 Marks' },
      { category: 'Scheduled Caste (SC)', marks: '61.80 Marks' },
      { category: 'Scheduled Tribe (ST)', marks: '54.25 Marks' },
    ],
  }),

  // 6. UPSSSC Havildar Instructor Eligibility Result 2026
  buildResult({
    id: 'res-upsssc-havildar-instructor-eligibility-2026',
    slug: 'upsssc-havildar-instructor-eligibility-result-2026',
    examName: 'UPSSSC Havildar Instructor Eligibility Result 2026',
    examNameHi: 'यूपीएसएसएससी हवलदार इंस्ट्रक्टर (होमगार्ड्स विभाग) मुख्य परीक्षा पात्रता परिणाम व पीईटी कट-ऑफ 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Havildar Instructor (Home Guards Department, UP)',
    resultDate: '30 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'यूपीएसएसएससी द्वारा होमगार्ड्स विभाग के अंतर्गत हवलदार इंस्ट्रक्टर पदों पर चयन हेतु मुख्य परीक्षा के लिए शॉर्टलिस्ट किए गए अभ्यर्थियों का पात्रता परिणाम (Eligibility Result) एवं श्रेणीवार कट-ऑफ अंक आधिकारिक वेबसाइट upsssc.gov.in पर प्रकाशित कर दिए गए हैं।',
    cutOffMarks: [
      { category: 'Unreserved (UR) / OBC / EWS', marks: '62.15 PET Normalized Score' },
      { category: 'SC / ST Category', marks: '58.40 / 51.10 Score' },
    ],
  }),

  // 7. UPSSSC Enforcement Constable 2023 Final Result
  buildResult({
    id: 'res-upsssc-enforcement-constable-final-2026',
    slug: 'upsssc-enforcement-constable-2023-final-result',
    examName: 'UPSSSC Enforcement Constable 2023 Final Result – Out',
    examNameHi: 'यूपीएसएसएससी प्रवर्तन कांस्टेबल (Enforcement Constable 04-Exam/2023) अंतिम चयन परिणाम एवं कट-ऑफ 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Enforcement Constable (प्रवर्तन सिपाही - परिवहन विभाग, उत्तर प्रदेश)',
    resultDate: '30 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC) ने विज्ञापन संख्या 04-परीक्षा/2023 के अंतर्गत परिवहन विभाग में प्रवर्तन कांस्टेबल (Enforcement Constable) के 477 पदों पर लिखित परीक्षा, कंप्यूटर प्रवीणता एवं शारीरिक मानक/दक्षता परीक्षा (PET/PST) के उपरांत अंतिम चयन परिणाम घोषित कर दिया है।',
    cutOffMarks: [
      { category: 'Unreserved (UR)', marks: '78.50 Marks' },
      { category: 'OBC', marks: '76.25 Marks' },
      { category: 'EWS', marks: '75.75 Marks' },
      { category: 'SC / ST', marks: '71.00 / 64.50 Marks' },
      { category: 'Female', marks: '74.25 Marks' },
    ],
  }),

  // 8. UPSSSC Assistant Store Keeper Final Result 2026
  buildResult({
    id: 'res-upsssc-assistant-store-keeper-final-2026',
    slug: 'upsssc-assistant-store-keeper-final-result-2026',
    examName: 'UPSSSC Assistant Store Keeper Final Result 2026 – Out',
    examNameHi: 'यूपीएसएसएससी सहायक स्टोर कीपर एवं सहायक ग्रेड-III अंतिम चयन परिणाम व मेरिट सूची 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Assistant Store Keeper & Assistant Grade-III (200 Posts)',
    resultDate: '28 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'यूपीएसएसएससी ने सहायक स्टोर कीपर एवं सहायक ग्रेड-III भर्ती परीक्षा के अभिलेख सत्यापन एवं टंकण परीक्षण के उपरांत अंतिम रूप से चयनित अभ्यर्थियों की मेरिट लिस्ट एवं श्रेणीवार कट-ऑफ अंक जारी कर दिए हैं।',
  }),

  // 9. UPSSSC Junior Assistant, Clerk Grade II Final Result 2026 (Covers 09/2022 & 2023 Final Result)
  buildResult({
    id: 'res-upsssc-junior-assistant-final-2026',
    slug: 'upsssc-junior-assistant-clerk-grade-ii-final-result-2026',
    examName: 'UPSSSC Junior Assistant, Clerk Grade II (09/2022 & 2023) Final Result 2026',
    examNameHi: 'यूपीएसएसएससी कनिष्ठ सहायक (Junior Assistant) एवं लिपिक ग्रेड-II अंतिम चयन परिणाम व विभाग आवंटन 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Junior Assistant (कनिष्ठ सहायक), Junior Clerk & Assistant Grade-III (5,512+ & 1,262 Posts)',
    resultDate: '27 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC) द्वारा कनिष्ठ सहायक (Junior Assistant), कनिष्ठ लिपिक एवं सहायक स्तर-III (विज्ञापन संख्या 09-परीक्षा/2022 एवं 08-परीक्षा/2023) की लिखित परीक्षा, हिंदी व अंग्रेजी टाइपिंग परीक्षा तथा दस्तावेज सत्यापन के पश्चात अंतिम चयन सूची और कट-ऑफ अंक आधिकारिक पोर्टल upsssc.gov.in पर घोषित कर दिए गए हैं।',
    cutOffMarks: [
      { category: 'Unreserved (UR Final Merit)', marks: '71.25 Marks' },
      { category: 'OBC (Non-Creamy Layer)', marks: '69.50 Marks' },
      { category: 'EWS', marks: '69.25 Marks' },
      { category: 'SC / ST', marks: '65.75 / 59.00 Marks' },
    ],
  }),

  // 10. UPSSSC Nakshanavish and Manchitrak 2023 Mains Result
  buildResult({
    id: 'res-upsssc-nakshanavish-manchitrak-mains-2026',
    slug: 'upsssc-nakshanavish-and-manchitrak-2023-mains-result',
    examName: 'UPSSSC Nakshanavish and Manchitrak 2023 Mains Result – Out',
    examNameHi: 'यूपीएसएसएससी नक्शानवीस एवं मानचित्रक (Draftsman & Cartographer) मुख्य परीक्षा परिणाम 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Nakshanavish (Draftsman) & Manchitrak (Cartographer) in Irrigation & Agriculture Dept (283 Posts)',
    resultDate: '26 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'यूपीएसएसएससी द्वारा सिंचाई एवं जल संसाधन विभाग तथा कृषि विभाग के अंतर्गत नक्शानवीस एवं मानचित्रक (विज्ञापन संख्या 11-परीक्षा/2023) मुख्य परीक्षा का परिणाम एवं अभिलेख सत्यापन (DV) हेतु अर्ह अभ्यर्थियों की सूची जारी कर दी गई है।',
  }),

  // 11. UPSSSC VDO 2023 Final Result
  buildResult({
    id: 'res-upsssc-vdo-2023-final-2026',
    slug: 'upsssc-vdo-2023-final-result-2026',
    examName: 'UPSSSC VDO (Gram Panchayat Adhikari) 2023 Final Result – Out',
    examNameHi: 'यूपीएसएसएससी ग्राम पंचायत अधिकारी (VDO 01-Exam/2023) अंतिम चयन परिणाम एवं कट-ऑफ 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Gram Panchayat Adhikari (VDO - 1,468 Posts)',
    resultDate: '25 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग ने पंचायती राज विभाग के अंतर्गत ग्राम पंचायत अधिकारी (VDO - विज्ञापन संख्या 01-परीक्षा/2023) के 1,468 पदों पर मुख्य परीक्षा एवं अभिलेख परीक्षण के उपरांत अंतिम चयन परिणाम घोषित कर दिया है।',
    cutOffMarks: [
      { category: 'Unreserved (UR)', marks: '74.50 Marks' },
      { category: 'OBC / EWS', marks: '73.25 / 73.00 Marks' },
      { category: 'SC / ST', marks: '68.75 / 61.50 Marks' },
    ],
  }),

  // 12. UPSSSC Auditor / Assistant Accountant 2024 Final Result
  buildResult({
    id: 'res-upsssc-auditor-asst-accountant-final-2026',
    slug: 'upsssc-auditor-assistant-accountant-2024-final-result',
    examName: 'UPSSSC Auditor / Assistant Accountant 2024 Final Result – Out',
    examNameHi: 'यूपीएसएसएससी लेखा परीक्षक (Auditor) एवं सहायक लेखाकार अंतिम चयन परिणाम 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Auditor (लेखा परीक्षक) & Assistant Accountant (सहायक लेखाकार)',
    resultDate: '25 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'यूपीएसएसएससी द्वारा लेखा परीक्षक (Auditor) एवं सहायक लेखाकार भर्ती का अंतिम चयन परिणाम और श्रेणीवार अंतिम कट-ऑफ अंक आयोग के पोर्टल upsssc.gov.in पर प्रकाशित कर दिया गया है।',
  }),

  // 13. UPSSSC Forensic Science Laboratory, Forest Guard, Lower PCS & Pharmacist Final Answer Keys / Score
  buildResult({
    id: 'res-upsssc-fsl-forest-guard-pharmacist-lower-pcs-key-2026',
    slug: 'upsssc-fsl-forest-guard-lower-pcs-pharmacist-final-answer-key-2026',
    examName: 'UPSSSC FSL, Forest Guard, Lower PCS & Pharmacist Final Answer Key / Score 2026 – Out',
    examNameHi: 'यूपीएसएसएससी विधि विज्ञान प्रयोगशाला (FSL), वन रक्षक, लोअर पीसीएस एवं फार्मासिस्ट अंतिम उत्तर कुंजी व स्कोर सूचना 2026',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC, Lucknow)',
    postName: 'Forensic Science Lab Scientific Asst, Forest/Wildlife Guard, Lower Subordinate (PCS) & Pharmacist',
    resultDate: '28 सितंबर 2026',
    resultUrl: 'https://upsssc.gov.in',
    overview: 'उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC) ने विधि विज्ञान प्रयोगशाला (Forensic Science Laboratory), वन रक्षक एवं वन्य जीव रक्षक (Forest / Wildlife Guard), सम्मिलित अवर अधीनस्थ सेवा (Lower PCS) तथा भेषजिक (Pharmacist) मुख्य परीक्षा की संशोधित/अंतिम उत्तर कुंजी (Final Answer Key) जारी कर दी है। अभ्यर्थी आयोग के पोर्टल से मास्टर प्रश्न पत्र और संशोधित उत्तर कुंजी पीडीएफ डाउनलोड कर सकते हैं।',
  }),

  // 14. UPPSC LT Grade Assistant Teacher Mains Result 2026
  buildResult({
    id: 'res-uppsc-lt-grade-mains-2026',
    slug: 'uppsc-lt-grade-assistant-teacher-mains-result-2026',
    examName: 'UPPSC LT Grade Assistant Teacher Mains Result 2026 – Out',
    examNameHi: 'उत्तर प्रदेश लोक सेवा आयोग (UPPSC) एलटी ग्रेड सहायक अध्यापक (प्रशिक्षित स्नातक श्रेणी) मुख्य परीक्षा परिणाम 2026',
    organization: 'Uttar Pradesh Public Service Commission (UPPSC, Prayagraj)',
    postName: 'Assistant Teacher (Trained Graduate Grade - LT Grade Male/Female Branch)',
    resultDate: '27 सितंबर 2026',
    resultUrl: 'https://uppsc.up.nic.in',
    overview: 'उत्तर प्रदेश लोक सेवा आयोग (UPPSC), प्रयागराज ने राजकीय माध्यमिक विद्यालयों में सहायक अध्यापक (प्रशिक्षित स्नातक श्रेणी - LT Grade) मुख्य परीक्षा का विषयवार परिणाम एवं अभिलेख सत्यापन हेतु सफल अभ्यर्थियों की सूची आधिकारिक वेबसाइट uppsc.up.nic.in पर घोषित कर दी है।',
  }),

  // 15. UPPSC Computer Assistant Typing Test Result 2026
  buildResult({
    id: 'res-uppsc-computer-assistant-typing-2026',
    slug: 'uppsc-computer-assistant-typing-test-result-2026',
    examName: 'UPPSC Computer Assistant Typing Test Result 2026 – Out',
    examNameHi: 'यूपीपीएससी कंप्यूटर सहायक (Computer Assistant) टंकण परीक्षा एवं अंतिम चयन परिणाम 2026',
    organization: 'Uttar Pradesh Public Service Commission (UPPSC, Prayagraj)',
    postName: 'Computer Assistant in UPPSC Office',
    resultDate: '26 सितंबर 2026',
    resultUrl: 'https://uppsc.up.nic.in',
    overview: 'उत्तर प्रदेश लोक सेवा आयोग द्वारा कंप्यूटर सहायक भर्ती के अंतर्गत आयोजित कंप्यूटर टाइपिंग परीक्षा में सफल एवं अंतिम रूप से चयनित अभ्यर्थियों की मेरिट लिस्ट जारी कर दी गई है।',
  }),

  // 16. UPESSC Principal Answer Key & Score 2026 – Out
  buildResult({
    id: 'res-upessc-principal-key-2026',
    slug: 'upessc-principal-answer-key-result-2026-out',
    examName: 'UPESSC Principal Answer Key 2026 – Out',
    examNameHi: 'उत्तर प्रदेश शिक्षा सेवा चयन आयोग (UPESSC) प्राचार्य (Principal) भर्ती लिखित परीक्षा आधिकारिक उत्तर कुंजी 2026',
    organization: 'Uttar Pradesh Education Service Selection Commission (UPESSC, Prayagraj)',
    postName: 'Post Graduate / Degree College Principal Recruitment',
    resultDate: '28 सितंबर 2026',
    resultUrl: 'https://upessc.up.gov.in',
    overview: 'उत्तर प्रदेश शिक्षा सेवा चयन आयोग (UPESSC), प्रयागराज ने अशासकीय सहायता प्राप्त महाविद्यालयों में प्राचार्य (Principal) पदों हेतु आयोजित लिखित परीक्षा की आधिकारिक बुकलेट सीरीज-वार उत्तर कुंजी जारी कर दी है।',
  }),

  // 17. UP TGT & PGT 2022 College Allotment & Waiting List Result 2026
  buildResult({
    id: 'res-up-tgt-pgt-allotment-waiting-2026',
    slug: 'up-tgt-pgt-2022-college-allotment-waiting-list-result-2026',
    examName: 'UP TGT 2022 College Allotment Result & PGT Student Waiting List 2026',
    examNameHi: 'उत्तर प्रदेश माध्यमिक शिक्षा सेवा चयन बोर्ड टीजीटी (TGT) कॉलेज आवंटन एवं पीजीटी (PGT) प्रतीक्षा सूची पैनल परिणाम 2026',
    organization: 'Secondary Education Services Selection Board / Directorate of Secondary Education UP',
    postName: 'Trained Graduate Teacher (TGT) & Post Graduate Teacher (PGT) in Aided Inter Colleges',
    resultDate: '26 सितंबर 2026',
    resultUrl: 'https://upsessb.pariksha.nic.in',
    overview: 'माध्यमिक शिक्षा निदेशालय एवं उत्तर प्रदेश शिक्षा सेवा चयन आयोग द्वारा टीजीटी (TGT) एवं पीजीटी (PGT) भर्ती के अंतर्गत अवशेष पैनल / प्रतीक्षा सूची (Waiting List) के अभ्यर्थियों का काउंसलिंग उपरांत विद्यालय आवंटन परिणाम (College Allotment List) जारी कर दिया गया है।',
  }),

  // 18. UP DGMHUP ANM Training Selected Candidate List 2026
  buildResult({
    id: 'res-up-dgmhup-anm-list-2026',
    slug: 'up-dgmhup-anm-training-selected-candidate-list-2026',
    examName: 'UP DGMHUP ANM Training Selected Candidate List 2026 – Out',
    examNameHi: 'चिकित्सा एवं स्वास्थ्य सेवा निदेशालय उत्तर प्रदेश (DGMHUP) एएनएम (ANM) प्रशिक्षण चयनित अभ्यर्थी मेरिट व प्रशिक्षण केंद्र आवंटन सूची 2026',
    organization: 'Directorate of Medical & Health Services, Uttar Pradesh (DGMHUP, Lucknow)',
    postName: '2-Year Auxiliary Nurse Midwife (ANM) Training Course (1,800 Seats)',
    resultDate: '27 सितंबर 2026',
    resultUrl: 'https://dgmhup.gov.in',
    overview: 'चिकित्सा एवं स्वास्थ्य सेवा निदेशालय, उत्तर प्रदेश (DGMHUP) ने 2-वर्षीय एएनएम (Auxiliary Nurse & Midwife) प्रशिक्षण सत्र 2026 हेतु शॉर्टलिस्ट एवं अंतिम रूप से चयनित महिला अभ्यर्थियों की मेरिट लिस्ट तथा आवंटित एएनएम ट्रेनिंग सेंटर की सूची आधिकारिक पोर्टल dgmhup.gov.in पर प्रकाशित कर दी है।',
  }),

  // 19. UP DELEd 2026 Allotment Result
  buildResult({
    id: 'res-up-deled-allotment-2026',
    slug: 'up-deled-2026-allotment-result',
    examName: 'UP DELEd 2026 Allotment Result – Out (DIET & Private College Seat Allotment)',
    examNameHi: 'उत्तर प्रदेश डीएलएड (UP D.El.Ed / BTC) 2026 स्टेट रैंक एवं प्रथम चरण कॉलेज/डायट सीट आवंटन परिणाम',
    organization: 'Examination Regulatory Authority UP, Prayagraj (PNP)',
    postName: 'UP D.El.Ed 2-Year Elementary Teacher Training Admission 2026',
    resultDate: '25 सितंबर 2026',
    resultUrl: 'https://updeled.gov.in',
    overview: 'परीक्षा नियामक प्राधिकारी, उत्तर प्रदेश (प्रयागराज) द्वारा यूपी डीएलएड (D.El.Ed 2026) प्रवेश काउंसलिंग के प्रथम चरण का संस्था आवंटन परिणाम (Seat Allotment Result) आधिकारिक पोर्टल updeled.gov.in पर जारी कर दिया गया है। अभ्यर्थी ₹5,000 अलॉटमेंट शुल्क जमा कर अपना प्रोविजनल अलॉटमेंट लेटर डाउनलोड कर सकते हैं।',
  }),

  // 20. AIIMS CRE 5th Group B, C Result 2026 – Out
  buildResult({
    id: 'res-aiims-cre-group-bc-2026',
    slug: 'aiims-cre-5th-group-b-c-result-2026-out',
    examName: 'AIIMS CRE 5th Group B, C Result 2026 – Out',
    examNameHi: 'अखिल भारतीय आयुर्विज्ञान संस्थान (AIIMS) कॉमन रिक्रूटमेंट एग्जामिनेशन (CRE 5th) ग्रुप बी एवं सी परिणाम व संस्थान आवंटन 2026',
    organization: 'All India Institute of Medical Sciences (AIIMS, New Delhi)',
    postName: 'Assistant Administrative Officer, Store Keeper, Stenographer, LDC, UDC, Lab Technician, Pharmacist & Various Group B & C Posts',
    resultDate: '29 सितंबर 2026',
    resultUrl: 'https://www.aiimsexams.ac.in',
    overview: 'अखिल भारतीय आयुर्विज्ञान संस्थान (AIIMS), नई दिल्ली ने देश भर के विभिन्न एम्स संस्थानों में गैर-संकाय ग्रुप बी और ग्रुप सी पदों पर भर्ती हेतु आयोजित कॉमन रिक्रूटमेंट एग्जामिनेशन (CRE-AIIMS) का पद-वार परिणाम, कौशल परीक्षण अर्हता सूची और आवंटित एम्स संस्थान की मेरिट लिस्ट aiimsexams.ac.in पर घोषित कर दी है।',
  }),

  // 21. DSSSB Delhi High Court Attendant Result 2026
  buildResult({
    id: 'res-dsssb-delhi-hc-attendant-2026',
    slug: 'dsssb-delhi-high-court-attendant-result-2026',
    examName: 'DSSSB Delhi High Court Attendant Result 2026 – Out',
    examNameHi: 'दिल्ली अधीनस्थ सेवा चयन बोर्ड (DSSSB) दिल्ली हाईकोर्ट अटेंडेंट, प्रोसेस सर्वर व चपरासी भर्ती परीक्षा परिणाम 2026',
    organization: 'Delhi Subordinate Services Selection Board (DSSSB, Govt. of NCT of Delhi)',
    postName: 'Court Attendant, Room Attendant, Process Server & Orderly in Delhi High Court & District Courts',
    resultDate: '30 सितंबर 2026',
    resultUrl: 'https://dsssb.delhi.gov.in',
    cutOffUrl: 'https://dsssbonline.nic.in',
    overview: 'दिल्ली अधीनस्थ सेवा चयन बोर्ड (DSSSB) ने दिल्ली उच्च न्यायालय एवं जिला न्यायालयों के अंतर्गत कोर्ट अटेंडेंट एवं समकक्ष पदों की टियर-I लिखित परीक्षा का परिणाम और ई-डोजियर / अगले चरण के लिए श्रेणीवार कट-ऑफ अंक जारी कर दिए हैं। अभ्यर्थी dsssbonline.nic.in (OARS पोर्टल) पर लॉगिन करके अपने प्राप्तांक देख सकते हैं।',
  }),

  // 22. Delhi DSSSB Various Posts Result 2026
  buildResult({
    id: 'res-delhi-dsssb-various-posts-2026',
    slug: 'delhi-dsssb-various-posts-result-2026',
    examName: 'Delhi DSSSB Various Posts Result 2026 – Out (TGT, LDC, Pharmacist, Nursing Officer)',
    examNameHi: 'डीएसएसएसबी (DSSSB) टीजीटी, एलडीसी, फार्मासिस्ट एवं विभिन्न पोस्ट कोड परीक्षा परिणाम व ई-डोजियर कट-ऑफ 2026',
    organization: 'Delhi Subordinate Services Selection Board (DSSSB, New Delhi)',
    postName: 'TGT, Assistant Teacher (Nursery/Primary), LDC, Junior Assistant, Pharmacist & Technical Posts',
    resultDate: '26 सितंबर 2026',
    resultUrl: 'https://dsssb.delhi.gov.in',
    cutOffUrl: 'https://dsssbonline.nic.in',
    overview: 'दिल्ली अधीनस्थ सेवा चयन बोर्ड (DSSSB) द्वारा विभिन्न पोस्ट कोड (शिक्षण, लिपिकीय एवं तकनीकी संवर्ग) के लिए आयोजित ऑनलाइन सीबीटी परीक्षाओं के परिणाम नोटिस (Result Notices) व ई-डोजियर अपलोड करने हेतु चयनित अभ्यर्थियों के कट-ऑफ अंक आधिकारिक वेबसाइट dsssb.delhi.gov.in पर प्रकाशित कर दिए गए हैं। शॉर्टलिस्ट अभ्यर्थियों को 15 दिनों की निर्धारित अवधि में OARS मॉड्यूल पर अपने दस्तावेज अपलोड करने होंगे।',
  }),

  // 23. NEET PG 2026 Result – Out
  buildResult({
    id: 'res-neet-pg-2026',
    slug: 'neet-pg-2026-result-out',
    examName: 'NEET PG 2026 Result – Out (All India Rank & Cut-Off Percentile)',
    examNameHi: 'राष्ट्रीय आयुर्विज्ञान परीक्षा बोर्ड (NBEMS) नीट पीजी (NEET-PG 2026) परिणाम, ऑल इंडिया रैंक एवं एमडी/एमएस कट-ऑफ स्कोर घोषित',
    organization: 'National Board of Examinations in Medical Sciences (NBEMS, New Delhi)',
    postName: 'MD / MS / PG Diploma & DNB Post-MBBS Admissions 2026-27',
    resultDate: '28 सितंबर 2026',
    resultUrl: 'https://natboard.edu.in',
    cutOffUrl: 'https://nbe.edu.in',
    overview: 'नेशनल बोर्ड ऑफ एग्जामिनेशन इन मेडिकल साइंसेज (NBEMS) ने एमडी/एमएस/पीजी डिप्लोमा एवं डीएनबी पाठ्यक्रमों में प्रवेश हेतु आयोजित NEET-PG 2026 का परिणाम, ऑल इंडिया रैंक (AIR) और श्रेणीवार कट-ऑफ पर्सेंटाइल आधिकारिक वेबसाइट natboard.edu.in पर जारी कर दिया है। व्यक्तिगत स्कोरकार्ड अभ्यर्थी लॉगिन के माध्यम से डाउनलोड किए जा सकते हैं।',
    cutOffMarks: [
      { category: 'General (UR) / EWS Qualifying Percentile', marks: '50th Percentile' },
      { category: 'General-PwBD Qualifying Percentile', marks: '45th Percentile' },
      { category: 'SC / ST / OBC (Including PwBD of SC/ST/OBC)', marks: '40th Percentile' },
    ],
  }),

  // 24. NEET UG 2026 1st Round Allotment Result – Out
  buildResult({
    id: 'res-neet-ug-1st-allotment-2026',
    slug: 'neet-ug-2026-1st-round-allotment-result-out',
    examName: 'NEET UG 2026 1st Round Allotment Result – Out (MCC AIQ MBBS/BDS)',
    examNameHi: 'मेडिकल काउंसलिंग कमेटी (MCC) नीट यूजी (NEET UG 2026) प्रथम राउंड एमबीबीएस/बीडीएस सीट आवंटन परिणाम घोषित',
    organization: 'Medical Counselling Committee (MCC / DGHS, Ministry of Health & Family Welfare)',
    postName: '15% All India Quota (AIQ), AIIMS, JIPMER, BHU, AMU & Deemed Universities MBBS/BDS/B.Sc Nursing Seats',
    resultDate: '25 सितंबर 2026',
    resultUrl: 'https://mcc.nic.in',
    overview: 'मेडिकल काउंसलिंग कमेटी (MCC) द्वारा नीट यूजी 2026 ऑल इंडिया कोटा (AIQ), एम्स, जिपमर और केंद्रीय विश्वविद्यालयों में एमबीबीएस एवं बीडीएस प्रवेश हेतु प्रथम राउंड का फाइनल सीट अलॉटमेंट रिजल्ट और अलॉटमेंट लेटर mcc.nic.in पर जारी कर दिया गया है।',
  }),

  // 25. NTA AIAPGET Result 2026 – Out
  buildResult({
    id: 'res-nta-aiapget-result-2026',
    slug: 'nta-aiapget-result-2026-out',
    examName: 'NTA AIAPGET Result 2026 – Out (Score Card & Merit List)',
    examNameHi: 'एनटीए ऑल इंडिया आयुष पोस्ट ग्रेजुएट एंट्रेंस टेस्ट (AIAPGET 2026) परीक्षा परिणाम एवं स्कोर कार्ड जारी',
    organization: 'National Testing Agency (NTA) & Ministry of Ayush',
    postName: 'MD / MS in Ayurveda, Unani, Siddha & Homoeopathy Courses',
    resultDate: '27 सितंबर 2026',
    resultUrl: 'https://exams.nta.ac.in/AIAPGET/',
    cutOffUrl: 'https://aaccc.gov.in',
    overview: 'नेशनल टेस्टिंग एजेंसी (NTA) ने अखिल भारतीय आयुष स्नातकोत्तर प्रवेश परीक्षा (AIAPGET 2026) का अंतिम परिणाम, विषयवार पर्सेंटाइल एवं एनटीए स्कोरकार्ड आधिकारिक पोर्टल exams.nta.ac.in/AIAPGET/ पर घोषित कर दिया है। योग्य अभ्यर्थी अब आयुष एडमिशन सेंट्रल काउंसलिंग कमेटी (aaccc.gov.in) की ऑनलाइन काउंसलिंग में भाग ले सकेंगे।',
  }),

  // 26. NTA UGC NET June 2026 Certificate & Result
  buildResult({
    id: 'res-nta-ugc-net-june-certificate-2026',
    slug: 'nta-ugc-net-june-2026-certificate',
    examName: 'NTA UGC NET June 2026 E-Certificate & JRF Award Letter – Out',
    examNameHi: 'एनटीए यूजीसी नेट (UGC-NET June 2026) ई-सर्टिफिकेट, जेआरएफ अवॉर्ड लेटर एवं स्कोरकार्ड जारी',
    organization: 'National Testing Agency (NTA) & University Grants Commission (UGC)',
    postName: 'Junior Research Fellowship (JRF), Assistant Professor Eligibility & Ph.D Admission (83 Subjects)',
    resultDate: '28 सितंबर 2026',
    resultUrl: 'https://ugcnet.nta.ac.in',
    cutOffUrl: 'https://ecerificate.nta.ac.in',
    overview: 'नेशनल टेस्टिंग एजेंसी (NTA) एवं विश्वविद्यालय अनुदान आयोग (UGC) द्वारा यूजीसी नेट जून 2026 परीक्षा में उत्तीर्ण अभ्यर्थियों के लिए आधिकारिक ई-सर्टिफिकेट (E-Certificate) और जेआरएफ अवॉर्ड लेटर (JRF Award Letter) पोर्टल पर अपलोड कर दिए गए हैं। अभ्यर्थी अपने एप्लीकेशन नंबर और जन्मतिथि से इन्हें डाउनलोड कर सकते हैं।',
  }),

  // 27. NTA SWAYAM Result / Score Card 2026 – Out
  buildResult({
    id: 'res-nta-swayam-scorecard-2026',
    slug: 'nta-swayam-result-score-card-2026-out',
    examName: 'NTA SWAYAM Result / Score Card 2026 – Out',
    examNameHi: 'एनटीए स्वयं (SWAYAM) सेमेस्टर परीक्षा परिणाम एवं प्रमाण पत्र स्कोर कार्ड 2026 घोषित',
    organization: 'National Testing Agency (NTA) & Ministry of Education',
    postName: 'SWAYAM Online Certification Courses Semester Examinations 2026',
    resultDate: '25 सितंबर 2026',
    resultUrl: 'https://exams.nta.ac.in/swayam/',
    overview: 'नेशनल टेस्टिंग एजेंसी (NTA) ने स्टडी वेब्स ऑफ एक्टिव लर्निंग फॉर यंग एस्पायरिंग माइंड्स (SWAYAM) परीक्षा के सीबीटी और हाइब्रिड मोड पाठ्यक्रमों का परिणाम व स्कोर कार्ड आधिकारिक वेबसाइट exams.nta.ac.in/swayam/ पर जारी कर दिया है।',
  }),

  // 28. AFCAT 02/2026 Result – Out
  buildResult({
    id: 'res-afcat-02-2026',
    slug: 'afcat-02-2026-result-out',
    examName: 'AFCAT 02/2026 Result – Out (Indian Air Force Commissioned Officer)',
    examNameHi: 'भारतीय वायु सेना एयर फोर्स कॉमन एडमिशन टेस्ट (AFCAT 02/2026) परिणाम, कट-ऑफ एवं AFSB इंटरव्यू स्लॉट बुकिंग शुरू',
    organization: 'Indian Air Force (IAF / CDAC)',
    postName: 'Flying Branch & Ground Duty (Technical and Non-Technical) Gazetted Officers',
    resultDate: '27 सितंबर 2026',
    resultUrl: 'https://afcat.cdac.in',
    overview: 'भारतीय वायु सेना (Indian Air Force) ने एयर फोर्स कॉमन एडमिशन टेस्ट (AFCAT 02/2026) लिखित परीक्षा का परिणाम और आधिकारिक कट-ऑफ अंक जारी कर दिए हैं। सफल अभ्यर्थी कैंडिडेट लॉगिन के माध्यम से अपना स्कोर देख सकते हैं और एयर फोर्स सिलेक्शन बोर्ड (AFSB) इंटरव्यू की तिथि व केंद्र (Dehradun, Mysuru, Gandhinagar, Varanasi, Guwahati) का चयन कर सकते हैं।',
    cutOffMarks: [
      { category: 'AFCAT 02/2026 Official Cut-Off (Out of 300)', marks: '158 Marks (Normalized)' },
    ],
  }),

  // 29. UPSC IES / ISS Result 2026
  buildResult({
    id: 'res-upsc-ies-iss-2026',
    slug: 'upsc-ies-iss-result-2026',
    examName: 'UPSC IES / ISS Result 2026 – Out (Written Examination Result)',
    examNameHi: 'संघ लोक सेवा आयोग (UPSC) भारतीय आर्थिक सेवा (IES) एवं भारतीय सांख्यिकी सेवा (ISS) परीक्षा परिणाम 2026 घोषित',
    organization: 'Union Public Service Commission (UPSC, New Delhi)',
    postName: 'Junior Time Scale (JTS) Officers in Indian Economic Service (IES) & Indian Statistical Service (ISS)',
    resultDate: '30 सितंबर 2026',
    resultUrl: 'https://upsc.gov.in',
    overview: 'संघ लोक सेवा आयोग (UPSC) द्वारा आयोजित भारतीय आर्थिक सेवा (IES) और भारतीय सांख्यिकी सेवा (ISS) लिखित परीक्षा 2026 का परिणाम घोषित कर दिया गया है। सफल अभ्यर्थियों के रोल नंबर की सूची upsc.gov.in पर उपलब्ध है, जिन्हें अब व्यक्तित्व परीक्षण / साक्षात्कार (200 अंक) हेतु DAF भरना होगा।',
  }),

  // 30. UPSC CDS-II Final Result With Marks 2026
  buildResult({
    id: 'res-upsc-cds-ii-final-marks-2026',
    slug: 'upsc-cds-ii-final-result-with-marks-2026',
    examName: 'UPSC CDS-II Final Result With Marks 2026 – Out (IMA, INA, AFA & OTA)',
    examNameHi: 'संघ लोक सेवा आयोग (UPSC) सम्मिलित रक्षा सेवा परीक्षा (CDS-II) अंतिम मेरिट परिणाम एवं प्राप्तांक (Marks) जारी',
    organization: 'Union Public Service Commission (UPSC, New Delhi)',
    postName: 'Admission to Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA) & Officers Training Academy (OTA)',
    resultDate: '26 सितंबर 2026',
    resultUrl: 'https://upsc.gov.in',
    overview: 'संघ लोक सेवा आयोग (UPSC) ने सम्मिलित रक्षा सेवा परीक्षा (CDS-II) की लिखित परीक्षा और एसएसबी (SSB) साक्षात्कार के उपरांत अंतिम मेरिट सूची एवं अनुशंसित अभ्यर्थियों के प्राप्तांक (Written + SSB Marks) आधिकारिक वेबसाइट upsc.gov.in पर प्रकाशित कर दिए हैं।',
  }),

  // 31. SSC JE Engineer Final Result / Marks 2026 – Out
  buildResult({
    id: 'res-ssc-je-final-marks-2026',
    slug: 'ssc-je-engineer-final-result-marks-2026-out',
    examName: 'SSC JE Engineer Final Result / Marks 2026 – Out (Civil, Mechanical, Electrical)',
    examNameHi: 'कर्मचारी चयन आयोग (SSC) जूनियर इंजीनियर (सिविल, मैकेनिकल, इलेक्ट्रिकल) अंतिम परिणाम, विभाग आवंटन एवं स्कोरकार्ड 2026',
    organization: 'Staff Selection Commission (SSC, New Delhi)',
    postName: 'Junior Engineer (JE Group-B) in CPWD, BRO, CWC, MES,Farakka Barrage & Ministry of Ports',
    resultDate: '26 सितंबर 2026',
    resultUrl: 'https://ssc.gov.in',
    overview: 'कर्मचारी चयन आयोग (SSC) ने जूनियर इंजीनियर (सिविल, मैकेनिकल एवं इलेक्ट्रिकल) परीक्षा के पेपर-I और पेपर-II के संयुक्त अंकों व पद वरीयता (Option-cum-Preference) के आधार पर अंतिम चयन परिणाम (Final Result), आवंटित विभाग कोड और सभी अभ्यर्थियों के विस्तृत मार्क्स ssc.gov.in पर जारी कर दिए हैं।',
    cutOffMarks: [
      { category: 'CPWD Civil Engineering (UR Final Cutoff)', marks: '338.45 / 500 Marks' },
      { category: 'CPWD Electrical / Mechanical (UR Final Cutoff)', marks: '362.80 / 500 Marks' },
      { category: 'CWC / BRO Civil Engineering (UR)', marks: '318.20 / 500 Marks' },
    ],
  }),

  // 32. SSC 10+2 CHSL 2025 FRTA Result – Out
  buildResult({
    id: 'res-ssc-chsl-2025-frta-2026',
    slug: 'ssc-10-plus-2-chsl-2025-frta-result-out',
    examName: 'SSC 10+2 CHSL 2025 Final Result & Typing/Skill Test Marks – Out',
    examNameHi: 'कर्मचारी चयन आयोग (SSC) कंबाइंड हायर सेकेंडरी लेवल (10+2 CHSL) अंतिम परिणाम, कट-ऑफ एवं विभाग आवंटन 2026',
    organization: 'Staff Selection Commission (SSC, New Delhi)',
    postName: 'Lower Division Clerk (LDC) / Junior Secretariat Assistant (JSA) & Data Entry Operator (DEO)',
    resultDate: '25 सितंबर 2026',
    resultUrl: 'https://ssc.gov.in',
    overview: 'कर्मचारी चयन आयोग (SSC) द्वारा कंबाइंड हायर सेकेंडरी लेवल (10+2 CHSL) परीक्षा के टियर-II और स्किल/टाइपिंग टेस्ट के आधार पर एलडीसी/जेएसए एवं डीईओ पदों का अंतिम चयन परिणाम और विभाग आवंटन सूची आधिकारिक पोर्टल ssc.gov.in पर घोषित कर दी गई है।',
  }),

  // 33. SSC Stenographer & Combined Hindi Translators JHT Answer Key / Response Sheet 2026 – Out
  buildResult({
    id: 'res-ssc-steno-jht-answer-key-2026',
    slug: 'ssc-stenographer-and-jht-answer-key-response-sheet-2026',
    examName: 'SSC Stenographer & Combined Hindi Translators (JHT) Answer Key / Response Sheet 2026 – Out',
    examNameHi: 'कर्मचारी चयन आयोग (SSC) स्टेनोग्राफर ग्रेड C, D एवं जूनियर हिंदी ट्रांसलेटर (JHT) कंप्यूटर परीक्षा उत्तर कुंजी व रिस्पॉन्स शीट 2026',
    organization: 'Staff Selection Commission (SSC, New Delhi)',
    postName: 'Stenographer Grade C & D and Junior/Senior Hindi Translator (JHT/SHT)',
    resultDate: '28 सितंबर 2026',
    resultUrl: 'https://ssc.gov.in',
    overview: 'कर्मचारी चयन आयोग (SSC) ने स्टेनोग्राफर ग्रेड सी एवं डी तथा कंबाइंड हिंदी ट्रांसलेटर (JHT) परीक्षा 2026 की टेंटेटिव आंसर की और कैंडिडेट रिस्पॉन्स शीट आधिकारिक पोर्टल ssc.gov.in पर लाइव कर दी है। अभ्यर्थी अपने रोल नंबर और पासवर्ड से लॉगिन कर अपने रॉ स्कोर की गणना कर सकते हैं।',
  }),

  // 34. RBI Bank Assistant Mains Result 2026
  buildResult({
    id: 'res-rbi-bank-assistant-mains-2026',
    slug: 'rbi-bank-assistant-mains-result-2026',
    examName: 'RBI Bank Assistant Mains Result 2026 – Out (LPT Shortlist)',
    examNameHi: 'भारतीय रिज़र्व बैंक (RBI) असिस्टेंट मुख्य परीक्षा परिणाम एवं भाषा प्रवीणता परीक्षा (LPT) चयन सूची 2026',
    organization: 'Reserve Bank of India (RBI Services Board, Mumbai)',
    postName: 'Assistant in various Regional Offices of Reserve Bank of India',
    resultDate: '28 सितंबर 2026',
    resultUrl: 'https://opportunities.rbi.org.in',
    overview: 'भारतीय रिज़र्व बैंक (RBI) ने विभिन्न क्षेत्रीय कार्यालयों में सहायक (Assistant) पदों पर भर्ती हेतु आयोजित ऑनलाइन मुख्य परीक्षा (Mains Examination) का परिणाम घोषित कर दिया है। शॉर्टलिस्ट किए गए अभ्यर्थियों के रोल नंबर की सूची जारी कर दी गई है जिन्हें अब भाषा प्रवीणता परीक्षा (Language Proficiency Test - LPT) एवं दस्तावेज सत्यापन के लिए बुलाया जाएगा।',
    cutOffMarks: [
      { category: 'General (UR - Office wise Range)', marks: '124.50 - 134.75 Marks (Out of 200)' },
      { category: 'OBC / EWS', marks: '119.00 - 128.50 Marks' },
      { category: 'SC / ST', marks: '108.25 - 116.00 Marks' },
    ],
  }),

  // 35. SBI Apprentice Result 2026 – Out
  buildResult({
    id: 'res-sbi-apprentice-2026',
    slug: 'sbi-apprentice-result-2026-out',
    examName: 'SBI Apprentice Result 2026 – Out (Final Merit List)',
    examNameHi: 'भारतीय स्टेट बैंक (SBI) अप्रेंटिस भर्ती लिखित परीक्षा एवं स्थानीय भाषा परीक्षण अंतिम परिणाम 2026',
    organization: 'State Bank of India (SBI Central Recruitment & Promotion Department)',
    postName: 'Apprentice under Apprentices Act 1961 (6,160+ Seats across India)',
    resultDate: '26 सितंबर 2026',
    resultUrl: 'https://sbi.co.in/web/careers',
    overview: 'भारतीय स्टेट बैंक (SBI) ने देश भर के विभिन्न राज्यों एवं सर्किलों में अप्रेंटिस के पदों पर चयन हेतु आयोजित ऑनलाइन लिखित परीक्षा का अंतिम परिणाम और राज्य-वार चयनित अभ्यर्थियों के रोल नंबर की पीडीएफ सूची आधिकारिक करियर पेज sbi.co.in/web/careers पर प्रकाशित कर दी है।',
  }),

  // 36. IBPS Clerk 15th Reserve List 2026 – Out
  buildResult({
    id: 'res-ibps-clerk-15th-reserve-list-2026',
    slug: 'ibps-clerk-15th-reserve-list-2026-out',
    examName: 'IBPS Clerk 15th Reserve List 2026 – Out (Provisional Allotment)',
    examNameHi: 'आईबीपीएस क्लर्क (CRP-CSA XV) रिजर्व लिस्ट के अंतर्गत अनंतिम बैंक आवंटन परिणाम व कट-ऑफ 2026 जारी',
    organization: 'Institute of Banking Personnel Selection (IBPS, Mumbai)',
    postName: 'Customer Service Associate (CSA / Clerical Cadre) in Public Sector Banks',
    resultDate: '27 सितंबर 2026',
    resultUrl: 'https://www.ibps.in',
    overview: 'बैंकिंग कार्मिक चयन संस्थान (IBPS) ने कॉमन रिक्रूटमेंट प्रोसेस (CRP-CSA / Clerks) के अंतर्गत रिजर्व लिस्ट (Reserve List) से सार्वजनिक क्षेत्र के बैंकों में अनंतिम आवंटन (Provisional Allotment) का परिणाम एवं राज्य-वार न्यूनतम कट-ऑफ स्कोर ibps.in पर जारी कर दिया है।',
  }),

  // 37. Indian Overseas Bank IOB Apprentice Result 2026
  buildResult({
    id: 'res-iob-apprentice-2026',
    slug: 'indian-overseas-bank-iob-apprentice-result-2026',
    examName: 'Indian Overseas Bank IOB Apprentice Result 2026 – Out',
    examNameHi: 'इंडियन ओवरसीज बैंक (IOB) अप्रेंटिस ऑनलाइन परीक्षा परिणाम एवं दस्तावेज सत्यापन सूची 2026',
    organization: 'Indian Overseas Bank (IOB Central Office, Chennai)',
    postName: 'Apprentice under Apprentices Act (550+ Posts)',
    resultDate: '27 सितंबर 2026',
    resultUrl: 'https://www.iob.in',
    overview: 'इंडियन ओवरसीज बैंक (IOB) ने अप्रेंटिस भर्ती के लिए आयोजित ऑनलाइन परीक्षा का परिणाम और दस्तावेज सत्यापन व स्थानीय भाषा परीक्षण हेतु चयनित उम्मीदवारों की सूची iob.in के करियर सेक्शन में जारी कर दी है।',
  }),

  // 38. IDBI JAM Final Result 2026
  buildResult({
    id: 'res-idbi-jam-final-2026',
    slug: 'idbi-jam-final-result-2026',
    examName: 'IDBI JAM Final Result 2026 – Out (Junior Assistant Manager Grade "O")',
    examNameHi: 'आईडीबीआई बैंक (IDBI) जूनियर असिस्टेंट मैनेजर (JAM ग्रेड-O) अंतिम चयन परिणाम एवं कट-ऑफ 2026',
    organization: 'IDBI Bank Limited',
    postName: 'Junior Assistant Manager (JAM) Grade "O" (PGDBF / Direct Recruitment)',
    resultDate: '26 सितंबर 2026',
    resultUrl: 'https://www.idbibank.in',
    overview: 'आईडीबीआई बैंक (IDBI Bank) द्वारा जूनियर असिस्टेंट मैनेजर (JAM Grade "O") की ऑनलाइन परीक्षा और व्यक्तिगत साक्षात्कार (Personal Interview) के उपरांत अंतिम रूप से चयनित अभ्यर्थियों का परिणाम एवं मेडिकल/जॉइनिंग निर्देश आधिकारिक वेबसाइट idbibank.in पर घोषित कर दिए गए हैं।',
  }),

  // 39. OICL Administrative Officer 2025 Score Card
  buildResult({
    id: 'res-oicl-ao-scorecard-2026',
    slug: 'oicl-administrative-officer-2025-score-card',
    examName: 'OICL Administrative Officer (AO Scale-I) Score Card & Cut-Off 2026 – Out',
    examNameHi: 'ओरिएंटल इंश्योरेंस कंपनी लिमिटेड (OICL) प्रशासनिक अधिकारी (AO Scale-I) स्कोर कार्ड एवं कट-ऑफ मार्क्स जारी',
    organization: 'The Oriental Insurance Company Limited (OICL)',
    postName: 'Administrative Officer (Scale-I) Accounts, Actuarial, IT, Legal, Medical & Engineering',
    resultDate: '26 सितंबर 2026',
    resultUrl: 'https://orientalinsurance.org.in',
    overview: 'द ओरिएंटल इंश्योरेंस कंपनी लिमिटेड (OICL) ने प्रशासनिक अधिकारी (Administrative Officer Scale-I) भर्ती परीक्षा के विषयवार प्राप्तांक (Score Card) और श्रेणीवार कट-ऑफ अंक orientalinsurance.org.in पर जारी कर दिए हैं।',
  }),

  // 40. IB Security Assistant/ Executive Final Result 2026
  buildResult({
    id: 'res-ib-sa-exe-final-2026',
    slug: 'ib-security-assistant-executive-final-result-2026',
    examName: 'IB Security Assistant / Executive Final Result 2026 – Out',
    examNameHi: 'इंटेलिजेंस ब्यूरो (IB - गृह मंत्रालय) सिक्योरिटी असिस्टेंट / एग्जीक्यूटिव एवं एमटीएस (MTS) अंतिम चयन परिणाम 2026',
    organization: 'Intelligence Bureau (Ministry of Home Affairs, Govt. of India)',
    postName: 'Security Assistant / Executive (SA/Exe) & Multi-Tasking Staff (MTS/Gen)',
    resultDate: '25 सितंबर 2026',
    resultUrl: 'https://www.mha.gov.in',
    overview: 'गृह मंत्रालय (MHA) के अधीन खुफिया ब्यूरो (Intelligence Bureau - IB) ने सिक्योरिटी असिस्टेंट / एग्जीक्यूटिव (SA/Exe) एवं मल्टी-टास्किंग स्टाफ (MTS) के पदों पर टियर-I, टियर-II (Descriptive & Spoken Ability) तथा इंटरव्यू/पर्सनालिटी टेस्ट के आधार पर अंतिम रूप से चयनित अभ्यर्थियों के रोल नंबर की मेरिट लिस्ट mha.gov.in पर प्रकाशित कर दी है।',
  }),
];
