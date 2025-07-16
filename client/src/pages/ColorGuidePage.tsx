import React from "react";
import { PersonalColorInfo } from '@/types/color';
import colorDataJson from '@/data/colorData.json';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Palette, TrendingUp, Globe, Award } from 'lucide-react';

const ColorGuidePage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('spring');
  
  const personalColorData: PersonalColorInfo[] = [
    {
      type: 'spring',
      displayName: t('personalColor.spring'),
      description: t('personalColor.spring.desc'),
      characteristics: [t('personalColor.spring.char1'), t('personalColor.spring.char2'), t('personalColor.spring.char3')],
      icon: '🌱',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      gradientFrom: 'from-yellow-200',
      gradientTo: 'to-orange-300',
      iconColor: 'text-orange-600',
      accentColor: 'border-orange-200',
      textColor: 'text-orange-800'
    },
    {
      type: 'summer',
      displayName: t('personalColor.summer'),
      description: t('personalColor.summer.desc'),
      characteristics: [t('personalColor.summer.char1'), t('personalColor.summer.char2'), t('personalColor.summer.char3')],
      icon: '💧',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50',
      gradientFrom: 'from-blue-200',
      gradientTo: 'to-purple-300',
      iconColor: 'text-blue-600',
      accentColor: 'border-blue-200',
      textColor: 'text-blue-800'
    },
    {
      type: 'autumn',
      displayName: t('personalColor.autumn'),
      description: t('personalColor.autumn.desc'),
      characteristics: [t('personalColor.autumn.char1'), t('personalColor.autumn.char2'), t('personalColor.autumn.char3')],
      icon: '🍂',
      bgColor: 'bg-gradient-to-br from-amber-50 to-red-50',
      gradientFrom: 'from-amber-200',
      gradientTo: 'to-red-300',
      iconColor: 'text-red-600',
      accentColor: 'border-red-200',
      textColor: 'text-red-800'
    },
    {
      type: 'winter',
      displayName: t('personalColor.winter'),
      description: t('personalColor.winter.desc'),
      characteristics: [t('personalColor.winter.char1'), t('personalColor.winter.char2'), t('personalColor.winter.char3')],
      icon: '❄️',
      bgColor: 'bg-gradient-to-br from-gray-50 to-blue-50',
      gradientFrom: 'from-gray-200',
      gradientTo: 'to-blue-300',
      iconColor: 'text-blue-700',
      accentColor: 'border-blue-200',
      textColor: 'text-blue-800'
    }
  ];

  const pantoneTimeline = [
    { year: '2025', name: 'Peach Fuzz', hex: '#FFBE98', description: '따뜻하고 부드러운 복숭아색으로 편안함과 안정감을 표현' },
    { year: '2024', name: 'Viva Magenta', hex: '#BB2649', description: '대담하고 활기찬 마젠타로 에너지와 자신감을 상징' },
    { year: '2023', name: 'Classic Blue', hex: '#0F4C75', description: '깊고 신뢰할 수 있는 파란색으로 안정감과 지혜를 나타냄' },
    { year: '2022', name: 'Living Coral', hex: '#FF6B6B', description: '생동감 있는 산호색으로 생명력과 낙관주의를 표현' },
    { year: '2021', name: 'Illuminating Yellow', hex: '#F5DF4D', description: '밝고 희망적인 노란색으로 긍정적 에너지를 상징' },
    { year: '2020', name: 'Ultimate Gray', hex: '#939597', description: '중성적이고 균형잡힌 회색으로 안정감과 지속성을 표현' }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('colorGuide.pantoneFeatures.global'),
      description: t('colorGuide.pantoneFeatures.globalDesc'),
      color: 'bg-blue-500'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('colorGuide.pantoneFeatures.trend'),
      description: t('colorGuide.pantoneFeatures.trendDesc'),
      color: 'bg-purple-500'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t('colorGuide.pantoneFeatures.usage'),
      description: t('colorGuide.pantoneFeatures.usageDesc'),
      color: 'bg-green-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full blur-xl"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-300 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-indigo-300 rounded-full blur-xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 mb-4">
              <Sparkles className="w-4 h-4 mr-2 text-pink-500" />
              컬러 가이드
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-600 bg-clip-text text-transparent mb-6">
              {t('colorGuide.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('colorGuide.subtitle')}
            </p>
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl"
              >
                <ChevronDown className="text-gray-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TONEFIT 소개 */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl mb-6">
              <Palette className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('colorGuide.intro.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {t('colorGuide.intro.desc')}
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 퍼스널 컬러란? */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('colorGuide.personalColor.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('colorGuide.personalColor.desc')}<br />
              {t('colorGuide.personalColor.subtitle')}
            </p>
          </motion.div>
          
          {/* 탭 네비게이션 */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              {personalColorData.map((colorInfo) => (
                <button
                  key={colorInfo.type}
                  onClick={() => setActiveTab(colorInfo.type)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === colorInfo.type
                      ? `${colorInfo.bgColor} ${colorInfo.textColor} shadow-md`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{colorInfo.icon}</span>
                  {colorInfo.displayName}
                </button>
              ))}
            </div>
          </div>
          
          {/* 탭 컨텐츠 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {personalColorData.filter(info => info.type === activeTab).map((colorInfo) => (
              <div key={colorInfo.type} className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${colorInfo.gradientFrom} ${colorInfo.gradientTo} flex items-center justify-center shadow-xl`}>
                      <span className="text-4xl">{colorInfo.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {colorInfo.displayName}
                      </h3>
                      <p className="text-lg text-gray-600">{colorInfo.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">특징</h4>
                    {colorInfo.characteristics.map((characteristic, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-3 h-3 rounded-full ${colorInfo.iconColor} bg-opacity-20`}></div>
                        <span className="text-gray-700">{characteristic}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="relative">
              <div className={`w-full h-96 rounded-3xl bg-gradient-to-br ${personalColorData.find(info => info.type === activeTab)?.gradientFrom} ${personalColorData.find(info => info.type === activeTab)?.gradientTo} shadow-2xl`}>
                <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">{personalColorData.find(info => info.type === activeTab)?.icon}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 펜톤 컬러란? */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('colorGuide.pantoneColor.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
              {t('colorGuide.pantoneColor.desc')}<br />
              {t('colorGuide.pantoneColor.subtitle')}
            </p>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 ${feature.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">{feature.title}</h4>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 펜톤 컬러 타임라인 */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('colorGuide.pantone.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('colorGuide.intro.desc')}
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-gray-300 to-gray-100"></div>
            
            {pantoneTimeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full border-4 border-white shadow-xl z-10"></div>
                
                {/* Content */}
                <div className={`bg-white rounded-3xl p-8 shadow-xl max-w-md border border-gray-100 hover:shadow-2xl transition-all duration-300 ${index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{item.year}</h3>
                        <h4 className="text-xl font-semibold text-gray-700">{item.name}</h4>
                        <p className="text-sm text-gray-500 font-mono">{item.hex}</p>
                      </div>
                      <div 
                        className="w-20 h-20 rounded-2xl shadow-lg border-2 border-gray-100"
                        style={{ backgroundColor: item.hex }}
                      ></div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('colorGuide.cta.title')}
            </h2>
            <p className="text-xl text-pink-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('colorGuide.cta.desc')}
            </p>
            <motion.a 
              href=""
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white hover:bg-gray-50 text-purple-600 font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              {t('colorGuide.cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ColorGuidePage; 