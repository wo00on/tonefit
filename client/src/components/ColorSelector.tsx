import { PersonalColorType, PersonalColorInfo } from '@/types/color';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import springBg from '../assets/spring.png';
import summerBg from '../assets/summer.png';
import autumnBg from '../assets/autumn.png';
import winterBg from '../assets/winter.png';

interface ColorSelectorProps {
  onColorSelect: (colorType: PersonalColorType) => void;
  selectedColor?: PersonalColorType;
}

const personalColorData: PersonalColorInfo[] = [
  {
    type: 'spring',
    displayName: 'spring',
    description: 'spring',
    characteristics: ['spring'],
    icon: '🌱',
  },
  {
    type: 'summer',
    displayName: 'summer',
    description: 'summer',
    characteristics: ['summer'],
    icon: '💧',
  },
  {
    type: 'autumn',
    displayName: 'autumn',
    description: 'autumn',
    characteristics: ['autumn'],
    icon: '🍂',
  },
  {
    type: 'winter',
    displayName: 'winter',
    description: 'winter',
    characteristics: ['winter'],
    icon: '❄️',
  }
];

const bgImages = {
  spring: springBg,
  summer: summerBg,
  autumn: autumnBg,
  winter: winterBg,
};

const ColorSelector = ({ onColorSelect, selectedColor }: ColorSelectorProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('colorSelector.title')}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('colorSelector.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personalColorData.map((colorInfo) => (
            <div
              key={colorInfo.type}
              className={`personal-color-card relative rounded-3xl p-8 text-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-102 ${
                selectedColor === colorInfo.type 
                  ? 'border-3 border-primary shadow-primary shadow-lg' 
                  : ''
              }`}
              style={{
                backgroundImage: `url(${bgImages[colorInfo.type]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              onClick={() => onColorSelect(colorInfo.type)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl z-0" />
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white bg-opacity-70 flex items-center justify-center shadow-inner">
                  <span className="text-3xl">{colorInfo.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">
                  {t(`colorSelector.${colorInfo.displayName}`)}
                </h4>
                <p className="text-white mb-4">{t(`colorSelector.${colorInfo.description}.desc`)}</p>
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
                <span className="text-sm text-white">
                  {t(`colorSelector.${colorInfo.characteristics[0]}.detail`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSelector;