import { useState, useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import PaletteViewer from '@/components/PaletteViewer';
import OutfitCard from '@/components/OutfitCard';
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

  const outfitRecommendations: OutfitRecommendation[] = [
    {
      id: '1',
      title: '피치 오피스 룩',
      description: '부드럽고 따뜻한 피치 컬러로 완성한 전문적인 오피스 스타일',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['#FFBE98', '#FAD2C2', '#F4C2A1'],
      tags: ['블라우스', '슬랙스', '백'],
      personalColorType: selectedColorType
    },
    {
      id: '2',
      title: '봄 캐주얼 룩',
      description: '화사한 봄 컬러로 완성한 편안하고 세련된 일상 스타일',
      imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['#FFE3D1', '#FFF2E0', '#FAD2C2'],
      tags: ['니트', '데님', '스니커즈'],
      personalColorType: selectedColorType
    },
    {
      id: '3',
      title: '코랄 이브닝 룩',
      description: '생동감 있는 코랄 컬러로 완성한 우아한 저녁 스타일',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      colors: ['#FF6B6B', '#FFB3B3', '#FF9999'],
      tags: ['드레스', '힐', '액세서리'],
      personalColorType: selectedColorType
    }
  ];

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

          {/* Outfit Styling Cards */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              추천 스타일링
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outfitRecommendations.map((outfit) => (
                <OutfitCard key={outfit.id} outfit={outfit} />
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
