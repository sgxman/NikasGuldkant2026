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
            Det hela börjar med ett enkelt samtal. Du ringer till mej och berättar om din fest – vilket datum det är, hur många gäster du räknar med och vilken känsla du vill skapa. Inga konstigheter, bara ett vanligt samtal mellan människor.
          </p>
          <p>
            Tillsammans pratar vi igenom vad just du behöver. För en del är det bara extra skumpaglas till minglet, andra behöver allt från dukar till fullt kuvert. Då jag har många olika fester med i bagaget kan jag även ge tips och trix på vad som är smidigt och praktiskt och vad som är onödigt och kan skalas bort. Huvudsaken är att du känner att det är tryggt och att just din vision kommer fram. 

          </p>
          <p>
            När vi är överens skickar jag en sammanställning av din bokning som du beräftar och sen kan luta dig tillbaka. När ert osadatum passerat stämmer vi av igen så antalen stämmer med bokningen. Självklart kan vi längs vägen ändra, lägga till eller ta bort saker. Det är bara att höra av sig. Någon dag innan tillställningen, beroende på vad vi bestämt, hämtar du upp eller så levererar jag allt material noggrant packat till festplatsen eller hem till er.
          </p>
          <p>
            Efter festen packas allt ihop och du lämnar tillbaka allt odiskat och smutsigt. Jag kommer och hämtar upp på den tid vi kommit överens om och sen behöver ni inte tänka mer på det. Det ska vara smidigt, det ska vara enkelt och du ska kunna fokusera helt på att njuta av din fest.

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
