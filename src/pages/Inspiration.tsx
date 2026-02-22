import Hero from '../components/Hero';
import CaseCard from '../components/CaseCard';
import { cases } from '../data/cases';

interface InspirationProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Inspiration({ onNavigate }: InspirationProps) {
  return (
    <div>
      <Hero
        title="Inspiration"
        subtitle="Se hur vi hjälpt andra skapa minnesvärda tillfällen med våra produkter"
        image="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-stone-600 max-w-2xl mx-auto">
            Här hittar du exempel från tidigare event där vi bidragit med produkter och styling.
            Låt dig inspireras och se hur vårt sortiment kan skapa den perfekta stämningen för ditt tillfälle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map(case_ => (
            <CaseCard
              key={case_.id}
              case_={case_}
              onClick={() => onNavigate('inspiration-detail', { id: case_.id })}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-amber-50 to-stone-100 rounded-sm border border-stone-200 p-8 text-center">
          <h3 className="text-2xl font-serif italic text-stone-800 mb-4">
            Vill du att ditt event ska visas här?
          </h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Vi älskar att dela inspiration från våra kunders fantastiska fester!
            Kontakta oss om du vill att vi fotograferar och delar ditt event.
          </p>
        </div>
      </div>
    </div>
  );
}
