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
    'category.lipstick': '립스틱',
    'category.glasses': '안경',
    
    // Common
    'common.loading': '로딩 중...',
    'common.error': '오류가 발생했습니다',
    
    // Footer
    'footer.company': 'TONEFIT',
    'footer.description': '퍼스널 컬러 분석 X 펜톤 컬러 조합을 통해 당신만의 완벽한 스타일을 찾아보세요.',
    'footer.pantoneDesc': '2020-2025 펜톤 컬러와 조화로운 팔레트를 제공합니다.',
    'footer.services': '서비스',
    'footer.personalColorDiagnosis': '퍼스널 컬러 진단',
    'footer.colorPalette': '컬러 팔레트',
    'footer.stylingGuide': '스타일링 가이드',
    'footer.support': '고객 지원',
    'footer.faq': '자주 묻는 질문',
    'footer.contact': '문의하기',
    'footer.privacy': '개인정보처리방침',
    'footer.copyright': '© 2024 TONEFIT. All rights reserved.',
    
    // Color Guide specific
    'colorGuide.personalColor.title': '퍼스널 컬러란?',
    'colorGuide.personalColor.desc': '개인의 타고난 신체적 특징(피부톤, 모발, 눈동자)에 조화롭게 어울리는 색상을 의미합니다.',
    'colorGuide.personalColor.subtitle': '4가지 계절로 분류되며, 각각 고유한 특성과 매력을 가지고 있습니다.',
    'colorGuide.pantoneColor.title': '펜톤 컬러란?',
    'colorGuide.pantoneColor.desc': '팬톤(Pantone)은 매년 발표되는 트렌드 컬러로 패션, 그래픽, 제품 디자인 등 다양한 분야에서 색상 표준으로 사용됩니다.',
    'colorGuide.pantoneColor.subtitle': '전 세계 디자이너들이 참고하는 권위 있는 컬러 가이드라인이며, 시대의 감성과 트렌드를 반영합니다.',
    'colorGuide.pantoneFeatures.title': '펜톤 컬러의 특징',
    'colorGuide.pantoneFeatures.global': '글로벌 표준',
    'colorGuide.pantoneFeatures.globalDesc': '전 세계 통용되는 색상 표준 시스템',
    'colorGuide.pantoneFeatures.trend': '트렌드 반영',
    'colorGuide.pantoneFeatures.trendDesc': '시대적 감성과 문화적 트렌드 포함',
    'colorGuide.pantoneFeatures.usage': '다양한 활용',
    'colorGuide.pantoneFeatures.usageDesc': '패션, 인테리어, 브랜딩 등 폭넓은 적용',
    
    // Quiz specific
    'quiz.title': '퍼스널 컬러 진단 키트',
    'quiz.subtitle': '간단한 질문으로 나만의 퍼스널 컬러를 찾아보세요',
    'quiz.progress': '진행률',
    'quiz.question1': '거울을 보았을 때, 나의 피부톤은?',
    'quiz.q1.option1': '황금빛이 도는 따뜻한 피부',
    'quiz.q1.option2': '핑크빛이 도는 차가운 피부',
    'quiz.q1.option3': '노란빛이 강한 따뜻한 피부',
    'quiz.q1.option4': '창백하고 차가운 피부',
    'quiz.question2': '나의 자연스러운 모발 색상은?',
    'quiz.q2.option1': '밝은 갈색 또는 금발',
    'quiz.q2.option2': '애쉬 브라운 또는 회갈색',
    'quiz.q2.option3': '진한 갈색 또는 적갈색',
    'quiz.q2.option4': '검은색 또는 다크 브라운',
    'quiz.question3': '나의 눈동자 색상은?',
    'quiz.q3.option1': '밝은 갈색 또는 헤이즐',
    'quiz.q3.option2': '회색 또는 파란색',
    'quiz.q3.option3': '짙은 갈색 또는 호박색',
    'quiz.q3.option4': '검은색 또는 진한 갈색',
    'quiz.question4': '어떤 색상을 입을 때 가장 생기있어 보인다는 말을 듣나요?',
    'quiz.q4.option1': '코랄, 피치, 밝은 오렌지',
    'quiz.q4.option2': '라벤더, 소프트 핑크, 파스텔 블루',
    'quiz.q4.option3': '테라코타, 올리브 그린, 머스타드',
    'quiz.q4.option4': '로얄 블루, 에메랄드, 퓨어 화이트',
    'quiz.question5': '금속 액세서리 중 어떤 것이 더 잘 어울리나요?',
    'quiz.q5.option1': '골드 계열',
    'quiz.q5.option2': '실버 계열',
    'quiz.q5.option3': '둘 다 비슷하게 어울림',
    'quiz.q5.option4': '잘 모르겠음',
    'quiz.result.title': '진단 완료!',
    'quiz.result.subtitle': '당신의 퍼스널 컬러 타입이 결정되었습니다',
    'quiz.result.spring.title': '봄웜 (Spring)',
    'quiz.result.spring.desc': '밝고 화사한 웜톤으로, 생기 있고 활동적인 매력을 가지고 있습니다.',
    'quiz.result.summer.title': '여름쿨 (Summer)',
    'quiz.result.summer.desc': '부드럽고 시원한 쿨톤으로, 차분하고 우아한 매력을 가지고 있습니다.',
    'quiz.result.autumn.title': '가을웜 (Autumn)',
    'quiz.result.autumn.desc': '깊고 따뜻한 웜톤으로, 안정감 있고 성숙한 매력을 가지고 있습니다.',
    'quiz.result.winter.title': '겨울쿨 (Winter)',
    'quiz.result.winter.desc': '선명하고 차가운 쿨톤으로, 강렬하고 도시적인 매력을 가지고 있습니다.',
    'quiz.result.colors': '추천 컬러',
    'quiz.result.viewDetails': '상세 결과 보기',
    'quiz.result.restart': '다시 진단하기',
    
    // ColorSelector
    'colorSelector.title': '퍼스널 컬러 타입을 선택하세요',
    'colorSelector.subtitle': '각 계절별 특성에 맞는 컬러 팔레트를 제공해드립니다',
    'colorSelector.spring': '봄웜 (Spring)',
    'colorSelector.summer': '여름쿨 (Summer)',
    'colorSelector.autumn': '가을웜 (Autumn)',
    'colorSelector.winter': '겨울쿨 (Winter)',
    'colorSelector.spring.desc': '밝고 화사한 웜톤',
    'colorSelector.summer.desc': '부드럽고 시원한 쿨톤',
    'colorSelector.autumn.desc': '깊고 따뜻한 웜톤',
    'colorSelector.winter.desc': '선명하고 차가운 쿨톤',
    'colorSelector.spring.detail': '선명하고 따뜻한 컬러',
    'colorSelector.summer.detail': '부드럽고 차가운 컬러',
    'colorSelector.autumn.detail': '깊고 진한 웜 컬러',
    'colorSelector.winter.detail': '선명하고 강한 컬러',
    
    // Results page
    'results.recommendedColors': '추천 조화 컬러',
    'results.styleItems': '추천 스타일 아이템',
    'results.subtitle': '타입에 어울리는 개별 아이템들을 확인해보세요',
    'results.outfitDesc': '전체적인 룩 완성을 위한 코디네이션 예시입니다',
    'results.share': '결과 공유하기',
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
    'category.lipstick': 'Lipstick',
    'category.glasses': 'Glasses',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    
    // Footer
    'footer.company': 'TONEFIT',
    'footer.description': 'Discover your perfect style through personal color analysis combined with Pantone color palettes.',
    'footer.pantoneDesc': 'We provide harmonious palettes with Pantone Colors from 2020-2025.',
    'footer.services': 'Services',
    'footer.personalColorDiagnosis': 'Personal Color Analysis',
    'footer.colorPalette': 'Color Palette',
    'footer.stylingGuide': 'Styling Guide',
    'footer.support': 'Customer Support',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2024 TONEFIT. All rights reserved.',
    
    // Color Guide specific
    'colorGuide.personalColor.title': 'What is Personal Color?',
    'colorGuide.personalColor.desc': 'Colors that harmoniously match an individual\'s natural physical characteristics (skin tone, hair, eyes).',
    'colorGuide.personalColor.subtitle': 'Classified into 4 seasons, each with unique characteristics and charm.',
    'colorGuide.pantoneColor.title': 'What is Pantone Color?',
    'colorGuide.pantoneColor.desc': 'Pantone is an annual trend color used as a color standard in various fields such as fashion, graphics, and product design.',
    'colorGuide.pantoneColor.subtitle': 'An authoritative color guideline referenced by designers worldwide, reflecting the emotions and trends of the times.',
    'colorGuide.pantoneFeatures.title': 'Features of Pantone Color',
    'colorGuide.pantoneFeatures.global': 'Global Standard',
    'colorGuide.pantoneFeatures.globalDesc': 'Universally accepted color standard system',
    'colorGuide.pantoneFeatures.trend': 'Trend Reflection',
    'colorGuide.pantoneFeatures.trendDesc': 'Includes contemporary emotions and cultural trends',
    'colorGuide.pantoneFeatures.usage': 'Diverse Applications',
    'colorGuide.pantoneFeatures.usageDesc': 'Wide application in fashion, interior, branding, etc.',
    
    // Quiz specific
    'quiz.title': 'Personal Color Diagnosis Kit',
    'quiz.subtitle': 'Find your personal color through simple questions',
    'quiz.progress': 'Progress',
    'quiz.question1': 'When looking in the mirror, what is your skin tone?',
    'quiz.q1.option1': 'Golden warm skin',
    'quiz.q1.option2': 'Pink cool skin',
    'quiz.q1.option3': 'Strong yellow warm skin',
    'quiz.q1.option4': 'Pale cool skin',
    'quiz.question2': 'What is your natural hair color?',
    'quiz.q2.option1': 'Light brown or blonde',
    'quiz.q2.option2': 'Ash brown or gray-brown',
    'quiz.q2.option3': 'Dark brown or reddish brown',
    'quiz.q2.option4': 'Black or dark brown',
    'quiz.question3': 'What is your eye color?',
    'quiz.q3.option1': 'Light brown or hazel',
    'quiz.q3.option2': 'Gray or blue',
    'quiz.q3.option3': 'Dark brown or amber',
    'quiz.q3.option4': 'Black or very dark brown',
    'quiz.question4': 'Which colors make you look most vibrant?',
    'quiz.q4.option1': 'Coral, peach, bright orange',
    'quiz.q4.option2': 'Lavender, soft pink, pastel blue',
    'quiz.q4.option3': 'Terracotta, olive green, mustard',
    'quiz.q4.option4': 'Royal blue, emerald, pure white',
    'quiz.question5': 'Which metal accessories suit you better?',
    'quiz.q5.option1': 'Gold tones',
    'quiz.q5.option2': 'Silver tones',
    'quiz.q5.option3': 'Both suit me similarly',
    'quiz.q5.option4': 'I\'m not sure',
    'quiz.result.title': 'Diagnosis Complete!',
    'quiz.result.subtitle': 'Your personal color type has been determined',
    'quiz.result.spring.title': 'Spring Warm',
    'quiz.result.spring.desc': 'Bright and vibrant warm tones with lively and active charm.',
    'quiz.result.summer.title': 'Summer Cool',
    'quiz.result.summer.desc': 'Soft and cool tones with calm and elegant charm.',
    'quiz.result.autumn.title': 'Autumn Warm',
    'quiz.result.autumn.desc': 'Deep and warm tones with stable and mature charm.',
    'quiz.result.winter.title': 'Winter Cool',
    'quiz.result.winter.desc': 'Clear and cool tones with strong and sophisticated charm.',
    'quiz.result.colors': 'Recommended Colors',
    'quiz.result.viewDetails': 'View Detailed Results',
    'quiz.result.restart': 'Restart Diagnosis',
    
    // ColorSelector
    'colorSelector.title': 'Select Your Personal Color Type',
    'colorSelector.subtitle': 'We provide color palettes tailored to each seasonal characteristic',
    'colorSelector.spring': 'Spring Warm',
    'colorSelector.summer': 'Summer Cool',
    'colorSelector.autumn': 'Autumn Warm',
    'colorSelector.winter': 'Winter Cool',
    'colorSelector.spring.desc': 'Bright and vibrant warm tones',
    'colorSelector.summer.desc': 'Soft and cool tones',
    'colorSelector.autumn.desc': 'Deep and warm tones',
    'colorSelector.winter.desc': 'Clear and cool tones',
    'colorSelector.spring.detail': 'Clear and warm colors',
    'colorSelector.summer.detail': 'Soft and cool colors',
    'colorSelector.autumn.detail': 'Deep and rich warm colors',
    'colorSelector.winter.detail': 'Clear and strong colors',
    
    // Results page
    'results.recommendedColors': 'Recommended Harmony Colors',
    'results.styleItems': 'Recommended Style Items',
    'results.subtitle': 'Check out individual items that suit your type',
    'results.outfitDesc': 'Complete outfit coordination examples for your look',
    'results.share': 'Share Results',
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