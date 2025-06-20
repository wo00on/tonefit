import { useState } from "react";
import { useLocation } from "wouter";
import ColorSelector from "@/components/ColorSelector";
import { PersonalColorType } from "@/types/color";

const Home = () => {
  const [, setLocation] = useLocation();
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              TONEFIT이 제안하는
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                퍼스널 × 펜톤 컬러 매칭
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              퍼스널 컬러에 딱 맞는 트렌디한 펜톤 컬러 조합으로
              <br />
              나에게 가장 어울리는 컬러 스타일을 만나보세요
            </p>
            <button
              onClick={startColorTest}
              className="bg-primary hover:bg-pink-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              컬러 매칭 시작하기 →
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h5 className="text-2xl font-bold mb-4 font-english">
                TONE<span className="text-primary">FIT</span>
              </h5>
              <p className="text-gray-400 mb-4">
                퍼스널 컬러 분석 X 펜톤 컬러 조합을 통해 당신만의 완벽한
                스타일을 찾아보세요.
                <br />
                2020-2025 펜톤 컬러와 조화로운 팔레트를 제공합니다.
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
              <h6 className="font-semibold mb-4">서비스</h6>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    퍼스널 컬러 진단
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    컬러 팔레트
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    스타일링 가이드
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">고객 지원</h6>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    자주 묻는 질문
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    문의하기
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    개인정보처리방침
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TONEFIT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
