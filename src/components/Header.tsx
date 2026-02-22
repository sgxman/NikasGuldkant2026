import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'start', label: 'Start' },
    { id: 'sortiment', label: 'Sortiment' },
    { id: 'sa-gar-det-till', label: 'Så går det till' },
    { id: 'inspiration', label: 'Inspiration' },
    { id: 'kontakt', label: 'Kontakt' }
  ];

  return (
    <header className="bg-stone-50/95 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex flex-col">
            <button
              onClick={() => onNavigate('start')}
              className="font-lavishly text-2xl md:text-3xl text-amber-800 hover:text-amber-900 transition-colors"
            >
              Nikas Guldkant
            </button>
            <span className="text-xs md:text-sm text-stone-600 mt-1">Hudiksvall med omnejd</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-amber-800'
                    : 'text-stone-700 hover:text-amber-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-stone-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-amber-800'
                    : 'text-stone-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
