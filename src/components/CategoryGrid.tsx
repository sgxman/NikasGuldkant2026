import { GlassWater, Utensils, Flame, Flower } from 'lucide-react';

interface CategoryGridProps {
  onCategoryClick: (categoryId: string) => void;
}

export default function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  const categories = [
    {
      id: 'glas',
      name: 'Glas & Dryck',
      icon: GlassWater,
      description: 'Vackra glas för alla tillfällen'
    },
    {
      id: 'porslin',
      name: 'Porslin & Bestick',
      icon: Utensils,
      description: 'Elegant servering för ditt bord'
    },
    {
      id: 'belysning',
      name: 'Belysning',
      icon: Flame,
      description: 'Skapa rätt stämning'
    },
    {
      id: 'dekoration',
      name: 'Dekoration',
      icon: Flower,
      description: 'Fina detaljer som gör skillnad'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className="bg-white rounded-sm border border-stone-200 p-6 text-center hover:shadow-lg hover:border-amber-300 transition-all group"
          >
            <Icon className="text-amber-700 mx-auto mb-5" size={36} />
            <h3 className="text-lg font-medium text-stone-800 mb-2">
              {category.name}
            </h3>
            <p className="text-sm text-stone-600">
              {category.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
