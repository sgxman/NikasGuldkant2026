import { ArrowLeft, Tag, Users } from 'lucide-react';
import { cases } from '../data/cases';

interface InspirationDetailProps {
  caseId: string;
  onNavigate: (page: string, params?: any) => void;
}

export default function InspirationDetail({ caseId, onNavigate }: InspirationDetailProps) {
  const case_ = cases.find(c => c.id === caseId);

  if (!case_) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-stone-600">Inspiration kunde inte hittas</p>
        <button
          onClick={() => onNavigate('inspiration')}
          className="mt-4 text-amber-800 hover:text-amber-900"
        >
          Tillbaka till inspiration
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <button
        onClick={() => onNavigate('inspiration')}
        className="flex items-center text-stone-600 hover:text-amber-800 transition-colors mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        Tillbaka till inspiration
      </button>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif italic text-stone-800 mb-4">
          {case_.title}
        </h1>
        <div className="flex items-center gap-6 text-stone-600">
          <span className="flex items-center">
            <Tag size={18} className="mr-2" />
            {case_.type}
          </span>
          <span className="flex items-center">
            <Users size={18} className="mr-2" />
            {case_.guests} gäster
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {case_.images.map((img, index) => (
          <div key={index} className="aspect-[4/3] overflow-hidden rounded-sm border border-stone-200">
            <img
              src={img}
              alt={`${case_.title} - bild ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-sm border border-stone-200 p-8">
            <h2 className="text-2xl font-serif italic text-stone-800 mb-4">
              Om evenemanget
            </h2>
            <p className="text-stone-600 leading-relaxed">
              {case_.fullDescription}
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-sm border border-stone-200 p-6 mb-6">
            <h3 className="font-medium text-stone-800 mb-4">Produkter som användes</h3>
            <ul className="space-y-2">
              {case_.products.map((product, index) => (
                <li key={index} className="text-sm text-stone-600 flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  {product}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-sm border border-stone-200 p-6">
            <h3 className="font-medium text-stone-800 mb-3">
              Planerar du liknande event?
            </h3>
            <p className="text-sm text-stone-600 mb-4">
              Kontakta oss så hjälper vi dig skapa ditt drömevt
            </p>
            <div className="space-y-2">
              <a
                href="tel:+46701234567"
                className="block text-center px-4 py-2 bg-amber-700 text-white text-sm font-medium rounded-sm hover:bg-amber-800 transition-colors"
              >
                Ring och boka
              </a>
              <a
                href="mailto:info@nikasguldkant.se"
                className="block text-center px-4 py-2 bg-white text-stone-800 text-sm font-medium rounded-sm border border-stone-300 hover:bg-stone-50 transition-colors"
              >
                Skicka förfrågan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
