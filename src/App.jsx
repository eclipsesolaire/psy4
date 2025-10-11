import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import APropos from './pages/APropos';
import Contact from './pages/Contact';

// Composant pour scroller vers le haut à chaque changement de page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll vers le haut de la page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Ajouter le style CSS pour le scroll smooth
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      * {
        scroll-behavior: smooth;
      }
      
      /* Effet de focus pour les liens */
      a:focus {
        outline: 2px solid #10b981;
        outline-offset: 2px;
        border-radius: 4px;
      }
      
      /* Animation pour les transitions de page */
      .page-transition {
        animation: fadeIn 0.3s ease-in-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    // Fonction pour scroll smooth sur les liens internes
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Ajouter les event listeners
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow page-transition">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/services" element={<Services />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 