import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import CaseCard from '../components/CaseCard';
import CTA from '../components/CTA';
import { Sparkles, Shield, Heart } from 'lucide-react';
import { cases } from '../data/cases';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <Hero
        title="Välkommen till Nikas Guldkant"
        subtitle="Vi skapar magiska stunder med vackra dukning och eventdekorationer för alla tillfällen"
        image="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200"
        showCTA={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white rounded-sm border border-stone-200 p-8 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-amber-800" size={24} />
            </div>
            <h3 className="text-lg font-medium text-stone-800 mb-3">
              Personlig eventhjälp
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Vi lyssnar på dina önskemål och hjälper dig hitta rätt för just din fest.
            </p>
          </div>

          <div className="bg-white rounded-sm border border-stone-200 p-8 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-amber-800" size={24} />
            </div>
            <h3 className="text-lg font-medium text-stone-800 mb-3">
              Handplockat & vackert
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Varje detalj är noga utvald för att skapa harmoni och lantlig elegans.
            </p>
          </div>

          <div className="bg-white rounded-sm border border-stone-200 p-8 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-amber-800" size={24} />
            </div>
            <h3 className="text-lg font-medium text-stone-800 mb-3">
              Tryggt hela vägen
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Vi tar hand om dig från bokning till återlämning, så du kan njuta av festen.
            </p>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="text-3xl font-serif italic text-stone-800 text-center mb-12">
            Populära kategorier
          </h2>
          <CategoryGrid onCategoryClick={(id) => onNavigate('sortiment', { category: id })} />
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-serif italic text-stone-800 text-center mb-4">
            Inspiration från tidigare fester
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
            Se hur vi hjälpt andra skapa minnesvärda tillfällen
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map(case_ => (
              <CaseCard
                key={case_.id}
                case_={case_}
                onClick={() => onNavigate('inspiration-detail', { id: case_.id })}
              />
            ))}
          </div>
        </section>

        <CTA
          title="Säg datum och antal gäster"
          description="Vi återkommer med förslag anpassat efter din fest och budget. Enkelt, tryggt och vackert."
        />
      </div>
    </div>
  );
}
