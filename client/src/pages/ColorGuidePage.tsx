import { PersonalColorInfo } from '@/types/color';
import colorDataJson from '@/data/colorData.json';
import { useLanguage } from '@/contexts/LanguageContext';

const ColorGuidePage = () => {
  const { t } = useLanguage();
  const personalColorData: PersonalColorInfo[] = [
    {
      type: 'spring',
      displayName: t('personalColor.spring'),
      description: t('personalColor.spring.desc'),
      characteristics: [t('personalColor.spring.char1'), t('personalColor.spring.char2'), t('personalColor.spring.char3')],
      icon: '🌱',
      bgColor: 'bg-warm-spring',
      gradientFrom: 'from-yellow-200',
      gradientTo: 'to-orange-300',
      iconColor: 'text-orange-600'
    },
    {
      type: 'summer',
      displayName: t('personalColor.summer'),
      description: t('personalColor.summer.desc'),
      characteristics: [t('personalColor.summer.char1'), t('personalColor.summer.char2'), t('personalColor.summer.char3')],
      icon: '💧',
      bgColor: 'bg-cool-summer',
      gradientFrom: 'from-blue-200',
      gradientTo: 'to-purple-300',
      iconColor: 'text-blue-600'
    },
    {
      type: 'autumn',
      displayName: t('personalColor.autumn'),
      description: t('personalColor.autumn.desc'),
      characteristics: [t('personalColor.autumn.char1'), t('personalColor.autumn.char2'), t('personalColor.autumn.char3')],
      icon: '🍂',
      bgColor: 'bg-warm-autumn',
      gradientFrom: 'from-amber-200',
      gradientTo: 'to-red-300',
      iconColor: 'text-red-600'
    },
    {
      type: 'winter',
      displayName: t('personalColor.winter'),
      description: t('personalColor.winter.desc'),
      characteristics: [t('personalColor.winter.char1'), t('personalColor.winter.char2'), t('personalColor.winter.char3')],
      icon: '❄️',
      bgColor: 'bg-cool-winter',
      gradientFrom: 'from-gray-200',
      gradientTo: 'to-blue-300',
      iconColor: 'text-blue-700'
    }
  ];

  const pantoneTimeline = [
    { year: '2025', name: 'Peach Fuzz', hex: '#FFBE98' },
    { year: '2024', name: 'Viva Magenta', hex: '#BB2649' },
    { year: '2023', name: 'Classic Blue', hex: '#0F4C75' },
    { year: '2022', name: 'Living Coral', hex: '#FF6B6B' },
    { year: '2021', name: 'Illuminating Yellow', hex: '#F5DF4D' },
    { year: '2020', name: 'Ultimate Gray', hex: '#939597' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('colorGuide.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('colorGuide.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* TONEFIT 소개 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('colorGuide.intro.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('colorGuide.intro.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* 퍼스널 컬러란? */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('colorGuide.personalColor.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('colorGuide.personalColor.desc')}<br />
              {t('colorGuide.personalColor.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalColorData.map((colorInfo) => (
              <div
                key={colorInfo.type}
                className={`${colorInfo.bgColor} rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorInfo.gradientFrom} ${colorInfo.gradientTo} flex items-center justify-center shadow-inner mr-4`}>
                    <span className="text-2xl">{colorInfo.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {colorInfo.displayName}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{colorInfo.description}</p>
                <div className="space-y-2">
                  {colorInfo.characteristics.map((characteristic, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>{characteristic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 펜톤 컬러란? */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('colorGuide.pantoneColor.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t('colorGuide.pantoneColor.desc')}<br />
              {t('colorGuide.pantoneColor.subtitle')}
            </p>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('colorGuide.pantoneFeatures.title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('colorGuide.pantoneFeatures.global')}</h4>
                  <p className="text-sm text-gray-600">{t('colorGuide.pantoneFeatures.globalDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('colorGuide.pantoneFeatures.trend')}</h4>
                  <p className="text-sm text-gray-600">{t('colorGuide.pantoneFeatures.trendDesc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('colorGuide.pantoneFeatures.usage')}</h4>
                  <p className="text-sm text-gray-600">{t('colorGuide.pantoneFeatures.usageDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 펜톤 컬러 타임라인 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('colorGuide.pantone.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('colorGuide.intro.desc')}
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {pantoneTimeline.map((item, index) => (
              <div key={item.year} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`bg-white rounded-3xl p-6 shadow-lg max-w-sm ${index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.year}</h3>
                      <h4 className="text-lg text-gray-700">{item.name}</h4>
                      <p className="text-sm text-gray-500 font-english">{item.hex}</p>
                    </div>
                    <div 
                      className="w-16 h-16 rounded-2xl shadow-inner"
                      style={{ backgroundColor: item.hex }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('colorGuide.cta.title')}
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              {t('colorGuide.cta.desc')}
            </p>
            <a 
              href="/"
              className="inline-block bg-white hover:bg-gray-100 text-primary font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('colorGuide.cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ColorGuidePage;