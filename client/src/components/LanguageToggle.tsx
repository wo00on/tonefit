import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ko' ? 'en' : 'ko');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm border border-gray-200/70 hover:bg-white/90 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <Globe className="w-4 h-4 mr-1" />
      {language === 'ko' ? 'EN' : 'KO'}
    </Button>
  );
}