export type MenuCategory = 'Coffee' | 'Non-Coffee' | 'Breakfast' | 'Brunch' | 'Desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: number; // in MYR (RM)
  tags?: string[];
  temperature?: 'Hot' | 'Iced' | 'Hot / Iced' | 'Hand Pour';
  isPopular?: boolean;
}

export interface SignatureItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  badge: string;
  flavorNotes: string[];
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'Atmosphere' | 'Coffee' | 'Food' | 'Details';
  image: string;
  imageAlt: string;
  orientation: 'landscape' | 'portrait' | 'square';
}

export interface CafeSchedule {
  days: string;
  hours: string;
  note?: string;
}

export interface CafeInfo {
  name: string;
  subname: string;
  locationTag: string;
  addressLine1: string;
  addressLine2: string;
  area: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  fullAddress: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappUrl: string;
  googleMapsUrl: string;
  instagram: string;
  facebook: string;
  schedules: CafeSchedule[];
}
