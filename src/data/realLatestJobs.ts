import { Job } from '../types';
import { NEW_REQUESTED_JOBS } from './newRequestedJobs';
import { JOBS_PART_1 } from './jobsDataPart1';
import { JOBS_PART_2 } from './jobsDataPart2';
import { JOBS_PART_3 } from './jobsDataPart3';

export const isJobApplicationOpen = (job: Job): boolean => {
  if (job.status === 'CLOSED') return false;

  const lastDateStr = job.applicationLastDate || '';
  const lower = lastDateStr.toLowerCase();
  if (
    lower.includes('completed') ||
    lower.includes('cancelled') ||
    lower.includes('closed') ||
    lower.includes('expired')
  ) {
    return false;
  }

  // Match DD/MM/YYYY date format
  const match = lastDateStr.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (match) {
    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10) - 1;
    const year = parseInt(match[3], 10);
    // End of deadline day (23:59:59)
    const lastDate = new Date(year, month, day, 23, 59, 59);

    // Current date check: compare against today
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    const baseline = new Date(2026, 8, 15, 0, 0, 0);
    const threshold = today.getTime() > baseline.getTime() ? today : baseline;

    if (!isNaN(lastDate.getTime()) && lastDate.getTime() < threshold.getTime()) {
      return false;
    }
  }

  return true;
};

const ALL_RAW_JOBS: Job[] = [
  ...NEW_REQUESTED_JOBS,
  ...JOBS_PART_1,
  ...JOBS_PART_2,
  ...JOBS_PART_3,
];

// Only export jobs whose application period is currently active / open
export const REAL_LATEST_JOBS: Job[] = ALL_RAW_JOBS.filter(isJobApplicationOpen);

