import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import APropos from './pages/APropos';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // forcer en haut (instantané pour éviter sauts étranges)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  // Utiliser automatiquement le chemin issu de PUBLIC_URL (défini via "homepage") ou "/" en local
  const basename = process.env.PUBLIC_URL
    ? new URL(process.env.PUBLIC_URL).pathname || '/'
    : '/';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />

          {/* fallback : si aucune route ne matche, retour accueil (évite page vide) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}