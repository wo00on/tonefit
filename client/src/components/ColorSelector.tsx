import { PersonalColorType, PersonalColorInfo } from '@/types/color';

interface ColorSelectorProps {
  onColorSelect: (colorType: PersonalColorType) => void;
  selectedColor?: PersonalColorType;
}

const personalColorData: PersonalColorInfo[] = [
  {
    type: 'spring',
    displayName: '봄웜 (Spring)',
    description: '밝고 화사한 웜톤',
    characteristics: ['선명하고 따뜻한 컬러'],
    icon: '🌱',
    bgColor: 'bg-warm-spring',
    gradientFrom: 'from-yellow-200',
    gradientTo: 'to-orange-300',
    iconColor: 'text-orange-600'
  },
  {
    type: 'summer',
    displayName: '여름쿨 (Summer)',
    description: '부드럽고 시원한 쿨톤',
    characteristics: ['부드럽고 차가운 컬러'],
    icon: '💧',
    bgColor: 'bg-cool-summer',
    gradientFrom: 'from-blue-200',
    gradientTo: 'to-purple-300',
    iconColor: 'text-blue-600'
  },
  {
    type: 'autumn',
    displayName: '가을웜 (Autumn)',
    description: '깊고 따뜻한 웜톤',
    characteristics: ['깊고 진한 웜 컬러'],
    icon: '🍂',
    bgColor: 'bg-warm-autumn',
    gradientFrom: 'from-amber-200',
    gradientTo: 'to-red-300',
    iconColor: 'text-red-600'
  },
  {
    type: 'winter',
    displayName: '겨울쿨 (Winter)',
    description: '선명하고 차가운 쿨톤',
    characteristics: ['선명하고 차가운 컬러'],
    icon: '❄️',
    bgColor: 'bg-cool-winter',
    gradientFrom: 'from-gray-200',
    gradientTo: 'to-blue-300',
    iconColor: 'text-blue-700'
  }
];

const ColorSelector = ({ onColorSelect, selectedColor }: ColorSelectorProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            퍼스널 컬러 타입을 선택하세요
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            각 계절별 특성에 맞는 컬러 팔레트를 제공해드립니다
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personalColorData.map((colorInfo) => (
            <div
              key={colorInfo.type}
              className={`personal-color-card ${colorInfo.bgColor} rounded-3xl p-8 text-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-102 ${
                selectedColor === colorInfo.type 
                  ? 'border-3 border-primary shadow-primary shadow-lg' 
                  : ''
              }`}
              onClick={() => onColorSelect(colorInfo.type)}
            >
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${colorInfo.gradientFrom} ${colorInfo.gradientTo} flex items-center justify-center shadow-inner`}>
                <span className="text-3xl">{colorInfo.icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {colorInfo.displayName}
              </h4>
              <p className="text-gray-700 mb-4">{colorInfo.description}</p>
              <div className="flex justify-center space-x-2 mb-4">
                {colorInfo.type === 'spring' && (
                  <>
                    <div className="w-6 h-6 rounded-full bg-yellow-300 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-orange-300 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-300 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-green-300 shadow-sm"></div>
                  </>
                )}
                {colorInfo.type === 'summer' && (
                  <>
                    <div className="w-6 h-6 rounded-full bg-blue-300 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-purple-300 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-200 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-300 shadow-sm"></div>
                  </>
                )}
                {colorInfo.type === 'autumn' && (
                  <>
                    <div className="w-6 h-6 rounded-full bg-amber-600 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-orange-600 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-red-600 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-yellow-600 shadow-sm"></div>
                  </>
                )}
                {colorInfo.type === 'winter' && (
                  <>
                    <div className="w-6 h-6 rounded-full bg-blue-600 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-purple-600 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-pink-600 shadow-sm"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-600 shadow-sm"></div>
                  </>
                )}
              </div>
              <span className="text-sm text-gray-600">
                {colorInfo.characteristics[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSelector;
