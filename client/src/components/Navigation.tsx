import React from "react";
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [location] = useLocation();
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="">
              <h1 className="text-2xl font-bold text-gray-900 font-english cursor-pointer">
                TONE<span className="text-primary">FIT</span>
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="">
              <span className={`text-gray-700 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors font-medium cursor-pointer ${
                location === '/' ? 'text-black underline underline-offset-4 decoration-2' : ''
              }`}>
                {t('nav.home')}
              </span>
            </Link>
            <Link href="color-guide">
              <span className={`text-gray-700 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors font-medium cursor-pointer ${
                location === '/color-guide' ? 'text-black underline underline-offset-4 decoration-2' : ''
              }`}>
                {t('nav.colorGuide')}
              </span>
            </Link>
            <Link href="quiz">
              <span className={`text-gray-700 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors font-medium cursor-pointer ${
                location === '/quiz' ? 'text-black underline underline-offset-4 decoration-2' : ''
              }`}>
                {t('nav.quiz')}
              </span>
            </Link>
            <Link href="personal-colors">
              <span className={`text-gray-700 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors font-medium cursor-pointer ${
                location === '/personal-colors' ? 'text-black underline underline-offset-4 decoration-2' : ''
              }`}>
                {t('nav.personalColors')}
              </span>
            </Link>
          </div>
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
