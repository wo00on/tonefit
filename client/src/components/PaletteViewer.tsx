import { PersonalColorType, ColorData } from '@/types/color';
import { useLanguage } from '@/contexts/LanguageContext';

interface PaletteViewerProps {
  colorData: ColorData;
  selectedColorType: PersonalColorType;
}

const PaletteViewer = ({ colorData, selectedColorType }: PaletteViewerProps) => {
  const { t } = useLanguage();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
      {Object.entries(colorData).map(([year, pantoneColor]) => {
        const palette = pantoneColor[selectedColorType];
        
        return (
          <div key={year} className="color-card bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-2xl font-bold text-gray-900">
                  {year} {pantoneColor.name}
                </h4>
                <p className="text-gray-600 font-english">{pantoneColor.hex}</p>
              </div>
              <div 
                className="w-16 h-16 rounded-2xl shadow-inner"
                style={{ backgroundColor: pantoneColor.hex }}
              ></div>
            </div>
            
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-3">
                {t('results.recommendedColors')}
              </h5>
              <div className="flex space-x-3">
                {palette.map((color, index) => (
                  <div
                    key={index}
                    className="flex-1 h-12 rounded-xl shadow-sm"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-english">
                {palette.map((color, index) => (
                  <span key={index}>{color}</span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PaletteViewer;
