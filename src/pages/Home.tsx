import Hero from '../components/Hero';
import CaseCard from '../components/CaseCard';
import CTA from '../components/CTA';
import { cases } from '../data/cases';
import { withBaseUrl } from '../utils/images';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <Hero
        title=""
        subtitle=""
        image={withBaseUrl('/images/torn.jpg')}
      />


    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* a larger welcome text */}
      <div className="text-center text-stone-800 mb-12">
        <h2 className="text-3xl font-serif italic mb-4">Välkommen till Nikas Guldkant</h2>
        <p className="text-lg leading-relaxed">
          Välkommen till Nikas Guldkant – din partner för att skapa oförglömliga fester i Hudiksvall med omnejd. <br />
          Vi erbjuder ett handplockat sortiment av vackra produkter som hjälper dig sätta guldkant på ditt event, oavsett om det är en bröllopsfest, födelsedagskalas eller företagsevent. Med personlig service och noga utvalda detaljer gör vi det enkelt och tryggt för dig att skapa en fest som dina gäster kommer minnas. Låt oss hjälpa dig göra din nästa fest till något alldeles extra!
        </p>
      </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
n        <section className="mb-24">
          <div
            className="relative h-48 md:h-64 overflow-hidden rounded-sm mb-12 cursor-pointer"
            onClick={() => onNavigate('sortiment')}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=1200)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/60" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-4xl md:text-5xl font-lavishly text-white mb-3 leading-tight">
                Sortiment
              </h2>
              <p className="text-stone-100 text-sm md:text-base max-w-xl">
                Vi erbjuder ett handplockat sortiment för fester i alla storlekar – hitta rätt produkter för ditt event
              </p>
            </div>
          </div>

        </section>

        <section className="mb-24">
          <div
            className="relative h-48 md:h-64 overflow-hidden rounded-sm mb-12 cursor-pointer"
            onClick={() => onNavigate('sa-gar-det-till')}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/60" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-4xl md:text-5xl font-lavishly text-white mb-3 leading-tight">
                Så går det till
              </h2>
              <p className="text-stone-100 text-sm md:text-base max-w-xl">
                Enkel uthyrning från start till mål - vi tar hand om allt praktiskt
              </p>
            </div>
          </div>

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
