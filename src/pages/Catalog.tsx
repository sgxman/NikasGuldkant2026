import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import { fetchCategories, productsjsonurl } from '../data/products';
import ResponsiveImage from '../components/ResponsiveImage';
import { resolveImageSources, withBaseUrl } from '../utils/images';
import { Hammer } from 'lucide-react';

interface CatalogProps {
  initialCategory?: string;
  initialSubcategory?: string;
  onNavigate: (page: string, params?: any) => void;
}

export default function Catalog({ initialCategory, initialSubcategory, onNavigate }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory || 'all');
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [subcategoriesByCategory, setSubcategoriesByCategory] = useState<Record<string, { id: string; name: string }[]>>({});  const [categorySortOrder, setCategorySortOrder] = useState<Record<string, number>>({});
  const [subcategorySortOrder, setSubcategorySortOrder] = useState<Record<string, Record<string, number>>>({});  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    if (initialSubcategory) {
      setSelectedSubcategory(initialSubcategory);
    }

    fetchCategories().then(fetchedCategories => {
      const formattedCategories = fetchedCategories.map(cat => ({ id: cat.name, name: cat.title }));
      setCategories([{ id: 'all', name: 'Alla produkter' }, ...formattedCategories]);
      const formattedSubcategories: Record<string, { id: string; name: string }[]> = {};
      const catSortOrder: Record<string, number> = {};
      const subSortOrder: Record<string, Record<string, number>> = {};
      fetchedCategories.forEach(cat => {
        formattedSubcategories[cat.name] = cat.subcategories.map(sub => ({ id: sub.name, name: sub.title }));
        catSortOrder[cat.name] = cat.sortOrder ?? 999;
        subSortOrder[cat.name] = {};
        cat.subcategories.forEach(sub => {
          subSortOrder[cat.name][sub.name] = sub.sortOrder ?? 999;
        });
      });
      setSubcategoriesByCategory(formattedSubcategories);
      setCategorySortOrder(catSortOrder);
      setSubcategorySortOrder(subSortOrder);
    });
  }, [initialCategory]);

  //initially load all products from the products.json on dropbox
  useEffect(() => {
    fetch(productsjsonurl)
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  useEffect(() => {
    if (products.length === 0 || Object.keys(categorySortOrder).length === 0) return;
    products.forEach(product => {
      if (!(product.categoryName in categorySortOrder)) {
        console.warn(`Product id=${product.id} "${product.name}" has unknown categoryName: "${product.categoryName}"`);
      } else if (product.subcategoryName && !(product.subcategoryName in (subcategorySortOrder[product.categoryName] ?? {}))) {
        console.warn(`Product id=${product.id} "${product.name}" has unknown subcategoryName: "${product.subcategoryName}" in category "${product.categoryName}"`);
      }
    });
  }, [products, categorySortOrder, subcategorySortOrder]);

  const availableSubcategories = selectedCategory === 'all'
    ? []
    : subcategoriesByCategory[selectedCategory] || [];

  const filteredProducts = products
    .filter(product => {
      if (selectedCategory === 'all') {
        return true;
      }

      if (product.categoryName !== selectedCategory) {
        return false;
      }

      if (selectedSubcategory === 'all') {
        return true;
      }

      return product.subcategoryName === selectedSubcategory;
    })
    .sort((a, b) => {
      const catA = categorySortOrder[a.categoryName] ?? 999;
      const catB = categorySortOrder[b.categoryName] ?? 999;
      if (catA !== catB) return catA - catB;
      const subA = (subcategorySortOrder[a.categoryName]?.[a.subcategoryName]) ?? 999;
      const subB = (subcategorySortOrder[b.categoryName]?.[b.subcategoryName]) ?? 999;
      if (subA !== subB) return subA - subB;
      return a.id - b.id;
    });

  return (
    <div>
      <Hero
        title="Sortiment"
        subtitle=""
        image={withBaseUrl('/images/webp-800/meny-sortiment.webp')}
        maxHeightVh={70}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center text-stone-800 mb-12">
          <p className="text-lg leading-relaxed italic">
            <Hammer className='inline-block mr-2' /> 
            Sidan är under uppbyggnad och sortimentet kommer att fyllas på. <br />
            Hör av dej om det är något särskilt du söker.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {[...categories].sort((a, b) => {
              if (a.id === 'all') return -1;
              if (b.id === 'all') return 1;
              return (categorySortOrder[a.id] ?? 999) - (categorySortOrder[b.id] ?? 999);
            }).map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedSubcategory('all');
                  window.scrollTo(0, 0);
                }}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat.id
                  ? 'bg-stone-700 text-white'
                  : 'bg-white text-stone-700 border border-stone-300 hover:border-stone-400'
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>


          {selectedCategory !== 'all' && (
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <button
                onClick={() => {
                  setSelectedSubcategory('all');
                  window.scrollTo(0, 0);
                }}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${selectedSubcategory === 'all'
                  ? 'bg-stone-700 text-white'
                  : 'bg-white text-stone-700 border border-stone-300 hover:border-stone-700'
                  }`}
              >
                Alla i kategorin
              </button>

              {[...availableSubcategories].sort((a, b) =>
                (subcategorySortOrder[selectedCategory]?.[a.id] ?? 999) - (subcategorySortOrder[selectedCategory]?.[b.id] ?? 999)
              ).map(subcat => (
                <button
                  key={subcat.id}
                  onClick={() => {
                    setSelectedSubcategory(subcat.id);
                    window.scrollTo(0, 0);
                  }}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${selectedSubcategory === subcat.id
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
              onClick={() => onNavigate('product-detail', { id: product.id, category: selectedCategory, subcategory: selectedSubcategory })}
              className="bg-white rounded-sm border border-stone-200 overflow-hidden hover:shadow-lg transition-all group text-left flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-stone-50">
                <ResponsiveImage
                  {...resolveImageSources(product.image, product.imageBase)}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
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
       
      </div>
    </div>
  );
}
