import { useState } from "react";
import { useLocation } from "wouter";
import ColorSelector from "@/components/ColorSelector";
import { PersonalColorType } from "@/types/color";
import { useLanguage } from "@/contexts/LanguageContext";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from '../components/Carousel';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.png';
import carousel5 from '../assets/carousel5.png';
import carousel6 from '../assets/carousel6.png';
import carousel7 from '../assets/carousel7.png';
import carousel8 from '../assets/carousel8.png';
import carousel9 from '../assets/carousel9.png';
import heroBg from '../assets/Main1.png';
import shoe1 from '../assets/shoe1.png';
import shoe2 from '../assets/shoe2.png';
import shoe3 from '../assets/shoe3.png';
import shoe4 from '../assets/shoe4.png';
import shoe5 from '../assets/shoe5.png';
import shoe6 from '../assets/shoe6.png';
import shoe7 from '../assets/shoe7.png';
import shoe8 from '../assets/shoe8.png';
import shoe9 from '../assets/shoe9.png';
import shoe10 from '../assets/shoe10.png';
import blo1 from '@/assets/blo (1).png';
import blo2 from '@/assets/blo (2).png';
import blo3 from '@/assets/blo (3).png';
import blo4 from '@/assets/blo (4).png';
import blo5 from '@/assets/blo (5).png';
import blo6 from '@/assets/blo (6).png';
import blo7 from '@/assets/blo (7).png';
import blo8 from '@/assets/blo (8).png';
import blo9 from '@/assets/blo (9).png';

// FeedCardBig 컴포넌트 복원
function FeedCardBig({ feed }: { feed: typeof feedMock[0] }) {
  return (
    <div className="bg-white overflow-hidden flex flex-col border border-gray-200 shadow-sm w-full h-full">
      <div className="flex items-center px-4 pt-3 pb-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold mr-3 text-lg">
          {feed.user[0].toUpperCase()}
        </div>
        <div className="font-bold text-gray-800">@{feed.user}</div>
      </div>
      {feed.image && (
        <div className="w-full h-[440px] bg-gray-100 overflow-hidden">
          <img src={feed.image} alt="피드 이미지" className="w-full h-full object-cover" />
        </div>
      )}
      <div className="px-4 py-3 flex-1 flex flex-col">
        <div className="mb-2 whitespace-pre-line text-gray-900 text-base line-clamp-4">{feed.content}</div>
        <div className="flex items-center space-x-2 mt-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <span className="text-gray-500 text-xs">{feed.likes}</span>
        </div>
      </div>
    </div>
  );
}

// 피드 모의 데이터 복원
const feedMock = [
  {
    id: 1,
    user: "tonefit_user",
    content: "오늘의 컬러 매칭! #퍼스널컬러 #펜톤",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    likes: 3,
  },
  {
    id: 2,
    user: "guest1",
    content: "봄웜 팔레트 추천받고 싶어요~",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    likes: 1,
  },
  {
    id: 3,
    user: "colorlover",
    content: "#여름쿨 오늘의 데일리룩!",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    likes: 5,
  },
  {
    id: 4,
    user: "fashionista",
    content: "#가을웜 브라운 코디 완성!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    likes: 2,
  },
  {
    id: 5,
    user: "trendsetter",
    content: "#펜톤 2024 Peach Fuzz 컬러 소품!",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    likes: 4,
  },
  {
    id: 6,
    user: "guest2",
    content: "#겨울쿨 블루 니트 추천해요",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    likes: 2,
  },
  {
    id: 7,
    user: "palettefan",
    content: "#봄웜 #핑크 오늘의 립 컬러",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    likes: 3,
  },
  {
    id: 8,
    user: "guest3",
    content: "#여름쿨 #화이트셔츠 심플룩",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    likes: 1,
  },
  // 추가 영어/혼합 데이터 6개
  {
    id: 9,
    user: "jane_doe",
    content: "Love this #Pantone2024 color! So fresh and trendy.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    likes: 7,
  },
  {
    id: 10,
    user: "minji",
    content: "오늘은 #봄웜 스타일로 코디했어요! #OOTD",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    likes: 6,
  },
  {
    id: 11,
    user: "alex",
    content: "Trying out a new personal color palette. Any thoughts?",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    likes: 2,
  },
  {
    id: 12,
    user: "soyoung",
    content: "#가을웜 #브라운 오늘의 립 추천!",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    likes: 5,
  },
  {
    id: 13,
    user: "mike",
    content: "Pantone color of the year is amazing! #colortrend",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    likes: 4,
  },
  {
    id: 14,
    user: "eunji",
    content: "오늘은 화사한 #봄웜 컬러로 기분전환!",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    likes: 3,
  },
];

const Home = () => {
  const [, setLocation] = useLocation();
  const { t } = useLanguage();
  const [selectedColor, setSelectedColor] = useState<
    PersonalColorType | undefined
  >();

  const handleColorSelect = (colorType: PersonalColorType) => {
    setSelectedColor(colorType);
    // Navigate to results page after short delay for visual feedback
    setTimeout(() => {
      setLocation(`/results/${colorType}`);
    }, 800);
  };

  const startColorTest = () => {
    const colorSectionElement = document.getElementById("color-selection");
    if (colorSectionElement) {
      colorSectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Masonry 이미지 배열 생성
  const masonryImages = [blo1, blo2, blo3, blo4, blo5, blo6, blo7, blo8, blo9];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 py-32 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, #fce7f3, #f3e8ff, #c7d2fe)`
        }}
      >
        {/* 배경 이미지 오버레이 */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.69,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg mb-6" dangerouslySetInnerHTML={{ __html: t('home.title') }} />
            <p className="text-xl text-white drop-shadow-md mb-8 max-w-2xl mx-auto leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: t('home.subtitle') }} />
            <button
              onClick={startColorTest}
              className="bg-orange-100 hover:bg-orange-200 text-orange-800 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('home.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Color Selection */}
      <div id="color-selection">
        <ColorSelector
          onColorSelect={handleColorSelect}
          selectedColor={selectedColor}
        />
      </div>
      {/* 언밸런스 피드 레이아웃 */}
      <div className="max-w-7xl mx-auto py-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">{t('feed.latest')}</h3>
        <div className="flex flex-col md:flex-row gap-6 justify-start items-start">
          {/* 왼쪽: 유저 인사이트 통계 카드 (더 다양한 정보 추가) */}
          <div className="w-[500px] h-[650px]">
            <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between h-full w-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('insight.title')}</h2>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 rounded-full bg-pink-400 mr-2"></span>
                  <span className="font-semibold text-gray-700">{t('insight.popularColor')}</span>
                </div>
                <div className="text-lg font-bold text-pink-500 mb-1">Peach Fuzz</div>
                <div className="text-xs text-gray-400">{t('insight.pantoneDesc')}</div>
              </div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
                  <span className="font-semibold text-gray-700">{t('insight.topTone')}</span>
                </div>
                <div className="text-lg font-bold text-blue-500 mb-1">{t('insight.tone.summerCool')}</div>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '41%' }}></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">41% {t('insight.userChoice')}</div>
              </div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                  <span className="font-semibold text-gray-700">{t('insight.feedCount')}</span>
                </div>
                <div className="text-lg font-bold text-green-500 mb-1">124</div>
                <div className="text-xs text-gray-400">{t('insight.totalFeed')}</div>
              </div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                  <span className="font-semibold text-gray-700">{t('insight.topTags')}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">{t('insight.tag.springWarm')}</span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">{t('insight.tag.peachFuzz')}</span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">{t('insight.tag.trend')}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
                  <span className="font-semibold text-gray-700">{t('insight.activeUsers')}</span>
                </div>
                <div className="text-lg font-bold text-purple-500 mb-1">57</div>
                <div className="text-xs text-gray-400">{t('insight.thisWeek')}</div>
              </div>
            </div>
          </div>
          {/* 오른쪽: Masonry 썸네일 + 오늘의 패션/컬러 팁 */}
          <div className="w-[1000px] h-[650px] bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between">
            <div className="flex-1 overflow-y-auto mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">{t('gallery.title')}</h2>
              <div style={{ columnCount: 3, columnGap: '12px' }}>
                {masonryImages.map((img, idx) => {
                  const heights = [140, 200, 170, 230, 160, 210, 180, 220, 150];
                  return (
                    <div key={idx} className="mb-3 break-inside-avoid">
                      <img
                        src={img}
                        alt={`썸네일${idx+1}`}
                        className="w-full object-cover rounded-lg shadow"
                        style={{ height: `${heights[idx % heights.length]}px` }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{t('tip.title')}</h3>
              <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
                <div className="text-base text-gray-700 mb-2">{t('gallery.tip')}</div>
                <div className="text-sm text-gray-400">{t('gallery.tipBy')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel Section */}
      <section className="my-12 p-0">
        <Carousel
          images={[
            carousel1,
            carousel2,
            carousel3,
            carousel4,
            carousel5,
            carousel6,
            carousel7,
            carousel8,
            carousel9,
          ]}
          autoPlayInterval={2000}
        />
        <div className="mt-12">
          <Carousel
            images={[
              shoe1,
              shoe2,
              shoe3,
              shoe4,
              shoe5,
              shoe6,
              shoe7,
              shoe8,
              shoe9,
              shoe10,
            ]}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h5 className="text-2xl font-bold mb-4 font-english">
                {t('footer.company')}
              </h5>
              <p className="text-gray-400 mb-4">
                {t('footer.description')}
                <br />
                {t('footer.pantoneDesc')}
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.097.118.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.499-.69-2.436-2.878-2.436-4.632 0-3.777 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">{t('footer.services')}</h6>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.personalColorDiagnosis')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.colorPalette')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.stylingGuide')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">{t('footer.support')}</h6>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.faq')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.contact')}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    {t('footer.privacy')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
