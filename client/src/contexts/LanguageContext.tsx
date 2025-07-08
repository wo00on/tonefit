import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// 중복 키 자동 정리: 마지막 값만 남김
const translations = {
  ko: {
    // Navigation
    "nav.home": "홈",
    "nav.colorGuide": "컬러 가이드",
    "nav.quiz": "퍼스널 컬러 진단 키트",
    "nav.login": "로그인",
    "nav.feed": "피드",
    "nav.mypage": "마이페이지",

    // Home Page
    "home.title": '<span class="text-white font-black">TONEFIT</span>이 제안하는 <span class="text-white font-black">퍼스널</span> × <span class="text-white font-black">펜톤</span> 컬러 매칭',
    "home.subtitle":
      '당신만의 <span class="text-white font-bold">퍼스널 컬러</span>와 2020-2025 <span class="text-white font-bold">펜톤</span> 트렌드 컬러의 조화를 찾아보세요',
    "home.cta": "컬러 매칭 시작하기 →",
    "home.features.title": "왜 TONEFIT을 선택해야 할까요?",
    "home.features.personal.title": "퍼스널 컬러 분석",
    "home.features.personal.desc":
      "봄, 여름, 가을, 겨울 타입별 맞춤 컬러 팔레트",
    "home.features.pantone.title": "펜톤 트렌드 연동",
    "home.features.pantone.desc": "2020-2025년 펜톤 올해의 컬러와 매칭",
    "home.features.style.title": "스타일 추천",
    "home.features.style.desc": "개인 맞춤형 패션 아이템 및 코디 제안",

    // Color Guide Page
    "colorGuide.title": "컬러 가이드",
    "colorGuide.subtitle": "퍼스널 컬러와 펜톤 컬러의 완벽한 조화",
    "colorGuide.intro.title": "TONEFIT 소개",
    "colorGuide.intro.desc":
      "TONEFIT은 개인의 퍼스널 컬러와 펜톤의 트렌드 컬러를 결합하여 최적의 컬러 매칭을 제공합니다.",
    "colorGuide.pantone.title": "펜톤 올해의 컬러 (2020-2025)",
    "colorGuide.cta.title": "나만의 컬러 매칭 시작해보세요",
    "colorGuide.cta.desc":
      "퍼스널 컬러와 펜톤 컬러의 완벽한 조화를 경험해보세요",
    "colorGuide.cta.button": "시작하기",
    "colorGuide.personalColor.title": "퍼스널 컬러란?",
    "colorGuide.personalColor.desc":
      "개인의 타고난 신체적 특징(피부톤, 모발, 눈동자)에 조화롭게 어울리는 색상을 의미합니다.",
    "colorGuide.personalColor.subtitle":
      "4가지 계절로 분류되며, 각각 고유한 특성과 매력을 가지고 있습니다.",
    "colorGuide.pantoneColor.title": "펜톤 컬러란?",
    "colorGuide.pantoneColor.desc":
      "팬톤(Pantone)은 매년 발표되는 트렌드 컬러로 패션, 그래픽, 제품 디자인 등 다양한 분야에서 색상 표준으로 사용됩니다.",
    "colorGuide.pantoneColor.subtitle":
      "전 세계 디자이너들이 참고하는 권위 있는 컬러 가이드라인이며, 시대의 감성과 트렌드를 반영합니다.",
    "colorGuide.pantoneFeatures.title": "펜톤 컬러의 특징",
    "colorGuide.pantoneFeatures.global": "글로벌 표준",
    "colorGuide.pantoneFeatures.globalDesc":
      "전 세계 통용되는 색상 표준 시스템",
    "colorGuide.pantoneFeatures.trend": "트렌드 반영",
    "colorGuide.pantoneFeatures.trendDesc": "시대적 감성과 문화적 트렌드 포함",
    "colorGuide.pantoneFeatures.usage": "다양한 활용",
    "colorGuide.pantoneFeatures.usageDesc":
      "패션, 인테리어, 브랜딩 등 폭넓은 적용",

    // Quiz specific
    "quiz.title": "퍼스널 컬러 진단 키트",
    "quiz.subtitle": "간단한 질문으로 나만의 퍼스널 컬러를 찾아보세요",
    "quiz.progress": "진행률",
    "quiz.question1": "거울을 보았을 때, 나의 피부톤은?",
    "quiz.q1.option1": "황금빛이 도는 따뜻한 피부",
    "quiz.q1.option2": "핑크빛이 도는 차가운 피부",
    "quiz.q1.option3": "노란빛이 강한 따뜻한 피부",
    "quiz.q1.option4": "창백하고 차가운 피부",
    "quiz.question2": "나의 자연스러운 모발 색상은?",
    "quiz.q2.option1": "밝은 갈색 또는 금발",
    "quiz.q2.option2": "애쉬 브라운 또는 회갈색",
    "quiz.q2.option3": "진한 갈색 또는 적갈색",
    "quiz.q2.option4": "검은색 또는 다크 브라운",
    "quiz.question3": "나의 눈동자 색상은?",
    "quiz.q3.option1": "밝은 갈색 또는 헤이즐",
    "quiz.q3.option2": "회색 또는 파란색",
    "quiz.q3.option3": "짙은 갈색 또는 호박색",
    "quiz.q3.option4": "검은색 또는 진한 갈색",
    "quiz.question4": "어떤 색상을 입을 때 가장 생기있어 보인다는 말을 듣나요?",
    "quiz.q4.option1": "코랄, 피치, 밝은 오렌지",
    "quiz.q4.option2": "라벤더, 소프트 핑크, 파스텔 블루",
    "quiz.q4.option3": "테라코타, 올리브 그린, 머스타드",
    "quiz.q4.option4": "로얄 블루, 에메랄드, 퓨어 화이트",
    "quiz.question5": "금속 액세서리 중 어떤 것이 더 잘 어울리나요?",
    "quiz.q5.option1": "골드 계열",
    "quiz.q5.option2": "실버 계열",
    "quiz.q5.option3": "둘 다 비슷하게 어울림",
    "quiz.q5.option4": "잘 모르겠음",
    "quiz.result.title": "진단 완료!",
    "quiz.result.subtitle": "당신의 퍼스널 컬러 타입이 결정되었습니다",
    "quiz.result.spring.title": "봄웜 (Spring)",
    "quiz.result.spring.desc":
      "밝고 화사한 웜톤으로, 생기 있고 활동적인 매력을 가지고 있습니다.",
    "quiz.result.summer.title": "여름쿨 (Summer)",
    "quiz.result.summer.desc":
      "부드럽고 시원한 쿨톤으로, 차분하고 우아한 매력을 가지고 있습니다.",
    "quiz.result.autumn.title": "가을웜 (Autumn)",
    "quiz.result.autumn.desc":
      "깊고 따뜻한 웜톤으로, 안정감 있고 성숙한 매력을 가지고 있습니다.",
    "quiz.result.winter.title": "겨울쿨 (Winter)",
    "quiz.result.winter.desc":
      "선명하고 차가운 쿨톤으로, 강렬하고 도시적인 매력을 가지고 있습니다.",
    "quiz.result.colors": "추천 컬러",
    "quiz.result.viewDetails": "상세 결과 보기",
    "quiz.result.restart": "다시 진단하기",

    // ColorSelector
    "colorSelector.title": "퍼스널 컬러 타입을 선택하세요",
    "colorSelector.subtitle":
      "각 계절별 특성에 맞는 컬러 팔레트를 제공해드립니다",
    "colorSelector.spring": "봄웜 (Spring)",
    "colorSelector.summer": "여름쿨 (Summer)",
    "colorSelector.autumn": "가을웜 (Autumn)",
    "colorSelector.winter": "겨울쿨 (Winter)",
    "colorSelector.spring.detail": "선명하고 따뜻한 컬러",
    "colorSelector.summer.detail": "부드럽고 차가운 컬러",
    "colorSelector.autumn.detail": "깊고 진한 웜 컬러",
    "colorSelector.winter.detail": "선명하고 강한 컬러",

    // Results page
    "results.recommendedColors": "추천 조화 컬러",
    "results.styleItems": "추천 스타일 아이템",
    "results.subtitle": "타입에 어울리는 개별 아이템들을 확인해보세요",
    "results.outfitDesc": "전체적인 룩 완성을 위한 코디네이션 예시입니다",
    "results.share": "결과 공유하기",
    "results.invalidAccess": "잘못된 접근입니다",
    "results.copiedToClipboard": "결과가 클립보드에 복사되었습니다!",
    "results.shareTitle": "TONEFIT 퍼스널 컬러 결과",
    "results.shareText": "나의 퍼스널 컬러는",
    "results.yourType": "당신의 퍼스널 컬러 타입",
    "results.pantoneColors": "추천 펜톤 컬러",
    "results.outfits": "코디 추천",
    "results.backToHome": "홈으로 돌아가기",

    // Personal Color Types
    "personalColor.spring": "봄 웜톤",
    "personalColor.spring.desc": "밝고 화사한 웜톤으로, 생기 있고 활동적인 느낌을 주는 컬러입니다.",
    "personalColor.spring.char1": "맑고 선명한 색상",
    "personalColor.spring.char2": "따뜻한 노란 기조",
    "personalColor.spring.char3": "밝고 생동감 있는 톤",
    "personalColor.summer": "여름 쿨톤",
    "personalColor.summer.desc": "부드럽고 시원한 쿨톤으로, 차분하고 우아한 느낌을 주는 컬러입니다.",
    "personalColor.summer.char1": "부드럽고 차분한 색상",
    "personalColor.summer.char2": "시원한 파란 기조",
    "personalColor.summer.char3": "연하고 깔끔한 톤",
    "personalColor.autumn": "가을 웜톤",
    "personalColor.autumn.desc": "깊고 따뜻한 웜톤으로, 안정감 있고 성숙한 느낌을 주는 컬러입니다.",
    "personalColor.autumn.char1": "깊고 진한 색상",
    "personalColor.autumn.char2": "따뜻한 황금 기조",
    "personalColor.autumn.char3": "풍부하고 고급스러운 톤",
    "personalColor.winter": "겨울 쿨톤",
    "personalColor.winter.desc": "선명하고 차가운 쿨톤으로, 강렬하고 도시적인 느낌을 주는 컬러입니다.",
    "personalColor.winter.char1": "선명하고 강한 색상",
    "personalColor.winter.char2": "차가운 파란 기조",
    "personalColor.winter.char3": "클리어하고 대비가 강한 톤",

    // Categories
    "category.tops": "상의",
    "category.bottoms": "하의",
    "category.outerwear": "아우터",
    "category.dresses": "원피스",
    "category.accessories": "액세서리",
    "category.shoes": "신발",
    "category.bags": "가방",
    "category.lipstick": "립스틱",
    "category.glasses": "안경",

    // Common
    "common.loading": "로딩 중...",
    "common.error": "오류가 발생했습니다",

    // Footer
    "footer.company": "TONEFIT",
    "footer.description":
      "퍼스널 컬러 분석 X 펜톤 컬러 조합을 통해 당신만의 완벽한 스타일을 찾아보세요.",
    "footer.pantoneDesc": "2020-2025 펜톤 컬러와 조화로운 팔레트를 제공합니다.",
    "footer.services": "서비스",
    "footer.personalColorDiagnosis": "퍼스널 컬러 진단",
    "footer.colorPalette": "컬러 팔레트",
    "footer.stylingGuide": "스타일링 가이드",
    "footer.support": "고객 지원",
    "footer.faq": "자주 묻는 질문",
    "footer.contact": "문의하기",
    "footer.privacy": "개인정보처리방침",
    "footer.copyright": "© 2024 TONEFIT. All rights reserved.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.colorGuide": "Color Guide",
    "nav.quiz": "Personal Color Diagnosis",
    "nav.login": "Login",
    "nav.feed": "Feed",
    "nav.mypage": "My Page",

    // Home Page
    "home.title": '<span class="text-white font-black">TONEFIT</span> Personal × <span class="text-white font-black">Pantone</span> Color Matching',
    "home.subtitle":
      'Discover the perfect harmony between your <span class="text-white font-bold">personal colors</span> and <span class="text-white font-bold">Pantone</span> trend colors from 2020-2025',
    "home.cta": "Start Color Matching →",
    "home.features.title": "Why Choose TONEFIT?",
    "home.features.personal.title": "Personal Color Analysis",
    "home.features.personal.desc":
      "Customized color palettes for Spring, Summer, Autumn, Winter types",
    "home.features.pantone.title": "Pantone Trend Integration",
    "home.features.pantone.desc":
      "Matched with Pantone Color of the Year 2020-2025",
    "home.features.style.title": "Style Recommendations",
    "home.features.style.desc":
      "Personalized fashion items and outfit suggestions",

    // Color Guide Page
    "colorGuide.title": "Color Guide",
    "colorGuide.subtitle":
      "Perfect harmony of personal colors and Pantone colors",
    "colorGuide.intro.title": "About TONEFIT",
    "colorGuide.intro.desc":
      "TONEFIT provides optimal color matching by combining individual personal colors with Pantone trend colors.",
    "colorGuide.pantone.title": "Pantone Color of the Year (2020-2025)",
    "colorGuide.cta.title": "Start Your Personal Color Matching",
    "colorGuide.cta.desc":
      "Experience the perfect harmony of personal colors and Pantone colors",
    "colorGuide.cta.button": "Get Started",
    "colorGuide.personalColor.title": "What is Personal Color?",
    "colorGuide.personalColor.desc":
      "Colors that harmoniously match an individual's natural physical characteristics (skin tone, hair, eyes).",
    "colorGuide.personalColor.subtitle":
      "Classified into 4 seasons, each with unique characteristics and charm.",
    "colorGuide.pantoneColor.title": "What is Pantone Color?",
    "colorGuide.pantoneColor.desc":
      "Pantone is an annual trend color used as a color standard in various fields such as fashion, graphics, and product design.",
    "colorGuide.pantoneColor.subtitle":
      "A prestigious color guideline referenced by designers worldwide, reflecting the sensibility and trends of the times.",
    "colorGuide.pantoneFeatures.title": "Pantone Color Features",
    "colorGuide.pantoneFeatures.global": "Global Standard",
    "colorGuide.pantoneFeatures.globalDesc":
      "A color standard system used worldwide",
    "colorGuide.pantoneFeatures.trend": "Trend Reflection",
    "colorGuide.pantoneFeatures.trendDesc": "Includes contemporary sensibility and cultural trends",
    "colorGuide.pantoneFeatures.usage": "Various Applications",
    "colorGuide.pantoneFeatures.usageDesc":
      "Widely used in fashion, interior, branding, and more",

    // Quiz specific
    "quiz.title": "Personal Color Test",
    "quiz.subtitle": "Find your personal color through simple questions",
    "quiz.question": "Question",
    "quiz.next": "Next",
    "quiz.result": "View Results",
    "quiz.restart": "Restart",
    "quiz.progress": "Progress",
    "quiz.question1": "When you look in the mirror, what is your skin tone?",
    "quiz.q1.option1": "Warm skin with a golden hue",
    "quiz.q1.option2": "Cool skin with a pink hue",
    "quiz.q1.option3": "Warm skin with a strong yellow hue",
    "quiz.q1.option4": "Pale and cool skin",
    "quiz.question2": "What is your natural hair color?",
    "quiz.q2.option1": "Light brown or blonde",
    "quiz.q2.option2": "Ash brown or grayish brown",
    "quiz.q2.option3": "Dark brown or reddish brown",
    "quiz.q2.option4": "Black or dark brown",
    "quiz.question3": "What is your eye color?",
    "quiz.q3.option1": "Light brown or hazel",
    "quiz.q3.option2": "Gray or blue",
    "quiz.q3.option3": "Dark brown or amber",
    "quiz.q3.option4": "Black or deep brown",
    "quiz.question4": "Which colors do people say make you look most lively?",
    "quiz.q4.option1": "Coral, peach, bright orange",
    "quiz.q4.option2": "Lavender, soft pink, pastel blue",
    "quiz.q4.option3": "Terracotta, olive green, mustard",
    "quiz.q4.option4": "Royal blue, emerald, pure white",
    "quiz.question5": "Which metal accessories suit you better?",
    "quiz.q5.option1": "Gold",
    "quiz.q5.option2": "Silver",
    "quiz.q5.option3": "Both suit equally",
    "quiz.q5.option4": "Not sure",
    "quiz.result.title": "Diagnosis Complete!",
    "quiz.result.subtitle": "Your personal color type has been determined",
    "quiz.result.spring.title": "Spring Warm",
    "quiz.result.spring.desc":
      "A bright and lively warm tone that gives a vibrant and active impression.",
    "quiz.result.summer.title": "Summer Cool",
    "quiz.result.summer.desc":
      "A soft and cool tone that gives a calm and elegant impression.",
    "quiz.result.autumn.title": "Autumn Warm",
    "quiz.result.autumn.desc":
      "A deep and warm tone that gives a sense of stability and maturity.",
    "quiz.result.winter.title": "Winter Cool",
    "quiz.result.winter.desc":
      "A clear and cold cool tone that gives a strong and urban impression.",
    "quiz.result.colors": "Recommended Colors",
    "quiz.result.viewDetails": "View Details",
    "quiz.result.restart": "Restart Diagnosis",

    // ColorSelector
    "colorSelector.title": "Select Your Personal Color Type",
    "colorSelector.subtitle":
      "We provide color palettes tailored to each season's characteristics",
    "colorSelector.spring": "Spring Warm",
    "colorSelector.summer": "Summer Cool",
    "colorSelector.autumn": "Autumn Warm",
    "colorSelector.winter": "Winter Cool",
    "colorSelector.spring.detail": "Clear and warm colors",
    "colorSelector.summer.detail": "Soft and cool colors",
    "colorSelector.autumn.detail": "Deep and rich warm colors",
    "colorSelector.winter.detail": "Clear and strong colors",

    // Results page
    "results.recommendedColors": "Recommended Harmony Colors",
    "results.styleItems": "Recommended Style Items",
    "results.subtitle": "Check out the individual items that suit your type",
    "results.outfitDesc": "Examples of coordination for a complete look",
    "results.share": "Share Results",
    "results.invalidAccess": "Invalid access",
    "results.copiedToClipboard": "Results copied to clipboard!",
    "results.shareTitle": "TONEFIT Personal Color Result",
    "results.shareText": "My personal color is",
    "results.yourType": "Your Personal Color Type",
    "results.pantoneColors": "Recommended Pantone Colors",
    "results.outfits": "Outfit Recommendations",
    "results.backToHome": "Back to Home",

    // Personal Color Types
    "personalColor.spring": "Spring Warm",
    "personalColor.spring.desc": "A bright and lively warm tone that gives a vibrant and active impression.",
    "personalColor.spring.char1": "Clear and vivid colors",
    "personalColor.spring.char2": "Warm yellow base",
    "personalColor.spring.char3": "Bright and lively tone",
    "personalColor.summer": "Summer Cool",
    "personalColor.summer.desc": "A soft and cool tone that gives a calm and elegant impression.",
    "personalColor.summer.char1": "Soft and calm colors",
    "personalColor.summer.char2": "Cool blue base",
    "personalColor.summer.char3": "Light and clean tone",
    "personalColor.autumn": "Autumn Warm",
    "personalColor.autumn.desc": "A deep and warm tone that gives a sense of stability and maturity.",
    "personalColor.autumn.char1": "Deep and rich colors",
    "personalColor.autumn.char2": "Warm golden base",
    "personalColor.autumn.char3": "Rich and luxurious tone",
    "personalColor.winter": "Winter Cool",
    "personalColor.winter.desc": "A clear and cold cool tone that gives a strong and urban impression.",
    "personalColor.winter.char1": "Clear and strong colors",
    "personalColor.winter.char2": "Cold blue base",
    "personalColor.winter.char3": "Clear and high-contrast tone",

    // Categories
    "category.tops": "Tops",
    "category.bottoms": "Bottoms",
    "category.outerwear": "Outerwear",
    "category.dresses": "Dresses",
    "category.accessories": "Accessories",
    "category.shoes": "Shoes",
    "category.bags": "Bags",
    "category.lipstick": "Lipstick",
    "category.glasses": "Glasses",

    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",

    // Footer
    "footer.company": "TONEFIT",
    "footer.description":
      "Discover your perfect style through personal color analysis combined with Pantone color palettes.",
    "footer.pantoneDesc":
      "We provide harmonious palettes with Pantone Colors from 2020-2025.",
    "footer.services": "Services",
    "footer.personalColorDiagnosis": "Personal Color Analysis",
    "footer.colorPalette": "Color Palette",
    "footer.stylingGuide": "Styling Guide",
    "footer.support": "Customer Support",
    "footer.faq": "FAQ",
    "footer.contact": "Contact Us",
    "footer.privacy": "Privacy Policy",
    "footer.copyright": "© 2024 TONEFIT. All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "ko" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
