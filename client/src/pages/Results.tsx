import { useState, useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import PaletteViewer from '@/components/PaletteViewer';
import OutfitCard, { getOutfitsByTone } from '@/components/OutfitCard';
import StyleItem, { getStyleItemsByTone } from '@/components/StyleItemNew';
import { PersonalColorType, ColorData, OutfitRecommendation } from '@/types/color';
import colorDataJson from '@/data/colorData.json';

const Results = () => {
  const [match, params] = useRoute('/results/:colorType');
  const [colorData] = useState<ColorData>(colorDataJson);
  const selectedColorType = params?.colorType as PersonalColorType;

  const seasonNames = {
    'spring': '봄웜 (Spring)',
    'summer': '여름쿨 (Summer)',
    'autumn': '가을웜 (Autumn)',
    'winter': '겨울쿨 (Winter)'
  };

  const outfitRecommendations = getOutfitsByTone(selectedColorType);
  const styleItems = getStyleItemsByTone(selectedColorType);

  const handleShare = async () => {
    const shareData = {
      title: 'TONEFIT 퍼스널 컬러 결과',
      text: `나의 퍼스널 컬러는 ${seasonNames[selectedColorType]}입니다!`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        alert('결과가 클립보드에 복사되었습니다!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (!match || !selectedColorType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">잘못된 접근입니다</h2>
          <Link href="/">
            <a className="text-primary hover:underline">홈으로 돌아가기</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Selected Color Type Display */}
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-primary">{seasonNames[selectedColorType]}</span> 타입 추천 컬러
            </h3>
            <p className="text-lg text-gray-600">
              2020-2025 펜톤 컬러와 조화로운 팔레트를 확인하세요
            </p>
          </div>

          {/* Pantone Colors Grid */}
          <PaletteViewer 
            colorData={colorData} 
            selectedColorType={selectedColorType} 
          />

          {/* Individual Style Items */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
              추천 스타일 아이템
            </h3>
            <p className="text-gray-600 text-center mb-12">
              {seasonNames[selectedColorType]} 타입에 어울리는 개별 아이템들을 확인해보세요
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {styleItems.map((item) => (
                <StyleItem key={item.id} item={item} tone={selectedColorType} />
              ))}
            </div>
          </div>

          {/* Complete Outfit Styling */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
              완성된 코디네이션
            </h3>
            <p className="text-gray-600 text-center mb-12">
              전체적인 룩 완성을 위한 코디네이션 예시입니다
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outfitRecommendations.map((outfit) => (
                <OutfitCard key={outfit.id} outfit={outfit} tone={selectedColorType} />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <Link href="/">
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 mr-4">
                <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                다시 테스트하기
              </button>
            </Link>
            <button
              onClick={handleShare}
              className="bg-primary hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300"
            >
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              결과 공유하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
