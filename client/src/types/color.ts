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
  title: string;
  description: string;
  imageUrl: string;
  colors: string[];
  tags: string[];
  personalColorType: PersonalColorType;
}

export interface PersonalColorInfo {
  type: PersonalColorType;
  displayName: string;
  description: string;
  characteristics: string[];
  icon: string;
  bgColor: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
}
