import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-green-800 text-white">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Informations principales */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">[VOTRE NOM]</h3>
          <p className="text-green-100 mb-4 leading-relaxed">
            [VOTRE DESCRIPTION PROFESSIONNELLE - quelques mots sur votre approche et votre expérience]
          </p>
          <div className="flex space-x-4">
            <a href="mailto:[VOTRE_EMAIL]" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
              <span className="text-lg">📧</span>
            </a>
            <a href="tel:[VOTRE_TELEPHONE]" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
              <span className="text-lg">📞</span>
            </a>
            <a href="[VOTRE_LIEN_GOOGLE_MAPS]" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
              <span className="text-lg">📍</span>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-green-100 hover:text-white transition-colors duration-200">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/a-propos" className="text-green-100 hover:text-white transition-colors duration-200">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-green-100 hover:text-white transition-colors duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-green-100 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact rapide */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-green-100">
            <p><a href="mailto:[VOTRE_EMAIL]" className="hover:text-white transition-colors">📧 [VOTRE_EMAIL]</a></p>
            <p><a href="tel:[VOTRE_TELEPHONE]" className="hover:text-white transition-colors">📞 [VOTRE_TELEPHONE]</a></p>
            <p><a href="[VOTRE_LIEN_GOOGLE_MAPS]" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">📍 [VOTRE_ADRESSE]<br />[VOTRE_CODE_POSTAL] [VOTRE_VILLE]</a></p>
            <p className="text-sm mt-4">
              <strong>Horaires :</strong><br />
              [VOS_HORAIRES]<br />
              Urgences : <a href="tel:15" className="hover:text-white">15</a> ou <a href="tel:112" className="hover:text-white">112</a>
            </p>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="border-t border-green-700 mt-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-100 text-sm">
            © 2024 [VOTRE NOM] - [VOTRE TITRE]. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-green-100 hover:text-white text-sm transition-colors duration-200">
              Mentions légales
            </Link>
            <Link to="#" className="text-green-100 hover:text-white text-sm transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 