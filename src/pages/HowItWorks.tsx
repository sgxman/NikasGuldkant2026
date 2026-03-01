import Hero from '../components/Hero';
import CTA from '../components/CTA';
import { Phone, Calendar, Truck, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: 'Kontakta oss',
      description: 'Ring eller mejla med datum, antal gäster och önskemål. Vi återkommer snabbt med förslag och pris.'
    },
    {
      icon: Calendar,
      title: 'Boka och planera',
      description: 'Vi bokar ditt datum och går igenom alla detaljer. Du får en bekräftelse och information om hämtning/leverans.'
    },
    {
      icon: Truck,
      title: 'Leverans eller hämtning',
      description: 'Vi levererar eller så hämtar du själv på överenskommen tid. Allt är noggrant packat och klart för ditt event.'
    },
    {
      icon: CheckCircle,
      title: 'Njut av festen',
      description: 'Efter evenemanget återlämnar du sakerna smutsiga - vi tar hand om disken! Enkelt och bekymmersfritt.'
    }
  ];

  return (
    <div>
      <Hero
        title="Så går det till"
        subtitle=""
        image="https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="text-amber-800" size={36} />
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 -z-10 w-16 h-16 bg-amber-50 rounded-full" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-amber-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-stone-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <section className="mb-24">
          <h2 className="text-3xl font-serif italic text-stone-800 text-center mb-12">
            Vanliga frågor
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-sm border border-stone-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2">
                Hur långt i förväg måste jag boka?
              </h3>
              <p className="text-sm text-stone-600">
                Vi rekommenderar att du bokar minst 2-3 veckor i förväg, särskilt under högsäsong.
                Kontakta oss gärna även för kortare varsel - vi gör vårt bästa för att hjälpa till!
              </p>
            </div>

            <div className="bg-white rounded-sm border border-stone-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2">
                Vad händer om något går sönder?
              </h3>
              <p className="text-sm text-stone-600">
                Vi förstår att olyckor kan hända. Normalt slitage ingår i hyran. Vid skador
                debiteras du för reparation eller ersättning av produkten.
              </p>
            </div>

            <div className="bg-white rounded-sm border border-stone-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2">
                Måste jag diska sakerna innan återlämning?
              </h3>
              <p className="text-sm text-stone-600">
                Nej! Lämna tillbaka allt smutsigt så tar vi hand om disken.
                Du behöver bara skrapa av matrester och packa sakerna försiktigt.
              </p>
            </div>

            <div className="bg-white rounded-sm border border-stone-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2">
                Levererar ni till min adress?
              </h3>
              <p className="text-sm text-stone-600">
                Ja, vi levererar inom Hudiksvall med omnejd. Leveranskostnad beror på avstånd
                och beställningens storlek. Du kan också hämta och lämna själv om du föredrar det.
              </p>
            </div>

            <div className="bg-white rounded-sm border border-stone-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2">
                Kan jag få hjälp med dukning och styling?
              </h3>
              <p className="text-sm text-stone-600">
                Absolut! Vi erbjuder hjälp med styling och dukning mot en extra kostnad.
                Kontakta oss så berättar vi mer om våra stylingtjänster.
              </p>
            </div>
          </div>
        </section>

        <CTA
          title="Redo att boka?"
          description="Kontakta oss idag så hjälper vi dig skapa en minnesvärd fest"
        />
      </div>
    </div>
  );
}
