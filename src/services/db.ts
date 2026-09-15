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

import {
  INITIAL_JOBS,
  INITIAL_ADMIT_CARDS,
  INITIAL_RESULTS,
  INITIAL_ANSWER_KEYS,
  INITIAL_SCHEMES,
  INITIAL_SCHOLARSHIPS,
  INITIAL_ADMISSIONS,
  INITIAL_SYLLABUS,
  INITIAL_PREVIOUS_PAPERS,
  INITIAL_ARTICLES,
  INITIAL_ANNOUNCEMENTS,
} from '../data/seedData';
import { isJobApplicationOpen } from '../data/realLatestJobs';

const STORAGE_KEYS = {
  JOBS: 'sru_db_jobs_v8',
  ADMIT_CARDS: 'sru_db_admit_cards_v4',
  RESULTS: 'sru_db_results_v1',
  ANSWER_KEYS: 'sru_db_answer_keys_v3',
  SCHEMES: 'sru_db_schemes_v1',
  SCHOLARSHIPS: 'sru_db_scholarships_v4',
  ADMISSIONS: 'sru_db_admissions_v4',
  SYLLABUS: 'sru_db_syllabus_v1',
  PREVIOUS_PAPERS: 'sru_db_previous_papers_v2',
  ARTICLES: 'sru_db_articles_v1',
  ANNOUNCEMENTS: 'sru_db_announcements_v4',
  ADMIN_AUTH: 'sru_admin_token',
};

function getStoredItem<T>(key: string, defaultVal: T): T {
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      localStorage.setItem(key, JSON.stringify(defaultVal));
      return defaultVal;
    }
    return JSON.parse(item);
  } catch {
    return defaultVal;
  }
}

function setStoredItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error('Storage quota exceeded or error:', err);
  }
}

export const db = {
  // Jobs
  getJobs(): Job[] {
    const stored = getStoredItem<Job[]>(STORAGE_KEYS.JOBS, INITIAL_JOBS);
    // If older cache has closed jobs, demo data, or missing active jobs, seamlessly reset to INITIAL_JOBS
    if (
      !Array.isArray(stored) ||
      stored.some((j) => !isJobApplicationOpen(j)) ||
      !stored.some((j) => j.id === 'job-rrb-paramedical-staff-cen-05-2026') ||
      stored.some((j) => j.isDemo)
    ) {
      const activeList = INITIAL_JOBS.filter(isJobApplicationOpen);
      setStoredItem(STORAGE_KEYS.JOBS, activeList);
      return activeList;
    }
    return stored.filter(isJobApplicationOpen);
  },
  getJobBySlug(slug: string): Job | undefined {
    return this.getJobs().find((j) => j.slug === slug);
  },
  getJobById(id: string): Job | undefined {
    return this.getJobs().find((j) => j.id === id);
  },
  saveJob(job: Job): void {
    const list = this.getJobs();
    const index = list.findIndex((j) => j.id === job.id);
    if (index >= 0) {
      list[index] = { ...job, updatedAt: new Date().toISOString().split('T')[0] };
    } else {
      list.unshift({ ...job, id: 'job-' + Date.now(), updatedAt: new Date().toISOString().split('T')[0], publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.JOBS, list);
  },
  deleteJob(id: string): void {
    const list = this.getJobs().filter((j) => j.id !== id);
    setStoredItem(STORAGE_KEYS.JOBS, list);
  },

  // Admit Cards
  getAdmitCards(): AdmitCard[] {
    const stored = getStoredItem<AdmitCard[]>(STORAGE_KEYS.ADMIT_CARDS, INITIAL_ADMIT_CARDS);
    if (
      !Array.isArray(stored) ||
      stored.length < 30 ||
      stored.some((c) => c.isDemo) ||
      !stored.some((c) => c.id === 'ac-rrb-section-controller-exam-date-2026')
    ) {
      setStoredItem(STORAGE_KEYS.ADMIT_CARDS, INITIAL_ADMIT_CARDS);
      return INITIAL_ADMIT_CARDS;
    }
    return stored;
  },
  getAdmitCardBySlug(slug: string): AdmitCard | undefined {
    return this.getAdmitCards().find((ac) => ac.slug === slug);
  },
  saveAdmitCard(card: AdmitCard): void {
    const list = this.getAdmitCards();
    const index = list.findIndex((c) => c.id === card.id);
    if (index >= 0) {
      list[index] = { ...card, updatedAt: new Date().toISOString().split('T')[0] };
    } else {
      list.unshift({ ...card, id: 'ac-' + Date.now(), updatedAt: new Date().toISOString().split('T')[0], publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.ADMIT_CARDS, list);
  },
  deleteAdmitCard(id: string): void {
    const list = this.getAdmitCards().filter((c) => c.id !== id);
    setStoredItem(STORAGE_KEYS.ADMIT_CARDS, list);
  },

  // Results
  getResults(): Result[] {
    const stored = getStoredItem<Result[]>(STORAGE_KEYS.RESULTS, INITIAL_RESULTS);
    if (!Array.isArray(stored) || stored.length < 12 || stored.some((r) => r.isDemo)) {
      setStoredItem(STORAGE_KEYS.RESULTS, INITIAL_RESULTS);
      return INITIAL_RESULTS;
    }
    return stored;
  },
  getResultBySlug(slug: string): Result | undefined {
    return this.getResults().find((r) => r.slug === slug);
  },
  saveResult(result: Result): void {
    const list = this.getResults();
    const index = list.findIndex((r) => r.id === result.id);
    if (index >= 0) {
      list[index] = { ...result, updatedAt: new Date().toISOString().split('T')[0] };
    } else {
      list.unshift({ ...result, id: 'res-' + Date.now(), updatedAt: new Date().toISOString().split('T')[0], publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.RESULTS, list);
  },
  deleteResult(id: string): void {
    const list = this.getResults().filter((r) => r.id !== id);
    setStoredItem(STORAGE_KEYS.RESULTS, list);
  },

  // Answer Keys
  getAnswerKeys(): AnswerKey[] {
    const stored = getStoredItem<AnswerKey[]>(STORAGE_KEYS.ANSWER_KEYS, INITIAL_ANSWER_KEYS);
    if (!Array.isArray(stored) || stored.length < 14 || stored.some((a) => a.isDemo)) {
      setStoredItem(STORAGE_KEYS.ANSWER_KEYS, INITIAL_ANSWER_KEYS);
      return INITIAL_ANSWER_KEYS;
    }
    return stored;
  },
  getAnswerKeyBySlug(slug: string): AnswerKey | undefined {
    return this.getAnswerKeys().find((a) => a.slug === slug);
  },
  saveAnswerKey(key: AnswerKey): void {
    const list = this.getAnswerKeys();
    const index = list.findIndex((a) => a.id === key.id);
    if (index >= 0) {
      list[index] = { ...key, updatedAt: new Date().toISOString().split('T')[0] };
    } else {
      list.unshift({ ...key, id: 'ak-' + Date.now(), updatedAt: new Date().toISOString().split('T')[0], publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.ANSWER_KEYS, list);
  },
  deleteAnswerKey(id: string): void {
    const list = this.getAnswerKeys().filter((a) => a.id !== id);
    setStoredItem(STORAGE_KEYS.ANSWER_KEYS, list);
  },

  // Schemes
  getSchemes(): SarkariYojana[] {
    const stored = getStoredItem<SarkariYojana[]>(STORAGE_KEYS.SCHEMES, INITIAL_SCHEMES);
    if (!Array.isArray(stored) || stored.length < 15 || stored.some((s) => s.isDemo)) {
      setStoredItem(STORAGE_KEYS.SCHEMES, INITIAL_SCHEMES);
      return INITIAL_SCHEMES;
    }
    return stored;
  },
  getSchemeBySlug(slug: string): SarkariYojana | undefined {
    return this.getSchemes().find((s) => s.slug === slug);
  },
  saveScheme(scheme: SarkariYojana): void {
    const list = this.getSchemes();
    const index = list.findIndex((s) => s.id === scheme.id);
    if (index >= 0) {
      list[index] = { ...scheme, updatedAt: new Date().toISOString().split('T')[0] };
    } else {
      list.unshift({ ...scheme, id: 'sch-' + Date.now(), updatedAt: new Date().toISOString().split('T')[0], publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.SCHEMES, list);
  },
  deleteScheme(id: string): void {
    const list = this.getSchemes().filter((s) => s.id !== id);
    setStoredItem(STORAGE_KEYS.SCHEMES, list);
  },

  // Scholarships
  getScholarships(): Scholarship[] {
    const stored = getStoredItem<Scholarship[]>(STORAGE_KEYS.SCHOLARSHIPS, INITIAL_SCHOLARSHIPS);
    const hasDuplicates = Array.isArray(stored) && new Set(stored.map((s) => s.id)).size !== stored.length;
    if (!Array.isArray(stored) || stored.length < 35 || hasDuplicates || stored.some((s) => s.isDemo)) {
      setStoredItem(STORAGE_KEYS.SCHOLARSHIPS, INITIAL_SCHOLARSHIPS);
      return INITIAL_SCHOLARSHIPS;
    }
    return stored;
  },
  getScholarshipBySlug(slug: string): Scholarship | undefined {
    return this.getScholarships().find((s) => s.slug === slug);
  },
  saveScholarship(item: Scholarship): void {
    const list = this.getScholarships();
    const index = list.findIndex((s) => s.id === item.id);
    if (index >= 0) {
      list[index] = { ...item, updatedAt: new Date().toISOString().split('T')[0] };
    } else {
      list.unshift({ ...item, id: 'scholar-' + Date.now(), updatedAt: new Date().toISOString().split('T')[0], publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.SCHOLARSHIPS, list);
  },
  deleteScholarship(id: string): void {
    const list = this.getScholarships().filter((s) => s.id !== id);
    setStoredItem(STORAGE_KEYS.SCHOLARSHIPS, list);
  },

  // Admissions
  getAdmissions(): AdmissionUpdate[] {
    const stored = getStoredItem<AdmissionUpdate[]>(STORAGE_KEYS.ADMISSIONS, INITIAL_ADMISSIONS);
    const hasDuplicates = Array.isArray(stored) && new Set(stored.map((a) => a.id)).size !== stored.length;
    if (!Array.isArray(stored) || stored.length < 10 || hasDuplicates || stored.some((a) => a.isDemo)) {
      setStoredItem(STORAGE_KEYS.ADMISSIONS, INITIAL_ADMISSIONS);
      return INITIAL_ADMISSIONS;
    }
    return stored;
  },
  getAdmissionBySlug(slug: string): AdmissionUpdate | undefined {
    return this.getAdmissions().find((a) => a.slug === slug);
  },
  saveAdmission(item: AdmissionUpdate): void {
    const list = this.getAdmissions();
    const index = list.findIndex((a) => a.id === item.id);
    if (index >= 0) {
      list[index] = { ...item, updatedAt: new Date().toISOString().split('T')[0] };
    } else {
      list.unshift({ ...item, id: 'adm-' + Date.now(), updatedAt: new Date().toISOString().split('T')[0], publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.ADMISSIONS, list);
  },
  deleteAdmission(id: string): void {
    const list = this.getAdmissions().filter((a) => a.id !== id);
    setStoredItem(STORAGE_KEYS.ADMISSIONS, list);
  },

  // Syllabus
  getSyllabuses(): Syllabus[] {
    return getStoredItem<Syllabus[]>(STORAGE_KEYS.SYLLABUS, INITIAL_SYLLABUS);
  },
  getSyllabusBySlug(slug: string): Syllabus | undefined {
    return this.getSyllabuses().find((s) => s.slug === slug);
  },
  saveSyllabus(item: Syllabus): void {
    const list = this.getSyllabuses();
    const index = list.findIndex((s) => s.id === item.id);
    if (index >= 0) {
      list[index] = { ...item, updatedAt: new Date().toISOString().split('T')[0] };
    } else {
      list.unshift({ ...item, id: 'syl-' + Date.now(), updatedAt: new Date().toISOString().split('T')[0], publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.SYLLABUS, list);
  },
  deleteSyllabus(id: string): void {
    const list = this.getSyllabuses().filter((s) => s.id !== id);
    setStoredItem(STORAGE_KEYS.SYLLABUS, list);
  },

  // Previous Papers
  getPreviousPapers(): PreviousPaper[] {
    const stored = getStoredItem<PreviousPaper[]>(STORAGE_KEYS.PREVIOUS_PAPERS, INITIAL_PREVIOUS_PAPERS);
    if (!Array.isArray(stored) || stored.length < 35 || stored.some((p) => p.isDemo)) {
      setStoredItem(STORAGE_KEYS.PREVIOUS_PAPERS, INITIAL_PREVIOUS_PAPERS);
      return INITIAL_PREVIOUS_PAPERS;
    }
    return stored;
  },
  savePreviousPaper(item: PreviousPaper): void {
    const list = this.getPreviousPapers();
    const index = list.findIndex((p) => p.id === item.id);
    if (index >= 0) {
      list[index] = item;
    } else {
      list.unshift({ ...item, id: 'pp-' + Date.now(), publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.PREVIOUS_PAPERS, list);
  },
  deletePreviousPaper(id: string): void {
    const list = this.getPreviousPapers().filter((p) => p.id !== id);
    setStoredItem(STORAGE_KEYS.PREVIOUS_PAPERS, list);
  },

  // Articles
  getArticles(): Article[] {
    return getStoredItem<Article[]>(STORAGE_KEYS.ARTICLES, INITIAL_ARTICLES);
  },
  getArticleBySlug(slug: string): Article | undefined {
    return this.getArticles().find((a) => a.slug === slug);
  },
  saveArticle(item: Article): void {
    const list = this.getArticles();
    const index = list.findIndex((a) => a.id === item.id);
    if (index >= 0) {
      list[index] = { ...item, updatedAt: new Date().toISOString().split('T')[0] };
    } else {
      list.unshift({ ...item, id: 'art-' + Date.now(), updatedAt: new Date().toISOString().split('T')[0], publishedAt: new Date().toISOString().split('T')[0] });
    }
    setStoredItem(STORAGE_KEYS.ARTICLES, list);
  },
  deleteArticle(id: string): void {
    const list = this.getArticles().filter((a) => a.id !== id);
    setStoredItem(STORAGE_KEYS.ARTICLES, list);
  },

  // Announcements
  getAnnouncements(): Announcement[] {
    return getStoredItem<Announcement[]>(STORAGE_KEYS.ANNOUNCEMENTS, INITIAL_ANNOUNCEMENTS);
  },
  saveAnnouncement(ann: Announcement): void {
    const list = this.getAnnouncements();
    const index = list.findIndex((a) => a.id === ann.id);
    if (index >= 0) {
      list[index] = ann;
    } else {
      list.unshift({ ...ann, id: 'ann-' + Date.now() });
    }
    setStoredItem(STORAGE_KEYS.ANNOUNCEMENTS, list);
  },
  deleteAnnouncement(id: string): void {
    const list = this.getAnnouncements().filter((a) => a.id !== id);
    setStoredItem(STORAGE_KEYS.ANNOUNCEMENTS, list);
  },

  // Reset database back to default seed
  resetAll(): void {
    localStorage.removeItem(STORAGE_KEYS.JOBS);
    localStorage.removeItem(STORAGE_KEYS.ADMIT_CARDS);
    localStorage.removeItem(STORAGE_KEYS.RESULTS);
    localStorage.removeItem(STORAGE_KEYS.ANSWER_KEYS);
    localStorage.removeItem(STORAGE_KEYS.SCHEMES);
    localStorage.removeItem(STORAGE_KEYS.SCHOLARSHIPS);
    localStorage.removeItem(STORAGE_KEYS.ADMISSIONS);
    localStorage.removeItem(STORAGE_KEYS.SYLLABUS);
    localStorage.removeItem(STORAGE_KEYS.PREVIOUS_PAPERS);
    localStorage.removeItem(STORAGE_KEYS.ARTICLES);
    localStorage.removeItem(STORAGE_KEYS.ANNOUNCEMENTS);
  },

  // Export JSON backup
  exportBackup(): string {
    const backup = {
      jobs: this.getJobs(),
      admitCards: this.getAdmitCards(),
      results: this.getResults(),
      answerKeys: this.getAnswerKeys(),
      schemes: this.getSchemes(),
      scholarships: this.getScholarships(),
      admissions: this.getAdmissions(),
      syllabus: this.getSyllabuses(),
      previousPapers: this.getPreviousPapers(),
      articles: this.getArticles(),
      announcements: this.getAnnouncements(),
      exportedAt: new Date().toISOString(),
      version: '1.0',
    };
    return JSON.stringify(backup, null, 2);
  },

  // Import JSON backup
  importBackup(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (data.jobs) setStoredItem(STORAGE_KEYS.JOBS, data.jobs);
      if (data.admitCards) setStoredItem(STORAGE_KEYS.ADMIT_CARDS, data.admitCards);
      if (data.results) setStoredItem(STORAGE_KEYS.RESULTS, data.results);
      if (data.answerKeys) setStoredItem(STORAGE_KEYS.ANSWER_KEYS, data.answerKeys);
      if (data.schemes) setStoredItem(STORAGE_KEYS.SCHEMES, data.schemes);
      if (data.scholarships) setStoredItem(STORAGE_KEYS.SCHOLARSHIPS, data.scholarships);
      if (data.admissions) setStoredItem(STORAGE_KEYS.ADMISSIONS, data.admissions);
      if (data.syllabus) setStoredItem(STORAGE_KEYS.SYLLABUS, data.syllabus);
      if (data.previousPapers) setStoredItem(STORAGE_KEYS.PREVIOUS_PAPERS, data.previousPapers);
      if (data.articles) setStoredItem(STORAGE_KEYS.ARTICLES, data.articles);
      if (data.announcements) setStoredItem(STORAGE_KEYS.ANNOUNCEMENTS, data.announcements);
      return true;
    } catch (e) {
      console.error('Failed to import backup:', e);
      return false;
    }
  },

  // Admin Auth Helpers
  isAdminLoggedIn(): boolean {
    return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  },
  adminLogin(password: string): boolean {
    // Standard default demo admin pass 'admin2026' or 'sruadmin'
    if (password === 'admin2026' || password === 'sruadmin' || password === 'admin') {
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
      return true;
    }
    return false;
  },
  adminLogout(): void {
    localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
  },

  // Global Search across all entities
  searchAll(query: string) {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results: Array<{
      type: 'Job' | 'Admit Card' | 'Result' | 'Answer Key' | 'Sarkari Yojana' | 'Scholarship' | 'Syllabus' | 'Paper' | 'Article';
      title: string;
      titleHi?: string;
      slug: string;
      url: string;
      organization?: string;
      date?: string;
      snippet: string;
    }> = [];

    // Search Jobs
    this.getJobs().forEach((j) => {
      const match =
        j.title.toLowerCase().includes(q) ||
        j.titleHi.toLowerCase().includes(q) ||
        j.organization.toLowerCase().includes(q) ||
        j.postName.toLowerCase().includes(q) ||
        j.qualification.toLowerCase().includes(q) ||
        j.category.toLowerCase().includes(q) ||
        j.state.toLowerCase().includes(q);

      if (match) {
        results.push({
          type: 'Job',
          title: j.title,
          titleHi: j.titleHi,
          slug: j.slug,
          url: `/jobs/${j.slug}`,
          organization: j.organization,
          date: j.applicationLastDate,
          snippet: j.shortDescriptionHi || j.shortDescription,
        });
      }
    });

    // Search Admit Cards
    this.getAdmitCards().forEach((ac) => {
      if (
        ac.examName.toLowerCase().includes(q) ||
        ac.examNameHi.toLowerCase().includes(q) ||
        ac.organization.toLowerCase().includes(q) ||
        ac.postName.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Admit Card',
          title: ac.examName,
          titleHi: ac.examNameHi,
          slug: ac.slug,
          url: `/admit-card/${ac.slug}`,
          organization: ac.organization,
          date: ac.examDate,
          snippet: `Status: ${ac.status} | Exam Date: ${ac.examDate}`,
        });
      }
    });

    // Search Results
    this.getResults().forEach((r) => {
      if (
        r.examName.toLowerCase().includes(q) ||
        r.examNameHi.toLowerCase().includes(q) ||
        r.organization.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Result',
          title: r.examName,
          titleHi: r.examNameHi,
          slug: r.slug,
          url: `/results/${r.slug}`,
          organization: r.organization,
          date: r.resultDate,
          snippet: r.overview,
        });
      }
    });

    // Search Answer Keys
    this.getAnswerKeys().forEach((ak) => {
      if (
        ak.examName.toLowerCase().includes(q) ||
        ak.examNameHi.toLowerCase().includes(q) ||
        ak.organization.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Answer Key',
          title: ak.examName,
          titleHi: ak.examNameHi,
          slug: ak.slug,
          url: `/answer-key/${ak.slug}`,
          organization: ak.organization,
          date: ak.releaseDate,
          snippet: `Answer key released on ${ak.releaseDate}. Objection last date: ${ak.objectionLastDate || 'N/A'}`,
        });
      }
    });

    // Search Schemes
    this.getSchemes().forEach((s) => {
      if (
        s.schemeName.toLowerCase().includes(q) ||
        s.schemeNameHi.toLowerCase().includes(q) ||
        s.objective.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Sarkari Yojana',
          title: s.schemeName,
          titleHi: s.schemeNameHi,
          slug: s.slug,
          url: `/sarkari-yojana/${s.slug}`,
          snippet: s.objective,
        });
      }
    });

    // Search Scholarships
    this.getScholarships().forEach((sch) => {
      if (
        sch.title.toLowerCase().includes(q) ||
        sch.titleHi.toLowerCase().includes(q) ||
        sch.provider.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Scholarship',
          title: sch.title,
          titleHi: sch.titleHi,
          slug: sch.slug,
          url: `/scholarship`,
          organization: sch.provider,
          date: sch.lastDate,
          snippet: sch.eligibility,
        });
      }
    });

    // Search Syllabus
    this.getSyllabuses().forEach((syl) => {
      if (
        syl.examName.toLowerCase().includes(q) ||
        syl.examNameHi.toLowerCase().includes(q) ||
        syl.organization.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Syllabus',
          title: syl.examName,
          titleHi: syl.examNameHi,
          slug: syl.slug,
          url: `/syllabus/${syl.slug}`,
          organization: syl.organization,
          snippet: syl.overview,
        });
      }
    });

    // Search Previous Papers
    this.getPreviousPapers().forEach((pp) => {
      if (
        pp.examName.toLowerCase().includes(q) ||
        pp.subject.toLowerCase().includes(q) ||
        pp.organization.toLowerCase().includes(q) ||
        pp.year.includes(q)
      ) {
        results.push({
          type: 'Paper',
          title: `${pp.examName} (${pp.year})`,
          slug: pp.slug,
          url: `/previous-papers`,
          organization: pp.organization,
          snippet: `${pp.shiftOrTier} - ${pp.subject}`,
        });
      }
    });

    // Search Articles
    this.getArticles().forEach((art) => {
      if (
        art.title.toLowerCase().includes(q) ||
        art.titleHi.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Article',
          title: art.title,
          titleHi: art.titleHi,
          slug: art.slug,
          url: `/articles/${art.slug}`,
          organization: art.author,
          date: art.publishedAt,
          snippet: art.summary,
        });
      }
    });

    return results;
  },

  resetToSeed(): void {
    setStoredItem(STORAGE_KEYS.JOBS, INITIAL_JOBS);
    setStoredItem(STORAGE_KEYS.ADMIT_CARDS, INITIAL_ADMIT_CARDS);
    setStoredItem(STORAGE_KEYS.RESULTS, INITIAL_RESULTS);
    setStoredItem(STORAGE_KEYS.ANSWER_KEYS, INITIAL_ANSWER_KEYS);
    setStoredItem(STORAGE_KEYS.SCHEMES, INITIAL_SCHEMES);
    setStoredItem(STORAGE_KEYS.SCHOLARSHIPS, INITIAL_SCHOLARSHIPS);
    setStoredItem(STORAGE_KEYS.ADMISSIONS, INITIAL_ADMISSIONS);
    setStoredItem(STORAGE_KEYS.SYLLABUS, INITIAL_SYLLABUS);
    setStoredItem(STORAGE_KEYS.PREVIOUS_PAPERS, INITIAL_PREVIOUS_PAPERS);
    setStoredItem(STORAGE_KEYS.ARTICLES, INITIAL_ARTICLES);
    setStoredItem(STORAGE_KEYS.ANNOUNCEMENTS, INITIAL_ANNOUNCEMENTS);
  },
};
