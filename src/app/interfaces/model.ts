export interface SocialService {
  serviceName: string;
  serviceDescription: string;
  serviceCategory: string[];
  beneficiary: string[];
  provider: string;
  location?: string;
  region: string[];
  email: string;
  phone: string;
  address: string;
  singleUse: boolean;
  healthRequirement?: string[];
  familyRequirement?: string[];
  documentation?: string[];
  ageRestriction?: {
    min: number,
    max: number,
  };
  benefit?: string;
  yearSpecific?: boolean;
  educationRequirement?: string[];
  diagnoses?: string[];
  index: number;
  link?:string;
  parentRequirement?: string[];
  individualRequirement?: string[];
}

export enum AppState {
  MAIN = 'Main',
  EXPLORE = 'Explore',
  QUIZ = 'Quiz',
  ABOUT = 'About',
}

export enum exploreFilter {
  CATEGORY = 'Category',
  CITY = 'City',
  REGION = 'Region',
}

export enum scheme {
  CATEGORY = 'Category',
  CITY = 'City',
  REGION = 'Region',
  KEYWORD = 'Keyword',
  CATEGORY_CITY = 'Category & City',
}

export enum quizState {
  HEALTH = 'Health',
  PARENTS = 'Parents',
  STATUS = 'Status',
  FAMILY = 'Family',
  CITY = 'City',
}

export interface quizAnswers {
  health?: string[];
  parents?: string[];
  status?: string[];
  family?: string[];
  city: string[];
}
