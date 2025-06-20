import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.colorGuide': '컬러 가이드',
    'nav.quiz': '퀴즈',
    
    // Home Page
    'home.title': 'TONEFIT이 제안하는 퍼스널 × 펜톤 컬러 매칭',
    'home.subtitle': '당신만의 퍼스널 컬러와 2020-2025 펜톤 트렌드 컬러의 완벽한 조화를 찾아보세요',
    'home.cta': '컬러 매칭 시작하기 →',
    'home.features.title': '왜 TONEFIT을 선택해야 할까요?',
    'home.features.personal.title': '퍼스널 컬러 분석',
    'home.features.personal.desc': '봄, 여름, 가을, 겨울 타입별 맞춤 컬러 팔레트',
    'home.features.pantone.title': '펜톤 트렌드 연동',
    'home.features.pantone.desc': '2020-2025년 펜톤 올해의 컬러와 매칭',
    'home.features.style.title': '스타일 추천',
    'home.features.style.desc': '개인 맞춤형 패션 아이템 및 코디 제안',
    
    // Color Guide Page
    'colorGuide.title': '컬러 가이드',
    'colorGuide.subtitle': '퍼스널 컬러와 펜톤 컬러의 완벽한 조화',
    'colorGuide.intro.title': 'TONEFIT 소개',
    'colorGuide.intro.desc': 'TONEFIT은 개인의 퍼스널 컬러와 펜톤의 트렌드 컬러를 결합하여 최적의 컬러 매칭을 제공합니다.',
    'colorGuide.pantone.title': '펜톤 올해의 컬러 (2020-2025)',
    'colorGuide.cta.title': '나만의 컬러 매칭 시작해보세요',
    'colorGuide.cta.desc': '퍼스널 컬러와 펜톤 컬러의 완벽한 조화를 경험해보세요',
    'colorGuide.cta.button': '시작하기',
    
    // Quiz Page
    'quiz.title': '퍼스널 컬러 테스트',
    'quiz.subtitle': '간단한 질문으로 당신의 퍼스널 컬러를 찾아보세요',
    'quiz.question': '질문',
    'quiz.next': '다음',
    'quiz.result': '결과 보기',
    'quiz.restart': '다시 시작',
    
    // Results Page
    'results.yourType': '당신의 퍼스널 컬러 타입',
    'results.pantoneColors': '추천 펜톤 컬러',
    'results.styleItems': '추천 스타일 아이템',
    'results.outfits': '코디 추천',
    'results.backToHome': '홈으로 돌아가기',
    
    // Personal Color Types
    'personalColor.spring': '봄 웜톤',
    'personalColor.summer': '여름 쿨톤',
    'personalColor.autumn': '가을 웜톤',
    'personalColor.winter': '겨울 쿨톤',
    
    // Categories
    'category.tops': '상의',
    'category.bottoms': '하의',
    'category.outerwear': '아우터',
    'category.dresses': '원피스',
    'category.accessories': '액세서리',
    'category.shoes': '신발',
    'category.bags': '가방',
    
    // Common
    'common.loading': '로딩 중...',
    'common.error': '오류가 발생했습니다',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.colorGuide': 'Color Guide',
    'nav.quiz': 'Quiz',
    
    // Home Page
    'home.title': 'Personal × Pantone Color Matching by TONEFIT',
    'home.subtitle': 'Discover the perfect harmony between your personal colors and Pantone trend colors from 2020-2025',
    'home.cta': 'Start Color Matching →',
    'home.features.title': 'Why Choose TONEFIT?',
    'home.features.personal.title': 'Personal Color Analysis',
    'home.features.personal.desc': 'Customized color palettes for Spring, Summer, Autumn, Winter types',
    'home.features.pantone.title': 'Pantone Trend Integration',
    'home.features.pantone.desc': 'Matched with Pantone Color of the Year 2020-2025',
    'home.features.style.title': 'Style Recommendations',
    'home.features.style.desc': 'Personalized fashion items and outfit suggestions',
    
    // Color Guide Page
    'colorGuide.title': 'Color Guide',
    'colorGuide.subtitle': 'Perfect harmony of personal colors and Pantone colors',
    'colorGuide.intro.title': 'About TONEFIT',
    'colorGuide.intro.desc': 'TONEFIT provides optimal color matching by combining individual personal colors with Pantone trend colors.',
    'colorGuide.pantone.title': 'Pantone Color of the Year (2020-2025)',
    'colorGuide.cta.title': 'Start Your Personal Color Matching',
    'colorGuide.cta.desc': 'Experience the perfect harmony of personal colors and Pantone colors',
    'colorGuide.cta.button': 'Get Started',
    
    // Quiz Page
    'quiz.title': 'Personal Color Test',
    'quiz.subtitle': 'Find your personal color through simple questions',
    'quiz.question': 'Question',
    'quiz.next': 'Next',
    'quiz.result': 'View Results',
    'quiz.restart': 'Restart',
    
    // Results Page
    'results.yourType': 'Your Personal Color Type',
    'results.pantoneColors': 'Recommended Pantone Colors',
    'results.styleItems': 'Recommended Style Items',
    'results.outfits': 'Outfit Recommendations',
    'results.backToHome': 'Back to Home',
    
    // Personal Color Types
    'personalColor.spring': 'Spring Warm',
    'personalColor.summer': 'Summer Cool',
    'personalColor.autumn': 'Autumn Warm',
    'personalColor.winter': 'Winter Cool',
    
    // Categories
    'category.tops': 'Tops',
    'category.bottoms': 'Bottoms',
    'category.outerwear': 'Outerwear',
    'category.dresses': 'Dresses',
    'category.accessories': 'Accessories',
    'category.shoes': 'Shoes',
    'category.bags': 'Bags',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}