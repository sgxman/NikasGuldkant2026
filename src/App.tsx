import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import HowItWorks from './pages/HowItWorks';
import Inspiration from './pages/Inspiration';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import InspirationDetail from './pages/InspirationDetail';

type PageType = 'start' | 'sortiment' | 'sa-gar-det-till' | 'inspiration' | 'bilder' | 'kontakt' | 'product-detail' | 'inspiration-detail';

interface NavigationParams {
  category?: string;
  id?: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('start');
  const [navigationParams, setNavigationParams] = useState<NavigationParams>({});
  const scrollPositions = useRef<Record<string, number>>({});

  const handleNavigate = (page: string, params?: NavigationParams) => {
    // Spara nuvarande scroll-position
    scrollPositions.current[currentPage] = window.scrollY;
    
    setCurrentPage(page as PageType);
    setNavigationParams(params || {});
  };

  // Återställ scroll-position när sidan ändras
  useEffect(() => {
    const savedPosition = scrollPositions.current[currentPage];
    if (savedPosition !== undefined) {
      // Vänta en frame så att innehållet hinner renderas
      requestAnimationFrame(() => {
        window.scrollTo(0, savedPosition);
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'start':
        return <Home onNavigate={handleNavigate} />;
      case 'sortiment':
        return <Catalog initialCategory={navigationParams.category} onNavigate={handleNavigate} />;
      case 'sa-gar-det-till':
        return <HowItWorks />;
      case 'inspiration':
        return <Inspiration onNavigate={handleNavigate} />;
      case 'kontakt':
        return <Contact />;
      case 'product-detail':
        return <ProductDetail productId={navigationParams.id || ''} onNavigate={handleNavigate} />;
      case 'inspiration-detail':
        return <InspirationDetail caseId={navigationParams.id || ''} onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
