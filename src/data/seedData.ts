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

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
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

export const INITIAL_SYLLABUS: Syllabus[] = [
  {
    id: 'syl-1',
    slug: 'ssc-cgl-exam-syllabus',
    examName: 'SSC CGL Tier 1 & Tier 2 Detailed Syllabus & Exam Pattern 2026',
    examNameHi: 'एसएससी सीजीएल टियर-1 एवं टियर-2 विस्तृत पाठ्यक्रम एवं परीक्षा पैटर्न',
    organization: 'Staff Selection Commission',
    overview: 'Complete section-wise syllabus for SSC Combined Graduate Level Examination covering General Intelligence & Reasoning, General Awareness, Quantitative Aptitude, English Comprehension, Mathematical Abilities and Computer Knowledge.',
    examPattern: [
      { stage: 'Tier 1 (Objective MCQ)', mode: 'Online CBT', totalMarks: '200 Marks (100 Questions)', totalTime: '60 Minutes', negativeMarking: '0.50 Mark per wrong answer' },
      { stage: 'Tier 2 Paper 1 (Compulsory for all posts)', mode: 'Online CBT', totalMarks: '390 Marks + Qualifying Computer (60 Marks)', totalTime: '2 Hours 15 Minutes', negativeMarking: '1 Mark per wrong answer' },
      { stage: 'Tier 2 Paper 2 (Only for JSO)', mode: 'Online CBT', totalMarks: '200 Marks (Statistics)', totalTime: '2 Hours', negativeMarking: '0.50 Mark' },
    ],
    subjects: [
      {
        subjectName: 'General Intelligence & Reasoning (सामान्य बुद्धिमत्ता एवं तर्कशक्ति)',
        topics: [
          'Analogies (समानता/सादृश्यता)',
          'Classification (वर्गीकरण)',
          'Series (श्रृंखला - संख्या व वर्णमाला)',
          'Coding-Decoding (कूटलेखन)',
          'Blood Relations (रक्त संबंध)',
          'Direction Sense Test (दिशा ज्ञान परीक्षण)',
          'Syllogism (कथन एवं निष्कर्ष)',
          'Non-Verbal Reasoning (मिरर इमेज, पेपर कटिंग, सन्निहित चित्र)',
        ],
      },
      {
        subjectName: 'General Awareness (सामान्य ज्ञान एवं समसामयिकी)',
        topics: [
          'भारतीय इतिहास एवं राष्ट्रीय स्वतंत्रता आंदोलन',
          'भारतीय संविधान, राजव्यवस्था एवं मौलिक अधिकार',
          'भारत एवं विश्व का भूगोल',
          'भारतीय अर्थव्यवस्था एवं बजट',
          'सामान्य विज्ञान (भौतिकी, रसायन, जीव विज्ञान)',
          'पर्यावरण एवं पारिस्थितिकी',
          'राष्ट्रीय एवं अंतर्राष्ट्रीय करेंट अफेयर्स (विगत 6-8 माह)',
          'खेलकूद, पुरस्कार, महत्वपूर्ण दिवस एवं पुस्तकें',
        ],
      },
      {
        subjectName: 'Quantitative Aptitude (संख्यात्मक अभियोग्यता - गणित)',
        topics: [
          'Number System (संख्या पद्धति)',
          'Percentage (प्रतिशतता)',
          'Profit and Loss, Discount (लाभ-हानि व बट्टा)',
          'Simple & Compound Interest (साधारण व चक्रवृद्धि ब्याज)',
          'Ratio and Proportion (अनुपात एवं समानुपात)',
          'Time and Work, Pipes (समय और कार्य)',
          'Time, Speed and Distance (समय, चाल और दूरी)',
          'Algebra (बीजगणित)',
          'Geometry (ज्यामिति - त्रिभुज, वृत्त, चतुर्भुज)',
          'Mensuration (क्षेत्रमिति 2D व 3D)',
          'Trigonometry (त्रिकोणमिति एवं ऊंचाई-दूरी)',
          'Data Interpretation (तालिका एवं ग्राफ)',
        ],
      },
      {
        subjectName: 'English Comprehension',
        topics: [
          'Reading Comprehension Passages',
          'Spot the Error & Sentence Improvement',
          'Fill in the Blanks',
          'Synonyms, Antonyms and Homonyms',
          'Idioms and Phrases',
          'One Word Substitution',
          'Active and Passive Voice of Verbs',
          'Direct and Indirect Speech (Narration)',
          'Cloze Test',
        ],
      },
    ],
    selectionProcess: [
      'Tier 1 Computer Based Examination (Qualifying for Tier 2)',
      'Tier 2 Computer Based Examination (Merit Based)',
      'Data Entry Speed Test (DEST) - 2000 key depressions in 15 mins',
      'Document Verification and Medical Fitness',
    ],
    pdfDownloadUrl: 'https://ssc.gov.in',
    publishedAt: '2026-08-12',
    updatedAt: '2026-09-04',
    isDemo: true,
  },
  {
    id: 'syl-2',
    slug: 'rrb-ntpc-syllabus',
    examName: 'RRB NTPC Stage 1 & 2 Syllabus & Topic Wise Weightage 2026',
    examNameHi: 'आरआरबी एनटीपीसी प्रथम एवं द्वितीय चरण विस्तृत सिलेबस',
    organization: 'Railway Recruitment Boards',
    overview: 'Detailed syllabus for RRB Non-Technical Popular Categories (NTPC) examination for 10+2 and Graduate level posts.',
    examPattern: [
      { stage: 'CBT 1 (Screening Test)', mode: 'Online Computer Test', totalMarks: '100 Marks (100 Questions)', totalTime: '90 Minutes (120 Mins for PwD)', negativeMarking: '1/3rd Mark per wrong response' },
      { stage: 'CBT 2 (Merit Test)', mode: 'Online Computer Test', totalMarks: '120 Marks (120 Questions)', totalTime: '90 Minutes', negativeMarking: '1/3rd Mark per wrong response' },
    ],
    subjects: [
      {
        subjectName: 'Mathematics (30 Marks in CBT-1, 35 Marks in CBT-2)',
        topics: ['Number System', 'Decimals & Fractions', 'LCM & HCF', 'Ratio & Proportion', 'Percentages', 'Mensuration', 'Time & Work', 'Time & Distance', 'Simple & Compound Interest', 'Profit & Loss', 'Elementary Algebra', 'Geometry & Trigonometry', 'Elementary Statistics'],
      },
      {
        subjectName: 'General Intelligence & Reasoning (30 Marks in CBT-1, 35 Marks in CBT-2)',
        topics: ['Analogies', 'Alphabetical & Number Series', 'Coding & Decoding', 'Mathematical Operations', 'Relationships', 'Syllogism', 'Jumbling', 'Venn Diagrams', 'Data Interpretation & Sufficiency', 'Conclusions & Decision Making', 'Analytical Reasoning'],
      },
      {
        subjectName: 'General Awareness (40 Marks in CBT-1, 50 Marks in CBT-2)',
        topics: ['Current Events of National and International Importance', 'Games and Sports', 'Art and Culture of India', 'Indian Literature', 'Monuments and Places of India', 'General Science & Life Sciences (up to 10th CBSE)', 'History of India and Freedom Struggle', 'Physical, Social & Economic Geography of India and World', 'Indian Polity & Governance', 'General Scientific & Technological Developments including Space and Nuclear Program of India', 'UN & Other Important World Organizations', 'Environmental Issues', 'Basics of Computers & Computer Applications'],
      },
    ],
    selectionProcess: [
      '1st Stage Computer Based Test (CBT-1)',
      '2nd Stage Computer Based Test (CBT-2)',
      'Typing Skill Test / Computer Based Aptitude Test (as per post)',
      'Document Verification & Medical Exam',
    ],
    pdfDownloadUrl: 'https://indianrailways.gov.in',
    publishedAt: '2026-08-16',
    updatedAt: '2026-09-02',
    isDemo: true,
  },
];

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
