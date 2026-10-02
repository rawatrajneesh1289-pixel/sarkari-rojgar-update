import {
  Job,
  AdmitCard,
  Result,
  AnswerKey,
  SarkariYojana,
  Scholarship,
  AdmissionUpdate,
  Syllabus,
  PreviousPaper,
  Article,
  Announcement,
} from '../types';
import { REAL_LATEST_JOBS } from './realLatestJobs';
import { REAL_LATEST_ADMIT_CARDS } from './realLatestAdmitCards';
import { REAL_LATEST_ADMISSIONS } from './realLatestAdmissions';
import { REAL_LATEST_ANSWER_KEYS } from './realLatestAnswerKeys';
import { REAL_LATEST_RESULTS } from './realLatestResults';
import { REAL_LATEST_SCHEMES } from './realLatestSchemes';
import { REAL_PREVIOUS_PAPERS } from './realPreviousPapers';
import { REAL_LATEST_SCHOLARSHIPS } from './realLatestScholarships';
import { ALL_OFFICIAL_SYLLABUSES } from './syllabusesData';

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-mpesb-sub-engineer-reopen-2026',
    text: 'MPESB Group 3 Sub Engineer Re-Open Online Form 2026 (1,700 Posts) – Apply Online from 13 Oct to 27 Oct 2026',
    textHi: 'एमपीईएसबी ग्रुप-3 सब इंजीनियर भर्ती 2026 री-ओपन फॉर्म (कुल पद बढ़कर 1,700 हुए) – 13 से 27 अक्टूबर तक करें ऑनलाइन आवेदन',
    linkUrl: '/jobs/mpesb-group-3-sub-engineer-recruitment-2026',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-rrb-alp-cbt2-results-2026',
    text: 'RRB ALP CBT-II Result, RRB JE CBT-2, NEET PG, UPSSSC Lekhpal Mains & 65+ Latest Results 2026 Declared',
    textHi: 'रेलवे आरआरबी एएलपी (ALP CBT-II), जेई सीबीटी-2, नीट पीजी एवं यूपी लेखपाल मुख्य परीक्षा सहित 65+ नए रिजल्ट जारी',
    linkUrl: '/results/rrb-alp-cbt-ii-result-2026-out',
    isLive: true,
    type: 'RESULT',
  },
  {
    id: 'ann-ssc-cgl-tier1-city-admit-card-2026',
    text: 'SSC CGL Tier 1 Exam City Slip & Application Status 2026 Released: Check Exam Date & City at ssc.gov.in',
    textHi: 'एसएससी सीजीएल टियर-1 परीक्षा शहर (Exam City) एवं स्टेटस जारी: ssc.gov.in से अपनी परीक्षा तिथि व शहर चेक करें',
    linkUrl: '/admit-card/ssc-cgl-tier-1-exam-city-intimation-admit-card-2026',
    isLive: true,
    type: 'ADMIT_CARD',
  },
  {
    id: 'ann-rrb-ntpc-recruitment-2026',
    text: 'Railway RRB NTPC 2026 Recruitment Out: 5,165 Vacancies (1,688 10+2 UG & 3,477 Graduate) CEN 06/2026 & 07/2026',
    textHi: 'रेलवे आरआरबी एनटीपीसी 2026 भर्ती जारी: 5,165 पदों (10+2 एवं स्नातक) हेतु विज्ञापन जारी, आवेदन शीघ्र शुरू',
    linkUrl: '/jobs/rrb-ntpc-graduate-level-recruitment-online-form-2026',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-navy-ssr-mr-stage2-2026',
    text: 'Indian Navy Agniveer SSR / MR INET Stage II Admit Card 2026 Released: Download Call Letter Now',
    textHi: 'भारतीय नौसेना अग्निवीर SSR/MR स्टेज-II एडमिट कार्ड 2026 जारी: कॉल लेटर व सेंटर डिटेल्स डाउनलोड करें',
    linkUrl: '/admit-card/indian-navy-ssr-mr-inet-stage-2-admit-card-2026',
    isLive: true,
    type: 'ADMIT_CARD',
  },
  {
    id: 'ann-sbi-clerk-new-exam-date-2026',
    text: 'SBI Junior Associates (Clerk) New Exam Date 2026: Prelims CBT on 26 & 27 September 2026',
    textHi: 'एसबीआई जूनियर एसोसिएट्स (क्लर्क) नई परीक्षा तिथि 2026: प्रीलिम्स परीक्षा 26-27 सितंबर को आयोजित',
    linkUrl: '/admit-card/sbi-junior-associates-clerk-new-exam-date-admit-card-2026',
    isLive: true,
    type: 'ADMIT_CARD',
  },
  {
    id: 'ann-rpsc-si-2021-reexam-2026',
    text: 'RPSC Rajasthan Police Sub Inspector 2021 Re-Exam Admit Card 2026 Released on SSO Portal',
    textHi: 'आरपीएससी राजस्थान पुलिस एसआई 2021 पुन: परीक्षा एडमिट कार्ड जारी: एसएसओ पोर्टल से डाउनलोड करें',
    linkUrl: '/admit-card/rpsc-rajasthan-police-sub-inspector-2021-re-exam-admit-card-2026',
    isLive: true,
    type: 'ADMIT_CARD',
  },
  {
    id: 'ann-mpesb-subedar-steno-asi-2026',
    text: 'MPESB MP Police Subedar (Steno) & ASI (Ministerial) Recruitment 2026: 507 Posts Online Form Open from 24/09/2026',
    textHi: 'एमपी पुलिस सूबेदार (स्टेनो) एवं एएसआई (अनुसचिवीय) भर्ती 2026: 507 पदों पर 12वीं + CPCT पास ऑनलाइन आवेदन 24 सितंबर से',
    linkUrl: '/jobs/mpesb-subedar-steno-asi-ministerial-recruitment-online-form',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-nvs-class-9th-2026',
    text: 'Admissions 2026-27 Active: Bihar BLET 2026, NVS Class 9th & 11th (Date Extended), IIT GATE 2027, AIBE 22, CLAT & IIT JAM 2027',
    textHi: 'प्रवेश फॉर्म 2026-27 सक्रिय: बिहार BLET, नवोदय 9वीं व 11वीं (तिथि बढ़ी - 15 अक्टूबर), IIT GATE 2027, AIBE-22, CLAT व IIT JAM 2027',
    linkUrl: '/admission',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-mpesb-mp-police-2026',
    text: 'MPESB MP Police Constable GD Recruitment 2026: 7,500 Posts 10th Pass Online Form Open from 22/09/2026',
    textHi: 'एमपी पुलिस आरक्षक (GD) भर्ती 2026: 7,500 पदों पर 10वीं पास ऑनलाइन आवेदन 22 सितंबर से शुरू, अंतिम तिथि 06/10/2026',
    linkUrl: '/jobs/mpesb-mp-police-constable-gd-recruitment-online-form',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-upessc-assistant-prof-2026',
    text: 'UPESSC UP Assistant Professor Online Form 2026: 1,936 Posts (Advt 04/2026) Open till 07/10/2026',
    textHi: 'यूपी उच्च शिक्षा सहायक आचार्य भर्ती 2026 (Advt 04/2026): 1,936 पदों पर ऑनलाइन आवेदन जारी, अंतिम तिथि 07/10/2026',
    linkUrl: '/jobs/upessc-up-assistant-professor-recruitment-online-form',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-upessc-primary-teacher-2026',
    text: 'UPESSC UP Primary Teacher (PRT) Online Form 2026: 12,405 Posts (Advt 05/2026) Open till 15/10/2026',
    textHi: 'यूपी प्राथमिक शिक्षक (PRT) भर्ती 2026 (Advt 05/2026): 12,405 सहायक अध्यापक पदों पर ऑनलाइन आवेदन शुरू, अंतिम तिथि 15/10/2026',
    linkUrl: '/jobs/upessc-up-primary-teacher-prt-recruitment-online-form',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-upessc-pgt-teacher-2026',
    text: 'UPESSC UP PGT Teacher (Lecturer) Online Form 2026: 2,607 Posts (Advt 06/2026) Open till 17/10/2026',
    textHi: 'यूपी पीजीटी (प्रवक्ता) शिक्षक भर्ती 2026 (Advt 06/2026): 2,607 पदों पर ऑनलाइन आवेदन शुरू, अंतिम तिथि 17/10/2026',
    linkUrl: '/jobs/upessc-up-pgt-teacher-recruitment-online-form',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-upsc-ese-ies-2026',
    text: 'UPSC Engineering Services Exam (ESE / IES) 2026: 474 Posts (Civil, Mech, Electrical, E&T) Online Form Open till 08/10/2026',
    textHi: 'यूपीएससी इंजीनियरिंग सेवा परीक्षा (IES / ESE) 2026: सिविल, मैकेनिकल, इलेक्ट्रिकल 474 पदों पर ऑनलाइन आवेदन शुरू, अंतिम तिथि 08/10/2026',
    linkUrl: '/jobs/upsc-engineering-services-examination-ese-ies-online-form',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-india-post-gds-2026',
    text: 'India Post GDS Recruitment 2026: 44,228 Posts Online Form Open - No Exam Direct 10th Merit List Selection',
    textHi: 'इंडिया पोस्ट ग्रामीण डाक सेवक (GDS) 44,228 पदों पर ऑनलाइन आवेदन जारी - बिना परीक्षा 10वीं मेरिट चयन, अंतिम तिथि 19/09/2026',
    linkUrl: '/jobs/india-post-gds-recruitment-online-form',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-rrb-paramedical-2026',
    text: 'Railway RRB Paramedical Staff CEN 05/2026: 590 Posts Online Form Open till 14/10/2026',
    textHi: 'रेलवे आरआरबी पैरामेडिकल स्टाफ CEN 05/2026: 590 पदों (नर्सिंग, फार्मासिस्ट आदि) पर ऑनलाइन आवेदन शुरू, अंतिम तिथि 14/10/2026',
    linkUrl: '/jobs/railway-rrb-paramedical-staff-recruitment-cen-05-2026',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-ssc-chsl-2026',
    text: 'SSC CHSL 10+2 Online Form 2026: 2,536 Posts (LDC, JSA, DEO) Open till 07/10/2026',
    textHi: 'एसएससी सीएचएसएल (10+2) भर्ती 2026: 2,536 पद ऑनलाइन आवेदन शुरू, अंतिम तिथि 07/10/2026',
    linkUrl: '/jobs/ssc-chsl-2026-online-form-ldc-deo',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-bgssl-2026',
    text: 'BGSSL Recruitment 2026 (Bank of Baroda Subsidiary): 2,049 Posts Apply till 30/09/2026',
    textHi: 'बैंक ऑफ बड़ौदा BGSSL भर्ती 2026: 2,049 विभिन्न पदों पर बिना फीस सीधी भर्ती, अंतिम तिथि 30/09/2026',
    linkUrl: '/jobs/bgssl-recruitment-2026-bank-of-baroda-subsidiary',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-1',
    text: 'UPSSSC Computer Operator Online Form 2026: Apply Online till 28/09/2026',
    textHi: 'यूपीएसएसएससी कंप्यूटर ऑपरेटर भर्ती 2026: ऑनलाइन आवेदन शुरू, अंतिम तिथि 28/09/2026',
    linkUrl: '/jobs/upsssc-computer-operator-recruitment-2026',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-2',
    text: 'RCF Apprentice Navratna PSU Recruitment 2026: 326 Trade Posts Online Form Open till 20/09/2026',
    textHi: 'आरसीएफ अप्रेंटिस भर्ती 2026: नवरत्न पीएसयू में 326 पदों पर ऑनलाइन आवेदन जारी, अंतिम तिथि 20/09/2026',
    linkUrl: '/jobs/rcf-apprentice-recruitment-2026-navratna-psu',
    isLive: true,
    type: 'NEW_JOB',
  },
  {
    id: 'ann-3',
    text: 'BPSC School Teacher TRE 4.0 Online Form 2026: 86,474 Teacher Vacancies Across Bihar',
    textHi: 'बीपीएससी शिक्षक भर्ती TRE 4.0: बिहार में 86,474 शिक्षक पदों के लिए ऑनलाइन फॉर्म शुरू',
    linkUrl: '/jobs/bpsc-school-teacher-tre-4-online-form-2026',
    isLive: true,
    type: 'NEW_JOB',
  },
];

export const INITIAL_JOBS: Job[] = REAL_LATEST_JOBS;

export const INITIAL_ADMIT_CARDS: AdmitCard[] = REAL_LATEST_ADMIT_CARDS;

export const INITIAL_RESULTS: Result[] = REAL_LATEST_RESULTS;

export const INITIAL_ANSWER_KEYS: AnswerKey[] = REAL_LATEST_ANSWER_KEYS;

export const INITIAL_SCHEMES: SarkariYojana[] = [
  ...REAL_LATEST_SCHEMES,
  {
    id: 'sch-mp-ladli-behna',
    slug: 'mp-ladli-behna-yojana',
    schemeName: 'Mukhyamantri Ladli Behna Yojana (Madhya Pradesh)',
    schemeNameHi: 'मुख्यमंत्री लाड़ली बहना योजना मध्य प्रदेश - प्रतिमाह ₹ 1,250/- वित्तीय सहायता',
    category: 'Madhya Pradesh',
    sector: '👩👧 Women Empowerment & Child Development',
    tagline: 'मध्य प्रदेश की महिलाओं को प्रतिमाह ₹1,250 (सालाना ₹15,000) तथा ₹450 में गैस सिलेंडर',
    objective: 'मध्य प्रदेश की महिलाओं को आर्थिक रूप से स्वावलंबी बनाना, उनके स्वास्थ्य एवं पोषण स्तर में सतत सुधार लाना तथा परिवार के निर्णयों में उनकी भूमिका को सुदृढ़ करना।',
    benefits: [
      'पात्र विवाहित, तलाकशुदा एवं परित्यक्ता महिलाओं को प्रतिमाह ₹ 1,250/- सीधे बैंक खाते में (सालाना ₹ 15,000/-)।',
      'उज्ज्वला एवं गैर-उज्ज्वला गैस कनेक्शनधारी लाड़ली बहनों को मात्र ₹ 450 में घरेलू एलपीजी सिलेंडर रीफिल सब्सिडी।',
      'पक्के आवास से वंचित लाड़ली बहनों हेतु "लाड़ली बहना आवास योजना" के तहत वित्तीय सहायता।',
    ],
    eligibility: [
      'मध्य प्रदेश की स्थानीय निवासी महिला जिसकी उम्र 21 से 60 वर्ष के मध्य हो।',
      'महिला विवाहित, विधवा, तलाकशुदा या परित्यक्ता हो।',
      'परिवार की वार्षिक आय ₹ 2.5 लाख से कम हो और परिवार का कोई सदस्य आयकर दाता न हो।',
      'परिवार के पास 5 एकड़ से अधिक कृषि भूमि न हो तथा कोई चार पहिया वाहन (ट्रैक्टर को छोड़कर) न हो।',
    ],
    requiredDocuments: [
      'परिवार समग्र आईडी एवं व्यक्तिगत समग्र आईडी (e-KYC पूर्ण)',
      'आधार कार्ड (मोबाइल नंबर से लिंक)',
      'स्वयं का एकल बचत बैंक खाता (आधार डीबीटी एवं एनपीसीआई सक्रिय)',
      'सक्रिय मोबाइल नंबर',
    ],
    applicationProcess: [
      'ग्राम पंचायत अथवा नगरीय वार्ड कार्यालय में आयोजित विशेष लाड़ली बहना शिविर में उपस्थित हों।',
      'शिविर में मौजूद ऑपरेटर द्वारा लाइव फोटो खींचकर बायोमेट्रिक सत्यापन किया जाता है।',
      'आवेदन का कोई शुल्क नहीं है। पावती रसीद प्राप्त कर पोर्टल पर स्थिति ट्रैक करें।',
    ],
    importantDates: [
      { event: 'योजना प्रारंभ तिथि', date: '15 मार्च 2023' },
      { event: 'आवेदन विंडो (Application Window)', date: 'शिविर व चरणबद्ध (Camp Windows) आधार पर' },
      { event: 'मासिक राशि अंतरण दिवस', date: 'प्रत्येक माह की 10 तारीख को नियमित' },
    ],
    officialWebsiteUrl: 'https://cmladlibehna.mp.gov.in',
    applyOnlineUrl: 'https://cmladlibehna.mp.gov.in',
    helplineNumber: '0755-2700800 (Ladli Behna Helpline)',
    hasLastDate: true,
    timelineType: 'PHASE_BASED',
    timelineNotice: 'शिविर व चरणबद्ध विंडो (Camp-based) — वर्तमान में ई-केवाईसी व सत्यापन चालू',
    lastDateDetail: 'लाड़ली बहना योजना में नए आवेदन पंचायत और वार्ड स्तर पर आयोजित विशेष शिविरों (Special Camps) के माध्यम से चरणबद्ध रूप से लिए जाते हैं। जब भी राज्य सरकार द्वारा नया चरण खोला जाता है, तब 15-30 दिनों की विंडो दी जाती है। वर्तमान में पूर्व पंजीकृत बहनों का मासिक डीबीटी भुगतान प्रत्येक माह की 10 तारीख को नियमित रूप से किया जा रहा है।',
    faqs: [
      {
        question: 'क्या लाड़ली बहना योजना में आवेदन की कोई अंतिम तारीख (Last Date) होती है?',
        answer: 'हाँ, लाड़ली बहना योजना में आवेदन पूरे वर्ष निरंतर नहीं होते बल्कि शासन द्वारा घोषित शिविर चरणों (Phase 1, Phase 2, आदि) के दौरान तय समय सीमा में लिए जाते हैं। हालांकि ई-केवाईसी और बैंक डीबीटी सक्रिय कराने का कार्य वर्ष भर किसी भी समय कराया जा सकता है।',
      },
      {
        question: 'डीबीटी (DBT) सक्रिय कैसे कराएं?',
        answer: 'अपने बैंक शाखा में जाकर आधार सीडिंग फॉर्म (Aadhaar Seeding Form) भरें और बैंक कर्मचारी से एनपीसीआई (NPCI) मैपिंग सक्रिय कराएं।',
      },
    ],
    publishedAt: '2026-08-10',
    updatedAt: '2026-09-07',
    isDemo: false,
  },
];

export const INITIAL_SCHOLARSHIPS: Scholarship[] = REAL_LATEST_SCHOLARSHIPS;

export const INITIAL_ADMISSIONS: AdmissionUpdate[] = REAL_LATEST_ADMISSIONS;

export const INITIAL_SYLLABUS: Syllabus[] = ALL_OFFICIAL_SYLLABUSES;

export const INITIAL_PREVIOUS_PAPERS: PreviousPaper[] = REAL_PREVIOUS_PAPERS;

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'how-to-prepare-for-government-jobs-first-attempt',
    title: 'How to Clear Government Exams in First Attempt - Proven Strategy for 2026',
    titleHi: 'सरकारी नौकरी की तैयारी कैसे करें: पहले ही प्रयास में सरकारी परीक्षा पास करने की अचूक रणनीति',
    category: 'Exam Tips & Guidance',
    featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    author: 'SRU Editorial Team (प्रतियोगी परीक्षा विशेषज्ञ)',
    readTime: '6 min read',
    summary: 'सरकारी नौकरी की तैयारी कर रहे विद्यार्थियों के लिए समय प्रबंधन, सही किताबों का चयन, मॉक टेस्ट विश्लेषण और रिवीजन का संपूर्ण रोडमैप।',
    content: `
सरकारी नौकरी (Sarkari Naukri) पाना लाखों भारतीय युवाओं का सपना होता है। उचित मार्गदर्शन और सटीक रणनीति के अभाव में कई मेधावी छात्र भी वर्षों तक संघर्ष करते रहते हैं। इस लेख में हम आपको उन व्यावहारिक तरीकों के बारे में बता रहे हैं जिनका पालन करके आप SSC, UPSC, Railway, Police या Bank जैसी परीक्षाओं को पहले ही प्रयास में उत्तीर्ण कर सकते हैं।

### 1. परीक्षा पैटर्न और सिलेबस का गहन विश्लेषण
किसी भी परीक्षा की तैयारी शुरू करने से पहले उसके आधिकारिक सिलेबस की एक प्रति अपने स्टडी टेबल पर रखें। यह समझें कि कौन से विषय अधिक अंक भार (weightage) रखते हैं और पिछले 5 वर्षों में किस प्रकार के प्रश्न पूछे गए हैं।

### 2. प्रामाणिक अध्ययन सामग्री (Standard Reference Books)
अत्यधिक किताबें खरीदने से बचें। हर विषय के लिए केवल एक प्रामाणिक पुस्तक चुनें और उसका 4 से 5 बार अध्ययन करें:
- गणित के लिए: आर. एस. अग्रवाल अथवा किरण चैप्टरवाइज
- रीजनिंग के लिए: अरिहंत अथवा पीयूष वार्ष्णेय
- सामान्य ज्ञान: एनसीईआरटी (NCERT 6th to 10th) एवं लूसेंट सामान्य ज्ञान
- अंग्रेजी: नीतू सिंह वॉल्यूम-1 एवं वर्ड पावर मेड ईजी

### 3. दैनिक समय सारिणी (Daily Study Routine)
दिन में 6 से 8 घंटे का अध्ययन पर्याप्त है, बशर्ते उसमें निरंतरता (consistency) हो। अपने समय को 4 भागों में बांटें:
1. नया विषय पढ़ना (2.5 घंटे)
2. प्रश्नों का अभ्यास करना (2 घंटे)
3. दैनिक करेंट अफेयर्स (1 घंटा)
4. पिछले पढ़े हुए का रिवीजन (1.5 घंटे)

### 4. मॉक टेस्ट एवं गलती डायरी (Error Log)
सप्ताह में कम से कम 2 पूर्ण मॉक टेस्ट दें। टेस्ट देने से ज्यादा जरूरी उसका विश्लेषण करना है। जिन प्रश्नों में गलती हुई है, उन्हें एक अलग 'Mistake Notebook' में नोट करें और वीकेंड पर उनका पुनः अभ्यास करें।
    `,
    importantPoints: [
      'सिलेबस को पूरी तरह समझे बिना पढ़ाई शुरू न करें।',
      'मल्टीपल बुक्स की जगह एक ही किताब का बार-बार रिवीजन करें।',
      'ऑनलाइन टेस्ट सीरीज से अपनी ऑल इंडिया रैंक और टाइम मैनेजमेंट परखें।',
      'सोशल मीडिया और भ्रामक नोटिफिकेशन से दूर रहें।',
    ],
    tags: ['Sarkari Naukri', 'Preparation Tips', 'SSC', 'Railway', 'Time Management'],
    faqs: [
      { question: 'क्या बिना कोचिंग के सरकारी नौकरी मिल सकती है?', answer: 'बिल्कुल, आज यूट्यूब, प्रामाणिक किताबों और ऑनलाइन टेस्ट सीरीज के माध्यम से हजारों विद्यार्थी सेल्फ स्टडी करके शीर्ष रैंक हासिल कर रहे हैं।' },
    ],
    publishedAt: '2026-08-18',
    updatedAt: '2026-09-04',
    isDemo: true,
  },
  {
    id: 'art-2',
    slug: 'essential-documents-list-for-government-job-application',
    title: 'Essential Documents Checklist for Government Job Applications & DV',
    titleHi: 'सरकारी नौकरी फॉर्म भरने एवं डॉक्यूमेंट वेरिफिकेशन (DV) के लिए जरूरी दस्तावेजों की सूची',
    category: 'Application Guide',
    featuredImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
    author: 'Rajneesh Rawat (Senior Career Counselor)',
    readTime: '4 min read',
    summary: 'ऑनलाइन फॉर्म भरते समय तथा दस्तावेज सत्यापन में किन-किन मूल प्रमाणपत्रों की आवश्यकता होती है, इसकी पूरी चेकलिस्ट।',
    content: `
कई बार कड़ी मेहनत से परीक्षा पास करने के बाद भी केवल दस्तावेजों में विसंगतियों अथवा समय पर प्रमाण पत्र न होने के कारण उम्मीदवार अयोग्य घोषित हो जाते हैं। सरकारी भर्ती में आवेदन करने से पहले निम्नलिखित प्रमाणपत्र हमेशा अद्यतन (Updated) रखें।

### 1. शैक्षणिक प्रमाणपत्र
- 10वीं (हाईस्कूल) अंकसूची एवं मूल प्रमाणपत्र (जन्मतिथि के प्रमाण हेतु सबसे महत्वपूर्ण)
- 12वीं (हायर सेकेंडरी) अंकसूची
- स्नातक/डिप्लोमा की सभी सेमेस्टरों की अंकसूचियां तथा उपाधि (Degree/Provisional Degree)

### 2. आरक्षण एवं निवास संबंधित दस्तावेज
- जाति प्रमाण पत्र (Caste Certificate): केंद्र सरकार की नौकरियों के लिए Central Format का प्रमाण पत्र होना आवश्यक है।
- ईडब्ल्यूएस प्रमाण पत्र (EWS Certificate): वित्तीय वर्ष का मान्य प्रमाणपत्र।
- मूल निवासी / डोमिसाइल प्रमाण पत्र (Domicile Certificate)।
- गैर-क्रीमी लेयर प्रमाण पत्र (OBC Non-Creamy Layer) जो 1 वर्ष से अधिक पुराना न हो।

### 3. पहचान पत्र एवं अन्य अभिलेख
- आधार कार्ड (मोबाइल नंबर लिंक होना चाहिए)
- पैन कार्ड एवं वोटर आईडी कार्ड
- रोजगार कार्यालय पंजीयन (राज्य स्तरीय भर्तियों जैसे MP, UP, Rajasthan हेतु)
- चरित्र प्रमाण पत्र (राजपत्रित अधिकारी द्वारा सत्यापित)
    `,
    importantPoints: [
      'सभी दस्तावेजों में आपका नाम, पिता का नाम और जन्मतिथि 10वीं की अंकसूची के अनुसार बिल्कुल समान होनी चाहिए।',
      'ओबीसी-एनसीएल और ईडब्ल्यूएस प्रमाण पत्र आवेदन की अंतिम तिथि से पूर्व का होना अनिवार्य है।',
      'पासपोर्ट साइज फोटो में दोनों कान स्पष्ट दिखने चाहिए तथा बैकग्राउंड सफेद/हल्का होना चाहिए।',
    ],
    tags: ['Document Verification', 'Caste Certificate', 'Domicile', 'EWS Certificate'],
    faqs: [
      { question: 'यदि नाम की स्पेलिंग में अंतर है तो क्या करें?', answer: 'तहसीलदार या नोटरी पब्लिक से एक शपथ पत्र (Affidavit) बनवा लें और आवश्यक होने पर सुधार हेतु बोर्ड में आवेदन करें।' },
    ],
    publishedAt: '2026-08-25',
    updatedAt: '2026-09-03',
    isDemo: true,
  },
];
