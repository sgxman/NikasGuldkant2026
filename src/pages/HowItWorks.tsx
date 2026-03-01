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
            <strong>Samtalet</strong><br />
            Det hela börjar med ett enkelt samtal. Du ringer till mej och berättar om din fest – vilket datum det är, 
            hur många gäster du räknar med och vilken känsla du vill skapa. Inga konstigheter, bara ett vanligt samtal mellan dej och mej.
          </p>
          <p>
            Tillsammans pratar vi igenom vad just du behöver. För en del är det bara extra skumpaglas till minglet, andra behöver allt från dukar till fullt kuvert. 
            Då jag har många olika fester med i bagaget kan jag även ge tips och trix om vad som är smidigt, praktiskt och vad som är onödigt och kan skalas bort. 
            Huvudsaken är att du känner att det är tryggt och att just din vision kommer fram. 

          </p>
          <p>
            <strong>Bekräftelsen</strong><br />
            När vi är överens skickar jag en sammanställning av din bokning som du bekräftar och sedan kan du lugnt luta dig tillbaka. 
            När ert OSA-datum har passerat stämmer vi av igen så att antalen stämmer med bokningen. <br />
            Självklart kan vi längs vägen ändra, lägga till eller ta bort saker. Det är bara att höra av sej. 
            </p>
          <p>
            <strong>Leveransen</strong><br />
            Någon dag innan tillställningen, beroende på vad vi tillsammans bestämt, hämtar du upp 
            eller så levererar jag allt material noggrant packat till festplatsen eller hem till dej.
          </p>
          <p>
            <strong>Återlämnandet</strong><br />
            Efter festen packas allt ihop efter de instruktioner vi gått igenom och allt lämnas tillbaka odiskat och smutsigt. 
            Jag kommer och hämtar upp på den tid vi kommit överens om, alternativt lämnar ni tillbaka det själva, sedan behöver ni inte tänka mer på det.
             Det ska vara smidigt, det ska vara enkelt och du ska kunna fokusera helt på att njuta av din fest.

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
                Jag har mycket grejer men inte ett oändligt lager, så ju förr ni bokar desto bättre, speciellt under högsäsong. 
                Här gäller först till kvarnprincipen. 
              </p>
            </div>

            <div className="bg-white rounded-sm border border-stone-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2">
                Vad händer om något går sönder?
              </h3>
              <p className="text-sm text-stone-600">
                Jag förstår att olyckor kan hända och jag brukar därför alltid skicka med några glas extra, då mycket kan hända under transport hur väl det än är packat.
                Normalt slitage ingår och om nåt enstaka grej går sönder är det ok. 
                Om det däremot är en större mängd eller beror på vårdslöshet kan det tillkomma en extra debitering för att täcka den kostnaden.
                Det är dock väldigt sällan det händer och om det gör det löser vi det tillsammans.
                
              </p>
            </div>

            <div className="bg-white rounded-sm border border-stone-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2">
                Måste jag diska sakerna innan återlämning?
              </h3>
              <p className="text-sm text-stone-600">
                Nej, det ingår i hyran att slippa disken. 
                Lämna tillbaka allt smutsigt så tar jag hand om disken och tvätten.
                Det enda du behöver göra är att skrapa av matrester och packa sakerna enligt de anvisningar ni får vid leveransen.
              </p>
            </div>

            <div className="bg-white rounded-sm border border-stone-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2">
                Levererar ni till min adress?
              </h3>
              <p className="text-sm text-stone-600">
                Ja, jag levererar inom Hudiksvall med omnejd. Leveranskostnad beror på avstånd
                och beställningens storlek. Det går vi igenom under bokningen. Du kan också hämta och lämna själv om du föredrar det.
              </p>
            </div>

            <div className="bg-white rounded-sm border border-stone-200 p-6">
              <h3 className="font-medium text-stone-800 mb-2">
                Kan jag få hjälp med dukning och styling? 
              </h3>
              <p className="text-sm text-stone-600">
                Javisst, det kan jag ordna. 
                Tänk på mej som ett bollplank som kan lotsa dej genom hela processen och hänvisa dej vidare till den hjälp du behöver. 
                Jag har många kontakter i branchen och kan hjälpa dej att hitta rätt leverantörer för just din fest, oavsett om det gäller catering,
                 blommor, underhållning eller något annat.
                
               
              </p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
