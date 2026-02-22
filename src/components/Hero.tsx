import { Phone, Mail } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, image, showCTA = false }: HeroProps) {
  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/30 to-stone-900/60" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-lavishly text-white mb-6 leading-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-stone-100 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}

          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+46701234567"
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-700 text-white font-medium rounded-sm hover:bg-amber-800 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                Ring och boka
              </a>
              <a
                href="mailto:info@nikasguldkant.se"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-stone-800 font-medium rounded-sm hover:bg-stone-50 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                Maila för offert
              </a>
            </div>
          )}
        </div>

        <div className="absolute bottom-8 right-4 md:bottom-12 md:right-8 lg:bottom-16 lg:right-12">
          <h2 className="font-lavishly text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl opacity-60 pointer-events-none">
            Nikas Guldkant
          </h2>
        </div>
      </div>
    </div>
  );
}
