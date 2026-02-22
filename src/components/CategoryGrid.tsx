import { Wine, Utensils, Lamp, Flower } from 'lucide-react';

interface CategoryGridProps {
  onCategoryClick: (categoryId: string) => void;
}

export default function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  const categories = [
    {
      id: 'glas',
      name: 'Glas & Dryck',
      icon: Wine,
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
      icon: Lamp,
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
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
              <Icon className="text-amber-800" size={32} />
            </div>
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
