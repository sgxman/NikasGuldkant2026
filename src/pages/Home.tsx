import Hero from '../components/Hero';
import { withBaseUrl} from '../utils/images';

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
          Välkommen till Nikas Guldkant – det bekväma sättet att fixa festen. <br />
          Jag erbjuder ett brett sortiment av porslin, glas med mera som hjälper dig att sätta guldkant på ditt event, oavsett om det är en bröllopsfest, födelsedagskalas eller företagsevent. 
          Det finns ingen nedre gräns för vad du kan hyra, det kan vara allt från några extra vinglas till en komplett dukning för 150 personer. <br />
          Med personlig service och noga utvalda detaljer gör jag det enkelt och tryggt för dej att skapa en fest som både du och dina gäster kommer att minnas länge. <br />
          Det ska vara smidigt, det ska vara enkelt och du ska kunna fokusera helt på att njuta av tillställningen. <br />
          Kika runt på sidan, kolla sortimentet och hör av dej så pratar vi igenom vad just du behöver.<br />
        
          Jag ser fram emot ditt samtal. <br />
        <br />
        
          <span className="font-lavishly text-4xl">Nika</span>
        </p>
      </div>
    </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-24">
          <div
            className="relative w-full aspect-[8/5] md:aspect-[16/7] overflow-hidden rounded-sm cursor-pointer"
            onClick={() => onNavigate('sortiment')}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=1200)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/60" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-5xl md:text-7xl font-lavishly text-white mb-3 leading-tight">
                Sortiment
              </h2>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="text-center text-stone-800 mb-12">
              <p className="text-lg leading-relaxed">
                Oavsett om du planerar ett litet event eller en storslagen fest kan det behövas saker.<br />
                Kika in på vad som finns att hyra och fundera på vad just du behöver.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div
            className="relative w-full aspect-[8/5] md:aspect-[16/7] overflow-hidden rounded-sm cursor-pointer"
            onClick={() => onNavigate('sa-gar-det-till')}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/60" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-5xl md:text-7xl font-lavishly text-white mb-3 leading-tight">
                Så går det till
              </h2>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="text-center text-stone-800 mb-12">
              <p className="text-lg leading-relaxed">
                Du har kollat sortimentet och har en ide på vad du behöver. Det här är vad som sker när du kontaktar mej samt svaren på de flesta frågor.

              </p>
            </div>
          </div>
        </section>


        <section className="mb-8">
          <div
            className="relative w-full aspect-[8/5] md:aspect-[16/7] overflow-hidden rounded-sm cursor-pointer"
            onClick={() => onNavigate('inspiration')}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/60" />
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-5xl md:text-7xl font-lavishly text-white mb-3 leading-tight">
                Inspiration
              </h2>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="text-center text-stone-800 mb-12">
              <p className="text-lg leading-relaxed">
                Ingen fest är den andra lik, charmen är att göra den personlig. <br />
                Med det sagt, ibland är det skönt att få lite inspiration.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>

  );
}
