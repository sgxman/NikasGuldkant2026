import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif italic text-2xl text-amber-500 mb-4">Nikas Guldkant</h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Vi hyr ut vackra detaljer för ditt event i Hudiksvall och omnejd.
              Skapa minnesvärda stunder med lantlig elegans.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a href="tel:+46701234567" className="flex items-center text-sm text-stone-300 hover:text-amber-500 transition-colors">
                <Phone size={16} className="mr-2" />
                070-123 45 67
              </a>
              <a href="mailto:info@nikasguldkant.se" className="flex items-center text-sm text-stone-300 hover:text-amber-500 transition-colors">
                <Mail size={16} className="mr-2" />
                info@nikasguldkant.se
              </a>
              <div className="flex items-start text-sm text-stone-300">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Hudiksvall med omnejd</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Snabblänkar</h4>
            <nav className="space-y-2">
              <button onClick={() => onNavigate('start')} className="block text-sm text-stone-300 hover:text-amber-500 transition-colors">
                Start
              </button>
              <button onClick={() => onNavigate('sortiment')} className="block text-sm text-stone-300 hover:text-amber-500 transition-colors">
                Sortiment
              </button>
              <button onClick={() => onNavigate('sa-gar-det-till')} className="block text-sm text-stone-300 hover:text-amber-500 transition-colors">
                Så går det till
              </button>
              <button onClick={() => onNavigate('inspiration')} className="block text-sm text-stone-300 hover:text-amber-500 transition-colors">
                Inspiration
              </button>
              <button onClick={() => onNavigate('kontakt')} className="block text-sm text-stone-300 hover:text-amber-500 transition-colors">
                Kontakt
              </button>
            </nav>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} Nikas Guldkant. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
