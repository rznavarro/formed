export interface Specialty {
  id: string;
  name: string;
  professionalsCount: number;
  fonasaPricePresencial?: string;
  fonasaPriceOnline?: string;
  notes?: string;
  iconName: 'brain' | 'baby' | 'sparkles' | 'activity' | 'heart' | 'user-check';
}

export interface LocationItem {
  id: string;
  name: string;
  fullName: string;
  address: string;
  city: string;
  region: string;
  mapUrl: string;
  phone?: string;
  missingHoursNotice: string;
  photoPlaceholder: string;
}

export interface ReviewItem {
  name: string;
  rating: number;
  comment: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface OnlinePriceItem {
  specialty: string;
  fonasaCopay: string;
  particularPrice: string;
}
