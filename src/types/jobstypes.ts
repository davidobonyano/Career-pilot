// src/types/jobs.types.ts

export interface Job {
  id: string;
  title: string;
  company: string;
}

export type ColumnJobs = {
  [key: string]: Job[];
};

export interface NewJobForm {
  title: string;
  company: string;
  column: string;
}

export interface DeleteTarget {
  colId: string;
  jobId: string;
}
