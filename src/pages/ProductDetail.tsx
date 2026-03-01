import { ArrowLeft } from 'lucide-react';
import { fetchProducts } from '../data/products';
import ResponsiveImage from '../components/ResponsiveImage';
import { resolveImageSources } from '../utils/images';
import { useEffect } from 'react';
import { useState } from 'react';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string, params?: any) => void;
}

export default function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    fetchProducts().then(fetchedProducts => {
      const foundProduct = fetchedProducts.find(p => p.id === productId);
      setProduct(foundProduct || null);
    });
  }, [productId]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-stone-600">Produkten kunde inte hittas</p>
        <button
          onClick={() => onNavigate('sortiment')}
          className="mt-4 text-amber-800 hover:text-amber-900"
        >
          Tillbaka till sortiment
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <button
        onClick={() => onNavigate('sortiment')}
        className="flex items-center text-stone-600 hover:text-amber-800 transition-colors mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        Tillbaka till sortiment
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square overflow-hidden rounded-sm border border-stone-200">
          <ResponsiveImage
            {...resolveImageSources(product.image, product.imageBase)}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-serif italic text-stone-800 mb-4">
            {product.name}
          </h1>

          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-4xl font-bold text-amber-800">
              {product.price} kr
            </span>
            <span className="text-stone-600">per styck</span>
          </div>

          <div className="bg-stone-50 rounded-sm border border-stone-200 p-4 mb-6">
            <p className="text-sm text-stone-600">
              <span className="font-medium text-stone-800">Tillgänglighet:</span> {product.available} st i lager
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-medium text-stone-800 mb-3">Beskrivning</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              {product.description}
            </p>
            <p className="text-stone-600 leading-relaxed">
              {product.details}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-200">
            <h3 className="font-medium text-stone-800 mb-3">Information</h3>
            <ul className="space-y-2 text-sm text-stone-600">
              <li>• Minsta beställning: 500 kr</li>
              <li>• Leverans tillgänglig inom Hudiksvall med omnejd</li>
              <li>• Återlämnas smutsiga - vi tar hand om disken</li>
              <li>• Boka minst 2-3 veckor i förväg</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
