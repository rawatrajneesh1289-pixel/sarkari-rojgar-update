export type JobStatus = 'NEW' | 'OPEN' | 'CLOSING_SOON' | 'CLOSED';

export type JobCategory = 
  | 'Central Government'
  | 'State Government'
  | 'Railway'
  | 'Bank'
  | 'Police'
  | 'Defence'
  | 'Teaching'
  | 'PSU'
  | 'Engineering'
  | 'Medical';

export type Qualification = 
  | '8th Pass'
  | '10th Pass'
  | '12th Pass'
  | 'ITI'
  | 'Diploma'
  | 'Graduate'
  | 'Post Graduate'
  | 'B.Ed / D.El.Ed'
  | 'B.Tech / BE'
  | (string & {});

export type StateOption = 
  | 'All India'
  | 'Madhya Pradesh'
  | 'Uttar Pradesh'
  | 'Rajasthan'
  | 'Bihar'
  | 'Delhi'
  | 'Maharashtra'
  | 'Haryana'
  | 'Uttarakhand'
  | 'Himachal Pradesh'
  | (string & {});

export interface ImportantLinkItem {
  label: string;
  url: string;
  type: 'APPLY' | 'NOTIFICATION' | 'WEBSITE' | 'ADMIT_CARD' | 'RESULT' | 'SYLLABUS' | 'OTHER';
  isExternal?: boolean;
}

export type ImportantLink = ImportantLinkItem;

export interface PostWiseVacancy {
  postName: string;
  totalPosts: number | string;
  eligibility: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type FAQ = FAQItem;


export interface Job {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  organization: string;
  organizationHi: string;
  postName: string;
  totalVacancy: string;
  qualification: Qualification;
  category: JobCategory;
  state: StateOption;
  status: JobStatus;
  shortDescription: string;
  shortDescriptionHi: string;
  
  // Important Dates
  applicationStartDate: string;
  applicationLastDate: string;
  feeLastDate: string;
  correctionLastDate?: string;
  examDate: string;
  admitCardDate?: string;
  
  // Application Fee
  feeGeneralObcEws: string;
  feeScStPh: string;
  feeFemale?: string;
  paymentMode: string;
  
  // Age Limit
  minAge: string;
  maxAge: string;
  ageCalculationDate: string;
  ageRelaxationDetails: string;
  
  // Details
  postWiseVacancies: PostWiseVacancy[];
  selectionProcess: string[];
  salaryScale: string;
  howToApplySteps: string[];
  requiredDocuments: string[];
  
  // Links
  importantLinks: ImportantLinkItem[];
  officialWebsite?: string;
  applyUrl?: string;
  notificationUrl?: string;
  
  // FAQs
  faqs: FAQItem[];
  
  // SEO & Meta
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  publishedAt: string;
  updatedAt: string;
  isDemo: boolean;
}

export interface AdmitCard {
  id: string;
  slug: string;
  examName: string;
  examNameHi: string;
  organization: string;
  postName: string;
  totalVacancy?: string;
  examDate: string;
  status: 'Released' | 'Expected Soon' | 'Delayed';
  releaseDate: string;
  downloadUrl: string;
  officialNotificationUrl: string;
  instructions: string[];
  stepsToDownload: string[];
  faqs: FAQItem[];
  publishedAt: string;
  updatedAt: string;
  isDemo: boolean;
}

export interface Result {
  id: string;
  slug: string;
  examName: string;
  examNameHi: string;
  organization: string;
  postName: string;
  examDate?: string;
  resultDate: string;
  status: 'Declared' | 'Under Process' | 'Withheld';
  resultUrl: string;
  cutOffUrl?: string;
  meritListUrl?: string;
  overview: string;
  howToCheck: string[];
  cutOffMarks?: { category: string; marks: string }[];
  importantDates?: { event: string; date: string }[];
  faqs: FAQItem[];
  publishedAt: string;
  updatedAt: string;
  isDemo: boolean;
}

export interface AnswerKey {
  id: string;
  slug: string;
  examName: string;
  examNameHi: string;
  organization: string;
  examDate: string;
  releaseDate: string;
  status?: string;
  description?: string;
  objectionStartDate?: string;
  objectionLastDate?: string;
  objectionFeePerQuestion?: string;
  downloadUrl: string;
  objectionUrl?: string;
  stepsToDownload: string[];
  importantDates?: { event: string; date: string }[];
  faqs?: FAQItem[];
  publishedAt: string;
  updatedAt: string;
  isDemo: boolean;
}

export type SchemeCategory = 'Central' | 'Farmer' | 'Healthcare' | 'Social Security' | 'Housing' | 'Women' | 'Employment' | 'Student' | 'Madhya Pradesh' | 'Scholarship' | string;

export interface SarkariYojana {
  id: string;
  slug: string;
  schemeName: string;
  schemeNameHi: string;
  category: SchemeCategory;
  sector?: string;
  tagline?: string;
  objective: string;
  benefits: string[];
  eligibility: string[];
  requiredDocuments: string[];
  applicationProcess: string[];
  importantDates: { event: string; date: string }[];
  officialWebsiteUrl: string;
  applyOnlineUrl: string;
  helplineNumber?: string;
  faqs: FAQItem[];
  hasLastDate?: boolean;
  timelineType?: 'ONGOING' | 'SEASONAL' | 'PHASE_BASED';
  timelineNotice?: string;
  lastDateDetail?: string;
  publishedAt: string;
  updatedAt: string;
  isDemo: boolean;
}

export interface Scholarship {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  category: 'Central' | 'State' | 'Pre-Matric' | 'Post-Matric' | 'Minority' | 'SC/ST/OBC' | 'Merit Based';
  provider: string;
  amountOrBenefit: string;
  eligibility: string;
  lastDate: string;
  applyUrl: string;
  notificationUrl: string;
  publishedAt: string;
  updatedAt: string;
  isDemo: boolean;
}

export interface AdmissionUpdate {
  id: string;
  slug: string;
  advtNo?: string;
  courseOrExam: string;
  courseOrExamHi?: string;
  institution: string;
  level: 'College' | 'University' | 'School' | 'Entrance Exam' | 'Counselling';
  applicationStart: string;
  applicationLastDate: string;
  eligibility: string;
  applyUrl: string;
  officialNotificationUrl: string;
  totalSeats?: string;
  examDate?: string;
  ageLimit?: string;
  feeDetails?: { generalOBC: string; scSt: string; paymentMode?: string };
  description?: string;
  courseWiseEligibility?: { courseName: string; seatsOrInfo: string; eligibility: string }[];
  examPattern?: string[];
  requiredDocuments?: string[];
  importantDates?: { event: string; date: string }[];
  stepsToApply?: string[];
  importantLinks?: { label: string; url: string; note?: string }[];
  faqs?: FAQItem[];
  publishedAt: string;
  updatedAt: string;
  isDemo: boolean;
}

export interface Syllabus {
  id: string;
  slug: string;
  examName: string;
  examNameHi: string;
  organization: string;
  overview: string;
  examPattern: {
    stage: string;
    mode: string;
    totalMarks: string;
    totalTime: string;
    negativeMarking: string;
  }[];
  subjects: {
    subjectName: string;
    topics: string[];
  }[];
  preparationTips?: string[];
  selectionProcess: string[];
  pdfDownloadUrl?: string;
  publishedAt: string;
  updatedAt: string;
  isDemo?: boolean;
}

export interface PreviousPaper {
  id: string;
  slug: string;
  examName: string;
  year: string;
  shiftOrTier: string;
  subject: string;
  organization: string;
  downloadUrl: string;
  solutionAvailable: boolean;
  publishedAt: string;
  isDemo: boolean;
  category?: 'SSC' | 'Railway' | 'UPSC & State PSC' | 'Police & Defence' | 'Banking' | 'Teaching' | 'Other';
  examType?: string;
  language?: string;
  fileSize?: string;
  totalQuestions?: string;
  officialPortal?: string;
  answerKeyStatus?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  category: string;
  featuredImage: string;
  author: string;
  readTime: string;
  content: string;
  summary: string;
  tags: string[];
  importantPoints: string[];
  faqs: FAQItem[];
  publishedAt: string;
  updatedAt: string;
  isDemo: boolean;
}

export interface Announcement {
  id: string;
  text: string;
  textHi: string;
  linkUrl: string;
  isLive: boolean;
  type: 'NEW_JOB' | 'ADMIT_CARD' | 'RESULT' | 'URGENT';
}

export interface FilterOptions {
  searchQuery: string;
  qualification: string;
  category: string;
  state: string;
  status: string;
}
