import { useState } from 'react';
import Hero from '../components/Hero';
import { products } from '../data/products';
import { Tag } from 'lucide-react';
import ResponsiveImage from '../components/ResponsiveImage';
import { resolveImageSources } from '../utils/images';

interface CatalogProps {
  initialCategory?: string;
  onNavigate: (page: string, params?: any) => void;
}

export default function Catalog({ initialCategory, onNavigate }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Alla produkter' },
    { id: 'glas', name: 'Glas & Dryck' },
    { id: 'porslin', name: 'Porslin & Bestick' },
    { id: 'belysning', name: 'Belysning' },
    { id: 'dekoration', name: 'Dekoration' }
  ];

  const subcategoriesByCategory: Record<string, { id: string; name: string }[]> = {
    glas: [
      { id: 'champagneglas', name: 'Champagneglas' },
      { id: 'vinglas', name: 'Vinglas' }
    ],
    porslin: [
      { id: 'tallrikar', name: 'Tallrikar' },
      { id: 'bestick', name: 'Bestick' }
    ],
    belysning: [
      { id: 'lyktor', name: 'Lyktor' },
      { id: 'ljusslingor', name: 'Ljusslingor' }
    ],
    dekoration: [
      { id: 'dukar', name: 'Dukar' },
      { id: 'vaser-krukor', name: 'Vaser & Krukor' }
    ]
  };

  const availableSubcategories = selectedCategory === 'all'
    ? []
    : subcategoriesByCategory[selectedCategory] || [];

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') {
      return true;
    }

    if (product.category !== selectedCategory) {
      return false;
    }

    if (selectedSubcategory === 'all') {
      return true;
    }

    return product.subcategory === selectedSubcategory;
  });

  return (
    <div>
      <Hero
        title="Sortiment"
        subtitle=""
        image="https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedSubcategory('all');
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-amber-700 text-white'
                    : 'bg-white text-stone-700 border border-stone-300 hover:border-amber-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {selectedCategory !== 'all' && (
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <button
                onClick={() => setSelectedSubcategory('all')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSubcategory === 'all'
                    ? 'bg-stone-700 text-white'
                    : 'bg-white text-stone-700 border border-stone-300 hover:border-stone-700'
                }`}
              >
                Alla i kategorin
              </button>

              {availableSubcategories.map(subcat => (
                <button
                  key={subcat.id}
                  onClick={() => setSelectedSubcategory(subcat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSubcategory === subcat.id
                      ? 'bg-stone-700 text-white'
                      : 'bg-white text-stone-700 border border-stone-300 hover:border-stone-700'
                  }`}
                >
                  {subcat.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <button
              key={product.id}
              onClick={() => onNavigate('product-detail', { id: product.id })}
              className="bg-white rounded-sm border border-stone-200 overflow-hidden hover:shadow-lg transition-all group text-left"
            >
              <div className="aspect-square overflow-hidden">
                <ResponsiveImage
                  {...resolveImageSources(product.image, product.imageBase)}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-stone-800 mb-2 group-hover:text-amber-800 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-stone-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-amber-800">
                    {product.price} kr/st
                  </span>
                  <span className="text-xs text-stone-500">
                    {product.available} st tillgängliga
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-amber-50 to-stone-100 rounded-sm border border-stone-200 p-8 text-center">
          <Tag className="w-12 h-12 text-amber-800 mx-auto mb-4" />
          <h3 className="text-2xl font-serif italic text-stone-800 mb-4">
            Minsta beställning 500 kr
          </h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Vi anpassar alltid priserna efter ditt event och erbjuder paketpriser för större beställningar.
            Kontakta oss för en skräddarsydd offert.
          </p>
        </div>
      </div>
    </div>
  );
}
