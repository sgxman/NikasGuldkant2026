import Hero from '../components/Hero';
import { PhoneCall, Send, MapPin, CalendarClock } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <Hero
        title="Kontakt"
        subtitle=""
        image="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif italic text-stone-800 mb-8">
              Hör av dig
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneCall className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <div className="ml-4">
                  <h3 className="font-medium text-stone-800 mb-1">Telefon</h3>
                  <a href="tel:+46730207511" className="text-stone-600 hover:text-amber-800 transition-colors">
                    073-020 75 11
                  </a>
                  <p className="text-sm text-stone-500 mt-1">
                    Ring för snabb kontakt och bokning
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Send className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <div className="ml-4">
                  <h3 className="font-medium text-stone-800 mb-1">E-post</h3>
                  <a href="mailto:info@nikasguldkant.se" className="text-stone-600 hover:text-amber-800 transition-colors">
                    info@nikasguldkant.se
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <div className="ml-4">
                  <h3 className="font-medium text-stone-800 mb-1">Område</h3>
                  <p className="text-stone-600">Hudiksvall med omnejd</p>
                  <p className="text-sm text-stone-500 mt-1">
                    Vi levererar i hela Hudiksvall och närliggande områden
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CalendarClock className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                <div className="ml-4">
                  <h3 className="font-medium text-stone-800 mb-1">Öppettider</h3>
                  <p className="text-sm text-stone-500 mt-1">
                    Ring eller skicka ett sms så återkommer jag så fort jag kan.<br />
                    Jag har inte fasta öppettider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
