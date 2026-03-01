import Hero from '../components/Hero';

export default function HowItWorks() {
  return (
    <div>
      <Hero
        title="Så går det till"
        subtitle=""
        image="https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto mb-24 space-y-6 text-stone-700 text-base leading-relaxed">
          <p>
            Det hela börjar med ett enkelt samtal. Du ringer till Nika och berättar om din fest – vilket datum det är, hur många gäster du räknar med och vilken känsla du vill skapa. Inga konstigheter, bara ett vanligt samtal mellan människor.
          </p>
          <p>
            Utifrån det du berättar bokar Nika in ett personligt möte med dig – antingen hemma hos dig, på festplatsen eller på ett annat sätt som passar. Där går ni igenom dina önskemål i lugn och ro, tittar på produkter och idéer, och sätter ihop ett upplägg som passar just din fest och budget.
          </p>
          <p>
            När ni är överens bekräftas bokningen och du kan luta dig tillbaka. På överenskommen tid levererar Nika allt material noggrant packat och klart. Du slipper stressen – fokus är helt på att du ska kunna njuta av din dag.
          </p>
          <p>
            Efter festen lämnar du tillbaka allt smutsigt. Nika tar hand om resten.
          </p>
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


      </div>
    </div>
  );
}
