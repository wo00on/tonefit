import { Link, useLocation } from 'wouter';

const Navigation = () => {
  const [location] = useLocation();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-gray-900 font-english cursor-pointer">
                TONE<span className="text-primary">FIT</span>
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer ${
                location === '/' ? 'text-primary' : ''
              }`}>
                홈
              </span>
            </Link>
            <Link href="/color-guide">
              <span className={`text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer ${
                location === '/color-guide' ? 'text-primary' : ''
              }`}>
                컬러 가이드
              </span>
            </Link>
            <Link href="/quiz">
              <span className="bg-primary hover:bg-pink-600 text-white px-4 py-2 rounded-full transition-colors font-medium cursor-pointer">
                내 컬러 진단 키트
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
