import { Syllabus } from '../types';

export const ALL_OFFICIAL_SYLLABUSES: Syllabus[] = [
  // 0. MPESB Group 3 Sub Engineer & Other Post Combined Recruitment Test 2026 Syllabus
  {
    id: 'syl-mpesb-group-3-sub-engineer-2026',
    slug: 'mpesb-group-3-sub-engineer-syllabus',
    examName: 'MPESB Group 3 Sub Engineer, Draftsman & Other Post Syllabus & Exam Pattern 2026 (200 Marks)',
    examNameHi: 'एमपीईएसबी ग्रुप-3 सब इंजीनियर (उपयंत्री), मानचित्रकार एवं समकक्ष पद भर्ती परीक्षा 2026 विस्तृत पाठ्यक्रम एवं अंक विभाजन (200 अंक)',
    organization: 'Madhya Pradesh Employees Selection Board (MPESB), Bhopal',
    overview: 'Official syllabus and examination scheme for MPESB Group-3 Sub Engineer (Civil, Electrical, Mechanical, Electronics), Draftsman, Samaypal, and equivalent technical posts Combined Recruitment Test 2026 (1,700 Vacancies). Single-paper online CBT of 200 Marks (Part-A: 100 Marks General Non-Technical subjects across 7 sections + Part-B: 100 Marks Core Engineering/Technical discipline) with 3 Hours duration and No Negative Marking.',
    examPattern: [
      {
        stage: 'Part-A: Non-Technical Common Section (सभी अभ्यर्थियों हेतु अनिवार्य)',
        mode: 'Online Computer Based Test (MCQ)',
        totalMarks: '100 Marks (GK, Hindi, English, Mathematics, Reasoning, General Science & Computer Knowledge)',
        totalTime: 'Combined 3 Hours (180 Minutes) for Part-A + Part-B',
        negativeMarking: 'No Negative Marking (कोई नकारात्मक अंकन नहीं)',
      },
      {
        stage: 'Part-B: Concerned Engineering / Technical Subject (संबंधित तकनीकी विषय)',
        mode: 'Online Computer Based Test (MCQ - Diploma / Degree Standard)',
        totalMarks: '100 Marks (100 Questions from Civil / Electrical / Mechanical / Draftsman / Opted Trade)',
        totalTime: 'Included in 3 Hours total exam duration',
        negativeMarking: 'No Negative Marking (प्रत्येक सही उत्तर हेतु 1 अंक)',
      },
    ],
    subjects: [
      {
        subjectName: 'Part-A (1): General Knowledge & MP GK / सामान्य ज्ञान एवं म.प्र. विशेष (~16 Marks)',
        topics: [
          'Madhya Pradesh General Knowledge: History, Geography, Rivers, Irrigation projects, National Parks, Minerals, Economy, Panchayati Raj, Welfare Schemes & Cultural Heritage of MP.',
          'Indian Polity, Constitution, Economy, Geography of India, Indian National Movement and Current Affairs (National & International).',
        ],
      },
      {
        subjectName: 'Part-A (2 & 3): General Hindi & General English / सामान्य हिंदी एवं अंग्रेजी (~28 Marks)',
        topics: [
          'सामान्य हिंदी (14 अंक): वर्णमाला, संधि, समास, उपसर्ग-प्रत्यय, तत्सम-तद्भव, पर्यायवाची, विलोम शब्द, मुहावरे-लोकोक्तियां, वाक्य शुद्धि, रस, छंद, अलंकार एवं अनेक शब्दों के लिए एक शब्द।',
          'General English (14 Marks): Articles, Prepositions, Tenses, Active & Passive Voice, Direct-Indirect Narration, Synonyms, Antonyms, One-word Substitution, Idioms & Phrases, Error Spotting & Reading Comprehension.',
        ],
      },
      {
        subjectName: 'Part-A (4 & 5): General Mathematics & Reasoning / सामान्य गणित एवं तार्किक योग्यता (~28 Marks)',
        topics: [
          'General Mathematics (14 Marks): Number System, Simplification, LCM-HCF, Ratio & Proportion, Percentage, Profit & Loss, Simple & Compound Interest, Time & Work, Time Speed & Distance, Mensuration (2D/3D), Algebra, Geometry & Data Interpretation.',
          'General Reasoning (14 Marks): Coding-Decoding, Number & Alphabet Series, Analogy, Blood Relations, Direction Sense, Syllogism, Seating Arrangement, Venn Diagrams, Mirror/Water Images & Non-Verbal Reasoning.',
        ],
      },
      {
        subjectName: 'Part-A (6 & 7): General Science & Computer Knowledge / सामान्य विज्ञान एवं कंप्यूटर ज्ञान (~28 Marks)',
        topics: [
          'General Science (14 Marks): Physics (Units, Motion, Work, Energy, Light, Electricity, Magnetism), Chemistry (Matter, Atomic Structure, Acids-Bases-Salts, Metals-Nonmetals, Everyday Chemistry), Biology (Cell, Human Systems, Nutrition, Diseases, Environment).',
          'Basic Computer Knowledge (14 Marks): Generation of Computers, Input/Output Devices, Memory, Operating Systems (Windows), MS Office (MS Word, Excel, PowerPoint shortcuts), Internet, Networking, Emails & Cyber Security.',
        ],
      },
      {
        subjectName: 'Part-B: Civil Engineering (सिविल इंजीनियरिंग - 100 Marks)',
        topics: [
          'Building Materials & Construction: Stones, Bricks, Cement, Lime, Timber, Concrete Technology, Foundation, Masonry, Doors, Windows, Stairs, Roofs.',
          'Surveying & Estimating/Costing: Chain, Compass, Plane Table, Leveling, Theodolite, Tachometry, Contouring, Valuation, Specification, Rate Analysis.',
          'Strength of Materials & Structural Design: Simple Stresses & Strains, Bending Moment & Shear Force, Torsion, Columns, RCC Design (IS 456: Limit State & Working Stress), Steel Structures (IS 800).',
          'Fluid Mechanics, Irrigation & Environmental Engineering: Fluid properties, Bernoulli theorem, Open channel flow, Pumps, Turbines, Hydrology, Canal design, Dams, Water supply, Quality of water, Sewage treatment & Solid waste management.',
          'Soil Mechanics & Transportation Engineering: Origin of soil, Permeability, Compaction, Consolidation, Shear strength, Bearing capacity, Highway alignment, Pavements, Railway track components & Traffic engineering.',
        ],
      },
      {
        subjectName: 'Part-B: Electrical & Mechanical Engineering (विद्युत एवं यांत्रिकी - 100 Marks)',
        topics: [
          'Electrical Engineering: Basic Electrical Concepts, AC Fundamentals, Magnetic Circuits, Network Theorems, Electrical Machines (DC Machines, Transformers, 3-Phase Induction & Synchronous Motors), Generation, Transmission & Distribution, Switchgear & Protection, Utilization of Electrical Energy, Estimation & Costing, Basic Electronics.',
          'Mechanical Engineering: Engineering Mechanics, Strength of Materials, Theory of Machines, Thermodynamics, IC Engines, Boilers, Steam Turbines, Fluid Mechanics & Hydraulic Machinery, Production Technology (Casting, Welding, Machining), Material Science, Industrial Engineering & Refrigeration/AC.',
        ],
      },
    ],
    preparationTips: [
      'Balance both Part-A (100 Marks Non-Tech) and Part-B (100 Marks Technical)—scoring 75+ in Non-Tech gives a decisive edge in department allocation.',
      'Practice previous years MPESB Vyapam Sub Engineer shift-wise papers to understand numerical vs conceptual question weightage in Part-B.',
      'Focus on IS Codes (IS 456, IS 800, IS 1200) and Building Materials, Surveying, Estimation & Irrigation for Civil Engineering.',
      'Attempt all 200 questions as there is no negative marking.',
    ],
    selectionProcess: [
      'Stage 1: Online Computer Based Test (CBT - 200 Marks: 100 Non-Tech + 100 Technical)',
      'Stage 2: Normalization of marks across shifts and preparation of Category / Quota-wise (Direct, Backlog, 50% Samvida) Merit List',
      'Stage 3: Departmental Document Verification (DV) & Final Appointment Order',
    ],
    pdfDownloadUrl: 'https://esb.mp.gov.in',
    publishedAt: '2026-10-02',
    updatedAt: '2026-10-02',
  },

  // 0. Railway RRB NTPC Graduate Level CEN 06/2026 Syllabus
  {
    id: 'syl-rrb-ntpc-graduate-level-2026',
    slug: 'rrb-ntpc-graduate-level-syllabus',
    examName: 'RRB NTPC Graduate Level Syllabus & Exam Pattern 2026 (CEN 06/2026)',
    examNameHi: 'रेलवे आरआरबी एनटीपीसी स्नातक स्तर (Graduate Level) भर्ती परीक्षा 2026 विस्तृत पाठ्यक्रम एवं अंक विभाजन (CEN 06/2026)',
    organization: 'Railway Recruitment Boards (RRB) / Ministry of Railways',
    overview: 'Official syllabus and examination scheme for Railway RRB NTPC Graduate Level Recruitment (CEN 06/2026) for 3,477 Posts including Goods Train Manager, Chief Commercial Cum Ticket Supervisor (CCCTS), Senior Clerk Cum Typist, Junior Accounts Assistant Cum Typist, and Station Master. Covers 1st Stage CBT (100 Marks), 2nd Stage CBT (120 Marks), CBAT (Aptitude Test for Station Master), and Typing Skill Test (CBST).',
    examPattern: [
      {
        stage: '1st Stage Computer Based Test (CBT-1) - Screening Exam for all Graduate Posts',
        mode: 'Online Multiple Choice Questions (MCQ)',
        totalMarks: '100 Marks (General Awareness: 40, Mathematics: 30, General Intelligence & Reasoning: 30)',
        totalTime: '90 Minutes (120 Minutes for eligible PwBD candidates with scribe)',
        negativeMarking: '1/3rd Negative Marking for each incorrect answer (प्रत्येक गलत उत्तर पर 1/3 अंक कटेगा)',
      },
      {
        stage: '2nd Stage Computer Based Test (CBT-2) - Separate for Level 5 & Level 6',
        mode: 'Online Multiple Choice Questions (MCQ)',
        totalMarks: '120 Marks (General Awareness: 50, Mathematics: 35, General Intelligence & Reasoning: 35)',
        totalTime: '90 Minutes (120 Minutes for eligible PwBD candidates)',
        negativeMarking: '1/3rd Negative Marking (प्रत्येक गलत उत्तर पर 1/3 अंक काटा जाएगा)',
      },
      {
        stage: 'Computer Based Aptitude Test (CBAT) - Station Master Post Only',
        mode: 'Online Cognitive Assessment across 5 Test Batteries (T-score 42 in each battery)',
        totalMarks: 'Weighted 30% towards Final Merit (CBT-2 carries 70% weightage)',
        totalTime: 'Approx. 84 Minutes across batteries',
        negativeMarking: 'No Negative Marking in CBAT',
      },
      {
        stage: 'Computer Based Typing Skill Test (CBST) - Senior Clerk & JAA Posts Only',
        mode: 'Typing on Personal Computer (Minimum 30 wpm in English OR 25 wpm in Hindi)',
        totalMarks: 'Qualifying in nature (अर्हक प्रकृति - केवल योग्यता परीक्षण)',
        totalTime: '10 Minutes continuous typing',
        negativeMarking: 'Strict standard evaluation for mistakes without backspace/editing tools',
      },
      {
        stage: 'Document Verification (DV) & Comprehensive Railway Medical Examination',
        mode: 'A-2 Medical Fitness (Strict visual standards 6/9 without glasses for Station Master / Goods Train Manager)',
        totalMarks: 'Mandatory standard compliance as per IRMM',
        totalTime: 'At designated Divisional Railway Hospitals',
        negativeMarking: 'N/A',
      },
    ],
    subjects: [
      {
        subjectName: 'Mathematics / गणित (CBT-1: 30 Marks | CBT-2: 35 Marks)',
        topics: [
          'Number System, Decimals, Fractions, LCM and HCF.',
          'Ratio and Proportions, Percentage, Mensuration (Area, Volume, Surface Area).',
          'Time and Work, Pipes and Cisterns, Speed, Time and Distance, Train problems.',
          'Simple and Compound Interest, Profit and Loss, Discount.',
          'Elementary Algebra, Polynomials, Quadratic Equations, Indices and Surds.',
          'Geometry and Trigonometry: Properties of Triangles, Circles, Polygons, Trigonometric Ratios and Heights.',
          'Elementary Statistics: Mean, Median, Mode, Standard Deviation, Variance, Data Interpretation.',
        ],
      },
      {
        subjectName: 'General Intelligence and Reasoning / सामान्य बुद्धिमत्ता एवं तर्कशक्ति (CBT-1: 30 Marks | CBT-2: 35 Marks)',
        topics: [
          'Analogies, Alphabetical and Number Series, Coding and Decoding.',
          'Mathematical Operations, Similarities and Differences, Blood Relations.',
          'Analytical Reasoning, Syllogisms, Jumbling, Venn Diagrams.',
          'Puzzles, Matrix, Data Sufficiency, Statement-Conclusion, Statement-Courses of Action.',
          'Decision Making, Visual Reasoning, Direction Sense, Critical Reasoning and Cause-Effect.',
        ],
      },
      {
        subjectName: 'General Awareness / सामान्य ज्ञान एवं समसामयिक विषय (CBT-1: 40 Marks | CBT-2: 50 Marks)',
        topics: [
          'Current Affairs (National & International Events, Summit, Sports, Awards, Schemes).',
          'General Science & Life Sciences (up to 10th CBSE level - Physics, Chemistry, Biology, Environmental Studies).',
          'History of India & Indian National Freedom Movement.',
          'Physical, Social & Economic Geography of India and the World.',
          'Indian Polity & Constitution, Governance, Public Policy, Rights Issues.',
          'Indian Economy, Economic Reforms, Banking, Budget and NITI Aayog initiatives.',
          'Space Technology, Nuclear Program of India, Defence Technology & DRDO developments.',
          'International Organizations (UN, WHO, WTO, IMF, World Bank, BRICS, G20).',
          'Basics of Computers, IT & Cyber Awareness, Transport Systems in India (Indian Railways Heritage & Modernisation).',
        ],
      },
    ],
    preparationTips: [
      'Focus deeply on General Awareness (50 marks in CBT-2) and Mathematics/Reasoning for scoring high percentiles.',
      'Station Master aspirants must practice psycho-aptitude test batteries (intelligence, spatial scanning, selective attention).',
      'For typist posts (Senior Clerk, JAA), start practicing typing speed in English (30 wpm) or Hindi (25 wpm) early.',
      'Solve previous years RRB NTPC Graduate Level CBT-1 & CBT-2 question papers and take regular timed mock tests.',
    ],
    selectionProcess: [
      'Stage 1: First Stage Computer Based Test (CBT-1) - Common Screening Test',
      'Stage 2: Second Stage Computer Based Test (CBT-2) - Level-wise merit test (15 times vacancy shortlist)',
      'Stage 3: CBAT (Aptitude Test) for Station Master (8 times shortlist) OR Typing Skill Test (CBST) for Typists',
      'Stage 4: Document Verification (DV) based on CBT-2 (+ CBAT for SM)',
      'Stage 5: Comprehensive Medical Fitness Examination in Railway Hospitals (A-2 / B-2 / C-1 standards)',
    ],
    pdfDownloadUrl: 'https://rrbcdg.gov.in',
    publishedAt: '2026-09-21',
    updatedAt: '2026-09-25',
  },

  // 0. Railway RRB NTPC Under Graduate (10+2) CEN 07/2026 Syllabus
  {
    id: 'syl-rrb-ntpc-undergraduate-10-plus-2-2026',
    slug: 'rrb-ntpc-undergraduate-10-plus-2-syllabus',
    examName: 'RRB NTPC Under Graduate (10+2 Level) Syllabus & Exam Pattern 2026 (CEN 07/2026)',
    examNameHi: 'रेलवे आरआरबी एनटीपीसी अंडर ग्रेजुएट (10+2 लेवल) भर्ती परीक्षा 2026 विस्तृत पाठ्यक्रम एवं अंक विभाजन (CEN 07/2026)',
    organization: 'Railway Recruitment Boards (RRB) / Ministry of Railways',
    overview: 'Official syllabus and examination scheme for Railway RRB NTPC Under Graduate (10+2 Level) Recruitment (CEN 07/2026) for 1,688 Posts including Junior Clerk Cum Typist, Accounts Clerk Cum Typist, Trains Clerk, and Commercial Cum Ticket Clerk. Covers 1st Stage CBT (100 Marks), 2nd Stage CBT (120 Marks), and Typing Skill Test (CBST).',
    examPattern: [
      {
        stage: '1st Stage Computer Based Test (CBT-1) - Screening Exam',
        mode: 'Online Multiple Choice Questions (MCQ)',
        totalMarks: '100 Marks (General Awareness: 40, Mathematics: 30, General Intelligence & Reasoning: 30)',
        totalTime: '90 Minutes (120 Minutes for eligible PwBD candidates with scribe)',
        negativeMarking: '1/3rd Negative Marking for each wrong answer (प्रत्येक गलत उत्तर पर 1/3 अंक कटेगा)',
      },
      {
        stage: '2nd Stage Computer Based Test (CBT-2) - Merit Determining',
        mode: 'Online Multiple Choice Questions (MCQ)',
        totalMarks: '120 Marks (General Awareness: 50, Mathematics: 35, General Intelligence & Reasoning: 35)',
        totalTime: '90 Minutes (120 Minutes for eligible PwBD candidates)',
        negativeMarking: '1/3rd Negative Marking (प्रत्येक गलत उत्तर पर 1/3 अंक काटा जाएगा)',
      },
      {
        stage: 'Computer Based Typing Skill Test (CBST) - Typist Posts Only',
        mode: 'Typing on Personal Computer without editing tools / spell-check',
        totalMarks: 'Qualifying in nature (अर्हक प्रकृति - No marks added to merit)',
        totalTime: '10 Minutes continuous typing',
        negativeMarking: 'Minimum Speed: 30 wpm in English OR 25 wpm in Hindi (Kruti Dev / Mangal font)',
      },
      {
        stage: 'Document Verification (DV) & Medical Examination',
        mode: 'Verification of Original Documents & Railway Medical Standards (A-2 / A-3 / B-2 / C-1)',
        totalMarks: 'Strict fitness criteria as per Indian Railway Medical Manual (IRMM)',
        totalTime: 'At designated Railway Hospitals',
        negativeMarking: 'N/A',
      },
    ],
    subjects: [
      {
        subjectName: 'Mathematics / गणित (CBT-1: 30 Marks | CBT-2: 35 Marks)',
        topics: [
          'Number System, Decimals, Fractions, LCM and HCF.',
          'Ratio and Proportions, Percentage, Mensuration (2D & 3D Area and Volume).',
          'Time and Work, Time and Distance, Pipes and Cisterns, Speed calculations.',
          'Simple and Compound Interest, Profit and Loss, Discount.',
          'Elementary Algebra, Polynomials, Linear Equations.',
          'Geometry and Trigonometry: Triangles, Circles, Heights and Distances.',
          'Elementary Statistics: Mean, Median, Mode, Standard Deviation, Histograms and Pie Charts.',
        ],
      },
      {
        subjectName: 'General Intelligence and Reasoning / सामान्य बुद्धिमत्ता एवं तर्कशक्ति (CBT-1: 30 Marks | CBT-2: 35 Marks)',
        topics: [
          'Analogies, Completion of Number and Alphabetical Series, Coding and Decoding.',
          'Mathematical Operations, Similarities and Differences, Relationships / Blood Relations.',
          'Analytical Reasoning, Syllogism, Jumbling, Venn Diagrams.',
          'Puzzle, Data Sufficiency, Statement-Conclusion, Statement-Courses of Action.',
          'Decision Making, Visual Reasoning, Direction and Distance Sense, Maps and Interpretation of Graphs.',
        ],
      },
      {
        subjectName: 'General Awareness / सामान्य ज्ञान एवं समसामयिक विषय (CBT-1: 40 Marks | CBT-2: 50 Marks)',
        topics: [
          'Current Events of National and International Importance (समसामयिक राष्ट्रीय एवं अंतर्राष्ट्रीय घटनाएं).',
          'Games and Sports, Art and Culture of India (भारतीय कला, साहित्य एवं संस्कृति).',
          'Indian Literature, Monuments and Places of India.',
          'General Science and Life Science (up to 10th CBSE standard - Physics, Chemistry, Biology).',
          'History of India and Freedom Struggle (भारतीय इतिहास एवं राष्ट्रीय स्वतंत्रता संग्राम).',
          'Physical, Social and Economic Geography of India and World.',
          'Indian Polity and Governance - Constitution and Political System (भारतीय संविधान एवं राजव्यवस्था).',
          'General Scientific and Technological Developments including Space and Nuclear Program of India.',
          'UN and other important World Organizations, Environmental Issues concerning India and World at large.',
          'Basics of Computers and Computer Applications, Common Abbreviations, Transport Systems in India, Indian Economy.',
          'Famous Personalities, Flagship Government Programs, Flora and Fauna of India, Important Government and Public Sector Organizations of India.',
        ],
      },
    ],
    preparationTips: [
      'Master NCERT Class 9th and 10th Science & Mathematics fundamentals thoroughly.',
      'Practice regular daily speed tests to solve 100 questions within the 90-minute deadline.',
      'Maintain strong accuracy to prevent 1/3 negative marking penalties.',
      'Candidates opting for typist posts (Junior Clerk, Accounts Clerk) should practice typing daily in English (30 wpm) or Hindi (25 wpm).',
    ],
    selectionProcess: [
      'Stage 1: First Stage Computer Based Test (CBT-1)',
      'Stage 2: Second Stage Computer Based Test (CBT-2) for shortlisted candidates (15 times vacancies)',
      'Stage 3: Computer Based Typing Skill Test (CBST) for typist posts (8 times vacancies called)',
      'Stage 4: Document Verification (DV) based on CBT-2 normalized marks',
      'Stage 5: Comprehensive Railway Medical Examination as per prescribed medical categories',
    ],
    pdfDownloadUrl: 'https://rrbcdg.gov.in',
    publishedAt: '2026-09-21',
    updatedAt: '2026-09-25',
  },

  // 0. MPESB MP Police Subedar (Stenographer) & ASI (Ministerial) 2026
  {
    id: 'syl-mpesb-subedar-steno-asi-ministerial-2026',
    slug: 'mpesb-subedar-steno-asi-ministerial-syllabus',
    examName: 'MPESB MP Police Subedar (Steno) & ASI (Ministerial) Syllabus & Exam Pattern 2026',
    examNameHi: 'एमपी पुलिस सूबेदार (शीघ्रलेखक) एवं सहायक उपनिरीक्षक (ASI अनुसचिवीय) भर्ती परीक्षा 2026 विस्तृत पाठ्यक्रम एवं अंक विभाजन',
    organization: 'Madhya Pradesh Employees Selection Board (MPESB), Bhopal & MP Police HQ',
    overview: 'Complete official syllabus and examination scheme for MP Police Subedar (Stenographer) and Assistant Sub-Inspector (Ministerial) Recruitment 2026 covering Phase-I Online Written Examination (100 Marks), Phase-II Shorthand/Typing Practical Skill Test (100 Marks for Steno), and Physical Standard Test (PST).',
    examPattern: [
      {
        stage: 'Phase-I: Computer Based Written Test (CBT)',
        mode: 'Online Multiple Choice Questions (MCQ)',
        totalMarks: '100 Marks (100 Questions, 1 Mark each)',
        totalTime: '2 Hours (120 Minutes)',
        negativeMarking: 'No Negative Marking (कोई नकारात्मक अंकन नहीं)',
      },
      {
        stage: 'Phase-II: Practical Skill Test (Shorthand / Typing)',
        mode: 'Stenography Dictation & Transcription / Typing Proficiency Test',
        totalMarks: '100 Marks for Subedar (Steno) [Min. 30 Qualifying Marks] | Qualifying for ASI Ministerial',
        totalTime: '5 mins dictation + 45 mins computer transcription',
        negativeMarking: 'Marks deducted for errors as per standard stenography evaluation rules',
      },
      {
        stage: 'Phase-III: Physical Standard Test (PST)',
        mode: 'Physical Measurements Verification',
        totalMarks: 'Qualifying in nature (अर्हक प्रकृति)',
        totalTime: 'Conducted at Police Lines / designated ground',
        negativeMarking: 'N/A',
      },
    ],
    subjects: [
      {
        subjectName: 'Computer Knowledge & Information Technology / कंप्यूटर ज्ञान एवं आईटी (30 Marks)',
        topics: [
          'Computer Fundamentals: Hardware, Software, CPU, Memory (RAM, ROM, Cache), Input/Output devices.',
          'Operating Systems: Windows OS, Linux basics, file management, directory structure, system utilities.',
          'MS Office Suite: MS Word (document creation, formatting, mail merge, tables), MS Excel (spreadsheets, formulas, functions, graphs), MS PowerPoint (slides, animations).',
          'Internet & Cyber Security: Web browsers, Search engines, E-mail protocols, Virus, Malware, Firewall, Cyber safety, IT Act basics.',
          'Typing concepts: Unicode fonts, Mangal font, Remington/Inscript keyboard layouts, common shortcuts, and file extensions.',
        ],
      },
      {
        subjectName: 'General Knowledge & Current Affairs / सामान्य ज्ञान एवं समसामयिक घटनाएं (25 Marks)',
        topics: [
          'Madhya Pradesh Special GK: History, geography, natural resources, rivers, national parks, tribal culture, folk arts, festivals, state government welfare schemes.',
          'Indian History & National Freedom Struggle.',
          'Indian Constitution & Polity: Fundamental Rights, Directive Principles, Parliament, Judiciary, Executive structure.',
          'Indian Geography & Economy: Agriculture, minerals, industries, banking, budget highlights.',
          'Current Affairs (National, International & MP State level), Sports, Awards & Honours, Important Days, Scientific achievements.',
        ],
      },
      {
        subjectName: 'Reasoning & Mental Ability / तार्किक ज्ञान एवं मानसिक अभिरुचि (25 Marks)',
        topics: [
          'Analogies, Alphabet Series, Number Series, Missing numbers, Coding and Decoding.',
          'Blood Relations, Direction & Distance Sense, Order and Ranking, Seating Arrangement.',
          'Venn Diagrams, Syllogisms, Statement and Conclusions, Statement and Arguments.',
          'Non-Verbal Reasoning: Series completion, Paper folding & cutting, Mirror and Water images, Embedded figures.',
          'Analytical & Decision-making aptitude for office management and administrative duties.',
        ],
      },
      {
        subjectName: 'Simple Arithmetic & General Science / सामान्य विज्ञान एवं प्रारंभिक अंकगणित (20 Marks)',
        topics: [
          'General Science: Basics of Physics, Chemistry, and Biology of Class 10th standard (Force, Energy, Light, Human physiology, Nutrition, Everyday chemistry).',
          'Number System, Fractions, Decimals, LCM and HCF, Ratio and Proportion.',
          'Percentages, Profit, Loss and Discount, Simple and Compound Interest.',
          'Time and Work, Pipes and Cisterns, Speed, Time and Distance, Averages.',
          'Basic Mensuration (2D & 3D Area and Perimeter), Elementary Algebra and Data Interpretation.',
        ],
      },
      {
        subjectName: 'Skill Test Details: Stenography (Subedar Steno - 100 Marks)',
        topics: [
          'Hindi Shorthand Dictation: 100 words per minute for 5 minutes (Total 500 words).',
          'Computer Transcription: Candidate will be given 45 minutes to transcribe the dictated shorthand matter on computer.',
          'Evaluation: Minimum 30 marks out of 100 required to qualify. Deductions made for omissions, spelling errors, and grammar errors.',
        ],
      },
    ],
    preparationTips: [
      'Give high priority to Computer Knowledge (30 Marks) — practice MS Word, Excel functions, keyboard shortcuts, and networking concepts regularly.',
      'For Subedar (Steno), practice 100 w.p.m. shorthand dictation daily with strict audio timer and transcribe on computer under 45 minutes.',
      'Cover MP GK and contemporary MP schemes thoroughly, as State GK carries a significant portion of the General Knowledge section.',
      'Since there is no negative marking in CBT, practice solving full-length mock tests to ensure 100% question attempt within 120 minutes.',
    ],
    selectionProcess: [
      'चरण 1: ऑनलाइन कंप्यूटर आधारित लिखित परीक्षा (CBT - 100 अंक)',
      'चरण 2: कौशल परीक्षा - सूबेदार स्टेनो हेतु 100 अंक श्रुतलेख/टाइपिंग एवं एएसआई हेतु सीपीसीटी दक्षता जांच',
      'चरण 3: शारीरिक मानक परीक्षण (PST - ऊंचाई: पुरुष 162 सेमी, महिला 152 सेमी; सीना: पुरुष 81-86 सेमी)',
      'चरण 4: दस्तावेज सत्यापन (DV) एवं चिकित्सीय स्वास्थ्य परीक्षण (Medical Exam)',
    ],
    pdfDownloadUrl: 'https://esb.mp.gov.in',
    publishedAt: '2026-09-17',
    updatedAt: '2026-09-17',
  },

  // 0. NVS Class 9th Lateral Entry Selection Test (JNVST) 2026-27
  {
    id: 'syl-nvs-class-9th-admission-2026',
    slug: 'nvs-class-9th-admission-selection-test-syllabus',
    examName: 'NVS Class 9th Lateral Entry Selection Test (JNVST) Syllabus & Exam Pattern 2026-27',
    examNameHi: 'नवोदय विद्यालय कक्षा 9वीं प्रवेश परीक्षा (JNVST Class IX) विस्तृत पाठ्यक्रम एवं अंक विभाजन 2026-27',
    organization: 'Navodaya Vidyalaya Samiti (NVS), Ministry of Education, Govt. of India',
    overview: 'Official syllabus and examination scheme for Jawahar Navodaya Vidyalaya Class IX Lateral Entry Admission Selection Test 2026-27 based on Class VIII CBSE curriculum consisting of 100 objective questions (100 marks) across Mathematics, Science, English, and Hindi.',
    examPattern: [
      {
        stage: 'JNVST Class IX Entrance Test (OMR Based)',
        mode: 'Offline Pen & Paper (OMR Sheet with Bilingual Question Paper)',
        totalMarks: '100 Marks (100 Questions, 1 Mark each)',
        totalTime: '2 Hours 30 Minutes (150 Minutes) [30 mins extra for Divyang students]',
        negativeMarking: 'No Negative Marking (कोई नकारात्मक अंकन नहीं)',
      },
    ],
    subjects: [
      {
        subjectName: 'Mathematics / गणित (35 Questions - 35 Marks)',
        topics: [
          'Rational Numbers, Squares and Square Roots, Cubes and Cube Roots, Exponents and Radicals.',
          'Linear Equations in One Variable, Algebraic Expressions and Identities, Factorization.',
          'Understanding Quadrilaterals, Practical Geometry, Data Handling (Bar graph, Pie chart, Probability).',
          'Mensuration (Area of Trapezium, Surface Area and Volume of Cube, Cuboid, Cylinder).',
          'Direct and Inverse Proportions, Comparing Quantities (Percentage, Profit-Loss, Discount, Compound Interest).',
        ],
      },
      {
        subjectName: 'General Science / सामान्य विज्ञान (35 Questions - 35 Marks)',
        topics: [
          'Crop Production and Management, Microorganisms: Friend and Foe.',
          'Synthetic Fibres and Plastics, Materials: Metals and Non-Metals.',
          'Coal and Petroleum, Combustion and Flame, Conservation of Plants and Animals.',
          'Cell - Structure and Functions, Reproduction in Animals, Reaching the Age of Adolescence.',
          'Force and Pressure, Friction, Sound, Chemical Effects of Electric Current.',
          'Some Natural Phenomena (Lightning, Earthquakes), Light, Stars and the Solar System, Pollution of Air and Water.',
        ],
      },
      {
        subjectName: 'English Language / अंग्रेजी (15 Questions - 15 Marks)',
        topics: [
          'Comprehension of Unseen Passage, Word and Sentence Formation.',
          'Structure of Sentence, Tense forms, Active and Passive Voice.',
          'Use of Prepositions, Conjunctions, Modal Auxiliaries.',
          'Direct and Indirect Speech (Narration), Punctuation.',
          'Vocabulary: Synonyms, Antonyms, One-word substitution, Spelling test.',
        ],
      },
      {
        subjectName: 'Hindi Language / हिन्दी (15 Questions - 15 Marks)',
        topics: [
          'वर्ण विचार, वर्तनी विवेक एवं शब्द भेद (स्रोत / उत्पत्ति)।',
          'पर्यायवाची शब्द, विलोम शब्द, अनेकार्थक शब्द एवं शब्द विवेक।',
          'पद भेद (संज्ञा, सर्वनाम, विशेषण, क्रिया) एवं पद परिचय।',
          'अशुद्ध वाक्यों का शुद्धीकरण, वाक्य संरचना एवं मुहावरे-लोकोक्तियां।',
          'अपठित गद्यांश पर आधारित प्रश्नोत्तर।',
        ],
      },
    ],
    preparationTips: [
      'Thoroughly study the Class 8th NCERT textbooks for Mathematics and Science as they carry 70% of the total marks.',
      'Practice solving previous years JNVST Class 9 question papers within the 2.5-hour time limit on OMR sheets.',
      'Strengthen foundational grammar in Hindi and English since qualifying cutoff in each subject is essential.',
      'Attempt all 100 questions as there is no negative marking for incorrect answers.',
    ],
    selectionProcess: [
      'Step 1: JNVST Class IX Lateral Entry Entrance Examination (100 Marks)',
      'Step 2: Subject-wise qualifying cutoff and district-level merit list preparation',
      'Step 3: Category and rural/urban quota verification as per NVS norms',
      'Step 4: Certificate verification (Class 8 pass certificate, Domicile, DOB, Caste) and Medical Fitness Test',
    ],
    pdfDownloadUrl: 'https://navodaya.gov.in',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
  },

  // 1. MPESB MP Police Constable GD & Radio 2026
  {
    id: 'syl-mpesb-mp-police-constable-2026',
    slug: 'mpesb-mp-police-constable-gd-syllabus',
    examName: 'MPESB MP Police Constable GD & Radio Operator Syllabus & Exam Pattern 2026',
    examNameHi: 'मध्य प्रदेश पुलिस आरक्षक (GD एवं रेडियो) भर्ती परीक्षा 2026 विस्तृत पाठ्यक्रम एवं अंक विभाजन',
    organization: 'Madhya Pradesh Employees Selection Board (MPESB), Bhopal',
    overview: 'Complete official syllabus for MP Police Constable GD Recruitment 2026 covering Online Computer Based Examination (100 Marks), Physical Efficiency Test (PET - 100 Marks: 800m Run, Long Jump, Shot Put) and Physical Standard Test (PST).',
    examPattern: [
      {
        stage: 'Phase-I: Computer Based Written Test (CBT)',
        mode: 'Online Multiple Choice Questions (MCQ)',
        totalMarks: '100 Marks (100 Questions, 1 Mark each)',
        totalTime: '2 Hours (120 Minutes)',
        negativeMarking: 'No Negative Marking (कोई नकारात्मक अंकन नहीं)',
      },
      {
        stage: 'Phase-II: Physical Efficiency Test (PET - 100 Marks)',
        mode: 'On-Ground Physical Endurance & Athletic Performance',
        totalMarks: '100 Marks (800m Run: 40 Marks | Long Jump: 30 Marks | Shot Put: 30 Marks)',
        totalTime: 'Conducted in sequential order on specified ground',
        negativeMarking: 'Marks awarded based on performance timings & distances',
      },
      {
        stage: 'Phase-III: Physical Standard Test (PST)',
        mode: 'Physical Measurements Verification',
        totalMarks: 'Qualifying in nature',
        totalTime: 'Height and Chest measurements',
        negativeMarking: 'N/A',
      },
    ],
    subjects: [
      {
        subjectName: 'General Knowledge & Reasoning / सामान्य ज्ञान एवं तार्किक ज्ञान (40 Marks)',
        topics: [
          'History, Geography, Culture, Heritage and Major Personalities of Madhya Pradesh.',
          'Indian History, National Movement, Indian Polity, Constitution and Governance.',
          'Current Affairs (National and MP State specific events, Sports, Awards, Schemes).',
          'Analogies, Alphabet Series, Number Series, Coding-Decoding, Blood Relations, Direction Sense.',
          'Syllogism, Venn Diagrams, Non-Verbal Reasoning, Pattern Completion, Paper Folding and Mirror Images.',
        ],
      },
      {
        subjectName: 'Intellectual Ability & Mental Aptitude / बौद्धिक क्षमता एवं मानसिक अभिरुचि (30 Marks)',
        topics: [
          'Public Interest, Rule of Law, Crime Control and Contemporary Police Issues.',
          'Decision Making, Problem Solving, Analytical Thinking, Critical Thinking.',
          'Emotional Intelligence, Tolerance towards Minorities and Underprivileged, Professional Ethics.',
          'Statement and Assumptions, Statement and Arguments, Data Sufficiency.',
        ],
      },
      {
        subjectName: 'Science & Simple Arithmetic / विज्ञान एवं सरल अंकगणित (30 Marks)',
        topics: [
          'General Science: Physics, Chemistry and Biology up to Class 10th standard (Force, Work, Energy, Human Body, Diseases, Nutrition, Chemical reactions, Everyday Science).',
          'Number System, Fractions, Decimals, LCM & HCF, Ratio and Proportion.',
          'Percentages, Profit and Loss, Discount, Simple and Compound Interest.',
          'Time and Work, Pipes and Cisterns, Speed, Time and Distance, Average.',
          'Mensuration (Area and Perimeter of 2D and 3D figures), Elementary Algebra and Statistics.',
        ],
      },
      {
        subjectName: 'Technical Paper (For Constable Radio Candidates Only - 100 Marks)',
        topics: [
          'Electronics basics, Semiconductor devices, Diodes, Transistors, Rectifiers and Power Supplies.',
          'Digital Electronics: Logic gates, Number systems, Flip-flops, Counters, Registers.',
          'Communication Systems: AM, FM, Modulation & Demodulation, Antennas, Microwave Basics.',
          'Computer Hardware & Networking: OSI Model, TCP/IP, IP addressing, LAN/WAN, Routing basics.',
          'Microprocessors, Microcontrollers and Basic C Programming.',
        ],
      },
    ],
    preparationTips: [
      'Focus equally on Written Exam and Physical Test since PET now carries 100 marks towards final selection merit.',
      'Practice 800m running regularly on a track to achieve minimum timings for maximum marks (target under 2 min 04 sec for full 40 marks).',
      'Revise MP State GK thoroughly including rivers, wildlife sanctuaries, tribal culture, and historical monuments.',
      'Solve previous years MPESB Constable question papers to master speed in mental ability and quantitative arithmetic.',
    ],
    selectionProcess: [
      'Phase 1: Online Written CBT Examination (100 Marks)',
      'Phase 2: Physical Efficiency Test - PET (100 Marks)',
      'Phase 3: Physical Standard Test - PST (Height & Chest)',
      'Phase 4: Document Verification (DV) & Medical Examination',
    ],
    pdfDownloadUrl: 'https://esb.mp.gov.in',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
  },

  // 2. UPESSC UP Assistant Professor 2026 (Advt 04/2026)
  {
    id: 'syl-upessc-assistant-professor-2026',
    slug: 'upessc-up-assistant-professor-syllabus',
    examName: 'UPESSC UP Assistant Professor Syllabus & Exam Pattern 2026 (Advt 04/2026)',
    examNameHi: 'उत्तर प्रदेश उच्च शिक्षा सहायक आचार्य परीक्षा 2026 विस्तृत पाठ्यक्रम एवं परीक्षा पैटर्न (विज्ञापन 04/2026)',
    organization: 'Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj',
    overview: 'Official syllabus and examination scheme for UP Assistant Professor recruitment in Non-Government Aided Colleges across Uttar Pradesh covering General Studies (60 Marks), Optional Subject (140 Marks) and Viva-Voce / Interview (30 Marks).',
    examPattern: [
      {
        stage: 'Phase-I: Written Examination (General Knowledge + Subject)',
        mode: 'Objective Multiple Choice Questions (OMR / CBT)',
        totalMarks: '200 Marks (Paper consists of 100 Questions, 2 Marks each)',
        totalTime: '2 Hours (120 Minutes)',
        negativeMarking: 'No Negative Marking (कोई नकारात्मक अंकन नहीं)',
      },
      {
        stage: 'Phase-II: Interview / Viva-Voce',
        mode: 'Oral Personality and Subject Presentation Test by Expert Board',
        totalMarks: '30 Marks (Subject Competence, Teaching Aptitude, Academic Depth)',
        totalTime: '20 - 30 Minutes',
        negativeMarking: 'N/A',
      },
    ],
    subjects: [
      {
        subjectName: 'Unit I & II: General Studies & Higher Education System / सामान्य ज्ञान एवं उच्च शिक्षा प्रणाली (30 Questions - 60 Marks)',
        topics: [
          'Teaching & Research Aptitude: Nature, objectives, methods of teaching, research concepts and ethics.',
          'Information & Communication Technology (ICT): Advantages, disadvantages, email, terminology, basics of internet.',
          'People and Environment: Interaction, pollutants, global warming, natural hazards, renewable energy resources.',
          'Indian History and Geography: Salient features of Indian culture, freedom struggle, rivers, minerals, agricultural geography.',
          'Indian Constitution and Economy: Fundamental Rights, Directive Principles, Judiciary, Census, Banking and Budget.',
          'Current National & International Affairs: Major sports, science and tech breakthroughs, distinguished awards.',
        ],
      },
      {
        subjectName: 'Optional Core Subject / वैकल्पिक विषय (70 Questions - 140 Marks)',
        topics: [
          'Post Graduate Level Curriculum based on UGC-NET / CSIR-NET syllabus in the chosen subject discipline (Hindi, English, History, Political Science, Economics, Geography, Sociology, Physics, Chemistry, Zoology, Botany, Mathematics, Commerce, Law, Education, etc.).',
          'Advanced conceptual frameworks, historical evolutions, contemporary paradigms, and research methodologies in the discipline.',
        ],
      },
    ],
    preparationTips: [
      'Master the 30 questions of General Studies (Unit I-VI) as they often prove decisive in achieving higher ranks.',
      'Align subject preparation with UGC-NET syllabus standards, solving past 10 years UGC-NET and previous UP Higher Education question papers.',
      'Prepare contemporary debates and your Ph.D. research thesis / dissertation summary for the interview board.',
    ],
    selectionProcess: [
      'Step 1: Written Examination (200 Marks: 30 Qs GK + 70 Qs Core Subject)',
      'Step 2: Interview / Viva-Voce (30 Marks)',
      'Step 3: Final Merit Ranking based on 230 Marks',
      'Step 4: Counseling and College Allotment',
    ],
    pdfDownloadUrl: 'https://upessc.up.gov.in',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
  },

  // 3. UPESSC UP Primary Teacher (Super TET) 2026 (Advt 05/2026)
  {
    id: 'syl-upessc-primary-teacher-2026',
    slug: 'upessc-up-primary-teacher-prt-syllabus',
    examName: 'UPESSC UP Primary Assistant Teacher (Super TET) Syllabus & Exam Pattern 2026',
    examNameHi: 'उत्तर प्रदेश प्राथमिक सहायक अध्यापक (सुपर टीईटी) 2026 विस्तृत पाठ्यक्रम एवं अंक विभाजन (विज्ञापन 05/2026)',
    organization: 'Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj',
    overview: 'Comprehensive official syllabus for Uttar Pradesh Primary Assistant Teacher (Class 1 to 5) Examination comprising 150 marks across Languages, Science, Mathematics, Environmental Studies, Teaching Skills, Child Psychology, and GK.',
    examPattern: [
      {
        stage: 'Phase-I: Assistant Teacher Written Examination (Super TET)',
        mode: 'Objective Multiple Choice Questions (OMR / CBT)',
        totalMarks: '150 Marks (150 Questions, 1 Mark each)',
        totalTime: '2 Hours 30 Minutes (150 Minutes)',
        negativeMarking: 'No Negative Marking (कोई नकारात्मक अंकन नहीं)',
      },
      {
        stage: 'Phase-II: Quality Point Marks Calculation (Academic Merit + Written Weightage)',
        mode: 'Consolidated Merit Computation',
        totalMarks: 'Consolidated out of 100 Quality Points (40% Academic + 60% Written Exam)',
        totalTime: 'Automated computerized merit formulation',
        negativeMarking: 'N/A',
      },
    ],
    subjects: [
      {
        subjectName: 'Languages / भाषा: हिन्दी, अंग्रेजी एवं संस्कृत (40 Marks)',
        topics: [
          'Hindi (20 Marks): व्याकरण एवं अपठित गद्यांश/पद्यांश, वर्णमाला, संधि, समास, विलोम, पर्यायवाची, मुहावरे, लोकोक्तियां।',
          'English (10 Marks): Grammar, Comprehension passage, Parts of Speech, Tenses, Active/Passive Voice, Vocabulary.',
          'Sanskrit (10 Marks): व्याकरण, अपठित गद्यांश/पद्यांश, संधि, समास, शब्द रूप, धातु रूप, प्रत्यय।',
        ],
      },
      {
        subjectName: 'Mathematics & Science / गणित एवं विज्ञान (30 Marks)',
        topics: [
          'Mathematics (20 Marks): Number System, Fractions, Decimals, Percentage, Profit & Loss, Simple Interest, Average, Geometry, Mensuration, Statistics, Factorization.',
          'Science (10 Marks): Daily life applications, Speed, Force, Energy, Light, Sound, Living world, Human body, Health and Hygiene, Matter and States.',
        ],
      },
      {
        subjectName: 'Teaching Skills & Child Psychology / शिक्षण कौशल एवं बाल मनोविज्ञान (20 Marks)',
        topics: [
          'Teaching Skills (10 Marks): Methods of teaching and learning, Principles of teaching, Inclusive education, New initiatives of primary education, Educational evaluation and measurement.',
          'Child Psychology (10 Marks): Factors affecting child development, Individual differences, Child learning theories, Special arrangements for divyang/creative learners.',
        ],
      },
      {
        subjectName: 'General Knowledge & Current Affairs / सामान्य ज्ञान एवं समसामयिक घटनाएं (30 Marks)',
        topics: [
          'Important National & International events, UP state GK, Cultural heritage of India and UP, Famous personalities, Books and Authors, Sports, World organizations.',
        ],
      },
      {
        subjectName: 'Environment & Social Studies / पर्यावरण एवं सामाजिक अध्ययन (10 Marks)',
        topics: [
          'Earth structure, Rivers, Mountains, Oceans, Continents, Indian Geography, Indian Freedom Struggle, Indian Constitution, Traffic Safety, Environmental Conservation.',
        ],
      },
      {
        subjectName: 'Reasoning Ability & Information Technology / तार्किक ज्ञान एवं सूचना तकनीकी (10 Marks)',
        topics: [
          'Reasoning (5 Marks): Analogies, Coding-decoding, Series, Blood relation, Venn diagrams.',
          'Information Technology (5 Marks): Computers, Internet, Smartphones, Educational Apps, Open Educational Resources (OER), Digital teaching aids.',
        ],
      },
      {
        subjectName: 'Life Skills, Management & Aptitude / जीवन कौशल, प्रबंधन एवं अभिवृत्ति (10 Marks)',
        topics: [
          'Professional conduct and ethics, Motivation, Teacher as facilitator, Constitutional and human values, Rewards and punishment penalties.',
        ],
      },
    ],
    preparationTips: [
      'Hindi, English & Sanskrit form a 40-mark bedrock; master foundational grammar rules thoroughly.',
      'Daily current affairs and GK carry 30 marks—focus on UP governmental initiatives, schemes, and primary education policies.',
      'Prepare pedagogical theories (Piaget, Vygotsky, Kohlberg, Thorndike) for Child Psychology and Teaching Skills.',
    ],
    selectionProcess: [
      'Step 1: Super TET Written Exam (150 Marks)',
      'Step 2: Composite Score Calculation (High School 10% + Intermediate 10% + Graduation 10% + BTC/D.El.Ed 10% + Super TET 60%)',
      'Step 3: State Merit & District Choice Allocation',
      'Step 4: Counselling and Document Verification at District BSA Office',
    ],
    pdfDownloadUrl: 'https://upessc.up.gov.in',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
  },

  // 4. UPESSC UP PGT Teacher (Lecturer) 2026 (Advt 06/2026)
  {
    id: 'syl-upessc-pgt-teacher-2026',
    slug: 'upessc-up-pgt-teacher-syllabus',
    examName: 'UPESSC UP PGT Teacher (Lecturer) Syllabus & Exam Pattern 2026 (Advt 06/2026)',
    examNameHi: 'उत्तर प्रदेश पीजीटी (प्रवक्ता) शिक्षक भर्ती 2026 विस्तृत पाठ्यक्रम एवं परीक्षा पैटर्न (विज्ञापन 06/2026)',
    organization: 'Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj',
    overview: 'Official syllabus and mark distribution for UP Post Graduate Teacher (PGT / Lecturer) recruitment in Aided Secondary Schools (Inter Colleges) across Uttar Pradesh comprising Written Examination (425 Marks), Interview (50 Marks) and Special Weightage (25 Marks).',
    examPattern: [
      {
        stage: 'Phase-I: Written Examination (Core Subject)',
        mode: 'Objective Multiple Choice Questions (OMR / CBT)',
        totalMarks: '425 Marks (125 Questions, 3.4 Marks each)',
        totalTime: '2 Hours (120 Minutes)',
        negativeMarking: 'No Negative Marking (कोई नकारात्मक अंकन नहीं)',
      },
      {
        stage: 'Phase-II: Interview / Personality Test',
        mode: 'Oral Viva-Voce Interview Board',
        totalMarks: '50 Marks (General Knowledge 4%, Personality 3%, Expression 3%)',
        totalTime: '15 - 25 Minutes',
        negativeMarking: 'N/A',
      },
      {
        stage: 'Phase-III: Special Qualification Weightage',
        mode: 'Documentary Merit Points',
        totalMarks: '25 Marks Max (Ph.D. 10 Marks, M.Ed. 10 Marks, B.Ed. 5 Marks, National Sports 5 Marks)',
        totalTime: 'Verified during Document Verification',
        negativeMarking: 'N/A',
      },
    ],
    subjects: [
      {
        subjectName: 'Core Subject Curriculum (Post Graduate Level - 125 Questions - 425 Marks)',
        topics: [
          'Detailed postgraduate level syllabus prescribed by UPESSC for the respective opted subject (Hindi, English, Mathematics, Physics, Chemistry, Biology, History, Civics/Political Science, Economics, Geography, Sociology, Commerce, Sanskrit, Home Science, Art, Music, Agriculture).',
          'In-depth theoretical concepts, textual analysis, critical commentaries, problem solving and subject pedagogy.',
        ],
      },
    ],
    preparationTips: [
      'Since all 125 questions are strictly from your subject, prioritize textbook concepts from UP Board Class 11-12 and university PG courses.',
      'Speed and precision are crucial: 125 questions in 120 minutes means under 1 minute per question.',
      'Attempt all questions because there is no negative marking.',
    ],
    selectionProcess: [
      'Stage 1: Written Examination (425 Marks)',
      'Stage 2: Interview / Viva-Voce (50 Marks)',
      'Stage 3: Special Qualification Weightage (25 Marks)',
      'Stage 4: Final Selection Merit (out of 500 Marks) & School Allotment',
    ],
    pdfDownloadUrl: 'https://upessc.up.gov.in',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
  },

  // 5. UPSC Engineering Services Examination (ESE / IES) 2026
  {
    id: 'syl-upsc-ese-ies-2026',
    slug: 'upsc-engineering-services-examination-ese-ies-syllabus',
    examName: 'UPSC Engineering Services Examination (ESE / IES) Syllabus & Exam Pattern 2026',
    examNameHi: 'यूपीएससी इंजीनियरिंग सेवा परीक्षा (IES / ESE) 2026 विस्तृत सिलेबस एवं परीक्षा पैटर्न',
    organization: 'Union Public Service Commission (UPSC)',
    overview: 'Comprehensive three-stage syllabus (Preliminary Examination, Main Examination & Personality Test) for UPSC Engineering Services Examination covering Civil, Mechanical, Electrical, and Electronics & Telecommunication Engineering disciplines.',
    examPattern: [
      {
        stage: 'Stage-I: Preliminary Examination (Objective Papers)',
        mode: 'Offline OMR / Objective Multiple Choice Questions',
        totalMarks: '500 Marks (Paper-I: 200 Marks + Paper-II: 300 Marks)',
        totalTime: 'Paper-I: 2 Hours (100 Qs) | Paper-II: 3 Hours (150 Qs)',
        negativeMarking: 'One-third (1/3rd = 0.33) Mark penalty for each wrong answer',
      },
      {
        stage: 'Stage-II: Main Examination (Conventional / Descriptive Papers)',
        mode: 'Conventional Written Descriptive (Engineering Discipline Specific)',
        totalMarks: '600 Marks (Paper-I: 300 Marks + Paper-II: 300 Marks)',
        totalTime: '3 Hours for Paper-I and 3 Hours for Paper-II',
        negativeMarking: 'No negative marking (Descriptive answering format)',
      },
      {
        stage: 'Stage-III: Personality Test (Interview)',
        mode: 'In-person Board Interview at UPSC Dholpur House, New Delhi',
        totalMarks: '200 Marks (Leadership, Integrity, Intellectual Curiosity, Engineering Acumen)',
        totalTime: '30 - 45 Minutes',
        negativeMarking: 'N/A',
      },
    ],
    subjects: [
      {
        subjectName: 'Prelims Paper-I: General Studies and Engineering Aptitude (200 Marks)',
        topics: [
          'Current issues of national and international importance relating to social, economic and industrial development.',
          'Engineering Aptitude covering Logical reasoning and Analytical ability.',
          'Engineering Mathematics and Numerical Analysis.',
          'General Principles of Design, Drawing, Importance of safety.',
          'Standards and Quality practices in production, construction, maintenance and services.',
          'Basics of Energy and Environment: Conservation, environmental pollution and degradation, Climate Change, Environmental impact assessment.',
          'Basics of Project Management, execution, cost estimation, scheduling and control.',
          'Basics of Material Science and Engineering.',
          'Information and Communication Technologies (ICT) based tools and their applications in Engineering, e-governance and technology based education.',
          'Ethics and values in Engineering profession.',
        ],
      },
      {
        subjectName: 'Civil Engineering (Discipline Specific - Paper I & II)',
        topics: [
          'Paper I: Building Materials, Solid Mechanics, Structural Analysis, Design of Steel Structures, Design of Concrete & Masonry Structures, Construction Practice, Planning & Management.',
          'Paper II: Flow of Fluids, Hydraulic Machines & Hydro Power, Hydrology & Water Resources Engineering, Environmental Engineering, Geo-technical Engineering & Foundation Engineering, Surveying & Geology, Transportation Engineering (Highways, Railways, Airports, Ports).',
        ],
      },
      {
        subjectName: 'Mechanical Engineering (Discipline Specific - Paper I & II)',
        topics: [
          'Paper I: Fluid Mechanics, Thermodynamics & Heat transfer, IC Engines, Refrigeration & Air Conditioning, Turbomachinery, Power Plant Engineering, Renewable Sources of Energy.',
          'Paper II: Engineering Mechanics, Engineering Materials, Mechanisms and Machines, Design of Machine Elements, Manufacturing, Industrial and Maintenance Engineering, Mechatronics and Robotics.',
        ],
      },
      {
        subjectName: 'Electrical Engineering (Discipline Specific - Paper I & II)',
        topics: [
          'Paper I: Engineering Mathematics, Electrical Materials, Electric Circuits and Fields, Electrical and Electronic Measurements, Computer Fundamentals, Basic Electronics Engineering.',
          'Paper II: Analog and Digital Electronics, Systems and Signal Processing, Control Systems, Electrical Machines, Power Systems, Power Electronics and Drives.',
        ],
      },
      {
        subjectName: 'Electronics & Telecommunication Engineering (Paper I & II)',
        topics: [
          'Paper I: Basic Electronics Engineering, Basic Electrical Engineering, Materials Science, Electronic Measurements & Instrumentation, Network Theory, Analog & Digital Circuits.',
          'Paper II: Control Systems, Communications Systems (Analog, Digital, Optical, Satellite), Computer Organization & Architecture, Electro Magnetics, Advanced Electronics Topics, Advanced Communication Topics.',
        ],
      },
    ],
    selectionProcess: [
      'Stage-I: Preliminary Examination (Objective Type - 500 Marks)',
      'Stage-II: Main Examination (Conventional Type - 600 Marks)',
      'Stage-III: Personality Test / Interview (200 Marks)',
      'Document Verification & Medical Examination as per Service Regulations',
      'Final Merit ranking determined on aggregate out of 1300 Marks',
    ],
    pdfDownloadUrl: 'https://upsc.gov.in/examinations/revised-syllabus-scheme',
    publishedAt: '2026-09-16',
    updatedAt: '2026-09-16',
  },
  // 1. Railway RRB Paramedical Staff CEN 05/2026
  {
    id: 'syl-rrb-paramedical-cen-05-2026',
    slug: 'rrb-paramedical-staff-cen-05-2026-syllabus',
    examName: 'Railway RRB Paramedical Staff (CEN 05/2026) Syllabus & Exam Pattern',
    examNameHi: 'रेलवे आरआरबी पैरामेडिकल स्टाफ (CEN 05/2026) विस्तृत परीक्षा सिलेबस एवं अंक योजना',
    organization: 'Railway Recruitment Boards (Ministry of Railways)',
    overview: 'Complete single-stage Computer Based Test (CBT) syllabus for 590 vacancies including Nursing Superintendent, Audiologist, Speech Therapist, Dental Hygienist, Dietician, Dialysis Technician, Health & Malaria Inspector, Laboratory Superintendent, and Pharmacist.',
    examPattern: [
      {
        stage: 'Single Stage Computer Based Test (CBT)',
        mode: 'Online Computer Based Examination (100 Questions)',
        totalMarks: '100 Marks (1 Mark per question)',
        totalTime: '90 Minutes (120 Minutes for eligible PwBD candidates with scribe)',
        negativeMarking: '1/3rd (0.33) Mark deducted for each incorrect answer',
      },
    ],
    subjects: [
      {
        subjectName: 'Professional Ability (व्यावसायिक योग्यता - संबंधित ट्रेड/पैरामेडिकल विषय) - 70 Marks',
        topics: [
          'Nursing Superintendent: Anatomy & Physiology, Microbiology, Fundamentals of Nursing, Medical-Surgical Nursing, Pharmacology, Community Health, Midwifery & Gynecology, Pediatrics, Mental Health.',
          'Pharmacist: Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy, Pharmacology & Toxicology, Pharmaceutical Jurisprudence, Hospital & Clinical Pharmacy.',
          'Laboratory Superintendent: Clinical Biochemistry, Hematology, Blood Banking, Medical Microbiology, Histopathology & Cytology, Clinical Pathology, Urinalysis.',
          'Dialysis Technician: Renal Anatomy & Physiology, Dialysis Technology, Hemodialysis, Peritoneal Dialysis, Water Treatment Plant, Patient Care & Complications.',
          'Health & Malaria Inspector: Community Hygiene, Water Purification, Solid Waste Management, Communicable Diseases & Vectors, National Health Programmes, Food Adulteration Act.',
          'Radiographer / X-Ray Technician: Radiation Physics, Radiographic Techniques, Radiation Protection, Darkroom Procedures, Special Radiological Procedures, CT & MRI Basics.',
        ],
      },
      {
        subjectName: 'General Awareness (सामान्य ज्ञान एवं समसामयिकी) - 10 Marks',
        topics: [
          'Current affairs of National and International importance (समसामयिक घटनाएं)',
          'Indian History and Freedom Struggle (भारतीय इतिहास एवं राष्ट्रीय आंदोलन)',
          'Indian Geography - Physical, Social and Economic (भारतीय भूगोल)',
          'Indian Polity and Constitution (भारतीय संविधान एवं राजव्यवस्था)',
          'Indian Economy, Union Budget and Financial Systems (भारतीय अर्थव्यवस्था)',
          'Environmental issues concerning India and the World (पर्यावरण एवं पारिस्थितिकी)',
          'Sports, Awards, Authors and Books (खेल, पुरस्कार एवं महत्वपूर्ण पुस्तकें)',
          'General Scientific and Technological developments including Space & Defense (वैज्ञानिक एवं तकनीकी विकास)',
        ],
      },
      {
        subjectName: 'General Arithmetic, Intelligence & Reasoning (गणित एवं तर्कशक्ति) - 10 Marks',
        topics: [
          'Arithmetic: Number System, BODMAS, Decimals, Fractions, LCM & HCF, Ratio and Proportion, Percentages, Mensuration, Time and Work, Time and Distance, Simple and Compound Interest, Profit and Loss, Elementary Algebra, Statistics.',
          'Reasoning: Analogies, Alphabetical and Number Series, Coding and Decoding, Mathematical Operations, Blood Relationships, Syllogism, Jumbling, Venn Diagrams, Data Interpretation and Sufficiency, Decision Making, Directions.',
        ],
      },
      {
        subjectName: 'General Science (सामान्य विज्ञान - 10th CBSE Standard) - 10 Marks',
        topics: [
          'Physics: Units & Measurements, Mechanics, Heat, Sound, Light, Electricity & Magnetism, Sources of Energy.',
          'Chemistry: Chemical Reactions, Acids Bases & Salts, Metals & Non-metals, Periodic Classification, Carbon & Its Compounds.',
          'Life Sciences (Biology): Cell Structure, Life Processes, Control & Coordination, Reproduction, Heredity & Evolution, Human Physiology, Nutrition & Diseases.',
        ],
      },
    ],
    selectionProcess: [
      '1. एकल चरणीय कंप्यूटर आधारित परीक्षा (Single Stage CBT - 100 Marks)',
      '2. दस्तावेज सत्यापन (Document Verification - Shortlisting on CBT Merit)',
      '3. रेलवे चिकित्सा परीक्षण (Railway Medical Examination as per B-1 / C-1 Medical Standards)',
      '4. अंतिम चयन सूची एवं नियुक्ति (Final Merit List & Panel Allocation)',
    ],
    pdfDownloadUrl: 'https://rrbcdg.gov.in',
    publishedAt: '2026-09-14',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 2. Railway RRB NTPC (Non-Technical Popular Categories)
  {
    id: 'syl-rrb-ntpc-2026',
    slug: 'rrb-ntpc-syllabus',
    examName: 'RRB NTPC (Graduate & Undergraduate) Stage 1 & Stage 2 Syllabus 2026',
    examNameHi: 'आरआरबी एनटीपीसी (स्नातक एवं 12वीं पास) प्रथम एवं द्वितीय चरण विस्तृत पाठ्यक्रम व एग्जाम पैटर्न',
    organization: 'Railway Recruitment Boards (RRB)',
    overview: 'Comprehensive syllabus for RRB NTPC posts including Station Master, Goods Train Manager, Commercial Apprentice, Junior Clerk cum Typist, Accounts Clerk, and Senior Clerk cum Typist.',
    examPattern: [
      {
        stage: 'Stage 1: CBT-1 (Screening Examination)',
        mode: 'Online Computer Based Test (100 Questions)',
        totalMarks: '100 Marks (Math: 30, Reasoning: 30, General Awareness: 40)',
        totalTime: '90 Minutes (120 Minutes for eligible PwBD candidates)',
        negativeMarking: '1/3rd Mark for every wrong response',
      },
      {
        stage: 'Stage 2: CBT-2 (Merit Examination)',
        mode: 'Online Computer Based Test (120 Questions)',
        totalMarks: '120 Marks (Math: 35, Reasoning: 35, General Awareness: 50)',
        totalTime: '90 Minutes (120 Minutes for PwBD)',
        negativeMarking: '1/3rd Mark for every wrong response',
      },
      {
        stage: 'CBAT (Aptitude Test) / Typing Skill Test',
        mode: 'Computer Based (Qualifying)',
        totalMarks: 'Qualifying Standard',
        totalTime: 'English: 30 WPM or Hindi: 25 WPM',
        negativeMarking: 'No Negative Marking in Skill Tests',
      },
    ],
    subjects: [
      {
        subjectName: 'Mathematics (संख्यात्मक अभियोग्यता)',
        topics: [
          'Number System, Decimals, Fractions, LCM & HCF',
          'Ratio and Proportions, Percentages, Averages',
          'Mensuration (2D & 3D Shapes, Area, Volume)',
          'Time and Work, Pipes and Cisterns',
          'Time and Distance, Trains, Boats & Streams',
          'Simple and Compound Interest',
          'Profit and Loss, Discount',
          'Elementary Algebra, Polynomials',
          'Geometry and Trigonometry',
          'Elementary Statistics (Mean, Median, Mode, Standard Deviation)',
        ],
      },
      {
        subjectName: 'General Intelligence & Reasoning (तर्कशक्ति परीक्षण)',
        topics: [
          'Analogies, Alphabetical & Number Series',
          'Coding and Decoding, Mathematical Operations',
          'Relationships, Syllogism, Jumbling',
          'Venn Diagrams, Data Interpretation and Sufficiency',
          'Conclusions and Decision Making, Similarities and Differences',
          'Analytical Reasoning, Classification',
          'Directions Sense Test, Statement-Arguments & Assumptions',
        ],
      },
      {
        subjectName: 'General Awareness (सामान्य ज्ञान एवं विज्ञान)',
        topics: [
          'Current Events of National and International Importance',
          'Games and Sports, Art and Culture of India',
          'Indian Literature, Monuments and Places of India',
          'General Science and Life Sciences (up to 10th CBSE)',
          'History of India and Indian National Movement',
          'Physical, Social and Economic Geography of India and World',
          'Indian Polity and Governance - Constitution and Political System',
          'General Scientific and Technological Developments including Space & Nuclear Programme',
          'UN and other Important World Organizations',
          'Environmental Issues concerning India and World at Large',
          'Basics of Computers and Computer Applications',
          'Common Abbreviations and Transport Systems in India',
        ],
      },
    ],
    selectionProcess: [
      '1. 1st Stage Computer Based Test (CBT-1) - Screening Test',
      '2. 2nd Stage Computer Based Test (CBT-2) - Separate for each 7th CPC Level',
      '3. Computer Based Aptitude Test (CBAT for Station Master) / Typing Skill Test (TST for Clerks)',
      '4. Document Verification (DV) & Comprehensive Medical Examination',
    ],
    pdfDownloadUrl: 'https://rrbcdg.gov.in',
    publishedAt: '2026-08-16',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 3. Railway RRB Assistant Loco Pilot (ALP) & Technician
  {
    id: 'syl-rrb-alp-technician-2026',
    slug: 'rrb-alp-technician-syllabus',
    examName: 'RRB Assistant Loco Pilot (ALP) & Technician Syllabus 2026',
    examNameHi: 'आरआरबी सहायक लोको पायलट (ALP) एवं तकनीशियन CBT-1 व CBT-2 विस्तृत पाठ्यक्रम',
    organization: 'Railway Recruitment Boards (RRB)',
    overview: 'Official syllabus and exam pattern for RRB Assistant Loco Pilot (ALP) and Technician Grade 1 & 3 posts. Includes CBT 1, CBT 2 (Part A & Part B Technical Trade), and CBAT Aptitude test.',
    examPattern: [
      {
        stage: 'First Stage CBT (Screening Test)',
        mode: 'Online Computer Based Test (75 Questions)',
        totalMarks: '75 Marks (Maths: 20, Reasoning: 25, General Science: 20, GA: 10)',
        totalTime: '60 Minutes',
        negativeMarking: '1/3rd Mark for each wrong answer',
      },
      {
        stage: 'Second Stage CBT: Part A (Merit Deciding)',
        mode: 'Online CBT (100 Questions: Maths, Reasoning, Basic Science & Engineering, GA)',
        totalMarks: '100 Marks',
        totalTime: '90 Minutes',
        negativeMarking: '1/3rd Mark for each wrong answer',
      },
      {
        stage: 'Second Stage CBT: Part B (Qualifying Trade Test)',
        mode: 'Online CBT (75 Questions from relevant ITI/Trade Syllabus)',
        totalMarks: '75 Marks (Qualifying Mark: 35% for all candidates)',
        totalTime: '60 Minutes',
        negativeMarking: '1/3rd Mark for each wrong answer',
      },
      {
        stage: 'Computer Based Aptitude Test (CBAT - Only for ALP)',
        mode: 'Online Battery Test (5 Test Batteries - Min 42 T-score in each)',
        totalMarks: '30% Weightage in Final Merit (Part A: 70%, CBAT: 30%)',
        totalTime: '71 Minutes',
        negativeMarking: 'No Negative Marking in CBAT',
      },
    ],
    subjects: [
      {
        subjectName: 'Basic Science & Engineering (इंजीनियरिंग ड्राइंग एवं आधारभूत विज्ञान - CBT 2 Part A)',
        topics: [
          'Engineering Drawing: Projections, Views, Drawing Instruments, Lines, Geometric Figures, Symbolic Representation',
          'Units and Measurements (इकाइयां एवं मापन)',
          'Mass, Weight and Density (द्रव्यमान, भार एवं घनत्व)',
          'Work, Power and Energy (कार्य, शक्ति एवं ऊर्जा)',
          'Speed and Velocity (चाल एवं वेग)',
          'Heat and Temperature (ऊष्मा एवं तापमान)',
          'Basic Electricity (आधारभूत विद्युत - Ohm’s Law, Circuits, Resistance)',
          'Levers and Simple Machines (उत्तोलक एवं सरल मशीनें)',
          'Occupational Safety and Health (व्यावसायिक सुरक्षा एवं स्वास्थ्य, प्राथमिक चिकित्सा)',
          'Environmental Education and IT Literacy (पर्यावरण एवं कंप्यूटर साक्षरता)',
        ],
      },
      {
        subjectName: 'Mathematics (गणित)',
        topics: [
          'Number System, BODMAS, Decimals, Fractions, LCM-HCF',
          'Ratio and Proportion, Percentages, Mensuration',
          'Time and Work, Time and Distance, Pipes and Cisterns',
          'Simple and Compound Interest, Profit and Loss',
          'Algebra, Geometry, Trigonometry, Elementary Statistics',
          'Square Root, Age Calculations, Calendar & Clock',
        ],
      },
      {
        subjectName: 'General Intelligence & Reasoning (रीजनिंग)',
        topics: [
          'Analogies, Alphabetical and Number Series',
          'Coding and Decoding, Mathematical operations, Relationships',
          'Syllogism, Jumbling, Venn Diagram, Data Interpretation',
          'Conclusions and Decision making, Similarities and Differences',
          'Analytical reasoning, Classification, Directions, Statement-Arguments',
        ],
      },
      {
        subjectName: 'Technical Trade Subjects (संबंधित आईटीआई ट्रेड - CBT 2 Part B)',
        topics: [
          'Electrical / Electronics: Electrician, Wireman, Electronics Mechanic, Instrument Mechanic.',
          'Mechanical: Fitter, Machinist, Turner, Motor Mechanic, Diesel Mechanic, Tractor Mechanic, Welder, Heat Engine, RAC.',
          'Automobile Engineering Trade Syllabus (DGET Prescribed).',
        ],
      },
    ],
    selectionProcess: [
      '1. First Stage Computer Based Test (CBT-1)',
      '2. Second Stage Computer Based Test (CBT-2 Part A & Part B)',
      '3. Computer Based Aptitude Test (CBAT - Only for ALP)',
      '4. Document Verification (DV)',
      '5. Strict A-1 Medical Standard Fitness Test (Color vision, Distance vision 6/6 without glasses for ALP)',
    ],
    pdfDownloadUrl: 'https://rrbcdg.gov.in',
    publishedAt: '2026-08-10',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 4. SSC CGL (Combined Graduate Level)
  {
    id: 'syl-ssc-cgl-2026',
    slug: 'ssc-cgl-exam-syllabus',
    examName: 'SSC CGL Tier 1 & Tier 2 Detailed Syllabus & Exam Pattern 2026',
    examNameHi: 'एसएससी सीजीएल टियर-1 एवं टियर-2 विस्तृत पाठ्यक्रम एवं संशोधित परीक्षा पैटर्न',
    organization: 'Staff Selection Commission (SSC)',
    overview: 'Complete official section-wise syllabus for SSC Combined Graduate Level Examination covering General Intelligence & Reasoning, General Awareness, Quantitative Aptitude, English Comprehension, Mathematical Abilities, Computer Proficiency and Data Entry Speed Test.',
    examPattern: [
      {
        stage: 'Tier 1 (Qualifying MCQ)',
        mode: 'Online CBT (100 Questions: Reasoning 25, GA 25, Quant 25, English 25)',
        totalMarks: '200 Marks (2 Marks per question)',
        totalTime: '60 Minutes (80 Mins for Scribe)',
        negativeMarking: '0.50 Mark per wrong answer',
      },
      {
        stage: 'Tier 2 Paper 1: Session 1 (Compulsory for All Posts)',
        mode: 'Online CBT (Section 1: Math 30 + Reasoning 30 = 180 Marks; Section 2: English 45 + GA 25 = 210 Marks; Section 3: Computer 20 Qs = 60 Marks)',
        totalMarks: '390 Merit Marks + 60 Qualifying Computer Marks',
        totalTime: '2 Hours 15 Minutes',
        negativeMarking: '1 Mark deducted per incorrect answer',
      },
      {
        stage: 'Tier 2 Paper 1: Session 2 (DEST)',
        mode: 'Computer Typing Test (Speed: 2000 key depressions)',
        totalMarks: 'Qualifying Nature',
        totalTime: '15 Minutes',
        negativeMarking: 'Percentage error evaluation',
      },
    ],
    subjects: [
      {
        subjectName: 'General Intelligence & Reasoning (सामान्य बुद्धिमत्ता एवं तर्कशक्ति)',
        topics: [
          'Analogies, Semantic Classification, Symbolic/Number Classification',
          'Space Orientation, Semantic Series, Number Series, Figural Series',
          'Problem Solving, Word Building, Coding & Decoding',
          'Numerical Operations, Symbolic Operations, Trends, Space Orientation',
          'Venn Diagrams, Drawing Inferences, Punched hole/pattern-folding',
          'Critical Thinking, Emotional Intelligence, Social Intelligence',
        ],
      },
      {
        subjectName: 'General Awareness (सामान्य ज्ञान एवं समसामयिकी)',
        topics: [
          'History, Culture, Geography, Economic Scene',
          'General Policy, Indian Constitution & Polity',
          'Scientific Research, Current National & International Affairs',
          'Static GK: Folk Dances, National Parks, Rivers, Dams, Famous Personalities',
        ],
      },
      {
        subjectName: 'Quantitative Aptitude & Mathematical Abilities (गणित)',
        topics: [
          'Computation of Whole numbers, Decimals, Fractions & Relationships',
          'Percentages, Ratio & Proportion, Square roots, Averages, Interest',
          'Profit and Loss, Discount, Partnership Business, Mixture and Alligation',
          'Time and distance, Time & Work, Basic algebraic identities, Graphs',
          'Triangle and its various kinds of centres, Congruence and similarity of triangles',
          'Circle and its chords, tangents, angles subtended by chords',
          'Right Prism, Right Circular Cone, Cylinder, Sphere, Hemispheres',
          'Trigonometry, Heights and Distances, Standard Identities, Histograms, Frequency polygon, Bar-diagram & Pie-chart',
        ],
      },
      {
        subjectName: 'English Comprehension (अंग्रेजी भाषा)',
        topics: [
          'Spotting the Error, Fill in the Blanks, Synonyms & Antonyms',
          'Spelling/detecting mis-spelt words, Idioms & Phrases',
          'One word substitution, Improvement of Sentences',
          'Active/Passive Voice of Verbs, Direct/Indirect Narration',
          'Shuffling of Sentence parts, Shuffling of Sentences in a passage',
          'Cloze Passage & Comprehension Passage',
        ],
      },
      {
        subjectName: 'Computer Knowledge Module (कंप्यूटर ज्ञान - Qualifying)',
        topics: [
          'Computer Basics: CPU, memory, input/output devices, Windows OS',
          'Software: MS Office (MS Word, MS Excel, PowerPoint)',
          'Working with Internet and e-mails: Web Browsing, Search Engines, Downloading/Uploading',
          'Basics of networking and cyber security: Virus, Worms, Trojans, Firewalls, Hacking',
        ],
      },
    ],
    selectionProcess: [
      'Tier 1 Computer Based Examination (Qualifying for Tier 2)',
      'Tier 2 Computer Based Examination (Merit based on 390 marks)',
      'Computer Knowledge & DEST Speed Test (Qualifying)',
      'Document Verification & Medical Examination by Indenting Departments',
    ],
    pdfDownloadUrl: 'https://ssc.gov.in/for-candidates/tentative-syllabus',
    publishedAt: '2026-08-12',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 5. SSC CHSL (10+2 Combined Higher Secondary Level)
  {
    id: 'syl-ssc-chsl-2026',
    slug: 'ssc-chsl-syllabus',
    examName: 'SSC CHSL (10+2) Tier 1 & Tier 2 Syllabus 2026',
    examNameHi: 'एसएससी सीएचएसएल 10+2 टियर-1 एवं टियर-2 संशोधित परीक्षा सिलेबस व एग्जाम पैटर्न',
    organization: 'Staff Selection Commission (SSC)',
    overview: 'Complete official syllabus for SSC CHSL (10+2) Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO) vacancies.',
    examPattern: [
      {
        stage: 'Tier 1 (Objective MCQ)',
        mode: 'Online CBT (100 Questions: English 25, Reasoning 25, Quant 25, GA 25)',
        totalMarks: '200 Marks (2 Marks per question)',
        totalTime: '60 Minutes',
        negativeMarking: '0.50 Mark per wrong answer',
      },
      {
        stage: 'Tier 2 Paper 1 (Section 1 & 2 Merit Marks)',
        mode: 'Online CBT (Math: 30 Qs, Reasoning: 30 Qs = 180 Marks; English: 40 Qs, GA: 20 Qs = 180 Marks)',
        totalMarks: '360 Merit Marks + 45 Computer Marks (15 Qs Qualifying)',
        totalTime: '2 Hours 15 Minutes',
        negativeMarking: '1 Mark per wrong answer',
      },
      {
        stage: 'Tier 2 Skill Test / Typing Test',
        mode: 'Data Entry Speed Test (DEO: 8000 KDPH; LDC/JSA: 35 WPM English / 30 WPM Hindi)',
        totalMarks: 'Qualifying',
        totalTime: '15 Mins (DEO) / 10 Mins (LDC)',
        negativeMarking: 'Standard error evaluation',
      },
    ],
    subjects: [
      {
        subjectName: 'Mathematical Abilities (संख्यात्मक अभियोग्यता - 10th/12th Level)',
        topics: [
          'Number Systems, Fundamental Arithmetical Operations, Percentages, Ratio and Proportion',
          'Square roots, Averages, Interest (Simple and Compound), Profit and Loss, Discount',
          'Partnership Business, Mixture and Alligation, Time and distance, Time and work',
          'Algebra: Basic algebraic identities of School Algebra & Elementary surds',
          'Geometry: Triangle, Congruence and similarity, Circle, tangents, chords',
          'Mensuration: Triangle, Quadrilaterals, Regular Polygons, Circle, Prism, Cone, Cylinder, Sphere',
          'Trigonometry: Trigonometric ratios, Standard Identities, Heights and Distances',
          'Statistics and Probability: Tables and graphs, Mean, Median, Mode, Calculation of simple probabilities',
        ],
      },
      {
        subjectName: 'Reasoning and General Intelligence (तर्कशक्ति)',
        topics: [
          'Semantic Analogy, Symbolic/Number Analogy, Figural Analogy',
          'Semantic Classification, Symbolic/Number Classification, Figural Classification',
          'Semantic Series, Number Series, Figural Series, Problem Solving, Critical Thinking',
          'Coding and de-coding, Numerical Operations, Symbolic Operations, Space Orientation',
          'Venn Diagrams, Drawing inferences, Punched hole/pattern-folding & un-folding',
        ],
      },
      {
        subjectName: 'English Language and Comprehension (अंग्रेजी)',
        topics: [
          'Spot the Error, Fill in the Blanks, Synonyms/Homonyms, Antonyms',
          'Spellings/detecting misspelled words, Idioms & Phrases, One word substitution',
          'Improvement of Sentences, Active/Passive Voice of Verbs, Direct/Indirect Narration',
          'Shuffling of Sentence parts, Cloze Passage, Comprehension Passage',
        ],
      },
      {
        subjectName: 'General Awareness (सामान्य ज्ञान)',
        topics: [
          'Current affairs of national and international importance',
          'India and its neighboring countries especially pertaining to History, Culture, Geography',
          'Economic Scene, General Policy and Scientific Research',
        ],
      },
    ],
    selectionProcess: [
      'Tier 1 Computer Based Examination (Qualifying)',
      'Tier 2 Computer Based Examination (Merit based on 360 Marks)',
      'Typing Test / Skill Test (Qualifying)',
      'Document Verification & Final Appointment',
    ],
    pdfDownloadUrl: 'https://ssc.gov.in/for-candidates/tentative-syllabus',
    publishedAt: '2026-08-15',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 6. SSC GD Constable (CAPFs, SSF, Assam Rifles)
  {
    id: 'syl-ssc-gd-constable-2026',
    slug: 'ssc-gd-constable-syllabus',
    examName: 'SSC GD Constable (CAPF, BSF, CISF, CRPF, ITBP, SSB, AR) Syllabus 2026',
    examNameHi: 'एसएससी जीडी कांस्टेबल परीक्षा विस्तृत पाठ्यक्रम, शारीरिक दक्षता (PET/PST) एवं चयन प्रक्रिया',
    organization: 'Staff Selection Commission (SSC)',
    overview: 'Detailed exam syllabus and Physical Efficiency/Standard Test (PET/PST) criteria for Constable (General Duty) recruitment in BSF, CISF, CRPF, SSB, ITBP, Assam Rifles, and SSF.',
    examPattern: [
      {
        stage: 'Computer Based Examination (CBE)',
        mode: 'Online Objective MCQ (80 Questions: Reasoning 20, GK 20, Math 20, Hindi/English 20)',
        totalMarks: '160 Marks (2 Marks per question)',
        totalTime: '60 Minutes',
        negativeMarking: '0.25 Mark for each wrong answer',
      },
      {
        stage: 'Physical Efficiency Test (PET)',
        mode: 'Running: Male 5 km in 24 mins (Ladakh 1.6 km in 7 mins) | Female 1.6 km in 8.5 mins',
        totalMarks: 'Qualifying Nature',
        totalTime: 'As per norms',
        negativeMarking: 'No Marks',
      },
      {
        stage: 'Physical Standard Test (PST)',
        mode: 'Height: Male 170 cm, Female 157 cm (Relaxation for ST/Hill areas) | Chest: Male 80-85 cm',
        totalMarks: 'Qualifying Nature',
        totalTime: 'On Spot Measurement',
        negativeMarking: 'No Marks',
      },
    ],
    subjects: [
      {
        subjectName: 'Elementary Mathematics (प्रारंभिक गणित - 10वीं स्तर) - 40 Marks',
        topics: [
          'Number Systems and Computation of Whole Numbers',
          'Decimals and Fractions and relationship between Numbers',
          'Fundamental arithmetical operations, Percentages, Ratio and Proportion',
          'Averages, Interest (Simple & Compound), Profit and Loss, Discount',
          'Mensuration, Time and Distance, Ratio and Time, Time and Work',
        ],
      },
      {
        subjectName: 'General Intelligence and Reasoning (तर्कशक्ति) - 40 Marks',
        topics: [
          'Analogies, Similarities and differences, Spatial visualization',
          'Spatial orientation, Visual memory, Discrimination, Observation',
          'Relationship concepts, Arithmetical reasoning and figural classification',
          'Arithmetic number series, Non-verbal series, Coding and decoding',
        ],
      },
      {
        subjectName: 'General Knowledge and General Awareness (सामान्य ज्ञान) - 40 Marks',
        topics: [
          'Current affairs, India and its neighboring countries',
          'Sports, History, Culture, Geography, Economic Scene',
          'General Polity, Indian Constitution, Scientific Research',
        ],
      },
      {
        subjectName: 'English / Hindi (हिंदी अथवा अंग्रेजी व्याकरण) - 40 Marks',
        topics: [
          'हिंदी: वर्तनी की त्रुटि, विलोम शब्द, पर्यायवाची/समानार्थी शब्द, मुहावरे और लोकोक्तियां, अनेक शब्दों के लिए एक शब्द, रिक्त स्थान, गद्यांश पर आधारित प्रश्न, वाक्य शुद्धि।',
          'English: Spot the Error, Fill in the Blanks, Synonyms/Antonyms, Spellings, Idioms & Phrases, One word substitution, Sentence improvement, Active/Passive voice, Comprehension passage.',
        ],
      },
    ],
    selectionProcess: [
      '1. Computer Based Examination (CBE)',
      '2. Physical Standard Test (PST) & Physical Efficiency Test (PET)',
      '3. Detailed Medical Examination (DME) & Review Medical Exam (RME)',
      '4. Document Verification & Final State-wise Merit List',
    ],
    pdfDownloadUrl: 'https://ssc.gov.in/for-candidates/tentative-syllabus',
    publishedAt: '2026-08-20',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 7. SSC MTS & Havaldar
  {
    id: 'syl-ssc-mts-havaldar-2026',
    slug: 'ssc-mts-havaldar-syllabus',
    examName: 'SSC MTS (Non-Technical) & Havaldar (CBIC/CBN) Syllabus 2026',
    examNameHi: 'एसएससी एमटीएस एवं हवलदार परीक्षा विस्तृत सिलेबस एवं संशोधित दो-सत्रीय परीक्षा पैटर्न',
    organization: 'Staff Selection Commission (SSC)',
    overview: 'Official syllabus and exam scheme for SSC Multi Tasking Staff (MTS) and Havaldar posts under CBIC and CBN. Includes Session 1 & Session 2 detailed curriculum and Havaldar PET walking standards.',
    examPattern: [
      {
        stage: 'Session 1 (Qualifying - No Negative Marking)',
        mode: 'Online CBT: Numerical & Mathematical Ability (20 Qs, 60 Marks) + Reasoning Ability (20 Qs, 60 Marks)',
        totalMarks: '120 Marks (40 Questions)',
        totalTime: '45 Minutes (60 Mins for Scribe)',
        negativeMarking: 'NO Negative Marking in Session 1',
      },
      {
        stage: 'Session 2 (Merit Determining - Strict Negative Marking)',
        mode: 'Online CBT: General Awareness (25 Qs, 75 Marks) + English Language & Comprehension (25 Qs, 75 Marks)',
        totalMarks: '150 Marks (Final Merit Decided SOLELY on this Session)',
        totalTime: '45 Minutes (60 Mins for Scribe)',
        negativeMarking: '1 Mark deducted per wrong answer',
      },
      {
        stage: 'Physical Test (Only for Havaldar in CBIC/CBN)',
        mode: 'Walking: Male 1600 meters in 15 minutes | Female 1 km in 20 minutes',
        totalMarks: 'Qualifying',
        totalTime: '15/20 Mins',
        negativeMarking: 'No Marks',
      },
    ],
    subjects: [
      {
        subjectName: 'Numerical and Mathematical Ability (गणित - Session 1)',
        topics: [
          'Integers and Whole Numbers, LCM and HCF, Decimals and Fractions',
          'Relationship between numbers, Fundamental Arithmetic Operations and BODMAS',
          'Percentages, Ratio and Proportions, Work and Time, Direct and inverse Proportions',
          'Averages, Simple Interest, Profit and Loss, Discount',
          'Area and Perimeter of basic geometric figures, Distance and Time, Lines and Angles',
          'Interpretation of simple Graphs and Data, Square and Square roots',
        ],
      },
      {
        subjectName: 'Reasoning Ability and Problem Solving (तर्कशक्ति - Session 1)',
        topics: [
          'Alpha-Numeric Series, Coding and Decoding, Analogy, Following Directions',
          'Similarities and Differences, Jumbling, Problem Solving and Analysis',
          'Non-verbal reasoning based on diagrams, Age calculations, Calendar and Clock',
        ],
      },
      {
        subjectName: 'General Awareness (सामान्य अध्ययन - Session 2)',
        topics: [
          'Social Studies (History, Geography, Art and Culture, Civics, Economics)',
          'General Science and Environmental Studies up to 10th standard',
          'Current affairs, Sports, Awards, Indian Polity',
        ],
      },
      {
        subjectName: 'English Language and Comprehension (अंग्रेजी - Session 2)',
        topics: [
          'Basics of English Language, Vocabulary, Grammar, Sentence structure',
          'Synonyms, Antonyms and their correct usage',
          'Comprehension of a simple paragraph with questions based on paragraph',
        ],
      },
    ],
    selectionProcess: [
      'Computer Based Examination (Session 1 & Session 2 on Same Day)',
      'Physical Efficiency Test (PET) / Physical Standard Test (PST) - Only for Havaldar Posts',
      'Document Verification by User Departments',
    ],
    pdfDownloadUrl: 'https://ssc.gov.in/for-candidates/tentative-syllabus',
    publishedAt: '2026-08-18',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 8. UPSC Civil Services Examination (CSE - IAS/IPS/IFS)
  {
    id: 'syl-upsc-cse-ias-2026',
    slug: 'upsc-civil-services-ias-syllabus',
    examName: 'UPSC Civil Services Examination (IAS / IPS / IFS) Prelims & Mains Syllabus 2026',
    examNameHi: 'यूपीएससी सिविल सेवा परीक्षा (आईएएस/आईपीएस) प्रारंभिक एवं मुख्य परीक्षा विस्तृत पाठ्यक्रम',
    organization: 'Union Public Service Commission (UPSC)',
    overview: 'Detailed official syllabus and examination scheme for UPSC Civil Services Examination. Comprehensive coverage of Prelims GS Paper 1, CSAT Paper 2, and Mains 9 Papers (Essay, GS 1-4, and Optional).',
    examPattern: [
      {
        stage: 'Civil Services Preliminary Examination (Objective)',
        mode: 'Offline Pen-Paper OMR: GS Paper 1 (100 Qs, 200 Marks) + CSAT Paper 2 (80 Qs, 200 Marks - Qualifying 33%)',
        totalMarks: '400 Marks (Merit for Mains decided by GS Paper 1 alone)',
        totalTime: '2 Hours for Each Paper',
        negativeMarking: '1/3rd (0.33) of assigned marks deducted per wrong answer',
      },
      {
        stage: 'Civil Services Main Examination (Written Descriptive)',
        mode: '9 Descriptive Papers: 2 Qualifying Language Papers (300 Marks each) + 7 Merit Papers (Essay, GS 1 to 4, Optional Paper 1 & 2 - 250 Marks each)',
        totalMarks: '1750 Merit Marks (Qualifying Language Papers 600 Marks not counted)',
        totalTime: '3 Hours for Each Paper',
        negativeMarking: 'Descriptive Evaluation',
      },
      {
        stage: 'Personality Test (Interview)',
        mode: 'Board Interview at Dholpur House, New Delhi',
        totalMarks: '275 Marks',
        totalTime: '30 to 45 Minutes',
        negativeMarking: 'Qualitative Evaluation (Grand Total: 2025 Marks)',
      },
    ],
    subjects: [
      {
        subjectName: 'Prelims Paper 1: General Studies (GS - 200 Marks)',
        topics: [
          'Current events of national and international importance',
          'History of India and Indian National Movement',
          'Indian and World Geography - Physical, Social, Economic Geography',
          'Indian Polity and Governance - Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues',
          'Economic and Social Development - Sustainable Development, Poverty, Inclusion, Demographics, Social Sector Initiatives',
          'General issues on Environmental Ecology, Bio-diversity and Climate Change',
          'General Science and Space/Defense Technology',
        ],
      },
      {
        subjectName: 'Prelims Paper 2: Civil Services Aptitude Test (CSAT - 200 Marks, Qualifying 33%)',
        topics: [
          'Comprehension and Interpersonal skills including communication skills',
          'Logical reasoning and analytical ability, Decision-making and problem-solving',
          'General mental ability',
          'Basic numeracy (numbers and their relations, orders of magnitude, etc. Class X level)',
          'Data interpretation (charts, graphs, tables, data sufficiency etc. Class X level)',
        ],
      },
      {
        subjectName: 'Mains GS Paper 1 (Indian Heritage, Culture, History & Geography of World and Society)',
        topics: [
          'Indian culture - Art forms, Literature and Architecture from ancient to modern times',
          'Modern Indian history from about the middle of the eighteenth century until the present',
          'The Freedom Struggle — its various stages and important contributors',
          'Post-independence consolidation and reorganization within the country',
          'History of the world (Industrial revolution, World Wars, Decolonization, Communism, Capitalism, Socialism)',
          'Salient features of Indian Society, Diversity of India, Role of women and women’s organizations',
          'Salient features of world’s physical geography, Distribution of key natural resources',
        ],
      },
      {
        subjectName: 'Mains GS Paper 2 (Governance, Constitution, Polity, Social Justice & International Relations)',
        topics: [
          'Indian Constitution - historical underpinnings, evolution, features, amendments, basic structure',
          'Functions and responsibilities of the Union and the States, Federal structure, Devolution of powers',
          'Separation of powers between various organs, Dispute redressal mechanisms',
          'Comparison of the Indian constitutional scheme with that of other countries',
          'Parliament and State legislatures—structure, functioning, conduct of business, powers & privileges',
          'Bilateral, regional and global groupings and agreements involving India and/or affecting India’s interests',
        ],
      },
      {
        subjectName: 'Mains GS Paper 3 (Technology, Economic Development, Biodiversity, Environment, Security & Disaster Management)',
        topics: [
          'Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment',
          'Inclusive growth and issues arising from it, Government Budgeting, Major crops & irrigation systems',
          'Science and Technology developments and their applications in everyday life, Indigenization of technology',
          'Awareness in the fields of IT, Space, Computers, Robotics, Nano-technology, Bio-technology',
          'Conservation, environmental pollution and degradation, environmental impact assessment, Disaster Management',
          'Linkages between development and spread of extremism, Role of external state and non-state actors in creating challenges to internal security',
        ],
      },
      {
        subjectName: 'Mains GS Paper 4 (Ethics, Integrity and Aptitude)',
        topics: [
          'Ethics and Human Interface: Essence, determinants and consequences of Ethics in human actions',
          'Human Values — lessons from the lives and teachings of great leaders, reformers and administrators',
          'Attitude: content, structure, function; its influence and relation with thought and behaviour',
          'Aptitude and foundational values for Civil Service, integrity, impartiality and non-partisanship, objectivity',
          'Emotional intelligence-concepts, and their utilities and application in administration and governance',
          'Probity in Governance: Concept of public service; Philosophical basis of governance and probity',
          'Case Studies on the above issues',
        ],
      },
    ],
    selectionProcess: [
      '1. Civil Services Preliminary Examination (Screening)',
      '2. Civil Services Main Examination (Written - 1750 Marks)',
      '3. Personality Test / Interview (275 Marks)',
      '4. All India Final Ranking based on 2025 Marks & Service Allocation (IAS, IPS, IFS, IRS)',
    ],
    pdfDownloadUrl: 'https://upsc.gov.in/examinations/revised-syllabus-scheme',
    publishedAt: '2026-08-01',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 9. UPSC NDA & NA Examination
  {
    id: 'syl-upsc-nda-2026',
    slug: 'upsc-nda-exam-syllabus',
    examName: 'UPSC NDA & NA Examination Detailed Syllabus 2026',
    examNameHi: 'यूपीएससी एनडीए एवं नौसेना अकादमी परीक्षा (गणित एवं सामान्य योग्यता) विस्तृत पाठ्यक्रम',
    organization: 'Union Public Service Commission (UPSC)',
    overview: 'Official syllabus for National Defence Academy (NDA) & Naval Academy (NA) Examination. Details of Mathematics (300 Marks), General Ability Test - GAT (600 Marks), and 5-Day SSB Interview (900 Marks).',
    examPattern: [
      {
        stage: 'Paper 1: Mathematics (120 Questions)',
        mode: 'Offline Pen & Paper (Objective MCQ)',
        totalMarks: '300 Marks (2.5 Marks per correct answer)',
        totalTime: '2 Hours 30 Minutes',
        negativeMarking: '0.83 Mark deducted per wrong answer',
      },
      {
        stage: 'Paper 2: General Ability Test - GAT (150 Questions)',
        mode: 'Offline Pen & Paper (Part A English: 200 Marks + Part B General Knowledge: 400 Marks)',
        totalMarks: '600 Marks (4 Marks per correct answer)',
        totalTime: '2 Hours 30 Minutes',
        negativeMarking: '1.33 Marks deducted per wrong answer',
      },
      {
        stage: 'Services Selection Board (SSB) Interview',
        mode: '5-Day Personality, Psychological & Intelligence Testing at Selection Centre',
        totalMarks: '900 Marks (Stage 1 OIR/PPDT Screening + Stage 2 Psychology, GTO & Interview)',
        totalTime: '5 Days',
        negativeMarking: 'Comprehensive assessment',
      },
    ],
    subjects: [
      {
        subjectName: 'Paper 1: Mathematics (Algebra, Calculus, Trigonometry - 300 Marks)',
        topics: [
          'Algebra: Concept of a set, operations on sets, Venn diagrams, Relations, Equivalence relations. Representation of real numbers on a line. Complex numbers, Quadratic equations, Arithmetic, Geometric and Harmonic progressions. Binomial theorem, Logarithms.',
          'Matrices and Determinants: Types of matrices, operations on matrices. Determinant of a matrix, basic properties. Adjoint and inverse of a square matrix. Applications in linear equations.',
          'Trigonometry: Angles and their measures in degrees and radians. Trigonometrical ratios, identities. Inverse trigonometrical functions. Applications to heights and distances.',
          'Analytical Geometry of Two and Three Dimensions: Cartesian Coordinate system, Distance formula, Equation of a line in various forms, Angle between two lines. Distance of a point from a line. Standard forms of circles, parabolas, ellipses and hyperbolas.',
          'Differential Calculus: Concept of a real valued function, domain, range, graph of a function. Composite functions, one to one, onto and inverse functions. Notion of limit, Standard limits. Continuity of functions. Derivative of function, geometrical and physical interpretation. Applications: Tangents and normals, Increasing and decreasing functions, Maxima and minima.',
          'Integral Calculus and Differential Equations: Integration as inverse operation of differentiation, integration by substitution and parts. Standard integrals involving algebraic expressions, trigonometric, exponential and hyperbolic functions. Evaluation of definite integrals. Definition of order and degree of a differential equation, formation of differential equations.',
          'Vector Algebra: Vectors in two and three dimensions, magnitude and direction of a vector. Unit and null vectors, addition of vectors, scalar multiplication. Dot and cross products of two vectors. Work done by a force and moment of a force.',
          'Statistics and Probability: Classification of data, Frequency distribution, cumulative frequency distribution. Graphical representation. Measures of Central Tendency — Mean, Median and Mode. Variance and standard deviation. Probability: Classical and statistical definitions, Addition and multiplication theorems, Conditional probability, Bayes’ theorem.',
        ],
      },
      {
        subjectName: 'Paper 2: GAT Part A - English (200 Marks)',
        topics: [
          'Grammar and usage, Vocabulary, Comprehension and cohesion in extended text',
          'Spotting Errors, Antonyms, Synonyms, Idioms & Phrases, Ordering of Words and Sentences',
        ],
      },
      {
        subjectName: 'Paper 2: GAT Part B - General Knowledge (400 Marks)',
        topics: [
          'Section A: Physics (Properties of matter, Mechanics, Heat, Sound, Optics, Electricity, Magnetism)',
          'Section B: Chemistry (Physical and chemical changes, Elements, Mixtures and Compounds, Acids Bases Salts, Air & Water, Fertilizer, Carbon)',
          'Section C: General Science (Difference between living and non-living, Basis of Life, Human Body, Epidemics & Nutrition)',
          'Section D: History, Freedom Movement (Indian History, Panchayati Raj, Renaissance, French Revolution, American Independence)',
          'Section E: Geography (Earth, Latitude Longitudes, Solar System, Atmosphere, Monsoons, Minerals & Power Resources of India)',
          'Section F: Current Events (Knowledge of Important events, Prominent personalities, Cultural and sports activities)',
        ],
      },
    ],
    selectionProcess: [
      '1. UPSC Written Examination (Mathematics 300 + GAT 600 = 900 Marks)',
      '2. SSB Interview (Stage 1 & Stage 2 = 900 Marks)',
      '3. Medical Examination at Service Medical Board',
      '4. Final All India Merit List based on Combined 1800 Marks',
    ],
    pdfDownloadUrl: 'https://upsc.gov.in/examinations/revised-syllabus-scheme',
    publishedAt: '2026-08-05',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 10. IBPS PO & Management Trainee
  {
    id: 'syl-ibps-po-2026',
    slug: 'ibps-po-exam-syllabus',
    examName: 'IBPS PO / MT Prelims & Mains Exam Syllabus 2026',
    examNameHi: 'आईबीपीएस पीओ / मैनेजमेंट ट्रेनी प्रारंभिक एवं मुख्य परीक्षा विस्तृत सिलेबस व पैटर्न',
    organization: 'Institute of Banking Personnel Selection (IBPS)',
    overview: 'Official syllabus and exam scheme for IBPS Probationary Officers/Management Trainees (CRP PO/MT). Covers Prelims, Mains (Data Analysis, Reasoning & Computer, English, GA/Banking, and Descriptive Writing), and Interview.',
    examPattern: [
      {
        stage: 'Preliminary Examination (Online CBT)',
        mode: 'Objective MCQ (English: 30 Qs, Quant: 35 Qs, Reasoning: 35 Qs)',
        totalMarks: '100 Marks (Sectional Timing: 20 Mins each = 60 Mins Total)',
        totalTime: '60 Minutes',
        negativeMarking: '0.25 Mark for each wrong answer',
      },
      {
        stage: 'Main Examination: Objective Test',
        mode: 'Online CBT: Reasoning & Computer (45 Qs, 60 Mks), Data Analysis (35 Qs, 60 Mks), General/Economy/Banking (40 Qs, 40 Mks), English (35 Qs, 40 Mks)',
        totalMarks: '200 Marks (155 Questions)',
        totalTime: '3 Hours',
        negativeMarking: '0.25 Mark for each wrong answer',
      },
      {
        stage: 'Main Examination: Descriptive Test',
        mode: 'Online Typing Test on Computer: English Essay & Letter Writing (2 Questions)',
        totalMarks: '25 Marks (Qualifying in nature but evaluated only if objective cleared)',
        totalTime: '30 Minutes',
        negativeMarking: 'Qualitative Evaluation',
      },
      {
        stage: 'Common Interview',
        mode: 'Face to face interview conducted by Participating Banks & IBPS',
        totalMarks: '100 Marks (Min qualifying: 40% for Gen/EWS, 35% for SC/ST/OBC)',
        totalTime: '15 to 20 Minutes',
        negativeMarking: 'Weightage: 80% Mains + 20% Interview',
      },
    ],
    subjects: [
      {
        subjectName: 'Data Analysis & Interpretation (मात्रात्मक योग्यता एवं डेटा व्याख्या)',
        topics: [
          'Tabular DI, Bar Graph, Line Graph, Pie Chart, Radar Graph, Mixed DI, Missing DI',
          'Caselet DI (Paragraph based Data Interpretation)',
          'Data Sufficiency (2 statements and 3 statements)',
          'Arithmetic Problems: Permutation & Combination, Probability, Mensuration',
          'Time and Work, Pipes & Cistern, Time Speed & Distance, Boats & Streams',
          'Profit & Loss, SI & CI, Ratio & Proportion, Averages, Ages, Partnerships',
        ],
      },
      {
        subjectName: 'Reasoning & Computer Aptitude (तर्कशक्ति एवं कंप्यूटर अभिरुचि)',
        topics: [
          'Puzzles (Box based, Floor based, Flat-Floor, Month-Day, Scheduling)',
          'Seating Arrangement (Circular, Linear, Parallel Rows, Square, Uncertain Number)',
          'Machine Input-Output (Advanced Pattern)',
          'Logical & Analytical Reasoning (Statement-Assumption, Statement-Course of Action, Cause & Effect)',
          'Coded Inequality, Coded Blood Relations, Coded Direction Sense, Reverse Syllogism',
          'Computer Aptitude: Binary to Decimal conversion, Logic Gates, Flowcharts, Computer Networking',
        ],
      },
      {
        subjectName: 'General / Economy / Banking Awareness (बैंकिंग एवं वित्तीय सामान्य ज्ञान)',
        topics: [
          'Banking History, RBI Structure & Monetary Policy Rates (Repo, Reverse Repo, CRR, SLR)',
          'Types of Bank Accounts, Negotiable Instruments, Cheques, Demand Drafts, CTS',
          'Priority Sector Lending (PSL), NPA & SARFAESI Act, IBC, Insolvency & Bankruptcy Code',
          'Financial Inclusion, PMJDY, Digital Banking (UPI, NEFT, RTGS, IMPS, CBDC, NPCI)',
          'Union Budget, Economic Survey, Inflation & Index Numbers (CPI, WPI)',
          'Current Affairs of the last 6 months (MoUs, Appointments, Awards, Summits, Defense)',
        ],
      },
      {
        subjectName: 'English Language & Descriptive Writing (अंग्रेजी भाषा एवं निबंध/पत्र)',
        topics: [
          'Reading Comprehension (Economy & Technology based)',
          'Cloze Test, Column Matching, Sentence Rearrangement (Para Jumbles)',
          'Error Detection & Phrase Replacement, Word Swap, Fillers',
          'Descriptive Paper: Formal/Informal Letter Writing (Banking, Complaint, Request)',
          'Descriptive Paper: Essay Writing on Socio-Economic, Financial, Technological issues (250 words)',
        ],
      },
    ],
    selectionProcess: [
      '1. Online Preliminary Examination',
      '2. Online Main Examination (Objective + Descriptive)',
      '3. Common Interview by Participating Public Sector Banks',
      '4. Combined Merit List (80:20 Ratio of Mains:Interview) & Bank Allotment (PNB, BOB, Canara, etc.)',
    ],
    pdfDownloadUrl: 'https://ibps.in',
    publishedAt: '2026-08-01',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 11. IBPS Clerk & RRB Office Assistant
  {
    id: 'syl-ibps-clerk-2026',
    slug: 'ibps-clerk-exam-syllabus',
    examName: 'IBPS Clerk & RRB Office Assistant (Multipurpose) Syllabus 2026',
    examNameHi: 'आईबीपीएस क्लर्क एवं आरआरबी ग्रामीण बैंक ऑफिस असिस्टेंट विस्तृत सिलेबस व परीक्षा पैटर्न',
    organization: 'Institute of Banking Personnel Selection (IBPS)',
    overview: 'Complete examination pattern and topic-wise syllabus for IBPS Clerk and IBPS RRB Office Assistant recruitment. Note: There is NO Interview for clerical posts, final merit is purely based on Mains Examination.',
    examPattern: [
      {
        stage: 'Preliminary Examination (Screening)',
        mode: 'Online CBT (English: 30 Qs, Numerical Ability: 35 Qs, Reasoning Ability: 35 Qs)',
        totalMarks: '100 Marks (Sectional Time: 20 Mins each = 60 Mins Total)',
        totalTime: '60 Minutes',
        negativeMarking: '0.25 Mark for each wrong answer',
      },
      {
        stage: 'Mains Examination (Final Merit Determining - No Interview)',
        mode: 'Online CBT: General/Financial Awareness (50 Qs, 50 Mks), General English (40 Qs, 40 Mks), Reasoning & Computer (50 Qs, 60 Mks), Quantitative Aptitude (50 Qs, 50 Mks)',
        totalMarks: '200 Marks (190 Questions)',
        totalTime: '160 Minutes (2 Hours 40 Minutes)',
        negativeMarking: '0.25 Mark per wrong answer',
      },
    ],
    subjects: [
      {
        subjectName: 'Quantitative Aptitude / Numerical Ability (संख्यात्मक अभियोग्यता)',
        topics: [
          'Simplification and Approximation (10-15 Qs in Prelims)',
          'Number Series (Missing & Wrong Number Series)',
          'Quadratic Equations (Comparison of x and y)',
          'Data Interpretation: Tables, Bar, Line, Pie Chart, Caselet',
          'Arithmetic Word Problems: Percentages, Profit & Loss, Simple & Compound Interest, Ratio & Proportion, Averages, Time & Work, Speed Time & Distance, Mensuration',
        ],
      },
      {
        subjectName: 'Reasoning Ability & Computer Knowledge (तर्कशक्ति)',
        topics: [
          'Puzzles (Floor, Flat-Floor, Day-Month, Box)',
          'Seating Arrangement (Linear Single & Double Row, Circular)',
          'Syllogism (Only A few pattern)',
          'Inequalities, Coding-Decoding (Chinese/Substitution coding)',
          'Blood Relations, Direction Sense, Alpha-Numeric-Symbol Series',
          'Computer Basics: Hardware, Software, MS Office, Internet, Shortcuts',
        ],
      },
      {
        subjectName: 'Financial / General Awareness (वित्तीय एवं सामान्य ज्ञान)',
        topics: [
          'Banking and Financial Awareness, Current RBI Guidelines',
          'Government Schemes for rural & urban development (PMJJBY, PMSBY, APY)',
          'Current Affairs of the last 6 months (National & International)',
          'Static GK: Headquarters of Banks, Taglines, Currency & Capitals, Dams, Sanctuaries',
        ],
      },
      {
        subjectName: 'General English (सामान्य अंग्रेजी)',
        topics: [
          'Reading Comprehension with vocabulary questions',
          'Cloze Test, Error Detection, Sentence Improvement',
          'Sentence Rearrangement (Para Jumbles), Word Swap, Single & Double Fillers',
        ],
      },
    ],
    selectionProcess: [
      '1. Online Preliminary Examination (Screening)',
      '2. Online Main Examination (100% Merit Weightage)',
      '3. Local Language Proficiency Test (LPT) of the applied State',
      '4. Final State-wise Merit List & Bank Allotment (No Interview for Clerical Grade)',
    ],
    pdfDownloadUrl: 'https://ibps.in',
    publishedAt: '2026-08-03',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 12. State Bank of India (SBI PO / Clerk)
  {
    id: 'syl-sbi-po-clerk-2026',
    slug: 'sbi-po-clerk-exam-syllabus',
    examName: 'SBI PO & SBI Clerk (Junior Associates) Detailed Syllabus 2026',
    examNameHi: 'भारतीय स्टेट बैंक (SBI PO / क्लर्क) प्रारंभिक एवं मुख्य परीक्षा पाठ्यक्रम व चयन प्रक्रिया',
    organization: 'State Bank of India (SBI)',
    overview: 'Official syllabus for SBI Probationary Officer (PO) and Junior Associates (Customer Support & Sales). Includes Prelims, Mains, Psychometric Test, Group Discussion, and Interview guidelines.',
    examPattern: [
      {
        stage: 'SBI PO Prelims (Screening Test - No Sectional Cutoff)',
        mode: 'Online CBT (English: 30 Qs, Quant: 35 Qs, Reasoning: 35 Qs)',
        totalMarks: '100 Marks (Sectional Time: 20 Mins each = 60 Mins Total)',
        totalTime: '60 Minutes',
        negativeMarking: '0.25 Mark per wrong answer',
      },
      {
        stage: 'SBI PO Mains (Objective 200 Marks + Descriptive 50 Marks)',
        mode: 'Online CBT (155 Objective Qs: Reasoning 40, Data Analysis 30, General/Economy/Banking 50, English 35) + Descriptive Test (Letter & Essay Typing)',
        totalMarks: '250 Marks',
        totalTime: '3 Hours 30 Minutes',
        negativeMarking: '0.25 Mark per wrong answer',
      },
      {
        stage: 'Phase 3: Psychometric Test, Group Discussion & Interview',
        mode: 'Group Exercise (20 Marks) + Personal Interview (30 Marks)',
        totalMarks: '50 Marks',
        totalTime: '30 Minutes',
        negativeMarking: 'Combined Score: Mains normalized to 75 + Phase 3 normalized to 25 = 100 Marks',
      },
    ],
    subjects: [
      {
        subjectName: 'Data Analysis & Interpretation (डेटा व्याख्या एवं विश्लेषण)',
        topics: [
          'High Level Data Interpretation (Missing DI, Cumulative DI, Radar DI, Funnel DI)',
          'Probability and Permutation Combination based Caselets',
          'Data Sufficiency and Quantity Comparison (Q1, Q2, Q3)',
          'Number Series and High Level Arithmetic Concepts',
        ],
      },
      {
        subjectName: 'Reasoning & Computer Aptitude (उच्च स्तरीय तर्कशक्ति)',
        topics: [
          'Complex Puzzles & Seating Arrangements with Multiple Variables',
          'Critical Reasoning: Assumption, Inference, Course of Action, Cause & Effect, Strengthening & Weakening Arguments',
          'High Level Machine Input-Output and Coding-Decoding',
          'Flowchart based Computer Logic',
        ],
      },
      {
        subjectName: 'General / Economy / Banking Awareness (सामान्य एवं बैंकिंग ज्ञान)',
        topics: [
          'Banking and Financial Awareness, SBI specific initiatives and YONO platform updates',
          'Monetary Policy, Money Market & Capital Market, NBFCs',
          'In-depth Current Affairs of the past 6 months',
          'National & International economic developments, Inflation, GDP forecasts',
        ],
      },
      {
        subjectName: 'English Language & Descriptive Writing (अंग्रेजी भाषा एवं वर्णनात्मक परीक्षा)',
        topics: [
          'Reading Comprehension based on global economy, geopolitics and artificial intelligence',
          'Vocabulary, Sentence Improvement, Cloze Test, Paragraph Completion',
          'Descriptive Test: Formal Letter Writing to Banking Authorities & Editors',
          'Descriptive Test: Essay on Current Socio-Economic & Banking issues (250 words)',
        ],
      },
    ],
    selectionProcess: [
      '1. Phase 1: Preliminary Examination',
      '2. Phase 2: Main Examination (Objective + Descriptive)',
      '3. Psychometric Profiling Test',
      '4. Phase 3: Group Discussion (20 Marks) and Personal Interview (30 Marks)',
      '5. Final All India Merit List based on Normalized 100 Marks (75 Mains + 25 GE/PI)',
    ],
    pdfDownloadUrl: 'https://sbi.co.in/web/careers',
    publishedAt: '2026-08-07',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 13. UP Police Constable & Sub Inspector (UPPRPB)
  {
    id: 'syl-up-police-constable-si-2026',
    slug: 'up-police-constable-si-syllabus',
    examName: 'UP Police Constable & Sub Inspector (SI) Detailed Syllabus 2026',
    examNameHi: 'उत्तर प्रदेश पुलिस आरक्षी (कांस्टेबल) एवं उपनिरीक्षक (SI) लिखित परीक्षा व शारीरिक मानक (PST/PET)',
    organization: 'Uttar Pradesh Police Recruitment & Promotion Board (UPPRPB)',
    overview: 'Complete official syllabus for UP Police Constable (60,244+ posts) and Sub Inspector (Civil Police) examination. Details of General Hindi, General Knowledge, Numerical & Mental Ability, Mental Aptitude/IQ/Reasoning, and PET running standards.',
    examPattern: [
      {
        stage: 'Offline Written Examination (OMR Based)',
        mode: 'Objective MCQ (150 Questions: General Knowledge 38, General Hindi 37, Numerical & Mental Ability 38, Mental Aptitude/IQ/Reasoning 37)',
        totalMarks: '300 Marks (2 Marks per question)',
        totalTime: '120 Minutes (2 Hours)',
        negativeMarking: '0.50 Mark deducted per incorrect answer',
      },
      {
        stage: 'Document Verification & Physical Standard Test (DV & PST)',
        mode: 'Height: Male Gen/OBC/SC 168 cm, ST 160 cm | Female Gen/OBC/SC 152 cm, ST 147 cm (Weight 40 kg min) | Chest: Male 79-84 cm',
        totalMarks: 'Qualifying',
        totalTime: 'On-spot Verification',
        negativeMarking: 'No Marks',
      },
      {
        stage: 'Physical Efficiency Test (PET - Running)',
        mode: 'Male: 4.8 km in 25 minutes | Female: 2.4 km in 14 minutes',
        totalMarks: 'Qualifying',
        totalTime: '25 / 14 Minutes',
        negativeMarking: 'No Marks',
      },
    ],
    subjects: [
      {
        subjectName: 'सामान्य ज्ञान (General Knowledge) - 38 Questions (76 Marks)',
        topics: [
          'सामान्य विज्ञान (भौतिकी, रसायन, जीव विज्ञान)',
          'भारत का इतिहास एवं स्वतंत्रता संग्राम',
          'भारतीय संविधान एवं राजव्यवस्था',
          'भारतीय अर्थव्यवस्था एवं संस्कृति, भारतीय कृषि, वाणिज्य एवं व्यापार',
          'जनसंख्या, पर्यावरण एवं नगरीकरण',
          'भारत एवं विश्व का भूगोल तथा प्राकृतिक संसाधन',
          'उत्तर प्रदेश की शिक्षा, संस्कृति, सामाजिक प्रथाएं एवं राजस्व/पुलिस प्रशासनिक व्यवस्था',
          'मानवाधिकार, आंतरिक सुरक्षा तथा आतंकवाद',
          'भारत और उसके पड़ोसी देशों के बीच संबंध',
          'राष्ट्रीय तथा अंतर्राष्ट्रीय महत्व के समसामयिक विषय (Current Affairs)',
          'राष्ट्रीय तथा अंतर्राष्ट्रीय संगठन, विमुद्रीकरण और उसका प्रभाव, साइबर क्राइम',
          'वस्तु एवं सेवा कर (GST), पुरस्कार एवं सम्मान, देश/राजधानियां/मुद्राएं, महत्वपूर्ण दिवस',
          'अनुसंधान एवं खोज, पुस्तक और उनके लेखक, सोशल मीडिया कम्युनिकेशन',
        ],
      },
      {
        subjectName: 'सामान्य हिंदी (General Hindi) - 37 Questions (74 Marks)',
        topics: [
          'हिंदी और अन्य भारतीय भाषाएं',
          'हिंदी व्याकरण का मौलिक ज्ञान: वर्णमाला, तद्भव-तत्सम, पर्यायवाची, विलोम, अनेकार्थक',
          'वाक्यांशों के स्थान पर एक शब्द, समरूपी भिन्नार्थक शब्द, अशुद्ध वाक्यों को शुद्ध करना',
          'लिंग, वचन, कारक, सर्वनाम, विशेषण, क्रिया, काल, वाच्य, अव्यय, उपसर्ग, प्रत्यय',
          'संधि, समास, विराम चिन्ह, मुहावरे एवं लोकोक्तियां, रस, छंद, अलंकार',
          'अपठित बोध (गद्यांश पर आधारित प्रश्न)',
          'प्रसिद्ध कवि, लेखक एवं उनकी प्रसिद्ध रचनाएं',
          'हिंदी भाषा में पुरस्कार (साहित्य अकादमी, ज्ञानपीठ, व्यास सम्मान आदि)',
        ],
      },
      {
        subjectName: 'संख्यात्मक एवं मानसिक योग्यता (Numerical & Mental Ability) - 38 Questions (76 Marks)',
        topics: [
          'Numerical Ability: Number System, Simplification, Decimals and Fractions, HCF & LCM, Ratio & Proportion, Percentage, Profit and Loss, Discount, Simple & Compound Interest, Partnership, Average, Time and Work, Distance and Time, Tables and Graphs, Mensuration, Arithmetical computations.',
          'Mental Ability: Logical Diagrams, Symbol-Relationship Interpretation, Codification, Perception Test, Word formation test, Letter and number series, Word and alphabet Analogy, Common Sense Test, Direction sense Test, Logical interpretation of data.',
        ],
      },
      {
        subjectName: 'मानसिक अभिरुचि, बुद्धिलब्धि एवं तार्किक क्षमता (Mental Aptitude, IQ & Reasoning) - 37 Questions (74 Marks)',
        topics: [
          'Mental Aptitude: Public Interest, Law and Order, Communal Harmony, Crime Control, Rule of Law, Ability of Adaptability, Professional Information, Police System, Contemporary Police Issues, Interest in Profession, Mental Toughness, Sensitivity towards minorities and underprivileged.',
          'IQ Test: Relationship and Analogy Test, Spotting out the dissimilar, Series completion, Coding-Decoding, Direction Sense, Blood Relation, Problems based on alphabet, Time sequence test, Venn Diagram, Mathematical aptitude.',
          'Reasoning Ability: Analogies, Similarities, Differences, Space visualization, Problem solving, Analysis judgment, Decision-making, Visual memory, Observation, Discrimination, Concepts, Arithmetical reasoning, Verbal and figure classification.',
        ],
      },
    ],
    selectionProcess: [
      '1. लिखित परीक्षा (Written Examination - OMR Mode, 300 Marks)',
      '2. दस्तावेज सत्यापन एवं शारीरिक मानक परीक्षण (DV & PST)',
      '3. शारीरिक दक्षता परीक्षा (PET - दौड़ / Running)',
      '4. विस्तृत चिकित्सा परीक्षण एवं चरित्र सत्यापन (Medical Exam & Character Verification)',
      '5. अंतिम चयन सूची (Final Merit List as per Government Reservation Rules)',
    ],
    pdfDownloadUrl: 'https://uppbpb.gov.in',
    publishedAt: '2026-08-14',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 14. MP Police Constable & MPESB Vyapam
  {
    id: 'syl-mp-police-constable-2026',
    slug: 'mp-police-constable-syllabus',
    examName: 'MP Police Constable & MPESB Detailed Syllabus & Physical Standards 2026',
    examNameHi: 'मध्य प्रदेश पुलिस आरक्षी (कांस्टेबल) लिखित परीक्षा, अंक विभाजन एवं संशोधित फिजिकल दक्षता 2026',
    organization: 'Madhya Pradesh Employees Selection Board (MPESB / Vyapam)',
    overview: 'Complete official exam pattern for MP Police Constable GD & Radio Operator. In the revised pattern, 50% weightage is given to the Written Exam (100 Marks) and 50% to Physical Efficiency Test (100 Marks).',
    examPattern: [
      {
        stage: 'First Phase: Written Examination (Online CBT)',
        mode: 'Objective MCQ (100 Questions: General Knowledge & Reasoning 40, Intellectual Ability & Mental Aptitude 30, Science & Simple Arithmetic 30)',
        totalMarks: '100 Marks (1 Mark per question)',
        totalTime: '120 Minutes (2 Hours)',
        negativeMarking: 'NO Negative Marking in MP Police Written Exam',
      },
      {
        stage: 'Second Phase: Physical Efficiency Test (PET - 100 Marks Merit)',
        mode: '800 Meter Run (40 Marks) + Shot Put / गोला फेंक (30 Marks) + Long Jump / लंबी कूद (30 Marks)',
        totalMarks: '100 Marks (Marks awarded based on time/distance slabs)',
        totalTime: 'Slab-based evaluation',
        negativeMarking: 'Qualifying with tiered scoring',
      },
      {
        stage: 'Physical Standard Test (PST)',
        mode: 'Height: Male Gen/OBC/SC 168 cm, ST 160 cm | Female All categories 155 cm | Chest: Male 81-86 cm',
        totalMarks: 'Qualifying',
        totalTime: 'On Spot Measurement',
        negativeMarking: 'No Marks',
      },
    ],
    subjects: [
      {
        subjectName: 'सामान्य ज्ञान एवं तार्किक ज्ञान (GK & Reasoning) - 40 Marks',
        topics: [
          'मध्य प्रदेश का सामान्य ज्ञान: इतिहास, भूगोल, नदियां, अभयारण्य, खनिज, जनजातियां, पर्यटन स्थल, प्रमुख व्यक्तित्व, योजनाएं',
          'भारतीय इतिहास एवं राष्ट्रीय आंदोलन',
          'भारतीय संविधान एवं शासन व्यवस्था',
          'भारत एवं विश्व का भूगोल',
          'समसामयिक राष्ट्रीय एवं राज्य स्तरीय घटनाएं (Current Affairs)',
          'तार्किक क्षमता: सादृश्यता, वर्गीकरण, श्रृंखला, रक्त संबंध, दिशा परीक्षण',
        ],
      },
      {
        subjectName: 'बौद्धिक क्षमता एवं मानसिक अभिरुचि (Intellectual Ability & Mental Aptitude) - 30 Marks',
        topics: [
          'कोडिंग-डिकोडिंग, पहेली, वेन आरेख, न्याय वाक्य (Syllogism)',
          'कथन एवं निष्कर्ष, कथन एवं तर्क, निर्णय लेने की क्षमता',
          'दर्पण एवं जल प्रतिबिंब, कागज मोड़ना व काटना',
          'छिपी हुई आकृतियां एवं चित्र वर्गीकरण',
        ],
      },
      {
        subjectName: 'विज्ञान एवं सरल अंकगणित (Science & Simple Arithmetic) - 30 Marks',
        topics: [
          'सामान्य विज्ञान (8वीं एवं 10वीं एनसीईआरटी स्तर): भौतिकी, रसायन, जीव विज्ञान, दैनिक जीवन में विज्ञान',
          'अंकगणित: संख्या पद्धति, सरलीकरण, भिन्न, दशमलव, लघुत्तम-महत्तम समापवर्तक (LCM-HCF)',
          'प्रतिशत, लाभ और हानि, साधारण एवं चक्रवृद्धि ब्याज, अनुपात एवं समानुपात',
          'समय और कार्य, पाइप और टंकी, समय, चाल और दूरी',
          'क्षेत्रमिति (2D व 3D आकृतियों का क्षेत्रफल व आयतन)',
        ],
      },
    ],
    selectionProcess: [
      '1. प्रथम चरण: कंप्यूटर आधारित लिखित परीक्षा (100 अंक)',
      '2. द्वितीय चरण: शारीरिक दक्षता परीक्षा (100 अंक - दौड़, गोला फेंक, लंबी कूद)',
      '3. शारीरिक मानक परीक्षण (PST - ऊंचाई एवं सीना मापन)',
      '4. दस्तावेज सत्यापन एवं चिकित्सीय परीक्षण',
      '5. अंतिम चयन सूची: कुल 200 अंकों (लिखित 100 + फिजिकल 100) के आधार पर मेरिट',
    ],
    pdfDownloadUrl: 'https://esb.mp.gov.in',
    publishedAt: '2026-08-11',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 15. Indian Air Force Agniveer Vayu
  {
    id: 'syl-iaf-agniveer-vayu-2026',
    slug: 'iaf-agniveer-vayu-syllabus',
    examName: 'Indian Air Force Agniveer Vayu Syllabus & Exam Scheme 2026',
    examNameHi: 'भारतीय वायु सेना अग्निवीर वायु (साइंस एवं नॉन-साइंस) विस्तृत परीक्षा पाठ्यक्रम',
    organization: 'Indian Air Force (IAF - Ministry of Defence)',
    overview: 'Official syllabus and examination scheme for Indian Air Force Agniveer Vayu intake. Comprehensive breakdown for Science Subjects (Physics, Math, English) and Other than Science Subjects (RAGA - Reasoning and General Awareness).',
    examPattern: [
      {
        stage: 'Phase 1: Online Examination - Science Subjects',
        mode: 'Online CBT: English (20 Qs), Mathematics (25 Qs), Physics (25 Qs) as per 10+2 CBSE Syllabus',
        totalMarks: '70 Marks (70 Questions)',
        totalTime: '60 Minutes',
        negativeMarking: '0.25 Mark for each wrong answer',
      },
      {
        stage: 'Phase 1: Other Than Science Subjects',
        mode: 'Online CBT: English (20 Qs) + Reasoning & General Awareness RAGA (30 Qs)',
        totalMarks: '50 Marks (50 Questions)',
        totalTime: '45 Minutes',
        negativeMarking: '0.25 Mark for each wrong answer',
      },
      {
        stage: 'Phase 1: Science & Other Than Science (Combined)',
        mode: 'Online CBT: English (20), Math (25), Physics (25), RAGA (30)',
        totalMarks: '100 Marks (100 Questions)',
        totalTime: '85 Minutes',
        negativeMarking: '0.25 Mark for each wrong answer',
      },
      {
        stage: 'Phase 2: Physical Fitness Test (PFT) & Adaptability Tests',
        mode: '1.6 km run in 7 mins (Male) / 8 mins (Female) + 10 Push-ups, 10 Sit-ups, 20 Squats + Adaptability Test-II',
        totalMarks: 'Qualifying',
        totalTime: 'On Spot Evaluation',
        negativeMarking: 'No Marks',
      },
    ],
    subjects: [
      {
        subjectName: 'English (10+2 Standard - Compulsory for All Groups)',
        topics: [
          'Comprehension passage followed by questions',
          'Grammar: Subject-Verb concord, Verb forms and error in their use, Sequence of tenses',
          'Transformation of sentences: Compound, Complex, Simple, Negative, Affirmative, Comparative degree',
          'Prepositions, Nouns, Adjectives, Adverbs, Conjunctions, Modals, Determiners',
          'Vocabulary: Synonyms, Antonyms, One word substitution, Spelling pitfalls, Idioms & Phrases',
          'Narration (Direct and Indirect speech), Active and Passive Voice',
        ],
      },
      {
        subjectName: 'Mathematics (10+2 CBSE Standard - Science Subjects)',
        topics: [
          'Sets, Relations and Functions, Trigonometric Functions, Inverse Trigonometric Functions',
          'Complex Numbers and Quadratic Equations, Linear Inequalities, Permutations and Combinations',
          'Binomial Theorem, Sequences and Series, Straight Lines, Conic Sections, Three-dimensional Geometry',
          'Limits and Derivatives, Continuity and Differentiability, Applications of Derivatives',
          'Integrals, Applications of the Integrals, Differential Equations',
          'Vector Algebra, Three-Dimensional Geometry, Linear Programming, Probability',
          'Mathematical Reasoning, Matrices and Determinants',
        ],
      },
      {
        subjectName: 'Physics (10+2 CBSE Standard - Science Subjects)',
        topics: [
          'Physical World and Measurement, Kinematics, Laws of Motion, Work, Energy and Power',
          'Motion of System of Particles and Rigid Body, Gravitation, Properties of Bulk Matter',
          'Thermodynamics, Behaviour of Perfect Gases and Kinetic Theory of Gases',
          'Oscillations and Waves, Electrostatics, Current Electricity',
          'Magnetic Effects of Current and Magnetism, Electromagnetic Induction and Alternating Currents',
          'Electromagnetic Waves, Optics, Dual Nature of Matter and Radiation',
          'Atoms and Nuclei, Electronic Devices, Communication Systems',
        ],
      },
      {
        subjectName: 'RAGA - Reasoning and General Awareness (Other Than Science Subjects)',
        topics: [
          'Reasoning (Verbal and Non-Verbal): Numerical series, Distance and Direction sense Test, Mathematical Operations, Number, Ranking & Time Sequence Test, Assigning artificial values to Arithmetical signs, Inserting correct mathematical sign, Human relation, Coding & decoding, Odd man out, Mutual relation problems, Tallest, youngest relations, Dictionary words, Analogy, Non-verbal reasoning, Number coding.',
          'Mathematics: Ratio and Proportion, Average, LCM & HCF, Profit and Loss, Time, Distance and Speed, Percentage, Simplification of Numbers, Fractions, Area of triangle, Square and Rectangle, Surface Area and volume of Cuboids, Cylinder, Cone and Sphere, Probability, Simple Trigonometry.',
          'General Knowledge and Current Affairs: General Science, Civics, Geography, Current Events, History, Basic Computer Operations.',
        ],
      },
    ],
    selectionProcess: [
      '1. Phase 1: Online Computer Based Examination (STAR)',
      '2. Phase 2: Physical Fitness Test (PFT), Document Verification & Adaptability Test',
      '3. Phase 3: Detailed Medical Examination at designated IAF Medical Centres',
      '4. Provisional Select List (PSL) & Final Enrollment List (AIPSL)',
    ],
    pdfDownloadUrl: 'https://agnipathvayu.cdac.in',
    publishedAt: '2026-08-08',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 16. Indian Army Agniveer (General Duty, Technical, Tradesman, Clerk/SKT)
  {
    id: 'syl-indian-army-agniveer-2026',
    slug: 'indian-army-agniveer-syllabus',
    examName: 'Indian Army Agniveer (GD, Tech, Clerk / SKT, Tradesman) Syllabus 2026',
    examNameHi: 'भारतीय सेना अग्निवीर (सामान्य ड्यूटी, तकनीकी, क्लर्क, ट्रेड्समैन) विस्तृत पाठ्यक्रम एवं सीईई एग्जाम',
    organization: 'Indian Army (Ministry of Defence)',
    overview: 'Official syllabus and exam pattern for Indian Army Agniveer Common Entrance Examination (CEE). Details for Agniveer General Duty (GD), Agniveer Technical, Agniveer Clerk/Store Keeper Technical (SKT), and Agniveer Tradesman (10th/8th pass).',
    examPattern: [
      {
        stage: 'Phase 1: Online Common Entrance Exam (CEE) - Agniveer GD & Tradesman',
        mode: 'Online CBT: General Knowledge (15 Qs, 30 Mks), General Science (15 Qs, 30 Mks), Math (15 Qs, 30 Mks), Logical Reasoning (5 Qs, 10 Mks)',
        totalMarks: '100 Marks (50 Questions - Passing Marks: 35)',
        totalTime: '60 Minutes',
        negativeMarking: '0.50 Mark per wrong answer',
      },
      {
        stage: 'Phase 1: Agniveer Clerk / Store Keeper Technical (SKT)',
        mode: 'Online CBT (Part 1: GK, GS, Math, CS - 100 Marks + Part 2: General English - 100 Marks)',
        totalMarks: '200 Marks (50 Questions - Passing Marks: 32 in each part, 80 aggregate)',
        totalTime: '60 Minutes',
        negativeMarking: '1 Mark per wrong answer (4 Marks per correct)',
      },
      {
        stage: 'Phase 1: Agniveer Technical',
        mode: 'Online CBT (GK 10 Qs, Math 15 Qs, Physics 15 Qs, Chemistry 10 Qs)',
        totalMarks: '200 Marks (50 Questions - Passing Marks: 80)',
        totalTime: '60 Minutes',
        negativeMarking: '1 Mark per wrong answer (4 Marks per correct)',
      },
      {
        stage: 'Phase 2: Army Recruitment Rally (Physical Fitness Test - PFT)',
        mode: '1.6 km Run (Group I: Up to 5 min 30 sec = 60 Marks; Group II: 5 min 31 sec to 5 min 45 sec = 48 Marks) + Beam Pull-ups (10 Pull ups = 40 Marks) + 9 Feet Ditch (Qualifying) + Zig-Zag Balance (Qualifying)',
        totalMarks: '100 Marks in PFT (For GD: Combined CEE + PFT; For Tech/Clerk: PFT is Qualifying only)',
        totalTime: 'Rally Grounds Assessment',
        negativeMarking: 'Physical Fitness Scoring',
      },
    ],
    subjects: [
      {
        subjectName: 'General Knowledge (सामान्य ज्ञान - All Trades)',
        topics: [
          'The test will include questions relating to India and its neighboring countries, especially pertaining to History, Culture, Geography and who’s who',
          'Abbreviations, Sports, Awards and Prizes, Terminology, Indian Armed Forces',
          'Continents and Sub-continents, Inventions and Discoveries',
          'The Constitution of India, International Organizations, Books and Authors',
          'Knowledge of Important events that have happened in India and at world level in the recent years, Current important world events, Prominent personalities',
        ],
      },
      {
        subjectName: 'General Science (सामान्य विज्ञान - GD, Tradesman & Clerk)',
        topics: [
          'Questions will be based on topics of everyday observation and experience as may be expected of an educated person: Physics, Chemistry and Biology.',
          'Basis of life, cells, protoplasm and tissues, Growth and reproduction in plants and animals',
          'Elementary knowledge of human body and its important organs, Common epidemics, their causes and prevention',
        ],
      },
      {
        subjectName: 'Mathematics (अंकगणित, बीजगणित एवं रेखागणित - 10th Level)',
        topics: [
          'Arithmetic: Natural numbers, integers, fractions, rational/irrational numbers, decimal fractions, HCF & LCM, square root, ratio and proportion, percentages, averages, profit & loss, simple and compound interest.',
          'Algebra: Basic algebraic operations, factorization, HCF, LCM, quadratic equations.',
          'Geometry: Lines and angles, triangles, quadrilaterals, parallelograms, circles.',
          'Mensuration: Area and perimeters of triangles, squares, rectangles, parallelograms and circles. Volume and surface area of cube, cuboids, cylinder, cone and sphere.',
          'Trigonometry: Trigonometric ratios, standard angles, simple heights and distances.',
        ],
      },
      {
        subjectName: 'General English (अंग्रेजी - Exclusively for Clerk / SKT)',
        topics: [
          'Comprehension: One unseen passage followed by questions to test understanding of language and vocabulary.',
          'Grammar: Parts of speech (Noun, Pronoun, Verb, Adverb, Preposition, Conjunction, Interjection), Tenses, Sequence of Tenses, Voice (Active & Passive), Direct & Indirect Speech.',
          'Sentence construction: Types of sentences (Simple, Compound, Complex), Subject-verb agreement.',
          'Vocabulary: Synonyms, Antonyms, One-word substitution, Idioms & Phrases, Spelling errors.',
        ],
      },
    ],
    selectionProcess: [
      '1. Phase 1: Online Common Entrance Examination (CEE)',
      '2. Phase 2: ZRO / ARO Recruitment Rally (PFT & PST)',
      '3. Adaptability Test at Rally Site',
      '4. Detailed Medical Examination at Military Hospital (MH)',
      '5. Final Combined All India Merit List & Training Dispatch to Regimental Centres',
    ],
    pdfDownloadUrl: 'https://joinindianarmy.nic.in',
    publishedAt: '2026-08-04',
    updatedAt: '2026-09-15',
    isDemo: false,
  },

  // 17. Central Teacher Eligibility Test (CTET)
  {
    id: 'syl-ctet-2026',
    slug: 'ctet-exam-syllabus',
    examName: 'Central Teacher Eligibility Test (CTET) Paper 1 & Paper 2 Syllabus 2026',
    examNameHi: 'केंद्रीय शिक्षक पात्रता परीक्षा (CTET) पेपर-1 (प्राथमिक) एवं पेपर-2 (उच्च प्राथमिक) विस्तृत पाठ्यक्रम',
    organization: 'Central Board of Secondary Education (CBSE)',
    overview: 'Official syllabus and examination scheme for CTET Paper 1 (Classes I to V - Primary Stage) and Paper 2 (Classes VI to VIII - Elementary Stage). Covers Child Development and Pedagogy, Language 1 & 2, Mathematics, Environmental Studies, and Social Science.',
    examPattern: [
      {
        stage: 'CTET Paper 1 (For Classes 1 to 5 - Primary Stage)',
        mode: 'Offline OMR Pen-Paper Test: CDP (30 Qs), Language 1 (30 Qs), Language 2 (30 Qs), Mathematics (30 Qs), Environmental Studies (30 Qs)',
        totalMarks: '150 Marks (150 Objective MCQ Questions)',
        totalTime: '150 Minutes (2 Hours 30 Minutes)',
        negativeMarking: 'NO Negative Marking in CTET',
      },
      {
        stage: 'CTET Paper 2 (For Classes 6 to 8 - Elementary Stage)',
        mode: 'Offline OMR Pen-Paper Test: CDP (30 Qs), Language 1 (30 Qs), Language 2 (30 Qs), Math & Science OR Social Studies (60 Qs)',
        totalMarks: '150 Marks (150 Objective MCQ Questions)',
        totalTime: '150 Minutes (2 Hours 30 Minutes)',
        negativeMarking: 'NO Negative Marking in CTET',
      },
    ],
    subjects: [
      {
        subjectName: 'Child Development and Pedagogy (बाल विकास एवं शिक्षाशास्त्र) - 30 Marks',
        topics: [
          'Concept of development and its relationship with learning',
          'Principles of the development of children, Influence of Heredity & Environment',
          'Socialization processes: Social world & children (Teachers, Parents, Peers)',
          'Piaget, Kohlberg and Vygotsky: Constructs and critical perspectives',
          'Concepts of child-centered and progressive education',
          'Critical perspective of the construct of Intelligence, Multi-Dimensional Intelligence',
          'Language & Thought, Gender as a social construct: gender roles, gender-bias and educational practice',
          'Individual differences among learners, understanding differences based on diversity of language, caste, gender, community, religion etc.',
          'Concept of Inclusive education and understanding children with special needs (Addressing learners from diverse backgrounds, Addressing children with learning difficulties, Addressing Talented, Creative, Specially abled Learners)',
          'Learning and Pedagogy: How children think and learn; Basic processes of teaching and learning; Child as a problem solver and a ‘scientific investigator’; Alternative conceptions of learning; Cognition & Emotions; Motivation and learning.',
        ],
      },
      {
        subjectName: 'Language 1 & Language 2 (Hindi / English / Sanskrit) - 30 + 30 Marks',
        topics: [
          'Language Comprehension: Reading unseen passages — two passages one prose or drama and one poem with questions on comprehension, inference, grammar and verbal ability.',
          'Pedagogy of Language Development: Learning and acquisition, Principles of language Teaching, Role of listening and speaking; function of language and how children use it as a tool.',
          'Critical perspective on the role of grammar in learning a language for communicating ideas verbally and in written form.',
          'Challenges of teaching language in a diverse classroom; language difficulties, errors and disorders.',
          'Language Skills, Evaluating language comprehension and proficiency: speaking, listening, reading and writing.',
          'Teaching-learning materials: Textbook, multi-media materials, multilingual resource of the classroom, Remedial Teaching.',
        ],
      },
      {
        subjectName: 'Mathematics & Environmental Studies (Paper 1) - 30 + 30 Marks',
        topics: [
          'Mathematics Content: Geometry, Shapes & Spatial Understanding, Solids around Us, Numbers, Addition and Subtraction, Multiplication, Division, Measurement, Weight, Time, Volume, Data Handling, Patterns, Money.',
          'Mathematics Pedagogical Issues: Nature of Mathematics/Logical thinking; place of Mathematics in Curriculum; Language of Mathematics; Community Mathematics; Evaluation through formal and informal methods; Problems of Teaching; Error analysis; Diagnostic and Remedial Teaching.',
          'Environmental Studies (EVS) Content: Family and Friends (Relationships, Work and Play, Animals, Plants), Food, Shelter, Water, Travel, Things We Make and Do.',
          'EVS Pedagogical Issues: Concept and scope of EVS; Significance of EVS, integrated EVS; Environmental Studies & Environmental Education; Learning Principles; Scope & relation to Science & Social Science; Approaches of presenting concepts; Activities; Experimentation/Practical Work; Discussion; CCE; Teaching material/Aids; Problems.',
        ],
      },
      {
        subjectName: 'Social Studies / Social Science (Paper 2) - 60 Marks',
        topics: [
          'History: When, Where and How; The Earliest Societies; The First Cities; Early States; New Ideas; The First Empire; Contacts with Distant lands; Political Developments; Culture and Science; New Kings and Kingdoms; Sultans of Delhi; Architecture; Creation of an Empire; Social Change; Regional Cultures; The Establishment of Company Power; Rural Life and Society; Colonialism and Tribal Societies; The Revolt of 1857-58; Women and reform; Challenging the Caste System; The Nationalist Movement; India After Independence.',
          'Geography: Geography as a social study and as a science; Planet Earth in the solar system; Globe; Environment in its totality; Air; Water; Human Environment; Resources; Agriculture.',
          'Social and Political Life: Diversity; Government; Local Government; Making a Living; Democracy; State Government; Understanding Media; Unpacking Gender; The Constitution; Parliamentary Government; The Judiciary; Social Justice and the Marginalised.',
          'Pedagogical issues: Concept & Nature of Social Science/Social Studies; Class Room Processes, activities and discourse; Developing Critical thinking; Enquiry/Empirical Evidence; Problems of teaching Social Science/Social Studies; Sources – Primary & Secondary; Projects Work; Evaluation.',
        ],
      },
    ],
    selectionProcess: [
      '1. Written Examination (Paper 1 for Primary Teacher Class 1-5 / Paper 2 for Upper Primary Class 6-8)',
      '2. Minimum Qualifying Marks: 60% (90/150 Marks) for General, 55% (82/150 Marks) for OBC/SC/ST',
      '3. Issuance of CTET Eligibility Certificate via DigiLocker (Lifetime Validity)',
      '4. Eligibility to apply in KVS, NVS, DSSSB, EMRS, Army Schools, and Central/State Govt Teacher Recruitments',
    ],
    pdfDownloadUrl: 'https://ctet.nic.in',
    publishedAt: '2026-08-02',
    updatedAt: '2026-09-15',
    isDemo: false,
  },
];
