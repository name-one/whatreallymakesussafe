
export class Section {
  navTitle: SectionType;
  header: string;
  questions: Question[];
  type: DataModelType;
}

export interface Question {
  title: string;
  question: string;
  quotes: Quote[];
}

export interface Quote {
  tagline: string;
  quote: string;
  personId: number;
}

export interface Person {
  id: number;
  name: string;
  shortName: string;
  color: string;
  fontColor: string;
}

export type SectionType = 'What is ca-tj?' | 'Survivors' | 'Perpetrators' | 'Community'
  | 'Survivors/Principles' | 'Perpetrators/Principles' | 'About';
export type DataModelType = 'PRINCIPLE' | 'PRAXIS';
