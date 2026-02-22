import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string, params?: any) => void;
}

export default function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = products.find(p => p.id === productId);

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
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
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

          <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-sm border border-stone-200 p-6">
            <div className="flex items-start mb-4">
              <ShoppingCart className="text-amber-800 mr-3 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-medium text-stone-800 mb-2">
                  Intresserad av att hyra?
                </h3>
                <p className="text-sm text-stone-600 mb-4">
                  Kontakta oss för att boka denna produkt till ditt event.
                  Vi erbjuder paketpriser för större beställningar.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+46701234567"
                    className="inline-flex items-center justify-center px-6 py-2 bg-amber-700 text-white text-sm font-medium rounded-sm hover:bg-amber-800 transition-colors"
                  >
                    Ring och boka
                  </a>
                  <a
                    href="mailto:info@nikasguldkant.se"
                    className="inline-flex items-center justify-center px-6 py-2 bg-white text-stone-800 text-sm font-medium rounded-sm border border-stone-300 hover:bg-stone-50 transition-colors"
                  >
                    Skicka förfrågan
                  </a>
                </div>
              </div>
            </div>
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
