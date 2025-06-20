import { PersonalColorType } from '@/types/color';

interface StyleItem {
  id: string;
  name: string;
  category: string;
  colors: string[];
  description: string;
  price?: string;
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
        name: '코랄 실크 블라우스',
        category: '상의',
        colors: ['#FF7F50', '#FFE4E1'],
        description: '부드러운 실크 소재의 코랄 컬러 블라우스',
        price: '89,000원',
        brand: 'SPRING',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      },
      {
        id: 'bottom1',
        name: '베이지 와이드 팬츠',
        category: '하의',
        colors: ['#F5F5DC', '#DDD'],
        description: '편안한 핏의 베이지 와이드 팬츠',
        price: '67,000원',
        brand: 'SPRING',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
      },
      {
        id: 'acc1',
        name: '골드 체인 목걸이',
        category: '액세서리',
        colors: ['#FFD700'],
        description: '세련된 골드 체인 목걸이',
        price: '45,000원',
        brand: 'GOLD',
        imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
      },
      {
        id: 'lipstick1',
        name: '코랄 피치 립스틱',
        category: '립스틱',
        colors: ['#FF6B6B', '#FFA07A'],
        description: '생기 넘치는 코랄 피치 컬러',
        price: '32,000원',
        brand: 'BEAUTY',
        imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop'
      },
      {
        id: 'shoes1',
        name: '누드 펌프스',
        category: '신발',
        colors: ['#F5DEB3', '#DDD'],
        description: '편안한 미드힐 누드 펌프스',
        price: '89,000원',
        brand: 'SHOES',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop'
      },
      {
        id: 'glasses1',
        name: '골드 프레임 선글라스',
        category: '안경',
        colors: ['#FFD700', '#8B4513'],
        description: '세련된 골드 프레임 선글라스',
        price: '78,000원',
        brand: 'EYEWEAR',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop'
      }
    ],
    summer: [
      {
        id: 'top2',
        name: '라벤더 니트 가디건',
        category: '상의',
        colors: ['#E6E6FA', '#D8BFD8'],
        description: '부드러운 라벤더 니트 가디건',
        price: '95,000원',
        brand: 'SUMMER',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      },
      {
        id: 'bottom2',
        name: '그레이 슬림 팬츠',
        category: '하의',
        colors: ['#808080', '#A9A9A9'],
        description: '세련된 그레이 슬림 팬츠',
        price: '72,000원',
        brand: 'SUMMER',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
      },
      {
        id: 'acc2',
        name: '실버 진주 귀걸이',
        category: '액세서리',
        colors: ['#C0C0C0', '#F8F8FF'],
        description: '우아한 실버 진주 귀걸이',
        price: '52,000원',
        brand: 'SILVER',
        imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
      },
      {
        id: 'lipstick2',
        name: '로즈 핑크 립스틱',
        category: '립스틱',
        colors: ['#FFB6C1', '#FFC0CB'],
        description: '부드러운 로즈 핑크 컬러',
        price: '28,000원',
        brand: 'BEAUTY',
        imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop'
      },
      {
        id: 'shoes2',
        name: '화이트 스니커즈',
        category: '신발',
        colors: ['#FFFFFF', '#F5F5F5'],
        description: '깔끔한 화이트 스니커즈',
        price: '95,000원',
        brand: 'SHOES',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop'
      },
      {
        id: 'glasses2',
        name: '실버 프레임 안경',
        category: '안경',
        colors: ['#C0C0C0', '#E6E6FA'],
        description: '심플한 실버 프레임 안경',
        price: '65,000원',
        brand: 'EYEWEAR',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop'
      }
    ],
    autumn: [
      {
        id: 'top3',
        name: '테라코타 니트 스웨터',
        category: '상의',
        colors: ['#CD853F', '#D2B48C'],
        description: '따뜻한 테라코타 니트 스웨터',
        price: '98,000원',
        brand: 'AUTUMN',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      },
      {
        id: 'bottom3',
        name: '카키 코듀로이 팬츠',
        category: '하의',
        colors: ['#808000', '#BDB76B'],
        description: '빈티지한 카키 코듀로이 팬츠',
        price: '78,000원',
        brand: 'AUTUMN',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
      },
      {
        id: 'acc3',
        name: '브론즈 체인 팔찌',
        category: '액세서리',
        colors: ['#CD7F32', '#8B4513'],
        description: '빈티지한 브론즈 체인 팔찌',
        price: '42,000원',
        brand: 'BRONZE',
        imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
      },
      {
        id: 'lipstick3',
        name: '버건디 매트 립스틱',
        category: '립스틱',
        colors: ['#800020', '#A0522D'],
        description: '깊이 있는 버건디 매트 립스틱',
        price: '35,000원',
        brand: 'BEAUTY',
        imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop'
      },
      {
        id: 'shoes3',
        name: '브라운 앵클부츠',
        category: '신발',
        colors: ['#8B4513', '#A0522D'],
        description: '클래식한 브라운 앵클부츠',
        price: '125,000원',
        brand: 'SHOES',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop'
      },
      {
        id: 'glasses3',
        name: '톰 브라운 프레임',
        category: '안경',
        colors: ['#8B4513', '#D2B48C'],
        description: '클래식한 톰 브라운 프레임',
        price: '85,000원',
        brand: 'EYEWEAR',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop'
      }
    ],
    winter: [
      {
        id: 'top4',
        name: '네이비 울 코트',
        category: '상의',
        colors: ['#000080', '#2F4F4F'],
        description: '고급스러운 네이비 울 코트',
        price: '185,000원',
        brand: 'WINTER',
        imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop'
      },
      {
        id: 'bottom4',
        name: '블랙 슬림 팬츠',
        category: '하의',
        colors: ['#000000', '#2F2F2F'],
        description: '모던한 블랙 슬림 팬츠',
        price: '89,000원',
        brand: 'WINTER',
        imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
      },
      {
        id: 'acc4',
        name: '다이아몬드 귀걸이',
        category: '액세서리',
        colors: ['#B9F2FF', '#E0E0E0'],
        description: '우아한 다이아몬드 귀걸이',
        price: '95,000원',
        brand: 'DIAMOND',
        imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
      },
      {
        id: 'lipstick4',
        name: '레드 립스틱',
        category: '립스틱',
        colors: ['#DC143C', '#B22222'],
        description: '강렬한 레드 립스틱',
        price: '38,000원',
        brand: 'BEAUTY',
        imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop'
      },
      {
        id: 'shoes4',
        name: '블랙 하이힐',
        category: '신발',
        colors: ['#000000', '#2F2F2F'],
        description: '클래식한 블랙 하이힐',
        price: '135,000원',
        brand: 'SHOES',
        imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop'
      },
      {
        id: 'glasses4',
        name: '블랙 프레임 선글라스',
        category: '안경',
        colors: ['#000000', '#2F4F4F'],
        description: '시크한 블랙 프레임 선글라스',
        price: '92,000원',
        brand: 'EYEWEAR',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop'
      }
    ]
  };
  
  return itemData[tone] || [];
};

const getCategoryIcon = (category: string) => {
  const icons: { [key: string]: string } = {
    '상의': '👕',
    '하의': '👖',
    '액세서리': '💍',
    '립스틱': '💄',
    '신발': '👠',
    '안경': '👓'
  };
  return icons[category] || '✨';
};

const StyleItem = ({ item, tone }: StyleItemProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-700 flex items-center">
          <span className="mr-1">{getCategoryIcon(item.category)}</span>
          {item.category}
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-900 mb-2">
          {item.name}
        </h4>
        <p className="text-gray-600 text-sm mb-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex space-x-1">
            {item.colors.map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <span className="text-sm text-gray-500">{item.brand}</span>
        </div>
        {item.price && (
          <div className="text-lg font-bold text-primary">
            {item.price}
          </div>
        )}
      </div>
    </div>
  );
};

export { getStyleItemsByTone, type StyleItem };
export default StyleItem;