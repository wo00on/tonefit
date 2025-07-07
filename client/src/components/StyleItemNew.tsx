import { PersonalColorType } from '@/types/color';
import { useLanguage } from '@/contexts/LanguageContext';

interface StyleItem {
  id: string;
  name: { ko: string; en: string };
  category: string;
  colors: string[];
  description: { ko: string; en: string };
  brand?: string;
  imageUrl: string;
}

interface StyleItemProps {
  item: StyleItem;
  tone: PersonalColorType;
}

const getStyleItemsByTone = (tone: PersonalColorType): StyleItem[] => {
  const itemData = {
    spring: [
      {
        id: 'top1',
        name: { ko: '코랄 실크 블라우스', en: 'Coral Silk Blouse' },
        category: 'category.tops',
        colors: ['#FF7F50', '#FFE4E1'],
        description: { ko: '부드러운 실크 소재의 코랄 컬러 블라우스', en: 'Soft silk coral blouse' },
        brand: 'SPRING',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      },
      {
        id: 'bottom1',
        name: { ko: '베이지 와이드 팬츠', en: 'Beige Wide Pants' },
        category: 'category.bottoms',
        colors: ['#F5F5DC', '#DDD'],
        description: { ko: '편안한 핏의 베이지 와이드 팬츠', en: 'Comfortable fit beige wide pants' },
        brand: 'SPRING',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
      },
      {
        id: 'acc1',
        name: { ko: '골드 체인 목걸이', en: 'Gold Chain Necklace' },
        category: 'category.accessories',
        colors: ['#FFD700'],
        description: { ko: '세련된 골드 체인 목걸이', en: 'Sophisticated gold chain necklace' },
        brand: 'GOLD',
        imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
      },
      {
        id: 'lipstick1',
        name: { ko: '코랄 피치 립스틱', en: 'Coral Peach Lipstick' },
        category: 'category.lipstick',
        colors: ['#FF6B6B', '#FFA07A'],
        description: { ko: '생기 넘치는 코랄 피치 컬러', en: 'Vivid coral peach color' },
        brand: 'BEAUTY',
        imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop'
      },
      {
        id: 'shoes1',
        name: { ko: '누드 펌프스', en: 'Nude Pumps' },
        category: 'category.shoes',
        colors: ['#F5DEB3', '#DDD'],
        description: { ko: '편안한 미드힐 누드 펌프스', en: 'Comfortable mid-heel nude pumps' },
        brand: 'SHOES',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop'
      },
      {
        id: 'glasses1',
        name: { ko: '골드 프레임 선글라스', en: 'Gold Frame Sunglasses' },
        category: 'category.glasses',
        colors: ['#FFD700', '#8B4513'],
        description: { ko: '세련된 골드 프레임 선글라스', en: 'Sophisticated gold frame sunglasses' },
        brand: 'EYEWEAR',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop'
      }
    ],
    summer: [
      {
        id: 'top2',
        name: { ko: '라벤더 니트 가디건', en: 'Lavender Knit Cardigan' },
        category: 'category.tops',
        colors: ['#E6E6FA', '#D8BFD8'],
        description: { ko: '부드러운 라벤더 니트 가디건', en: 'Soft lavender knit cardigan' },
        brand: 'SUMMER',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      },
      {
        id: 'bottom2',
        name: { ko: '그레이 슬림 팬츠', en: 'Gray Slim Pants' },
        category: 'category.bottoms',
        colors: ['#808080', '#A9A9A9'],
        description: { ko: '세련된 그레이 슬림 팬츠', en: 'Sophisticated gray slim pants' },
        brand: 'SUMMER',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
      },
      {
        id: 'acc2',
        name: { ko: '실버 진주 귀걸이', en: 'Silver Pearl Earrings' },
        category: 'category.accessories',
        colors: ['#C0C0C0', '#F8F8FF'],
        description: { ko: '우아한 실버 진주 귀걸이', en: 'Sophisticated silver pearl earrings' },
        brand: 'SILVER',
        imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
      },
      {
        id: 'lipstick2',
        name: { ko: '로즈 핑크 립스틱', en: 'Rose Pink Lipstick' },
        category: 'category.lipstick',
        colors: ['#FFB6C1', '#FFC0CB'],
        description: { ko: '부드러운 로즈 핑크 컬러', en: 'Soft rose pink color' },
        brand: 'BEAUTY',
        imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop'
      },
      {
        id: 'shoes2',
        name: { ko: '화이트 스니커즈', en: 'White Sneakers' },
        category: 'category.shoes',
        colors: ['#FFFFFF', '#F5F5F5'],
        description: { ko: '깔끔한 화이트 스니커즈', en: 'Clean white sneakers' },
        brand: 'SHOES',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop'
      },
      {
        id: 'glasses2',
        name: { ko: '실버 프레임 안경', en: 'Silver Frame Glasses' },
        category: 'category.glasses',
        colors: ['#C0C0C0', '#E6E6FA'],
        description: { ko: '심플한 실버 프레임 안경', en: 'Simple silver frame glasses' },
        brand: 'EYEWEAR',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop'
      }
    ],
    autumn: [
      {
        id: 'top3',
        name: { ko: '테라코타 니트 스웨터', en: 'Terra Cotta Knit Sweater' },
        category: 'category.tops',
        colors: ['#CD853F', '#D2B48C'],
        description: { ko: '따뜻한 테라코타 니트 스웨터', en: 'Warm terra cotta knit sweater' },
        brand: 'AUTUMN',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      },
      {
        id: 'bottom3',
        name: { ko: '카키 코듀로이 팬츠', en: 'Khaki Corduroy Pants' },
        category: 'category.bottoms',
        colors: ['#808000', '#BDB76B'],
        description: { ko: '빈티지한 카키 코듀로이 팬츠', en: 'Vintage khaki corduroy pants' },
        brand: 'AUTUMN',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
      },
      {
        id: 'acc3',
        name: { ko: '브론즈 체인 팔찌', en: 'Bronze Chain Bracelet' },
        category: 'category.accessories',
        colors: ['#CD7F32', '#8B4513'],
        description: { ko: '빈티지한 브론즈 체인 팔찌', en: 'Vintage bronze chain bracelet' },
        brand: 'BRONZE',
        imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
      },
      {
        id: 'lipstick3',
        name: { ko: '버건디 매트 립스틱', en: 'Burnt Matte Lipstick' },
        category: 'category.lipstick',
        colors: ['#800020', '#A0522D'],
        description: { ko: '깊이 있는 버건디 매트 립스틱', en: 'Deep burnt matte lipstick' },
        brand: 'BEAUTY',
        imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop'
      },
      {
        id: 'shoes3',
        name: { ko: '브라운 앵클부츠', en: 'Brown Anklet Boots' },
        category: 'category.shoes',
        colors: ['#8B4513', '#A0522D'],
        description: { ko: '클래식한 브라운 앵클부츠', en: 'Classic brown anklet boots' },
        brand: 'SHOES',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop'
      },
      {
        id: 'glasses3',
        name: { ko: '톰 브라운 프레임', en: 'Tom Brown Frame' },
        category: 'category.glasses',
        colors: ['#8B4513', '#D2B48C'],
        description: { ko: '클래식한 톰 브라운 프레임', en: 'Classic tom brown frame' },
        brand: 'EYEWEAR',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop'
      }
    ],
    winter: [
      {
        id: 'top4',
        name: { ko: '네이비 울 코트', en: 'Navy Wool Coat' },
        category: 'category.tops',
        colors: ['#000080', '#2F4F4F'],
        description: { ko: '고급스러운 네이비 울 코트', en: 'High-end navy wool coat' },
        brand: 'WINTER',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      },
      {
        id: 'bottom4',
        name: { ko: '블랙 슬림 팬츠', en: 'Black Slim Pants' },
        category: 'category.bottoms',
        colors: ['#000000', '#2F2F2F'],
        description: { ko: '모던한 블랙 슬림 팬츠', en: 'Modern black slim pants' },
        brand: 'WINTER',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
      },
      {
        id: 'acc4',
        name: { ko: '다이아몬드 귀걸이', en: 'Diamond Earrings' },
        category: 'category.accessories',
        colors: ['#B9F2FF', '#E0E0E0'],
        description: { ko: '우아한 다이아몬드 귀걸이', en: 'Sophisticated diamond earrings' },
        brand: 'DIAMOND',
        imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
      },
      {
        id: 'lipstick4',
        name: { ko: '레드 립스틱', en: 'Red Lipstick' },
        category: 'category.lipstick',
        colors: ['#DC143C', '#B22222'],
        description: { ko: '강렬한 레드 립스틱', en: 'Vivid red lipstick' },
        brand: 'BEAUTY',
        imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop'
      },
      {
        id: 'shoes4',
        name: { ko: '블랙 하이힐', en: 'Black High Heels' },
        category: 'category.shoes',
        colors: ['#000000', '#2F2F2F'],
        description: { ko: '클래식한 블랙 하이힐', en: 'Classic black high heels' },
        brand: 'SHOES',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop'
      },
      {
        id: 'glasses4',
        name: { ko: '블랙 프레임 선글라스', en: 'Black Frame Sunglasses' },
        category: 'category.glasses',
        colors: ['#000000', '#2F4F4F'],
        description: { ko: '시크한 블랙 프레임 선글라스', en: 'Sleek black frame sunglasses' },
        brand: 'EYEWEAR',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop'
      }
    ]
  };
  
  return itemData[tone] || [];
};

const getCategoryIcon = (category: string) => {
  const icons: { [key: string]: string } = {
    'category.tops': '👕',
    'category.bottoms': '👖',
    'category.accessories': '💍',
    'category.lipstick': '💄',
    'category.shoes': '👠',
    'category.glasses': '👓'
  };
  return icons[category] || '✨';
};

const StyleItem = ({ item, tone }: StyleItemProps) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg color-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={item.imageUrl}
        alt={item.name[language]}
        className="w-full h-48 object-cover rounded-t-3xl"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          {getCategoryIcon(item.category)}
          <span className="ml-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full px-3 py-1">
            {t(item.category)}
          </span>
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {item.name[language]}
        </h4>
        <p className="text-gray-600 mb-4">
          {item.description[language]}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {item.colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          {item.brand && (
            <span className="text-sm text-gray-500">{item.brand}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export { getStyleItemsByTone, type StyleItem };
export default StyleItem;