import Hero from '../components/Hero';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <Hero
        title="Kontakta oss"
        subtitle="Vi ser fram emot att höra från dig och hjälpa dig skapa ditt drömevt"
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
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-amber-800" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-stone-800 mb-1">Telefon</h3>
                  <a href="tel:+46701234567" className="text-stone-600 hover:text-amber-800 transition-colors">
                    070-123 45 67
                  </a>
                  <p className="text-sm text-stone-500 mt-1">
                    Ring för snabb kontakt och bokning
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-amber-800" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-stone-800 mb-1">E-post</h3>
                  <a href="mailto:info@nikasguldkant.se" className="text-stone-600 hover:text-amber-800 transition-colors">
                    info@nikasguldkant.se
                  </a>
                  <p className="text-sm text-stone-500 mt-1">
                    Mejla för offert och detaljerade förfrågningar
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-amber-800" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-stone-800 mb-1">Område</h3>
                  <p className="text-stone-600">Hudiksvall med omnejd</p>
                  <p className="text-sm text-stone-500 mt-1">
                    Vi levererar i hela Hudiksvall och närliggande områden
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-amber-800" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-stone-800 mb-1">Öppettider</h3>
                  <p className="text-stone-600">Mån-Fre: 09:00-18:00</p>
                  <p className="text-stone-600">Lör-Sön: Efter överenskommelse</p>
                  <p className="text-sm text-stone-500 mt-1">
                    Flexibla tider för hämtning och återlämning
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-sm border border-stone-200 p-8">
            <h2 className="text-2xl font-serif italic text-stone-800 mb-6">
              Skicka förfrågan
            </h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-2">
                  Datum för event
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-2">
                  Antal gäster
                </label>
                <input
                  type="number"
                  id="guests"
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                  placeholder="Berätta om ditt event och vad du behöver hjälp med..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-amber-700 text-white font-medium rounded-sm hover:bg-amber-800 transition-colors"
              >
                Skicka förfrågan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
