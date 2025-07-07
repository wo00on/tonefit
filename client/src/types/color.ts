export type PersonalColorType = 'spring' | 'summer' | 'autumn' | 'winter';

export interface PantoneColor {
  name: string;
  hex: string;
  spring: string[];
  summer: string[];
  autumn: string[];
  winter: string[];
}

export interface ColorData {
  [year: string]: PantoneColor;
}

export interface OutfitRecommendation {
  id: string;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
  imageUrl: string;
  colors: string[];
  tags: { ko: string; en: string }[];
  personalColorType: PersonalColorType;
}

export interface PersonalColorInfo {
  type: PersonalColorType;
  displayName: string;
  description: string;
  characteristics: string[];
  icon: string;
}
