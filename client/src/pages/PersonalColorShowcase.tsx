import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GiSpring, GiSnowflake1, GiChestnutLeaf, GiWaterDrop } from "react-icons/gi";

const colorTypes = [
  {
    key: "springWarm",
    color: "#FFD6A5",
    nameKo: "봄웜",
    nameEn: "Spring Warm",
    descKo: "화사하고 따뜻한 파스텔 계열의 컬러가 잘 어울려요.",
    descEn: "Bright and warm pastel colors suit you well.",
    palette: [
      { hex: "#FFD6A5" },
      { hex: "#FFB4A2" },
      { hex: "#FFDAC1" },
      { hex: "#E2F0CB" },
      { hex: "#B5EAD7" }
    ],
    icon: <GiSpring className="text-4xl text-yellow-400" />,
    styleKo: "플로럴 패턴, 라이트 트렌치코트, 밝은 스카프",
    styleEn: "Floral patterns, light trench coats, bright scarves",
    tipKo: "밝고 화사한 컬러로 생기 있는 이미지를 연출해보세요!",
    tipEn: "Use bright colors for a lively look!",
  },
  {
    key: "summerCool",
    color: "#A5D8FF",
    nameKo: "여름쿨",
    nameEn: "Summer Cool",
    descKo: "맑고 시원한 블루, 라벤더 계열이 잘 어울려요.",
    descEn: "Clear and cool blue, lavender tones look great on you.",
    palette: [
      { hex: "#A5D8FF" },
      { hex: "#B5B5FF" },
      { hex: "#C3AED6" },
      { hex: "#E0BBE4" },
      { hex: "#B2F7EF" }
    ],
    icon: <GiWaterDrop className="text-4xl text-blue-400" />,
    styleKo: "린넨 셔츠, 라벤더 니트, 실버 액세서리",
    styleEn: "Linen shirts, lavender knits, silver accessories",
    tipKo: "파스텔 블루와 라벤더로 청량한 분위기를 연출해보세요!",
    tipEn: "Try pastel blue and lavender for a fresh vibe!",
  },
  {
    key: "autumnWarm",
    color: "#FFD6A5",
    nameKo: "가을웜",
    nameEn: "Autumn Warm",
    descKo: "딥하고 따뜻한 브라운, 올리브 계열이 잘 어울려요.",
    descEn: "Deep and warm brown, olive tones suit you well.",
    palette: [
      { hex: "#FFB085" },
      { hex: "#D4A373" },
      { hex: "#B5838D" },
      { hex: "#A98467" },
      { hex: "#6B4226" }
    ],
    icon: <GiChestnutLeaf className="text-4xl text-orange-700" />,
    styleKo: "코듀로이 재킷, 브라운 부츠, 체크 머플러",
    styleEn: "Corduroy jackets, brown boots, check mufflers",
    tipKo: "따뜻한 브라운 계열로 분위기 있는 가을룩 완성!",
    tipEn: "Warm browns create a cozy autumn look!",
  },
  {
    key: "winterCool",
    color: "#B5B5FF",
    nameKo: "겨울쿨",
    nameEn: "Winter Cool",
    descKo: "선명하고 쿨한 블루, 핑크, 블랙이 잘 어울려요.",
    descEn: "Vivid and cool blue, pink, and black look great on you.",
    palette: [
      { hex: "#B5B5FF" },
      { hex: "#6C63FF" },
      { hex: "#FF6F91" },
      { hex: "#22223B" },
      { hex: "#F7F7FF" }
    ],
    icon: <GiSnowflake1 className="text-4xl text-indigo-500" />,
    styleKo: "블랙 코트, 비비드 니트, 미니멀 실버 주얼리",
    styleEn: "Black coats, vivid knits, minimal silver jewelry",
    tipKo: "비비드 컬러와 블랙으로 세련된 겨울룩을 연출하세요!",
    tipEn: "Vivid colors and black for a chic winter look!",
  },
];

const PersonalColorShowcase = () => {
  const { language } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "ko" ? "퍼스널 컬러별 대표 색상" : "Personal Color Showcase"}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {language === "ko"
              ? "사람마다 어울리는 컬러가 달라요! 내 퍼스널 컬러에 맞는 대표 색상과 스타일을 확인해보세요."
              : "Everyone has their own best colors! Discover the best colors and styles for your personal color type."}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {colorTypes.map((type) => (
            <div
              key={type.key}
              className="bg-white rounded-2xl shadow-xl p-7 flex flex-col items-center border-t-8"
              style={{ borderTopColor: type.color }}
            >
              <div className="mb-3">{type.icon}</div>
              <div className="text-xl font-bold mb-1">
                {language === "ko" ? type.nameKo : type.nameEn}
              </div>
              <div className="text-gray-600 text-center mb-3">
                {language === "ko" ? type.descKo : type.descEn}
              </div>
              {/* 컬러 팔레트 */}
              <div className="flex gap-2 mb-2">
                {type.palette.map((c, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white shadow"
                      style={{ background: c.hex }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-1 font-mono">{c.hex}</span>
                  </div>
                ))}
              </div>
              {/* 추천 스타일/아이템 */}
              <div className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">
                  {language === "ko" ? "추천 스타일" : "Recommended Style"}:
                </span>{" "}
                {language === "ko" ? type.styleKo : type.styleEn}
              </div>
              {/* 팁 */}
              <div className="text-xs text-pink-500 italic text-center">
                {language === "ko" ? type.tipKo : type.tipEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalColorShowcase; 