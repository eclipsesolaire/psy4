import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique à l'extérieur
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Empêcher le scroll du body quand le menu est ouvert
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Fermer le menu mobile quand on clique sur un lien
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Fonction pour scroll smooth vers les sections
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, naviguer d'abord
      window.location.href = `/#${sectionId}`;
    } else {
      // Si on est déjà sur la page d'accueil, scroll vers la section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 w-11/12 max-w-5xl
     transition-all duration-500 ease-in-out z-50 ${
       isScrolled 
         ? 'bg-white/90 backdrop-blur-xl shadow-2xl border border-green-200/50' 
         : 'bg-green-50/80 backdrop-blur-lg shadow-lg border border-green-100'
     } rounded-3xl`}>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white text-xl">🌸</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-green-800 tracking-wide">
              [VOTRE NOM]
            </h1>
            <p className="text-xs text-green-600 font-medium">
              [VOTRE SPÉCIALITÉ] • [VOTRE VILLE]
            </p>
          </div>
        </div>
        
        {/* Navigation desktop */}
        <div className="hidden md:flex items-center space-x-1">
          <Link 
            to='/' 
            className="group relative px-4 py-2 text-green-700 hover:text-green-600 font-medium transition-all duration-300 rounded-xl hover:bg-green-50"
            onClick={handleMobileLinkClick}
          >
            Accueil
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to='/a-propos' 
            className="group relative px-4 py-2 text-green-700 hover:text-green-600 font-medium transition-all duration-300 rounded-xl hover:bg-green-50"
            onClick={handleMobileLinkClick}
          >
            Mon parcours
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to='/services' 
            className="group relative px-4 py-2 text-green-700 hover:text-green-600 font-medium transition-all duration-300 rounded-xl hover:bg-green-50"
            onClick={handleMobileLinkClick}
          >
            Accompagnement
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to='/contact' 
            className="group relative px-4 py-2 text-green-700 hover:text-green-600 font-medium transition-all duration-300 rounded-xl hover:bg-green-50"
            onClick={handleMobileLinkClick}
          >
            Échangeons
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Bouton hamburger pour mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-green-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-green-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-green-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-2 text-sm text-green-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Disponible</span>
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-green-700 hover:text-green-600 text-sm font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className="text-green-700 hover:text-green-600 text-sm font-medium transition-colors duration-200"
            >
              À propos
            </button>
          </div>
          <Link 
            to='/contact' 
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            RDV
          </Link>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-green-200/50 rounded-b-3xl z-40">
          <div className="px-6 py-4 space-y-2">
            <Link 
              to='/' 
              className="block px-4 py-3 text-green-700 hover:text-green-600 font-medium transition-colors duration-200 rounded-xl hover:bg-green-50"
              onClick={handleMobileLinkClick}
            >
              Accueil
            </Link>
            <Link 
              to='/a-propos' 
              className="block px-4 py-3 text-green-700 hover:text-green-600 font-medium transition-colors duration-200 rounded-xl hover:bg-green-50"
              onClick={handleMobileLinkClick}
            >
              Mon parcours
            </Link>
            <Link 
              to='/services' 
              className="block px-4 py-3 text-green-700 hover:text-green-600 font-medium transition-colors duration-200 rounded-xl hover:bg-green-50"
              onClick={handleMobileLinkClick}
            >
              Accompagnement
            </Link>
            <Link 
              to='/contact' 
              className="block px-4 py-3 text-green-700 hover:text-green-600 font-medium transition-colors duration-200 rounded-xl hover:bg-green-50"
              onClick={handleMobileLinkClick}
            >
              Échangeons
            </Link>
            
            {/* Boutons d'action mobile */}
            <div className="pt-4 border-t border-green-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-green-600 mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Disponible</span>
              </div>
              <Link 
                to='/contact' 
                className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-center font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
                onClick={handleMobileLinkClick}
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


