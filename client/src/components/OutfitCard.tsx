import { OutfitRecommendation, PersonalColorType } from '@/types/color';
import { useLanguage } from '@/contexts/LanguageContext';

interface OutfitCardProps {
  outfit: OutfitRecommendation;
  tone: PersonalColorType;
}

const getOutfitsByTone = (tone: PersonalColorType): OutfitRecommendation[] => {
  const outfitData = {
    spring: [
      {
        id: '1',
        title: { ko: '코랄 피치 오피스 룩', en: 'Coral Peach Office Look' },
        description: { ko: '밝고 화사한 코랄 피치 컬러로 완성한 생기 넘치는 오피스 스타일', en: 'A lively office style completed with bright coral peach color' },
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#FFBE98', '#FFE3D1', '#FAD2C2', '#F4C2A1'],
        tags: [
          { ko: '블라우스', en: 'Blouse' },
          { ko: '스커트', en: 'Skirt' },
          { ko: '카디건', en: 'Cardigan' }
        ],
        personalColorType: tone
      },
      {
        id: '2',
        title: { ko: '스프링 그린 캐주얼', en: 'Spring Green Casual' },
        description: { ko: '생동감 있는 라임 그린과 코랄의 조화로 완성한 활기찬 캐주얼 룩', en: 'A lively casual look completed with the harmony of lime green and coral' },
        imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#32CD32', '#FFB347', '#FFCCCB', '#FFF8DC'],
        tags: [
          { ko: '니트', en: 'Knit' },
          { ko: '데님', en: 'Denim' },
          { ko: '스니커즈', en: 'Sneakers' }
        ],
        personalColorType: tone
      },
      {
        id: '3',
        title: { ko: '골드 옐로우 파티 룩', en: 'Gold Yellow Party Look' },
        description: { ko: '화사한 골드 옐로우로 완성한 밝고 경쾌한 파티 스타일', en: 'A bright and cheerful party style completed with brilliant gold yellow' },
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#FFD700', '#FFFFE0', '#FFA500', '#FFDAB9'],
        tags: [
          { ko: '드레스', en: 'Dress' },
          { ko: '힐', en: 'Heels' },
          { ko: '골드 액세서리', en: 'Gold Accessories' }
        ],
        personalColorType: tone
      }
    ],
    summer: [
      {
        id: '4',
        title: { ko: '라벤더 미스트 오피스', en: 'Lavender Mist Office' },
        description: { ko: '부드러운 라벤더와 그레이의 조화로 완성한 우아한 오피스 룩', en: 'A sophisticated office look completed with the harmony of lavender and gray' },
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#E6E6FA', '#D8BFD8', '#B0C4DE', '#F0F8FF'],
        tags: [
          { ko: '셔츠', en: 'Shirt' },
          { ko: '슬랙스', en: 'Slacks' },
          { ko: '재킷', en: 'Jacket' }
        ],
        personalColorType: tone
      },
      {
        id: '5',
        title: { ko: '소프트 핑크 데일리', en: 'Soft Pink Daily' },
        description: { ko: '차분한 소프트 핑크로 완성한 편안하고 세련된 데일리 룩', en: 'A comfortable and sophisticated daily look completed with soft pink' },
        imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#FFB6C1', '#E0E0E0', '#F5F5DC', '#FFEFD5'],
        tags: [
          { ko: '니트', en: 'Knit' },
          { ko: '팬츠', en: 'Pants' },
          { ko: '플랫슈즈', en: 'Flat Shoes' }
        ],
        personalColorType: tone
      },
      {
        id: '6',
        title: { ko: '아이스 블루 이브닝', en: 'Ice Blue Evening' },
        description: { ko: '시원한 아이스 블루로 완성한 고급스러운 이브닝 드레스', en: 'A sophisticated evening dress completed with cool ice blue' },
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#B0E0E6', '#E6E6FA', '#F0F8FF', '#DCDCDC'],
        tags: [
          { ko: '드레스', en: 'Dress' },
          { ko: '힐', en: 'Heels' },
          { ko: '실버 액세서리', en: 'Silver Accessories' }
        ],
        personalColorType: tone
      }
    ],
    autumn: [
      {
        id: '7',
        title: { ko: '테라코타 어스 오피스', en: 'Terra Cotta Earth Office' },
        description: { ko: '깊이 있는 테라코타와 베이지의 조화로 완성한 성숙한 오피스 룩', en: 'A mature office look completed with the harmony of terra cotta and beige' },
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#CD853F', '#D2B48C', '#F4A460', '#DEB887'],
        tags: [
          { ko: '블레이저', en: 'Blazer' },
          { ko: '팬츠', en: 'Pants' },
          { ko: '로퍼', en: 'Loafers' }
        ],
        personalColorType: tone
      },
      {
        id: '8',
        title: { ko: '올리브 그린 캐주얼', en: 'Olive Green Casual' },
        description: { ko: '자연스러운 올리브 그린으로 완성한 편안하고 세련된 캐주얼 룩', en: 'A comfortable and sophisticated casual look completed with natural olive green' },
        imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#808000', '#BDB76B', '#F0E68C', '#D2B48C'],
        tags: [
          { ko: '스웨터', en: 'Sweater' },
          { ko: '치노팬츠', en: 'Chino Pants' },
          { ko: '부츠', en: 'Boots' }
        ],
        personalColorType: tone
      },
      {
        id: '9',
        title: { ko: '머스타드 골드 파티', en: 'Mustard Gold Party' },
        description: { ko: '풍부한 머스타드 골드로 완성한 고급스럽고 따뜻한 파티 룩', en: 'A luxurious and warm party look completed with rich mustard gold' },
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#FFDB58', '#DAA520', '#B8860B', '#CD853F'],
        tags: [
          { ko: '드레스', en: 'Dress' },
          { ko: '힐', en: 'Heels' },
          { ko: '골드 액세서리', en: 'Gold Accessories' }
        ],
        personalColorType: tone
      }
    ],
    winter: [
      {
        id: '10',
        title: { ko: '로얄 블루 오피스', en: 'Royal Blue Office' },
        description: { ko: '선명한 로얄 블루로 완성한 강렬하고 도시적인 오피스 룩', en: 'A vibrant and urban office look completed with bright royal blue' },
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#4169E1', '#000000', '#FFFFFF', '#C0C0C0'],
        tags: [
          { ko: '셔츠', en: 'Shirt' },
          { ko: '슬랙스', en: 'Slacks' },
          { ko: '재킷', en: 'Jacket' }
        ],
        personalColorType: tone
      },
      {
        id: '11',
        title: { ko: '에메랄드 글램 룩', en: 'Emerald Glam Look' },
        description: { ko: '생생한 에메랄드 그린으로 완성한 세련되고 모던한 글램 룩', en: 'A sophisticated and modern glam look completed with vibrant emerald green' },
        imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#50C878', '#000000', '#FFFFFF', '#708090'],
        tags: [
          { ko: '블라우스', en: 'Blouse' },
          { ko: '스커트', en: 'Skirt' },
          { ko: '하이힐', en: 'High Heels' }
        ],
        personalColorType: tone
      },
      {
        id: '12',
        title: { ko: '모노크롬 시크 룩', en: 'Monochrome Chic Look' },
        description: { ko: '클래식한 블랙&화이트로 완성한 완벽한 모노크롬 시크 룩', en: 'A perfect monochrome chic look completed with classic black and white' },
        imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
        colors: ['#000000', '#FFFFFF', '#808080', '#2F4F4F'],
        tags: [
          { ko: '드레스', en: 'Dress' },
          { ko: '힐', en: 'Heels' },
          { ko: '실버 액세서리', en: 'Silver Accessories' }
        ],
        personalColorType: tone
      }
    ]
  };
  
  return outfitData[tone] || [];
};

const OutfitCard = ({ outfit, tone }: OutfitCardProps) => {
  const { language } = useLanguage();
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg color-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={outfit.imageUrl}
        alt={outfit.title[language]}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-3">
          {outfit.title[language]}
        </h4>
        <p className="text-gray-600 mb-4">
          {outfit.description[language]}
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
              {tag[language]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export { getOutfitsByTone };
export default OutfitCard;
