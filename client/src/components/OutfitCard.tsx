import { OutfitRecommendation, PersonalColorType } from '@/types/color';

interface OutfitCardProps {
  outfit: OutfitRecommendation;
  tone: PersonalColorType;
}

const getOutfitsByTone = (tone: PersonalColorType): OutfitRecommendation[] => {
  const outfitData = {
    spring: [
      {
        id: '1',
        title: '코랄 피치 오피스 룩',
        description: '밝고 화사한 코랄 피치 컬러로 완성한 생기 넘치는 오피스 스타일',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#FFBE98', '#FFE3D1', '#FAD2C2', '#F4C2A1'],
        tags: ['블라우스', '스커트', '카디건'],
        personalColorType: tone
      },
      {
        id: '2',
        title: '스프링 그린 캐주얼',
        description: '생동감 있는 라임 그린과 코랄의 조화로 완성한 활기찬 캐주얼 룩',
        imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#32CD32', '#FFB347', '#FFCCCB', '#FFF8DC'],
        tags: ['니트', '데님', '스니커즈'],
        personalColorType: tone
      },
      {
        id: '3',
        title: '골든 옐로우 파티 룩',
        description: '화사한 골든 옐로우로 완성한 밝고 경쾌한 파티 스타일',
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#FFD700', '#FFFFE0', '#FFA500', '#FFDAB9'],
        tags: ['드레스', '힐', '골드 액세서리'],
        personalColorType: tone
      }
    ],
    summer: [
      {
        id: '4',
        title: '라벤더 미스트 오피스',
        description: '부드러운 라벤더와 그레이의 조화로 완성한 우아한 오피스 룩',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#E6E6FA', '#D8BFD8', '#B0C4DE', '#F0F8FF'],
        tags: ['셔츠', '슬랙스', '재킷'],
        personalColorType: tone
      },
      {
        id: '5',
        title: '소프트 핑크 데일리',
        description: '차분한 소프트 핑크로 완성한 편안하고 세련된 데일리 룩',
        imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#FFB6C1', '#E0E0E0', '#F5F5DC', '#FFEFD5'],
        tags: ['니트', '팬츠', '플랫슈즈'],
        personalColorType: tone
      },
      {
        id: '6',
        title: '아이스 블루 이브닝',
        description: '시원한 아이스 블루로 완성한 고급스러운 이브닝 드레스',
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#B0E0E6', '#E6E6FA', '#F0F8FF', '#DCDCDC'],
        tags: ['드레스', '힐', '실버 액세서리'],
        personalColorType: tone
      }
    ],
    autumn: [
      {
        id: '7',
        title: '테라코타 어스 오피스',
        description: '깊이 있는 테라코타와 베이지의 조화로 완성한 성숙한 오피스 룩',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#CD853F', '#D2B48C', '#F4A460', '#DEB887'],
        tags: ['블레이저', '팬츠', '로퍼'],
        personalColorType: tone
      },
      {
        id: '8',
        title: '올리브 그린 캐주얼',
        description: '자연스러운 올리브 그린으로 완성한 편안하고 세련된 캐주얼 룩',
        imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#808000', '#BDB76B', '#F0E68C', '#D2B48C'],
        tags: ['스웨터', '치노팬츠', '부츠'],
        personalColorType: tone
      },
      {
        id: '9',
        title: '머스타드 골드 파티',
        description: '풍부한 머스타드 골드로 완성한 고급스럽고 따뜻한 파티 룩',
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#FFDB58', '#DAA520', '#B8860B', '#CD853F'],
        tags: ['드레스', '힐', '골드 액세서리'],
        personalColorType: tone
      }
    ],
    winter: [
      {
        id: '10',
        title: '로얄 블루 오피스',
        description: '선명한 로얄 블루로 완성한 강렬하고 도시적인 오피스 룩',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#4169E1', '#000000', '#FFFFFF', '#C0C0C0'],
        tags: ['셔츠', '슬랙스', '재킷'],
        personalColorType: tone
      },
      {
        id: '11',
        title: '에메랄드 글램 룩',
        description: '생생한 에메랄드 그린으로 완성한 세련되고 모던한 글램 룩',
        imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#50C878', '#000000', '#FFFFFF', '#708090'],
        tags: ['블라우스', '스커트', '하이힐'],
        personalColorType: tone
      },
      {
        id: '12',
        title: '모노크롬 시크 룩',
        description: '클래식한 블랙&화이트로 완성한 완벽한 모노크롬 시크 룩',
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#000000', '#FFFFFF', '#808080', '#2F4F4F'],
        tags: ['드레스', '힐', '실버 액세서리'],
        personalColorType: tone
      }
    ]
  };
  
  return outfitData[tone] || [];
};

const OutfitCard = ({ outfit, tone }: OutfitCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg color-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={outfit.imageUrl}
        alt={outfit.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-3">
          {outfit.title}
        </h4>
        <p className="text-gray-600 mb-4">
          {outfit.description}
        </p>
        <div className="flex space-x-2 mb-4">
          {outfit.colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full shadow-sm"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          {outfit.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export { getOutfitsByTone };
export default OutfitCard;
