
export enum CategorySlug {
  ROLSTAVNI = 'rolstavni',
  VOROTA = 'sekcionnye-vorota',
  ZHALYUZI = 'zhalyuzi',
  SHTORY = 'rulonnye-shtory'
}

export interface CaseStudy {
  id: string;
  slug: string;
  category: CategorySlug;
  title: string;
  location: string;
  coords?: {
    lat: number;
    lng: number;
  };
  clientType: 'private' | 'commercial';
  problem: string;
  task: string;
  solution: string;
  materials: string[];
  results: {
    timeline: string;
    effect: string;
  };
  mainImage: string;
  gallery: string[];
  videoUrl?: string;
  clientFeedback?: {
    author: string;
    text: string;
    rating: number;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  items: FAQItem[];
}

export interface PlatformReview {
  id: string;
  platform: 'yandex' | 'avito';
  author: string;
  text: string;
  date: string;
  rating: number;
  avatarLetter: string;
}
