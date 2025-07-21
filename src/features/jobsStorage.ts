
import localforage from "localforage";
import type { ColumnJobs } from "../types/jobstypes";

const JOBS_KEY = "careerpilot_jobs";

export async function saveJobs(columns: ColumnJobs): Promise<void> {
  await localforage.setItem(JOBS_KEY, columns);
}

export async function loadJobs(): Promise<ColumnJobs | null> {
  const data = await localforage.getItem<ColumnJobs>(JOBS_KEY);
  return data || null;
}

export async function clearJobs(): Promise<void> {
  await localforage.removeItem(JOBS_KEY);
}
