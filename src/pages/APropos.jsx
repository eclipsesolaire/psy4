import React from 'react';
import { Link } from 'react-router-dom';

const APropos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Mon Parcours
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Une psychologue passionnée par l'accompagnement humain, 
            avec une approche bienveillante et professionnelle.
          </p>
        </div>
      </section>

      {/* Présentation personnelle */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-white text-5xl">🌸</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">[VOTRE NOM]</h3>
              <p className="text-green-700 mb-6 italic">
                "[VOTRE CITATION PERSONNELLE - quelques mots sur votre approche et votre passion]"
              </p>
              <div className="bg-white p-4 rounded-2xl">
                <p className="text-green-600 font-semibold mb-2">[VOTRE TITRE]</p>
                <p className="text-green-700 text-sm">[VOTRE EXPÉRIENCE]</p>
              </div>
            </div>
            
  <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Qui suis-je ?</h2>
              <p className="text-lg text-green-700 mb-6 leading-relaxed">
                [VOTRE FORMATION - diplômes et universités]
              </p>
              <p className="text-lg text-green-700 mb-6 leading-relaxed">
                [VOTRE APPROCHE - expliquez votre méthode et vos valeurs professionnelles]
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span className="text-green-700">[VOS QUALIFICATIONS 1]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span className="text-green-700">[VOS QUALIFICATIONS 2]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </span>
                  <span className="text-green-700">[VOS QUALIFICATIONS 3]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation et spécialisations */}
      <section className="py-20 px-6 bg-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Formation & Spécialisations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Formation initiale</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800">[VOTRE DIPLÔME 1]</h4>
                  <p className="text-green-600 text-sm">[VOTRE UNIVERSITÉ 1]</p>
                  <p className="text-green-700 text-sm">[ANNÉE]</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800">[VOTRE DIPLÔME 2]</h4>
                  <p className="text-green-600 text-sm">[VOTRE UNIVERSITÉ 2]</p>
                  <p className="text-green-700 text-sm">[ANNÉE]</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Formations continues</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800">[VOTRE FORMATION 1]</h4>
                  <p className="text-green-600 text-sm">[INSTITUT 1]</p>
                  <p className="text-green-700 text-sm">[PÉRIODE]</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800">[VOTRE FORMATION 2]</h4>
                  <p className="text-green-600 text-sm">[INSTITUT 2]</p>
                  <p className="text-green-700 text-sm">[PÉRIODE]</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-800">[VOTRE FORMATION 3]</h4>
                  <p className="text-green-600 text-sm">[INSTITUT 3]</p>
                  <p className="text-green-700 text-sm">[PÉRIODE]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">Mes domaines d'expertise</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🧠</span>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Anxiété & Stress</h4>
                <p className="text-green-700 text-sm">Gestion des troubles anxieux</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">💙</span>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Dépression</h4>
                <p className="text-green-700 text-sm">Accompagnement des troubles de l'humeur</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">💔</span>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Trauma</h4>
                <p className="text-green-700 text-sm">Traitement des événements traumatiques</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">👥</span>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Relations</h4>
                <p className="text-green-700 text-sm">Thérapie de couple et familiale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approche thérapeutique */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Mon Approche Thérapeutique
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Écoute Bienveillante</h3>
              <p className="text-green-700 leading-relaxed">
                Un espace de non-jugement où vous pouvez exprimer vos émotions et vos préoccupations 
                en toute sécurité.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Approche Personnalisée</h3>
              <p className="text-green-700 leading-relaxed">
                Chaque thérapie est unique. Je m'adapte à vos besoins, votre rythme et votre personnalité 
                pour construire un accompagnement sur mesure.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">Développement des Ressources</h3>
              <p className="text-green-700 leading-relaxed">
                Mon objectif est de vous aider à découvrir et cultiver vos propres ressources pour 
                devenir autonome dans votre bien-être.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-green-100 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Ma philosophie</h3>
            <p className="text-lg text-green-700 leading-relaxed max-w-4xl mx-auto">
              "[VOTRE PHILOSOPHIE - vos valeurs et votre vision du métier]"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à nous rencontrer ?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Un premier échange pour faire connaissance et voir si nous sommes faits pour cheminer ensemble.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors duration-200 shadow-lg"
            >
              Prendre rendez-vous
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Découvrir mes services
            </Link>
          </div>
        </div>
      </section>
  </div>
);
};

export default APropos; 