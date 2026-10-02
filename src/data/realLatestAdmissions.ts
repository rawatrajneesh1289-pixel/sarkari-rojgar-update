import { AdmissionUpdate } from '../types';

export const REAL_LATEST_ADMISSIONS: AdmissionUpdate[] = [
  // 1. Bihar Library Eligibility Test BLET Online Form 2026
  {
    id: 'adm-bseb-blet-2026',
    slug: 'bihar-library-eligibility-test-blet-online-form-2026',
    advtNo: 'PR 318/2026 (BSEB School Librarian Eligibility Test - BLET 2026)',
    courseOrExam: 'Bihar Library Eligibility Test BLET Online Form 2026',
    courseOrExamHi: 'बिहार पुस्तकालयाध्यक्ष पात्रता परीक्षा (BSEB BLET 2026) ऑनलाइन आवेदन फॉर्म',
    institution: 'Bihar School Examination Board (BSEB, Patna)',
    level: 'Entrance Exam',
    applicationStart: '01/10/2026',
    applicationLastDate: '21/10/2026',
    eligibility:
      'किसी मान्यता प्राप्त विश्वविद्यालय से न्यूनतम 45% अंकों के साथ स्नातक (Bachelor Degree) तथा पुस्तकालय एवं सूचना विज्ञान में स्नातक (B.Lib / BLIS)। बिहार के SC / ST / EBC / BC / दिव्यांग / महिला / EWS अभ्यर्थियों को न्यूनतम अंकों में 5% की छूट (40% अंक)।',
    applyUrl: 'https://sletregistration.cbrt.co.in/',
    officialNotificationUrl: 'https://secondary.biharboardonline.com/',
    totalSeats: 'लगभग 5,800+ विद्यालय पुस्तकालयाध्यक्ष (School Librarian) पदों पर भर्ती हेतु अनिवार्य पात्रता परीक्षा',
    examDate: '19 नवंबर से 10 दिसंबर 2026 (CBT Mode)',
    ageLimit:
      '01/08/2026 को न्यूनतम 21 वर्ष | अधिकतम आयु: अनारक्षित पुरुष - 37 वर्ष, अनारक्षित महिला / BC / EBC - 40 वर्ष, SC / ST - 42 वर्ष (शिक्षा विभाग के निर्देशानुसार अधिकतम आयु सीमा में 10 वर्ष की विशेष छूट लागू)।',
    feeDetails: {
      generalOBC: '₹ 960/- (सामान्य / EWS / BC / EBC वर्ग)',
      scSt: '₹ 760/- (अनुसूचित जाति / अनुसूचित जनजाति / दिव्यांग अभ्यर्थी)',
      paymentMode: 'डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग अथवा UPI के माध्यम से ऑनलाइन भुगतान',
    },
    description:
      'बिहार विद्यालय परीक्षा समिति (BSEB, पटना) द्वारा शिक्षा विभाग, बिहार के अंतर्गत राजकीय माध्यमिक एवं उच्च माध्यमिक विद्यालयों में पुस्तकालयाध्यक्ष (School Librarian) के लगभग 5,800+ पदों पर नियुक्ति हेतु बिहार पुस्तकालयाध्यक्ष पात्रता परीक्षा (BLET 2026) का आधिकारिक नोटिफिकेशन जारी किया गया है। ऑनलाइन आवेदन 01 अक्टूबर 2026 से 21 अक्टूबर 2026 तक स्वीकार किए जा रहे हैं। यह परीक्षा कंप्यूटर आधारित (CBT) होगी तथा इसका उत्तीर्णता प्रमाण पत्र (Eligibility Certificate) आजीवन (Lifetime) मान्य रहेगा।',
    courseWiseEligibility: [
      {
        courseName: 'Paper-I: School Librarian Eligibility Test (BLET 2026)',
        seatsOrInfo: 'माध्यमिक एवं उच्च माध्यमिक विद्यालय (लगभग 5,800+ संभावित पद)',
        eligibility:
          'मान्यता प्राप्त विश्वविद्यालय से न्यूनतम 45% अंकों में स्नातक (SC/ST/BC/EBC/EWS/महिला/दिव्यांग हेतु 40%) + बैचलर ऑफ लाइब्रेरी एंड इंफॉर्मेशन साइंस (B.Lib.I.Sc / BLIS) डिग्री उत्तीर्ण।',
      },
      {
        courseName: 'न्यूनतम उत्तीर्णांक (Qualifying Cutoff Marks - BSEB Norms)',
        seatsOrInfo: 'आजीवन वैध पात्रता प्रमाण पत्र (Lifetime Validity)',
        eligibility:
          'सामान्य (General): 50% (75 अंक) | BC: 45.5% (68.25 अंक) | EBC: 42.5% (63.75 अंक) | SC / ST / दिव्यांग (PwD) / महिला (सभी वर्ग): 40% (60 अंक)।',
      },
    ],
    examPattern: [
      'परीक्षा का माध्यम: कंप्यूटर आधारित टेस्ट (Online CBT Mode) — बहुविकल्पीय वस्तुनिष्ठ प्रश्न (MCQs)।',
      'कुल प्रश्न एवं पूर्णांक: कुल 150 प्रश्न = 150 अंक (प्रत्येक सही उत्तर के लिए 1 अंक)।',
      'भाग-I (Library & Information Science - 100 अंक): पुस्तकालय एवं समाज, पुस्तकालय प्रबंधन, वर्गीकरण (DDC/CC), सूचीकरण (AACR-II/CCC), संदर्भ सेवा, सूचना स्रोत और पुस्तकालय स्वचालन (INFLIBNET, KOHA, SOUL)।',
      'भाग-II (General Knowledge & Teaching/Analytical Aptitude - 50 अंक): सामान्य ज्ञान, बिहार विशेष, समसामयिकी, तार्किक क्षमता, गणितीय अभियोग्यता एवं कंप्यूटर साक्षरता।',
      'परीक्षा अवधि एवं नेगेटिव मार्किंग: कुल समय 2 घंटे 30 मिनट (150 मिनट)। इस पात्रता परीक्षा में कोई ऋणात्मक अंकन (No Negative Marking) नहीं है।',
    ],
    requiredDocuments: [
      'मैट्रिक (10वीं) का प्रमाण पत्र एवं अंक पत्र (जन्मतिथि सत्यापन हेतु)',
      'इंटरमीडिएट (12वीं) एवं स्नातक (Graduation) का अंक पत्र व मूल/औपबंधिक प्रमाण पत्र',
      'पुस्तकालय विज्ञान में स्नातक (B.Lib / BLIS) का अंक पत्र एवं प्रमाण पत्र',
      'बिहार राज्य का स्थायी निवास प्रमाण पत्र (Domicile Certificate) एवं जाति/EWS/नॉन-क्रीमी लेयर प्रमाण पत्र',
      'हालिया खींचा गया रंगीन पासपोर्ट साइज फोटोग्राफ (सफेद या हल्के बैकग्राउंड में, 20 KB – 100 KB)',
      'अभ्यर्थी के स्पष्ट स्कैन किए हुए हस्ताक्षर (10 KB – 50 KB) एवं आधार कार्ड',
    ],
    importantDates: [
      { event: 'BLET 2026 आधिकारिक विज्ञापन जारी', date: 'सितंबर 2026' },
      { event: 'ऑनलाइन रजिस्ट्रेशन एवं आवेदन प्रारंभ', date: '01/10/2026' },
      { event: 'ऑनलाइन आवेदन एवं परीक्षा शुल्क भुगतान की अंतिम तिथि', date: '21/10/2026' },
      { event: 'डमी एडमिट कार्ड जारी एवं ऑनलाइन त्रुटि सुधार (Correction Window)', date: '24/10/2026 से 28/10/2026' },
      { event: 'फाइनल एडमिट कार्ड डाउनलोड प्रारंभ', date: '10/11/2026' },
      { event: 'BLET 2026 ऑनलाइन सीबीटी परीक्षा तिथि', date: '19/11/2026 से 10/12/2026' },
    ],
    stepsToApply: [
      'बिहार बोर्ड BLET 2026 के आधिकारिक आवेदन पोर्टल sletregistration.cbrt.co.in अथवा secondary.biharboardonline.com पर जाएं।',
      'होमपेज पर "Register New Candidate for Bihar Library Eligibility Test (BLET) 2026" पर क्लिक करें।',
      'अपना नाम, मोबाइल नंबर एवं ईमेल आईडी दर्ज कर OTP के माध्यम से प्राथमिक पंजीकरण पूर्ण करें।',
      'प्राप्त User ID और Password से लॉगिन कर व्यक्तिगत विवरण, श्रेणी (Category) और शैक्षणिक योग्यता (Graduation + BLIS) का विवरण भरें।',
      'निर्धारित आकार में रंगीन पासपोर्ट फोटो, हस्ताक्षर और शैक्षणिक व आरक्षण प्रमाण पत्रों की स्कैन पीडीएफ अपलोड करें।',
      'अपनी श्रेणी के अनुसार ₹ 960/- या ₹ 760/- का ऑनलाइन शुल्क भुगतान करें और फाइनल सबमिट कर भरे हुए आवेदन पत्र का प्रिंट सुरक्षित रख लें।',
    ],
    importantLinks: [
      { label: 'Apply Online (Registration)', url: 'https://sletregistration.cbrt.co.in/', note: 'New Candidate Registration Active' },
      { label: 'Applicant Login (Already Registered)', url: 'https://sletregistration.cbrt.co.in/', note: 'Login with Mobile & OTP / Password' },
      { label: 'Download BLET 2026 Official Notification', url: 'https://secondary.biharboardonline.com/', note: 'Full Advt & Syllabus Notice' },
      { label: 'BSEB Official Website', url: 'https://secondary.biharboardonline.com/', note: 'Bihar School Examination Board, Patna' },
    ],
    faqs: [
      {
        question: 'बिहार लाइब्रेरियन पात्रता परीक्षा (BLET 2026) के लिए ऑनलाइन आवेदन की अंतिम तिथि क्या है?',
        answer: 'अभ्यर्थी 01 अक्टूबर 2026 से 21 अक्टूबर 2026 (रात्रि 11:59 बजे) तक ऑनलाइन आवेदन एवं परीक्षा शुल्क का भुगतान कर सकते हैं।',
      },
      {
        question: 'क्या BLET 2026 परीक्षा में नेगेटिव मार्किंग होगी?',
        answer: 'नहीं, बिहार बोर्ड द्वारा आयोजित इस पात्रता परीक्षा (150 प्रश्न, 150 अंक) में कोई नेगेटिव मार्किंग नहीं है।',
      },
      {
        question: 'BLET उत्तीर्ण करने के लिए न्यूनतम कितने अंक आवश्यक हैं?',
        answer: 'सामान्य वर्ग के लिए 50% (75 अंक), BC के लिए 45.5%, EBC के लिए 42.5% तथा SC/ST/दिव्यांग और सभी वर्ग की महिलाओं के लिए 40% (60 अंक) अनिवार्य हैं।',
      },
    ],
    publishedAt: '2026-10-01',
    updatedAt: '2026-10-02',
    isDemo: false,
  },

  // 2. NVS Class 9th Online Form 2027-28 – Date Extend
  {
    id: 'adm-nvs-class-9th-2027',
    slug: 'nvs-class-9th-online-form-2027-28-date-extend',
    advtNo: 'NVS Class IX Lateral Entry Selection Test (LEST) 2027-28',
    courseOrExam: 'NVS Class 9th Online Form 2027-28 – Date Extend',
    courseOrExamHi: 'नवोदय विद्यालय कक्षा 9वीं लेटरल एंट्री प्रवेश परीक्षा 2027-28 ऑनलाइन फॉर्म (अंतिम तिथि विस्तारित)',
    institution: 'Navodaya Vidyalaya Samiti (NVS), Ministry of Education, Govt. of India',
    level: 'School',
    applicationStart: '01/09/2026',
    applicationLastDate: '15/10/2026 (Date Extended)',
    eligibility:
      'अभ्यर्थी शैक्षणिक सत्र 2026-27 में उसी जिले के किसी सरकारी या सरकारी मान्यता प्राप्त विद्यालय में कक्षा 8वीं में अध्ययनरत होना चाहिए जहाँ जवाहर नवोदय विद्यालय स्थित है। जन्मतिथि 01/05/2012 से 31/07/2014 (दोनों तिथियां सम्मिलित) के मध्य होनी चाहिए।',
    applyUrl: 'https://cbseitms.nic.in/2026/nvsix_9/',
    officialNotificationUrl: 'https://navodaya.gov.in/',
    totalSeats: 'देश के 653 जवाहर नवोदय विद्यालयों (JNVs) में कक्षा 9वीं की रिक्त सीटें (Lateral Entry)',
    examDate: '10/04/2027 (शनिवार, प्रातः 11:00 बजे से 01:30 बजे तक)',
    ageLimit:
      'छात्र/छात्रा का जन्म 01 मई 2012 से 31 जुलाई 2014 (दोनों तिथियां शामिल) के बीच होना अनिवार्य है। यह आयु सीमा अनुसूचित जाति/जनजाति सहित सभी श्रेणियों के लिए समान है।',
    feeDetails: {
      generalOBC: '₹ 0/- (पूर्णतः निःशुल्क / No Application Fee)',
      scSt: '₹ 0/- (पूर्णतः निःशुल्क / No Application Fee for All Categories)',
      paymentMode: 'कोई शुल्क देय नहीं है — फॉर्म सीधे ऑनलाइन सबमिट करें',
    },
    description:
      'नवोदय विद्यालय समिति (NVS), शिक्षा मंत्रालय, भारत सरकार द्वारा शैक्षणिक सत्र 2027-28 के लिए देश भर के 653 जवाहर नवोदय विद्यालयों में कक्षा 9वीं की रिक्त सीटों पर प्रवेश हेतु लेटरल एंट्री चयन परीक्षा (JNVST Class IX LEST 2027-28) की ऑनलाइन आवेदन अंतिम तिथि 30 सितंबर 2026 से बढ़ाकर 15 अक्टूबर 2026 कर दी गई है। चयनित छात्र-छात्राओं को कक्षा 9वीं से 12वीं तक निःशुल्क आवासीय शिक्षा, भोजन, यूनिफॉर्म एवं पाठ्यपुस्तकें प्रदान की जाती हैं।',
    courseWiseEligibility: [
      {
        courseName: 'JNVST Class 9th Lateral Entry Admission (Session 2027-28)',
        seatsOrInfo: '653 JNVs में उपलब्ध रिक्त सीटें',
        eligibility:
          'सत्र 2026-27 (अप्रैल 2026 – मार्च 2027 या जनवरी – दिसंबर 2026) में संबंधित जिले के मान्यता प्राप्त स्कूल में कक्षा 8वीं में अध्ययनरत। जन्मतिथि: 01/05/2012 से 31/07/2014।',
      },
    ],
    examPattern: [
      'परीक्षा तिथि एवं समय: शनिवार, 10 अप्रैल 2027 — कुल अवधि 2 घंटे 30 मिनट (दिव्यांग छात्रों को 50 मिनट अतिरिक्त समय)।',
      'परीक्षा का प्रकार: ओएमआर आधारित वस्तुनिष्ठ परीक्षा (OMR Sheet Based Objective Test), माध्यम हिंदी/अंग्रेजी।',
      'विषयवार अंक विभाजन (कुल 100 प्रश्न = 100 अंक): (1) अंग्रेजी (English): 15 प्रश्न (15 अंक) | (2) हिंदी (Hindi): 15 प्रश्न (15 अंक) | (3) गणित (Mathematics): 35 प्रश्न (35 अंक) | (4) सामान्य विज्ञान (General Science): 35 प्रश्न (35 अंक)।',
      'नेगेटिव मार्किंग: परीक्षा में कोई ऋणात्मक अंकन (No Negative Marking) नहीं है तथा पाठ्यक्रम कक्षा 8वीं के स्तर का होगा।',
    ],
    requiredDocuments: [
      'अभ्यर्थी का पासपोर्ट साइज फोटोग्राफ (JPG फॉर्मेट, 10 KB से 100 KB के मध्य)',
      'अभ्यर्थी के हस्ताक्षर (Signature) की स्कैन कॉपी (10 KB से 100 KB के मध्य)',
      'माता या पिता (Parent) के हस्ताक्षर की स्कैन कॉपी (10 KB से 100 KB के मध्य)',
      'आधार कार्ड का विवरण अथवा सक्षम प्राधिकारी द्वारा जारी निवास प्रमाण पत्र',
      'वर्तमान विद्यालय (जहाँ कक्षा 8वीं में अध्ययनरत है) का विवरण एवं UDISE जानकारी',
    ],
    importantDates: [
      { event: 'ऑनलाइन आवेदन प्रारंभ तिथि', date: '01/09/2026' },
      { event: 'ऑनलाइन आवेदन की पूर्व अंतिम तिथि', date: '30/09/2026' },
      { event: 'ऑनलाइन आवेदन की विस्तारित अंतिम तिथि (Extended Last Date)', date: '15/10/2026' },
      { event: 'आवेदन पत्र त्रुटि सुधार विंडो (Correction Window)', date: '16/10/2026 से 18/10/2026' },
      { event: 'प्रवेश पत्र (Admit Card) जारी होने की तिथि', date: 'मार्च 2027' },
      { event: 'NVS कक्षा 9वीं लेटरल एंट्री चयन परीक्षा (LEST 2027)', date: '10/04/2027 (शनिवार)' },
      { event: 'चयन परिणाम घोषणा', date: 'मई / जून 2027' },
    ],
    stepsToApply: [
      'नवोदय विद्यालय समिति के आधिकारिक एडमिशन पोर्टल cbseitms.nic.in/2026/nvsix_9/ अथवा navodaya.gov.in पर जाएं।',
      '"Click here for Class IX Registration (2027-28)" लिंक पर क्लिक करें।',
      'राज्य व जिले का चयन करें जहाँ छात्र वर्तमान में कक्षा 8वीं में पढ़ रहा है और निवास करता है।',
      'छात्र का नाम, माता-पिता का नाम, जन्मतिथि, मोबाइल नंबर, कक्षा 8वीं के स्कूल का विवरण और परीक्षा माध्यम भरें।',
      'छात्र की फोटो, छात्र के हस्ताक्षर और अभिभावक के हस्ताक्षर (10–100 KB JPG) अपलोड करें।',
      'फॉर्म का प्रीव्यू जांचें और सबमिट करके रजिस्ट्रेशन नंबर व कन्फर्मेशन पेज का प्रिंटआउट सुरक्षित रख लें।',
    ],
    importantLinks: [
      { label: 'Apply Online (Class 9th Registration)', url: 'https://cbseitms.nic.in/2026/nvsix_9/', note: 'Last Date Extended till 15/10/2026' },
      { label: 'Candidate Login / Print Registration Form', url: 'https://cbseitms.nic.in/2026/nvsix_9/', note: 'Download Confirmation Page' },
      { label: 'Download Date Extend Notice & Prospectus (PDF)', url: 'https://navodaya.gov.in/', note: 'Official NVS Notification 2027-28' },
      { label: 'NVS Official Website', url: 'https://navodaya.gov.in/', note: 'Navodaya Vidyalaya Samiti' },
    ],
    faqs: [
      {
        question: 'नवोदय विद्यालय कक्षा 9वीं ऑनलाइन फॉर्म 2027-28 की बढ़ी हुई अंतिम तिथि क्या है?',
        answer: 'नवोदय विद्यालय समिति द्वारा कक्षा 9वीं लेटरल एंट्री प्रवेश परीक्षा 2027-28 के लिए ऑनलाइन आवेदन की अंतिम तिथि बढ़ाकर 15 अक्टूबर 2026 कर दी गई है।',
      },
      {
        question: 'क्या दूसरे जिले के नवोदय विद्यालय के लिए आवेदन किया जा सकता है?',
        answer: 'नहीं, छात्र जिस जिले के मान्यता प्राप्त स्कूल में कक्षा 8वीं में पढ़ रहा है और जहाँ का मूल निवासी है, केवल उसी जिले के जेएनवी (JNV) के लिए आवेदन कर सकता है।',
      },
    ],
    publishedAt: '2026-09-01',
    updatedAt: '2026-10-02',
    isDemo: false,
  },

  // 3. NVS Class 11th Online Form 2027-28 – Date Extend
  {
    id: 'adm-nvs-class-11th-2027',
    slug: 'nvs-class-11th-online-form-2027-28-date-extend',
    advtNo: 'NVS Class XI Lateral Entry Selection Test (LEST) 2027-28',
    courseOrExam: 'NVS Class 11th Online Form 2027-28 – Date Extend',
    courseOrExamHi: 'नवोदय विद्यालय कक्षा 11वीं लेटरल एंट्री प्रवेश परीक्षा 2027-28 ऑनलाइन फॉर्म (तिथि विस्तारित)',
    institution: 'Navodaya Vidyalaya Samiti (NVS), Ministry of Education, Govt. of India',
    level: 'School',
    applicationStart: '02/09/2026',
    applicationLastDate: '15/10/2026 (Date Extended)',
    eligibility:
      'अभ्यर्थी शैक्षणिक सत्र 2026-27 (अप्रैल 2026 से मार्च 2027 अथवा जनवरी से दिसंबर 2026) के दौरान किसी सरकारी या सरकारी मान्यता प्राप्त विद्यालय में कक्षा 10वीं (High School) में अध्ययनरत होना चाहिए। जन्मतिथि 01/06/2010 से 31/07/2012 (दोनों तिथियां सम्मिलित) के मध्य हो।',
    applyUrl: 'https://cbseitms.nic.in/2026/nvsxi_11/',
    officialNotificationUrl: 'https://navodaya.gov.in/',
    totalSeats: 'देश के 650+ जवाहर नवोदय विद्यालयों में कक्षा 11वीं (Science, Commerce, Humanities & Vocational) की रिक्त सीटें',
    examDate: '10/04/2027 (शनिवार, प्रातः 11:00 बजे से 01:30 बजे तक)',
    ageLimit:
      'अभ्यर्थी की जन्मतिथि 01 जून 2010 से 31 जुलाई 2012 (दोनों तिथियां शामिल) के मध्य होनी चाहिए। यह नियम SC/ST सहित सभी वर्गों के अभ्यर्थियों पर समान रूप से लागू है।',
    feeDetails: {
      generalOBC: '₹ 0/- (पूर्णतः निःशुल्क / No Application Fee)',
      scSt: '₹ 0/- (पूर्णतः निःशुल्क / No Fee for Any Category)',
      paymentMode: 'निःशुल्क ऑनलाइन आवेदन',
    },
    description:
      'नवोदय विद्यालय समिति (NVS) द्वारा शैक्षणिक सत्र 2027-28 के लिए जवाहर नवोदय विद्यालयों में कक्षा 11वीं (Science, Commerce, Humanities एवं Vocational स्ट्रीम) की संभावित रिक्त सीटों पर प्रवेश हेतु लेटरल एंट्री चयन परीक्षा (LEST Class XI 2027-28) के ऑनलाइन आवेदन की अंतिम तिथि बढ़ाकर 15 अक्टूबर 2026 कर दी गई है। परीक्षा 10 अप्रैल 2027 को ओएमआर आधारित ऑफलाइन मोड में आयोजित की जाएगी।',
    courseWiseEligibility: [
      {
        courseName: 'Science Stream (विज्ञान संकाय - विद/विदाउट मैथ्स)',
        seatsOrInfo: 'Mental Ability + Science + Mathematics अंकों के आधार पर मेरिट',
        eligibility: 'सत्र 2026-27 में कक्षा 10वीं में अध्ययनरत तथा जन्मतिथि 01/06/2010 से 31/07/2012 के मध्य।',
      },
      {
        courseName: 'Commerce Stream (वाणिज्य संकाय)',
        seatsOrInfo: 'Mental Ability + Social Science + Mathematics अंकों के आधार पर मेरिट',
        eligibility: 'सत्र 2026-27 में कक्षा 10वीं में अध्ययनरत तथा बोर्ड परीक्षा उत्तीर्ण करने के उपरांत प्रवेश।',
      },
      {
        courseName: 'Humanities & Vocational Stream (मानविकी एवं व्यावसायिक संकाय)',
        seatsOrInfo: 'Mental Ability + Social Science + अन्य विषय के अंकों के आधार पर मेरिट',
        eligibility: 'सत्र 2026-27 में कक्षा 10वीं में अध्ययनरत छात्र-छात्राएं।',
      },
    ],
    examPattern: [
      'परीक्षा तिथि एवं समय: शनिवार, 10 अप्रैल 2027 (प्रातः 11:00 बजे से दोपहर 1:30 बजे तक — 2 घंटे 30 मिनट)।',
      'कुल प्रश्न एवं अंक: कुल 100 बहुविकल्पीय प्रश्न (MCQs) = 100 अंक (OMR आधारित, कोई नेगेटिव मार्किंग नहीं)।',
      '5 खंडों का अंक विभाजन: (1) मानसिक योग्यता (Mental Ability): 20 प्रश्न (20 अंक) | (2) अंग्रेजी (English): 20 प्रश्न (20 अंक) | (3) विज्ञान (Science): 20 प्रश्न (20 अंक) | (4) सामाजिक विज्ञान (Social Science): 20 प्रश्न (20 अंक) | (5) गणित (Mathematics): 20 प्रश्न (20 अंक)।',
      'स्ट्रीम-वार चयन मेरिट: चुनी गई स्ट्रीम के अनुसार संबंधित 3 मुख्य विषयों (कुल 60 अंक) में न्यूनतम अर्हता एवं कुल 100 अंकों की मेरिट के आधार पर जिला/राज्य वार चयन किया जाएगा।',
    ],
    requiredDocuments: [
      'अभ्यर्थी का हालिया पासपोर्ट साइज रंगीन फोटो (10 KB से 100 KB JPG)',
      'अभ्यर्थी के हस्ताक्षर की स्कैन इमेज (10 KB से 100 KB JPG)',
      'माता/पिता (अभिभावक) के हस्ताक्षर की स्कैन इमेज (10 KB से 100 KB JPG)',
      'कक्षा 10वीं में अध्ययनरत विद्यालय का नाम, जिला, राज्य एवं बोर्ड विवरण',
      'पसंदीदा स्ट्रीम (Science / Commerce / Humanities / Vocational) और JNV जिले की प्राथमिकताएं',
    ],
    importantDates: [
      { event: 'ऑनलाइन आवेदन प्रारंभ तिथि', date: '02/09/2026' },
      { event: 'ऑनलाइन आवेदन की पूर्व अंतिम तिथि', date: '30/09/2026' },
      { event: 'ऑनलाइन आवेदन की विस्तारित अंतिम तिथि (Extended Date)', date: '15/10/2026' },
      { event: 'आवेदन सुधार विंडो (Correction Window)', date: '16/10/2026 से 18/10/2026' },
      { event: 'एडमिट कार्ड जारी होने की संभावित तिथि', date: 'मार्च 2027' },
      { event: 'NVS कक्षा 11वीं प्रवेश परीक्षा तिथि (LEST 2027)', date: '10/04/2027' },
    ],
    stepsToApply: [
      'NVS के आधिकारिक कक्षा 11वीं प्रवेश पोर्टल cbseitms.nic.in/2026/nvsxi_11/ या navodaya.gov.in पर जाएं।',
      '"Click here to Register for Class XI Lateral Entry Selection Test 2027-28" पर क्लिक करें।',
      'कक्षा 10वीं अध्ययन का राज्य व जिला, निवास का जिला, आधार नंबर व व्यक्तिगत विवरण दर्ज करें।',
      'अपनी पसंद की स्ट्रीम (Science / Commerce / Humanities / Vocational) और जिले के नवोदय विद्यालय का विकल्प चुनें।',
      'छात्र का फोटो, छात्र के हस्ताक्षर और माता/पिता के हस्ताक्षर निर्धारित साइज (10–100 KB) में अपलोड करें।',
      'फाइनल सबमिट कर आवेदन पत्र का प्रिंट निकाल लें।',
    ],
    importantLinks: [
      { label: 'Apply Online (Class 11th Registration)', url: 'https://cbseitms.nic.in/2026/nvsxi_11/', note: 'Date Extended till 15/10/2026' },
      { label: 'Candidate Login / Print Application Form', url: 'https://cbseitms.nic.in/2026/nvsxi_11/', note: 'Login with Registration No. & DOB' },
      { label: 'Download Class 11th Notification & Date Extend Notice', url: 'https://navodaya.gov.in/', note: 'Official NVS LEST 2027-28 Brochure' },
      { label: 'NVS Official Website', url: 'https://navodaya.gov.in/', note: 'Navodaya Vidyalaya Samiti' },
    ],
    faqs: [
      {
        question: 'NVS कक्षा 11वीं ऑनलाइन फॉर्म 2027-28 भरने की अंतिम तिथि कब तक बढ़ाई गई है?',
        answer: 'नवोदय विद्यालय कक्षा 11वीं लेटरल एंट्री 2027-28 के लिए ऑनलाइन आवेदन की अंतिम तिथि 30 सितंबर 2026 से बढ़ाकर 15 अक्टूबर 2026 कर दी गई है।',
      },
      {
        question: 'कक्षा 11वीं प्रवेश परीक्षा का सिलेबस किस स्तर का होता है?',
        answer: 'चयन परीक्षा के सभी 5 खंड (Mental Ability, English, Science, Social Science, Mathematics) कक्षा 10वीं (CBSE/State Board) के पाठ्यक्रम पर आधारित होते हैं।',
      },
    ],
    publishedAt: '2026-09-02',
    updatedAt: '2026-10-02',
    isDemo: false,
  },

  // 4. AIBE 22th Online Form 2026
  {
    id: 'adm-bci-aibe-22-2026',
    slug: 'all-india-bar-exam-aibe-22nd-xxii-online-form-2026',
    advtNo: 'BCI / AIBE-XXII (22nd All India Bar Examination 2026)',
    courseOrExam: 'AIBE 22th Online Form 2026 (All India Bar Examination XXII)',
    courseOrExamHi: 'ऑल इंडिया बार एग्जामिनेशन (AIBE-22 / XXII) ऑनलाइन फॉर्म 2026',
    institution: 'Bar Council of India (BCI, New Delhi)',
    level: 'Entrance Exam',
    applicationStart: '19/08/2026',
    applicationLastDate: '27/10/2026',
    eligibility:
      'बार काउंसिल ऑफ इंडिया (BCI) द्वारा मान्यता प्राप्त विश्वविद्यालय/महाविद्यालय से 3-वर्षीय अथवा 5-वर्षीय एकीकृत एलएलबी (LL.B) डिग्री उत्तीर्ण अथवा बिना किसी बैकलॉग के अंतिम वर्ष/अंतिम सेमेस्टर (Final Semester Appearing) में अध्ययनरत अभ्यर्थी पात्र हैं।',
    applyUrl: 'https://www.allindiabarexamination.com/',
    officialNotificationUrl: 'https://www.barcouncilofindia.org/',
    totalSeats: 'Certificate of Practice (COP) — भारत के सभी न्यायालयों में वकालत (Law Practice) हेतु अनिवार्य अर्हता',
    examDate: '29/11/2026 (रविवार - Offline OMR Pen & Paper Mode)',
    ageLimit: 'अखिल भारतीय बार परीक्षा (AIBE-22) में शामिल होने के लिए कोई न्यूनतम या अधिकतम आयु सीमा निर्धारित नहीं है (No Age Limit)।',
    feeDetails: {
      generalOBC: '₹ 3,560/- (सामान्य / ओबीसी / EWS अभ्यर्थी + बैंक चार्जेज)',
      scSt: '₹ 2,560/- (अनुसूचित जाति / अनुसूचित जनजाति / दिव्यांग अभ्यर्थी + बैंक चार्जेज)',
      paymentMode: 'ऑनलाइन पेमेंट गेटवे (डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग, UPI)',
    },
    description:
      'बार काउंसिल ऑफ इंडिया (BCI), नई दिल्ली द्वारा विधि स्नातकों (Law Graduates) को भारतीय न्यायालयों में वकालत करने हेतु "सर्टिफिकेट ऑफ प्रैक्टिस" (Certificate of Practice - COP) प्रदान करने के लिए 22वीं अखिल भारतीय बार परीक्षा (AIBE XXII / 22th Exam 2026) के ऑनलाइन आवेदन आमंत्रित किए गए हैं। माननीय सर्वोच्च न्यायालय एवं BCI के नए नियमों के अनुसार स्टेट बार काउंसिल में पंजीकृत अधिवक्ताओं के साथ-साथ बिना बैकलॉग वाले अंतिम सेमेस्टर के एलएलबी छात्र भी आवेदन कर सकते हैं।',
    courseWiseEligibility: [
      {
        courseName: '3-Year LL.B / 5-Year Integrated LL.B Graduates (Enrolled with State Bar Council)',
        seatsOrInfo: 'Certificate of Practice (COP)',
        eligibility: 'विधि स्नातक उत्तीर्ण एवं संबंधित राज्य बार काउंसिल (State Bar Council) में अधिवक्ता के रूप में पंजीकृत।',
      },
      {
        courseName: 'Final Year / Final Semester LL.B Students & Graduates without Enrollment Certificate',
        seatsOrInfo: 'अंडरटेकिंग (Self-Attested Undertaking) के साथ पात्र',
        eligibility:
          '3-वर्षीय या 5-वर्षीय LL.B के अंतिम सेमेस्टर में अध्ययनरत छात्र (पिछले सेमेस्टर में कोई बैकलॉग न हो) अथवा वे पासआउट छात्र जिनका एनरोलमेंट सर्टिफिकेट अभी जारी नहीं हुआ है।',
      },
    ],
    examPattern: [
      'परीक्षा का प्रकार एवं अवधि: ऑफलाइन ओएमआर (Pen & Paper) आधारित परीक्षा — कुल समय 3 घंटे 30 मिनट (100 बहुविकल्पीय प्रश्न = 100 अंक)।',
      'न्यूनतम उत्तीर्णांक (Qualifying Marks): सामान्य एवं ओबीसी (Gen/OBC) वर्ग हेतु 45% (45 अंक) तथा SC / ST एवं दिव्यांग वर्ग हेतु 40% (40 अंक) अनिवार्य हैं।',
      'नेगेटिव मार्किंग एवं बेयर एक्ट नियम: परीक्षा में कोई नेगेटिव मार्किंग नहीं है। अभ्यर्थियों को बिना किसी नोट्स या टिप्पणियों वाले बेयर एक्ट्स (Bare Acts without Notes/Comments) परीक्षा कक्ष में ले जाने की अनुमति है।',
      'प्रमुख 19 विधि विषय (100 अंक): संवैधानिक विधि (10), भारतीय न्याय संहिता BNS / IPC (8), भारतीय नागरिक सुरक्षा संहिता BNSS / CrPC (10), सिविल प्रक्रिया संहिता CPC (10), भारतीय साक्ष्य अधिनियम BSA / Evidence Act (8), पारिवारिक विधि (8), संविदा एवं संपत्ति विधि (8), प्रशासनिक विधि (3), व्यावसायिक आचार (4), कंपनी विधि, साइबर विधि, श्रम विधि, जनहित याचिका (PIL), कराधान (4) आदि।',
    ],
    requiredDocuments: [
      'पासपोर्ट साइज रंगीन फोटोग्राफ एवं अभ्यर्थी के हस्ताक्षर (JPG फॉर्मेट)',
      'स्टेट बार काउंसिल एनरोलमेंट सर्टिफिकेट (या अंतिम वर्ष के छात्रों हेतु स्व-सत्यापित अंडरटेकिंग व बोनाफाइड प्रमाण पत्र)',
      '10वीं, 12वीं एवं एलएलबी (सभी सेमेस्टर/वर्ष) की अंकतालिकाएं और डिग्री/प्रोविजनल सर्टिफिकेट (स्व-सत्यापित PDF)',
      'अधिवक्ता आईडी कार्ड (यदि जारी हुआ हो) एवं वैध फोटो पहचान पत्र (आधार कार्ड / वोटर आईडी)',
      'जाति प्रमाण पत्र अथवा दिव्यांगता प्रमाण पत्र (SC/ST/OBC/PwD छूट हेतु)',
    ],
    importantDates: [
      { event: 'AIBE-22 (XXII) ऑनलाइन रजिस्ट्रेशन प्रारंभ', date: '19/08/2026' },
      { event: 'ऑनलाइन रजिस्ट्रेशन एवं आवेदन की अंतिम तिथि', date: '27/10/2026' },
      { event: 'ऑनलाइन परीक्षा शुल्क भुगतान की अंतिम तिथि', date: '28/10/2026' },
      { event: 'आवेदन पत्र में सुधार (Correction Window) की अंतिम तिथि', date: '30/10/2026' },
      { event: 'AIBE-22 एडमिट कार्ड जारी होने की तिथि', date: '14/11/2026' },
      { event: 'AIBE-22 (XXII) परीक्षा तिथि', date: '29/11/2026 (रविवार)' },
    ],
    stepsToApply: [
      'अखिल भारतीय बार परीक्षा की आधिकारिक वेबसाइट allindiabarexamination.com पर जाएं।',
      'होमपेज पर "Registration Link AIBE-XXII" पर क्लिक कर अपना मोबाइल नंबर व ईमेल सत्यापित करें।',
      'अपनी अभ्यर्थी श्रेणी (Enrolled Advocate / Final Semester Student / Graduate without Enrollment) चुनें।',
      'व्यक्तिगत विवरण, शैक्षणिक योग्यता, प्रश्न पत्र की भाषा (हिंदी, अंग्रेजी या अन्य 22 क्षेत्रीय भाषाएं) और 3 परीक्षा केंद्र शहरों का चयन करें।',
      'फोटो, हस्ताक्षर एवं स्व-सत्यापित प्रमाण पत्र (PDF) अपलोड करें।',
      'ऑनलाइन माध्यम से परीक्षा शुल्क (₹ 3,560/- या ₹ 2,560/-) का भुगतान कर आवेदन पत्र डाउनलोड करें।',
    ],
    importantLinks: [
      { label: 'Apply Online (AIBE XXII Registration)', url: 'https://www.allindiabarexamination.com/', note: 'Registration Open till 27/10/2026' },
      { label: 'Candidate Login (AIBE-22 Portal)', url: 'https://www.allindiabarexamination.com/', note: 'Complete Form / Fee Payment' },
      { label: 'Download AIBE-22 Official Notification & Schedule', url: 'https://www.allindiabarexamination.com/', note: 'BCI Official Notice & Syllabus' },
      { label: 'Bar Council of India Official Website', url: 'https://www.barcouncilofindia.org/', note: 'BCI New Delhi' },
    ],
    faqs: [
      {
        question: 'AIBE 22 (XXII) ऑनलाइन फॉर्म 2026 भरने की अंतिम तिथि क्या है?',
        answer: 'ऑनलाइन आवेदन करने की अंतिम तिथि 27 अक्टूबर 2026 है तथा ऑनलाइन फीस भुगतान 28 अक्टूबर 2026 तक किया जा सकता है।',
      },
      {
        question: 'क्या AIBE 22 में नए आपराधिक कानूनों (BNS, BNSS, BSA) से प्रश्न पूछे जाएंगे?',
        answer: 'हाँ, बार काउंसिल ऑफ इंडिया के नवीनतम सिलेबस के अनुसार भारतीय न्याय संहिता (BNS), भारतीय नागरिक सुरक्षा संहिता (BNSS) और भारतीय साक्ष्य अधिनियम (BSA) के साथ पूर्व कानूनों के संदर्भ शामिल हैं।',
      },
    ],
    publishedAt: '2026-08-19',
    updatedAt: '2026-10-02',
    isDemo: false,
  },

  // 5. IIT GATE 2027 Online Form
  {
    id: 'adm-iit-gate-2027',
    slug: 'iit-gate-2027-online-form',
    advtNo: 'GATE 2027 (Organizing Institute: IIT Madras)',
    courseOrExam: 'IIT GATE 2027 Online Form (Graduate Aptitude Test in Engineering)',
    courseOrExamHi: 'आईआईटी गेट (GATE 2027) ऑनलाइन आवेदन फॉर्म — एम.टेक / पीएचडी प्रवेश एवं PSU भर्ती',
    institution: 'Indian Institute of Technology Madras (IIT Madras) & IISc / All IITs',
    level: 'Entrance Exam',
    applicationStart: '02/09/2026',
    applicationLastDate: '05/10/2026 (With Late Fee: 12/10/2026)',
    eligibility:
      'किसी भी मान्यता प्राप्त संस्थान/विश्वविद्यालय से Engineering / Technology / Architecture / Science / Commerce / Arts / Humanities में स्नातक डिग्री के तृतीय वर्ष (3rd Year) या उच्चतर वर्ष में अध्ययनरत अथवा डिग्री उत्तीर्ण अभ्यर्थी पात्र हैं।',
    applyUrl: 'https://goaps.iitm.ac.in/',
    officialNotificationUrl: 'https://gate2027.iitm.ac.in/',
    totalSeats: 'देश के सभी IITs, IISc, NITs, IIITs में M.Tech / M.E. / Ph.D प्रवेश एवं महारत्न/नवरत्न PSUs (ONGC, NTPC, BHEL, IOCL, PGCIL, GAIL) में सीधी भर्ती',
    examDate: '06, 07, 13, 14, 20 एवं 21 फरवरी 2027 (CBT Mode)',
    ageLimit: 'GATE 2027 परीक्षा में सम्मिलित होने के लिए कोई न्यूनतम या अधिकतम आयु सीमा नहीं है (No Age Limit)।',
    feeDetails: {
      generalOBC:
        'सामान्य / ओबीसी / EWS (पुरुष): ₹ 2,000/- प्रति पेपर (सामान्य अवधि 05/10/2026 तक) | ₹ 2,500/- प्रति पेपर (विलंब शुल्क सहित 12/10/2026 तक)',
      scSt: 'महिला (सभी वर्ग) / SC / ST / PwD: ₹ 1,000/- प्रति पेपर (सामान्य अवधि 05/10/2026 तक) | ₹ 1,500/- प्रति पेपर (विलंब शुल्क सहित 12/10/2026 तक)',
      paymentMode: 'क्रेडिट कार्ड, डेबिट कार्ड, नेट बैंकिंग एवं UPI (दो पेपर चुनने पर शुल्क दोगुना होगा)',
    },
    description:
      'भारतीय प्रौद्योगिकी संस्थान मद्रास (IIT Madras) द्वारा ग्रेजुएट एप्टीट्यूड टेस्ट इन इंजीनियरिंग (GATE 2027) के लिए GOAPS पोर्टल पर ऑनलाइन आवेदन प्रक्रिया संचालित की जा रही है। बिना विलंब शुल्क के आवेदन की अंतिम तिथि 05 अक्टूबर 2026 है तथा विलंब शुल्क (Late Fee) के साथ 12 अक्टूबर 2026 तक आवेदन किया जा सकता है। GATE स्कोर कार्ड परिणाम घोषित होने की तिथि से 3 वर्ष तक वैध रहता है और इसके माध्यम से M.Tech/Ph.D छात्रवृत्ति (₹ 12,400/- मासिक स्टाइपेंड) तथा शीर्ष सार्वजनिक उपक्रमों (PSUs) में एग्जीक्यूटिव ट्रेनी पदों पर भर्ती होती है।',
    courseWiseEligibility: [
      {
        courseName: 'B.E. / B.Tech / B.Pharm (4-Year Program after 10+2 or Lateral Entry)',
        seatsOrInfo: '30 GATE Test Papers (Up to 2 Paper Combinations Allowed)',
        eligibility: 'वर्तमान में तृतीय वर्ष (3rd Year) या अंतिम वर्ष में अध्ययनरत अथवा पूर्व में डिग्री उत्तीर्ण।',
      },
      {
        courseName: 'B.Arch (5-Year) / B.Sc (Research) / B.S. (4-Year) / M.B.B.S. / Pharm.D',
        seatsOrInfo: 'Architecture, Science & Life Sciences Papers',
        eligibility: 'तृतीय वर्ष या उच्चतर सेमेस्टर में अध्ययनरत अथवा स्नातक उत्तीर्ण।',
      },
      {
        courseName: 'B.Sc / B.A. / B.Com (3-Year Undergraduate Degree) or M.A. / M.Sc / MCA',
        seatsOrInfo: 'Science, Humanities (XH), Data Science & AI (DA) Papers',
        eligibility: '3-वर्षीय स्नातक के तृतीय वर्ष में अध्ययनरत अथवा उत्तीर्ण अभ्यर्थी सीधे पात्र हैं।',
      },
    ],
    examPattern: [
      'परीक्षा का माध्यम एवं अवधि: ऑनलाइन कंप्यूटर आधारित परीक्षा (CBT) — कुल 3 घंटे (180 मिनट), कुल 30 विषय पेपर (अभ्यर्थी अनुमत संयोजन में अधिकतम 2 पेपर दे सकते हैं)।',
      'कुल प्रश्न एवं पूर्णांक: कुल 65 प्रश्न = 100 अंक (General Aptitude के 10 प्रश्न = 15 अंक अनिवार्य + संबंधित विषय एवं इंजीनियरिंग गणित के 55 प्रश्न = 85 अंक)।',
      'प्रश्नों के प्रकार: (1) बहुविकल्पीय प्रश्न (MCQ - 1 या 2 अंक) | (2) बहु-चयन प्रश्न (MSQ - एक से अधिक सही विकल्प) | (3) संख्यात्मक उत्तर प्रकार (NAT - वर्चुअल कीपैड से उत्तर दर्ज करना)।',
      'नेगेटिव मार्किंग: केवल MCQ प्रश्नों में गलत उत्तर पर 1-अंक वाले प्रश्न में 1/3 अंक तथा 2-अंक वाले प्रश्न में 2/3 अंक काटे जाएंगे। MSQ एवं NAT प्रश्नों में कोई नेगेटिव मार्किंग नहीं है।',
    ],
    requiredDocuments: [
      'उच्च गुणवत्ता वाला रंगीन पासपोर्ट फोटोग्राफ (सफेद बैकग्राउंड, चेहरा 60-70% कवर हो, 5 KB – 1 MB JPG)',
      'अभ्यर्थी के स्पष्ट हस्ताक्षर की स्कैन इमेज (नीले या काले पेन से, 5 KB – 1 MB JPG)',
      'वैध फोटो पहचान पत्र (आधार कार्ड / पासपोर्ट / पैन कार्ड / वोटर आईडी / ड्राइविंग लाइसेंस) की स्पष्ट PDF',
      'भारतीय नागरिकों के लिए सत्यापित DigiLocker अकाउंट विवरण (पंजीकरण के दौरान आवश्यक)',
      'SC / ST प्रमाण पत्र अथवा PwD / Dyslexia प्रमाण पत्र (PDF फॉर्मेट, यदि शुल्क छूट लागू हो)',
    ],
    importantDates: [
      { event: 'GOAPS पोर्टल पर ऑनलाइन आवेदन प्रारंभ', date: '02/09/2026' },
      { event: 'बिना विलंब शुल्क के ऑनलाइन आवेदन की अंतिम तिथि (Regular Closing)', date: '05/10/2026' },
      { event: 'विलंब शुल्क (Late Fee) के साथ ऑनलाइन आवेदन की अंतिम तिथि', date: '12/10/2026' },
      { event: 'आवेदन पत्र संशोधन विंडो (Category, Paper, Exam City Correction)', date: '14/10/2026 से 21/10/2026' },
      { event: 'GATE 2027 एडमिट कार्ड डाउनलोड प्रारंभ', date: '05/01/2027' },
      { event: 'IIT GATE 2027 सीबीटी परीक्षा तिथियां', date: '06, 07, 13, 14, 20 एवं 21 फरवरी 2027' },
      { event: 'GATE 2027 परीक्षा परिणाम घोषणा', date: '19/03/2027' },
    ],
    stepsToApply: [
      'IIT GATE 2027 की आधिकारिक वेबसाइट gate2027.iitm.ac.in या सीधे GOAPS पोर्टल goaps.iitm.ac.in पर जाएं।',
      '"Register Here" पर क्लिक कर अभ्यर्थी का पूरा नाम, ईमेल और मोबाइल नंबर दर्ज करके Enrollment ID और पासवर्ड बनाएं।',
      'Enrollment ID से लॉगिन कर परीक्षा पेपर (1 या अनुमत 2 पेपर का कॉम्बिनेशन) और 3 परीक्षा शहर चुनें।',
      'व्यक्तिगत विवरण, पत्राचार पता और अपनी कॉलेज डिग्री का विवरण भरें।',
      'मानक के अनुसार पासपोर्ट फोटो, हस्ताक्षर और फोटो आईडी प्रूफ (एवं जाति/दिव्यांग प्रमाण पत्र) अपलोड करें।',
      'ऑनलाइन माध्यम से परीक्षा शुल्क का भुगतान करें और सबमिट किए गए फॉर्म का PDF डाउनलोड कर लें।',
    ],
    importantLinks: [
      { label: 'Apply Online (GOAPS Portal Registration & Login)', url: 'https://goaps.iitm.ac.in/', note: 'Regular Last Date: 05/10/2026 | Extended: 12/10/2026' },
      { label: 'Download GATE 2027 Information Brochure (PDF)', url: 'https://gate2027.iitm.ac.in/', note: 'Full Eligibility, Two-Paper Combinations & Cities' },
      { label: 'Download Subject-Wise GATE 2027 Syllabus (All 30 Papers)', url: 'https://gate2027.iitm.ac.in/', note: 'CS, DA, CE, ME, EE, EC, IN, XL, XH & Others' },
      { label: 'IIT GATE 2027 Official Website', url: 'https://gate2027.iitm.ac.in/', note: 'Organizing Institute: IIT Madras' },
    ],
    faqs: [
      {
        question: 'IIT GATE 2027 का फॉर्म भरने की अंतिम तिथि क्या है?',
        answer: 'बिना लेट फीस के सामान्य पंजीकरण की अंतिम तिथि 05 अक्टूबर 2026 है, जबकि ₹ 500/- अतिरिक्त विलंब शुल्क के साथ 12 अक्टूबर 2026 तक ऑनलाइन आवेदन किया जा सकता है।',
      },
      {
        question: 'क्या B.Tech तृतीय वर्ष (3rd Year) के छात्र GATE 2027 दे सकते हैं?',
        answer: 'हाँ, स्नातक डिग्री के तीसरे वर्ष (3rd Year) या उससे उच्च सेमेस्टर में अध्ययनरत सभी छात्र GATE 2027 परीक्षा में बैठने के लिए पूर्णतः पात्र हैं और उनका स्कोर 3 साल तक मान्य रहेगा।',
      },
    ],
    publishedAt: '2026-09-02',
    updatedAt: '2026-10-02',
    isDemo: false,
  },

  // 6. CLAT Online Form 2026
  {
    id: 'adm-clat-2026',
    slug: 'clat-online-form-2026',
    advtNo: 'Consortium of NLUs — Common Law Admission Test (CLAT Online Form 2026)',
    courseOrExam: 'CLAT Online Form 2026 (Common Law Admission Test - UG & PG LL.B / LL.M)',
    courseOrExamHi: 'कॉमन लॉ एडमिशन टेस्ट (CLAT Online Form 2026) — 24 राष्ट्रीय विधि विश्वविद्यालय (NLUs) प्रवेश परीक्षा',
    institution: 'Consortium of National Law Universities (NLUs, Bengaluru)',
    level: 'Entrance Exam',
    applicationStart: '15/07/2026',
    applicationLastDate: '31/10/2026',
    eligibility:
      'CLAT UG (5-वर्षीय एकीकृत B.A. / B.B.A. / B.Com. / B.Sc. LL.B): 10+2 (इंटरमीडिएट) न्यूनतम 45% अंकों के साथ उत्तीर्ण या Appearing (SC / ST / PwD हेतु 40% अंक)। CLAT PG (1-वर्षीय LL.M): न्यूनतम 50% अंकों के साथ LL.B डिग्री उत्तीर्ण या अंतिम वर्ष में अध्ययनरत (SC / ST / PwD हेतु 45% अंक)।',
    applyUrl: 'https://consortiumofnlus.ac.in/',
    officialNotificationUrl: 'https://consortiumofnlus.ac.in/',
    totalSeats: 'देश के 24 राष्ट्रीय विधि विश्वविद्यालयों (NLUs) में 3,500+ UG Law एवं 1,500+ PG (LL.M) सीटें + 60+ संबद्ध संस्थान व PSU भर्ती',
    examDate: '06/12/2026 (रविवार, दोपहर 02:00 बजे से 04:00 बजे तक - Offline Pen & Paper Mode)',
    ageLimit: 'CLAT UG एवं CLAT PG प्रवेश परीक्षा में आवेदन के लिए कोई अधिकतम आयु सीमा निर्धारित नहीं है (No Upper Age Limit)।',
    feeDetails: {
      generalOBC: '₹ 4,000/- (सामान्य / ओबीसी / EWS / PwD / NRI अभ्यर्थी)',
      scSt: '₹ 3,500/- (अनुसूचित जाति / अनुसूचित जनजाति / BPL श्रेणी के अभ्यर्थी)',
      paymentMode: 'ऑनलाइन भुगतान (डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग, UPI)। पिछले वर्षों के प्रश्नपत्र हेतु ₹ 500/- वैकल्पिक शुल्क।',
    },
    description:
      'कंसोर्टियम ऑफ नेशनल लॉ यूनिवर्सिटीज (Consortium of NLUs) द्वारा देश के 24 प्रतिष्ठित राष्ट्रीय विधि विश्वविद्यालयों (NLSIU बेंगलुरु, NALSAR हैदराबाद, WBNUJS कोलकाता, NLU जोधपुर, GNLU गांधीनगर, NLIU भोपाल, RMLNLU लखनऊ आदि) में 5-वर्षीय एकीकृत विधि स्नातक (B.A./B.B.A. LL.B Hons.) एवं 1-वर्षीय स्नातकोत्तर (LL.M) पाठ्यक्रमों में प्रवेश हेतु CLAT Online Form 2026 आमंत्रित किए गए हैं। ऑनलाइन आवेदन की अंतिम तिथि 31 अक्टूबर 2026 है।',
    courseWiseEligibility: [
      {
        courseName: 'CLAT UG (5-Year Integrated B.A. LL.B / B.B.A. LL.B / B.Com. LL.B / B.Sc. LL.B Hons.)',
        seatsOrInfo: '24 NLUs में 3,500+ सीटें',
        eligibility:
          '10+2 (कक्षा 12वीं) या समकक्ष परीक्षा न्यूनतम 45% अंकों (Gen/OBC/PwD/NRI) एवं 40% अंकों (SC/ST) के साथ उत्तीर्ण अथवा मार्च/अप्रैल 2027 की बोर्ड परीक्षा में सम्मिलित हो रहे छात्र।',
      },
      {
        courseName: 'CLAT PG (1-Year Master of Laws - LL.M & PSU Law Officer Recruitment)',
        seatsOrInfo: '24 NLUs में 1,500+ LL.M सीटें एवं ONGC, NTPC, PGCIL, IOCL में विधि अधिकारी भर्ती',
        eligibility:
          'BCI से मान्यता प्राप्त विश्वविद्यालय से 3-वर्षीय या 5-वर्षीय LL.B डिग्री न्यूनतम 50% अंकों (Gen/OBC/PwD) एवं 45% अंकों (SC/ST) के साथ उत्तीर्ण अथवा अंतिम वर्ष में अध्ययनरत।',
      },
    ],
    examPattern: [
      'परीक्षा का माध्यम एवं समय: ऑफलाइन ओएमआर (Pen & Paper) परीक्षा — कुल समय 2 घंटे (120 मिनट), कुल 120 बहुविकल्पीय प्रश्न = 120 अंक।',
      'अंकन प्रणाली (Marking Scheme): प्रत्येक सही उत्तर के लिए +1 अंक तथा प्रत्येक गलत उत्तर के लिए -0.25 अंक (1/4 नेगेटिव मार्किंग)।',
      'CLAT UG विषयवार भार (120 प्रश्न): (1) English Language: 22-26 प्रश्न (~20%) | (2) Current Affairs including General Knowledge: 28-32 प्रश्न (~25%) | (3) Legal Reasoning: 28-32 प्रश्न (~25%) | (4) Logical Reasoning: 22-26 प्रश्न (~20%) | (5) Quantitative Techniques (Data Interpretation): 10-14 प्रश्न (~10%)।',
      'CLAT PG पैटर्न (120 प्रश्न): संवैधानिक विधि, न्यायशास्त्र, संविदा, अपकृत्य, आपराधिक विधि, अंतर्राष्ट्रीय विधि, कंपनी विधि, पर्यावरण एवं श्रम विधि के पैसेज-आधारित 120 वस्तुनिष्ठ प्रश्न।',
    ],
    requiredDocuments: [
      'अभ्यर्थी का हालिया पासपोर्ट साइज फोटोग्राफ (प्लेन बैकग्राउंड, JPG फॉर्मेट)',
      'अभ्यर्थी के स्पष्ट स्कैन किए हुए हस्ताक्षर (Signature in JPG format)',
      'SC / ST / OBC / EWS प्रमाण पत्र (यदि आरक्षण लागू हो, PDF फॉर्मेट)',
      'दिव्यांगता (PwD) प्रमाण पत्र एवं BPL प्रमाण पत्र (यदि शुल्क छूट लागू हो)',
      'राज्य मूल निवास प्रमाण पत्र (Domicile Certificate - NLU State Quota आरक्षण हेतु)',
    ],
    importantDates: [
      { event: 'CLAT ऑनलाइन रजिस्ट्रेशन प्रारंभ', date: '15/07/2026' },
      { event: 'ऑनलाइन आवेदन एवं फीस भुगतान की अंतिम तिथि', date: '31/10/2026 (रात्रि 11:59 बजे तक)' },
      { event: 'NLU वरीयता क्रम (Preferences) अपडेट करने की अंतिम तिथि', date: '31/10/2026' },
      { event: 'CLAT एडमिट कार्ड डाउनलोड प्रारंभ', date: '18/11/2026' },
      { event: 'CLAT ऑफलाइन प्रवेश परीक्षा तिथि', date: '06/12/2026 (रविवार, 02:00 PM – 04:00 PM)' },
      { event: 'प्रोविजनल आंसर की एवं परिणाम घोषणा', date: 'दिसंबर 2026 का द्वितीय सप्ताह' },
    ],
    stepsToApply: [
      'कंसोर्टियम ऑफ एनएलयू की आधिकारिक वेबसाइट consortiumofnlus.ac.in पर जाएं।',
      '"Register" बटन पर क्लिक करके अपना मोबाइल नंबर, ईमेल आईडी और नाम दर्ज कर OTP से अकाउंट बनाएं।',
      'लॉगिन करने के बाद "UG (5-Year LL.B)" अथवा "PG (1-Year LL.M)" प्रोग्राम का चयन करें।',
      'व्यक्तिगत विवरण, शैक्षणिक अंक, आरक्षण श्रेणी, 3 परीक्षा केंद्र प्राथमिकताएं और 24 NLUs का वरीयता क्रम (Preference Order) भरें।',
      'फोटो, हस्ताक्षर और संबंधित श्रेणी/डोमिसाइल प्रमाण पत्र अपलोड करें।',
      'ऑनलाइन मोड से आवेदन शुल्क (₹ 4,000/- या ₹ 3,500/-) का भुगतान कर कन्फर्मेशन पेज डाउनलोड करें।',
    ],
    importantLinks: [
      { label: 'Apply Online (CLAT Registration & Login)', url: 'https://consortiumofnlus.ac.in/', note: 'Last Date: 31/10/2026' },
      { label: 'Download CLAT Official Notification & Brochure', url: 'https://consortiumofnlus.ac.in/', note: 'UG & PG Eligibility, Seats & NLU Cutoffs' },
      { label: 'Check Participating 24 NLUs Seat Matrix & Syllabus', url: 'https://consortiumofnlus.ac.in/', note: 'Consortium Official Portal' },
    ],
    faqs: [
      {
        question: 'CLAT ऑनलाइन फॉर्म भरने की अंतिम तिथि क्या है?',
        answer: 'अभ्यर्थी 31 अक्टूबर 2026 (रात्रि 11:59 बजे) तक आधिकारिक पोर्टल consortiumofnlus.ac.in पर ऑनलाइन आवेदन और शुल्क भुगतान कर सकते हैं।',
      },
      {
        question: 'क्या इस वर्ष कक्षा 12वीं की परीक्षा दे रहे छात्र CLAT UG के लिए आवेदन कर सकते हैं?',
        answer: 'हाँ, जो छात्र मार्च/अप्रैल 2027 में 12वीं बोर्ड परीक्षा में शामिल हो रहे हैं, वे भी CLAT UG के लिए पूरी तरह पात्र हैं (काउंसलिंग के समय उत्तीर्ण अंकतालिका प्रस्तुत करनी होगी)।',
      },
    ],
    publishedAt: '2026-07-15',
    updatedAt: '2026-10-02',
    isDemo: false,
  },

  // 7. IIT JAM 2027 Online Form
  {
    id: 'adm-iit-jam-2027',
    slug: 'iit-jam-2027-msc-phd-admission-entrance-exam',
    advtNo: 'JAM 2027 (Organizing Institute: IIT Kharagpur)',
    courseOrExam: 'IIT JAM 2027 Online Form (Joint Admission Test for Masters)',
    courseOrExamHi: 'आईआईटी जैम (IIT JAM 2027) ऑनलाइन फॉर्म — 21 IITs एवं IISc में M.Sc / Joint Ph.D प्रवेश परीक्षा',
    institution: 'Indian Institute of Technology Kharagpur (IIT Kharagpur) & All IITs / IISc',
    level: 'Entrance Exam',
    applicationStart: '12/09/2026',
    applicationLastDate: '19/10/2026 (Date Extended)',
    eligibility:
      'किसी भी मान्यता प्राप्त विश्वविद्यालय से स्नातक डिग्री (B.Sc / B.A. / B.Com / B.E. / B.Tech आदि) उत्तीर्ण अथवा स्नातक अंतिम वर्ष (Final Year Appearing in 2027) में अध्ययनरत अभ्यर्थी पात्र हैं।',
    applyUrl: 'https://joaps.iitkgp.ac.in/',
    officialNotificationUrl: 'https://jam2027.iitkgp.ac.in/',
    totalSeats: 'देश के 21 IITs में लगभग 3,000+ सीटें एवं IISc बैंगलोर, NITs (CCMN), IIEST शिबपुर, IISERs में 2,000+ M.Sc / Integrated Ph.D सीटें',
    examDate: '14/02/2027 (रविवार — दो पालियों में ऑनलाइन CBT परीक्षा)',
    ageLimit: 'IIT JAM 2027 प्रवेश परीक्षा में आवेदन के लिए कोई आयु सीमा निर्धारित नहीं है (No Age Restriction)।',
    feeDetails: {
      generalOBC: 'सामान्य / ओबीसी-NCL / EWS (पुरुष): एक टेस्ट पेपर ₹ 1,800/- | दो टेस्ट पेपर ₹ 2,500/-',
      scSt: 'महिला (सभी वर्ग) / SC / ST / PwD: एक टेस्ट पेपर ₹ 900/- | दो टेस्ट पेपर ₹ 1,250/-',
      paymentMode: 'JOAPS पोर्टल पर डेबिट कार्ड, क्रेडिट कार्ड, नेट बैंकिंग या UPI द्वारा ऑनलाइन भुगतान',
    },
    description:
      'भारतीय प्रौद्योगिकी संस्थान खड़गपुर (IIT Kharagpur) द्वारा आयोजित संयुक्त स्नातकोत्तर प्रवेश परीक्षा (Joint Admission Test for Masters - IIT JAM 2027) के लिए ऑनलाइन आवेदन की अंतिम तिथि बढ़ाकर 19 अक्टूबर 2026 कर दी गई है। इस राष्ट्रीय प्रवेश परीक्षा के माध्यम से देश के 21 IITs में M.Sc., M.Sc. (Tech.), M.S. (Research), M.Sc.-M.Tech. Dual Degree एवं Joint M.Sc.-Ph.D. कार्यक्रमों के साथ-साथ IISc बैंगलोर, IISERs और सभी NITs (CCMN काउंसलिंग द्वारा) में सीधा प्रवेश मिलता है।',
    courseWiseEligibility: [
      {
        courseName: 'Forenoon Session (प्रथम पाली: प्रातः 9:30 से 12:30 बजे तक)',
        seatsOrInfo: '3 Test Papers: Chemistry (CY), Geology (GG), Mathematics (MA)',
        eligibility: 'स्नातक उत्तीर्ण या 2027 में अंतिम वर्ष की परीक्षा देने वाले छात्र (अभ्यर्थी इस पाली से 1 पेपर चुन सकते हैं)।',
      },
      {
        courseName: 'Afternoon Session (द्वितीय पाली: दोपहर 2:30 से 5:30 बजे तक)',
        seatsOrInfo: '4 Test Papers: Biotechnology (BT), Economics (EN), Mathematical Statistics (MS), Physics (PH)',
        eligibility: 'स्नातक उत्तीर्ण या अंतिम वर्ष में अध्ययनरत (अभ्यर्थी दोनों पालियों से मिलाकर अधिकतम 2 टेस्ट पेपर दे सकते हैं)।',
      },
    ],
    examPattern: [
      'परीक्षा का माध्यम एवं समय: कंप्यूटर आधारित टेस्ट (Online CBT) — कुल 7 टेस्ट पेपर्स (BT, CY, EN, GG, MA, MS, PH), अवधि 3 घंटे (180 मिनट)।',
      'कुल प्रश्न एवं पूर्णांक: कुल 60 प्रश्न = 100 अंक, जो तीन खंडों (Section A, B, C) में विभाजित होते हैं।',
      'खंड-A (30 MCQ प्रश्न = 50 अंक): 10 प्रश्न 1 अंक के और 20 प्रश्न 2 अंक के। गलत उत्तर पर 1-अंक में 1/3 और 2-अंक में 2/3 अंक की नेगेटिव मार्किंग।',
      'खंड-B (10 MSQ प्रश्न = 20 अंक): प्रत्येक प्रश्न 2 अंक का (एक या अधिक विकल्प सही)। कोई नेगेटिव मार्किंग नहीं।',
      'खंड-C (20 NAT प्रश्न = 30 अंक): 10 प्रश्न 1 अंक के और 10 प्रश्न 2 अंक के (संख्यात्मक मान कीपैड से भरना होगा)। कोई नेगेटिव मार्किंग नहीं।',
    ],
    requiredDocuments: [
      'हालिया रंगीन पासपोर्ट साइज फोटोग्राफ (सफेद या हल्के रंग का बैकग्राउंड, 50 KB – 200 KB JPG)',
      'अभ्यर्थी के हस्ताक्षर की स्कैन कॉपी (काले या गहरे नीले पेन से, 50 KB – 150 KB JPG)',
      'कक्षा 10वीं (High School) की अंकतालिका / प्रमाण पत्र (PDF फॉर्मेट, 100 KB – 300 KB)',
      'श्रेणी प्रमाण पत्र (OBC-NCL / EWS / SC / ST) एवं दिव्यांगता (PwD) प्रमाण पत्र (यदि लागू हो)',
      'वैध फोटो पहचान पत्र (आधार कार्ड / वोटर आईडी / पैन कार्ड / पासपोर्ट)',
    ],
    importantDates: [
      { event: 'JOAPS पोर्टल पर ऑनलाइन रजिस्ट्रेशन प्रारंभ', date: '12/09/2026' },
      { event: 'ऑनलाइन आवेदन एवं फीस भुगतान की विस्तारित अंतिम तिथि', date: '19/10/2026' },
      { event: 'आवेदन पत्र में सुधार (Exam City / Test Paper / Category Change)', date: '10/11/2026 से 20/11/2026' },
      { event: 'IIT JAM 2027 एडमिट कार्ड जारी होने की तिथि', date: '06/01/2027' },
      { event: 'IIT JAM 2027 ऑनलाइन सीबीटी परीक्षा तिथि', date: '14/02/2027 (रविवार)' },
      { event: 'IIT JAM 2027 परीक्षा परिणाम घोषणा', date: '18/03/2027' },
      { event: 'स्कोरकार्ड डाउनलोड एवं एडमिशन काउंसलिंग पोर्टल प्रारंभ', date: 'अप्रैल 2027' },
    ],
    stepsToApply: [
      'IIT JAM 2027 के आधिकारिक पोर्टल jam2027.iitkgp.ac.in अथवा JOAPS पोर्टल joaps.iitkgp.ac.in पर जाएं।',
      '"New User? Register Here" पर क्लिक कर नाम, ईमेल और मोबाइल नंबर दर्ज करें तथा OTP सत्यापित कर Enrollment ID प्राप्त करें।',
      'Enrollment ID और पासवर्ड से लॉगिन कर परीक्षा विषय (1 या 2 टेस्ट पेपर) एवं 3 परीक्षा केंद्र शहरों का चयन करें।',
      'अपनी जन्मतिथि, माता-पिता का नाम, राष्ट्रीयता, श्रेणी और स्नातक डिग्री (B.Sc/B.A./B.Tech आदि) का विवरण भरें।',
      'पासपोर्ट फोटो, हस्ताक्षर, 10वीं का प्रमाण पत्र और जाति प्रमाण पत्र (यदि लागू हो) अपलोड करें।',
      'ऑनलाइन माध्यम से परीक्षा शुल्क का भुगतान करें और भरे हुए फॉर्म का प्रिंट सुरक्षित रख लें।',
    ],
    importantLinks: [
      { label: 'Apply Online (JOAPS Portal Registration & Login)', url: 'https://joaps.iitkgp.ac.in/', note: 'Extended Last Date: 19/10/2026' },
      { label: 'Download IIT JAM 2027 Information Brochure (PDF)', url: 'https://jam2027.iitkgp.ac.in/', note: 'Seat Matrix Across 21 IITs & Minimum Educational Qualifications' },
      { label: 'Download Syllabus for All 7 Test Papers (BT, CY, EN, GG, MA, MS, PH)', url: 'https://jam2027.iitkgp.ac.in/', note: 'Official Syllabus & Previous Question Papers' },
      { label: 'IIT JAM 2027 Official Website', url: 'https://jam2027.iitkgp.ac.in/', note: 'Organizing Institute: IIT Kharagpur' },
    ],
    faqs: [
      {
        question: 'IIT JAM 2027 ऑनलाइन आवेदन की बढ़ी हुई अंतिम तिथि क्या है?',
        answer: 'आईआईटी खड़गपुर द्वारा IIT JAM 2027 के लिए ऑनलाइन आवेदन और शुल्क भुगतान की अंतिम तिथि बढ़ाकर 19 अक्टूबर 2026 कर दी गई है।',
      },
      {
        question: 'क्या एक अभ्यर्थी IIT JAM 2027 में दो विषयों (Two Papers) की परीक्षा दे सकता है?',
        answer: 'हाँ, अभ्यर्थी प्रथम पाली (CY, GG, MA में से एक) और द्वितीय पाली (BT, EN, MS, PH में से एक) का चयन करके कुल 2 टेस्ट पेपर दे सकते हैं।',
      },
    ],
    publishedAt: '2026-09-12',
    updatedAt: '2026-10-02',
    isDemo: false,
  },
];
