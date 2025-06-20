import { OutfitRecommendation } from '@/types/color';

interface OutfitCardProps {
  outfit: OutfitRecommendation;
}

const OutfitCard = ({ outfit }: OutfitCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg color-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={outfit.imageUrl}
        alt={outfit.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-3">
          {outfit.title}
        </h4>
        <p className="text-gray-600 mb-4">
          {outfit.description}
        </p>
        <div className="flex space-x-2 mb-4">
          {outfit.colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full shadow-sm"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          {outfit.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;
