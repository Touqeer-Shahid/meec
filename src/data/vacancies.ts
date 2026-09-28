export type Vacancy = {
  id: string;
  title: string;
  department?: string;
  location?: string;
  employmentType?: string;
  experience?: string;
  qualification?: string;
  description?: string;
  requirements?: string[];
};

/**
 * Current openings at MEEC.
 * Add objects to this array to publish new vacancies — the Opportunities page
 * renders them automatically and shows an empty state when the list is empty.
 */
export const vacancies: Vacancy[] = [];
