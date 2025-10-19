import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in window.history) {
      try { window.history.scrollRestoration = 'manual'; } catch (e) { /* ignore */ }
    }
  }, []);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    // Supprime le hash pour éviter le jump vers une ancre
    if (hash) {
      window.history.replaceState(null, '', pathname + window.location.search);
    }

    // Forcer le scroll en haut après le rendu
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname, hash]);

  return null;
}